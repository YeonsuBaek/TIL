import React from 'react';
import styles from './ProductList.module.css';
import productMain from '../assets/photos/product-01-main.jpeg';
import ProductItem from './ProductItem';

const products = [
  {
    name: '버터바 1종',
    price: '3,500원',
    image: productMain,
  },
  {
    name: '버터바 2종',
    price: '3,500원',
    image: productMain,
  },
  {
    name: '버터바 3종',
    price: '3,500원',
    image: productMain,
  },
  {
    name: '버터바 4종',
    price: '3,500원',
    image: productMain,
  },
];

const ProductList = () => {
  return (
    <ul className={styles.list}>
      {products.map((product) => {
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
