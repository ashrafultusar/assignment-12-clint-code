import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../User/Login";
import Register from "../User/Register";
import AllPost from "../Pages/Home/AllPost/AllPost";

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
            path: 'allPost',
            element:<AllPost></AllPost>
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
