import React from 'react';
import ProductList from '../components/ProductList';

const ProductListPage = (props) => {
  return (
    <>
      <h1>디저트/베이커리</h1>
      <ProductList products={props.products} />
    </>
  );
};

export default ProductListPage;
