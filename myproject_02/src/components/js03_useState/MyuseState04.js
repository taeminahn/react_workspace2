import { useState } from "react";

function MyuseState04() {
  const [customerList, setCustomerList] = useState([
    {
      name: "홍길동",
      address: "서울시 강남구",
      phone: "010-0000-0001",
    },
    {
      name: "이영희",
      address: "서울시 서초구",
      phone: "010-1234-5678",
    },
    {
      name: "안태민",
      address: "용인시 수지구",
      phone: "010-5147-9414",
    },
  ]);
  const [customer, setCustomer] = useState({
    name: "",
    address: "",
    phone: "",
  });

  const onChangeName = (e) => {
    setCustomer((prevState) => {
      return { ...prevState, name: e.target.value };
    });
  };
  const onChangeAddress = (e) => {
    setCustomer((prevState) => {
      return { ...prevState, address: e.target.value };
    });
  };
  const onChangePhone = (e) => {
    setCustomer((prevState) => {
      return { ...prevState, phone: e.target.value };
    });
  };

  const handleConfirm = (e) => {
    setCustomerList([customer, ...customerList]);
    setCustomer({
      name: "",
      address: "",
      phone: "",
    });
  };

  return (
    <div>
      <div>
        <span>이름</span>
        <input type="text" onChange={onChangeName} value={customer.name} />
        <span>주소</span>
        <input
          type="text"
          onChange={onChangeAddress}
          value={customer.address}
        />
        <span>전화</span>
        <input type="text" onChange={onChangePhone} value={customer.phone} />
        <p>
          <button type="button" onClick={handleConfirm}>
            확인
          </button>
        </p>
      </div>
      <table>
        <thead>
          <tr>
            <th>이름</th>
            <th>주소</th>
            <th>전화</th>
          </tr>
        </thead>

        <tbody>
          {customerList.map((value, index) => {
            return (
              <tr key={index}>
                <td>{value.name} </td>
                <td>{value.address}</td>
                <td>{value.phone}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default MyuseState04;
