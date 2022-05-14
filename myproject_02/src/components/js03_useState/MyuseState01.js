// state: 현재 컴포넌트의 상태를 저장하고 변경할 수 있는 데이터이다.
// const [state, setState] = useState(초기값);
// state의 데이터는 리렌더링이 되어도 현재 값을 보존하고 있다.
import { useState } from "react";

function MyuseState01() {
  const [cnt, setCnt] = useState(0);
  const [color, setColor] = useState("black");

  const handleClickCnt = (e) => {
    setCnt(cnt + 1);
  };

  const handleClickColor = (e) => {
    setColor(color === "black" ? "white" : "black");
  };

  return (
    <div>
      <p>
        <span>{cnt}</span>
        <button onClick={handleClickCnt}>cnt update</button>
      </p>
      <p>
        <span>{color}</span>
        <button onClick={handleClickColor}>color update</button>
      </p>
    </div>
  );
}

export default MyuseState01;
