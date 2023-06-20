import React, { useContext, useEffect, useState, useMemo } from "react";

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Send from '@mui/icons-material/Send'

import { LanguageContextType } from "../Interfaces/PropsInteface"
import { Button, TextField } from "@mui/material";

import '../pages/Transmittance/style.css'
import { LanguageContext } from "../Context/myContext";





export function AccordionLayer(props: {language: string; x: number | (() => number); y: number | (() => number); handlerChangeParam: (arg0: any, arg1: number, arg2: number) => void; index: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; }) {
	const {language} = useContext(LanguageContext) as LanguageContextType;
    let data = useMemo( () => {
      return {
    en:{
      layer:"Point",
      density:"Refractive index",
      ind:"Wavelength",
      apply:"APPLY"
   },
    ua: {
     layer:"Точка",
     density:"Показник заломлення",
     ind:"Довжина хвилі", 
     apply:"ПРИЙНЯТИ"
     }
  }
}, []);

  const [strings, setStrings] = useState(language==="en"?data["en"]:data["ua"] || null);
  useEffect(() => {
    setStrings(language === "en" ? data["en"] : data["ua"])
  }, [data, language])
  
  const [refractiveIndex, setRefractiveIndex] = React.useState<number>(props.x)
  const [thickness, setThickness] = React.useState<number>(props.y)

  const handlerClick = () => {
    props.handlerChangeParam(props.index, refractiveIndex, thickness);
  };

  return (
    <div>
      <Accordion>
        
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1d-content" 
          id="panel1d-header"
        >
          <Typography>{strings.layer} {props.index}</Typography>
        </AccordionSummary>
        
        <AccordionDetails>
            <div className={"lable-and-textfield"}>
                <div className={"input-lable"}> {strings.ind} </div>
                <TextField 
                  type={"number"} 
                  value={refractiveIndex} 
                  onChange={(value) => setRefractiveIndex(value.target.value as unknown as number)} 
                  label="400 ... 800" focused />
            </div>


            <div className={"lable-and-textfield"}>
                <div className={"input-lable"}> {strings.density} </div>
                <TextField 
                  type={"number"} 
                  value={thickness} 
                  onChange={(value) => setThickness(value.target.value as unknown as number)} 
                  label="1.51 ... 2.1" focused />
            </div>

            <Button onClick={handlerClick} variant="contained" endIcon={<Send />}>
              {strings.apply}
            </Button>
        
        </AccordionDetails>

      </Accordion>

    </div>
  );
};
