import React from 'react';
import ProductList from '../components/ProductList';
import styles from './ProductListPage.module.css';

const ProductListPage = () => {
  return (
    <div className={styles.page}>
      <h1 className={styles.title}>디저트/베이커리</h1>
      <ProductList />
    </div>
  );
};

export default ProductListPage;
