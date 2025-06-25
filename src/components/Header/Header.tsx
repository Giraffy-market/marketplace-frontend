import type { FC } from "react";
import logo from "../../assets/icons/logo.svg";
import s from "./Header.module.scss";
import Icon from "../Icon/Icon";
import { NavLink } from "react-router-dom";

const Header: FC = () => {
  return (
    <header className={`${s.header}`}>
      <nav className={`${s.header_nav} container`}>
        <NavLink className={`${s.header_logo}`} to="/">
          <img className={`${s.header_logo_img}`} src={logo} alt="React logo" />
          <span className={`${s.header_logo_text}`}>Giraffe</span>
        </NavLink>

        <div className={`${s.header_search_container}`}>
          <input className={`${s.header_search_input}`} type="text" />
          <button className={`${s.header_search_button} button`}>Знайти</button>
          <button className={`${s.header_search_location} button`}>
            <Icon
              className={`${s.header_search_icon}`}
              name="icon-map"
              size={36}
            />
          </button>
        </div>

        <div className={`${s.header_profile_icons}`}>
          <Icon
            className={`${s.header_profile_icon}`}
            name="icon-bell"
            size={36}
          />
          <Icon
            className={`${s.header_profile_icon}`}
            name="icon-favorite"
            size={36}
          />
          <Icon
            className={`${s.header_profile_icon}`}
            name="icon-basket"
            size={36}
          />
          <Icon
            className={`${s.header_profile_person}`}
            name="icon-person"
            size={36}
          />
        </div>
      </nav>
    </header>
  );
};

export default Header;
