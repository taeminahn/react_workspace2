import { useReducer } from "react";

// state, action
function reducer(todos, action) {
  switch (action.type) {
    case "INSERT": // 삽입
      return [action.todo, ...todos];
    case "UPDATE": // 수정
      return todos.map((todo) =>
        todo.id === action.id ? { ...todo, complete: !todo.completed } : todo
      );
    case "DELETE": //삭제
      return todos.filter((todo) => todo.id !== action.id);
    default: // 목록
      return todos;
  }
}

export default reducer;
