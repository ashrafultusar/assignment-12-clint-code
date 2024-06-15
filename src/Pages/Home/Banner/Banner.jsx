// import { useState } from "react";
// import useAxiosCommon from "../../../Hook/useAxiosCommon";
// import { useQuery } from "@tanstack/react-query";
// import LoadingSpinner from "../../Shared/LoadingSpinner/LoadingSpinner";
// import PostsSingleCard from "../../../AllSinglecard/PostsSingleCard";
// import useServices from "../../../Hook/useServices";


// const Banner = () => {


//   // const axiosCommon = useAxiosCommon();

//   // const { data: posts = [], isLoading } = useQuery({
//   //   queryKey: ["/posts"],
//   //   queryFn: async () => {
//   //     const { data } = await axiosCommon.get(`/posts?search=${search}`);
//   //     // console.log(data)
//   //     return data;
//   //   },
//   // });

//   // console.log(posts);

//   // search functionality
//   const [search, setSearch] = useState("");
// const posts=useServices(search)

 

//   const handelsearch = (e) => {
//     e.preventDefault();
//     const searchText = e.target.search.value;
//     console.log(searchText);
//     setSearch(searchText);
//   };



  

//   // if (isLoading) return <LoadingSpinner></LoadingSpinner>;
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
//               <form onSubmit={handelsearch}>
//                 <input
//                   className="text-black p-3 rounded-l-lg"
//                   type="text"
//                   name="search"
//                   id=""
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
//         <h1>All Post</h1>
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//         {posts.map((post) => (
//           <PostsSingleCard key={post._id} post={post}></PostsSingleCard>
//         ))}
//       </div>
//       </div>

//       <div className="">
// {}
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
  const [search, setSearch] = useState("");
  const { posts, loading } = useServices(search);

  const handleSearch = (e) => {
    e.preventDefault();
    const searchText = e.target.search.value;
    setSearch(searchText);
  };

  console.log(posts);
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
        <h1>All Posts</h1>
        {
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {posts.map((post) => (
            <PostsSingleCard key={post._id} post={post} />
          ))}
        </div>
       }
      </div>
    </div>
  );
};

export default Banner;


