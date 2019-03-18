import React from 'react';
// import { Link } from "react-router-dom";

import './product.css';


function Product(props) {
  // const clickHanler = () => {
  //   console.log(props.product.id);
  // }
  const { id, pretitle, title, taste, amount, bonus, imgUrl } = props.product;
  return (
    
      <label className='product-wrapper'>
      <input type="checkbox" />
      <svg width="320" height="480">
      <g fill='none' stroke='#1698d9'>
      <foreignObject width="320" height="480">
      <div className='product' key={id}>
          <p className='product-pretitle'>{pretitle}</p>
          <h3 className="product-title">{title}</h3>
          <h4 className='product-taste'>{taste}</h4>
          <p className='product-amount'>{amount}</p>
          <p className='product-bonus'>{bonus}</p>
          <img className='product-image' src={imgUrl} alt="" />
        </div>
      </foreignObject>
      <polygon class="ddo" points='45,0 320,0 320,480 0,480 0,45' stroke='#1698d9' strokeWidth='5' />
      </g>
      
      
      
				
        
			</svg>
        
      </label>

    
  )
}

export default Product