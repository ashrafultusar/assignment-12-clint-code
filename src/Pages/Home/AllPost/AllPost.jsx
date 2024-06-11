import { useQuery } from "@tanstack/react-query";
// import { useEffect, useState } from "react";
import PostsSingleCard from "../../../AllSinglecard/PostsSingleCard";
import LoadingSpinner from "../../Shared/LoadingSpinner/LoadingSpinner";
import useAxiosCommon from "../../../Hook/useAxiosCommon";

const AllPost = () => {
  
  const axiosCommon = useAxiosCommon();

  const { data: posts = [] ,isLoading} = useQuery({
    queryKey: ["/posts"],
    queryFn: async () => {
      const { data } = await axiosCommon.get("/posts");
      // console.log(data)
      return data;
    },
  });

  console.log(posts);

  if (isLoading) return <LoadingSpinner></LoadingSpinner>
  

  // const [posts, setPosts] = useState([]);
  // useEffect(() => {
  //   fetch("post.json")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setPosts(data);
  //     });
  // });

  // console.log(posts);
  return (
    <div className="my-24">
      

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {posts.map((post) => (
          <PostsSingleCard key={post._id} post={post}></PostsSingleCard>
        ))}
      </div>
    </div>
  );
};

export default AllPost;
