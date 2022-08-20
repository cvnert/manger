/**
 * 此文件为路由文件
 * @returns
 */
import App from "../App";
import Edit from "../page/Edit";
import List from "../page/List";
import Login from "../page/Login";
import Means from "../page/Means";
import Register from "../page/Register";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const baseRouter = () => (
  <Router>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="/edit" element={<Edit />}></Route>
        <Route path="/list" element={<List />}></Route>
        <Route path="/means" element={<Means />}></Route>
      </Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/register" element={<Register />}></Route>
    </Routes>
  </Router>
);

export default baseRouter;
