import React from 'react';
import logo from '../assets/icons/logo.svg';
import styles from './Header.module.css';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className={styles.header}>
      <Link className={styles.logo} to='/'>
        <img className={styles.logoImg} src={logo} alt='아이디어스' />
      </Link>
      <Link to='/login' className={styles.login}>
        로그인
      </Link>
    </header>
  );
};

export default Header;
