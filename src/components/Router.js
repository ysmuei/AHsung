import React from "react";
import Splash from "../routes/Splash";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Login from "routes/Login";
import FranchHome from "routes/FranchHome";
import Order from "routes/Order";
import ManagerLogin from "routes/ManagerLogin";
import ManagerHome from "routes/ManagerHome";
import OrderCheck from "routes/OrderCheck";
const AppRouter = () => {
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
          <Route path="/FranchHome" element={<FranchHome />} />
          <Route path="/ManagerHome" element={<ManagerHome />} />
          <Route path="/Order" element={<Order  />} />
          <Route path="/OrderCheck" element={<OrderCheck  />} />

        </Routes>

      </div>
    </BrowserRouter>
  );
};

export default AppRouter;
