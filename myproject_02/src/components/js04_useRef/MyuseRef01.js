import React, { useRef, useState } from "react";
/* 
상태 관련
State : 상태변경 -> 리랜더링 발생 -> 초기화 안함
Ref : 상태변경 -> 리랜더링 발생안함 -> 초기화 안함
Let : 상태변경 -> 리랜더링 발생안함 -> 초기화 함

리랜더링발생(컴포넌트 업데이트)
1. state가 바뀔 때
2. props가 바뀔 때
3. 부모 컴포넌트가 리랜더링될 때
4. forceUpdate()로 강제로 랜더링을 트리거 할때
*/
const MyuseRef01 = () => {
  const [count, setCount] = useState(0);
  const countRef = useRef(0);
  let countLet = 0;

  const upCountState = () => {
    setCount(count + 1);
    console.log(`state: ${count}`);
  };
  const upCountRef = () => {
    console.log("ref: ", (countRef.current = countRef.current + 1));
  };
  const upCountLet = () => {
    console.log("let: " + (countLet = countLet + 1));
  };

  return (
    <div>
      <p>State: {count}</p>
      <p>Ref: {countRef.current}</p>
      <p>Let: {countLet}</p>

      <button onClick={upCountState}>State UP</button>
      <button onClick={upCountRef}>Ref UP</button>
      <button onClick={upCountLet}>Let UP</button>
    </div>
  );
};

export default MyuseRef01;
