type Progression = {
    chords: string[];
    type?: string;
}

type Log = Record<number, {
    chord: string;
    color: Color;
}>;

type LogElement = {
    chord: string;
    color: Color;
}

type Color = "#6aa64" | "#c9b458" | "#787c7e" | "";

type Achievement = {
    progression: string;
    isCorrect: boolean;
}
