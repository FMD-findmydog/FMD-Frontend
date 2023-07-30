import InfoRegisterCompo from "@/components/InfoRegisterCompo";
import { Dispatch, SetStateAction, useState } from "react";
import { css, styled } from "twin.macro";
import { ActiveButtonType } from "@/components/InfoRegisterCompo";
export interface IEntity { //실종개체정보
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
export default function Report(){
  const MAX_IMAGE_NUM = 4;
  //const [isLogin, setIsLogin] = useRecoilValue();로그인시 사용가능할수 있도록 이후 코드 수정하기
  const [isBtnActive, setIsBtnActive] = useState<boolean>(false);
  return (
    <ReportContainer>
      <ImgSelecter>이곳에 이미지 선택 컴포넌트를 추가해 주세요</ImgSelecter>
      <InfoRegisterCompo setIsBtnActive={setIsBtnActive}/>
      <MapContainer>이곳에 카카오 맵 컴포넌트를 추가해 주세요</MapContainer>
      <button>등록 완료하기</button>
    </ReportContainer>
  )
}
const ReportContainer = styled.div([
  css`
    display: flex;
    flex-direction : column;
    justify-content: center;
    align-items: center;
  `
])
export const ImgSelecter = styled.div([
  css`
    background-color: aliceblue;
    width: 80vw;
    height: 40vh;
  `
])
export const MapContainer = styled.div([
  css`
    background-color: aliceblue;
    width: 80vw;
    height: 40vh;
  `
])


