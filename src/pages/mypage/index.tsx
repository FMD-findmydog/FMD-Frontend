import React, { useState } from "react";
import {
  MypageWrapper,
  MypageContainer,
  TextRelateDiv,
  MypageListButton,
  EditMypageButton,
  MypageProfile,
} from "./style";
import Image from "next/image";
import ScrapList from "@/components/mypage/scrapList";
import FindMyPet from "@/components/mypage/findMyPet";

const Mypage = () => {
  const [list, setList] = useState<string>("scrap");
  const onClick = () => {
    if (list === "scrap") {
      setList("find");
    } else {
      setList("scrap");
    }
  };
  return (
    <>
      <MypageWrapper>
        <MypageContainer>
          <MypageProfile>
            <Image
              src={"/image/Profile.png"}
              alt="프로필"
              fill
              style={{ objectFit: "fill" }}
            />
          </MypageProfile>
          <TextRelateDiv Name>보호자 ㅇㅇㅇ님</TextRelateDiv>
          <EditMypageButton>내 정보 수정</EditMypageButton>
          {list === "scrap" ? (
            <>
              <MypageListButton Click>스크랩 목록</MypageListButton>
              <MypageListButton Click={false} onClick={onClick}>
                나의 반려동물 찾기
              </MypageListButton>
            </>
          ) : (
            <>
              <MypageListButton Click={false} onClick={onClick}>
                스크랩 목록
              </MypageListButton>
              <MypageListButton Click>나의 반려동물 찾기</MypageListButton>
            </>
          )}
          <TextRelateDiv Name={false}>로그아웃</TextRelateDiv>
        </MypageContainer>
        <MypageContainer style={{ width: "70%" }}>
          {list === "scrap" ? <ScrapList /> : <FindMyPet />}
        </MypageContainer>
      </MypageWrapper>
    </>
  );
};

export default Mypage;
