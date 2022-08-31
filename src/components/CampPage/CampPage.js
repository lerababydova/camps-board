import { useParams } from "react-router-dom";
import Button from "../Buttons/Button";
import camps from "../Camps/camps.json";

import Header from "../Header/Header";

import "./styles.scss";

const CampPage = () => {
  const params = useParams();
  const campSlug = params.slug;
  const camp = camps.find((camp) => camp.slug === campSlug);
  console.log(camp);
  return (
    <div className="camp-container">
      <Header />
      <div className="camp-wrapper">
        <div className="map">
          <img className="map-img" src="/assets/Map.png" alt="" />
        </div>
        <div className="camp">
          <div className="camp-card">
            <img
              className="camp-card_image"
              src={`/assets/Camp-images/${camp.image}`}
              alt=""
            />
            <div className="camp-card_title-container">
              <h2 className="camp-card_title">{camp.title}</h2>
              <p className="camp-card_price">${camp.price}/night</p>
            </div>

            <p className="camp-card_description">{camp.fullDescription}</p>
            <i className="camp-card_submition-name">
              Submitted by {camp.userName}
            </i>
          </div>
          <div className="feedback-section">
            <div className="feedback-section_title">
              <p className="feedback-section_user-name">Adam Jones</p>
              <p className="feedback-section_date">13h ago</p>
            </div>
            <p className="feedback-section_text">
              Honestly one of the best experience ever, took us a while to
              figure out how to get there but it was amazing!
            </p>
            <hr></hr>
            <Button text={"Leave a review"} type={"primary"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CampPage;
