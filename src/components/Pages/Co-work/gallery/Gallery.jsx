import React from 'react'

import "./Gallery.css"

import pic1 from "./img/nr1.png"
import pic2 from "./img/nr2.png"
import pic3 from "./img/nr3.png"
import pic4 from "./img/nr4.png"

export default function Gallery() {
  return (
    <div>

        <div class="container11">
        <div class="box">
            <img src={pic1} sty alt=""/>
            <span></span>
        </div>
        <div class="box">
            <img src={pic2}  alt=""/>
           
            <span></span>
        </div>
        <div class="box">
        <img src={pic3}  alt=""/>
            <span></span>
        </div>
        <div class="box">
        <img src={pic4}  alt=""/>
            <span></span>
        </div>
        </div>

    </div>
  )
}
