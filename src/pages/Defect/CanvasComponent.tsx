import React, { useRef, useEffect } from 'react';

interface CanvasProps {
    n: number[],
    defN: number,
    k: number,
    p0: number,
    depth: number,
    nk: number,
    dp: number[],
    labelStart: number,
}



const CanvasComponent = (props: CanvasProps) => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const { n, defN, k, p0, depth, nk, dp, labelStart } = props;

    useEffect(() => {
        let newN: number[] = []

        for(let i = 0; i < k; i++) {
            newN.push(n[i]);
        }

        newN.push(defN);

        let sum = dp[k - 1] - depth - nk;
        let startt = sum <= 0 ? k : k - 1

        for(let i = startt; i < n.length; i++) {
            newN.push(n[i]);
        }



        let height_canvas = 150; // Є відступи зверху та знизу
        for (let i = 0; i < dp.length; i++) {
            height_canvas += +dp[i];
            console.log(dp[i]);
        }

        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctxCanvas = canvas.getContext('2d');


        function fun1_2() {
            // Промальовка елементів

            // Обчислення значень кутів падіння

            let label = labelStart;

            label = label * Math.PI / 180;


            let deg_zero = label;
            let angleR1 = [];
            let angleR2 = [];

            for (let i = 0; i < n.length; i++) {
                angleR1[i] = 90  * Math.PI / 180 - Math.asin(p0 * 1.0 / n[i] * Math.sin(deg_zero));
            }

            for (let i = 0; i < newN.length; i++) {
                angleR2[i] = 90  * Math.PI / 180 - Math.asin(p0 * 1.0 / newN[i] * Math.sin(deg_zero));
            }

            deg_zero = 90  * Math.PI / 180 - deg_zero;

            let summ_width = window.innerWidth;
            for(let i = 0; i < dp.length; i++) {
                summ_width += dp[i] / Math.tan(angleR1[i]);
            }

            if (!canvas) return;
            if (!ctxCanvas) return;

            canvas.width = summ_width + 1000 ;
            canvas.height = height_canvas; // Назначаємо висотою суму висот нашої плитки

            
            ctxCanvas.clearRect(0, 0, canvas.width, canvas.height);

            const newDP = []


            for(let i = 0; i < n.length; i++) {
                if(i + 1 === k) {
                    newDP.push(depth);
                    newDP.push(nk);
                    if(dp[i] - depth - nk !== 0) {
                        newDP.push(dp[i] - depth - nk);
                    }
                    continue;
                }
                newDP.push(dp[i]);
            }

            console.log(newDP)
            console.log(angleR1)
            console.log(angleR2)


            let y0 = 60; // Відступ у пікселях від верху канваса до слоїв
            let sum = y0; // Сумарна товщина слоїв до i-того блоку

            // Промальовуємо наші слої
            for(let i = 0; i < newDP.length; i++) {
                ctxCanvas.fillStyle = getRandomColor();
                ctxCanvas.fillRect(0, sum, canvas.width, (+newDP[i]));
                sum += (+newDP[i]);
            }

            let sum_line_width = canvas.width / 2;

            // Малюємо лінію ходу променя без дефекту
            ctxCanvas.strokeStyle = 'red';
            ctxCanvas.lineWidth = 1;

            ctxCanvas.beginPath();
            ctxCanvas.moveTo(sum_line_width, 10);
            ctxCanvas.lineTo(sum_line_width + (y0 - 10) / Math.tan(deg_zero), y0);
            sum_line_width += (y0 - 10) / Math.tan(deg_zero);

            sum = y0;
            for(let i = 0; i < angleR1.length; i++) {
                sum += (+dp[i]);
                ctxCanvas.lineTo( sum_line_width + dp[i] / Math.tan(angleR1[i]), sum);
                sum_line_width += dp[i] / Math.tan(angleR1[i]);
            }

            ctxCanvas.lineTo(sum_line_width + (y0 - 10) / Math.tan(deg_zero), (+sum) + 50);
            ctxCanvas.stroke();


            sum = 0;
            sum_line_width = canvas.width / 2;



            // Малюємо лінію ходу променя з дефектом
            ctxCanvas.strokeStyle = 'orange';
            ctxCanvas.lineWidth = 1;

            ctxCanvas.beginPath();
            ctxCanvas.moveTo(sum_line_width, 10);
            ctxCanvas.lineTo(sum_line_width + (y0 - 10) / Math.tan(deg_zero), y0);
            sum_line_width += (y0 - 10) / Math.tan(deg_zero);

            for(let i = 0; i < angleR2.length; i++) {
                sum += (+newDP[i]);
                ctxCanvas.lineTo( sum_line_width + newDP[i] / Math.tan(angleR2[i]), y0 + (+sum));
                console.log(sum_line_width + newDP[i] / Math.tan(angleR2[i]), y0 + (+sum));

                sum_line_width += newDP[i] / Math.tan(angleR2[i]);
            }

            ctxCanvas.lineTo(sum_line_width + (y0 - 10) / Math.tan(deg_zero), y0 + (+sum) + 50);
            ctxCanvas.stroke();


        }


        function getRandomColor() {
            var letters = '0123456789ABCDEF';
            var color = '#';
            for (var i = 0; i < 6; i++) {
                color += letters[Math.floor(Math.random() * 16)];
            }
            return color;
        }


        fun1_2();
    }, [ defN, depth, dp, k, labelStart, n, nk, p0 ]);

    return <canvas ref={canvasRef} />;
}

export default CanvasComponent;