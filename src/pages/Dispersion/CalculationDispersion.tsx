import { PropsDispersion, ResultCalculationForChart } from "../../Interfaces/PropsInteface"

// const CalculationDispersion = (props: PropCalculation) => {

//     let p0: number = props.p0;
//     let ps: number = props.ps;

//     let NN: number = props.NN;
//     let krok: number = props.krok;
//     let nl1: number = props.nl1;
//     let nl2: number = props.nl2;
//     let np: number[] = props.np;
//     let dp: number[] = props.dp;

//     const angle: number = props.arrayOfAngles[0]

//     let deg0: number = 0;
//     let pi: number = Math.PI;
//     let deg: number[] = []

//     deg0 = angle;
//     let deg_zero = pi * deg0 / 180.0;

//     // Значення кутів перевірено
//     for(let i = 0; i < NN; i++)
//     {
//         deg[i] = Math.asin(p0 * 1.0 / np[i] * Math.sin(deg_zero));
//     }

//     let RES_F: number[] = [];
//     let L: number[] = [];

//     let kr1: number = Math.floor( (nl2 - nl1) / krok ) + 1;


//     const findDeltaF = (n1: number, n2: number, d: number, deg_0: number, l: number) => {
//         let res: number = 2 * pi * d * Math.sqrt( Math.abs(n1 * n1 * Math.sin(deg_0) * Math.sin(deg_0) - n2 * n2) ) / l; 
//         return res
//     }

//     const sumDeltaF = (l: number) => {
//         let all_n = [p0, ...np, ps]
//         let sum = 0;

//         for(let i = 1; i < NN + 1; i++) {
//             sum += findDeltaF(all_n[i + 1], all_n[i - 1], dp[i - 1], deg[i - 1], l);
//         }
        
//         return sum
//     }



//     for(let i = 0; i < kr1; i++) {
//         L[i] = nl1 + krok * i;
//         RES_F[i] = sumDeltaF(L[i])
//     }

//     let res = L.map((el, index) => {
//         return {
//             primary: el,
//             secondary: RES_F[index],
//         }   
//     })


//     return {
//         data: [
//             {
//                 label: "Polarization",
//                 data: res,
//             }
//         ]
//     } as ResultCalculationForChart;

// }


