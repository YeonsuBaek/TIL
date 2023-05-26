import React from 'react';
import styles from './ProductItem.module.css';

const ProductItem = (props) => {
  return (
    <li className={styles.item}>
      <a href={'/product/' + props.name}>
        <div className={styles.image}>
          <img
            src={require(`../assets/photos/${props.image}`)}
            alt={props.name}
          />
        </div>
        <div className={styles.info}>
          <h2 className={styles.name}>{props.name}</h2>
          <strong className={styles.price}>{props.price}</strong>
        </div>
      </a>
    </li>
  );
};

export default ProductItem;
