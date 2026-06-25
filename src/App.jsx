import { BrowserRouter, Route, Routes } from "react-router";
import Header from "./components/Header";
import LoginPage from "./pages/LoginPage";
import JoinPage from "./pages/joinPage";

/**
 * 1. JSX란
 * JavaScript의 확장 문법으로 자바스크립트 파일(.jsx)안에 THML과 매우 유사한 코드를 작성할 수 있다.
 * 2. JSX 특징
 * 변환 필수 : 브라우저는 JSX를 그대로 이해하지 못한다. 실행시 vite 변환기와 같은 도구가 실제 JS문법으로 변환해준다.
 * 단일 루트 요소 : return문 안에 코드는 반드시 하나의 최상위 부모 태그로 감싸져 있어야 한다.
 * JS표현식 포함 : 태그 내부에서 중괄호 {}를 사용하면 자바스크립트 변수, 함수 연산의 결과를 바로 랜더링 할 수 있다.
 * 카멜케이스 사용 : 일반 HTML 속성명과 달리 단어 연결 시 대문자를 사용해주어야 JSX문법이 정상 동작한다.
 * 예) onclick >> JSX >> onClick
 * 태그 닫기 : <img> <input> 처럼 닫기 태그가 없던 태그들도 JSX문법에서 반드시 / 닫기 태그를 달아 주어야 한다.
 */
function App() {
  return (
    // 1. 브라우저 라우터로 앱 전체를 감싼 CSR 환경을 구성한다.
    <BrowserRouter>
      <Header />
      {/* JSX 인라인 스타일 문법
      1. 이중괄호 {{}} 의미
      바깥쪽 { } : 지금부터 JSX 안에서 자바스크립트 표현식을 쓰겠다.라는 의미
      안쪽{} : 자바스크립트는 객체 리터럴을 의미함. 
      CSS 속성들을 자바스크립트 객체로 묶어서 style 속성을 전달하는 방식이다. 
      2. 일반 CSS와 주요 차이점
      카멜케이스 적용 : CSS에서 (-)하이픈으로 연결하던 속성들을 카멜케이스로 사용해서 적용해야 가능하다. 
      예) max-width >> maxWidth, background-color >> backgroundColor :이유는 - 마이너스 연산자로 인식한다. 
      */}
      <main style={{ maxWidth: "900px", margin: "0 auto", padding: "0 20px" }}>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/join" element={<JoinPage />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
