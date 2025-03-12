import React from 'react';

import { DATA } from '../mock/products';
import ProductItem from './ProductItem';

const ProductList = () => {
  return (
    <div>
      {DATA.map((pro) => (
        <ProductItem key={pro.id} product={pro} />
      ))}
    </div>
  );
};

export default ProductList;
