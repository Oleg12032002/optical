import React, { useState } from 'react';
import Navbar from './components/Navbar'
import './App.css';
import Home from "./pages/Home"
import OpticalStructures from "./pages/OpticalStructures"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import OpticalNumbers from './pages/OpticalNumbers';
import Footer from './components/Footer';
import Display from './pages/Dispersion/Dispersion';
import Page1 from './pages/Transmittance/Page1/Page1';
import Page2 from './pages/Transmittance/Page2/Page2';
import Page3 from './pages/Defect/Page3';

function App() {

  const [language, setLanguage] = useState<string>('ua');

  // const pull_data = (data: string) => {
  //   window.localStorage.setItem('language',data)
  // setLanguage(data)
  // }


  return (
    <>
          <Navbar setLanguage={setLanguage}></Navbar>
          <Router>
            <Routes>
              <Route path="/optical_characteristics" element={<Home />} />
              <Route path="/optical_characteristics/structures" element={<OpticalStructures language={language}/>} />
              <Route path="/optical_characteristics/numbers" element={<OpticalNumbers language={language}/>} />
              <Route path="/optical_characteristics/polarization" element={<Display language={language}/>} />
              <Route path="/optical_characteristics/light_at_angle" element={<Page1 language={language}/>} />
              <Route path="/optical_characteristics/optimization" element={<Page2 language={language}/>} />
              <Route path="/optical_characteristics/defect" element={<Page3 language={language}/>} />
            </Routes>
          </Router>
          <Footer language={language}></Footer>

    </>
  );
}


export default App;
