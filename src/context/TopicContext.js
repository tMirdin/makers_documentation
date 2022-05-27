import { render } from "@testing-library/react";
import axios from "axios";
import React, { createContext, useReducer, useState } from "react";

export const topicsContext = createContext();

const API = "http://localhost:8000/topics";

const INIT_STATE = {
  topics: [],
  topicDetails: {},
};

const reducer = (prevState = INIT_STATE, action) => {
  switch (action.type) {
    case "GET_TOPICS":
      return { ...prevState, topics: action.payload };
    case "GET_TOPIC_DETAILS":
      return { ...prevState, topicDetails: action.payload };
    default:
      return prevState;
  }
};

// Хук useContext используется для создания общих данных, к которым можно обращаться из дочерних компонентов (не прописывая каждый раз props)

let page = 1; // Переменная для пагинации
let totalPage = [];

const TopicContextProvider = ({ children }) => {
  const [searchVal, setSearchVal] = useState("");
  // хук useReducer - принимает 2 аргумента: функцию reducer и начальное состояние. Затем хук возвращает массив из 2 элементов: текущее состояние и функцию dispatch. Dispatch (принимает в аргументы action) - функция, которая отправляет объект "action" для изменения состояния.
  const [state, dispatch] = useReducer(reducer, INIT_STATE);
  // console.log(state);

  // addTopics - функция для добавления топиков в базу данных db.json
  const addTopics = async (topic) => {
    await axios.post(API, topic);
  };

  // getTopics - Фуннкция для получения данных из БД db.json и сохранения этих данных в state "topics"
  const getTopics = async () => {
    const { data } = await axios.get(
      `${API}?_page=${page}&_limit=3&q=${searchVal}`
    );
    let action = {
      type: "GET_TOPICS",
      payload: data,
    };
    dispatch(action);
    totalPageFunc();
  };

  // getTopicDetails - функция которя стягивает данные из общего массива "topics" внутри БД db.json. Стягивает только один объект, на который мы нажимаем

  const getTopicDetails = async (id) => {
    const { data } = await axios.get(`${API}/${id}`);
    dispatch({
      type: "GET_TOPIC_DETAILS",
      payload: data,
    });
  };

  // deleteTopic - функция для удаления топика

  const deleteTopic = async (id) => {
    await axios.delete(`${API}/${id}`);
  };

  // editTopicFunc - функция для изменения данных нашей карточки

  const editTopicFunc = async (id, editedTopic) => {
    await axios.patch(`${API}/${id}`, editedTopic);
  };

  async function totalPageFunc() {
    let { data } = await axios.get(API);

    totalPage = Math.ceil(data.length / 3);
  }

  const prevPage = () => {
    if (page <= 1) return;
    page--;
    getTopics();
  };

  const nextPage = () => {
    if (totalPage <= page) return;
    page++;
    getTopics();
  };

  return (
    <topicsContext.Provider
      value={{
        topicsArr: state.topics,
        detailsObj: state.topicDetails,
        searchVal,
        setSearchVal,
        addTopics,
        getTopics,
        getTopicDetails,
        deleteTopic,
        editTopicFunc,
        prevPage,
        nextPage,
      }}
    >
      {children}
    </topicsContext.Provider>
  );
};

export default TopicContextProvider;
