import { useState, useEffect } from "react";

export const useThemeProgression = (candidates: Progression[]) => {

    const [ themeProgression, setThemeProgression ] = useState<Progression | null>(null);

    const updateThemeProgression = () => {
        setThemeProgression(() => {
            if (candidates.length === 0) {
                return null;
            }
            const index = Math.ceil(Math.random() * (candidates.length - 1));
            return candidates[index];
        });
    }

    useEffect(() => {
        updateThemeProgression();
    }, []);

    return {
        themeProgression,
        updateThemeProgression
    }

}