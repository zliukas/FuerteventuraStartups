import React from 'react'

import "./Courses.css"

import Email from '../Home/Email'
import CourseCards from './cards/CourseCards'

export default function Courses() {
  return (
    <div className='courses'>

        <div class="container">
          <div class="content v77">
            <p>Courses</p>
          </div>
        </div>

        <div class="capitalizee-me">
        To make the island a mecca for creativity, global talent, and technological advancement,
        at Fuerteventura Startups, one of our missions is to provide all necessary learning and
        tools to the residents and community of the island so that they can benefit from the positive 
         wave of digitalization and professional advancement. We invite you to participate in our courses 
          designed for professionals and companies based in Fuerteventura. 
        </div>


        <CourseCards/>

        <Email/>

      

    </div>
  )
}
