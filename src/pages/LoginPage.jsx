import { Link } from "react-router";
import "./login-page.css";

function LoginPage() {
  return (
    <div className="login-container">
      <h2 className="login-title">로그인</h2>
      <form className="login-form">
        <div className="login-field">
          <label className="login-label">아이디</label>
          <input
            type="text"
            name="username"
            className="login-input"
            required
            placeholder="아이디를 입력하세요."
          />
        </div>

        <div className="login-field">
          <label className="login-label">비밀번호</label>
          <input
            type="text"
            name="password"
            className="login-input"
            required
            placeholder="비밀번호를 입력하세요."
          />
        </div>

        <p className="login-error">에러메세지</p>
        <button type="submit" className="login-button">
          로그인
        </button>
      </form>

      <p className="login-link-text">
        아직 회원이 아니신가요? <Link to="/join">회원가입</Link>
      </p>
    </div>
  );
}

export default LoginPage;
