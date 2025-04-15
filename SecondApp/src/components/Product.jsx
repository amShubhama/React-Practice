import React from 'react'
import '../CSS/product.css'
const Product = ({title,price,dis="10%",features}) => {
    
  return (
    <>
    <div id="first">
        <h1>{title}</h1>
        <h3>Price = {price}</h3>
        <h5>{dis} Discount</h5>
        <p>{features.map((feature)=><li class="li">{feature}</li>)}</p>
    </div>
    </>
  )
}

export default Product