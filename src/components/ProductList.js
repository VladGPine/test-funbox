import React from 'react';
import Product from './Product';
import productsData from '../products'

// import '../css/product-list.css'

// import '../img/1.jpg';

function ProductList() {
  const products = productsData.map(item => <Product key={item.id} product={item} />);

  return (
    <div className='product-list'>
      {products}
    </div>
  )
}

export default ProductList