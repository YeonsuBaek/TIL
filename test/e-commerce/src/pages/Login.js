import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../assets/icons/logo.svg';
import useAdminStore from '../stores/admin';
import useUserStore from '../stores/user';
import { auth } from '../firebase-config';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

const Login = () => {
  const { adminID, adminPW, setAdminID, setAdminPW } = useAdminStore();
  const { setUserEmail, setUserName } = useUserStore();
  const navigate = useNavigate();

  const handleClickGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((data) => {
        console.log(data);
        setUserEmail(data.user.email);
        setUserName(data.user.displayName);
        navigate('/');
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleChangeId = (e) => {
    setAdminID(e.target.value);
  };

  const handleChangePassword = (e) => {
    setAdminPW(e.target.value);
  };

  const handleSubmitAdmin = (e) => {
    e.preventDefault();

    if (
      adminID === `${process.env.REACT_APP_ADMIN_ID}` &&
      adminPW === `${process.env.REACT_APP_ADMIN_PASSWORD}`
    ) {
      localStorage.setItem('adminID', JSON.stringify(adminID));
      navigate('/');
    } else {
      alert('아이디 또는 비밀번호가 잘못되었습니다.');
      setAdminID('');
      setAdminPW('');
    }
  };

  return (
    <>
      <Link to='/'>
        <h1>
          <img src={logo} alt='홈으로' />
        </h1>
      </Link>

      <h2>회원 전용 간편 로그인</h2>
      <button type='button' onClick={handleClickGoogle}>
        구글 3초만에 시작하기
      </button>

      <h2>관리자 전용 로그인</h2>
      <form onSubmit={handleSubmitAdmin}>
        <input type='text' onChange={handleChangeId} />
        <input type='password' onChange={handleChangePassword} />
        <button type='submit'>로그인</button>
      </form>
    </>
  );
};

export default Login;
