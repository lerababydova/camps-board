import { Link } from "react-router-dom";

import Button from "../Buttons/Button";

import "./styles.scss";

const SignUpPage = () => {
  return (
    <section className="login-container">
      <div className="login-container_left">
        <header className="login-container_left-header">
          <div className="login-container_left-header-logo">
            <img src="/assets/logo.svg" alt=""></img>
          </div>
          <Link to={"/camps"} className="login-container_left-header-link">
            🠐 Back to campgroungs
          </Link>
        </header>
        <div className="main-container">
          <div className="login-container_left-signin">
            <h1>Start exploring camps from all around the world.</h1>
            <p className="login-container_left-signin-input-title">Username</p>
            <input
              className="login-container_left-signin-input-username"
              type="text"
              placeholder="Enter username"
            />
            <p className="login-container_left-signin-input-title">Password</p>
            <input
              className="login-container_left-signin-input-password"
              type="password"
              placeholder="Enter Your password"
            />
            <Button text={"Create an account"} type={"primary"} />
            <span className="login-container_left-signin-string">
              Already a user?
              <Link
                to={"/login"}
                className="login-container_left-signin-create-link"
              >
                Sign in
              </Link>
            </span>
          </div>
        </div>
      </div>
      <div className="login-container_right">
        <div className="login-container_right-feedback">
          <p className="login-container_right-feedback-text">
            "YelpCamp has honestly saved me hours of research time, and the
            camps on here are definetly well picked and added."
          </p>
          <div className="login-container_right-feedback-user">
            <img src="/assets/User-testimonial.svg" alt="" />
            <div className="login-container_right-feedback-user-info">
              <p className="login-container_right-feedback-user-name">
                May Andrews
              </p>
              <p className="login-container_right-feedback-user-occupation">
                Professional Hiker
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUpPage;
