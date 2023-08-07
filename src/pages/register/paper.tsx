import { css, styled } from "twin.macro";
import { IEntity, ImgSelecter, MapContainer, ReportInfo } from "./report";
import InfoRegisterCompo from "@/components/InfoRegisterCompo";
import { useState } from "react";
import Photo from "@/components/utils/Photo";
import Title from "@/components/utils/Title";
import { useRecoilValue } from "recoil";
import { EntityState, isLoginState } from "@/store/atoms";

export default function PaperForm(){
  const MAX_IMAGE_NUM = 1;
  const [isBtnActive, setIsBtnActive] = useState<boolean>(false);
  const entity = useRecoilValue<IEntity>(EntityState);

  console.log('isBtnActive',isBtnActive);
  return (
    <PaperPage>
      <div className="text-4xl"> 
        <Title page={""} />
      </div>
      <ReportInfo>
          <ImgSelecter>
            <Photo />
          </ImgSelecter>
        <div>
        <InfoRegisterCompo setIsBtnActive={setIsBtnActive} isPaper={true}/>
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