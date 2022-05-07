const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 9000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  cors({
    origin: "*", // 출처 허용옵션
    credentials: "true", // 사용자 인증이 필요한 리소스(쿠키 등) 접근
  })
);
// http://localhost:9000/api/hello
// app.get("/api/hello", (req, res) => {
//   res.send({ message: "Hello Express!!!!" });
// });

app.get("/api/customers", (req, res) => {
  res.send([
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
  ]);
});
app.listen(port, () => console.log(`Listening on Port ${port}`));
