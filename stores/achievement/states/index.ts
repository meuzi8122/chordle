import { atom } from "recoil";

export const achievementState = atom<Achievement>({
    key: "achievement",
    default: {
        playCount: 0,
        correctCount: 0,
        consecutiveCorrectCount: 0,
        maxConsecutiveCorrectCount: 0
    }
})