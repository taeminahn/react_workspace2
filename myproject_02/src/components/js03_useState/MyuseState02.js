import { useState } from "react";

function MyuseState02() {
  const [names, setNames] = useState(["고수", "노진구", "송중기"]);
  const [input, setInput] = useState("");

  const handleChangeName = (e) => {
    setInput(e.target.value);
  };

  const handleClickName = (e) => {
    // setNames([input, ...names]);
    setNames([...names, input]);
    setInput("");
  };

  return (
    <div>
      <input type="text" onChange={handleChangeName} value={input}></input>
      <button onClick={handleClickName}>ADD</button>
      {names.map((value, index) => {
        return <p key={index}>{value}</p>;
      })}
    </div>
  );
}

export default MyuseState02;
