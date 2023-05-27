import React from 'react';
import styles from './ProductList.module.css';
import ProductItem from './ProductItem';
import useProductsStore from '../stores/products';

const ProductList = () => {
  const { products } = useProductsStore();

  React.useEffect(() => {
    console.log(products);
  }, []);

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
