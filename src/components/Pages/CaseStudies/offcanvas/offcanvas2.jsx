import React, {useState} from 'react'
import { Offcanvas } from 'react-bootstrap';

import "./offcanvas.css"

import pic2 from './gifs/nr222.gif'


export default function OffCanvas2() {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

  return (
    <div>
        
        <div className="wrapper">
            <div className="blog_post">
              <div className="img_pod">
                <img src={pic2} alt="random image"/>
              </div>
              <div className="container_copy">

                  <div className='date'>
                       {/* <h3>12 January 2019</h3> */}
                  </div>
               
                  <div className='title'>
                      <a href="https://fuerteventuratimes.com/">Fuerteventura Times</a>
                      {/* <h1>Fuerteventura Times</h1> */}
                  </div>
                
                  <div className='descripton'>
                    <br></br>
                    <br></br>
                      <p>
                      Fuerteventura Times is a digital lifestyle magazine featuring authentic,
                      current and inspiring content on sustainability, art, technology & business,
                      with a mission to connect the world through thought- provoking ideas and news,
                      from Fuerteventura.
                      </p>
                  </div>

                
              </div>
              
              <a className="btn_primary" onClick={handleShow} href="#" >Read More</a>

                <Offcanvas show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                <Offcanvas.Title>01. Fuerteventura Times</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                

                <img src={pic2}  style={{height: "330px",width: "375px"}} alt=""/>

                <br></br>
                <br></br>
                <h4>The Problem</h4>
                <br></br>

                Fuerteventuratimes.com was created during the pandemic to help people find balance
                 in life and now finally we want to share that the best therapy is here in Fuerteventura.
                <br></br>
                <br></br>
                <h4>The Solution</h4>
                <br></br>
                Since the pandemic people forgot how to enjoy their life to the fullest experience that’s
                 why with our Fuerteventuratimes.com we want people to know more about positive news through
                  our online magazine about traveling offers, help locals to expand their business, and most
                   importantly give the best experience for all the travelers around the world.

                </Offcanvas.Body>
                </Offcanvas>

            </div>
          </div>

    </div>
  )
}