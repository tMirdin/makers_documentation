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
    <>
      <div className="containerTopicDetails">
        <div className="containerTopicDetailsLeft">
          <img id="imgCards" src={detailsObj.image} alt="img" />
        </div>
        <div className="containerTopicDetailsRight">
          <div className="contImg"></div>
          <h3 className="topicDetailsH3">{detailsObj.title}</h3>
          <p className="topicDetailsPT1">{detailsObj.description}</p>
          <p className="topicDetailsPT">
            Подробная информация по ссылке ниже ↓
          </p>
          <a id="topicBtn" target="_blank" href={detailsObj.lib}>
            Ссылка
          </a>
        </div>
      </div>
      <div className="topicDetailsButtons">
        <NavLink to={`/edit/${id}`}>
          <button className="btnCrud" id="edit">
            ✎
          </button>
        </NavLink>
        <NavLink to="/topicCard">
          <button className="btnCrud" id="del" onClick={() => deleteTopic(id)}>
            🗑
          </button>
        </NavLink>
      </div>
    </>
  );
};

export default TopicDetails;
