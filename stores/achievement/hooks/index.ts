import { useRecoilValue } from "recoil";
import { achievementState } from "../atom";

export const useAchievements = () => {
    return useRecoilValue(achievementState);
}