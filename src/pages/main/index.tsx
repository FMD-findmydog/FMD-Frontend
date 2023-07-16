import Toggle from "@/components/main/Toggle";
import Title from "@/components/utils/Title";
import { missingCount } from "@/store/atoms";
import Link from "next/link";
import React from "react";
import { useRecoilValue } from "recoil";
import tw, { css, styled } from "twin.macro";
import { MainPageContainer, PageWrapper } from "./style";

//페이지 라우팅은 Link로 하기! <Link href="">이런식으로</Link>
//fetch하는 방식!
const ChangeButton = styled.button(({ hasTrue }: { hasTrue: boolean }) => [
  tw`w-24 h-20`,
  css`
    border-radius: 20px;
  `,
  hasTrue ? tw`bg-red-400` : tw`bg-blue-400`,
]);

function Page() {
  const count = useRecoilValue(missingCount);
  return (
    <>
      <PageWrapper>
        <MainPageContainer>
          <Toggle />
          <Title />
          <div className="px-5">
            <div className="flex">
              오늘 들어온 실종신고
              <div className="px-2 text-[#FF0000]">{count}</div>건
            </div>
            <div>
              <ChangeButton hasTrue={false}> 색깔 바꾸기</ChangeButton>
            </div>
            <Link href="/">맨 처음으로</Link>
          </div>
        </MainPageContainer>
      </PageWrapper>
    </>
  );
}

export default Page;
