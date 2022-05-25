import React from 'react'


import Privacy from './components/Pages/Privacy policy/Privacy';
import Home from "./components/Pages/Home/Home";
import About from "./components/Pages/About/About";
import CaseStudies from './components/Pages/CaseStudies/CaseStudies';
import Cowork from './components/Pages/Co-work/Cowork';
import Courses from './components/Pages/Courses/Courses';

import {Routes, Route, useLocation, } from "react-router-dom";
import {AnimatePresence} from 'framer-motion'

function AnimatedRoutes() {
    const location = useLocation();

  return (
    <AnimatePresence>
        <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/Home" element={<Home/>}></Route>
            <Route path="/About" element={<About/>}></Route>
            <Route path="/CaseStudies" element={<CaseStudies/>}></Route>
            <Route path="/Privacy"  element={<Privacy/>}></Route>
            <Route path="/Cowork" element={<Cowork/>}></Route>
            <Route path="/Courses" element={<Courses/>}></Route>
        </Routes>
    </AnimatePresence>    
  )
}

export default AnimatedRoutes