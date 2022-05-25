import React, {useState} from 'react'
import { Offcanvas } from 'react-bootstrap';

import "./offcanvas.css"

import pic3 from "./gifs/nr33.gif"

export default function OffCanvas3() {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
        
        <div className="wrapper">
            <div className="blog_post">
              <div className="img_pod">
                <img src={pic3} alt="random image"/>
              </div>
              <div className="container_copy">

                  <div className='date'>
                       {/* <h3>12 January 2019</h3> */}
                  </div>
               
                  <div className='title'>
                  <a href="https://galerabeachartvillas.com/">Galera Beach Art villas</a>
                      {/* <h1></h1> */}
                  </div>
                
                  <div className='descripton'>
                  <br></br>
                  <br></br>
                      <p>
                      The Galera Beach Boutique Art Villas is a concept created with the aim of adding colors
                      in the skyline of the vibrant Corralejo. With a location in the heart of Corralejo, near
                      the best beaches, restaurants and bars, the five villas have turned into one of the most
                      photographed spots of Fuerteventura given its uniqueness compared to other edifices in
                       Fuerteventura.

                      </p>
                  </div>

                
              </div>
              
              <a className="btn_primary" onClick={handleShow} href="#" >Read More</a>

              <Offcanvas show={show} onHide={handleClose}>
              <Offcanvas.Header closeButton>
              <Offcanvas.Title>02. Galera Beach Art villas</Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>


              <img src={pic3} style={{height: "340px",width: "375px"}} alt=""/>

              <br></br>
              <br></br>
              <h4>The Problem</h4>
              <br></br>

              The first problem we encountered was that it was such a good location but it looked monotonous
               and dead and we wanted to bring the most joyful place for artists and other local people to explore.
              <br></br>
              <br></br>
              <h4>The Solution</h4>
              <br></br>
              That’s why Galera Beach Art villa is specially designed for people who want to unleash their inner
               artist and merge into a small community.  Our mission is to help our artists build their portfolios
                and let other people relax, refill their energy, and get motivated, and inspired while admiring their
                 artwork.

              </Offcanvas.Body>
              </Offcanvas>

            </div>
          </div>

    </div>
  )
}