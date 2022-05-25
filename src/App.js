import React from 'react';
import './App.css'

import Navbar from "./components/Navbar/Navbar";
import Footer from './components/Footer/Footer';


import { BrowserRouter} from "react-router-dom";
import AnimatedRoutes from './AnimatedRoutes';
import AnimatedCursor from "react-animated-cursor"


function App() {
  
  return (
    <BrowserRouter>
      {/* '255, 255, 255' */}
      <AnimatedCursor
      
      innerSize={8}
      outerSize={14}
      color='255, 255, 255'
      outerAlpha={0.5}
      innerScale={0.7}
      outerScale={5}s
      clickables={[
        'a',
        'input[type="text"]',
        'input[type="email"]',
        'input[type="number"]',
        'input[type="submit"]',
        'input[type="image"]',
        'label[for]',
        'select',
        'textarea',
        'button',
        '.link',
        
      ]}
    />

      <Navbar/>

      <AnimatedRoutes/>

      <Footer/>

    </BrowserRouter>
  );
}

export default App;
