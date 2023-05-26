import React from 'react';
import { useParams } from 'react-router-dom';
import styles from './OrderModal.module.css';
import useUserStore from '../stores/user';
import useCartsStore from '../stores/carts';

const OrderModal = () => {
  const { userEmail } = useUserStore();
  const { addToCart } = useCartsStore();
  const { id } = useParams();

  const handleAddToCart = () => {
    addToCart(userEmail, id);
  };

  return (
    <aside id='modal' className={styles.modal}>
      <select>
        <option>옵션선택</option>
        <option>바닐라</option>
        <option>레몬 (+500원)</option>
        <option>황치즈 (+1000원)</option>
      </select>
      <div className={styles.buttons}>
        <button className={styles.cart} type='button' onClick={handleAddToCart}>
          장바구니
        </button>
        <button className={styles.buy} type='button'>
          바로구매
        </button>
      </div>
    </aside>
  );
};

export default OrderModal;
