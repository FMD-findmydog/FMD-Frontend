import { CardInfoProps } from "@/pages/main";
import { atom } from "recoil";

interface KeyPair<V> {
  [key: string]: V;
}

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

export const RegisterMapAtom = atom<KeyPair<number>>({
  key: "registerMap",
  default: {
    lat: 0,
    lon: 0,
  },
});

export const photoAtom = atom<Array<string>>({
  key: "photoAtom",
  default: [],
});
