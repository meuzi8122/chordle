import { useState } from "react";
import { ANSWER_LIMIT } from "../constants";

export const useQuizTime = () => {

    const [ quizTime, setQuizTime ] = useState<number>(1);

    const resetQuizTime = () => {
        setQuizTime(() => 1);
    }

    const countUp = () => {
        setQuizTime(prevQuizTime => prevQuizTime < ANSWER_LIMIT ? prevQuizTime + 1 : prevQuizTime);
    }

    return {
        quizTime,
        resetQuizTime,
        countUp
    }

}