import { Link } from "react-router";
import "./join-page.css";

function JoinPage() {
  return (
    <div className="join-container">
      <h2 className="join-title">회원가입</h2>
      <form className="join-form">
        <div className="join-field">
          <label className="join-label">아이디</label>
          <input
            type="text"
            name="username"
            className="join-input"
            required
            placeholder="아이디 (4~20자)"
          />
        </div>

        <div className="join-field">
          <label className="join-label">비밀번호</label>
          <input
            type="text"
            name="password"
            className="join-input"
            required
            placeholder="비밀번호 (4~20자)"
          />
        </div>

        <div className="join-field">
          <label className="join-label">이메일</label>
          <input
            type="text"
            name="email"
            className="join-input"
            required
            placeholder="이메일 주소"
          />
        </div>

        <p className="join-error">에러 메세지</p>
        <p className="join-success">성공 메세지</p>
        <button type="submit" className="join-button">
          회원가입
        </button>
      </form>

      <p className="join-link-text">
        이미 계정이 있으신가요? <Link to="/login">로그인</Link>
      </p>
    </div>
  );
}

export default JoinPage;
