import React, { useRef } from "react";

const MyuseRef02 = () => {
  const fnameInput = useRef();

  const inputName = () => {
    // let fname = document.getElementById("fname");
    // console.log(fname.value + "고객님 안녕하세요");
    console.log(fnameInput.current.value + "고객님 안녕하세요");
  };
  return (
    <div>
      {/* <input
        type="text"
        placeholder="이름입력"
        id="fname"
        onClick={inputName}
      ></input> */}
      <input
        type="text"
        placeholder="이름입력"
        id="fname"
        ref={fnameInput}
      ></input>
      <button onClick={inputName}>ADD</button>
    </div>
  );
};

export default MyuseRef02;
