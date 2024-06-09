import { Outlet } from "react-router-dom";
import Sidebar from "../../Component/Dashbord/Sidebar";
import { Helmet } from "react-helmet-async";

const DashbordLayout = () => {

    <Helmet>
    <title>Dashboard | AddPost</title>
  </Helmet>
    return (
        <div className=" relative min-h-screen md:flex">
            <Sidebar></Sidebar>

            <div className="flex-1 md:ml-64">
                <div className="p-5">
                <Outlet></Outlet>
                </div>
            </div>
        </div>
    );
};

export default DashbordLayout;