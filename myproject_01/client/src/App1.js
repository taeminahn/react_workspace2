import logo from "./logo.svg";
import "./App.css";
import Customer from "./part01_basic/Customer";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

// 컴포넌트에서 사용되는 데이터 값의 기억공간 : 상태(State)
function App() {
  const customers = [
    {
      id: 1,
      image: "https://placeimg.com/65/65/1",
      name: "고수",
      birthday: "780604",
      gender: "남자",
      email: "su@gmail.com",
    },
    {
      id: 2,
      image: "https://placeimg.com/65/65/2",
      name: "안태민",
      birthday: "940806",
      gender: "남자",
      email: "taeminahn2@gmail.com",
    },
    {
      id: 3,
      image: "https://placeimg.com/65/65/3",
      name: "김연아",
      birthday: "900905",
      gender: "여자",
      email: "kim@daum.net",
    },
  ];
  return (
    <Paper>
      {/* <Customer
        id={customers[0].id}
        image={customers[0].image}
        name={customers[0].name}
        birthday={customers[0].birthday}
        gender={customers[0].gender}
        email={customers[0].email}
      />
      <Customer
        id={customers[1].id}
        image={customers[1].image}
        name={customers[1].name}
        birthday={customers[1].birthday}
        gender={customers[1].gender}
        email={customers[1].email}
      />
      <Customer
        id={customers[2].id}
        image={customers[2].image}
        name={customers[2].name}
        birthday={customers[2].birthday}
        gender={customers[2].gender}
        email={customers[2].email}
      /> */}
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
          {customers.map((c) => {
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
          })}
        </TableBody>
      </Table>
    </Paper>
  );
}

export default App1;
