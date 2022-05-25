import React from 'react'

import './Cowork.css'
import Cards from './cards/Cards'
import Gallery from './gallery/Gallery'
import Email from '../Home/Email'


export default function Cowork() {
  return (
    <div className='Cowork'>

       
        <div class="container">
          <div class="content v20">
            <p>Co-working space</p>
          </div>
        </div>

        <br></br>
        <br></br>
        <br></br>

        <Cards/>

          <div className="row">
              <div className="title">
                <h6>Monday to Friday:</h6>
                <p className="text-justify">15:00 to 22:00</p>
                
                
                

              
              <div className="title">
                <h6>Saturday & Sunday </h6>
                
                <p className="text-justify">09:00 to 22:00</p>
                
              </div>
            </div>

            </div>

            

            <div class="capitalize-me1">
            For inquiries and bookings, simply walk in from Mon to Friday
             between 9h to 14h and reserve your spot! 
            <br></br>
            <br></br>
            Need more details? Write to our Community Manager Akanksha on +34 722 54 92 67
            </div>

            <Gallery/>
        

            <Email/>


    </div>
  )
}
