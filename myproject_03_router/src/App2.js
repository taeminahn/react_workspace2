import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./components2/Dashboard";
import Home from "./components2/Home";
import About from "./components2/About";
import Layout from "./components2/Layout";
import NoMatch from "./components2/NoMatch";
import Counter from "./components2/Counter";
import BoardList from "./components2/board/BoardList";

const App = () => {
  return (
    <div>
      <h1>Basic Example</h1>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="counter" element={<Counter />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="*" element={<NoMatch />} />
          <Route path="board" element={<BoardList />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
