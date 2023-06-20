import React, { useCallback, useContext, useEffect, useMemo, useState } from "react";
import Send from '@mui/icons-material/Send'
import { AccordionLayer } from "../../../components/AccordionLayer";
import { LanguageContextType, LayerParams, ResultCalculationForChart } from "../../../Interfaces/PropsInteface";
import { Slider, TextField, Button, FormGroup, FormControlLabel, Checkbox } from "@mui/material";
import { Calculation } from "../Calculation";
import DisplayChart from "../../DisplayChart";

import { LanguageContext } from "../../../Context/myContext";



function Page1(props: { language: string; }) {
	const {language} = useContext(LanguageContext) as LanguageContextType;
    let data2 =  useMemo(() => {
        return {
        en:{
          par1:"Structure parameters",
          par2:"Structure parameters",
          par3:"Structure parameters",
          ind1:"Refractive index of the medium",
          ind2:"Refractive index of the substrate",
          krok: "Step",
          layers:"Number of layers",
          freq:"Frequency",
          layer:"Layer",
          angles:"Angles of incidence",
          graph:"Graph",
          refr:"Refractive index",
          density:"Density",
          apply:"APPLY",
          showgraph:"SHOW GRAPH"
       },
        ua: {
           par1:"Параметри структури",
           par2:"Параметри структури",
           par3:"Параметри структури",
           ind1:"Показник заломлення середовища",
           ind2:"Показник заломлення підкладки",
           krok: "Крок",
           layers:"Кількість шарів",
           freq:"Частота",
           layer:"Шар",
           angles:"Кути падіння",
           graph:"Графік",
           refr:"Показник заломлення",
           density:"Товщина",
           apply:"ПРИЙНЯТИ",
           showgraph:"ПОКАЗАТИ ГРАФІК"
         }
       }
    }, []);
       const [strings, setStrings] = useState(language==="en"?data2["en"]:data2["ua"]||null);



       useEffect(()=>{setStrings(language==="en"?data2["en"]:data2["ua"]||null)}, [data2, language])

    const [listOfLayerParams, setListOfLayerParams] = React.useState<LayerParams[]>([]);
    const [spectrumRange, setSpectrumRange] = React.useState<number[]>([20, 37]);
    const [arrayOfAngles, setArrayOfAngles] = React.useState<boolean[]>([
        false, false, false, false, false, false, false, false, false, false,
        false, false, false, false, false, false, false, false, false, false,
        false, false, false, false, false, false, false, false, false, false,
        false, false, false, false, false, false, false, false, false, false,
        false, false, false, false, false, false, false, false, false, false,
        false, false, false, false, false, false, false, false, false, false,
        false, false, false, false, false, false, false, false, false, false,
        false, false, false, false, false, false, false, false, false, false,
        false,
    ]);
    
    // Методвідслідковує чи змінились дані для конкретного шару
    // перевіряти довжтину не потрібно, бо вона буде змінуватись в залежності від значення
    // кількості шарів
    const handlerChangeParam = (id: number, n: number, d: number) => {
        const values = new LayerParams(n, d);
        listOfLayerParams[id] = values;
        setListOfLayerParams(listOfLayerParams);
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


    const [refractiveIndexOfMedium, setRefractiveIndexOfMedium] = React.useState<number>(1)
    const [refractiveIndexOfSubstrate, setRefractiveIndexOfSubstrate] = React.useState<number>(1)
    const [numberOfLayers, setNumberOfLayers] = React.useState<number>(2);
    const [krok, setKrok] = React.useState<number>(1);

    const hangleChangeNumberOfLayers = useCallback(() => {
        const newArray: LayerParams[] = []
        
        for(let i = 0; i < numberOfLayers; i++) {
            newArray.push(new LayerParams(1.56, 171));
        }
        
        setListOfLayerParams(newArray)
    }, [])

    const handlerChangeCheckbox = (index: number) => {
        arrayOfAngles[index] = !arrayOfAngles[index]
        setArrayOfAngles(arrayOfAngles)
    }



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
        const arraOfAnglesNoBoolean: number[] = []
        
        for(let i = 0; i < arrayOfAngles.length; i++) {
            if(arrayOfAngles[i]) {
                arraOfAnglesNoBoolean.push(i);
            }
        }

        const res: ResultCalculationForChart = Calculation({
            p0: refractiveIndexOfMedium,
            ps: refractiveIndexOfSubstrate,
            NN: numberOfLayers,
            krok: krok,
            nl1: spectrumRange[0],
            nl2: spectrumRange[1],

            arrayOfAngles: arraOfAnglesNoBoolean,
        
            np: listOfLayerParams.map((el) => {
                return el.n
            }),

            dp: listOfLayerParams.map((el) => {
                return el.d
            }),

            isChart: true,
        }) as ResultCalculationForChart;

        setData(res);

    }



    useEffect(() => {
        hangleChangeNumberOfLayers();
    }, [ hangleChangeNumberOfLayers ])


    
    return (
        <>
            <div className={"grid-all-parameters"}>
                <h3 className={"sector-title ttl"}>{strings.par1}</h3>
                <div className={"structure-parameters"}>
                    <h3 className={"sector-title ttl"}>{strings.par2}</h3>
                    <div className={"grid-all-parameters-content"}>
                        
                        <div className={"lable-and-textfield"}>
                            <div className={"input-lable"}> {strings.ind1} </div>
                            <TextField type={"number"} value={refractiveIndexOfMedium} onChange={(value) => setRefractiveIndexOfMedium(value.target.value as unknown as number)} label="1.51 ... 2.1" focused />
                        </div>

                        <div className={"lable-and-textfield"}>
                            <div className={"input-lable"}> {strings.ind2} </div>
                            <div style={{
                                "width": "100%",
                                "display": "flex",
                                "justifyContent": "space-between",
                            }}>
                                <TextField type={"number"} value={refractiveIndexOfSubstrate} onChange={(value) => setRefractiveIndexOfSubstrate(value.target.value as unknown as number)} sx={{"width": "100%"}} label="1.51 ... 2.1" focused />
                            </div>
                            
                        </div>

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
                        
                        {/* Крок */}
                        <div className={"lable-and-textfield"}>
                            <div className={"input-lable"}> {strings.krok} </div>
                            <div style={{
                                "width": "100%",
                                "display": "flex",
                                "justifyContent": "space-between",
                            }}>
                                <TextField type={"number"} value={krok} onChange={(value) => setKrok(value.target.value as unknown as number)} sx={{"width": "100%"}} label="1.51 ... 2.1" focused />
                            </div>
                            
                        </div>

                    </div>
                </div>
                <div className={"layer-parameters"}>
                    <h3 className={"sector-title ttl"}>{strings.par3}</h3>
                    
                    <div className={"grid-all-parameters-content"}>
                        {
                            listOfLayerParams.map((e: LayerParams, index: number) => {
                                return (
                                    <AccordionLayer language={props.language} key={index} handlerChangeParam={handlerChangeParam} index={index+1} n={e.n} d={e.d}/>
                                )
                            })
                        }
                    </div>
                </div>
            </div>

            <div className="div-deg">
                <h3 className={"sector-title ttl"}>{strings.angles}</h3>
                <div className={"deg-box"}>
                    <div className={"div-deg-content"}>
                        <FormGroup>
                            {
                                arrayOfAngles.map((el, index) => {
                                    return <>
                                        <FormControlLabel value={arrayOfAngles[index]} onChange={() => handlerChangeCheckbox(index)}  control={<Checkbox />} label={`${index}`} />
                                    </>
                                })
                            }
                        </FormGroup>
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

export default Page1