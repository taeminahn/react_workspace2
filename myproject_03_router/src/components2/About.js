import React, { useState } from "react";

const About = () => {
  const [message, setMessage] = useState("안녕하세요!!!");

  const onClickEnter = () => setMessage("주문 어떻게 해드릴까요?");

  return (
    <div>
      <h2>This is About {message}</h2>
      <button type="button" onClick={onClickEnter}>
        주문
      </button>
    </div>
  );
};

export default About;
