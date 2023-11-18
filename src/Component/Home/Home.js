import React from 'react'
import Navbar from './Navbar/Navbar'
import Advertisement from './Advertisement/Ad_img'
import Carts from './Cart/Carts'
import Subscribe from '../Home/Subscribe/Subscribe'
import Footer from '../Home/Footer/Footer'
function Home() {
  return (
    <div>


{/* <Navbar/> */}
<Advertisement/>
<Carts/>
<Subscribe/>
<Footer/>
    </div>
  )
}

export default Home