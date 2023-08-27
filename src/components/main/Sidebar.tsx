import { openSidebar } from "@/store/atoms";
import { keyframes } from "@emotion/react";
import React from "react";
import { useSetRecoilState } from "recoil";
import tw, { css, styled } from "twin.macro";

const Sideshow = styled.aside(({ hasOpen }: { hasOpen: boolean }) => [
  tw`fixed w-0 z-50 bg-pink-300 h-full top-0 right-0`,
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
      <div className=" flex items-center justify-evenly">
        <div>프로필</div>
        <div>login하기</div>
      </div>
      <div>
        <p>실종등록하기</p>
        <p>목격신고하기</p>
        <p>전단지 만들기</p>
      </div>
    </Sideshow>
  );
}

export default Sidebar;