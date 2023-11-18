import React from 'react'
import '../Advertisement/Advertisement.css'
import Avertisement_image from './Avertisement_images/Advertisement_background.jpg'
function Ad_img() {
  return (
    <div>
        <div className='ad_img_container'>
            <img className='ad_img' src={Avertisement_image} alt="" />
        </div>
            <div className='ad_img_sub_container'>
                <div className='qoutes_div'>
                    <span className='qoutes'>"Fashion is part of the daily air and it changes all the time, with all the events. You can even see the approaching of a revolution in clothes. You can see and feel everything in clothes." —Diana Vreeland</span>
                    </div>
                  <button className='ad_img_sub_container_button'>ORDER NOW!</button>
            </div>



    </div>
  )
}

export default Ad_img