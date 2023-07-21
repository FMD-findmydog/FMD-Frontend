import { RegisterLocationAtom } from "@/store/atoms";
import React, { useState } from "react";
import { useSetRecoilState } from "recoil";
import tw, { css, styled } from "twin.macro";

const LocationInput = styled.input(() => [
  tw`
    border-solid border-2 rounded
    `,
  css`
    color: black;
  `,
]);

const RegisterLocation = () => {
  const [text, setText] = useState<string>("");
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };
  const locationAtom = useSetRecoilState(RegisterLocationAtom);
  const onClick = (location: string) => {
    locationAtom(location);
  };
  return (
    <div className="flex items-center justify-between">
      <div>실종 장소</div>
      <LocationInput
        value={text}
        onChange={onChange}
        type="text"
        placeholder="장소를 적어주세요"
      />
      <button
        className="border-2 rounded border-solid"
        onClick={() => {
          onClick(text);
        }}
      >
        확인
      </button>
    </div>
  );
};

export default RegisterLocation;
