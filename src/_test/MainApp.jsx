import { useState } from "react";

function MainApp() {
  const [loginUser, setLoginUser] = useState({
    id: 1,
    name: "김텐코",
    role: "강사",
  });
  // let loginUser = {id: 1, name: "김텐코", role: "강사"};
  // let setLoginUser = () => {};

  return (
    <div
      style={{ border: "3px solid red", padding: "20px", marginTop: "20px" }}
    >
      <h1>메인 애플리케이션 화면 (최상위)</h1>
      <p>데이터가 여기서 출발합니다</p>
      {/* 프롭스 - 간단히 말해서 속성=값 두개 한꺼번에 지칭하는 말 */}
      <Header user={loginUser} />
    </div>
  );
}
// {user} <--- 매개변수에서 사용하는 객체 구조 분해 할당 문법
// const {user} = props
function Header({ user }) {
  return (
    <div
      style={{
        border: "3px solid #4dabf7",
        padding: "20px",
        marginTop: "20px",
      }}
    >
      <h2>헤더 영역(중간다리)</h2>
      <p>
        저는 user 데이터가 필요 없지만 밑으로 전달하기위해 Props를 받았습니다
      </p>
      <UserProfile user={user} />
    </div>
  );
}

function UserProfile({ user }) {
  return (
    <div
      style={{ border: "3px solid green", padding: "20px", marginTop: "20px" }}
    >
      <h3>프로필 영역(최종 목적지)</h3>
      <p>
        환영합니다 <strong>{user.name}</strong>님
      </p>
    </div>
  );
}

export default MainApp;
