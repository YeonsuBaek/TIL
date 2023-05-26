import React from 'react';
import { useParams } from 'react-router-dom';
import Header from '../layouts/Header';
import OrderForm from '../components/OrderForm';
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
      <div className={styles.info}>
        <h2 className={styles.name}>{product.name}</h2>
        <strong className={styles.price}>{product.price}</strong>
      </div>
      <OrderForm />
    </>
  );
};

export default ProductDetailPage;
