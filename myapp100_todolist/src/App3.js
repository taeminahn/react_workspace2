import React, { useEffect, useState, useReducer } from "react";
import "./App.css";
import { TodoContext } from "./contexts/TodoContext";
import { InputContext } from "./contexts/InputContext";
import Todo from "./components/todo2";
import Input from "./components/input2";
import reducer from "./contexts/TodoReducer";

function App() {
  let boardList = [
    {
      id: 1,
      todoname: "운동하기",
      completed: false,
    },
    {
      id: 2,
      todoname: "SNS 꾸미기",
      completed: false,
    },
    {
      id: 3,
      todoname: "사진 정리하기",
      completed: false,
    },
  ];

  const [todos, dispatch] = useReducer(reducer, boardList);
  const [input, setInput] = useState("");

  useEffect(() => {
    //console.log(todos);
    getTodos();
  }, []);

  const getTodos = () => {
    // setTodos([...todos])
    dispatch({ type: "LIST", todos });
  };

  const updateTodo = (id) => {
    dispatch({ type: "UPDATE", id });
  };

  const deleteTodo = (id) => {
    dispatch({ type: "DELETE", id });
  };

  const handleChangeText = (e) => {
    setInput(e.target.value);
  };

  const insertTodo = (e) => {
    e.preventDefault();
    const todo = {
      id: todos.length + 1,
      todoname: input,
      completed: false,
    };
    dispatch({ type: "INSERT", todo });
  };

  return (
    <div className="App">
      <h1>TODO LIST</h1>
      <InputContext.Provider value={{ input, insertTodo, handleChangeText }}>
        <Input />
      </InputContext.Provider>
      {todos
        ? todos.map((todo, idx) => {
            return (
              <TodoContext.Provider
                key={todo.id}
                value={{ todo, updateTodo, deleteTodo }}
              >
                <Todo />
              </TodoContext.Provider>
            );
          })
        : null}
    </div>
  );
}

export default App;
