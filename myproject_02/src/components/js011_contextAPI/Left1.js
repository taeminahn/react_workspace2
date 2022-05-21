import React, { useContext } from "react";
import { UserContext } from "./contexts/UserContext";
import Left2 from "./Left2";

const Left1 = () => {
  const { name } = useContext(UserContext);
  console.log(`Left1 => name: ${name}`);
  return (
    <div>
      <h1>Left1</h1>
      <h1>name: {name}</h1>
      <Left2 />
    </div>
  );
};

export default Left1;
