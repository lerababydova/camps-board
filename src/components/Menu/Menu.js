import { useEffect } from "react";
import { Link } from "react-router-dom";

import "./styles.scss";

const Menu = ({ isOpenedMenu, closeMenu }) => {
  useEffect(() => {
    if (isOpenedMenu) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.removeProperty("overflow-y");
    }

    return () => {
      document.body.style.removeProperty("overflow-y");
    };
  }, [isOpenedMenu]);

  return (
    <>
      <div
        className={`camp-menu-mask ${isOpenedMenu ? "open" : "close"}`}
        onClick={closeMenu}
      ></div>
      <div className={`camp-menu ${isOpenedMenu ? "open" : "close"}`}>
        <div className="camp-menu-closed-btn" onClick={closeMenu}>
          <img
            className="camp-menu-closed-btn-img"
            src="/assets/Close.svg"
            alt=""
          />
        </div>
        <div className="camp-menu-links">
          <Link className="camp-menu-link" to={"/"}>
            Home
          </Link>
          <Link className="camp-menu-link" to={"/login"}>
            Log in
          </Link>
          <Link className="camp-menu-link" to={"/signup"}>
            Create an account
          </Link>
        </div>
      </div>
    </>
  );
};

export default Menu;
