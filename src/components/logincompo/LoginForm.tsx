import { useForm } from "react-hook-form";
import { css, styled } from "twin.macro";
const Regex = {email:/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g }; //이메일 형식확인

interface ILoginForm {
  email: string;
  password : string;
}
export default function LoginForm(){
  
  const {register, handleSubmit, formState: {errors}, watch} = useForm<ILoginForm>({mode: "onChange"});
  const emailChecker = register("email",
  {
    required : {value : true, message : "이메일을 입력해 주세요"},
    pattern : {value: Regex.email, message : '올바른 이메일 형식을 입력해주세요'},
  });
  const passwordChecker = register("password",
  {
    required : {value : true, message : "비밀번호를 입력해 주세요"},
    //패스워드 체커
  });
  const onValid = (data : ILoginForm) => {
    console.log('로그인폼데이터',data);
  }
    return(
    <Form onSubmit = {handleSubmit(onValid)} >
      
      <EmailLabel className='e-label' htmlFor="email"> <span>Email</span></EmailLabel>
      <LoginInput type="email" required {...emailChecker} placeholder="email입력해주세요" />
      <ErrorMessage>{errors.email?.message}</ErrorMessage>
      
      <PwLabel htmlFor="password"> <span>Password</span></PwLabel>
      <LoginInput required type="password" {...passwordChecker} placeholder="비밀번호입력해주세요"/>
      <ErrorMessage>{errors.password?.message}</ErrorMessage>
      
      <LoginButton type="submit"> 로그인 </LoginButton>
    </Form>
  )
}
const LoginButton = styled.button([
  css`
    width : 250px;
    height: 50px;
    margin-top: 20px;
    border-radius: 25px;
    background-color: #0276e3;
    color: #fff;

  `
]);
const Form = styled.div([
  css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin:20px 0px;
  `
]);
const LoginInput = styled.input([
  css`
    width : 250px;
    height: 50px;
    border-radius: 3px;
    padding: 5px 10px;
    outline: none;
    background-color: #ecf5fd;
    
  `
])
const EmailLabel = styled.label([
  css`
    position: relative;
    right: 100px;
    font-size: 15px;
    /* top: 38px;
    right: 90px; */
    color: #7a7a7a;
    span {
      transition: all .3s ease;
    }
  `
]);
const PwLabel = styled.label([
  css`
    color: #7a7a7a;
    position: relative;
    right:85px;
    font-size: 15px;
    /* top: 38px;
    right: 75px; */
  `
])
const ErrorMessage = styled.span([
  css`
    color: #fc4c4c;
    font-size: 10px;
  `
])