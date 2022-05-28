import React, { useContext } from "react";
import { InputContext } from "../contexts/InputContext";
import TextField from "@mui/material/TextField";

function Input() {
  // const { input, insertTodo, handleChangeText } = useContext(InputContext);
  return (
    <form onSubmit={insertTodo}>
      <TextField
        id="standard-basic"
        variant="standard"
        required={true}
        value={input}
        onChange={handleChangeText}
      />
      <input type="submit" value="Create" />
    </form>
  );
}

export default Input;
