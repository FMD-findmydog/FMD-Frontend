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
    <ReportPage>
      <div className="text-4xl"> 헤더 컴포넌트 작성자리 </div>
      <ReportInfo>
        <div>
          <ImgSelecter>이곳에 이미지 선택 컴포넌트를 추가해 주세요</ImgSelecter>
          <MapContainer>이곳에 카카오 맵 컴포넌트를 추가해 주세요</MapContainer>
        </div>
        <div>
        <InfoRegisterCompo setIsBtnActive={setIsBtnActive}/>
        <Button>등록 완료하기</Button>
        </div>
      </ReportInfo>
    </ReportPage>
  )
}

const ReportPage = styled.div([
  css`
  @media screen and (max-width: 820px){
    display: flex;
    flex-direction : column;
    justify-content: center;
    align-items: center;
  }
  `])
const ReportInfo = styled.div([
  css`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    @media screen and (max-width: 820px) {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  `
])

export const ImgSelecter = styled.div([
  css`
    background-color: aliceblue;
    width: 40vw;
    height: 40vh;

    @media screen and (max-width: 820px) {
      width: 80vw;
    }
  `
])
export const MapContainer = styled.div([
  css`
    background-color: aliceblue;
    width: 40vw;
    height: 40vh;
    margin-top: 35px;
    @media screen and (max-width: 820px) {
      width: 80vw;
      positon: relative;
      bottom: 560px;
    }
  `
])

const Button = styled.button([
  css`
    width : 500px;
    height: 50px;
    margin-top: 20px;
    border-radius: 25px;
    background-color: #0276e3;
    color: #fff;
    @media screen and (max-width: 820px){
      width: 80vw;
    }
  `
]);