import React, { useContext, useEffect, useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
import LocalizedStrings from 'react-localization';
import { LanguageContext } from '../Context/myContext';
import { LanguageContextType } from '../Interfaces/PropsInteface';



function OpticalNumbers(props: { language: any; }) {
	const {language} = useContext(LanguageContext) as LanguageContextType;
  // const language = useContext(props.language);
  // if(language==='en'){
  //   strings.setLanguage('en')
  // }	else {
  //   strings.setLanguage('ua')
  // }
  let data = {
    en:{ title:"INDICES OF REFRACTION",
     subt: "Matter",
     subt2: "Refractive index",
     pr: "1 (exact value)",
     a:"Vacuum",
     b:"Helium",
     c:"Air",
     d:"Carbon dioxide",
     e:"Ice",
     f:"Water(20 °C)",
     g:"Acetone",
     h:"Teflon",
     i:"Glycerin",
     j:"Benzene",
     k:"Halite",
    l:"Quartz",
    m:"Mica",
    n:"Polyethylene",
    o:"Glass",
    p:"Diamond",
    r:"Gallium arsenide",
    s:"Silicon" },
    ua: {
      title:"ПОКАЗНИКИ ЗАЛОМЛЕННЯ",
      subt: "Речовина",
      subt2: "Показник заломлення",
      pr: "1 (точне значення)",
      a:"Вакуум",
      b:"Гелій",
      c:"Повітря",
      d:"Вуглекислий газ",
      e:"Лід",
      f:"Вода(20 °C)",
      g:"Ацетон",
      h:"Тефлон",
      i:"Гліцерин",
      j:"Бензол",
      k:"Кам'яна сіль",
     l:"Кварц",
     m:"Слюда",
     n:"Поліетилен",
     o:"Скло",
     p:"Діамант",
     r:"Арсенід галію",
     s:"Кремній"
    }
   };
  const [strings, setStrings] = useState(language==="en"?data["en"]:data["ua"]||null);
useEffect(()=>{setStrings(language==="en"?data["en"]:data["ua"]||null)},[language])
return <div style={{margin:'40px'}}>


   <h1>{strings.title}</h1>

  
  <table className="table table-striped" >
    <thead className="thead-dark">
    <tr>
      <th >{strings.subt}</th>
      <th >{strings.subt2}
    </th>
    </tr>
    </thead>
    <tbody>
    <tr>
      <td>
      {strings.a}</td>
      <td>{strings.pr}</td>
    </tr>
    <tr>
      <td>{strings.b}</td>
      <td>
        1.000036
      </td>
    </tr>
    <tr>
      <td>{strings.c}</td>
      <td>1.0002926
     </td>
    </tr>
    <tr>
      <td>{strings.d}</td>
      <td>1.00045</td>
    </tr>
    <tr>
      <td>{strings.e}</td>
      <td>1.31
     </td>
    </tr>
    <tr>
      <td>{strings.f}
    </td>
      <td>1.332986</td>
    </tr>
    <tr>
      <td>{strings.g}</td>
      <td>1.36</td>
    </tr>
    <tr>
      <td>MgF2
</td>
      <td>1.35-1.40</td>
    </tr>
    <tr>
      <td>CaF2</td>
      <td>1.21-1.43</td>
    </tr>
    <tr>
      <td>L1F</td>
      <td>1.29-1.35</td>
    </tr>
    <tr>
      <td>SiO</td>
      <td>1.5-1.6</td>
    </tr>
    <tr>
      <td>{strings.h}</td>
      <td>1.35 - 1.38</td>
    </tr>
    <tr>
      <td>{strings.i}</td>
      <td>1,4729</td>
    </tr>
    <tr>
      <td>{strings.j}</td>
      <td>1,500</td>
    </tr>
    <tr>
      <td>{strings.k}</td>
      <td>1.516</td>
    </tr>
    <tr>
      <td>{strings.l}</td>
      <td>1,544</td>
    </tr>
    <tr>
      <td>{strings.m}</td>
      <td>1,56-1,60</td>
    </tr>
    <tr>
      <td>{strings.n}</td>
      <td>1.5750</td>
    </tr>
    <tr>
      <td>{strings.o}</td>
      <td>1.485 - 1.925</td>
    </tr>
    <tr>
      <td>{strings.p}</td>
      <td>2.419</td>
    </tr>
    <tr>
      <td>{strings.r}</td>
      <td>3.927</td>
    </tr>
    <tr>
      <td>{strings.s}</td>
      <td>4.01</td>
    </tr>
  </tbody>
</table>

</div>

};

export default OpticalNumbers;