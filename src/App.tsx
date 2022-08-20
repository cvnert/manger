import React from "react";
import { Outlet } from "react-router";
import Login from "./page/Login";

function App() {
  return (
    <>
      <div>主页</div>
      <Outlet />
    </>
  );
}

export default App;
