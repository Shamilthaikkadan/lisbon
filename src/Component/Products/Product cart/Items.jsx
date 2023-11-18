import React from 'react'
import '../Product cart/Items.css'
import { product } from './product'
function Items() {
  return (
    <div>
       <div className="item_container_1">
            <div className='heading_container'>
                <span className='heading'>Featured Items</span>
           
            </div>
            <div className="section_div">
                <a className='section' href="#">All Products</a>
                <a className='section'  href="#">Newest</a>
                <a className='section' href="#">Low Price</a>
                <a className='section' href="#">High Price</a>
            </div>
       </div>
       <div className="item_container_2">
        <div className="item_sub_container">
          {
            product.map((items)=>(

        
           <div className="product_cart_div">
            <div className="product_cart_image_div">
                <img className='product_image' src={items.image} alt="" />
            </div>
            <span>{items.name}</span>

            <span>{items.price}</span>
           </div>
               ))
              }
        
           
        </div>
        
       
          
    
        
          
       
        

        


       </div>

    </div>
  )
}

export default Items