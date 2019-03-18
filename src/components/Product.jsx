import React from 'react';
// import { Link } from "react-router-dom";

import './product.css';


function Product(props) {
  // const clickHanler = () => {
  //   console.log(props.product.id);
  // }
  const { id, isAvailale, pretitle, title, taste, amount, bonus, imgUrl, weight } = props.product;


  return (
    
      <label className='product-wrapper'>
      <input type="checkbox" disabled={!isAvailale} />
      <svg width="320" height="480">
      <g fill='none'>
      <foreignObject width="320" height="480">
      <div className='product' key={id}>
          <p className='product-pretitle'>{pretitle}</p>
          <h3 className="product-title">{title}</h3>
          <h4 className='product-taste'>{taste}</h4>
          <p className='product-amount'>{amount}</p>
          <p className='product-bonus'>{bonus}</p>
          <img className='product-image' src={imgUrl} alt="" />
          {/* <p className='product-details'>{details}</p> */}
        </div>
        
      </foreignObject>
      <path d='M 45 2 L 312 2 Q 318 2 318 8 L 318 472 Q 318 478 312 478 L 8 478 Q 2 478 2 472 L 2 45 Z' stroke='#1698d9' fill='none' stroke-width="4px" />
      <circle r='40' cx='265' cy='425' fill='#1698d9' />
      <text className='product-weight' x='264' y='431'>
      <tspan>{weight}</tspan>
      <tspan x='264' y='454'>кг</tspan>
      </text>
      </g>
			</svg>
        
      </label>
      

    
  )
}

export default Product