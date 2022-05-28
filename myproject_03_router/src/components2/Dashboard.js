import React from "react";
import { useEffect, useState } from "react";

const Dashboard = () => {
  const [heroState, setHeroState] = useState([]);
  useEffect(() => {
    console.log("데이터 불러오기!!!");
    setHeroState([
      { id: "1", name: "홍길동", description: "11" },
      { id: "2", name: "고수", description: "12" },
      { id: "3", name: "여진구", description: "13" },
      { id: "4", name: "송중기", description: "14" },
      { id: "5", name: "이준기", description: "15" },
    ]);
  }, []);

  return (
    <div>
      <h2>Dashboard</h2>
      <table className="table table-striped" style={{ marginTop: 20 }}>
        <thead>
          <tr>
            <th>id</th>
            <th>name</th>
            <th>description</th>
          </tr>
        </thead>
        <tbody>
          {heroState.map((hero) => {
            return (
              <tr key={hero.id}>
                <td>{hero.id}</td>
                <td>{hero.name}</td>
                <td>{hero.description}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Dashboard;
