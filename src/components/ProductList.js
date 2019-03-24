import React from 'react';
import Product from './Product';
import productsData from '../products'

import './product-list.css'

function ProductList() {

  const products = productsData.map(item => <Product key={item.id} product={item} />);

  return (
    <div className='product-list'>
      {products}
    </div>
  )
}

export default ProductList