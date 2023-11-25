import styled from 'styled-components';
import './SearchHeader.css';
import { Link,useNavigate } from 'react-router-dom';
import Search from '../Search';
import { getCookie,deleteCookie } from 'cookies-next';

const HeaderStyle = styled.header`
    width: 100%;
    height: 150px;
    border-bottom-right-radius: 30px; 
    background-color: #BEDCF3 ;
`;

function SHeader({searchkey}) { 
    const isLogin = getCookie('token');
    console.log(isLogin)

    const handleLogout = () => {
        // 로그아웃 시 토큰 삭제
        deleteCookie('token');
    };    
    return (
        <HeaderStyle >
            <div className='hs-set2'>
                <Search/>
                <img src='/images/Img_Ring.png' alt='이미지1' id='ring' />
                <img src='/images/Img_Light.png'alt='이미지2' id='light' />
            </div>
            <div className='hs-set1'>
                <Link to='/'>
                    <p id='slogo'><img src='/img/Logo.png' alt='로고'/></p>
                </Link>
                <div id='stext'>
                    <p id='blue'>'{searchkey}'</p>
                    <p id='stitle'>에 대한 검색 결과</p>
                </div>
            </div>
            {isLogin?(
                <Link to='/' style={{textDecoration: "none"}}>
                    <div className="TSNavLogout" onClick={handleLogout}>
                        로그아웃
                    </div>
                </Link>
            ):(
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
                </div>
            )}
            
        </HeaderStyle>
    );
}
    
export default SHeader;