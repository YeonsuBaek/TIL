import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/icons/logo.svg';

const Login = () => {
  return (
    <>
      <Link to='/'>
        <h1>
          <img src={logo} alt='홈으로' />
        </h1>
      </Link>

      <h2>회원 전용 간편 로그인</h2>
      <button type='button'>구글 3초만에 시작하기</button>

      <h2>관리자 전용 로그인</h2>
      <form>
        <input type='text' />
        <input type='password' />
        <button type='submit'>로그인</button>
      </form>
    </>
  );
};

export default Login;
