import { IEntity } from "@/pages/register/report";
import { EntityState, RegisterLocationAtom } from "@/store/atoms";
import React, { useState } from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import tw, { css, styled } from "twin.macro";

const LocationInput = styled.input(() => [
  css`
    border-bottom: 1.5px solid #0276e3;
  `,
]);

const LocationButton = styled.button(() => [
  tw`border-transparent w-2/5`,
  css`
    border-radius: 25px;
    background-color: #0276e3;
    color: #fff;
  `,
]);

const RegisterLocation = ({ report }: { report: boolean }) => {
  const [text, setText] = useState<string>("");
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };
  const locationAtom = useSetRecoilState(RegisterLocationAtom);
  const onClick = (location: string) => {
    locationAtom(location);
  };
  return (
    <>
      <LocationInput
        value={text}
        onChange={onChange}
        type="text"
        placeholder="장소를 적어주세요"
      />
      {report === true ? (
        <LocationButton
          onClick={() => {
            onClick(text);
          }}
        >
          확인
        </LocationButton>
      ) : null}
    </>
  );
};

export default RegisterLocation;
