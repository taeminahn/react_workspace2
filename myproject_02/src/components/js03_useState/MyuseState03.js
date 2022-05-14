import { useState } from "react";

function MyuseState03() {
  const [customer, setCustomer] = useState({
    name: "홍길동",
    address: "서울시 강남구",
    phone: "010-0000-0001",
  });

  const onChangeName = (e) => {
    // setCustomer({ name: e.target.value });
    setCustomer((prevState) => {
      return { ...prevState, name: e.target.value };
    });
  };
  const onChangeAddress = (e) => {
    // setCustomer({ address: e.target.value });
    setCustomer((prevState) => {
      return { ...prevState, address: e.target.value };
    });
  };
  const onChangePhone = (e) => {
    // setCustomer({ phone: e.target.value });
    setCustomer((prevState) => {
      return { ...prevState, phone: e.target.value };
    });
  };
  const handleConfirm = () => {
    console.log(customer.name);
    console.log(customer.address);
    console.log(customer.phone);
  };

  return (
    <div>
      <span>이름</span>
      <input type="text" onChange={onChangeName} value={customer.name}></input>
      <span>주소</span>
      <input
        type="text"
        onChange={onChangeAddress}
        value={customer.address}
      ></input>
      <span>전화번호</span>
      <input
        type="text"
        onChange={onChangePhone}
        value={customer.phone}
      ></input>
      <p>
        <button type="button" onClick={handleConfirm}>
          확인
        </button>
      </p>
    </div>
  );
}

export default MyuseState03;
