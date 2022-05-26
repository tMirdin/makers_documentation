import React, { useContext, useEffect } from "react";
import { NavLink, useParams } from "react-router-dom";
import { topicsContext } from "../../context/TopicContext";
import "./TopicDetails.css";

const TopicDetails = () => {
  const { id } = useParams();

  const { getTopicDetails, detailsObj, deleteTopic } =
    useContext(topicsContext);

  useEffect(() => {
    getTopicDetails(id);
  }, []);

  return (
    <div className="container-details d-flex flex-wrap">
      <div className="d-flex justify-content-between">
        <div className="contImg">
          <img id="imgCards" src={detailsObj.image} alt="img" />
        </div>

        <p>{detailsObj.description}</p>
        <p>Подробная информация по ссылке ниже</p>
        <a target="_blank" href={detailsObj.lib}>
          Ссылка
        </a>
      </div>
      <div>
        <NavLink to={`/edit/${id}`}>
          <button className="btnCrud" id="edit">
            Изменить
          </button>
        </NavLink>
        <NavLink to="/topicCard">
          <button className="btnCrud" id="del" onClick={() => deleteTopic(id)}>
            Удалить
          </button>
        </NavLink>
      </div>
    </div>
  );
};

export default TopicDetails;
