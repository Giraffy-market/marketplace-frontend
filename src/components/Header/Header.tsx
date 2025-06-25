import type { FC } from "react";
import logo from "../../assets/logo.svg";

const Header: FC = () => {
  return (
    <nav>
      <img src={logo} className="logo react" alt="React logo" />
    </nav>
  );
};

export default Header;
