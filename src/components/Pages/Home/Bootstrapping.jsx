import React from 'react'

import "./Bootstrapping.css"

import pic1 from "./interns/intern2.jpg"
import pic2 from "./interns/intern8.jpg"
import pic3 from "./interns/intern9.jpeg"
import pic4 from "./interns/intern5.JPG"
import pic5 from "./interns/intern7.jpg"


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
