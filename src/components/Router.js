import React from "react";
import Splash from "../routes/Splash";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "routes/Login";
import FranchHome from "routes/FranchHome";
import Order from "routes/Order";
import ManagerLogin from "routes/ManagerLogin";
import ManagerHome from "routes/ManagerHome";
import OrderCheck from "routes/OrderCheck";
import OrderEnd from "routes/OrderEnd";
import OrderContent from "routes/OrderContent";
import OrderDetail from "routes/OrderDetail";
const AppRouter = ({ userObj }) => {
  return (
    <BrowserRouter>
      <div
        style={{
          maxWidth: "1000px",
          width: "100%",
          margin: "0 auto",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Routes>
          <Route path="/" element={<Splash />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/ManagerLogin" element={<ManagerLogin />} />
          <Route path="/FranchHome" element={<FranchHome userObj={userObj}/>} />
          <Route path="/ManagerHome" element={<ManagerHome userObj={userObj}/>} />
          <Route path="/Order" element={<Order userObj={userObj}/>} />
          <Route path="/OrderCheck" element={<OrderCheck userObj={userObj}/>} />
          <Route path="/OrderEnd" element={<OrderEnd  />} />
          <Route path="/OrderContent" element={<OrderContent  />} />
          <Route path="/OrderDetail" element={<OrderDetail />} />
        </Routes>

      </div>
    </BrowserRouter>
  );
};

export default AppRouter;
