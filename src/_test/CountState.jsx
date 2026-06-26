/**
 * 리액트가 제공하는 훅(Hook) 함수이다.
 * 훅이란 함수 컴포넌트가 리액트 내부 시스템에 갈고리를 걸어서 그 기능을 끌어다쓰는것을 말한다.
 */
import { useState } from "react";

function CountState() {
  // 상태를 선언해본다. (사실 변수지만 화면과 동기화 처리 되는 변수다.)
  const [count, setCount] = useState(0); // 초기값을 0으로 설정한다.
  // let count = 0;
  // let setCount = function() {}
  // 컴포넌트가 기억해야 하는 값을 만들때 사용한다.
  // 사용법: const [값, 값을 바꾸는 함수] = useState(초기값)
  return (
    <div style={{ padding: "50px" }}>
      <h3>useState 사용(화면갱신 성공)</h3>
      <p style={{ fontSize: "20px" }}>현재값: {count}</p>
      <button onClick={() => setCount(count + 1)}>증가</button>
      <button onClick={() => setCount(count - 1)}>감소</button>
    </div>
  );
}

export default CountState;
