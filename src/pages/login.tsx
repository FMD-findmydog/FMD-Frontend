import LoginForm from "@/components/logincompo/LoginForm";
import SocialLogin from "@/components/logincompo/SocialLogin";
import Link from "next/link";
import { css, styled } from "twin.macro";

const Loginbox = styled.div([
  css`
    width: 50vw;
    height: 60vh;
    margin: auto;
    margin-top: 20vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 27px;
    background: #f9fafa;
    box-shadow:  24px 24px 48px #aeb3b5, -24px -24px 48px #ffffff;
  `
])
export default function Login(){
  return (
    <Loginbox>
      <h1 className="text-2xl">로그인</h1>
      <LoginForm />
      <SocialLogin />
      <div>
        <span className="text-xs">아직 회원이 아니신가요?</span>
        <Link href={"/signup"} ><span className="text-xs font-semibold"> 회원가입하기</span> </Link>
      </div>
    </Loginbox>
  )
}
