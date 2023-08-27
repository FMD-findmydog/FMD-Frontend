import { openSidebar } from "@/store/atoms";
import { keyframes } from "@emotion/react";
import Image from "next/image";
import React from "react";
import { useSetRecoilState } from "recoil";
import tw, { css, styled } from "twin.macro";

function Sidebar({ open }: { open: boolean }) {
  const setopen = useSetRecoilState(openSidebar);
  return (
    <Sideshow hasOpen={open}>
      <button
        onClick={() => {
          setopen(!open);
        }}
      >
        X
      </button>
      <SideProfile>
        <ProfileImg>
          <Image
            src="/testImg/image1.jpeg"
            alt="프로필 이미지"
            fill
            style={{ objectFit: "cover", borderRadius: "100px" }}
          />
        </ProfileImg>
        <button>login하기</button>
      </SideProfile>
      <div className="relative top-1/4">
        <SidePage>실종등록하기</SidePage>
        <SidePage>목격신고하기</SidePage>
        <SidePage>전단지 만들기</SidePage>
      </div>
      <div className="relative top-1/2">
        <div>공지사항</div>
        <NoticeDiv>footer 정보</NoticeDiv>
      </div>
    </Sideshow>
  );
}

export default Sidebar;

const Sideshow = styled.aside(({ hasOpen }: { hasOpen: boolean }) => [
  tw`fixed w-0 z-50 bg-white h-full top-0 right-0 px-8`,
  hasOpen
    ? css`
        animation: ${WideSide} 2s;
        animation-fill-mode: both;
      `
    : css``,
]);

const WideSide = keyframes`
  0%{
   width : 0px; 
  }
  100% {
    width : 33%;
  }
`;

const SidePage = styled.p`
  width: 80%;
  height: 30px;
  margin: 10px 0px;
`;

const SideProfile = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  top: 20%;
`;

const ProfileImg = styled.div`
  width: 10%;
  height: 40px;
  position: relative;
`;

const NoticeDiv = styled.div`
  background-color: gray;
  padding: 0px 10px;
  width: 100%;
  height: 30px;
  border-radius: 10px;
`;
