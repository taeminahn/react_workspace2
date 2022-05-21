import { useReducer } from "react";

/*
    useReducer: useState보다 더 다양한 컴포넌트 상황에 따라 다양한
    형태를 다른 값으로 업데이트 해주고 싶을 때 사용한다.

    const [state, dispatch] = useReducer(reducer, initState);
    Component Event -> dispatcher(action) -> reducer(state, action) -> state'

    reducer : state를 업데이트 해준다. 인자(state, action), return state
    dispatch : reducer에 state 업데이트 요청
    action : reducer에서 작업할 내용을 전달
 */

// reducer 정의
function reducer(state, action) {
  switch (action.type) {
    case "INCREMENT":
      return { value: state.value + 1 };
    case "DECREMENT":
      return { value: state.value - 1 };
  }
}

const MyuseReducer01 = () => {
  const [state, dispatch] = useReducer(reducer, { value: 0 });
  return (
    <div>
      <p>
        현재 카운트 값: <b>{state.value}</b>
      </p>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>UP</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>DOWN</button>
    </div>
  );
};

export default MyuseReducer01;
