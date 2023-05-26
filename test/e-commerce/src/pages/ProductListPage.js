import React from 'react';
import ProductList from '../components/ProductList';
import styles from './ProductListPage.module.css';

const ProductListPage = (props) => {
  return (
    <div className={styles.page}>
      <h1 className={styles.title}>디저트/베이커리</h1>
      <ProductList products={props.products} />
    </div>
  );
};

export default ProductListPage;
