import { useState } from 'react'
import { useForm } from 'react-hook-form'
import tw, { css, styled } from 'twin.macro'

export default function Signup() { //여기가 최종

  //[useForm 관련 정보]
  const regExpEm = /^[A-Za-z0-9_]+[A-Za-z0-9]*[@]{1}[A-Za-z0-9]+[A-Za-z0-9]*[.]{1}[A-Za-z]{1,3}$/;
  const regExgPw = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/;
  
  interface UserValue { //회원가입에 필요한 정보
    email: string;
    password: string;
    nickname: string;
    passwordConfirm: string;
    idCheck: boolean;
    emailCheck: boolean;
    numberCheck: boolean;
  }

  const {
    register,
    watch,
    setValue,
    formState: { errors, isValid },
  } = useForm<UserValue>({
    mode: "onChange",
  });


  //[state 변수]
  const [admireNumber, setAdmireNumber] = useState("");
  const [disabled, setDisabled] = useState({ //이메일, 인증번호 disabled 처리
    email: false,
    admire: true,
  })
  const [confirm, setConfirm] = useState({ //확인 완료된 정보 확인하기
    email: false,
    admire: false,
    nickname: false
  })
  const [show, setShow] = useState<boolean>(false); //비밀번호 보이기/숨기기
  const [agreed1, setAgreed1] = useState<boolean>(false); //약관동의1
  const [agreed2, setAgreed2] = useState<boolean>(false); //약관동의1


  //[onChange 관련 메소드]
  const onChangeAdmir = (e:any) => {
    setAdmireNumber(e.target.value);
  }

  //버튼 관련 메소드 (이메일 인증, 인증번호 확인, 비밀번호 보이기숨기기, )
  const emailClick = () => { 
    //이메일 인증 요청 -> useForm watch 사용
    //서버 요청이 성공하면 사용가능한 이메일입니다. (status:200)
    //실패하면 이미 사용중이거나 유효하지 않는 이메일입니다.
    if(errors.email){ //형식이 안맞으면 다시 시도 요구
      console.log("이메일을 다시 확인해주세요.")
    } else{
      console.log(watch("email"), "이메일 인증 요청"); //console 삭제
    }

    //res.status === 200인 경우, admireClick able로 바꾸기
    setDisabled({
      email: false,
      admire: false,
    });

  }

  const admireClick = () => {
    //인증번호 확인
    //admireNumber와 watch("email")로 api 호출하기
    console.log(watch("email"), admireNumber, "인증번호 확인하기"); //console 삭제
    
    //res.status === 200인 경우 email, admire 모두 disabled
    setDisabled({
      email: true,
      admire: true,
    });
    setConfirm({
      ...confirm,
      ["email"]:true,
      ["admire"]:true,
    })
  }

  const showClick = (e:React.MouseEvent<HTMLButtonElement>) => {
    setShow((current)=>!current);
  }

  const nicknameClick = () => {
    if(errors.nickname){
      console.log("닉네임을 다시 확인해주세요.")
    } else{
      //status === 200이면 
      //모달창에 닉네임 가능한지, 가능하면 이걸로 선택할건지 물어보는 창 띄우기, 확인후 변경 금지
      console.log("닉네임 중복 확인");
      setConfirm({
        ...confirm,
        ["nickname"]:true,
      })
    }
  }

  const submitClick = () => {
    //모달창 메시지
    if(errors.email){
      console.log("이메일을 다시 확인해주세요.");
    }
    else if(errors.password){
      console.log("비밀번호를 다시 확인해주세요.");
    }
    else if(watch("password") !== watch("passwordConfirm")){
      console.log("비밀번호를 확인해주세요.");
    }
    else if(errors.nickname){
      console.log("닉네임을 다시 확인해주세요.")
    }
    else{ //모든 조건 달성
      console.log(watch("email"), watch("password"), watch("nickname"),"제출하기");
    }


  }


  return (
    <OuterStyle>
      <Title>회원가입</Title>
      <InnerStyle>
      <DivStyle>
        <p>이메일</p>
        <InputBtnSet>
          <InputStype
            id='email'
            type='userEmail'
            placeholder='이메일 입력'
            {...register("email", { required: true, pattern: regExpEm })}
            disabled={disabled.email?true:false}
          />
          <BtnStyle color="#414BB2" size={33} isfinal={false} onClick={emailClick}>
            이메일 인증
          </BtnStyle>
        </InputBtnSet>
        <InputBtnSet>
          <InputStype
            placeholder='인증번호를 입력해주세요'
            type='text'
            id='admireNumber'
            value={admireNumber}
            onChange={onChangeAdmir}
            disabled={disabled.admire?true:false}
            />
          <BtnStyle color="#414BB2" size={33} isfinal={false} onClick={admireClick}>
            인증번호 확인
          </BtnStyle>
        </InputBtnSet>
        {errors.email?.type === "required" && <div>이메일을 입력해주세요</div>}
        {errors.email?.type === "pattern" && <div>잘못된 이메일 형식입니다</div>}
      </DivStyle>

      <DivStyle>
        <p>비밀번호</p>
        <InputStypePW>
          <input 
            id='userPw'placeholder='비밀번호 입력' type={show ? "text" : "password"}
            className='w-4/5'
            {...register("password", { required: true, pattern: regExgPw })}
          />
          <SightBtn onClick={showClick}>{show?<img src='/assets/images/show.png' className='w-4'/>:<img src='/assets/images/hide.png' className='w-4'/>}</SightBtn>
        </InputStypePW>
        {errors.password?.type === "required" && <div>비밀번호를 입력해주세요</div>}
        {errors.password?.type === "pattern" && <div>비밀번호는 영문+숫자+특수문자 조합으로 8자리 이상 입력해주세요</div>}
        <InputStypePW>
          <input 
            id='userPwConfirm'placeholder='비밀번호 확인' type={show ? "text" : "password"}
            className='w-4/5'
            {...register("passwordConfirm", { 
              required: true, 
              validate: {
                check: (value) => {
                  if(watch("password") !== value) return "비밀번호가 일치하지 않습니다.";
                }
              }
            })}
          />
          <SightBtn onClick={showClick}>{show?<img src='/assets/images/show.png' className='w-4'/>:<img src='/assets/images/hide.png' className='w-4'/>}</SightBtn>
        </InputStypePW>
        {errors.passwordConfirm?.type === "required" && (
          <div>비밀번호 확인을 위해 입력해주세요</div>
        )}
        {errors.passwordConfirm && (
          <div>{errors.passwordConfirm.message}</div>
        )}
      </DivStyle>
      
      <DivStyle>
        <p>닉네임</p>
        <InputBtnSet>
          <InputStype
            id='userNickname'placeholder='닉네임 입력'
            {...register("nickname", { required: true, minLength: 2, maxLength: 8 })}
            disabled={confirm.nickname?true:false}
          />
          <BtnStyle color="#414BB2" size={33} isfinal={false} onClick={nicknameClick}>
            중복 확인
          </BtnStyle>
        </InputBtnSet>
        {errors.nickname && (<div>2~8글자 사이의 닉네임으로 설정해주세요</div>)}
      </DivStyle>

      <DivStyle className='flex flex-col'>
        <Checkbox checked={agreed1} onChange={setAgreed1}>
          (필수) 이용약관 동의
        </Checkbox>
        <Checkbox checked={agreed2} onChange={setAgreed2}>
          (필수) 개인정보 수집 및 이용동의
        </Checkbox>
      </DivStyle>

      <span className='m-4'></span>
      <BtnStyle color={"#2D9BF0"} type="submit" size={66} isfinal={true} disabled={confirm.admire&&confirm.email&&confirm.nickname&&agreed1&&agreed2?false:true} onClick={submitClick}>
        회원가입하기
      </BtnStyle>
      </InnerStyle>

    </OuterStyle>
  )
}

