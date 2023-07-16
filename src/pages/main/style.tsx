import tw, { styled } from "twin.macro";

export const PageWrapper = styled.div(() => [
  tw`
    flex items-center justify-center h-screen
    `,
]);

export const MainPageContainer = styled.div(() => [
  tw`
    w-4/5 h-4/5 mx-auto my-0 relative px-10 bg-slate-400
    `,
]);
