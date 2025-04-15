import React from 'react'
import '../CSS/ProductListing.css'
const ProductListing = ({title,img,f1,f2,price,oPrice}) => {
  return (
    <div class="first">
        <div class="sec">
           <h3>{title}</h3>
           <img id='image' src={img} />
           <div class="inner">
              <li><mark>&nbsp;{f1}&nbsp;</mark></li>
              <li><mark>&nbsp;{f2}&nbsp;</mark></li>
           </div>
        </div>
        <div id='last'>
        <p id='text'>&#8377;{price}</p>
        <b>&#8377;{oPrice}</b>
        </div>
    </div>
  )
}

export default ProductListing