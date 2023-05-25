import React from 'react';
import heart from '../assets/icons/heart.svg';
import styles from './OrderForm.module.css';
import Modal from './Modal';

const OrderForm = () => {
  const [modal, setModal] = React.useState(false);

  return (
    <>
      <form className={styles.cta}>
        <button className={styles.heart} type='button'>
          <img src={heart} alt='찜하기' />
          <span>10</span>
        </button>
        <button
          className={styles.buy}
          type='button'
          onClick={() => setModal(true)}
        >
          구매하기
        </button>
      </form>

      {modal && <Modal onClose={() => setModal(false)} />}
    </>
  );
};

export default OrderForm;
