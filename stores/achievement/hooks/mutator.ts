import { useSetRecoilState } from "recoil";
import { achievementState } from "../atom";

export const useAchievementMutators = () => {

    const setAchievements = useSetRecoilState(achievementState);

    const addAchievement = (progression: string, isCorrect: boolean) => {
        setAchievements(prevAchievements => {
            return {
                ...prevAchievements,
                [Object.keys(prevAchievements).length + 1]: {
                    progression,
                    isCorrect
                }
            }
        });
    }

    return {
        addAchievement
    }

}