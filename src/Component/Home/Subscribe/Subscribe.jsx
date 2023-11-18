import React from 'react'
import '../Subscribe/Subscribe.css'
function Subscribe() {
  return (
    <div>
        <div>
           <div className="subscribe_main_container">
            <div className="subscribe_sub_container_1">
                <div className='color_div_1'></div>
                <span className='subscribe_text'>SUBSCRIBE NOW!</span>
            </div>
             <div className="subscribe_sub_container_2">
               <input className='email_placeholder' type="text" placeholder='Enter Your Email.....'/>
                <button className='subscribe_button'>SUBSCRIBE</button>

             </div>



           </div>




        </div>





    </div>
  )
}

export default Subscribe