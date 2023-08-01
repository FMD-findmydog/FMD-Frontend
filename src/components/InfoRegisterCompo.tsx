import {  IEntity } from "@/pages/register/report";
import { Fragment, useEffect, useState } from "react";
import {useForm} from "react-hook-form";
import { css, styled } from "twin.macro";
export interface IRegisterProps {
  phoneNumber : boolean;
  setIsBtnActive: React.Dispatch<React.SetStateAction<boolean>>;
}
const ageRange = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
const weightRange = ['0~3kg','3~5kg','5~10kg','10~15kg','15~20kg','20~25kg','25~30kg','30~40kg','40kg이상'];
export default function InfoRegisterCompo({setIsBtnActive, phoneNumber}: IRegisterProps){
  const {register, handleSubmit, watch,  formState: {errors}}=useForm<IEntity>();
  const watchAll = Object.values(watch());
  const onValid = (data:any) => {
    data.preventDefault();
    console.log("새로들어온 레포트데이터",data.target.value);
  }
  useEffect(()=> {
    if(watchAll.every((v) => v)){
      setIsBtnActive(true);
    }else {
      setIsBtnActive(false);
    }
  }, [watchAll]);
  return (
    <FormContainer>
    <Form onSubmit={onValid}>
      <h1 className="text-2xl font-bold">실종 개체 정보 등록</h1>
      <h2 className="text-xl font-semibold mt-2">개체 기본 정보</h2>
        <FormProperty>
          <label>이름</label>
          <FormInput {...register('name', {required: true})}/>
        </FormProperty>
        
        <FormProperty>
          <label>성별</label>
          <div><FormInput {...register('gender', {required: true})} type="radio" value="0" name="gender"/><span>  암컷</span></div>
          <div><FormInput {...register('gender', {required: true})} type="radio" value="1" name="gender"/><span>  수컷</span></div>
        </FormProperty>
        
        <FormProperty>
          <label>중성화 여부</label>
          <div><FormInput {...register('neuterSurge', {required: true})} type="radio" value="0" name="n-Surge"/><span>  X</span></div>
          <div><FormInput {...register('neuterSurge', {required: true})} type="radio" value="1" name="n-Surge"/><span>  O</span></div>
        </FormProperty>

        <FormProperty>
          <label>인식칩 삽입 여부</label>
          <div><FormInput {...register('veriChip', {required: true})} type="radio" value="0" name="chip"/><span>  X</span></div>
          <div><FormInput {...register('veriChip', {required: true})} type="radio" value="1" name="chip"/><span>  O</span></div>
        </FormProperty>
        
        <FormProperty>
          <label>모색(털색상)</label>
          <FormInput {...register('color', {required: true})} />
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
          <FormInput {...register('date', {required: true})} placeholder="YYYY-MM-DD"/>
        </FormProperty>

        <FormProperty>
          <label> 특이사항</label>
          <textarea 
          placeholder="ex) 사람에 대한 경계심여부"
          {...register('significant')}/>
        </FormProperty>
        {/* 폼임력 테스트용 이후 삭제하기 */}

        {
          phoneNumber === true
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
      border-bottom: 1.5px solid  #0276e3;
    }

  `
])

const FormInput = styled.input([
  css`
    border-bottom: 1.5px solid  #0276e3;
  `
])