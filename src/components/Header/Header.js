import { useState } from "react";
import { Link } from "react-router-dom";

import Button from "../Buttons/Button";
import Menu from "../Menu/Menu";
import "./styles.scss";

const Header = () => {
  const [isOpenedMenu, setOpenedMenu] = useState(false);

  const openMenu = () => {
    setOpenedMenu(true);
  };
  const closeMenu = () => {
    setOpenedMenu(false);
  };

  return (
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
        <Link to={"/signup"}>
          <Button text={"Create an account"} type={"primary"} />
        </Link>
        <div className="header_right-side-hamburger-menu" onClick={openMenu}>
          <img src="/assets/Hamburger-Menu.svg" alt="" />
        </div>
      </div>
      <Menu isOpenedMenu={isOpenedMenu} closeMenu={closeMenu} />
    </header>
  );
};

export default Header;
