
import { ResultCalculation, PropsOptimization, ResultOptimization } from '../../../Interfaces/PropsInteface'
import { Calculation } from '../Calculation'


const Optimization = (props: PropsOptimization) => {

    let p0: number = props.p0;
    let ps: number = props.ps;
    let krok: number = props.krok;
    let nl1: number = props.nl1;
    let nl2: number = props.nl2;
    const NN: number = props.NN;
    const angle: number = props.arrayOfAngles[0]


    const d_min = 100, d_max = 800
    const n_min = 1.2, n_max = 2.1
    
    
    // Визначте початкові значення для n і d кожного шару плівки
    let n_initial: number[] = []  // Початкові показники заломлення
    let d_initial: number[] = []  // Початкові товщини в нм

    if(props.setParameters) {
        n_initial = props.np as number[]
        d_initial = props.dp as number[]
    } else {
        for(let i = 0; i < NN; i++) {
            if(i & 1) {
                n_initial.push(1.35)
            } else {
                n_initial.push(2.0)
            }
            d_initial.push(300)
        }  
    }

    // Визначити інші параметри
    let learning_rate: number = 0.01  // Розмір кроку або швидкість навчання
    let max_iterations: number = 1000  // Максимальна кількість ітерацій
    // let convergence_threshold: number = 1e-6  // Поріг конвергенції
    let updated_transmittance: number = 0;

    // Функція для знаходження показника пропускання в точці
    const calculateTransmittance = (n: number[], d: number[], angle: number) => {
        const res: ResultCalculation = Calculation({
            p0,
            ps,
            NN,
            krok,
            nl1,
            nl2,
            arrayOfAngles: [angle],
            np: n,
            dp: d,
            isChart: false,
        }) as ResultCalculation
        res.AVG = -res.AVG
        return res;
    }

    
    // Функція яка шукає градієнт
    const calculateGradient = (n: number[], d: number[], angle: number) => {
        let epsilon: number = 0.01

        let range_n = n_max - n_min
        let range_d = d_max - d_min

        let num_layers:number = NN
        let gradient: number[] = []
        
        // Стоврюємо вектор градієнту
        for(let i = 0; i < 2 * NN; i++) {
            gradient.push(0);
        }

        // Шукаємо значення коефіцієнта
        let transmittance: number = calculateTransmittance(n, d, angle).AVG

        for(let i = 0; i < num_layers; i++) {
            // Стоврюємо навий масив
            let n_plus = [...n];
            n_plus[i] += epsilon * range_n

            // Знаходимо значення при трансформації параметру n
            let transmittance_plus: number = calculateTransmittance(n_plus, d, angle).AVG

            // Обчисліть часткову похідну коефіцієнта пропускання по n[i]
            gradient[i] = (transmittance_plus - transmittance) / epsilon

            // Створюємо новий масив
            let d_plus = [...d]
            d_plus[i] += epsilon * range_d

            // Знаходимо значення при трансформації параметру d_plus
            transmittance_plus = calculateTransmittance(n, d_plus, angle).AVG

            // Обчисліть часткову похідну коефіцієнта пропускання по d
            gradient[num_layers + i] = (transmittance_plus - transmittance) / epsilon
        }

        return gradient
    }


    // Цикл оптимізації градієнтного спуску
    for(let iteration = 0; iteration < max_iterations; iteration++) {
        // Знаходимо коефіцієнт пропускання
        // let current_transmittance: number = calculateTransmittance(n_initial, d_initial, angle).AVG;

        // Знаходимо градієнт
        let gradient: number[] = calculateGradient(n_initial, d_initial, angle)

        // Оновлюємо значення n та d
        let n_updated: number[] = n_initial.map((el, index) => {
            return el - learning_rate * gradient[index];
        });


        let d_updated: number[] = d_initial.map((el, index) => {
            return el - learning_rate * gradient[NN + index]
        }) ;

        // Знаходимо нове значення коефіцієнту пропускання
        updated_transmittance = calculateTransmittance(n_updated, d_updated, angle).AVG

        // // Check convergence
        // if (Math.abs(updated_transmittance - current_transmittance) < convergence_threshold) {
        //     // console.log(gradient)
        //     break
        // }

        // Оновлюємо значення для наступної ітерації
        n_initial = n_updated.map((el) => {
            return Math.min(Math.max(el, n_min), n_max);
        })

        d_initial = d_updated.map((el) => {
            return Math.min(Math.max(el, d_min), d_max);
        })
    }

    
    console.log("Optimized n values:", n_initial)
    console.log("Optimized d values:", d_initial)
    console.log("Maximum transmittance:", updated_transmittance)

    return {
        n: n_initial,
        d: d_initial,
        max: -updated_transmittance
    } as ResultOptimization
}

export default Optimization