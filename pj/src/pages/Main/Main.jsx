import {React,useState} from 'react';
import { Link } from 'react-router-dom'
import { useNavigate} from 'react-router-dom';

import Footer from '../../components/Footer';
import './Main.css'
/* font-awesome */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { getCookie,deleteCookie } from 'cookies-next';

/* import Avatar from "boring-avatars"; */
function Main() {
  const isLogin = getCookie('token');
    console.log(isLogin)

    const handleLogout = () => {
        // 로그아웃 시 토큰 삭제
        deleteCookie('token');
    };


    const movePage= useNavigate();

    function moveWriteScrap() {
      movePage('/WriteScrap');
    }
    function moveLogin() {
      movePage('/login');
    }
    //search 구현
    const [search, setSearch] = useState("");
    const onChange = (e) => {
        setSearch(e.target.value)
    }
    function moveScrapSearch() {
      movePage('/search' , {state:{search:search}});
    }

    function moveMypage() {
      movePage('/mypage');
    }
    function moveShare() {
      movePage('/share');
    }

    return (
      <div className='display-container'>
        <div className='mainWrap'>
          {/* Nab section */}
          <div className='mainNav-container'>
            <Link to='/'>
                <img className='MainLogoImg' src="img/Logo.png" alt="Logo.png" />
            </Link>
            {/* <div className='Main-navLogin' onClick={ moveLogin }>
              로그인
            </div> */}
            {isLogin?(
            <div className='mLogoutWrap'>
                <Link to='/mypage'>
                    <div className="mImgProfile">
                        <img src="/img/Img_Profile.png" alt="" />
                    </div>
                </Link>
                <Link to='/' style={{textDecoration: "none"}}>
                        <div className="navLogoutBtn" onClick={() => handleLogout()}>
                            로그아웃
                        </div>
                </Link>
            </div>
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
         </div>
          {/* Main section */}
          <div className='Main-container'>
            <div className='mainBgImg'>
              <img src="img/img_Union.png" alt="mainBgUnion" className="mainBgUnion" />
              <div className='main-info'>
                스크랩 해놓고 잊은 파일들, <br />
                이제는 찾기 쉽게 한 눈에 확인해보세요!
              </div>
              <img src="img/img_Star.png" alt="mainBgStar" className="mainBgStar" />
            </div>
            <div className='main-searchbar'>
              <div className='searchbarWrap'>
                  <div className='searchBtn' onClick={moveScrapSearch}>
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                  </div>
                  <input type='text' placeholder='파일 검색' value={search} onChange={onChange}/>
              </div>
                <button className='addScrapBtn' onClick={moveWriteScrap}>
                  스크랩 추가하기
                </button>
            </div>
            <div className='main-fileWrap'>
              <Link to="/news" style={{textDecoration: "none"}}>
                <div className="fileBox-news" id='fileBox'>
                  <div className="boxHeader">시사/뉴스</div>
                  <img src="img/Ic_News.png" alt="Ic_News.png" className="fileIcon" />
                </div>
              </Link>
              <Link to="/food" style={{textDecoration: "none"}}>
                <div className="fileBox-food" id='fileBox'>
                  <div className="boxHeader">푸드</div>
                  <img src="img/Ic_Fastfood.png" alt="" className="fileIcon" />
                </div>
              </Link>
              <Link to="/culture" style={{textDecoration: "none"}}>
                <div className="fileBox-arts" id='fileBox'>
                  <div className="boxHeader">문화/예술</div>
                  <img src="img/Ic_Brush.png" alt="" className="fileIcon" />
                </div>
              </Link>
              <Link to="/economy" style={{textDecoration: "none"}}>
                <div className="fileBox-finance" id='fileBox'>
                  <div className="boxHeader">경제/금융</div>
                  <img src="img/Ic_Finance.png" alt="" className="fileIcon" />
                </div>
              </Link>
              <Link to="/it" style={{textDecoration: "none"}}>
                <div className="fileBox-tech" id='fileBox'>
                  <div className="boxHeader">It/기술</div>
                  <img src="img/Ic_Tech.png" alt="" className="fileIcon" />
                </div>
              </Link>
              <Link to="/health" style={{textDecoration: "none"}}>
                <div className="fileBox-health" id='fileBox'>
                  <div className="boxHeader">건강/의학</div>
                  <img src="img/Ic_Health.png" alt="" className="fileIcon" />
                </div>
              </Link>
              <Link to="/business" style={{textDecoration: "none"}}>
                <div className="fileBox-business" id='fileBox'>
                  <div className="boxHeader">비즈니스</div>
                  <img src="img/Ic_Business.png" alt="" className="fileIcon" />
                </div>
              </Link>
              <Link to="/etc" style={{textDecoration: "none"}}>
                <div className="fileBox-etc" id='fileBox'>
                  <div className="boxHeader">기타</div>
                  <img src="img/Ic_Etc.png" alt="" className="fileIcon" />
                </div>
              </Link>
           </div>
            <div className="gotoShareWrap">
              다른 사람들의 스크랩도 궁금하다면?
              <div className="gotoSPBtn" onClick={moveShare}>
                공유 페이지로 이동
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
  
  export default Main;