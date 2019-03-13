import React from 'react';
// import { Link } from "react-router-dom";

// import '../css/product.css';


function Product(props) {
	const clickHanler = () => {
		console.log(props.product.id);
	}
	return (
		<div className='product' key={props.product.id}>
			{/* <Link to="/details" style={{ textDecoration: 'none' }} onClick={clickHanler}> */}
				<img className='product-image' src={props.product.imgUrl} alt="" />
				<p className="product-title">{props.product.title}</p>
			{/* </Link> */}
		</div>
	)
}

export default Product