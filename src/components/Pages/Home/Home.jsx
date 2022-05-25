
import './Home.css'

import Header from '../../Header/Header'
import Ourvalues from './Ourvalues'
import Email from './Email'

import Bootstrapping from './Bootstrapping'



import pic1 from "./icons/nr1.jpeg"
import pic2 from "./icons/nr2.jpeg"



import { motion } from 'framer-motion'



export default function Home() {

 
  return (
    <motion.div
      className='home'
      

      initial={{ opacity: 0}}
      animate={{opacity: 1}}
      exit={{opacity:0}}

    >
          
      <Header/>
      
      
      <div className='Home'>
        <div class="container">
          <div class="content v5">
            <p>Who Are We?</p>
          </div>
        </div>

        <div class="capitalize-me">
          Fuerteventura Startups is Fuerteventura's premier technology and innovation consultancy with a vision of helping the island digitalize sustainably. With a global team of young entrepreneurs, digital creators, marketers, and IT technicians headquartered in the heart of Corralejo, we are here to revolutionize travel, agriculture, and local consumption for a greener economy and a digitally advanced and progressive society. 
        </div>


        <div class="container">
          <div class="content v8">
            <p>Our Mission</p>
          </div>
        </div>

        <div class="capitalize-me">
        For years, Silicon Valley has been considered a global hub of start-up culture and the birth of some of the world's most influential companies. Imagine the same culture, the same drive, and more extensive diversity of global minds, three times fewer taxes, and all of this is pure paradise with the world's best beaches at a stone's throw. That is Fuerteventura!
        </div>

        <div class="container">
          <div class="content v1">
            <p>Our Vision</p>
          </div>
        </div>


        <div class="capitalize-mee">
        To incubate, fund, and support ideas that help Fuerteventura achieve the following objectives:
        </div>
        
        
        <Ourvalues/>

        <div class="container">
          <div class="content v7">
            <p>Inclusion & Diversity</p>
          </div>
        </div>


        <section>
            <div class="image image1">
                <img src={pic1} alt="logo"/>
            </div>

            <div class="image image2">
                <img src={pic2} alt="logo"/>
            </div>

              <div>
                  <p>With a team comprising local Majoreros and global professionals from Spain, India, Poland, Estonia,
                     Lithuania, Slovenia, Croatia, and Italy, Fuerteventura Startups' team brings diverse perspectives and
                      unique solutions to the table to achieve creative and authentic progress. Our focus on equal growth opportunities,
                       regardless of gender or nationality, has helped us extract incredible volumes of talent from our teams and interns worldwide. </p>
              </div>
        </section>

        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>

        <div class="container">
          <div class="content v5">
            <p>Bootstrapping with The European Erasmus Revolution</p>
          </div>
        </div>

        <div class="capitalize-me">
        At Fuerteventura Startups, we do not believe in the game of pure valuations
         of start-ups that do not make a profit. Each business must be sustainable,
          bootstrapped first, and have clear goals for monetization while helping the
           local economy and environment. Guided by these principles, we welcomed qualified
            interns from all over Europe with open arms. We have learned a lot from the influx
             of youth from different cultures into our teams. Still, we have also adapted and taken
              valuable feedback and helped our teams to prepare for leading.  
        </div>

        <Bootstrapping/>

        <br></br>
        <br></br>

        {/* <div class="container">
          <div class="content v10">
            <p>hola@startupsfuerteventura.com</p>
          </div>
        </div> */}

        <Email/>
        
        
      </div>
    </motion.div>
  )
}