import React, { useContext, useEffect, useState } from "react";
import { Button, FormControl, InputGroup } from "react-bootstrap";
import { NavLink, useParams } from "react-router-dom";
import { topicsContext } from "../../context/TopicContext";
import "./EditTopic.css";

const EditTopic = () => {
  const { id } = useParams();

  const { getTopicDetails, detailsObj, editTopicFunc } =
    useContext(topicsContext);

  const [editTitle, setEditTitle] = useState(detailsObj.title);
  const [editDescription, setEditDescription] = useState(
    detailsObj.description
  );
  const [editImage, setEditImage] = useState(detailsObj.image);
  const [editLib, setEditLib] = useState(detailsObj.lib);

  useEffect(() => {
    getTopicDetails(id);
  }, []);

  const handleClick = () => {
    let editedTopicObj = {
      title: editTitle,
      description: editDescription,
      image: editImage,
      lib: editLib,
    };
    editTopicFunc(id, editedTopicObj);
  };

  return (
    <div className="containerAddTopic">
      <InputGroup className="addTopic-inputs mb-3">
        <InputGroup.Text id="basic-addon1">Название</InputGroup.Text>
        <FormControl
          value={editTitle}
          onChange={(e) => setEditTitle(e.target.value)}
          placeholder="Добавьте название"
          aria-label="Username"
          aria-describedby="basic-addon1"
        />
      </InputGroup>
      <InputGroup className="addTopic-inputs mb-3">
        <InputGroup.Text id="basic-addon1">Описание</InputGroup.Text>
        <FormControl
          value={editDescription}
          onChange={(e) => setEditDescription(e.target.value)}
          placeholder="Добавьте описание"
          aria-label="Username"
          aria-describedby="basic-addon1"
        />
      </InputGroup>
      <InputGroup className="addTopic-inputs mb-3">
        <InputGroup.Text id="basic-addon1">Картинка</InputGroup.Text>
        <FormControl
          value={editImage}
          onChange={(e) => setEditImage(e.target.value)}
          placeholder="Вставьте ссылку на картинку"
          aria-label="Username"
          aria-describedby="basic-addon1"
        />
      </InputGroup>
      <InputGroup className="addTopic-inputs mb-3">
        <InputGroup.Text id="basic-addon1">Ссылка</InputGroup.Text>
        <FormControl
          value={editLib}
          onChange={(e) => setEditLib(e.target.value)}
          placeholder="Вставьте ссылку на информацию"
          aria-label="Username"
          aria-describedby="basic-addon1"
        />
      </InputGroup>
      <NavLink to="/topicCard">
        <Button onClick={handleClick} className="addTopic-btn">
          Изменить
        </Button>
      </NavLink>
    </div>
  );
};

export default EditTopic;
