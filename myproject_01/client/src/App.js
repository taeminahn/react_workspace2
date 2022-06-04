import logo from "./logo.svg";
import "./App.css";
import Customer from "./part01_basic/Customer";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableBody from "@mui/material/TableBody";
import { TableCell } from "@mui/material";
import Paper from "@mui/material/Paper";
import axios from "axios";
import React, { useState, useEffect } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import CustomerAdd from "./part01_basic/CustomerAdd";

//컴포넌트에서 사용되는 데이터 값의 기억공간 : 상태(state)
function App() {
  const baseUrl = "http://localhost:9000";

  const [customers, setCustomers] = useState("");
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((preProgress) => (preProgress >= 100 ? 0 : preProgress + 10));
    }, 800);

    //progress가 테스트를 할때는 getCustomers()을 주석처리한다.
    getCustomers();

    return () => {
      clearInterval(timer);
    };
  }, []);

  async function getCustomers() {
    await axios
      .get(baseUrl + "/api/customers")
      .then((response) => {
        //console.log(response.data);
        setCustomers(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  return (
    <div>
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
              <TableCell>삭제</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {customers ? (
              customers.map((c) => {
                return (
                  // Each child in a list should have a unique "key" prop.
                  <Customer
                    key={c.ID}
                    id={c.ID}
                    image={c.IMAGE}
                    name={c.NAME}
                    birthday={c.BIRTHDAY}
                    gender={c.GENDER}
                    email={c.EMAIL}
                  />
                );
              })
            ) : (
              <TableRow>
                <TableCell colSpan="6" align="center">
                  <CircularProgress variant="determinate" value={progress} />
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </Paper>
      <CustomerAdd />
    </div>
  );
}

export default App;
