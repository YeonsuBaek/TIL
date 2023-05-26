import React from 'react';
import logo from '../assets/icons/logo.svg';
import styles from './Header.module.css';
import { Link } from 'react-router-dom';
import useAdminStore from '../stores/admin';
import useUserStore from '../stores/user';
import user from '../assets/icons/user.svg';

const Header = () => {
  const { adminID, setAdminID, setAdminPW } = useAdminStore();
  const { userEmail, userName } = useUserStore();

  const handleLogout = () => {
    setAdminID('');
    setAdminPW('');
    localStorage.setItem('adminID', JSON.stringify(adminID));
  };

  return (
    <header className={styles.header}>
      <Link className={styles.logo} to='/'>
        <img className={styles.logoImg} src={logo} alt='아이디어스' />
      </Link>

      {JSON.parse(localStorage.getItem('adminID')) ===
      `${process.env.REACT_APP_ADMIN_ID}` ? (
        <>
          <Link to='/new-product'>상품 등록</Link>
          <button type='button' onClick={handleLogout}>
            <img src={user} alt='관리자 메뉴 열기' />
          </button>
        </>
      ) : userEmail ? (
        <button type='button'>{userName}님</button>
      ) : (
        <Link to='/login' className={styles.login}>
          로그인
        </Link>
      )}
    </header>
  );
};

export default Header;
