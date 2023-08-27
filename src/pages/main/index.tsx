import Toggle from "@/components/main/Toggle";
import Title from "@/components/utils/Title";
import {
  MissingDogsCard,
  UserScrap,
  chooseButton,
  missingCount,
} from "@/store/atoms";
import Link from "next/link";
import React, { useCallback, useEffect } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { MainPageContainer, PageWrapper } from "./style";
import Card from "@/components/main/Card";
import { textCardInfo } from "@/store/textCard";

//페이지 라우팅은 Link로 하기! <Link href="">이런식으로</Link>
//fetch하는 방식!
//수정이 전체적으로 필요한 부분!!

export interface CardInfoProps {
  userIdx: number;
  postIdx: number;
  title: string;
  secondaryText: string;
  date: Date;
  scrap: boolean;
  imgsrc: string;
}

function Page() {
  const count = useRecoilValue(missingCount);
  //지금은 테스트 용으로..
  const CardInfo = textCardInfo;
  const [CardList, setCardList] = useRecoilState(MissingDogsCard);
  const scrapNum = useRecoilValue(UserScrap);
  const toggleInfo = useRecoilValue(chooseButton);
  const newCardInfoPush = async () => {
    const newScrapCardInfo: CardInfoProps[] = [];
    const newCardInfo: CardInfoProps[] = [];
    try {
      CardInfo.sort((a, b) => a.postIdx - b.postIdx);
      CardInfo.map((e) => {
        if (scrapNum[0].scrapArray.includes(e.postIdx)) {
          newScrapCardInfo.push(e);
        } else {
          newCardInfo.push(e);
        }
      });
      newScrapCardInfo.push(...newCardInfo);
      setCardList([...newScrapCardInfo]);
    } catch (error) {
      console.log(error);
    }
  };
  const newWatchInfoPush = async () => {
    const newScrapCardInfo: CardInfoProps[] = [];
    const newCardInfo: CardInfoProps[] = [];
    try {
      CardInfo.sort((a, b) => b.findIdx - a.findIdx);
      CardInfo.map((e) => {
        if (scrapNum[0].scrapArray.includes(e.postIdx)) {
          newScrapCardInfo.push(e);
        } else {
          newCardInfo.push(e);
        }
      });
      newScrapCardInfo.push(...newCardInfo);
      setCardList([...newScrapCardInfo]);
    } catch (error) {
      console.log(error);
    }
  };

  const toggleChange = useCallback(() => {
    const fetchData = async () => {
      try {
        {
          toggleInfo === "missing"
            ? await newCardInfoPush()
            : await newWatchInfoPush();
        }
        toggleInfo === "missing"
          ? console.log("실종신고")
          : console.log("목격신고");
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [toggleInfo, scrapNum]);

  useEffect(() => {
    toggleChange();
  }, [toggleChange]);

  return (
    <>
      <PageWrapper>
        <MainPageContainer>
          <Toggle />
          <Title page={"main"} />
          <div className="px-5">
            <div className="flex">
              오늘 들어온 실종신고
              <div className="px-2 text-[#FF0000]">{count}</div>건
            </div>
            <div className="flex justify-start items-center flex-wrap">
              {CardList.map((e) => {
                return (
                  <Card
                    key={e.postIdx}
                    postIdx={e.postIdx}
                    userIdx={e.userIdx}
                    title={e.title}
                    secondaryText={e.secondaryText}
                    scrap={scrapNum[0].scrapArray}
                    imgsrc={e.imgsrc}
                  />
                );
              })}
            </div>
            <Link href="/">맨 처음으로</Link>
          </div>
        </MainPageContainer>
      </PageWrapper>
    </>
  );
}

export default Page;
