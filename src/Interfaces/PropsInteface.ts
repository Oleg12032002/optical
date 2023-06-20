interface PropAccordionLayer {
    index: number,
    handlerChangeParam: (id: number, n: number, d: number) => void,
    n: number,
    d: number,
}

interface ResultCalculationForChart {
    data: {
        label: string;
        data: {
            primary: string | number | Date | null;
            secondary: number | null;
            radius: number | undefined;
        }[];
    }[]
}

interface ResultCalculation {
    RES_TTP: number[][],
    RES_TTS: number[][],
    L: number[]
    AVG: number,
}

interface PropCalculation {
    p0: number, // Показник заломлення середовища
    ps: number, // Показник заломлення підкладки
    NN: number, // Кількість шарів
    krok: number, // Крок
    nl1: number, // початок діапазону довжин хвиль
    nl2: number, // кінець діапазону довжин хвиль
    arrayOfAngles: number[], // масив кутів для яких знаходить значення
    np: number[], // масив показників заломлення шарів
    dp: number[], // масив оптичних товщин шарів

    isChart: boolean, // чи мотрібно повернути дані для формування графіку
}

interface PropsOptimization {
    p0: number,
    ps: number,
    NN: number,
    krok: number,
    nl1: number,
    nl2: number,
    arrayOfAngles: number[],
    np?: number[],
    dp?: number[],

    setParameters: boolean,
} 

interface ResultOptimization {
    n: number[],
    d: number[],
    max: number,
}

interface PropsDispersion {
    x: number[],
    y: number[],
    spectrumRange: number []
}


class LayerParams {
    n: number = 1;
    d: number = 1;

    constructor(n: number, d: number) {
        this.n = n;
        this.d = d;
    }
}

export type LanguageContextType = {
    language: string;
    update: (ln: string) => void;
  };

export type {ResultOptimization, PropsDispersion, PropAccordionLayer, PropCalculation, ResultCalculationForChart, ResultCalculation, PropsOptimization }
export { LayerParams }

