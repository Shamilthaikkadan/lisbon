import React from 'react'
import '../Footer/Footer.css'
import Footer_icon from '../Footer/Footer_image/logo_img_1.png'
import Facebook_logo from'../Footer/Footer_image/facebook.png'
import Instagram_logo from '../Footer/Footer_image/instagram.png'
import Twitter_logo from '../Footer/Footer_image/twitter.png'
import Linkedin_logo from '../Footer/Footer_image/linkedin.png'

function Footer() {
  return (
    <div>
        <div className="Footer_main_container">
            <div className="footer_icon">
                <img className='footer_icon_style' src={Footer_icon} alt="" />
            </div>
            <div className="footer_navbar">
              <a className='link' href="#">HOME</a>
              <a className='link' href="#">HELP</a>
              <a className='link' href="#">PRIVACY POLICY</a>
              <a className='link' href="#">HOW IT WORKS ?</a>
              <a className='link' href="#">CONTACT US</a>
            </div>
            <div className='footer_social_media'>
                       <img className='social_media' src={Facebook_logo} alt="" />
                       <img className='social_media' src={Instagram_logo} alt="" />
                       <img className='social_media' src={Twitter_logo} alt="" />
                       <img className='social_media' src={Linkedin_logo} alt="" />
            </div>
        </div>





    </div>
  )
}

export default Footer