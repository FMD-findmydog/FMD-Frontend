import InfoRegisterCompo from "@/components/infoRegisterCompo";
import { css, styled } from "twin.macro";
export default function Report(){
  const MAX_IMAGE_NUM = 4;
  
  return (
    <ReportContainer>
      <ImgSelecter>이곳에 이미지 선택 컴포넌트를 추가해 주세요</ImgSelecter>
      <InfoRegisterCompo />
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
const ImgSelecter = styled.div([
  css`
    background-color: aliceblue;
    width: 80vw;
    height: 40vh;
  `
])
const MapContainer = styled.div([
  css`
    background-color: aliceblue;
    width: 80vw;
    height: 40vh;
  `
])