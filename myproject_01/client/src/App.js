import logo from "./logo.svg";
import "./App.css";
import Customer from "./part01_basic/Customer";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableBody from "@mui/material/TableBody";
import { TableCell } from "@mui/material";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import axios from "axios";
import React, { useState, useEffect } from "react";

// 컴포넌트에서 사용되는 데이터 값의 기억공간 : 상태(State)
function App() {
  const baseUrl = "http://localhost:9000";

  const [customers, setCustomers] = useState("");
  useEffect(() => {
    getCustomers(0);
  }, []);

  async function getCustomers() {
    await axios
      .get(baseUrl + "/api/customers")
      .then((response) => {
        // console.log(response.data);
        setCustomers(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <Paper>
      <Table sx={{ minWidth: 650 }}>
        <TableHead>
          <TableRow>
            <TableCell>번호</TableCell>
            <TableCell>이미지</TableCell>
            <TableCell>이름</TableCell>
            <TableCell>생년월일</TableCell>
            <TableCell>성별</TableCell>
            <TableCell>이메일</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {customers
            ? customers.map((c) => {
                return (
                  <Customer
                    key={c.id}
                    id={c.id}
                    image={c.image}
                    name={c.name}
                    birthday={c.birthday}
                    gender={c.gender}
                    email={c.email}
                  />
                );
              })
            : null}
        </TableBody>
      </Table>
    </Paper>
  );
}

export default App;
