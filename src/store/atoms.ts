import { CardInfoProps } from "@/pages/main";
import { IEntity } from "@/pages/register/report";
import { atom } from "recoil";

interface KeyPair<V> {
  [key: string]: V;
}

interface KeyPairs<V, U> {
  [key: string]: V | U;
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

//entity 저장
export const EntityState = atom<IEntity>({
  key: "entityInfo",
  default: {
    //실종개체정보
    name: "",
    gender: 0, //암컷 : 0 , 수컷 1
    neuterSurge: false, //중성화 O : 1, 중성화 X : 0
    veriChip: false, //인식칩 O : 0, 인식칩 X : 1
    age: 0,
    weight: "",
    color: "",
    date: "",
    lon: "",
    lan: "",
    significant: "", //특이사항
    imgURL: "",
    address: "",
    phone: "",
    location: "", //전단지 만들때 필요한 장소정보, DB 저장x, 카카오맵 x
  },
});

//로그인여부
export const isLoginState = atom<boolean>({
  key: "isLogIn",
  default: false,
});

export const RegisterMapAtom = atom<KeyPair<number>>({
  key: "registerMap",
  default: {
    lat: 0,
    lon: 0,
  },
});

export const photoAtom = atom<KeyPairs<Array<string>, string>>({
  key: "photoAtom",
  default: {
    imgURLArray: [],
    imgURL: "",
  },
});
