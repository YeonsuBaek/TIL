import React from 'react';
import styles from './ProductList.module.css';
import ProductItem from './ProductItem';

const ProductList = (props) => {
  return (
    <ul className={styles.list}>
      {props.products.map((product) => {
        return (
          <ProductItem
            name={product.name}
            price={product.price}
            image={product.image}
            key={product.name}
          />
        );
      })}
    </ul>
  );
};

export default ProductList;
