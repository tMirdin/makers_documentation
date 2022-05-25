import axios from "axios";
import React, { createContext } from "react";

export const topicsContext = createContext();

const API = "http://localhost:8000/topics";

const TopicContextProvider = ({ children }) => {
  // addTopics - функция для добавления топиков в базу данных db.json
  const addTopics = async (topic) => {
    await axios.post(API, topic);
  };

  return (
    <topicsContext.Provider value={{ addTopics }}>
      {children}
    </topicsContext.Provider>
  );
};

export default TopicContextProvider;
