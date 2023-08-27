import { CardInfoProps } from "@/pages/main";
import { atom } from "recoil";

export const openSidebar = atom<boolean>({
  key: "openSidebar",
  default: false,
});

export const missingCount = atom<number>({
  key: "missingCount",
  default: 0,
});

//토글에 따른 렌더링을 위한 저장소..
export const chooseButton = atom<string>({
  key: "chooseButton",
  default: "missing",
});

export const MissingDogsCard = atom<CardInfoProps[]>({
  key: "cardInfo",
  default: [],
});

export interface UserScrapProps {
  userIdx: number;
  scrapArray: Array<number>;
}

//이런식으로 스크랩을 구분해보자! 여기에 위치도 추가..? 이게 가능할지는 몰루
export const UserScrap = atom<UserScrapProps[]>({
  key: "userScrap",
  default: [{ userIdx: 1, scrapArray: [] }],
});

//장소를 담아둘 임의의 저장소
export const RegisterLocationAtom = atom<string>({
  key: "registerLocation",
  default: "",
});
