import React, { useContext, useEffect } from "react";
import { Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { topicsContext } from "../../context/TopicContext";
import "./TopicsList.css";

const TopicsList = () => {
  const { topicsArr, getTopics, prevPage, nextPage } =
    useContext(topicsContext);

  useEffect(() => {
    getTopics();
  }, []);

  return (
    <div className="container d-flex justify-content-evenly flex-wrap container-cards">
      {topicsArr.map((item) => (
        <div>
          <div
            className="card1 text-center m-4"
            style={{ width: "18rem", height: "350px" }}
          >
            <img
              src={item.image}
              height="200"
              className="card-img-top"
              alt={item.title}
            />
            <div className="card-body">
              <h5 className="card-title">{item.title}</h5>
              <NavLink to={`/details/${item.id}`}>
                <Button>Просмотреть</Button>
              </NavLink>
            </div>
          </div>
        </div>
      ))}
      <Button onClick={() => prevPage()}>Назад</Button>
      <Button onClick={() => nextPage()}>Вперед</Button>
    </div>
  );
};

export default TopicsList;
