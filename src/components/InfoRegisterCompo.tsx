import { Fragment } from "react";
import {useForm} from "react-hook-form";
import { css, styled } from "twin.macro";
interface IEntity { //실종개체정보
  name : string, 
  gender : number,      //암컷 : 0 , 수컷 1
  neuterSurge : number, //중성화 O : 1, 중성화 X : 0
  veriChip : number,    //인식칩 O : 0, 인식칩 X : 1
  age: number,
  weight: string,
  color : string,
  date : string,
  lon : string, 
  lan : string,
  significant : string, //특이사항
  imgURL :string,
  address : string,
}

const ageRange = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
const weightRange = ['0~3kg','3~5kg','5~10kg','10~15kg','15~20kg','20~25kg','25~30kg','30~40kg','40kg이상'];
export default function InfoRegisterCompo(){
  const {register, handleSubmit, formState: {errors}}=useForm<IEntity>();
  const onValid = () => {

  }
  return (
    <FormContainer>
    <Form onSubmit={onValid}>
      <h1>실종 개체 정보 등록</h1>
      <h2>개체 기본 정보</h2>
        <FormProperty>
          <label>이름</label>
          <input {...register('name')}/>
        </FormProperty>
        
        <FormProperty>
          <label>성별</label>
          <input {...register('gender')} type="radio" value="0" name="gender">암컷</input>
          <input {...register('gender')} type="radio" value="1" name="gender"/>수컷
        </FormProperty>
        
        <FormProperty>
          <label>중성화 여부</label>
          <input {...register('neuterSurge')} type="radio" value="0" name="n-Surge"/>X
          <input {...register('neuterSurge')} type="radio" value="1" name="n-Surge"/>O
        </FormProperty>

        <FormProperty>
          <label>인식칩 삽입 여부</label>
          <input {...register('veriChip')} type="radio" value="0" name="chip"/>X
          <input {...register('veriChip')} type="radio" value="1" name="chip"/>O
        </FormProperty>
        
        <FormProperty>
          <label>모색(털색상)</label>
          <input {...register('color')} />
        </FormProperty>

        <FormProperty>
          <label>나이</label>
          <select {...register('age')}>
            {ageRange.map((v,_) => <option key={v} value={v}>{v}살</option>)}
          </select>
        </FormProperty>

        <FormProperty>
          <label>몸무게</label>
          <select {...register('weight')}>
            {weightRange.map((v,_) => <option key ={v}value={v}>{v}</option>)}
          </select>
        </FormProperty>
      
      <h2>실종 정보</h2>

        <FormProperty>
          <label> 실종 날짜</label>
          <input {...register('date')}/>
        </FormProperty>

        <FormProperty>
          <label> 특이사항</label>
          <textarea {...register('significant')}/>
        </FormProperty>
    </Form>
    </FormContainer>
  )
}
const FormContainer = styled.div([
  css`
    width: 80vw;
    height: 80vh;
    background-color: aqua;
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
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    border: 2px solid gray;
    margin : 10px 0px;
  `
])