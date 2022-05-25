import './Header.css'
import React from 'react'
import { Carousel } from 'react-bootstrap';

import gifOne from "./gif/gif1.gif"
import gifTwo from "./gif/gif2.gif"
import gifThree from "./gif/gif3.gif"
import gifFour from "./gif/gif4.gif"
import gifFive from "./gif/gif5.gif"
import gifSix from "./gif/gif6.gif"

export default function Header() {
  return (
    <div className='Header'>
        <Carousel>

            <Carousel.Item interval={3000}>
                <img
                className="d-block w-100"
                src={gifOne} alt="First slide"/>
                <Carousel.Caption>
                {/* <h3></h3>
                <p></p> */}
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item interval={3000}>
                <img
                className="d-block w-100"
                src={gifTwo} alt="First slide"/>
                <Carousel.Caption>
                {/* <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item interval={3000}>
                <img
                className="d-block w-100"
                src={gifThree} alt="First slide"/>
                <Carousel.Caption>
                {/* <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item interval={3000}>
                <img
                className="d-block w-100"
                src={gifFour} alt="First slide"/>
                <Carousel.Caption>
                {/* <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item interval={3000}>
                <img
                className="d-block w-100"
                src={gifFive} alt="First slide"/>
                <Carousel.Caption>
                {/* <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item interval={3000}>
                <img
                className="d-block w-100"
                src={gifSix} alt="First slide"/>
                <Carousel.Caption>
                {/* <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
                </Carousel.Caption>
            </Carousel.Item>
              
        </Carousel>

    </div>
  )
}