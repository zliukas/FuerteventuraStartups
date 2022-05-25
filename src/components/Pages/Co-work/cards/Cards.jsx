import React from 'react'

import "./Cards.css"

import pic1 from "./icon/7.png"
import pic2 from "./icon/8.png"
import pic3 from "./icon/9.png"

export default function Cards() {
  return (
    <div className='cards'>

        <div className="container1">

            <div className="card1">
                <div className="card-header1">
                <img src={pic1} alt="rover" />
                </div>
                <div className="card-body">
                
                <h4>
                • Renting space for Photoshoots
                </h4>
               
                
                </div>
            </div>

            <div className="card1">
                <div className="card-header1">
                <img src={pic2} alt="ballons" />
                </div>
                <div className="card-body">
                
                    <h4>
                    • Rent ergonomic chairs & desks
                    </h4>
                
                
                </div>
            </div>


            <div className="card1">
                <div className="card-header1">
                <img src={pic3} alt="city" />
                </div>
                <div class="card-body">
                
                <h4>
                • Book Meeting Room
                </h4>
                
                
            </div>

        </div>

        </div>



        

    </div>
  )
}