import React from 'react';
import logo from '../assets/icons/logo.svg';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <a className={styles.logo} href='/'>
        <img className={styles.logoImg} src={logo} alt='아이디어스' />
      </a>
      <a href='/'>로그인</a>
    </header>
  );
};

export default Header;
