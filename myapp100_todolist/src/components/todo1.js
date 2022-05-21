import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

function Todo(props) {
  return (
    <div className="todo" key={props.key}>
      <h3>
        <label
          className={props.todo.completed ? "complete" : null}
          onClick={props.handleUpdateClick}
        >
          {props.todo.todoname}
        </label>
        <label onClick={props.handleDeleteClick}>
          &nbsp;&nbsp;&nbsp; <DeleteForeverIcon />
        </label>
      </h3>
    </div>
  );
}

export default Todo;
