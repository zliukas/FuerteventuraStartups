import React from 'react'
import './About.css'

import Email from '../Home/Email'
import OurProjects from './OurProjects'
import OurTeam from './OurTeam'

import { motion } from 'framer-motion'

export default function About() {
  return (
    <motion.div
    className='about'
      

      initial={{ opacity: 0}}
      animate={{opacity: 2}}
      exit={{opacity:0}}
    >
      <div className='About'>

          <div class="container">
            <div class="content v8">
              <p>Company's Philosophy</p>
            </div>
          </div>

          <div class="capitalize-me">
          Fuerteventura Startups is the island’s first start-up consultancy body, whose mission is to educate
          & empower local entrepreneurs with big ideas and less resources, by helping and training them to
          structure and launch their companies as successful start-ups, therefore enabling and preparing them
          to gain investments from the global startup ecosystem.
          </div>

          <div class="container">
            <div class="content v7">
              <p>Other Projects</p>
            </div>
          </div>

          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          

            <OurProjects/>


        <div class="container">
          <div class="content v5">
            <p>Our Team</p>
          </div>
        </div>

        <OurTeam/>
          
        <br></br>
        <br></br>

        <Email/>
        

      </div>
    </motion.div>
  )
}