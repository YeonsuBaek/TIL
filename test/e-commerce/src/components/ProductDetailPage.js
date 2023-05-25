import React from 'react';
import { useParams } from 'react-router-dom';

const ProductDetailPage = (props) => {
  let { id } = useParams();
  let product = props.products.find((v) => v.name === id);

  return (
    <>
      <img
        src={require(`../assets/photos/${product.image}`)}
        alt={product.name}
      />

      <h2>{product.name}</h2>
      <strong>{product.price}</strong>
    </>
  );
};

export default ProductDetailPage;
