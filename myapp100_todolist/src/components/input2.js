import { useContext } from "react";
import { InputContext } from "../contexts/InputContext";
import { TextField } from "@mui/material";

function Input() {
  const { insertTodo, input, handleChangeText } = useContext(InputContext);

  return (
    <form onSubmit={insertTodo}>
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
  );
}

export default Input;