const myFunction = (props: PropsDispersion) => {


    const transposeMatrix = (matrix: number[][]) => {
        const rows = matrix.length;
        const cols = matrix[0].length;

        // Створюємо нову матрицю з розміними рядками та стовпцями
        const transposedMatrix: number[][] = [];
        for (let j = 0; j < cols; j++) {
            transposedMatrix[j] = [];
        }

        // Заповнюємо транспоновану матрицю значеннями з оригінальної матриці
        for (let i = 0; i < rows; i++) {
            for (let j = 0; j < cols; j++) {
                transposedMatrix[j][i] = matrix[i][j];
            }
        }

        return transposedMatrix;
    }


    const multiplyMatrices = (matrix1: number[][], matrix2: number[][]) => {
        const rows1 = matrix1.length;
        const cols1 = matrix1[0].length;
        const cols2 = matrix2[0].length;

        // Створюємо нову матрицю з відповідними розмірами
        const resultMatrix: number[][] = [];
        for (let i = 0; i < rows1; i++) {
            resultMatrix[i] = [];
        }

        // Обчислюємо значення нової матриці шляхом множення та сумування елементів
        for (let i = 0; i < rows1; i++) {
            for (let j = 0; j < cols2; j++) {
                let sum = 0;
                    for (let k = 0; k < cols1; k++) {
                        sum += matrix1[i][k] * matrix2[k][j];
                    }
                resultMatrix[i][j] = sum;
            }
        }

        return resultMatrix;
    }

    function inverseMatrix(matrix: number[][]): number[][] {
        const n = matrix.length;

        // Створюємо одиничну матрицю такого ж розміру
        const identityMatrix: number[][] = [];
        for (let i = 0; i < n; i++) {
            identityMatrix[i] = [];
            for (let j = 0; j < n; j++) {
                identityMatrix[i][j] = i === j ? 1 : 0;
            }
        }

        // Виконуємо метод Гаусса-Жордана для знаходження оберненої матриці
        for (let i = 0; i < n; i++) {
            // Знаходимо головний елемент
            const pivot = matrix[i][i];

            // Ділимо рядок матриці та відповідного рядка одиничної матриці на головний елемент
            for (let j = 0; j < n; j++) {
                matrix[i][j] /= pivot;
                identityMatrix[i][j] /= pivot;
            }

                // Застосовуємо елементарні перетворення, щоб зробити всі елементи поза діагоналлю рівними нулю
            for (let k = 0; k < n; k++) {
                if (k !== i) {
                    const factor = matrix[k][i];
                    for (let j = 0; j < n; j++) {
                        matrix[k][j] -= factor * matrix[i][j];
                        identityMatrix[k][j] -= factor * identityMatrix[i][j];
                    }
                }
            }
        }   

        return identityMatrix;
    }


    const sum = (a: number[]) => {
        return a.reduce((summ, el) => summ + el, 0)
    }




    const n = props.x.length;
    // const i: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]

    // const y: number[] = [3.5, 3.49, 3.48, 3.47, 3.42, 3.4, 3.35, 3.29, 3.27, 3.25, 3.24, 3.23, 3.22, 3.21]
    // const y: number[] = [3.5, 3.49, 3.48, 3.47, 3.42, 3.4, 3.35, 3.29, 3.27, 3.25, 3.24, 3.23, 3.22, 3.21]
    // let x: number[] = [600, 610, 620, 630, 640, 650, 660, 670, 680, 690, 700, 710, 720, 730]

    const y: number[] = props.y.map((el)=>el as number);
    let x: number[] = props.x.map((el)=>el as number);
console.log(x, y);
    for(let i = 0; i < n - 1; i++) {
        for(let j = i + 1; j < n; j++) {
            if(x[i] > x[j]) {
                let t = x[i]
                x[i] = x[j]
                x[j] = t

                t = y[i]
                y[i] = y[j]
                y[j] = t
            }
        }
    }
    console.log(x, y);
    const Y_reverse: number[][] = [];
    for(let i = 0; i < n; i++) {
        Y_reverse.push([y[i]])
    }


    x = x.map((e) => e / 100);
    console.log(x);
    let Y = [y.map((e) => e *e)]
    console.log(Y);
    let X0 = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
    let X1 = x.map((e) => e * e)
    let X2 = x.map((e) => e * e * e * e)
    let X3 = x.map((e) => 1 / (e * e))
    let X4 = x.map((e) => 1 / (e * e * e * e))


    console.log(X4);

    let X: number[][] = []
    for(let i = 0; i < n; i++) {
        X.push([])
        for(let j = 0; j < 5; j++) {
            X[i] = [X0[i], X3[i], X4[i], X1[i], X2[i]]
        }
    }

    let XT = transposeMatrix(X)


    




    let a = multiplyMatrices(multiplyMatrices( inverseMatrix( multiplyMatrices(XT, X) ), XT), Y_reverse)
    console.log(a)
    const g = (function(A0: number, A1: number, A2: number, A3: number, A4: number) {
        return function(value: number) {
            return A0 + A1 / (value * value) + A2 / (value * value * value * value) + A3 * value * value + A4 * value * value * value * value 
        }
    })(a[0][0], a[1][0], a[2][0], a[3][0], a[4][0])


    // let b = y.map((el, index) => {
    //     return el - g(x[index])
    // })

    
    let ys = 1 / n * sum(y)


    // let minus = y.map((el) => (el - ys) * (el - ys))
    // let R2 = 1 - sum(b) + sum(minus)



    // interface ResultCalculationForChart {
    //     data: {
    //         label: string;
    //         data: {
    //             primary: string | number | Date | null;
    //             secondary: number | null;
    //             radius: number | undefined;
    //         }[];
    //     }[]
    // }

    
    let result_g = x.map((el, index) => g(x[index]))
    console.log(result_g)
let x_2: number [] = [];
let k1, k2;
k1 = props.spectrumRange[0];
k2 = props.spectrumRange[1];
while(k1<k2) {
    x_2.push(k1/100);
    k1+=5;
}
    let data = [  
       
        {
            label: "2",
            data: x_2.map((el) => {
                let val = g(el);
                return {
                    primary: el,
                    secondary: val
                }
            })
        },
    ]
    console.log(data)
    return { data: data } as ResultCalculationForChart
}




export { myFunction }
// export default CalculationDispersion