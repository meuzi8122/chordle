import { useSetRecoilState } from "recoil"
import { achievementState } from "../states"

export const useAchievementMutators = () => {

    const setAchievement = useSetRecoilState(achievementState);

    const updateAchievement = (isCorrect: boolean) => {
        setAchievement(prevAchievement => {

            let counts = {
                correctCount: prevAchievement.correctCount,
                consecutiveCorrectCount: 0,
                maxConsecutiveCorrectCount: prevAchievement.maxConsecutiveCorrectCount
            }

            if (isCorrect) {
                counts = {
                    correctCount: prevAchievement.correctCount + 1,
                    consecutiveCorrectCount: prevAchievement.consecutiveCorrectCount + 1,
                    maxConsecutiveCorrectCount: 
                        prevAchievement.maxConsecutiveCorrectCount < prevAchievement.consecutiveCorrectCount + 1 ?
                        prevAchievement.consecutiveCorrectCount + 1 :
                        prevAchievement.maxConsecutiveCorrectCount
                }
            }

            return {
                ...counts,
                playCount: prevAchievement.playCount + 1,
            }
        })
    }

    return {
        updateAchievement
    }

}