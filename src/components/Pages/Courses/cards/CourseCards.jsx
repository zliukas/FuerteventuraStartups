import React from 'react'

import "./CourseCards.css"

import pic1 from "./icon/gif1.gif"
import pic2 from "./icon/gif2.gif"
import pic3 from "./icon/gif3.gif"

export default function CourseCards() {
  return (
    <div className='CourseCards'>

        <div className="container1">

            <div className="card1">
                <div className="card-header1">
                    
                <img src={pic1} alt="rover" />
                </div>
                <div className="card-body">
                
                <h4>
                   <a className="btn_primary2" href="https://docs.google.com/forms/d/1mvAavFs1kdBkHNfqVMAxsNXgV8shoOB-X344Pa4UvmQ/viewform?edit_requested=true" >Read More</a>
                </h4>
               
                
                </div>
            </div>

            <div className="card1">
                
                <div className="card-header1">
                
                <img src={pic2} alt="ballons" />
                </div>
                <div className="card-body">
                
                    <h4>
                      <a className="btn_primary1"  href="https://docs.google.com/forms/d/1-HzOXQVwHyEj5ZFI8Mnrt0Hqbs8PJ4a2-j8bi5Rn2mM/viewform?edit_requested=true" >Read More</a>
                    </h4>
                
                
                </div>
            </div>


            <div className="card1">
                <div className="card-header1">
                
                <img src={pic3} alt="city" />
                </div>
                <div class="card-body">
                
                <h4>
                    <a className="btn_primary3" href="https://docs.google.com/forms/d/1IrwdaUH1fE-CR4xweh-emPx7wWZCvCmoM-5DYmXo0-U/viewform?edit_requested=true" >Read More</a>
                </h4>
                
                
            </div>

        </div>

        </div>



        

    </div>
  )
}