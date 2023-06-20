import React, { useContext, useEffect, useMemo, useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
import { LanguageContext } from '../Context/myContext';
import { LanguageContextType } from '../Interfaces/PropsInteface';






function Footer (props: { language: string; }){
	const {language} = useContext(LanguageContext) as LanguageContextType;
    let data = useMemo( () => {
        return {
        en: {
            contact: "Contact us at"
    
        },
        ua: {
            contact: "Зворотній зв'язок: "
        }
        
    }
}, []);

    const [strings, setStrings] = useState(language==="en"?data["en"]:data["ua"]||null);
useEffect(()=>{setStrings(language==="en"?data["en"]:data["ua"]||null)},[data, language])
    return (
    <nav id='footer' className="navbar navbar-dark bg-dark">
        <div style={{color:'white'}}>{strings.contact} <a style={{color:'white'}} href = "optical.filters.uzhnu@gmail.com">optical.filters.uzhnu@gmail.com</a></div>
        </nav>
    );
};

export default Footer;