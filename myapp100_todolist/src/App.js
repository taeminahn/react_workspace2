import "./App.css";
import { useEffect, useState } from "react";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { TextField } from "@mui/material";

function App() {
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
      <form onSubmit={insertTodo}>
        {/* <input
          type="text"
          required={true}
          value={input}
          onChange={handleChangeText}
        ></input> */}
        <TextField
          id="standard-basic"
          label="Todo를 입력하세요"
          variant="standard"
          type="text"
          required={true}
          value={input}
          onChange={handleChangeText}
        />
        <input type="submit" value="Create"></input>
      </form>
      {todos
        ? todos.map((todo) => {
            return (
              <div className="todo" key={todo.id}>
                <h3>
                  <label
                    className={todo.completed ? "complete" : null}
                    onClick={() => updateTodo(todo.id)}
                  >
                    {todo.todoname}
                  </label>
                  <label onClick={() => deleteTodo(todo.id)}>
                    &nbsp;&nbsp;&nbsp; <DeleteForeverIcon />
                  </label>
                </h3>
              </div>
            );
          })
        : null}
    </div>
  );
}

export default App;
