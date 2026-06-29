import axios from "axios";
import useAuthStore from "../stores/authStore";

// 1. Axios 인스턴스 설정

// baseURL을 상대 경로로 설정한다. 절대경로 >> http://localhost:5671/api가 아닌 상대경로 /api로 설정한다.
// 이렇게 해야 브라우저 Vite 개발서버 포트 번호로 동작한다.
const axiosInstance = axios.create({
  baseURL: "/api",
  timeout: 10000, // 10초이상 응답 없으면 에러처리
});

// 2. 요청 인터셉터 설정
axiosInstance.interceptors.request.use(
  (config) => {
    // React 컴포넌트 외부의 순수 JS 파일이므로 getStore()를 사용해서 상태를 읽어올 수 있다.
    const token = useAuthStore.getState().token;
    if (token) {
      // 토큰이 존재한다면 HTTP 표준인증 헤더인 'Bearer' 타입으로 토큰을 자동 저장함.
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => Promise.reject(error),
);

// 3. 응답 인터셉터 설정
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    // 401에러 감지시 자동 로그아웃처리 (토큰만료, 미인증 접근 요청시)
    // ? >> response? >> null에 안정적으로 동작함
    if (error.response?.status === 401) {
      useAuthStore.getState().logout();
      // window.location.href = "/login"; // 자동 로그인 페이지 이동
    }
    return Promise.reject(error);
  },
);

export default axiosInstance;
