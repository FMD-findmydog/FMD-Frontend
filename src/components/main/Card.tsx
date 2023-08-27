import { UserScrap, UserScrapProps } from "@/store/atoms";
import Image from "next/image";
import React from "react";
import { useRecoilState } from "recoil";
import tw, { css, styled } from "twin.macro";

type Props = {
  userIdx: number;
  postIdx: number;
  title: string;
  secondaryText: string;
  scrap: Array<number>;
  imgsrc: string;
};

const CardBoxWrapper = styled.button(() => [
  tw`m-5 grid rounded`,
  css`
    width: 25%;
    height: 40%;
    grid-auto-columns: repeat(auto-fill, minmax(33%, auto));
    box-shadow: 0px 3px 5px #00000075;
    /* text-align: start; */
  `,
]);

const CardBox = styled.div(() => [tw`p-3 w-full h-full flex flex-col`]);

const CardImage = styled.div(() => [
  tw`m-auto`,
  css`
    width: 100%;
    height: 200px;
    box-sizing: content-box;
    position: relative;
  `,
]);

const CardText = styled.div(() => [
  tw`
    font-bold text-xl
`,
  css`
    text-align: start;
  `,
]);

const Star = styled.div(() => [
  tw`w-6 h-6 z-10`,
  css`
    position: relative;
    left: 90%;
  `,
]);

const Card = ({
  userIdx,
  postIdx,
  title,
  secondaryText,
  scrap,
  imgsrc,
}: Props) => {
  const [scrapNum, setScrapNum] = useRecoilState<UserScrapProps[]>(UserScrap);
  const onClick = () => {
    const updatedScrapArray = scrapNum[0].scrapArray.includes(postIdx)
      ? scrapNum[0].scrapArray.filter((idx) => idx !== postIdx)
      : [...scrapNum[0].scrapArray, postIdx];

    setScrapNum((prev) => [
      {
        ...prev[0],
        scrapArray: updatedScrapArray,
      },
    ]);

    console.log(scrapNum);
  };

  if (scrap.includes(postIdx)) {
    return (
      <CardBoxWrapper>
        <CardBox>
          <Star onClick={onClick}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="yellow"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
              />
            </svg>
          </Star>
          <CardImage>
            <Image
              src={imgsrc}
              alt="강아지"
              fill
              style={{ objectFit: "cover" }}
            />
          </CardImage>
          <CardText>{title}</CardText>
          <div
            style={{
              textAlign: "start",
            }}
          >
            {secondaryText}
          </div>
        </CardBox>
      </CardBoxWrapper>
    );
  } else {
    return (
      <CardBoxWrapper>
        <CardBox>
          <Star onClick={onClick}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
              />
            </svg>
          </Star>
          <CardImage>
            <Image
              src={imgsrc}
              alt="강아지"
              fill
              style={{ objectFit: "cover" }}
            />
          </CardImage>
          <CardText>{title}</CardText>
          <div
            style={{
              textAlign: "start",
            }}
          >
            {secondaryText}
          </div>
        </CardBox>
      </CardBoxWrapper>
    );
  }
};

export default Card;
