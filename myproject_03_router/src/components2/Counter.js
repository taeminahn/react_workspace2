import React, { useEffect, useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const increase = () => {
    setCount(count + 1);
  };
  const decrease = () => {
    setCount(count - 1);
  };

  useEffect(() => {
    setCount(10);
  }, []);
  return (
    <div>
      <div>현재카운트: {count}</div>
      <button type="button" onClick={increase}>
        증가
      </button>
      <button type="button" onClick={decrease}>
        감소
      </button>
    </div>
  );
};

export default Counter;
