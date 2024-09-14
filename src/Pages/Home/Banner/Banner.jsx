import { useState } from "react";
import LoadingSpinner from "../../Shared/LoadingSpinner/LoadingSpinner";
import PostsSingleCard from "../../../AllSinglecard/PostsSingleCard";
import useServices from "../../../Hook/useServices";



const Banner = () => {
  const [itemPerPage, setItemPerPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState("");
  const { posts } = useServices(search);

  // search function
  const handleSearch = (e) => {
    e.preventDefault();
    const searchText = e.target.search.value;
    setSearch(searchText);
    setCurrentPage(1); // Reset to first page on new search
  };

  // search reset function
  const handelReset = () => {
    setSearch("");
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
    <div className="pt-12">
      {/* <div className="hero   h-[760px]">
  <iframe 
    src="https://my.spline.design/roomrelaxingcopy-27ed8f0ca564bc0f3e1f39809397ff6a/" 
    frameBorder="0"
    width="100%"
    height="100%"
    className="w-full h-full"
  ></iframe>
  <div className="hero-overlay bg-opacity-40"></div>
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
</div> */}

      {/* banner section */}
      <section
        className="relative bg-blue-900 text-white h-[850px] flex items-center justify-center"
        style={{
          backgroundImage:
            "url('https://i.ibb.co/m0WDT9D/pexels-cottonbro-4065145.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-opacity-30 bg-black"></div>
        <div className="relative  text-center">
          <h1 className="text-5xl font-bold mb-4">
            Superior Data Management Available for All
          </h1>
          <p className="text-xl mb-8">
            A new way to approach customer-driven data.
          </p>
          <a
            href="#"
            className="bg-blue-600 px-8 py-3 text-lg rounded-lg hover:bg-blue-500 transition"
          >
            Get Started
          </a>
        </div>
      </section>

      


    
  {/* <div class="relative bg-white text-black p-8 rounded-xl shadow-lg w-96 transform hover:scale-105 transition-all duration-300">
     <img className="rounded-t-xl" src="https://i.ibb.co.com/m0WDT9D/pexels-cottonbro-4065145.jpg" alt="" />
      <h2 class="text-xl font-bold mt-4">Perfect IT Solution For Your Business</h2>
      <p class="mt-2">Engage with the latest IT innovations for business solutions.</p>
    </div> */}
      
    
    

      {/* ------------------------- */}

      {/* <section class="relative bg-blue-900 text-white py-16 px-8">
 
  <div class="relative flex flex-wrap justify-center space-x-4 space-y-4">
  
    <div class="relative bg-white text-black p-8 rounded-xl shadow-lg w-96 transform hover:scale-105 transition-all duration-300">
     <img className="rounded-t-xl" src="https://i.ibb.co.com/m0WDT9D/pexels-cottonbro-4065145.jpg" alt="" />
      <h2 class="text-xl font-bold mt-4">Perfect IT Solution For Your Business</h2>
      <p class="mt-2">Engage with the latest IT innovations for business solutions.</p>
    </div>

  
    <div class="absolute top-10 left-32 bg-white text-black p-8 rounded-xl shadow-lg w-96 transform hover:scale-105 transition-all duration-300">
    <img className="rounded-t-xl" src="https://i.ibb.co.com/m0WDT9D/pexels-cottonbro-4065145.jpg" alt="" />
      <h2 class="text-xl font-bold mt-4">Providing Technology For Smart IT Solutions</h2>
      <p class="mt-2">Innovative and smart solutions for IT-based businesses.</p>
    </div>


    <div class="absolute top-40 left-64 bg-white text-black p-8 rounded-xl shadow-lg w-96 transform hover:scale-105 transition-all duration-300">
    <img className="rounded-t-xl" src="https://i.ibb.co.com/m0WDT9D/pexels-cottonbro-4065145.jpg" alt="" />
      <h2 class="text-xl font-bold mt-4">Superior Data Management Available for All</h2>
      <p class="mt-2">A new approach to data-driven decision-making.</p>
    </div>

    
    <div class="relative bg-white text-black p-8 rounded-xl shadow-lg w-96 transform hover:scale-105 transition-all duration-300">
    <img className="rounded-t-xl" src="https://i.ibb.co.com/m0WDT9D/pexels-cottonbro-4065145.jpg" alt="" />
      <h2 class="text-xl font-bold mt-4">Perfect IT Solution For Your Business</h2>
      <p class="mt-2">Monetize cloud systems and data management for better scalability.</p>
    </div>
  </div>
</section> */}

      {/*  */}
      <div
        data-aos="fade-down"
        data-aos-anchor-placement="top-bottom"
        data-aos-duration="1500"
        className=" text-center mt-24 container mx-auto"
      >
        <form onSubmit={handleSearch}>
          <input
            name="search"
            type="text"
            placeholder="search.."
            className="input input-bordered w-full max-w-xs"
          />
          <input type="submit" value="Search" className="bg-green-500 btn" />
          <button onClick={handelReset} className="btn bg-green-500 lg:ml-24">
            Reset
          </button>
        </form>
        <div className="divider mb-12"></div>
      </div>
      <div className="my-24 max-w-screen-xl mx-auto">
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
