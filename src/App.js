import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import TopicContextProvider from "./context/TopicContext";
import MainRoutes from "./MainRoutes";

const App = () => {
  return (
    <div>
      <TopicContextProvider>
        <Navbar />
        <MainRoutes />
      </TopicContextProvider>
    </div>
  );
};

export default App;
