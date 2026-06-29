function CountNotState() {
  // 일반 변수 : 컴포넌트 다시 그려질 때마다 0으로 초기화 된다.
  // 추가로 값이 바꿔도 리액트에게 "변경되었음"이란 신호를 보내지 않는다.
  let count = 0;

  const increase = () => {
    this.count = count + 1;
    console.log("일반 변수 현재 값 : ", count);
  };

  const decrease = () => {
    this.count = count - 1;
    console.log("일반 변수 현재 값 : ", count);
  };

  return (
    <div style={{ padding: "50px" }}>
      <h3>일반 변수 사용 (화면 갱신 실패)</h3>
      <p style={{ fontSize: "20px" }}>현재 값: {count} </p>
      <button onClick={() => increase}>증가</button>
      <button onClick={() => decrease}>감소</button>
    </div>
  );
}

export default CountNotState;
