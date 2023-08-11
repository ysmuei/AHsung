import React from "react";
import Splash from "../routes/Splash";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Login from "routes/Login";
import FranchHome from "routes/FranchHome";
import Order from "routes/Order";
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
          <Route path="/FranchHome" element={<FranchHome />} />
          <Route path="/Order" element={<Order  />} />
        </Routes>

      </div>
    </BrowserRouter>
  );
};

export default AppRouter;
