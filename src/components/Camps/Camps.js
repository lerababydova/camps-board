import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Button from "../Buttons/Button";
import camps from "./camps.json";
import "./styles.scss";

const Camps = () => {
  return (
    <section className="camps-container">
      <header className="header">
        <div className="header_left-side">
          <div className="header_logo">
            <img src="/assets/logo.svg" alt=""></img>
          </div>
          <Link to={"/"} className="header_left-side-home-page">
            Home
          </Link>
        </div>
        <div className="header_right-side">
          <Link to={"/login"} className="header_right-side-login">
            Login
          </Link>
          <Button text={"Create an account"} type={"primary"} />
        </div>
      </header>
      <section className="main">
        <div className="welcome-section">
          <h1 className="welcome-section_title">Welcome to YelpCamp!</h1>
          <p className="welcome-section_text">
            View our hand-picked campgrounds all over the world, or add your
            own.
          </p>
          <div className="welcome-section_search">
            <input
              className="welcome-section_search-field"
              type="text"
              placeholder="Search for camps"
            />
            <Button text={"Search"} type={"primary"} />
          </div>
          <a href="#" className="welcome-section_add-camp-link">
            Or add your own campground
          </a>
        </div>
        <div className="camps-section">
          {camps.map((camp) => {
            return (
              <div className="camps-section_card">
                <img
                  className="camps-section_card-pic"
                  src={`/assets/Camp-images/${camp.image}`}
                  alt=""
                ></img>
                <b className="camps-section_card-title">{camp.title}</b>
                <p className="camps-section_card-description">
                  {camp.description}
                </p>
                <Button text={"View Campground"} type={"secondary"}></Button>
              </div>
            );
          })}
        </div>
      </section>
    </section>
  );
};

export default Camps;
