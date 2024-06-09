// import { useQuery } from "@tanstack/react-query";
// import useAxiosSecure from "../../../Hook/useAxiosSecure";

import { useEffect, useState } from "react";
import PostsSingleCard from "../../../AllSinglecard/PostsSingleCard";

const AllPost = () => {
  //     const axiosSecure=useAxiosSecure()

  //     const {data}= useQuery({
  //         queryKey: ['/posts'],
  //         queryFn: async () => {
  //             const { data } = await axiosSecure.get('/posts')
  //             // console.log(data)
  //             return data
  //         }

  // })

  // console.log(data)

  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch("post.json")
      .then((res) => res.json())
      .then((data) => {
        setPosts(data);
      });
  });

  // console.log(posts);
  return (
    <div className="my-24">
          <h1>See Your </h1>
          

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              
      {posts.map((post) => (
        <PostsSingleCard key={post._id} post={post}></PostsSingleCard>
      ))}
</div>
    </div>
  );
};

export default AllPost;
