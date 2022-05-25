
import React from 'react'

import { motion } from 'framer-motion'

import "./CaseStudies.css"

import Email from '../Home/Email'
import OffCanvas1 from './offcanvas/offcanvas1'
import OffCanvas2 from './offcanvas/offcanvas2'
import OffCanvas3 from './offcanvas/offcanvas3'

export default function CaseStudies() {
  return (
    <motion.div
      className='casestudies'
      
      initial={{ opacity: 0}}
      animate={{opacity: 1}}
      exit={{opacity:0}}
    >

      <div className='CaseStudies'>

          <div className="container">
            <div className="content v8">
              <p>Case Studies</p>
            </div>
          </div>

          <OffCanvas1/>
          <OffCanvas2/>
          <OffCanvas3/>

          <br></br>
        <br></br>
        <br></br>
        <br></br>
        <Email/>

        {/* <div class="container">
          <div class="content v10">
            <p>hola@startupsfuerteventura.com</p>
          </div>
        </div> */}

         </div>
      </motion.div>
  )
}
