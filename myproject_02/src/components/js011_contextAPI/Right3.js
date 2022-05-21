import React, { useContext } from "react";
import { ThemeContext } from "./contexts/ThemeContext";
import { UserContext } from "./contexts/UserContext";

const Right3 = () => {
  const { number, onHandleIncrease } = useContext(ThemeContext);
  const { onHandleName } = useContext(UserContext);
  return (
    <div>
      <h2>Right3: {number}</h2>
      <input
        type="button"
        value="이름변경"
        onClick={() => {
          onHandleName();
        }}
      ></input>
      <input
        type="button"
        value="+"
        onClick={() => {
          onHandleIncrease();
        }}
      ></input>
    </div>
  );
};

export default Right3;
