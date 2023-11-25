import { useNavigate } from 'react-router-dom';
import { useAuthForm } from '../hooks/useAuthForm';
import '../css/Login.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { validateUserName, validatePassword } from '../utils/validateInput';
import userApi from '../apis/users';
import { deleteCookie, setCookie } from 'cookies-next';

export default function Login() {
  const [loginForm, loginFormHandler, areValid] = useAuthForm(
    {
      userName: '',
      password: '',
    },
    {
      userName: validateUserName,
      password: validatePassword,
    }
  );
  const movePage = useNavigate();
  const submitLogin = async () => {
    console.log(loginForm);
    await userApi
      .login(loginForm)
      .then((res) => {
        console.log(res.data)
        deleteCookie('token')
        setCookie('token',res.data.data.token)
        movePage('/')
    })
      .catch((err) => console.log(err));
  };

  return (
    <div className="display-container">
      <Navbar />
      <div className="Login-container">
        <div className="titleWrap">로그인</div>
        <div className="contentWrap">
          <div className="inputTitle">아이디</div>
          <div className="inputWrap">
            <input
              type="text"
              className="input"
              placeholder="아이디를 입력해주세요."
              name="userName"
              value={loginForm.userName}
              onChange={loginFormHandler}
            />
          </div>
          <div className="errorMessageWrap">{!areValid.userName && <div>올바른 아이디를 입력해주세요.</div>}</div>
          <div className="inputTitle" style={{ marginTop: '26px' }}>
            비밀번호
          </div>
          <div className="inputWrap">
            <input
              type="password"
              className="input"
              placeholder="비밀번호를 입력해주세요."
              name="password"
              value={loginForm.password}
              onChange={loginFormHandler}
            />
          </div>
          <div className="errorMessageWrap">
            {!areValid.password && <div>영문, 숫자, 특수문자 포함 8자 이상 입력해주세요.</div>}
          </div>
        </div>
        <div>
          <button className="bottomBtn" disabled={!areValid.userName && !areValid.password} onClick={submitLogin}>
            로그인하기
          </button>
          <div className="gotoSignup">
            아직 회원이 아니신가요?
            <div className="SignupBtn" onClick={() => movePage('/signup')}>
              회원가입 하기
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
