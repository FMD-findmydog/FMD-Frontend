import tw, { css, styled } from "twin.macro";

//지금 현재 틀을 보기 위한 설정이므로 추후 디자인은 변경될 예정
//이게 상단 가운데 정렬은 지금 현재로썬 my를 주는 것 말고는 없나..?
export const MypageWrapper = styled.div(() => [
  tw`flex mx-auto my-20 bg-gray-200`,
  css`
    width: 80vw;
    height: 90vh;
    align-items: center;
  `,
]);

export const MypageContainer = styled.div(() => [
  tw`w-1/5 h-4/5 bg-white m-auto flex flex-col justify-center items-center`,
  css`
    border-radius: 10px;
  `,
]);

export const MypageProfile = styled.div`
  border-radius: 100px;
  width: 50%;
  height: 120px;
  box-sizing: content-box;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

export const MypageListButton = styled.button(
  ({ Click }: { Click: boolean }) => [
    tw`mb-5 bg-[#AFAFAF] rounded text-white`,
    css`
      width: 80%;
      height: 40px;
    `,
    Click && tw`bg-[#3E3D53]`,
  ]
);

export const EditMypageButton = styled.button(() => [
  tw`my-10 text-white`,
  css`
    width: 60%;
    height: 40px;
    background-color: blue;
    border-radius: 20px;
  `,
]);

// export const TextRelatedDiv = styled.div`
//   &.title {
//   }
// `;

export const TextRelateDiv = styled.div(({ Name }: { Name: boolean }) => [
  Name && tw`font-bold`,
  !Name && tw`underline`,
]);
