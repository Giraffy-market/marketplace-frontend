// import Header from "../../components/Header/Header";
import { Outlet } from "react-router-dom";
import type { FC } from "react";
import Header from "../../components/Header/Header";

const MainLayout: FC = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};

export default MainLayout;
