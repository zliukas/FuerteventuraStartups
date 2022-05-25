import React from 'react'

import "./OurTeam.css"

import nr1  from "./TeamImages/nr1.jpg"
import nr2 from "./TeamImages/nr2.png"
import nr3 from "./TeamImages/nr3.jpg"
import nr4 from "./TeamImages/nr4.png"
import nr5 from "./TeamImages/nr5.png"
import nr6 from "./TeamImages/nr6.jpg"

export default function OurTeam() {
  return (
    <div className='OurTeam'>

      <section>
          
          <div class="team-row">
              <div class="member">
                  <img src={nr1} alt=""/>

                  <h2>Varsha</h2>

                  <p>
                      She came from India with a head full of ideas to conquer the Fuerteventura market
                      and create unique projects. She infects others with her laughter and gives incredible
                      positive energy in every situation! The boss of all the fuss
                  </p>

              </div>
              <div class="member">
                  <img src={nr2} alt=""/>

                  <h2>Santiago</h2>

                  <p>
                     Majorero, it means person from Fuerteventura. Thanks to him we discover the best
                     on the island and share it with others. Invariably smiling person for whom anything
                     is possible, no number is terrible for him. Always ready for fiestuqi.
                  </p>

              </div>
              <div class="member">
                  <img src={nr3} alt=""/>

                  <h2>Akanksha</h2>

                  <p>
                     She comes from India and has a wide range of experience working in the contemporary art
                     market and the data science sector. With her on the team, the art and the data are always
                     crunched and extracted such that we are always updated with the new trends in the innovation,
                     tech and art sectors.
                  </p>
              </div>

              <div class="member">
                  <img src={nr4} alt=""/>

                  <h2>Dominika</h2>

                  <p>
                      An optimist from Poland, she dreamed of living in warm countries since she was a child. Positively
                      driven pedantism and attention to detail help her in the implementation of various tasks. Responsible
                       for what is hidden in the Amazzzing Internet abyss.
                  </p>
              </div>

              <div class="member">
                  <img src={nr5} alt=""/>

                  <h2>Miriam</h2>

                  <p>
                      She comes from Slovakia, but Fuerteventura captivated her deeply and she has her future plans
                      connected with this island. Incredible personality who can solve any problem. She talks
                      passionately about villas & Fuerteventura. She creates a remarkable bond with guests.
                  </p>
              </div>

              <div class="member">
                  <img src={nr6} alt=""/>

                  <h2>Fabian</h2>

                  <p>
                  Born in Fuerteventura, although his temperament trumps many Italians. He looks after each
                  accommodation, is always present and helpful, thanks to him guests have a pleasant surprise
                  when entering the villa.
                  </p>
              </div>
          </div>
      </section>

    </div>
  )
}
