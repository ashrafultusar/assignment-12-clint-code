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
        element: <Membership></Membership>,
      },
      {
        path: "allPost",
        element: <AllPost></AllPost>,
      },
      {
        path: "/postDetails/:id",
        element: <PostDetails></PostDetails>,
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
    path: 'dashboard',
    element:<DashbordLayout></DashbordLayout>,
    children: [
      {
        path: 'dashboard',
        element:<MyProfile></MyProfile>
      },
      {
        path: 'addpost',
        element: <AddPost></AddPost>
      },
      {
        path: 'mypost',
        element:<MyPost></MyPost>
      },
      {
        path:'/dashboard/myProfile',
      element:<MyProfile></MyProfile>  
      }
    ]
}

]);
