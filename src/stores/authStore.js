import { create } from "zustand";

const userAuthStore = create((set, get) => {
  // 우리가 관리할 모든 상태(데이터)와 액션(기능)을 담을 커다란 객체 하나를 설계해준다.

  const storeObject = {
    token: localStorage.getItem("token") || null,
    user: JSON.parse(localStorage.getItem("user") || "null"),
    // 기능 1
    login: (token, user) => {
      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(user));

      // 중요 >> 중앙 금고에 데이터를 저장하는 기능
      // 이 set 함수가 실행되어야 리액트 화면이 다시 그려진다.
      set({ token: token, user: user });
    },

    // 기능 2
    logout: () => {
      // 로컬스토리지에 저장된 흔적을 모두 삭제
      localStorage.removeItem("token");
      localStorage.removeItem("user");

      // Zustand 상태(데이터) 빈상태(null)로 되돌리고 화면을 재갱신함.
      set({ token: null, user: null });
    },

    // 기능 3 - 헬퍼함수 설계
    isLoggedIn: () => {
      // get() 함수로 내 스토어에 있는 현재 상태 확인
      const currentToken = get().token;
      // 토큰이 null이 아니면 true를 반환, 즉 로그인된 상태다.
      return currentToken !== null;
    },
  };

  // create 마지막에 관리할 객체를 리턴해주어야 다른곳에서 이 객체를 통해 접근 가능하다.

  return storeObject;
});

export default userAuthStore;
