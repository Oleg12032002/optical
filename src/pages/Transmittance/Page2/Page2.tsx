import React, { useCallback, useContext, useEffect, useMemo, useState } from "react";

import Send from '@mui/icons-material/Send'
import { AccordionLayer } from "../../../components/AccordionLayer";
import { LanguageContextType, LayerParams, ResultCalculationForChart, ResultOptimization } from "../../../Interfaces/PropsInteface";
import { Slider, TextField, Button, FormGroup, FormControlLabel, Checkbox, RadioGroup, FormControl, Radio } from "@mui/material";
import { Calculation } from "../Calculation";
import DisplayChart from "../../DisplayChart";
import Optimization from "./Optimization";

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { LanguageContext } from "../../../Context/myContext";



function Page2(props: { language: string; }) {
    const {language} = useContext(LanguageContext) as LanguageContextType;
    let data2 = useMemo( () => {
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
          showgraph:"SHOW GRAPH",
          layern:"Layer number",
          opt:"The optimal value of the transmission coefficient"
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
           showgraph:"ПОКАЗАТИ ГРАФІК",
           layern:"Номер шару",
           opt:"Оптимальне значення коефіцієнта пропускання"
         }
       }
    }, []);

       const [strings, setStrings] = useState(language==="en"?data2["en"]:data2["ua"]||null);



       useEffect(()=>{setStrings(language==="en"?data2["en"]:data2["ua"]||null)},[data2, language])

    const [listOfLayerParams, setListOfLayerParams] = React.useState<LayerParams[]>([]);
    const [spectrumRange, setSpectrumRange] = React.useState<number[]>([450, 750]);
    const [angle, setAngle] = React.useState<number>(1);

    const [listOfLayerNOptimization, setListOfLayerNOptimization] = React.useState<number[]>([]);
    const [listOfLayerDOptimization, setListOfLayerDOptimization] = React.useState<number[]>([]);
    const [maxValueOptimization, setMaxValueOptimization] = React.useState<number>(0);
    
    
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


    const [refractiveIndexOfMedium, setRefractiveIndexOfMedium] = React.useState<number>(1.35)
    const [refractiveIndexOfSubstrate, setRefractiveIndexOfSubstrate] = React.useState<number>(2.1)
    const [numberOfLayers, setNumberOfLayers] = React.useState<number>(2);
    const [krok, setKrok] = React.useState<number>(1);
    const [optionSetParameters, setOptionSetParameters] = React.useState<boolean>(false);
    

    const hangleChangeNumberOfLayers = useCallback(() => {
        const newArray: LayerParams[] = []
        
        for(let i = 0; i < numberOfLayers; i++) {
            newArray.push(new LayerParams(1.56, 171));
        }
        
        setListOfLayerParams(newArray)
    }, [])

    const handlerChangeRadio = (value: number) => {
        setAngle(value)
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

        let optimixationValue: ResultOptimization = Optimization({
            p0: refractiveIndexOfMedium,
            ps: refractiveIndexOfSubstrate,
            NN: numberOfLayers,
            krok: 1,
            nl1: spectrumRange[0],
            nl2: spectrumRange[1],

            arrayOfAngles: [angle],
        
            np: !optionSetParameters ? [] : listOfLayerParams.map((el) => {
                return el.n
            }),

            dp: !optionSetParameters ? [] : listOfLayerParams.map((el) => {
                return el.d
            }),

            setParameters: optionSetParameters,
        });

        const res: ResultCalculationForChart = Calculation({
            p0: refractiveIndexOfMedium,
            ps: refractiveIndexOfSubstrate,
            NN: numberOfLayers,
            krok: 1,
            nl1: spectrumRange[0],
            nl2: spectrumRange[1],

            arrayOfAngles: [angle],
        
            np: optimixationValue.n,

            dp: optimixationValue.d,

            isChart: true,
        }) as ResultCalculationForChart;

        setData(res);

        setListOfLayerDOptimization(optimixationValue.d)
        setListOfLayerNOptimization(optimixationValue.n)
        setMaxValueOptimization(optimixationValue.max)
    }



    useEffect(() => {
        hangleChangeNumberOfLayers();
    }, [ hangleChangeNumberOfLayers ])


    
    return (
        <div style={{"margin": "30px 20px"}}>
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
                                <TextField type={"number"} value={krok} onChange={(value) => setKrok(value.target.value as unknown as number)} sx={{"width": "100%"}} label="1 .. 10" focused />
                            </div>
                            
                        </div>

                    </div>
                </div>
                <div className={"layer-parameters"}>
                    <h3 className={"sector-title ttl"}>{strings.par3}</h3>
                    
                    <div className={"grid-all-parameters-content"}>
                        <FormGroup>
                            <FormControlLabel value={optionSetParameters} onChange={(e) => setOptionSetParameters(!optionSetParameters)}  control={<Checkbox />} label={`${"Установити параметри вручну"}`} />
                        </FormGroup>

                        { optionSetParameters &&
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

            <Button onClick={() => handlerClickShowSchedule()} sx={{"width":"100%"}} variant="contained" endIcon={<Send />}>
              {strings.showgraph}
            </Button>

            <div style={{"minHeight": "400px"}} className="div-chart">
                <h3 className={"sector-title ttl"}>{strings.graph}</h3>
                <div className={"chart-box"}>
                    <DisplayChart data={data as ResultCalculationForChart} />
                </div>
            </div> 

            <div className="container-params-optimization">
                <TableContainer component={Paper} >
                    <Table aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>{strings.layern} №</TableCell>
                                <TableCell align="right">n</TableCell>
                                <TableCell align="right">d</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {
                                listOfLayerNOptimization.map((n, index) => (
                                    <TableRow key={index} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                        <TableCell component="th" scope="row">{`${index + 1}`}</TableCell>
                                        
                                        <TableCell align="right">{n}</TableCell>
                                        <TableCell align="right">{listOfLayerDOptimization[index]}</TableCell>
                                    </TableRow>
                                ))
                            }
                        </TableBody>
                    </Table>

                    <Table aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>{strings.opt}</TableCell>
                                <TableCell align="right">{maxValueOptimization}</TableCell>
                            </TableRow>
                        </TableHead>
                    </Table>
                </TableContainer>
            </div>



                {/* Показати параметри */}
        </div>
    )
}

export default Page2