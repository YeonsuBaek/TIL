import React from 'react';
import Header from '../layouts/Header';
import useCartsStore from '../stores/carts';
import useUserStore from '../stores/user';

const Cart = () => {
  const { userEmail } = useUserStore();
  const { carts } = useCartsStore();

  return (
    <>
      <Header />
      <h2>장바구니 목록</h2>
      <ul>
        {carts[userEmail].length > 0 ? (
          carts[userEmail].map((cart) => {
            return <li key={cart}>{cart}</li>;
          })
        ) : (
          <li>장바구니가 존재하지 않습니다.</li>
        )}
      </ul>
    </>
  );
};

export default Cart;
