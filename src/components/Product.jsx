import React from 'react';
// import { Link } from "react-router-dom";

import './product.css';


class Product extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
  }
  

render() {
  const { id, isAvailale, pretitle, title, taste, amount, bonus, imgUrl, weight, details } = this.props.product;
  return (
    <div className='product-wrapper'>
      <label>
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
              </div>

            </foreignObject>
            <path d='M 45 2 L 310 2 Q 318 2 318 10 L 318 470 Q 318 478 310 478 L 10 478 Q 2 478 2 470 L 2 45 Z' stroke='#1698d9' fill='none' stroke-width="4px" />
            <circle r='40' cx='265' cy='425' fill='#1698d9' />
            <text className='product-weight' x='264' y='431'>
              <tspan>{weight}</tspan>
              <tspan x='264' y='453'>кг</tspan>
            </text>
          </g>
        </svg>
      </label>
      <p className='product-details'>{details}</p>
    </div>
  )
  }
  
}

export default Product