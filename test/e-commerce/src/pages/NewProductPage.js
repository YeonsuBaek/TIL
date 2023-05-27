import React from 'react';
import { Link } from 'react-router-dom';
import NewProductForm from '../components/NewProductForm';
import Header from '../layouts/Header';
import useAdminStore from '../stores/admin';

const NewProductPage = () => {
  const { adminID } = useAdminStore();

  return (
    <>
      <Header />
      {adminID === `${process.env.REACT_APP_ADMIN_ID}` ? (
        <>
          <h2>상품 등록하기</h2>
          <NewProductForm />
        </>
      ) : (
        <div>
          로그인 후 이용해주세요.
          <Link to='/login'>로그인하러 가기</Link>
        </div>
      )}
    </>
  );
};

export default NewProductPage;