//내부 컴포넌트
interface BtnTheme {
  color: string;
  size: number;
  isfinal: boolean;
}
const BtnStyle = styled.button<BtnTheme>(({color, size, isfinal, disabled})=>[
  tw`text-center border-2 py-3 rounded-md`,
  `
    @media screen and (max-width: 767px){
      padding: ${isfinal ? "0.5rem" : "0.25rem"};
      font-size: ${isfinal ? "1rem" : "0.875rem"};
    }
    color: ${disabled?"border-slate-400":color};
    border-color: ${disabled?"border-slate-400":color};
    width: ${size}%;
    &:hover {
      filter: drop-shadow(0 10px 8px rgb(0 0 0 / 0.04)) drop-shadow(0 4px 3px rgb(0 0 0 / 0.1));
    }
  `
])


//내부 스타일 모음
const Title = styled.div([
    tw`text-4xl font-bold text-center my-5`,
    css`
      @media screen and (max-width: 767px){
        font-size: 1.5rem; /* 24px */
      }
    `
])

const OuterStyle = styled.div([
  tw`flex flex-col items-center m-24`,
  css`
    @media screen and (max-width: 767px){
      margin : 2rem;
    }
  `
])

const InnerStyle = styled.div([
  tw`flex flex-col items-center`,
  css`
    @media screen and (min-width: 1024px){
      width:66%;
      padding: 1.5rem; /* 24px */
      box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
    }
  `
])

const DivStyle = styled.div([
  tw`w-full my-3`,
  css`
    @media screen and (max-width: 767px){
      width:100%;
    }
  `
  
])

const InputStype = styled.input([
  tw`p-3 border-2 w-3/5 rounded-md`, //여기에 잘못 작성했을 때 스타일 추가
  css`
    @media screen and (max-width: 767px){
      padding:0.25rem;
      font-size: 0.875rem; /* 14px */
    }
  `
])

const InputStypePW = styled.label([
  tw`relative inline-block p-3 my-1 border-2 w-3/5 rounded-md`,
  css`
    @media screen and (max-width: 767px){
      width:100%;
      padding:0.25rem;
      font-size: 0.875rem; /* 14px */
    }
  `  
])

const SightBtn = styled.button([
  tw`absolute top-5 right-5`,
  css`
  @media screen and (max-width: 767px){
    top: 0.25rem; /* 4px */
    right: 0.25rem;
  }
  `
])


const InputBtnSet = styled.div([
  tw`flex justify-between my-2`
  
])

interface checkProps {
  children:string
  checked:boolean,
  onChange:any,
};

const Checkbox = ( {children, checked, onChange }:checkProps) => (
  <div className='flex'>
  <label>
    <input
      type="checkbox"
      checked={checked}
      onChange={({ target: { checked } }) => onChange(checked)}
      className='mr-2'
    />
    {children}
  </label>
  <button className="ml-2">{">"}</button>
  {/* 모달창으로 약관 보여주기 */}
  </div>
)