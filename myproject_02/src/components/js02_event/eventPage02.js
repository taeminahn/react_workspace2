import { useState } from "react";

const EventPage02 = () => {
  const [form, setForm] = useState({
    username: "",
    message: "",
  });

  const { username, message } = form;

  const onChangeUsername = (e) => {
    const nextForm = {
      ...form, // 기존의 form 내용의 값을 이 자리에 복사한 뒤
      [e.target.name]: e.target.value, //원하는 값을 덮어 씌우기
    };
    setForm(nextForm);
    // console.log(username);
  };

  const onChangeMessage = (e) => {
    const nextForm = {
      ...form,
      [e.target.name]: e.target.value,
    };
    setForm(nextForm);
    // setMessage(e.target.value);
  };

  const onUserClick = () => {
    alert(`${username} : ${message}`);
    // setUsername("");
    // setMessage("");
    setForm("");
  };

  const onKeyPressMessage = (e) => {
    if (e.key === "Enter") {
      onUserClick();
    }
  };
  return (
    <div>
      <h1>Event Test</h1>
      <input
        type="text"
        name="username"
        placeholder="사용자명"
        value={form.username}
        onChange={onChangeUsername}
      ></input>
      <br />
      <input
        type="text"
        name="message"
        placeholder="아무거나 입력하세요."
        value={form.message}
        onChange={onChangeMessage}
        onKeyPress={onKeyPressMessage}
      ></input>
    </div>
  );
};

export default EventPage02;
