import { atom } from "recoil";

export const achievementState = atom<Record<number, Achievement>>({
    key: "achievements",
    default: {}
});