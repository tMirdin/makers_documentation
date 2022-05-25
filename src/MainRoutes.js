import React from "react";
import { Route, Routes } from "react-router-dom";
import AddTopic from "./Components/AddTopic/AddTopic";
import Home from "./Components/Home/Home";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/add" element={<AddTopic />} />
    </Routes>
  );
};

export default MainRoutes;
