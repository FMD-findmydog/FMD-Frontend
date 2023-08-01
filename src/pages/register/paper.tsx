import { css, styled } from "twin.macro";
import { Button, ImgSelecter, MapContainer, ReportInfo } from "./report";
import InfoRegisterCompo from "@/components/InfoRegisterCompo";
import { useState } from "react";

export default function PaperForm(){
  const MAX_IMAGE_NUM = 1;
  const [isBtnActive, setIsBtnActive] = useState<boolean>(false);
  //const [isLogin, setIsLogin] = useRecoilValue();로그인시 사용가능할수 있도록 이후 코드 수정하기
  return (
    <PaperPage>
      <div className="text-4xl"> 헤더 컴포넌트 작성자리 </div>
      <ReportInfo>
          <ImgSelecter>이곳에 이미지 선택 컴포넌트를 추가해 주세요</ImgSelecter>
        <div>
        <InfoRegisterCompo setIsBtnActive={setIsBtnActive} phoneNumber={true}/>
        <Button>전단지 만들기</Button>
        </div>
      </ReportInfo>
    </PaperPage>
  )
}

const PaperPage = styled.div([
  css`
  @media screen and (max-width: 820px){
    display: flex;
    flex-direction : column;
    justify-content: center;
    align-items: center;
  }
  `
])