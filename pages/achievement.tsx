import { NextPage } from "next";
import { useAchievement } from "../stores/achievement/hooks";

const AchievementPage: NextPage = () => {

    const achievement = useAchievement();

    return (
        <div className="container">
            <div className="box">
                {achievement.playCount}
                {achievement.correctCount}
                {achievement.consecutiveCorrectCount}
                {achievement.maxConsecutiveCorrectCount}
            </div>
        </div>
    )

}

export default AchievementPage;