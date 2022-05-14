import React, { useState, useEffect, useRef } from "react";

const MyuseEffect02 = () => {
  const [name, setName] = useState("");
  const [nickname, setnNickname] = useState("");
  const inputName = useRef();

  //   useEffect(() => {
  //     console.log("랜더링 완료");
  //     console.log(`${name}, ${nickname}`);

  //     return () => {
  //       console.log("cleanup");
  //     };
  //   });

  useEffect(() => {
    console.log("name 랜더링 완료");
    console.log(`${name}, ${nickname}`);

    // 리랜더링 시 작동
    return () => {
      console.log("cleanup");
    };
  }, [name]);
  const onChangeName = (e) => {
    setName(e.target.value);
  };
  const onChangeNickname = (e) => {
    setnNickname(e.target.value);
  };

  return (
    <>
      <div>
        <input value={name} onChange={onChangeName} ref={inputName}></input>
        <input value={nickname} onChange={onChangeNickname}></input>
      </div>
      <div>
        <div>
          <b>이름: {name}</b>
        </div>
        <div>
          <b>닉네임: {nickname}</b>
        </div>
      </div>
    </>
  );
};

export default MyuseEffect02;
