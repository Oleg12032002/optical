import React, { useEffect } from "react";
import Send from '@mui/icons-material/Send'
import { AccordionLayer } from "../../components/AccordionLayer";
import { LayerParams, ResultCalculationForChart } from "../../Interfaces/PropsInteface";
import { Slider, TextField, Button, FormControlLabel, Radio, FormControl, RadioGroup } from "@mui/material";
import { Calculation } from "../Transmittance/Calculation";

import LocalizedStrings from 'react-localization';
import CanvasComponent from "./CanvasComponent";

let strings = new LocalizedStrings({
 en:{
   par1:"Structure parameters",
   par2:"Structure parameters",
   par3:"Structure parameters",
   ind1:"Refractive index of the medium",
   ind2:"Refractive index of the substrate",
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
});

function Page3(props: { language: string; }) {
    if(props.language==='en'){
        strings.setLanguage('en')
    }	else {
        strings.setLanguage('ua')
    }
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
    const [angle, setAngle] = React.useState<number>(1);
    const handlerChangeRadio = (value: number) => {
        setAngle(value)
    }
    
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
    const [defectN, setDefectN] = React.useState<number>(1.3);
    const [defectD, setDefectD] = React.useState<number>(40);
    const [defectLayer, setDefectLayer] = React.useState<number>(1);
    const [defectDepth, setDefectDepth] = React.useState<number>(30);
    


    const hangleChangeNumberOfLayers = () => {
        const newArray: LayerParams[] = []
        
        for(let i = 0; i < numberOfLayers; i++) {
            newArray.push(new LayerParams(1.56, 171));
        }
        
        setListOfLayerParams(newArray)
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
                            <div className={"input-lable"}> Товщина дефекту </div>
                            <TextField type={"number"} value={defectD} onChange={(value) => setDefectD(value.target.value as unknown as number)} label="1.51 ... 2.1" focused />
                        </div>

                        <div className={"lable-and-textfield"}>
                            <div className={"input-lable"}> Показник заломлення дефекту </div>
                            <TextField type={"number"} value={defectN} onChange={(value) => setDefectN(value.target.value as unknown as number)} label="1.51 ... 2.1" focused />
                        </div>

                        <div className={"lable-and-textfield"}>
                            <div className={"input-lable"}> Номер шару з дефектом </div>
                            <TextField type={"number"} value={defectLayer} onChange={(value) => setDefectLayer(value.target.value as unknown as number)} label="1.51 ... 2.1" focused />
                        </div>

                        <div className={"lable-and-textfield"}>
                            <div className={"input-lable"}> Глибина дефекту </div>
                            <TextField type={"number"} value={defectDepth} onChange={(value) => setDefectDepth(value.target.value as unknown as number)} label="1.51 ... 2.1" focused />
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

                    </div>
                </div>
                <div className={"layer-parameters"}>
                    <h3 className={"sector-title ttl"}>{strings.par3}</h3>
                    
                    <div className={"grid-all-parameters-content"}>
                        {
                            listOfLayerParams.map((e: LayerParams, index: number) => {
                                return (
                                    <AccordionLayer language={props.language} key={index} handlerChangeParam={handlerChangeParam} index={index} n={e.n} d={e.d}/>
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
                    <FormControl>
                            <RadioGroup
                                aria-labelledby="demo-radio-buttons-group-label"
                                name="radio-buttons-group"
                                value={angle} 
                                onChange={(value) => handlerChangeRadio(value.target.value as unknown as number)}
                            >
                                {
                                    [   
                                        0, 1, 2, 3, 4, 5, 6, 7, 8, 9,
                                        10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
                                        20, 21, 22, 23, 24, 25, 26, 27, 28, 29,
                                        30, 31, 32, 33, 34, 35, 36, 37, 38, 39,
                                        40, 41, 42, 43, 44, 45, 46, 47, 48, 49,
                                        50, 51, 52, 53, 54, 55, 56, 57, 58, 59,
                                        60, 61, 62, 63, 64, 65, 66, 67, 68, 69,
                                        70, 71, 72, 73, 74, 75, 76, 77, 78, 79,
                                        80
                                    ].map((el) => {
                                        return <>
                                            <FormControlLabel value={el} control={<Radio />} label={`${el}`} />
                                        </>
                                    })
                                }
                            </RadioGroup>
                        </FormControl>
                    </div>
                </div>
            </div>
            
            <hr></hr>

            <div style={{"minHeight": "400px"}} className="div-chart">
                <h3 className={"sector-title ttl"}>{strings.graph}</h3>
                <div style={{ overflow:"scroll" }} className={"chart-box"}>
                    <CanvasComponent 
                        n = { listOfLayerParams.map((e) => e.n) }
                        defN = { defectN }
                        k = {1}
                        p0 = { refractiveIndexOfMedium }
                        depth = { defectDepth }
                        nk = { defectD }
                        dp = { listOfLayerParams.map((e) => e.d) }
                        labelStart = { angle }
                    />
                </div>
            </div>     
        </>
    )
}

export default Page3