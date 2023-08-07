import { css, styled } from "twin.macro";
import { Button, ImgSelecter, MapContainer, ReportInfo } from "./report";
import InfoRegisterCompo from "@/components/InfoRegisterCompo";
import { useState } from "react";
import Title from "@/components/utils/Title";
import Photo from "@/components/utils/Photo";

export default function PaperForm() {
  const MAX_IMAGE_NUM = 1;
  const [isBtnActive, setIsBtnActive] = useState<boolean>(false);
  //const [isLogin, setIsLogin] = useRecoilValue();로그인시 사용가능할수 있도록 이후 코드 수정하기
  return (
    <PaperPage>
      <Title page="register" />
      <ReportInfo>
        <ImgSelecter>
          <Photo MAX_IMAGE_NUM={MAX_IMAGE_NUM} />
        </ImgSelecter>
        <div>
          <InfoRegisterCompo
            setIsBtnActive={setIsBtnActive}
            phoneNumber={true}
            isReport={false}
          />
          <Button>전단지 만들기</Button>
        </div>
      </ReportInfo>
    </PaperPage>
  );
}

const PaperPage = styled.div([
  css`
    @media screen and (max-width: 820px) {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  `,
]);
