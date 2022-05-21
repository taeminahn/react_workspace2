import "./App.css";
import { useEffect, useState } from "react";
import Todo from "./components/todo1";
import Input from "./components/input1";

function App1() {
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
      <Input
        handleInsertClick={insertTodo}
        input={input}
        handleChangeText={handleChangeText}
      />
      {todos
        ? todos.map((todo) => {
            return (
              <Todo
                key={todo.id}
                todo={todo}
                handleUpdateClick={() => updateTodo(todo.id)}
                handleDeleteClick={() => deleteTodo(todo.id)}
              />
            );
          })
        : null}
    </div>
  );
}

export default App1;
