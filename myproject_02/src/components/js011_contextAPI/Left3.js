import React, { useContext } from "react";
import { ThemeContext } from "./contexts/ThemeContext";

const Left3 = () => {
  const { number } = useContext(ThemeContext);
  return (
    <div>
      <h2>Left3: {number}</h2>
    </div>
  );
};

export default Left3;
