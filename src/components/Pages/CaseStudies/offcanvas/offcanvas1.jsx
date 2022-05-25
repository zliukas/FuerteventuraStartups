import React, {useState} from 'react'
import { Offcanvas } from 'react-bootstrap';

// import pic1 from "./gifs/crying-smoking.gif"
import pic1 from './gifs/nr11.gif'

import "./offcanvas.css"

export default function OffCanvas1() {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

  return (
    <div>
        
        <div className="wrapper">
            <div className="blog_post">
              <div className="img_pod">
                <img src={ pic1 } alt=""/>
              </div>
              <div className="container_copy">

                  <div className='date'>
                       {/* <h3>12 January 2019</h3> */}
                  </div>
               
                  <div className='title'>
                    <a href="https://deseos.com/">Deseos app</a>
                    {/* <h1></h1> */}
                  </div>
                
                  <div className='descripton'>
                     <br></br>
                     <br></br>
                      <p>
                      Deseos is a super app that takes care of your daily needs,
                       gets you authentic local cuisines, and makes you step out to have
                        fun on the island in Fuerteventura. Order food from local restaurants,
                         book local experiences, and top-rated services in Fuerteventura.
                      </p>
                  </div>

                
              </div>
              <a className="btn_primary" onClick={handleShow} href="#" >Read More</a>

              <Offcanvas show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                <Offcanvas.Title>00. Deseos App</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                

                <img src={ pic1 } style={{height: "340px",width: "375px"}} alt="yeet"/>

                <br></br>
                <br></br>
                <h4>The Problem</h4>
                <br></br>

                For the tourists, it's a big problem, that it’s hard to get to some places,
                       so here where deseos come in, it can bring you anything you want to your doorstep.
                <br></br>
                <br></br>
                <h4>The Solution</h4>
                <br></br>
                Deseos helps island businesses to connect with their resident and tourist customers. An easy-to-use
                 mobile application, with location, lets you know which restaurants, supermarkets, and services are
                  closest to placing an order today.

                </Offcanvas.Body>
            </Offcanvas>


            </div>
          </div>

    </div>
  )
}
