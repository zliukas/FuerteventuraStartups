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
        At Fuerteventura Startups, we do not believe in the game of pure valuations
         of start-ups that do not make a profit. Each business must be sustainable,
          bootstrapped first, and have clear goals for monetization while helping the
           local economy and environment. Guided by these principles, we welcomed qualified
            interns from all over Europe with open arms. We have learned a lot from the influx
             of youth from different cultures into our teams. Still, we have also adapted and taken
              valuable feedback and helped our teams to prepare for leading.  
        </div>


        <CourseCards/>

        <Email/>

      

    </div>
  )
}
