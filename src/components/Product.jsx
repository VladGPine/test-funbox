import React from 'react';

import './product.css';

class Product extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = {
      isChecked: false
    }
    this.toggleChange = this.toggleChange.bind(this);
    this.clickToggleChange = this.clickToggleChange.bind(this);
  }
  
  toggleChange() {
    this.setState({
      isChecked: !this.state.isChecked
    })
  }

  clickToggleChange(e) {
    e.preventDefault();
    this.toggleChange();
  }

render() {
  const { id, isAvailable, pretitle, title, taste, amount, bonus, imgUrl, weight, details } = this.props.product;
  return (
    <div className='product-wrapper'>
      <label>
        <input type="checkbox" checked={this.state.isChecked} disabled={!isAvailable} onChange={this.toggleChange}/>
        <svg width="320" height="480">
          <g fill='none'>
            <foreignObject width="320" height="480">
              <div className='product' key={id}>
                <p className='product-pretitle' style={isAvailable ? null : {color: '#b3b3b3'}}>{pretitle}</p>
                <h3 className="product-title" style={isAvailable ? null : {color: '#b3b3b3'}}>{title}</h3>
                <h4 className='product-taste' style={isAvailable ? null : {color: '#b3b3b3'}}>{taste}</h4>
                <p className='product-amount' style={isAvailable ? null : {color: '#b3b3b3'}}>{amount}</p>
                <p className='product-bonus' style={isAvailable ? null : {color: '#b3b3b3'}}>{bonus}</p>
                <img className='product-image' src={imgUrl} alt="" />
              </div>

            </foreignObject>
            <path d='M 45 2 L 310 2 Q 318 2 318 10 L 318 470 Q 318 478 310 478 L 10 478 Q 2 478 2 470 L 2 45 Z' stroke={isAvailable ? (this.state.isChecked ? '#d91667' : '#1698d9') : ('#b3b3b3')} fill={isAvailable ? 'none' : 'rgba(255, 255, 255, 0.5)'} strokeWidth="4px" />
            <circle r='40' cx='265' cy='425' fill={isAvailable ? (this.state.isChecked ? '#d91667' : '#1698d9') : ('#b3b3b3')} />
            <text className='product-weight' x='264' y='431'>
              <tspan>{weight}</tspan>
              <tspan x='264' y='453'>кг</tspan>
            </text>
          </g>
        </svg>
      </label>
      {isAvailable ? (this.state.isChecked ? <p className='product-details'>{details}</p> : <p className='product-details'>Чего сидишь? Порадуй котэ, <a href='/' onClick={this.clickToggleChange}>купи</a>.</p>) : (<p className='product-details-disabled'>Печалька, {taste} закончился.</p>)
       
      } 
      
    </div>
  )
  }
  
}

export default Product