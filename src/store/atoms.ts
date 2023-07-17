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

export const chooseButton = atom<String>({
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

//이런식으로 스크랩을 구분해보자!
export const UserScrap = atom<UserScrapProps[]>({
  key: "userScrap",
  default: [{ userIdx: 1, scrapArray: [] }],
});
