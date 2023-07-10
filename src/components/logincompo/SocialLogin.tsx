import { css, styled } from "twin.macro"
import Image from "next/image";
import naverSocialImage from "../../../public/assets/images/naver_login_icon_circle.png";
import kakaoSocialImage from "../../../public/assets/images/kakao_login_circle.png";
import googleSocialImage from "../../../public/assets/images/google_login_circle.png"
export default function SocialLogin(){
  return(
    <SocialLoginContainer>
      <SocialLoginButton>
        <Image src={naverSocialImage} alt="네이버 소셜로그인 버튼"/>
      </SocialLoginButton>
      <SocialLoginButton>
        <Image src={kakaoSocialImage} alt="카카오 소셜로그인 버튼"  />
      </SocialLoginButton>
      <SocialLoginButton>
        <Image src={googleSocialImage} alt="구글 소셜로그인 버튼" />
      </SocialLoginButton>
    </SocialLoginContainer>
  )
}

const SocialLoginContainer = styled.div([
  css`
    display: flex;
    flex-direction: row;
    margin-bottom: 10px;
  `
]);
const SocialLoginButton = styled.button([
  css`
    width: 40px;
    height: 60px;
    margin: 0px 10px;
  `
])