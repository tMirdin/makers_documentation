import React, { useContext, useEffect } from "react";
import { topicsContext } from "../../context/TopicContext";
import "./TopicsList.css";

const TopicsList = () => {
  const { topicsArr, getTopics } = useContext(topicsContext);

  useEffect(() => {
    getTopics();
  }, []);

  return (
    <div>
      {topicsArr.map((item) => (
        <div className="container-cards">
          <div className="card1" style={{ width: "18rem" }}>
            <img src={item.image} className="card-img-top" alt={item.title} />
            <div className="card-body">
              <h5 className="card-title">{item.title}</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href={item.lib} target="_blank" className="btn btn-primary">
                {item.lib}
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TopicsList;
