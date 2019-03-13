import React from 'react';
// import { Link } from "react-router-dom";

import './product.css';


function Product(props) {
  // const clickHanler = () => {
  //   console.log(props.product.id);
  // }
  const { id, pretitle, title, taste, amount, bonus, imgUrl } = props.product;
  return (
    <div className='product' key={id}>
      <p className='product-pretitle'>{pretitle}</p>
      <h3 className="product-title">{title}</h3>
      <h4 className='product-taste'>{taste}</h4>
      <p className='product-amount'>{amount}</p>
      <p className='product-bonus'>{bonus}</p>
      {/* <Link to="/details" style={{ textDecoration: 'none' }} onClick={clickHanler}> */}
      <img className='product-image' src={imgUrl} alt="" />
      
      {/* </Link> */}
    </div>
  )
}

export default Product