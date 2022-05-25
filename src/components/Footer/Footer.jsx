import React from 'react'

import "./Footer.css"

import logo from "./logo.png"

import { FaFacebookF } from 'react-icons/fa';
import { BsInstagram } from 'react-icons/bs';
import { ImLinkedin2 } from 'react-icons/im';

import { Link } from 'react-router-dom';




export default function Footer() {
  return (
    
    <div className="site-footer">
      <div className="container">


          
          {/* <div class="toptext1">
            <p>hola@startupsfuerteventura.com</p>
          </div> */}
          
          <img className='FuerteventuraLogo' src={logo} alt=""/>

          <div class="toptext">
            <p>Fuerteventura Startups S.L. </p>
            <p>Amazzzing Venture Capital S.L. </p>
          </div>

     
          <div className="row">
            <div className="col-sm-12 col-md-6">
              <h6>Registered Office</h6>
              <p className="text-justify">Calle Maestro Falla 12A, </p>
              <p className="text-justify">Puerto del Rosario 35600 </p>
              <p className="text-justify">Fuerteventura, Canary Islands </p>
              <p className="text-justify">Spain</p>
              <br></br>
              <br></br>
            </div>
            

            
            <div className="col-sm-12 col-md-6">
              <h6>Headquarters</h6>
              
              <p className="text-justify">Meet us for a coffee at our Corralejo office ☕</p>
              <p className="text-justify">Calle Galicia 31, Corralejo  </p>
              <p className="text-justify">35600, Fuerteventura </p>
              <p className="text-justify">Canary Islands </p>
          
              <p className="text-justify">+34 722549267 </p>
            </div>
          </div>

          {/* <div className="col-sm-12 col-md-6">
            <h6>Quick Links</h6>
            <ul className="footer-links">

              <li><a href="http://scanfcode.com/privacy-policy/">Privacy Policy</a></li>

            </ul>
          </div> */}

          
          <div className="col-sm-12 col-md-6">
          <h6>Quick Links</h6>
            <Link className='link' to="/Privacy"></Link>
            <ul className="footer-links"></ul>
             <li><a href="Privacy">Privacy Policy</a></li>
          </div>



            <div className="container">
              <div className="row">

                  <div className="col-md-8 col-sm-6 col-xs-12">
                    <p className="copyright-text">Fuerteventura Startups@All rights reserved</p>
                  </div>

                    <div className="col-md-4 col-sm-6 col-xs-12">
                        <ul className="social-icons">
                          <li> <a className="facebook" href="https://www.facebook.com/fuerteventurastartups"> <FaFacebookF/> </a></li> 
                          <li> <a className="instagram" href="https://www.instagram.com/fuerteventurastartups/"> <BsInstagram/> </a></li>
                          <li> <a className="linkedin" href="https://www.linkedin.com/company/fuerteventura-startups/?challengeId=AQFJ57QmDkLv6AAAAYCEn_heQUIXVTmFwPjjDVUnq0U1Jo08q_y_vE72uDd1yj7Bws4rgz5I-042J607PyXz_QVO-aKJT9KJwA&submissionId=7607b2dd-b147-eb16-b489-5cda53252b54"> <ImLinkedin2/> </a></li>  
                        </ul>
                    </div>

              </div>
            </div> 

        
        </div>
    </div>
  )
}


