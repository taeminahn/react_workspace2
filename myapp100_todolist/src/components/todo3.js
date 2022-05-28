import React, { useContext } from "react";
import { TodoContext } from "../contexts/TodoContext";
import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded";

function Todo() {
  // const {todo, updateTodo, deleteTodo} = useContext(TodoContext);

  return (
    <div className="todo" key={todo.id}>
      <h3>
        <label
          className={todo.completed ? "completed" : null}
          onClick={() => {
            updateTodo(todo.id);
          }}
        >
          {todo.todoname}
        </label>
        <label onClick={() => deleteTodo(todo.id)}>
          <DeleteRoundedIcon />
        </label>
      </h3>
    </div>
  );
}

export default Todo;
