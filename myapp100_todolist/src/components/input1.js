import { TextField } from "@mui/material";

function Input(props) {
  console.log(props);
  return (
    <form onSubmit={props.handleInsertClick}>
      <TextField
        id="standard-basic"
        label="Todo를 입력하세요"
        variant="standard"
        type="text"
        required={true}
        value={props.input}
        onChange={props.handleChangeText}
      />
      <input type="submit" value="Create"></input>
    </form>
  );
}

export default Input;
