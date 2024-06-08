import { Outlet } from "react-router-dom";
import Footer from "../../Pages/Shared/Footer/Footer";
import Navber from "../../Pages/Shared/Navber/Navber";

const Main = () => {
  return (
    <div>
      <Navber></Navber>
      <div className="min-h-[calc(100vh-268px)]">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Main;
