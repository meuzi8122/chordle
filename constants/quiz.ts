export const ANSWER_LIMIT = 5;
export const CHORD_LIMIT = 8;

/* M回目の解答 Mは1始まり */
/* N番目のコード Nは0始まり */
export const INITIAL_LOGS: Record<number, Log> = {
    1: {0: {chord: "", color: ""}, 1: {chord: "", color: ""}, 2: {chord: "", color: ""}, 3: {chord: "", color: ""}, 4: {chord: "", color: ""}, 5: {chord: "", color: ""}, 6: {chord: "", color: ""}, 7: {chord: "", color: ""}},
    2: {0: {chord: "", color: ""}, 1: {chord: "", color: ""}, 2: {chord: "", color: ""}, 3: {chord: "", color: ""}, 4: {chord: "", color: ""}, 5: {chord: "", color: ""}, 6: {chord: "", color: ""}, 7: {chord: "", color: ""}},
    3: {0: {chord: "", color: ""}, 1: {chord: "", color: ""}, 2: {chord: "", color: ""}, 3: {chord: "", color: ""}, 4: {chord: "", color: ""}, 5: {chord: "", color: ""}, 6: {chord: "", color: ""}, 7: {chord: "", color: ""}},
    4: {0: {chord: "", color: ""}, 1: {chord: "", color: ""}, 2: {chord: "", color: ""}, 3: {chord: "", color: ""}, 4: {chord: "", color: ""}, 5: {chord: "", color: ""}, 6: {chord: "", color: ""}, 7: {chord: "", color: ""}},
    5: {0: {chord: "", color: ""}, 1: {chord: "", color: ""}, 2: {chord: "", color: ""}, 3: {chord: "", color: ""}, 4: {chord: "", color: ""}, 5: {chord: "", color: ""}, 6: {chord: "", color: ""}, 7: {chord: "", color: ""}},
}