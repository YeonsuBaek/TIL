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
        <h2>{props.name}</h2>
        <strong>{props.price}</strong>
      </a>
    </li>
  );
};

export default ProductItem;
