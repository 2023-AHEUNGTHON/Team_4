import '../TypeSelect/TypeSelectBar.css';
import { Link,useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Search from '../Search';
import { getCookie,deleteCookie } from 'cookies-next';

const HeaderStyle = styled.header`
    width: 100%;
    height: 150px;
    border-bottom-right-radius:  30px; 
    background-color: ${(props) => props.color};
`;

function LBar({type,category,color}) {
    const isLogin = getCookie('token');
    console.log(isLogin)

    const handleLogout = () => {
        // 로그아웃 시 토큰 삭제
        deleteCookie('token');
    };


    let category_1 ;
    if (category == 'news')
        category_1 = '시사/뉴스';
    else if(category == 'food')
        category_1 = '푸드';
    else if(category=='culture')
        category_1 = '문화/예술';
    else if(category=='it')
        category_1 = 'it/기술';
    else if(category=='health')
        category_1 = '건강/의학';
    else if(category=='business')
        category_1 = '비지니스';
    else if(category=='economy')
        category_1 = '경제/금융';
    else if(category=='etc')
        category_1 = '기타';

    let typed ;
    if (type == 'file')
        typed = '파일';
    else if(type == 'link')
        typed = '링크';
    else if(type=='memo')
        typed = '메모';

    return (
        <div className="display-container">
            <HeaderStyle color={color}>
                <div className="TSNav-container">
                    <div className='TSBg-Ring'>
                        <img className='TSNav-Ring' alt='Nav-Ring' src='/img/Img_Ring.png' />
                        <Link to='/'>
                            <div className="TSNav-logo">
                                <img className='TSlogo-img' src="/img/Logo.png" alt="Logo.png" />
                            </div>
                        </Link>
                    </div>
                    <div className='TSLogoutWrap'>
                        <div className="TSMpAndLogout">
                            <Link to='/mypage'>
                                <div className="TSNavImgProfile">
                                    <img src="/img/Img_Profile.png" alt="" />
                                </div>
                            </Link>
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
                                        <img className='Nav-Light' alt='Nav-Light' src='/img/Img_Light.png'/>
                                    </Link>
                                    <Link to='/signup' className='Link-login'>
                                        <div className="Nav-signupBtn">
                                            회원가입
                                        </div>
                                    </Link>
                                </div>
                            )}
                            
                        </div>
                        <img className='TSNav-Light' alt='Nav-Light' src='/img/Img_Light.png' />
                    </div>
                </div>
            </HeaderStyle>
            <div className="typeAndSearch">
                <div id='tText'>
                        <p id='tTitle'>{category_1}</p>
                        <p id='tInfo'>&gt; {typed}</p>
                    </div>
                <div className="TSBSearch">
                    <Search/>
                </div>
            </div>
        </div>
    );
}
    
export default LBar;