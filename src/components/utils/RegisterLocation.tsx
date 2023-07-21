import React, { useState } from "react";
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
  const [text, setText] = useState("");
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
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
      <button className="border-2 rounded border-solid">확인</button>
    </div>
  );
};

export default RegisterLocation;
