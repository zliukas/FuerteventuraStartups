import React from 'react'

import "./Bootstrapping.css"

import pic1 from "./interns/intern6.jpg"
import pic2 from "./interns/intern11.png"
import pic3 from "./interns/intern10.jpeg"
import pic4 from "./interns/intern12.png"
import pic5 from "./interns/intern13.png"


export default function Bootstrapping() {

  return (
      <>
      
      <div className="image-grid">
        <img className="image-grid-col-2 image-grid-row-2" src={pic1} alt=""/>
        <img src={pic2} alt=""/>
        <img src={pic3} alt=""/>
        <img src={pic4} alt=""/>
        <img src={pic5} alt=""/>
       </div>

      </>
  )
}
