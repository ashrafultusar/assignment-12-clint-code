import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../User/Login";
import Register from "../User/Register";
import AllPost from "../Pages/Home/AllPost/AllPost";
import PostDetails from "../Pages/PostDetails/PostDetails";
import Membership from "../Pages/Membership/Membership";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import DashbordLayout from "../Layout/Dashbord/DashbordLayout";
import MyProfile from "../Pages/Dashbord/User/MyProfile";
import AddPost from "../Pages/Dashbord/User/AddPost";
import MyPost from "../Pages/Dashbord/User/MyPost";
import ManageUser from "../Pages/Dashbord/Admin/ManageUser";
import PrivateRoute from "./PrivateRoute";
import Announcement from "../Pages/Dashbord/Admin/Announcement";
import AdminProfile from "../Pages/Dashbord/Admin/AdminProfile";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/membership",
        element: (
          <PrivateRoute>
            <Membership></Membership>
          </PrivateRoute>
        ),
      },
      {
        path: "allPost",
        element: <AllPost></AllPost>,
      },
      {
        path: "/postDetails/:id",
        element: (
          <PrivateRoute>
            <PostDetails></PostDetails>
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
  {
    path: "/register",
    element: <Register></Register>,
  },

  {
    path: "dashboard",
    element: (
      <PrivateRoute>
        <DashbordLayout></DashbordLayout>
      </PrivateRoute>
    ),
    children: [
      {
        path: "dashboard",
        element: <h1>welcome</h1>,
      },
      {
        path: "addpost",
        element: <AddPost></AddPost>,
      },
      {
        path: "mypost",
        element: <MyPost></MyPost>,
      },
      {
        path: "myProfile",
        element: <MyProfile></MyProfile>,
      },
      {
        path: "manageUser",
        element: <ManageUser></ManageUser>,
      },
      {
        path: 'announcement',
        element:<Announcement></Announcement>
      },
      {
        path: 'adminProfile',
        element:<AdminProfile></AdminProfile>
      }

    ],
  },
]);
