import React from "react";
import { Route, Routes } from "react-router-dom";
import AddTopic from "./Components/AddTopic/AddTopic";
import Home from "./Components/Home/Home";
import TopicsList from "./Components/TopicsList/TopicsList";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/add" element={<AddTopic />} />
      <Route path="/topicCard" element={<TopicsList />} />
    </Routes>
  );
};

export default MainRoutes;
