// import { useEffect, useState } from "react";
// import { axiosSecure } from "./useAxiosSecure";
// import { axiosCommon } from "./useAxiosCommon";

// const useServices = ({ search }) => {
//   const [posts, setPosts] = useState([]);

//     useEffect(() => {
      

//         axiosCommon(`/posts?search=${search}`)
//      .then((res) => setPosts(res.data));
        
//   }, [search]);

//   return posts;
// };

// export default useServices;


import { useEffect, useState } from "react";
import axios from "axios";  // Assuming axios is installed and configured
import { axiosCommon } from "./useAxiosCommon";

const useServices = (search) => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axiosCommon(`/posts?search=${search}`)
      .then((res) => setPosts(res.data));
  }, [search]);
    console.log(posts);

  return { posts, loading };
};

export default useServices;
