// import { useState } from "react";
// import LoadingSpinner from "../../Shared/LoadingSpinner/LoadingSpinner";
// import PostsSingleCard from "../../../AllSinglecard/PostsSingleCard";
// import useServices from "../../../Hook/useServices";

// const Banner = () => {
//   //   const { id } = useParams();
//   //   const { data: commnt = [] } = useQuery({
//   //     queryKey: ["/comments", id],
//   //     queryFn: async () => {
//   //       const { data } = await axiosCommon.get(`/comments`, {
//   //         params: { postId: id },
//   //       });
//   //       return data;
//   //     },
//   //   });

//   // console.log(commnt);
//   const [itemPerPage, setItemPerPage] = useState(5);
//   const [currentPage, setCurrentPage] = useState(1);

//   const [search, setSearch] = useState("");
//   const { posts } = useServices(search);

//   console.log(posts);

//   const handleSearch = (e) => {
//     e.preventDefault();
//     const searchText = e.target.search.value;
//     setSearch(searchText);
//   };

//   // paigenation
//   const totalPages = Math.ceil(posts.length / itemPerPage);

//   // Get the posts for the current page
//   const indexOfLastPost = currentPage * itemPerPage;
//   const indexOfFirstPost = indexOfLastPost - itemPerPage;
//   const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

//   // Create an array for pagination buttons
//   const pages = [...Array(totalPages).keys()].map((number) => number + 1);

//   return (
//     <div>
//       <div
//         className="hero h-[460px]"
//         style={{
//           backgroundImage: "url(https://i.ibb.co/3NrRj6M/images.png)",
//         }}
//       >
//         <div className="hero-overlay bg-opacity-60"></div>
//         <div className="hero-content text-center text-neutral-content">
//           <div className="max-w-md">
//             <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
//             <p className="mb-5">Search Your Favorite Author Post</p>
//             <div>
//               <form onSubmit={handleSearch}>
//                 <input
//                   className="text-black p-3 rounded-l-lg"
//                   type="text"
//                   name="search"
//                   id="search"
//                 />
//                 <input
//                   className="p-3 rounded-r-lg bg-[#B58753]"
//                   type="submit"
//                   value="Search"
//                 />
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="my-24">
//         {
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//             {posts.map((post) => (
//               <PostsSingleCard
//                 key={post._id}
//                 post={post}
//                 // commnt={commnt}
//               />
//             ))}
//           </div>
//         }

//         {/* paigenation */}
//         <div className="flex justify-center mt-12">
//           <div class="flex">
//             <button
//               href="#"
//               class="px-4 py-2 mx-1 text-gray-500 capitalize bg-white rounded-md cursor-not-allowed dark:bg-gray-800 dark:text-gray-600"
//             >
//               <div class="flex items-center -mx-1">
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   class="w-6 h-6 mx-1 rtl:-scale-x-100"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                 >
//                   <path
//                     stroke-linecap="round"
//                     stroke-linejoin="round"
//                     stroke-width="2"
//                     d="M7 16l-4-4m0 0l4-4m-4 4h18"
//                   />
//                 </svg>

//                 <span class="mx-1">previous</span>
//               </div>
//             </button>

//             {pages.map(page => <button className=" px-4 py-2 mx-1 transition-colors duration-300 transform bg-white rounded-md dark:bg-gray-800 dark:text-gray-200 hover:bg-blue-500 dark:hover:bg-blue-500 hover:text-white dark:hover:text-gray-200" key={page}>{ page}</button>)}

//             <button
//               href="#"
//               class="px-4 py-2 mx-1 text-gray-700 transition-colors duration-300 transform bg-white rounded-md dark:bg-gray-800 dark:text-gray-200 hover:bg-blue-500 dark:hover:bg-blue-500 hover:text-white dark:hover:text-gray-200"
//             >
//               <div class="flex items-center -mx-1">
//                 <span class="mx-1">Next</span>

//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   class="w-6 h-6 mx-1 rtl:-scale-x-100"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                 >
//                   <path
//                     stroke-linecap="round"
//                     stroke-linejoin="round"
//                     stroke-width="2"
//                     d="M17 8l4 4m0 0l-4 4m4-4H3"
//                   />
//                 </svg>
//               </div>
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Banner;
import { useState } from "react";
import LoadingSpinner from "../../Shared/LoadingSpinner/LoadingSpinner";
import PostsSingleCard from "../../../AllSinglecard/PostsSingleCard";
import useServices from "../../../Hook/useServices";

const Banner = () => {
  const [itemPerPage, setItemPerPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState("");
  const { posts } = useServices(search);

  const handleSearch = (e) => {
    e.preventDefault();
    const searchText = e.target.search.value;
    setSearch(searchText);
    setCurrentPage(1); // Reset to first page on new search
  };

  // Pagination logic
  const totalPages = Math.ceil(posts.length / itemPerPage);

  const indexOfLastPost = currentPage * itemPerPage;
  const indexOfFirstPost = indexOfLastPost - itemPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  const pages = [...Array(totalPages).keys()].map((number) => number + 1);

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePageClick = (page) => {
    setCurrentPage(page);
  };


  

  return (
    <div>
      <div
        className="hero h-[460px]"
        style={{
          backgroundImage: "url(https://i.ibb.co/3NrRj6M/images.png)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
            <p className="mb-5">Search Your Favorite Author Post</p>
            <div>
              <form onSubmit={handleSearch}>
                <input
                  className="text-black p-3 rounded-l-lg"
                  type="text"
                  name="search"
                  id="search"
                />
                <input
                  className="p-3 rounded-r-lg bg-[#B58753]"
                  type="submit"
                  value="Search"
                />
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="my-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {currentPosts.map((post) => (
            <PostsSingleCard key={post._id} post={post} />
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center mt-12">
          <div className="flex">
            <button
              onClick={handlePreviousPage}
              disabled={currentPage === 1}
              className="px-4 py-2 mx-1 text-gray-500 capitalize bg-white rounded-md cursor-pointer dark:bg-gray-800 dark:text-gray-600"
            >
              <div className="flex items-center -mx-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 mx-1 rtl:-scale-x-100"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M7 16l-4-4m0 0l4-4m-4 4h18"
                  />
                </svg>
                <span className="mx-1">Previous</span>
              </div>
            </button>

            {pages.map((page) => (
              <button
                key={page}
                onClick={() => handlePageClick(page)}
                className={`px-4 py-2 mx-1 transition-colors duration-300 transform bg-white rounded-md dark:bg-gray-800 dark:text-gray-200 hover:bg-blue-500 dark:hover:bg-blue-500 hover:text-white ${
                  page === currentPage ? "bg-blue-500 text-white" : ""
                }`}
              >
                {page}
              </button>
            ))}

            <button
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
              className="px-4 py-2 mx-1 text-gray-700 transition-colors duration-300 transform bg-white rounded-md dark:bg-gray-800 dark:text-gray-200 hover:bg-blue-500 dark:hover:bg-blue-500 hover:text-white"
            >
              <div className="flex items-center -mx-1">
                <span className="mx-1">Next</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 mx-1 rtl:-scale-x-100"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
