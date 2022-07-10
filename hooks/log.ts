import { useState } from "react";
import { INITIAL_LOGS } from "../constants/quiz";

export const useLogs = () => {

    const [ logs, setLogs ] = useState<Record<number, Log>>(INITIAL_LOGS);

    const resetLogs = () => {
        setLogs(() => INITIAL_LOGS);
    }

    const addLog = (answerChords: string[], themeChords: string[], time: number) => {

        const logValues = Object.values(themeChords).map((themeChord, index): LogElement => {
            if (index > answerChords.length) {
                return {
                    chord: themeChord,
                    color: ""
                }
            } else if (themeChord === answerChords[index]) {
                return {
                    chord: themeChord,
                    color: "#6aa64"
                }
            } else if (answerChords.includes(themeChord)) {
                return {
                    chord: answerChords[index],
                    color: "#c9b458"
                }
            } else {
                return {
                    chord: answerChords[index],
                    color: "#787c7e"
                }
            }
        });

        /* 配列をオブジェクトにスプレッドの形で代入すると0始まりのキーのオブジェクトになる */

        setLogs(prevLogs => {
            return {
                ...prevLogs,
                [time]: {
                    ...logValues
                }
            }
        });

    }

    return {
        logs,
        resetLogs,
        addLog
    }

}