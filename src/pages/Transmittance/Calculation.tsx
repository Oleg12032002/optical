import { PropCalculation, ResultCalculation, ResultCalculationForChart } from "../../Interfaces/PropsInteface";

const Calculation = (props: PropCalculation) => {
    console.log(props)
    const isChart: boolean = props.isChart;

    let p0: number = props.p0;
    let ps: number = props.ps;
    let NN: number = props.NN;
    let krok: number = props.krok;
    let nl1: number = props.nl1;
    let nl2: number = props.nl2;
    let np: number[] = props.np;
    let dp: number[] = props.dp;

    const arrayOfAngles: number[] = props.arrayOfAngles

    let deg0: number = 0;
    let pi: number = Math.PI;
    let L: number[] = [0];
    let deg: number[] = [0];
    

    let RES_TTP: number[][] = [];
    let RES_TTS: number[][] = [];
    let Label: string[] = []

    let kr1: number = Math.floor( (nl2 - nl1) / krok ) + 1;

    let p0_P: number;
    let ps_P: number;

    let p0_S: number;
    let ps_S: number;
    
    let TTP: number[] = [0];
    let TTS: number[] = [0];



    
    const D = (n: number, d: number, l: number, deg_n: number) => {
        return (2 * Math.PI * n * d * Math.cos(deg_n)) / l;
    }

    // Знаходимо характеристичну матрицю відповідного шару
    const CharactMatrix = (n: number, d: number, l: number, M: number[][], deg_n: number, is_P: boolean) => { //mas
        const a: number = D(n, d, l, deg_n);
        M[0][0] = Math.cos(a);

        // Окремо обчислюємо для s та p поляризації
        if(is_P)
        {
            M[0][1] = Math.sin(a) * Math.cos(deg_n) / n;
            M[1][0] = Math.sin(a) * n / Math.cos(deg_n);
        }
        else
        {
            M[0][1] = Math.sin(a) / ( Math.cos(deg_n) * n );
            M[1][0] = Math.sin(a) * n * Math.cos( deg_n );
        }
        M[1][1] = Math.cos(a);
    }

    // Проводим множення квадратичних матриць
    const MultMatrices = (M: number[][], M1: number[][]) => {
        const M2: number[][] = [[0, 0], [0, 0]];
        M2[0][0] = M[0][0] * M1[0][0] - M[0][1] * M1[1][0];
        M2[0][1] = M[0][0] * M1[0][1] + M[0][1] * M1[1][1];
        M2[1][0] = M[1][0] * M1[0][0] + M[1][1] * M1[1][0];
        M2[1][1] = M[1][1] * M1[1][1] - M[1][0] * M1[0][1];
        M[0][0] = M2[0][0];
        M[0][1] = M2[0][1];
        M[1][0] = M2[1][0];
        M[1][1] = M2[1][1];
    }


    const MultOfAllMatrices = (NN: number, np: number[], dp: number[], l: number, MM: number[][], deg: number[], is_P: boolean) => {
        const M: number[][] = [[1, 0], [0, 1]];
        const M1: number[][] = [[0, 0], [0, 0]];
        for(let i = 0; i < NN; i++)
        {
            CharactMatrix(np[i], dp[i], l, M1, deg[i], is_P);
            MultMatrices(M, M1);
        }
        MM[0][0] = M[0][0];
        MM[0][1] = M[0][1];
        MM[1][0] = M[1][0];
        MM[1][1] = M[1][1];
    }

    // Формуєм елементи масиву з нашими результуючими матрицями
    const FormResults = (NN: number, np: number[], dp: number[], l: number, deg: number[], is_P: boolean) => {
        const MM: number[][] = [[0, 0], [0, 0]];
        MultOfAllMatrices(NN, np, dp, l, MM, deg, is_P);
        let T: number;
        if (is_P) {
            T = 4 / ( 2+ p0_P / ps_P * (MM[0][0] * MM[0][0]) + ps_P / p0_P * (MM[1][1] * MM[1][1]) + p0_P * ps_P * (MM[0][1] * MM[0][1]) + (MM[1][0] * MM[1][0]) / (ps_P * p0_P) );
        }
        else {
            T = 4 / ( 2 + p0_S / ps_S * (MM[0][0] * MM[0][0]) + ps_S / p0_S * (MM[1][1] * MM[1][1]) + p0_S * ps_S * (MM[0][1] * MM[0][1]) + (MM[1][0] * MM[1][0]) / (ps_S * p0_S) );
        }
        return T;
    }

    // Фомуєм опорні точки на нашому графіку частот і знаходимо для кожної точки коефіцієн пропускання
    const Calculate = (NN: number, np: number[], dp: number[], deg: number[]) => {
        L[0] = nl1;
        
        for(let i = 1; i <= kr1; i++) {
            L[i] = L[i - 1] + krok;
        }

        for(let i = 0; i <= kr1; i++) {
            let y1111 = FormResults(NN, np, dp, L[i], deg, false);
            let y2222 = FormResults(NN, np, dp, L[i], deg, true);
            TTS[i] = y1111;
            TTP[i] = y2222;
        }
    }


    // Знаходим середнє значення по всім ключовим точкам
    const AverageValue = () => {
        let res: number = 0;
        let res2: number = 0;
        for(let i = 0; i < kr1; i++)
        {
            res += 1 - TTS[i];
            res2 += 1 - TTP[i];
        }
        return [ res / kr1, res2 / kr1 ];
    }



    arrayOfAngles.forEach((el) => {
        TTP = []
        TTS = []
        deg = []

        deg0 = el;
        let deg_zero = pi * deg0 / 180.0;

        // Значення кутів перевірено
        for(let i = 0; i < NN; i++)
        {
            deg[i] = Math.asin(p0 * 1.0 / np[i] * Math.sin(deg_zero));
        }

        p0_P = p0 * 1.0 / Math.cos(deg_zero);
        ps_P = ps * 1.0 / Math.cos( Math.asin( p0 / ps * Math.sin(deg_zero) ) );


        p0_S = p0 * Math.cos(deg_zero);
        ps_S = ps * Math.cos( Math.asin( p0 / ps * Math.sin(deg_zero) ) );

        Calculate(NN, np, dp, deg);
        // let res_1: number[] = AverageValue();
        RES_TTP.push(TTP);
        RES_TTS.push(TTS);
        Label.push(`Angle ${el}`)
    })

    // for(let iter = 0; iter <= 80; iter++)
    // {
    //     TTP = []
    //     TTS = []
    //     deg = []

    //     deg0 = iter;
    //     let deg_zero = pi * deg0 / 180.0;

    //     // Значення кутів перевірено
    //     for(let i = 0; i < NN; i++)
    //     {
    //         deg[i] = Math.asin(p0 * 1.0 / np[i] * Math.sin(deg_zero));
    //     }

    //     p0_P = p0 * 1.0 / Math.cos(deg_zero);
    //     ps_P = ps * 1.0 / Math.cos( Math.asin( p0 / ps * Math.sin(deg_zero) ) );


    //     p0_S = p0 * Math.cos(deg_zero);
    //     ps_S = ps * Math.cos( Math.asin( p0 / ps * Math.sin(deg_zero) ) );

    //     Calculate(NN, np, dp, deg);
    //     // let res_1: number[] = AverageValue();
    //     RES_TTP.push(TTP);
    //     RES_TTS.push(TTS);
    //     Label.push(`Angle ${index}`)
    // }

    if(isChart) {
        let result = Label.map((el, index) => {
            let points = RES_TTP[index].map((el, index1) => {
                return {
                    secondary: el,
                    primary: L[index1],
                }
            })

            return {
                label: el + "TTP",
                data: points
            }
        })

        result = [...result, ...Label.map((el, index) => {
            let points = RES_TTS[index].map((el, index1) => {
                return {
                    secondary: el,
                    primary: L[index1],
                }
            })

            return {
                label: el + "TTS",
                data: points
            }
        })]

        return { data: result } as unknown as ResultCalculationForChart
    }
    else 
    {
        let AVG: number = (RES_TTP[0].reduce((a, b) => (a + b)) / RES_TTP[0].length 
                        + RES_TTS[0].reduce((a, b) => (a + b)) / RES_TTS[0].length) / 2
        return {
            RES_TTP,
            RES_TTS,
            L,
            AVG,
        } as unknown as ResultCalculation
    }
}

export { Calculation }