import React, { useContext, useEffect, useMemo, useState } from 'react';
import optics from '../images/Color-Optics.jpg';
import { LanguageContext } from '../Context/myContext';
import { LanguageContextType } from '../Interfaces/PropsInteface';



function Home() {
	
	const {language} = useContext(LanguageContext) as LanguageContextType;
	let data = useMemo( () => {
		return {
		en:{
		  title:"SPECTRAL CHARACTERISTICS CALCULATION OF OPTICAL STRUCTURES",
		  firstParagraph:"The study of multilayer interference systems and filters of optical structures dates back to the middle of the last century, however, stricter requirements for the selectivity of filters for modern optical systems have given rise to the search for optimal solutions for the designs of interference filters, since such filters allow for the selection of certain wavelengths, and are also used for separation or grouping of individual channels on both sides of optical lines.",
		  secondParagraph:"Today, the development of new types of optical thin-film filters has become particularly relevant. This is due to the wide use of these devices in various systems: in tasks of environmental control, modernization of temperature sensors, highly sensitive devices for obtaining thermal images, for example, images of human fingerprints, etc. They are practically irreplaceable in the field of telecommunications, as they have unique qualities that meet the exact requirements of optical communication systems. These qualities include: resistance to external actions, heat resistance, good optical properties, modular construction principle and scalability, serial production process, operational flexibility. The primary task of the developers remains to ensure the maximum selectivity and operational reliability of such filters while using the minimum number of thin film layers in the structures. Therefore, the development of new models of interference filters with predetermined parameters is an extremely urgent task from the point of view of manufacturing modern optical systems."
		},
		ua: {
		  title:"РОЗРАХУНОК СПЕКТРАЛЬНИХ ХАРАКТЕРИСТИК ОПТИЧНИХ СТРУКТУР",
		  firstParagraph:"Дослідження багатошарових інтерференційних систем і фільтрів оптичних структур бере свій початок ще з середини минулого століття, проте жорсткіші вимоги щодо селективності фільтрів для сучасних оптичних систем спричинили поштовх до пошуку оптимальних рішень щодоконструкцій інтерференційних фільтрів, оскільки такі фільтри дають змогу виділяти певнідовжини хвиль, а також використовуються для розділення чи групування окремих каналів по обидва боки оптичних ліній.",
	   secondParagraph:"Сьогодні особливої актуальності набуло розроблення нових типів оптичних тонкоплівкових фільтрів. Це зумовлено широким використанням цих пристроїв в різноманітних системах: у задачах екологічного контролю, модернізації температурних сенсорів, високочутливих пристроїв для отримання термічного зображення, наприклад, зображення відбитків пальців людини тощо. Вони є практично незамінимими в галузі телекомунікацій, оскільки мають унікальні у своєму роді якості, що відповідають чітким вимогам оптичних комунікаційних систем. Ці якості включають: стійкість до зовнішніх дій, термостійкість, добрі оптичні властивості, модульний принцип побудови та масштабність, серійний процес виробництва, експлуатаційну гнучкість. Першочерговим завданням розробників залишається забезпечення максимальної селективності та експлуатаційної надійності таких фільтрів під час використання мінімальної кількості тонкоплівкових шарів у структурах. Тому розробка нових моделей інтерференційних фільтрів з наперед заданими параметрами є вкрай актуальним завданням з точки зору виготовлення сучасних оптичних систем."
		}
	   }
	}, []);
	   const [strings, setStrings] = useState(language==="en"?data["en"]:data["ua"]||null);



useEffect(()=>{setStrings(language==="en"?data["en"]:data["ua"]||null)},[data, language])
// if(props.language==='en'){
// 	strings.setLanguage('en')
// }	else {
// 	strings.setLanguage('ua')
// }
return <div className='info'>
	<h1>{strings.title}</h1>
	<div>
	<div className='filtersImageDiv'><img src={optics}  className='filtersImage' alt="Optical Filters"></img></div>
		<p>{strings.firstParagraph}</p>
		 <p style={{marginTop:'-40px'}}>{strings.secondParagraph}</p>
	</div>

    </div>
	};

export default Home;