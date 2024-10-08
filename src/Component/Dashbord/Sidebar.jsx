import { useState } from "react";
import { GrLogout } from "react-icons/gr";

import { AiOutlineBars } from "react-icons/ai";

import { Link, NavLink } from "react-router-dom";
import useAuth from "../../Hook/useAuth";
import useRole from "../../Hook/useRole";


const Sidebar = () => {
  const { logOut } = useAuth();
  const [isActive, setActive] = useState(false);

  const [role, isLoading] = useRole();
  console.log(role, isLoading);

  const handleToggle = () => {
    setActive(!isActive);
  };



  return (
    <>
      {/* Small Screen Navbar */}
      <div className="bg-gray-100 text-gray-800 flex justify-between md:hidden">
        <div>
          <div className="block cursor-pointer p-4 font-bold">
            <Link to={"/"}>
              <a className="btn btn-ghost text-xl">ConvoHub</a>
            </Link>
          </div>
        </div>

        <button
          onClick={handleToggle}
          className="mobile-menu-button p-4 focus:outline-none focus:bg-gray-200"
        >
          <AiOutlineBars className="h-5 w-5" />
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`z-10 md:fixed flex flex-col justify-between overflow-x-hidden bg-gray-100 w-64 space-y-6 px-2 py-4 absolute inset-y-0 left-0 transform ${
          isActive && "-translate-x-full"
        }  md:translate-x-0  transition duration-200 ease-in-out`}
      >
        <div>
          <div>
            <div className="w-full hidden md:flex px-4 py-2 shadow-lg rounded-lg justify-center items-center bg-rose-100 mx-auto">
              <Link to={"/"}>
                <a className="btn btn-ghost text-xl">ConvoHub</a>
              </Link>
            </div>
          </div>

          {/* Nav Items */}
          <div className="flex flex-col justify-between flex-1 mt-6">
            {/*  Menu Items */}

            <nav className="ml-2">
              {role === "User" && (
                <>
                  <ul>
                    <NavLink className="text-xl font-bold" to="myProfile">
                      MyProfile
                    </NavLink>
                  </ul>
                  <ul>
                    <NavLink className="text-xl font-bold" to="addPost">
                      AddPost
                    </NavLink>
                  </ul>
                  <ul>
                    <NavLink className="text-xl font-bold" to="myPost">
                      MyPosts
                    </NavLink>
                  </ul>
                </>
              )}

              {
                role === 'Admin' && <>
                <ul>
                    <NavLink className="text-xl font-bold" to="adminProfile">
                    Admin Profile
                    </NavLink>
                  </ul>
                  <ul>
                    <NavLink className="text-xl font-bold" to="manageUser">
                    Manage Users
                    </NavLink>
                  </ul>
                  <ul>
                    <NavLink to='activities' className="text-xl font-bold" >
                    Activities
                    </NavLink>
                  </ul>
                  <ul>
                    <NavLink className="text-xl font-bold " to="announcement">
                    Make Announcement

                    </NavLink>
                  </ul>
                </>
              }
            </nav>
          </div>
        </div>

        <div>
          <hr />

          <button
            onClick={logOut}
            className="flex w-full items-center px-4 py-2 mt-5 text-gray-600 hover:bg-gray-300   hover:text-gray-700 transition-colors duration-300 transform"
          >
            <GrLogout className="w-5 h-5" />

            <span className="mx-4 font-medium">Logout</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
