import { Link } from "react-router";
import "./header.css";

function Header() {
  return (
    <header className="header">
      <div className="header-inner">
        <Link to="/" className="header-logo">
          Tenco Blog
        </Link>

        <nav className="header-nav">
          {/* 비 로그인 시 보여야 할 메뉴  */}
          <Link to="/login" className="header-link">
            로그인
          </Link>
          <Link to="/join" className="header-link">
            회원가입
          </Link>

          {/* 로그인 시 보여야 할 메뉴  */}
          <span className="header-username">ssar 님</span>
          <Link to="/boards/write" className="header-link">
            글쓰기
          </Link>
          <button className="header-button">로그아웃</button>
        </nav>
      </div>
    </header>
  );
}

export default Header;
