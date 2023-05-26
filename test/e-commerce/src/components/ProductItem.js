import React from 'react';
import styles from './ProductItem.module.css';
import { Link } from 'react-router-dom';

const ProductItem = (props) => {
  return (
    <li className={styles.item}>
      <Link to={'/product/' + props.name}>
        <div className={styles.image}>
          <img src={props.image} alt={props.name} />
        </div>
        <div className={styles.info}>
          <h2 className={styles.name}>{props.name}</h2>
          <strong className={styles.price}>{props.price}</strong>
        </div>
      </Link>
    </li>
  );
};

export default ProductItem;
