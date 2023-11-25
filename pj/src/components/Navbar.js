import React from 'react';
import { Link } from 'react-router-dom'
import '../css/Navbar.css'
import { getCookie} from 'cookies-next';

const Navbar = () => {
    const isLogin = getCookie('token')

    return (
        <div className="Nav-container">
            <div className='bg-Ring'>
                <img className='Nav-Ring' alt='Nav-Ring' src='img/img_Ring.png' />
                <Link to='/'>
                    <div className="Nav-logo">
                        <img className='logo-img' src="img/Logo.png" alt="Logo.png" />
                    </div>
                </Link>
            </div>

            {isLogin?(<div className='logoutWrap'>
                <div className="NMpAndLogout">
                    <Link to='/mypage'>
                        <div className="navimgProfile">
                            <img src="/img/Img_Profile.png" alt="" />
                        </div>
                    </Link>
                    <Link to='/' style={{textDecoration: "none"}}>
                        <div className="navLogoutBtn">
                            로그아웃
                        </div>
                    </Link>
                </div>
                <img className='Nav-Light' alt='Nav-Light' src='img/img_Light.png' />   
            </div>):(
            <div className='bg-Light'>
                <Link to='/login' className='Link-login'>
                    <div className="Nav-loginBtn">
                        로그인
                    </div>
                    <img className='Nav-Light' alt='Nav-Light' src='img/img_Light.png' />
                </Link>
                <Link to='/signup' className='Link-login'>
                    <div className="Nav-signupBtn">
                        회원가입
                    </div>
                </Link>
            </div>)}     
      </div>
    );
};

export default Navbar;