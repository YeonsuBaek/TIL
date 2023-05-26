import React from 'react';
import NewProductForm from '../components/NewProductForm';
import Header from '../layouts/Header';

const NewProductPage = () => {
  return (
    <>
      <Header />
      <h2>상품 등록하기</h2>
      <NewProductForm />
    </>
  );
};

export default NewProductPage;
