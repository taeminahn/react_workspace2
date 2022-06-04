import axios from "axios";
import React from "react";

const CustomerDelete = ({ id }) => {
  const deleteCustomer = async (e) => {
    const baseUrl = "http://localhost:9000";
    const url = baseUrl + "/api/customers/" + id;
    await axios
      .delete(url)
      .then((response) => {
        console.log(response.data);
        window.location.reload();
      })
      .catch((err) => {
        console.error(err.message);
      });
  };
  return (
    <div>
      <div></div>
      <button onClick={(e) => deleteCustomer(id)}>삭제</button>
    </div>
  );
};

export default CustomerDelete;
