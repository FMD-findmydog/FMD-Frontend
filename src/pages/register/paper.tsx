import { css, styled } from "twin.macro";
import { ImgSelecter, MapContainer } from "./report";

export default function PaperForm(){
  const MAX_IMAGE_NUM = 1;
  //보호자 연락처는 전단지에만 추가적으로 선택에서 적을 수 있도록
  return (
    <PaperContainer>
      <ImgSelecter>이곳에 이미지 선택 컴포넌트를 추가해 주세요</ImgSelecter>
      <>실종개체 정보 등록 폼</>
      <MapContainer>이곳에 카카오 맵 컴포넌트를 추가해 주세요</MapContainer>
      <button> 전단지 만들기</button>
    </PaperContainer>
  )
}

const PaperContainer = styled.div([
  css`
    display: flex;
    flex-direction : column;
    justify-content: center;
    align-items: center;
  `
])