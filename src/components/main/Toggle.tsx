import { chooseButton } from "@/store/atoms";
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
        {select === "missing" ? (
          <>
            <MissingButton>목격신고</MissingButton>
            <UnclickButton onClick={onClick}>실종신고</UnclickButton>
          </>
        ) : (
          <>
            <UnclickButton onClick={onClick}>목격신고</UnclickButton>
            <WatchButton>실종신고</WatchButton>
          </>
        )}
      </ToggleWrapper>
    </>
  );
};

export default Toggle;
