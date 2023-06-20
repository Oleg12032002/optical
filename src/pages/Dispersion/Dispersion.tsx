import React, { useCallback, useContext, useEffect, useMemo, useState } from "react";
import Send from '@mui/icons-material/Send'
import { AccordionLayer } from "../../components/Accordion2";
import { LanguageContextType, ResultCalculationForChart } from "../../Interfaces/PropsInteface";
import { Slider, TextField, Button } from "@mui/material";
import DisplayChart from "../DisplayChart";

import { myFunction } from "./CalculationDispersion"
import { LanguageContext } from "../../Context/myContext";


function Dispersion (props: { language: string; })  {
    const {language} = useContext(LanguageContext) as LanguageContextType;

    let data2 = useMemo(() => {
        return {
            en:{
            par1:"Structure parameters",
            par2:"Structure parameters",
            par3:"Structure parameters",
            ind1:"Refractive index of the medium",
            ind2:"Refractive index of the substrate",
            layers:"Number of known points",
            freq:"Wave range",
            layer:"Layer",
            angles:"Angles of incidence",
            graph:"Dispersion graph",
            refr:"Refractive index",
            density:"Density",
            apply:"APPLY",
            showgraph:"SHOW POLARIZATION GRAPH",
        },
            ua: {
            par1:"Параметри структури",
            par2:"Параметри структури",
            par3:"Параметри структури",
            ind1:"Показник заломлення середовища",
            ind2:"Показник заломлення підкладки",
            layers:"Кількість відомих точок",
            freq:"Діапазон хвиль",
            layer:"Шар",
            angles:"Кути падіння",
            graph:"Графік дисперсії",
            refr:"Показник заломлення",
            density:"Товщина",
            apply:"ПРИЙНЯТИ",
            showgraph:"ПОКАЗАТИ ГРАФІК ДИСПЕРСІЇ",
            }
        }
       }, [])

    const [strings, setStrings] = useState(language==="en"?data2["en"]:data2["ua"]||null);



    useEffect(()=>{setStrings(language==="en"?data2["en"]:data2["ua"]||null)},[data2, language])

   // const [listOfLayerParams, setListOfLayerParams] = React.useState<LayerParams[]>([]);
    const [spectrumRange, setSpectrumRange] = React.useState<number[]>([20, 37]);
    const [xArr, setXArr] = React.useState<number[]>([]);
    const [yArr, setYArr] = React.useState<number[]>([]);
    // const [angle, setAngle] = React.useState<number>(1);
    
    // Методвідслідковує чи змінились дані для конкретного шару
    // перевіряти довжтину не потрібно, бо вона буде змінуватись в залежності від значення
    // кількості шарів
    const handlerChangeParam = (id: number, x: number, y: number) => {
        xArr[id] = x;
        yArr[id] = y;
        setXArr(xArr);
        setYArr(yArr);
    }

    const handlerChangeSlider = (
      event: Event,
      newValue: number | number[],
      activeThumb: number,
    ) => {
        const minDistance: number = 10;

        if (!Array.isArray(newValue)) {
            return;
        }

        if (activeThumb === 0) {
            setSpectrumRange([Math.min(newValue[0], spectrumRange[1] - minDistance), spectrumRange[1]]);
        } else {
            setSpectrumRange([spectrumRange[0], Math.max(newValue[1], spectrumRange[0] + minDistance)]);
        }
    };


    // const [refractiveIndexOfMedium, setRefractiveIndexOfMedium] = React.useState<number>(1)
    // const [refractiveIndexOfSubstrate, setRefractiveIndexOfSubstrate] = React.useState<number>(1)
    const [numberOfLayers, setNumberOfLayers] = React.useState<number>(2);


    const hangleChangeNumberOfLayers = useCallback(() => {
        const newArray: number[] = []
        const newArray2: number[] = []
        for(let i = 0; i < numberOfLayers; i++) {
            newArray.push(400);
            newArray2.push(2)
        }
        
       setXArr(newArray);
       setYArr(newArray2);
    }, [numberOfLayers])

    // const handlerChangeRadio = (value: number) => {
    //     setAngle(value)
    // }



    const [data, setData] = React.useState<ResultCalculationForChart>( 
        {
            data: [
                {
                    label: "",
                    data: [
                        {
                            primary: 0,
                            secondary: 0,
                        }
                    ]
                },
            ]
        } as ResultCalculationForChart
    );

    const handlerClickShowSchedule = () => {
        // const res = CalculationDispersion({
        //     p0: refractiveIndexOfMedium,
        //     ps: refractiveIndexOfSubstrate,
        //     NN: numberOfLayers,
        //     krok: 1,
        //     nl1: spectrumRange[0],
        //     nl2: spectrumRange[1],

        //     arrayOfAngles: [angle],
        
        //     np: listOfLayerParams.map((el) => {
        //         return el.n
        //     }),

        //     dp: listOfLayerParams.map((el) => {
        //         return el.d
        //     }),

        //     isChart: true,
        // }) as ResultCalculationForChart

        const res = myFunction({
        x: xArr,
        y: yArr,
        spectrumRange: spectrumRange
        }) as ResultCalculationForChart;
        
        setData(res)
    }



    useEffect(() => {
        hangleChangeNumberOfLayers();
    }, [hangleChangeNumberOfLayers])


    
    return (
        <>
            <div className={"grid-all-parameters"}>
                <h3 className={"sector-title ttl"}>{strings.par1}</h3>
                <div className={"structure-parameters"}>
                    <h3 className={"sector-title ttl"}>{strings.par2}</h3>
                    <div className={"grid-all-parameters-content"}>


                        <div className={"lable-and-textfield"}>
                            <div className={"input-lable"}> {strings.layers} </div>
                            <div style={{
                                "width": "100%",
                                "display": "flex",
                                "justifyContent": "space-between",
                            }}>
                                <TextField value={numberOfLayers} onChange={(value) => setNumberOfLayers(value.target.value as unknown as number)} sx={{"width": "100%"}} label="2 ... 100" focused />
                                <Button onClick={() => hangleChangeNumberOfLayers()} sx={{"marginLeft": "10px"}} variant="contained" endIcon={<Send />}>
                                  {strings.apply}
                                </Button>
                            </div>
                        </div>

                        <div className={"lable-and-textfield"}>
                            <div className={"input-lable"}> {strings.freq} </div>
                            <Slider
                                getAriaLabel={() => 'Minimum distance'}
                                value={spectrumRange}
                                onChange={handlerChangeSlider}
                                valueLabelDisplay="auto"
                                getAriaValueText={() => " " + spectrumRange}
                                disableSwap
                                min={400}
                                max={800}
                            />
                        </div>

                    </div>
                </div>
                <div className={"layer-parameters"}>
                    <h3 className={"sector-title ttl"}>{strings.par3}</h3>
                    
                    <div className={"grid-all-parameters-content"}>
                        {
                            xArr.map((e: number, index: number) => {
                                return (
                                    <AccordionLayer language={props.language} key={index} handlerChangeParam={handlerChangeParam} index={index+1} x={xArr[index]} y={yArr[index]}/>
                                )
                            })
                        }
                    </div>
                </div>
            </div>

           

            <Button onClick={() => handlerClickShowSchedule()} sx={{"width":"100%"}} variant="contained" endIcon={<Send />}>
              {strings.showgraph}
            </Button>

            <div style={{"minHeight": "400px"}} className="div-chart">
                <h3 className={"sector-title ttl"}>{strings.graph}</h3>
                <div className={"chart-box"}>
                    <DisplayChart data={data as ResultCalculationForChart} />
                </div>
            </div>     
        </>
    )
}

export default Dispersion