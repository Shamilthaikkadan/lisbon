import React from 'react'
import '.././Cart/Carts.css'
import Blue_jean  from'../Cart/cart_images/blue_jeans.jpg'
import Dark_Blue_jean  from'../Cart/cart_images/dark_blue_jeans.jpg'
import rain_coat  from'../Cart/cart_images/rain_coat.jpg'
import Canvas_shoe  from'../Cart/cart_images/canvas_shoe.jpg'
function Carts() {
  return (
    <div>
      <div className="cart_main_container">
        <div className="cart_sub_container_1">
            <div className='color_div'></div>
            <span className='featured_item_span'>Featured Items</span>
        </div>
        <div className="cart_sub_container_2">
            <div className="cart_product_container">
                <div className="product_image_iv">
                    <img className='cart_image_style' src={Blue_jean} alt="" />
                </div>
                <div className="product_content_div">
                    <span>Blue Denim Jeans</span>
                    <br />
                    <span> ₹999</span>
                </div>

            </div>
            <div className="cart_product_container">
                <div className="product_image_iv">
                    <img className='cart_image_style' src={Dark_Blue_jean} alt="" />
                </div>
                <div className="product_content_div">
                    <span>Dark Blue Denim Jeans</span>
                    <br />
                    <span> ₹899</span>
                </div>

            </div>
            <div className="cart_product_container">
                <div className="product_image_iv">
                    <img className='cart_image_style' src={rain_coat} alt="" />
                </div>
                <div className="product_content_div">
                    <span>Rain Coat</span>
                    <br />
                    <span> ₹1999</span>
                </div>

            </div>
            <div className="cart_product_container">
                <div className="product_image_iv">
                    <img className='cart_image_style' src={Canvas_shoe} alt="" />
                </div>
                <div className="product_content_div">
                    <span>Canvas Shoe</span>
                    <br />
                    <span> ₹2999</span>
                </div>

            </div>
        </div>

      </div>
         



    </div>
  )
}

export default Carts