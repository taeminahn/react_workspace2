import "./App.css";
import { useEffect, useState } from "react";
import { TextField } from "@mui/material";
import { TodoContext } from "./contexts/TodoContext";
import { InputContext } from "./contexts/InputContext";
import Todo from "./components/todo2";
import Input from "./components/input2";

function App2() {
  let boardList = [
    {
      id: 1,
      todoname: "운동하기",
      completed: false,
    },
    {
      id: 2,
      todoname: "SNS꾸미기",
      completed: false,
    },
    {
      id: 3,
      todoname: "사진정리하기",
      completed: false,
    },
  ];

  const [todos, setTodos] = useState([...boardList]);
  const [input, setInput] = useState("");

  const updateTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  useEffect(() => {
    console.log(todos);
  }, [todos]);

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleChangeText = (e) => {
    setInput(e.target.value);
  };

  const insertTodo = (event) => {
    event.preventDefault();
    setTodos([
      ...todos,
      { id: todos.length + 1, todoname: input, completed: false },
    ]);
  };

  return (
    <div className="App">
      <h1>TODO LIST</h1>
      <InputContext.Provider value={{ input, insertTodo, handleChangeText }}>
        <Input />
      </InputContext.Provider>
      {todos
        ? todos.map((todo, index) => {
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

export default App2;
