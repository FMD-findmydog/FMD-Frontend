import { useForm } from "react-hook-form";
import { css, styled } from "twin.macro";

export default function LoginForm(){
  
  const {register, handleSubmit} = useForm();
  
  return(
    <Form>
      <EmailLabel className='e-label' htmlFor="email"> <span>Email</span></EmailLabel>
      <LoginInput
        type="email"
        required
        {...register("email")} />
      <PwLabel htmlFor="password"> <span>Password</span></PwLabel>
      <LoginInput
        required
        type="password"
        {...register("password")}/>
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
    top: 38px;
    right: 90px;
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
    top: 38px;
    right: 75px;
  `
])