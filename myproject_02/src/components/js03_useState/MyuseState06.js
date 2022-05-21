import React, { useRef, useState } from "react";

const MyuseState06 = () => {
  const inputRef = useRef(null);
  const [userList, setUserList] = useState([
    { id: 1, name: "aaa" },
    { id: 2, name: "bbb" },
    { id: 3, name: "ccc" },
  ]);
  const pushNewUser = () => {
    setUserList([
      { id: userList.length + 1, name: inputRef.current.value },
      ...userList,
    ]);

    inputRef.current.value = "";
  };

  return (
    <div>
      {userList.map((user, idx) => {
        return (
          <input
            key={idx}
            // key={user.id}
            type="text"
            placeholder={user.name}
            style={{ display: "block" }}
          ></input>
        );
      })}
      <input type="text" style={{ display: "block" }} ref={inputRef}></input>
      <button style={{ display: "block" }} onClick={pushNewUser}>
        등록
      </button>
    </div>
  );
};

export default MyuseState06;
