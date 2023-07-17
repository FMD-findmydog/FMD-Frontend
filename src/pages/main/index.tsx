import Toggle from "@/components/main/Toggle";
import Title from "@/components/utils/Title";
import { MissingDogsCard, UserScrap, missingCount } from "@/store/atoms";
import Link from "next/link";
import React, { useEffect } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { MainPageContainer, PageWrapper } from "./style";
import Card from "@/components/main/Card";

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
  const CardInfo = [
    {
      userIdx: 1,
      postIdx: 1,
      title: "이름",
      secondaryText: "추가정보",
      date: new Date(2022, 6, 24),
      scrap: false,
      imgsrc: "/testImg/image3.jpeg",
    },
    {
      userIdx: 3,
      postIdx: 2,
      title: "만수",
      secondaryText: "추가정보2",
      date: new Date(2022, 0, 24),
      scrap: true,
      imgsrc: "/testImg/image2.jpeg",
    },
    {
      userIdx: 4,
      postIdx: 3,
      title: "무강",
      secondaryText: "추가정보3",
      date: new Date(2022, 11, 24),
      scrap: true,
      imgsrc: "/testImg/image1.jpeg",
    },
    {
      userIdx: 6,
      postIdx: 4,
      title: "달덩이",
      secondaryText: "추가정보4",
      date: new Date(2022, 7, 1),
      scrap: false,
      imgsrc: "/testImg/image2.jpeg",
    },
    {
      userIdx: 5,
      postIdx: 5,
      title: "대롱이",
      secondaryText: "추가정보5",
      date: new Date(2022, 7, 21),
      scrap: false,
      imgsrc: "/testImg/image1.jpeg",
    },
  ];
  const [CardList, setCardList] = useRecoilState(MissingDogsCard);
  const scrapNum = useRecoilValue(UserScrap);
  const newCardInfoPush = async () => {
    const newScrapCardInfo: CardInfoProps[] = [];
    const newCardInfo: CardInfoProps[] = [];
    try {
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

  useEffect(() => {
    const fetchData = async () => {
      try {
        await newCardInfoPush();
        console.log(CardList);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [scrapNum]);
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
