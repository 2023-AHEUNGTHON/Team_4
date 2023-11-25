import { useNavigate } from 'react-router-dom';
import '../css/Signup.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useAuthForm } from '../hooks/useAuthForm';
import { validateEmail, validatePassword, validateUserName } from '../utils/validateInput';
import userApi from '../apis/users';

export default function Signup() {
  const [signupForm, signUpHandler, areValid] = useAuthForm(
    {
      userName: '',
      nickName: '',
      password: '',
      rePassword: '',
    },
    {
      userName: validateUserName,
      password: validatePassword,
      rePassword: validatePassword,
      nickName: validateEmail,
    }
  );

  const movePage = useNavigate();
  console.log(signupForm);
  const submitSignup = async () => {
    console.log(signupForm);
    await userApi
      .join({
        nickName: signupForm.nickName,
        userName: signupForm.userName,
        password: signupForm.password,
      })
      .then((response) => {
        alert(response.data.message)
        movePage('/login')
      })
      .catch((e) => console.log(e));
  };

  return (
    <div className="display-container">
      <Navbar />
      <div className="Signup-container">
        <div className="titleWrap">회원가입</div>
        <div className="contentWrap">
          <div className="inputTitle">이메일</div>
          <div className="inputWrap">
            <input
              type="text"
              className="input"
              placeholder="이메일을 입력해주세요."
              name="nickName"
              value={signupForm.email}
              onChange={signUpHandler}
            />
          </div>
          <div className="errorMessageWrap">{!areValid.nickName && <div>올바른 이메일을 입력해주세요.</div>}</div>
          <div className="inputTitle" style={{ marginTop: '26px' }}>
            아이디
          </div>
          <div className="inputWrap">
            <input
              type="text"
              className="input"
              name="userName"
              placeholder="아이디를 입력해주세요."
              value={signupForm.userName}
              onChange={signUpHandler}
            />
          </div>
          <div className="errorMessageWrap">{!areValid.userName && <div>올바른 이메일을 입력해주세요.</div>}</div>
          <div className="inputTitle" style={{ marginTop: '26px' }}>
            비밀번호
          </div>
          <div className="inputWrap">
            <input
              type="password"
              className="input"
              placeholder="비밀번호를 입력해주세요."
              name="password"
              value={signupForm.password}
              onChange={signUpHandler}
            />
          </div>
          <div className="errorMessageWrap">
            {!areValid.password && <div>영문, 숫자, 특수문자 포함 8자 이상 입력해주세요.</div>}
          </div>
          <div className="inputTitle" style={{ marginTop: '26px' }}>
            비밀번호 확인
          </div>
          <div className="inputWrap">
            <input
              type="password"
              className="input"
              placeholder="위 비밀번호와 동일하게 입력하세요."
              name="rePassword"
              value={signupForm.rePassword}
              onChange={signUpHandler}
            />
          </div>
          <div className="errorMessageWrap">
            {!areValid.rePassword && <div>영문, 숫자, 특수문자 포함 8자 이상 입력해주세요.</div>}
          </div>
        </div>
        <div>
          <button
            className="bottomBtn"
            disabled={!signupForm.userName && !signupForm.email && !signupForm.password && !signupForm.rePassword}
            onClick={submitSignup}
          >
            가입하기
          </button>
          <div className="gotologin">
            이미 가입하셨나요?
            <div className="loginBtn" onClick={() => movePage('/login')}>
              로그인하기
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
