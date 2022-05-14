import React, { useState, useEffect, useRef } from "react";

// useEffect()는 랜더링이 끝나고 수행한다.
// componentDidMount와 componentDidUpdate 후 실행된다.
// useEffect(callback,[dependency])

const MyuseEffect01 = () => {
  const [name, setName] = useState("");
  const [nickname, setnNickname] = useState("");
  const inputName = useRef();

  // 마운트된 후 랜더링, 리랜더링후 실행함
  //   useEffect(() => {
  //     console.log("랜더링 완료");
  //     console.log(`${name}, ${nickname}`);
  //   });

  // 마운트된 후 한번만 수행
  //  useEffect(callback)
  useEffect(() => {
    // console.log("랜더링 완료");
    // console.log(`${name}, ${nickname}`);
    inputName.current.focus();
  }, []);

  // 마운트된 후 랜더링, name의 리랜더링(업데이트)가 발생 할 때 실행
  useEffect(() => {
    console.log("랜더링 완료:name");
    console.log(`${name}`);
  }, [name]);

  // 마운트된 후 랜더링, name의 리랜더링(업데이트)가 발생 할 때 실행
  useEffect(() => {
    console.log("랜더링 완료:nickname");
    console.log(`${nickname}`);
  }, [nickname]);

  const onChangeName = (e) => {
    // console.log("name: ", e.target.value);
    setName(e.target.value);
  };
  const onChangeNickname = (e) => {
    // console.log("nickname: ", e.target.value);
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

export default MyuseEffect01;
