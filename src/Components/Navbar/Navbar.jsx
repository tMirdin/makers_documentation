import React, { useContext, useEffect } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/image/Logo.png";
import { topicsContext } from "../../context/TopicContext";
import "./Navbar.css";

const Navbar = () => {
  const { searchVal, setSearchVal, getTopics } = useContext(topicsContext);

  useEffect(() => {
    getTopics();
    console.log("**********");
    console.log("234234234");
  }, [searchVal]);

  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <img id="navbarLogo" src={logo} alt="logo" />
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link" aria-current="page" to="/">
                Главная
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/add">
                Добавить топик
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/topicCard">
                Карточки
              </NavLink>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#aboutUs">
                О нас
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contactsss">
                Контакты
              </a>
            </li>
            <li className="nav-item dropdown"></li>
          </ul>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Поиск..."
              aria-label="Search"
              id="inpSearch"
              value={searchVal}
              onChange={(e) => setSearchVal(e.target.value)}
            />
            <button className="btn-outline-success" type="submit">
              Поиск
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
