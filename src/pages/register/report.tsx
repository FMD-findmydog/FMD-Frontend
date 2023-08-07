import InfoRegisterCompo from "@/components/InfoRegisterCompo";
import Photo from "@/components/utils/Photo";
import RegisterLocation from "@/components/utils/RegisterLocation";
import RegisterMap from "@/components/utils/RegisterMap";
import Title from "@/components/utils/Title";
import { Dispatch, SetStateAction, useState } from "react";
import tw, { css, styled } from "twin.macro";
import { RegisterFormWrapper, RegisterPageContainer } from "./style";
import { useRecoilState, useRecoilValue } from "recoil";
import { EntityState, RegisterLocationAtom, isLoginState } from "@/store/atoms";
export interface IEntity {
  //실종개체정보
  name: string;
  gender: number; //암컷 : 0 , 수컷 1
  neuterSurge: boolean; //중성화 O : 1, 중성화 X : 0
  veriChip: boolean; //인식칩 O : 0, 인식칩 X : 1
  age: number;
  weight: string;
  color: string;
  date: string;
  lon: string;
  lan: string;
  significant: string; //특이사항
  imgURL: string;
  address: string;
  location?: string; //전단지 작성시 only
  phone?: string; //전단지 작성시 only
}
export default function Report() {
  const MAX_IMAGE_NUM: number = 3;
  const isLogIn = useRecoilValue(isLoginState); //로그아웃 상태에서 페이지 접근시 -> 로그인 페이지로 이동
  const [isBtnActive, setIsBtnActive] = useState<boolean>(false); //모든 정보 입력시 버튼 활성화

  return (
    <ReportPage>
      <Title page="register" />
      <ReportInfo>
        <div>
          <ImgSelecter>
            <Photo MAX_IMAGE_NUM={MAX_IMAGE_NUM} />
          </ImgSelecter>
          <MapContainer>
            <RegisterMap />
          </MapContainer>
        </div>
        <div>
          <InfoRegisterCompo
            setIsBtnActive={setIsBtnActive}
            isPaper={false}
          />
        </div>
      </ReportInfo>
    </ReportPage>
  );
}

const ReportPage = styled.div([
  css`
    @media screen and (max-width: 820px) {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  `,
]);
export const ReportInfo = styled.div([
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
  `,
]);

export const ImgSelecter = styled.div([
  css`
    width: 40vw;
    height: 40vh;

    @media screen and (max-width: 820px) {
      width: 80vw;
    }
  `,
]);
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
  `,
]);

export const Button = styled.button([
  css`
    width: 500px;
    height: 50px;
    margin-top: 20px;
    border-radius: 25px;
    background-color: #0276e3;
    color: #fff;
    @media screen and (max-width: 820px) {
      width: 80vw;
    }
  `,
]);
