import { Link } from "react-router-dom";
import Button from "../Buttons/Button";
import { AirbnbIcon } from "../Icons/PartnerIcons";
import "./styles.scss";

const LandingPage = () => {
  return (
    <section className="container">
      <div className="landing-container">
        <div className="landing-container_left">
          <div className="logo">
            <img src="/assets/logo.svg" alt=""></img>
          </div>
          <div className="landing-container_img-tablet"></div>
          <div className="landing-container_left-wrapper">
            <h1>Explore the best camps on Earth</h1>
            <p className="landing-container_text">
              YelpCamp is a curated list of the best camping spots on Earth.
              Unfiltered and unbiased reviews.
            </p>
            <ul className="landing-container_list">
              <li className="landing-container_list-item">
                <img
                  className="landing-container_list-item-dot"
                  src="/assets/Checkmark.svg"
                  alt=""
                />
                Add your own camp suggestion
              </li>
              <li className="landing-container_list-item">
                <img
                  className="landing-container_list-item-dot"
                  src="/assets/Checkmark.svg"
                  alt=""
                />
                Leave reviews and experiences
              </li>
              <li className="landing-container_list-item">
                <img
                  className="landing-container_list-item-dot"
                  src="/assets/Checkmark.svg"
                  alt=""
                />
                See locations for all camps
              </li>
            </ul>
            <Link to={"/camps"}>
              <Button text={"View Campgrounds"} type={"primary"} />
            </Link>
            <p className="landing-container_partners">Partnered with:</p>
            <div className="landing-container-logos">
              <a
                className="landing-container_logos-airbnb"
                href="https://www.airbnb.com/"
                target="_blank"
                rel="noreferrer"
              >
                <AirbnbIcon id={"airbnb-icon_gray"} />
              </a>
              <a
                href="https://www.booking.com/index.ru.html"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  className="landing-container_logos-booking"
                  src="/assets/Booking.svg"
                  alt=""
                />
              </a>
              <a
                href="https://www.plumguide.com/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  className="landing-container_logos-plum"
                  src="/assets/PlumGuide.svg"
                  alt=""
                />
              </a>
            </div>
          </div>
        </div>
        <div className="landing-container_img" />
      </div>
    </section>
  );
};

export default LandingPage;
