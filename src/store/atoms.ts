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
