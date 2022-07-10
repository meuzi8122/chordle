import { useRecoilValue } from "recoil";
import { achievementState } from "../states";

export const useAchievement = () => {
    return useRecoilValue(achievementState);
}