// import { Link } from "react-router-dom";
// import useAuth from "../../../Hook/useAuth";
// import HostModal from "../../../Component/Modal/HostModal";
// import { useState } from "react";

// const Navber = () => {
//   const { user, logOut } = useAuth();
//   console.log(user);
//   // const navMenu = (
//   //   <>
//   //     <li>
//   //       <Link>Home</Link>
//   //     </li>
//   //     <li>
//   //       <Link>Membership</Link>
//   //     </li>
//   //     <li>
//   //       <Link>Home</Link>
//   //     </li>
//   //   </>
//   // );

//   const [isOpen, setIsOpen] = useState(false);

//   // for modal
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const coloseModal = () => {
//     setIsModalOpen(false);
//   };

//   return (
//     <div>
//       <div className="navbar bg-base-100">
//         <div className="navbar-start">
//           <div className="dropdown">
//             <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 className="h-5 w-5"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   d="M4 6h16M4 12h8m-8 6h16"
//                 />
//               </svg>
//             </div>
//             <ul
//               tabIndex={0}
//               className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
//             >
//               <li>
//                 <Link to={"/"}>Home</Link>
//               </li>
//               <li>
//                 <Link to={"/membership"}>Membership</Link>
//               </li>
//             </ul>
//           </div>
//           <div className="flex items-center">
//             <Link to={"/"}>
//               <a className="btn btn-ghost text-xl">ConvoHub</a>
//             </Link>
//           </div>
//         </div>
//         <div className="navbar-center hidden lg:flex">
//           <ul className="menu menu-horizontal px-1">
//             <li>
//               <Link>Home</Link>
//             </li>
//             <li>
//               <Link to={"/membership"}>Membership</Link>
//             </li>
//           </ul>
//         </div>
//         <div className="navbar-end">
//           <div className="dropdown dropdown-end">
//             <div
//               tabIndex={0}
//               role="button"
//               className="btn btn-ghost btn-circle"
//             >
//               <div className="indicator">
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   className="h-5 w-5"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth="2"
//                     d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
//                   />
//                 </svg>
//                 <span className="badge badge-sm indicator-item">8</span>
//               </div>
//             </div>
//           </div>

//           {user ? (
//             <div className="dropdown dropdown-end">
//               <div
//                 tabIndex={0}
//                 role="button"
//                 className="btn btn-ghost btn-circle avatar"
//               >
//                 <div className="w-10 rounded-full">
//                   <img
//                     alt="Tailwind CSS Navbar component"
//                     src={user?.photoURL}
//                   />
//                 </div>
//               </div>
//               <ul
//                 tabIndex={0}
//                 className="menu menu-sm dropdown-content mt-3 z-[1] p-4 shadow bg-base-100 rounded-box w-52"
//               >
//                 <div className="py-4">
//                   <li className="mb-2 text-xl font-bold">
//                     {user?.displayName}
//                   </li>
//                   {
//                     // !user && (
//                     <button
//                       onClick={() => setIsModalOpen(true)}
//                       className="btn"
//                     >
//                       Request to Admin
//                     </button>
//                     // )
//                   }
//                   <HostModal
//                     isOpen={isModalOpen}
//                     coloseModal={coloseModal}
//                   ></HostModal>
//                   <Link className="text-xl font-bold" to={"/dashboard"}>
//                     Dashboard
//                   </Link>
//                 </div>
//                 <button
//                   onClick={logOut}
//                   className="btn bg-[#b58753] text-white"
//                 >
//                   Logout
//                 </button>
//               </ul>
//             </div>
//           ) : (
//             <Link to={"/login"}>
//               <button className="btn bg-[#b58753] text-white">Join US</button>
//             </Link>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Navber;





import { Link } from "react-router-dom";
import useAuth from "../../../Hook/useAuth";
import HostModal from "../../../Component/Modal/HostModal";
import { useState } from "react";

import useAxiosSecure from "../../../Hook/useAxiosSecure";
import { toast } from "react-toastify";
import useAxiosCommon from "../../../Hook/useAxiosCommon";
import { useQuery } from "@tanstack/react-query";

const Navber = () => {
  const axiosSecure=useAxiosSecure()
  const { user, logOut } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const modalHandeler = async () => {
  console.log('host hobo vai')
    closeModal()
    

    try {
      //
      const currentUser = {
        email: user?.email,
        role: 'User',
        status:'Requested',
      }
      const { data } = await axiosSecure.put(`/user`, currentUser)
      console.log(data)
      if (data.modifiedCount > 0) {
        toast.success("success please wait for admin approvial!")
      } else {
        toast.success('Please!,Wait for admin approval')
      }
    } catch (err) {
      // 
      console.log("host hobo vai")
      toast.error(err.message)
    } finally {
      closeModal()
    }
}

  // announcement notification code
  
  const axiosCommon = useAxiosCommon();

  const { data: posts = [] } = useQuery({
    queryKey: ["/announcements"],
    queryFn: async () => {
      const { data } = await axiosCommon.get("/announcements");
      // console.log(data)
      return data;
    },
  });




  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link to={"/"}>Home</Link>
              </li>
              <li>
                <Link to={"/membership"}>Membership</Link>
              </li>
            </ul>
          </div>
          <div className="flex items-center">
            <Link to={"/"}>
              <a className="btn btn-ghost text-xl">ConvoHub</a>
            </Link>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link>Home</Link>
            </li>
            <li>
              <Link to={"/membership"}>Membership</Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle"
            >
              <div className="indicator">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                <span className="badge badge-sm indicator-item text-red-600 font-bold">{ posts.length}</span>
              </div>
            </div>
          </div>

          {user ? (
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full">
                  <img alt="Tailwind CSS Navbar component" src={user?.photoURL} />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-4 shadow bg-base-100 rounded-box w-52"
              >
                <div className="py-4">
                  <li className="mb-2 text-xl font-bold">{user?.displayName}</li>
                  <button onClick={() => setIsModalOpen(true)} className="btn">
                    Request to Admin
                  </button>
                  <HostModal isModalOpen={isModalOpen} closeModal={closeModal} modalHandeler={modalHandeler} />
                  <Link className="text-xl font-bold" to={'/dashboard'}>
                    Dashboard
                  </Link>
                </div>
                <button onClick={logOut} className="btn bg-[#b58753] text-white">
                  Logout
                </button>
              </ul>
            </div>
          ) : (
            <Link to={"/login"}>
              <button className="btn bg-[#b58753] text-white">Join US</button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navber;
