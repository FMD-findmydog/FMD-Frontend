import { chooseButton } from "@/store/atoms";
import { keyframes } from "@emotion/react";
import React from "react";
import { useRecoilState } from "recoil";
import tw, { css, styled } from "twin.macro";

const ToggleWrapper = styled.div(() => [
  tw`-rotate-90 rounded-full bg-gray-200 `,
  css`
    position: absolute;
    left: 0%;
    top: 20%;
    width: 160px;
    height: 30px;
    margin-left: -110px;
  `,
]);

const Button = styled.button(({ Type }: { Type: string }) => [
  tw`text-white font-bold rounded-full`,
  css`
    width: 80px;
    height: 30px;
    transform: translateX(-80px);
  `,
  Type === "missing"
    ? css`
        animation: ${fadeOut} 2s;
        animation-fill-mode: both;
      `
    : css`
        animation: ${fadeIn} 2s;
        animation-fill-mode: both;
      `,
]);

const fadeIn = keyframes`
  from {
    background-color : yellow;
    transform : translateX(80px);
  }
  to {
    background-color : blue;
    transform : translateX(0px);
  }
`;

const fadeOut = keyframes`
    from {
    background-color : blue;
    transform : translateX(-80px);
  }
  to {
    background-color : yellow;
    transform : translateX(0px);
  }
`;

const WatchButton = styled.button(() => [
  tw`bg-yellow-400 text-white font-bold rounded-full`,
  css`
    width: 80px;
    height: 30px;
  `,
]);

const MissingButton = styled.button(() => [
  tw`bg-blue-400 text-white font-bold rounded-full`,
  css`
    width: 80px;
    height: 30px;
  `,
]);

const UnclickButton = styled.button(() => [
  tw`text-white font-bold`,
  css`
    width: 80px;
    height: 30px;
  `,
]);
const Toggle = () => {
  const onClick = () => {
    if (select === "missing") {
      setSelect("watch");
    } else {
      setSelect("missing");
    }
  };
  const [select, setSelect] = useRecoilState(chooseButton);
  return (
    <>
      <ToggleWrapper>
        {/* <>
          <Button Type={select}>
            {select === "missing" ? <>실종신고</> : <>목격신고</>}
          </Button>
          <UnclickButton onClick={onClick}>
            {select === "missing" ? <>목격신고</> : <>실종신고</>}
          </UnclickButton>
        </> */}
        {select === "missing" ? (
          <>
            <UnclickButton onClick={onClick}>목격신고</UnclickButton>
            <Button Type="missing">실종신고</Button>
          </>
        ) : (
          <>
            <Button Type="watch">목격신고</Button>
            <UnclickButton onClick={onClick}>실종신고</UnclickButton>
          </>
        )}
      </ToggleWrapper>
    </>
  );
};

export default Toggle;
