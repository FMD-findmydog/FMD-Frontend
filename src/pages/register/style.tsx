import tw, { styled } from "twin.macro";

export const RegisterPageContainer = styled.div(() => [
  tw`
      w-5/6 h-5/6 mx-auto my-10 relative px-0 grid grid-cols-2
      box-content
      `,
]);

export const RegisterFormWrapper = styled.div(() => [
  tw`
    row-span-2 border-l-2 border-solid border-gray-500
    `,
]);

export const palette = {
  gray : '#c2c2c2',
  lightgray: '#dbdbdb',
  blue : '#0276e3'
}