import axios from "axios";
import React, { createContext, useReducer } from "react";

export const topicsContext = createContext();

const API = "http://localhost:8000/topics";

const INIT_STATE = {
  topics: [],
};

const reducer = (prevState = INIT_STATE, action) => {
  switch (action.type) {
    case "GET_TOPICS":
      return { ...prevState, topics: action.payload };
    default:
      return prevState;
  }
};

// Хук useContext используется для создания общих данных, к которым можно обращаться из дочерних компонентов (не прописывая каждый раз props)

const TopicContextProvider = ({ children }) => {
  // хук useReducer - принимает 2 аргумента: функцию reducer и начальное состояние. Затем хук возвращает массив из 2 элементов: текущее состояние и функцию dispatch. Dispatch (принимает в аргументы action) - функция, которая отправляет объект "action" для изменения состояния.
  const [state, dispatch] = useReducer(reducer, INIT_STATE);
  console.log(state);

  // addTopics - функция для добавления топиков в базу данных db.json
  const addTopics = async (topic) => {
    await axios.post(API, topic);
  };

  // getTopics - Фуннкция для получения данных из БД db.json и сохранения этих данных в state "topics"
  const getTopics = async () => {
    const { data } = await axios.get(API);
    dispatch({
      type: "GET_TOPICS",
      payload: data,
    });
  };

  return (
    <topicsContext.Provider
      value={{ topicsArr: state.topics, addTopics, getTopics }}
    >
      {children}
    </topicsContext.Provider>
  );
};

export default TopicContextProvider;
