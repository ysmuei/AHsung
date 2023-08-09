import React from "react";
import Splash from "../routes/Splash";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Login from "routes/Login";
import FranchHome from "routes/FranchHome";
const AppRouter = () => {
  return (
    <BrowserRouter>
      <div
        style={{
          maxWidth: "90vw",
          maxHeight: "90vh",
          margin: "0 auto",
          marginTop: 80,
          marginBottom: 0,
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Routes>
          <Route path="/" element={<Splash />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/FranchHome" element={<FranchHome />} />
        </Routes>

      </div>
    </BrowserRouter>
  );
};

export default AppRouter;
