import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../User/Login";
import Register from "../User/Register";
import AllPost from "../Pages/Home/AllPost/AllPost";
import PostDetails from "../Pages/PostDetails/PostDetails";
import Membership from "../Pages/Membership/Membership";

export const router = createBrowserRouter([
  {
    path: "/",
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
          },
          {
            path: '/membership',
            element:<Membership></Membership>
          },
          {
            path: 'allPost',
            element:<AllPost></AllPost>
          },
          {
            path: '/postDetails/:id',
            element:<PostDetails></PostDetails>
          },
          {
            path: '/login',
            element: <Login></Login>
          },
          {
            path: '/register',
            element: <Register></Register>
          }
    ]
  },
]);
