import React from 'react';
import { useParams } from 'react-router-dom';
import Header from './Header';
import OrderForm from './OrderForm';
import styles from './ProductDetailPage.module.css';

const ProductDetailPage = (props) => {
  let { id } = useParams();
  let product = props.products.find((v) => v.name === id);

  return (
    <>
      <Header />
      <div className={styles.image}>
        <img
          src={require(`../assets/photos/${product.image}`)}
          alt={product.name}
        />
      </div>
      <h2>{product.name}</h2>
      <strong>{product.price}</strong>
      <OrderForm />
    </>
  );
};

export default ProductDetailPage;
