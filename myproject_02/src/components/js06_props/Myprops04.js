import React from "react";

const Myprops04 = ({ name = "안태민", age = "20", loc = "수지구" }) => {
  const style = {
    border: "1px solid black",
    color: "blue",
    fontSize: "24px",
  };
  return (
    <div>
      <p style={style}>
        고객님의 이름 : {name} 나이 : {age} 지역 : {loc}
      </p>
    </div>
  );
};

export default Myprops04;
