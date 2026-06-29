import { Link } from "react-router";
import "./header.css";
import userAuthStore from "../stores/authStore";
import axiosInstance from "../api/axiosInstance";

function Header() {
  const user = userAuthStore((state) => state.user); // {name:"null"}
  const token = userAuthStore((state) => state.token); // {token:"null"}
  const logout = userAuthStore((state) => state.logout); // () => {로그아웃 기능 로직}
  const handleLogout = async () => {
    try {
      // 서버측에 JWT 로그아웃 기능이 굳이 필요할까. JWT는 정보를 저장하지않음 (만료시간 30분)
      await axiosInstance.post("/users/logout");
    } catch (err) {
      console.log("로그아웃 요청 실패");
    } finally {
      logout();
    }
  };

  return (
    <header className="header">
      <div className="header-inner">
        <Link to="/" className="header-logo">
          Tenco Blog
        </Link>

        <nav className="header-nav">
          {token ? (
            <>
              <span className="header-username">{user?.username} 님</span>
              <Link to="/boards/write" className="header-link">
                글쓰기
              </Link>
              <button className="header-button" onClick={handleLogout}>
                로그아웃
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="header-link">
                로그인
              </Link>
              <Link to="/join" className="header-link">
                회원가입
              </Link>
            </>
          )}
        </nav>
      </div>
    </header>
  );
}

export default Header;
