import React from 'react'
import Logo from './Navbar_image/logo_img_1.png'
import '../Navbar/Navbar.css'
import { Link, Outlet } from 'react-router-dom'
function Navbar() {
  return (
    <div>
        <div className='main_container_navbar'>
        <div className='logo_div'>
                <img className='logo_img' src={Logo} alt="" />
             </div>
             <div className='navbar'>
      <Link className='linked' to = '/'>      <a className='link' href="#">HOME</a></Link>    
           <Link className='linked' to='/Products'>    <a className='link' href="#">PRODUCTS</a></Link> 
                <a className='link'  href="#">ABOUT US</a>
                <a className='link'  href="#">CONTACT US</a>

             </div>

        </div>
            





    <Outlet/>

    </div>
  )
}

export default Navbar