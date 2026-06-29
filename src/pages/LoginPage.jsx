import { Link, useNavigate } from "react-router";
import "./login-page.css";
import useAuthStore from "../stores/authStore";
import { useState } from "react";
import axiosInstance from "../api/axiosInstance";

function LoginPage() {
  // 코드로 컴포넌트 이동처리 가능하게 하는 리액트 훅이다.  /join
  const navigate = useNavigate();
  // 중앙 금고에서 현재 로그인 여부를 관리(데이터 관리 --> 화면 동기화 ---> 상태관리)
  const login = useAuthStore((state) => state.login);

  // 컴포넌트에서 관리해야 될 상태 (데이터)
  const [formData, setForData] = useState({ username: "", password: "" });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    // 폼 제출 시 기본 동작 막기
    e.preventDefault();
    // 로그인 로직 작성 예정(통신 코드 포함)
    setError("");

    try {
      // /api/login <----
      // /api/users/login ----- >  /login
      // formData <-- 자바 {} ---> JSON.springify(formData)
      const response = await axiosInstance.post("/users/login", formData);
      // 서버의 응답 구조
      // response.data  --->  {status: 200, msg: "성공", body : {accessToken: "Bearer asdfasd...."}}
      // response.data.body -->  {accessToken: "Bearer asdfasd...."}
      // response.data.body.accessToken
      const rawToken = response.data.body.accessToken;
      const token = rawToken.startsWith("Bearer ")
        ? rawToken.slice(7)
        : rawToken;

      // JWT 페이로드에서 사용자 정보 추출
      // JWT 헤더.페이로드.서명 (.)점으로 연결되어 있다.
      // 우리는 가운데 페이로드 부분만 꺼내서 Base64로 인코딩된 값을 atob() 함수를 사용해서 디코딩 처리 한다.
      const payload = JSON.parse(atob(token.split(".")[1]));
      console.log(payload);
      const user = {
        id: payload.id,
        username: payload.sub,
      };
      login(token, user);
      navigate("/");
    } catch (err) {
      // console.log("에러 확인 : " + e );
      // setError("로그인에 실패했습니다");
      // 예외 처리 동작 확인
      // 서버에서 내려온 에러 메시지를 화면에 표시
      // err.response?.data?.msg: Spring Boot GlobalExceptionHandler 가 보내는 메시지
      setError(err.response?.data?.msg || "로그인에 실패했습니다.");
    }
  };

  return (
    <div className="login-container">
      <h2 className="login-title">로그인</h2>

      <form className="login-form" onSubmit={handleSubmit}>
        <div className="login-field">
          <label className="login-label">아이디</label>
          <input
            type="text"
            name="username"
            className="login-input"
            required
            placeholder="아이디를입력하세요"
            value={formData.username}
            onChange={handleChange}
          />
        </div>

        <div className="login-field">
          <label className="login-label">비밀번호</label>
          <input
            type="text"
            name="password"
            className="login-input"
            required
            placeholder="비밀번호를입력하세요"
            value={formData.password}
            onChange={handleChange}
          />
        </div>

        {error && <p className="login-error">{error}</p>}

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
