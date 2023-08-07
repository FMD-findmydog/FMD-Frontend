import { IEntity } from "@/pages/register/report";
import { ChangeEvent, Fragment, useEffect, useState } from "react";
import {useForm} from "react-hook-form";
import tw, { css, styled, TwStyle } from "twin.macro";
import RegisterLocation from "./utils/RegisterLocation";
import { EntityState, photoAtom } from "@/store/atoms";
import { useRecoilState, useRecoilValue } from "recoil";
import { useRouter } from "next/router";
import { palette } from "@/pages/register/style";
export interface IRegisterProps {
  isPaper: boolean
  setIsBtnActive: React.Dispatch<React.SetStateAction<boolean>>;
}
const ageRange = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
const weightRange = ['0~3kg','3~5kg','5~10kg','10~15kg','15~20kg','20~25kg','25~30kg','30~40kg','40kg이상'];

export default function InfoRegisterCompo({setIsBtnActive, isPaper}: IRegisterProps){
  const [entity, setEntity] = useRecoilState<IEntity>(EntityState); //entity 정보 저장용
  const { register, handleSubmit, watch, formState } = useForm<IEntity>({
    mode: "onChange",
  });
  const mainphotoProp = useRecoilValue(photoAtom);
  const watchAll = Object.values(watch());
  const router= useRouter();
  const onValid = (data:IEntity) => {
    isPaper ? registPaper() : registReport() ;
  }
  const registReport = () => { // 실종신고 페이지에서 버튼 누를시 실행

  };
  const registPaper = () => { //전단지 페이지에서 버튼 누를시 실행
    setEntity({
      ...entity,
      name: watch("name"),
      gender: watch("gender"),
      neuterSurge: watch("neuterSurge"),
      veriChip: watch("veriChip"),
      age: watch("age"),
      weight: watch("weight"),
      color: watch("color"),
      date: watch("date"),
      significant: watch("significant"),
      phone: watch("phone"),
      location: watch("location"),
      imgURL: mainphotoProp.imgURL as string,
    });
    router.push({pathname : "/flyers"});
  }
  const handleDateChange = (e: ChangeEvent<HTMLInputElement>) => {
    const {value} = e.currentTarget;
    const RegNotNum = /[^0-9]/g
    const onlyNum = value.replace(RegNotNum, '');//숫자가 아닌경우 공백으로 치환
    
    let DataFormat;
    let RegDateFormat;
    
  }
  // useEffect(()=> {
  //   if(watchAll.every((v) => v)){
  //     setIsBtnActive(true);
  //   }else {
  //     setIsBtnActive(false);
  //   }
  // }, [watchAll]);
  return (
    <FormContainer>
    <Form onSubmit={handleSubmit((data) => {
      try { onValid(data)} catch(e){console.log(e)}
    })}>
      <h1 className="text-2xl font-bold">실종 개체 정보 등록</h1>
      <h2 className="text-xl font-semibold mt-2">개체 기본 정보</h2>
        <FormProperty>
          <label>이름</label>
          <FormInput {...register('name', {required: true})} placeholder="실종개체의 이름을 입력하세요"/>
        </FormProperty>
        
        <FormProperty>
          <label>성별</label>
          <div><FormInput {...register('gender', {required: true})} type="radio" value="0" name="gender"/><span>  암컷</span></div>
          <div><FormInput {...register('gender', {required: true})} type="radio" value="1" name="gender"/><span>  수컷</span></div>
        </FormProperty>
        
        <FormProperty>
          <label>중성화 여부</label>
          <div><FormInput {...register('neuterSurge', {required: true})} type="radio" value="false" name="neuterSurge"/><span>  X</span></div>
          <div><FormInput {...register('neuterSurge', {required: true})} type="radio" value="true" name="neuterSurge"/><span>  O</span></div>
        </FormProperty>

        <FormProperty>
          <label>인식칩 삽입 여부</label>
          <div><FormInput {...register('veriChip', {required: true})} type="radio" value="false" name="veriChip"/><span>  X</span></div>
          <div><FormInput {...register('veriChip', {required: true})} type="radio" value="true" name="veriChip"/><span>  O</span></div>
        </FormProperty>
        
        <FormProperty>
          <label>모색(털색상)</label>
          <FormInput {...register('color', {required: true})} placeholder="털색상을 입력하세요"/>
        </FormProperty>

        <FormProperty>
          <label>나이</label>
          <select {...register('age', {required: true})}>
            {ageRange.map((v,_) => <option key={v} value={v}>{v}살</option>)}
          </select>
        </FormProperty>

        <FormProperty>
          <label>몸무게</label>
          <select {...register('weight', {required: true})}>
            {weightRange.map((v,_) => <option key ={v}value={v}>{v}</option>)}
          </select>
        </FormProperty>
      
        <h2 className="text-xl font-semibold">실종 정보</h2>

        <FormProperty>
          <label> 실종 날짜</label>
          <FormInput {...register('date', {required: true})} placeholder="YYYY-MM-DD" onChange ={handleDateChange}/>
        </FormProperty>
          
          <FormProperty>
            <label> 실종 장소 </label>
            { isPaper ?  <FormInput {...register('location', {required : true})} placeholder="시/동/구/근처"/> : <RegisterLocation report={isPaper} />}
          </FormProperty>
          
        <FormProperty>
          <label> 특이사항</label>
          <textarea 
          placeholder="ex) 사람에 대한 경계심여부"
          {...register('significant')}/>
        </FormProperty>

        {
            isPaper === true
          ?
          <>
          <h2 className="text-xl font-semibold mt-2"> 보호자 정보 
            <span className="text-xs font-thin">   해당 정보는 사이트에 의해 수집되지 않습니다. 전단지 작성용으로만 사용됩니다.</span>
          </h2>
          <FormProperty>
            <label> 보호자 연락처 </label>
            <FormInput {...register('phone')} placeholder="000-0000-0000"/>
          </FormProperty>
          </>
          :
          null
        }
        <Button disabled={!formState.isValid} >
          {
            isPaper === true ? "전단지 만들기" : "등록하기"
          }
        </Button>
    </Form>
    </FormContainer>
  )
}
//infoRegisterCompo
const FormContainer = styled.div([
  css`
    @media screen and (max-width: 820px){
      width: 80vw;
      margin: 20px 0px;
    }
  `
])
const Form = styled.form([
  css`
    display: flex;
    flex-direction: column;
  `
])
const FormProperty = styled.div([
  css`
    display:flex;
    flex-direction: row;
    justify-content: space-between;
    padding-right: 20px;
    margin : 10px 0px;
    >* {
      width: 10em ;
    }
    >input, textarea{
      width: 20em;
    }
    >input, lable {
      height: 45px;
    }
    >label {
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      align-items: center;
    }
  `
])

const FormInput = styled.input([
  css`
    padding : 15px 20px;
    border: 1.5px solid ${palette.lightgray};
    outline: none;
    border-radius: 4px;
    :focus {
      border: 1px solid ${palette.blue};
    }
  `
])

//버튼 활성화/비활성화색상바뀌도록
const Button =  styled.button`
    width : 500px;
    height: 50px;
    margin-top: 20px;
    border-radius: 25px;
    color: #fff;
    background-color: ${props => props.disabled ? palette.gray : palette.blue };
    @media screen and (max-width: 820px){
      width: 80vw;
    }
`;

