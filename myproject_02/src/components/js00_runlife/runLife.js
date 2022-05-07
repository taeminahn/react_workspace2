import React, { useEffect } from "react";

function RunLife() {
  console.log("start");

  useEffect(() => {
    console.log("useEffect");
    method();
  });
  const method = () => {
    console.log("methode");
  };

  console.log("end");

  return <div>{console.log("return")}</div>;
}

export default RunLife;
