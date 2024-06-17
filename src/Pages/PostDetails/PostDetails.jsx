import { useMutation, useQuery } from "@tanstack/react-query";
import { AiOutlineLike } from "react-icons/ai";
import { AiOutlineDislike } from "react-icons/ai";
import { FaShare } from "react-icons/fa";
import LoadingSpinner from "../Shared/LoadingSpinner/LoadingSpinner";
import { useParams } from "react-router-dom";
import useAxiosCommon from "../../Hook/useAxiosCommon";

import { FacebookShareButton } from "react-share";
import useAuth from "../../Hook/useAuth";
import { toast } from "react-toastify";
import { axiosSecure } from "../../Hook/useAxiosSecure";
import { useState } from "react";

const PostDetails = () => {
  const { id } = useParams();
  const axiosCommon = useAxiosCommon();
  const { user } = useAuth();

  const [cmt, setComments] = useState([]);
  const { mutateAsync } = useMutation({
    mutationFn: async (postData) => {
      const { data } = await axiosSecure.post("/comment", postData);
      return data;
    },

    onSuccess: (data) => {
      console.log("Data save successfully");
      toast.success("comment added successfully");
      setComments(data);
    },
  });
console.log(cmt);
  // comment section
  const handelComment = async (e) => {
    e.preventDefault();
    const form = e.target;
    const comment = form.comment.value;
    const postId = post._id;
    const postedPhoto = post.author_image;
    const postEmail = user?.email;

    // console.log(postInfo);
    try {
      const postData = { comment, postId, postedPhoto, postEmail };
      console.log(postData);
      await mutateAsync(postData);
      form.reset();
    } catch (err) {
      console.log(err.message);
      toast.error(err.message);
    }
  };

  console.log(cmt);

  // comment load
  const { data: commnt = {} } = useQuery({
    queryKey: ["/comments", id],
    queryFn: async () => {
      const { data } = await axiosCommon.get(`/comments`);
    
      return data;
    },
  });
  console.log(commnt)
 

  // post data load
  const { data: post = {}, isLoading } = useQuery({
    queryKey: ["/post", id],
    queryFn: async () => {
      const { data } = await axiosCommon.get(`/post/${id}`);
      // console.log(data)
      return data;
    },
  });

  

  if (isLoading) return <LoadingSpinner></LoadingSpinner>;

  const {
    author_image,
    author_name,
    post_description,
    post_time,
    post_title,
    tag,
    _id,
  } = post;
  console.log(_id);
  const date = new Date(post_time);

  // Extracting hours, minutes, and seconds
  const hours = date.getUTCHours().toString().padStart(2, "0");
  const minutes = date.getUTCMinutes().toString().padStart(2, "0");
  const seconds = date.getUTCSeconds().toString().padStart(2, "0");

  // Formatting time as HH:MM:SS
  const timeString = `${hours}:${minutes}:${seconds}`;

  const shareUrl = "https://www.pakkamarwadi.tk/";

  return (
    <div className="my-14">
      <div className="max-w-2xl mx-auto overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800">
        <img className="object-cover w-full " src={author_image} alt="" />

        <div className="p-6">
          <div>
            <a
              className="px-3 py-1 text-sm font-bold text-gray-100 transition-colors duration-300 transform bg-gray-600 rounded cursor-pointer hover:bg-gray-500"
              role="button"
            >
              {tag}
            </a>
            <h1 className="block mt-2 text-xl font-semibold text-gray-800 transition-colors duration-300 transform dark:text-white hover:text-gray-600 ">
              <span className="text-xl font-bold">Title: </span> {post_title}
            </h1>

            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
              <span className="text-xl font-bold">Description: </span>{" "}
              {post_description}
            </p>
          </div>

          <div className="mt-4">
            <div className="flex items-center">
              <div className="flex items-center">
                <img className="object-cover h-10 rounded-full" src="" alt="" />
                <h1 className="mx-2 font-semibold text-gray-700 dark:text-gray-200">
                  {author_name}
                </h1>
              </div>
              <span className="mx-1 text-xs text-gray-600 dark:text-gray-300">
                <span className="text-[16px] font-bold">Post Time: </span>{" "}
                {timeString}
              </span>
            </div>
          </div>
          <div className="divider"></div>
          <div
            className="flex
           gap-10 mt-2"
          >
            <button className="bg-[#1877F2] rounded-lg hover:bg-[#1877F2]/80 duration-300 transition-colors border border-transparent px-8 py-2.5">
              <AiOutlineLike className="text-white text-xl" />
            </button>
            <button className="bg-[#1877F2] rounded-lg hover:bg-[#1877F2]/80 duration-300 transition-colors border border-transparent px-8 py-2.5">
              <AiOutlineDislike className="text-white text-xl" />
            </button>

            {/* share button */}

            <FacebookShareButton
              url={shareUrl}
              quote={"Please write the title"}
            >
              <button className="bg-[#1877F2] rounded-lg hover:bg-[#1877F2]/80 duration-300 transition-colors border border-transparent px-4 py-2.5 flex items-center gap-2 text-white">
                <FaShare className="text-white text-xl" />
                Share
              </button>
            </FacebookShareButton>
          </div>
        </div>
      </div>
      <div className="max-w-2xl mx-auto mt-2 flex items-center">
        <div className="avatar">
          <div className="w-10 rounded-full ">
            <img src={author_image} />
          </div>
        </div>
        <form onSubmit={handelComment} className="flex">
          <input
            type="text"
            name="comment"
            placeholder="Add a comment..."
            className="input input-bordered w-full max-w-xs"
          />
          <button
            type="submit"
            className="bg-[#1877F2] rounded-lg hover:bg-[#1877F2]/80 duration-300 transition-colors border border-transparent px-4 py-2.5 flex items-center gap-2 text-white"
          >
            Comment
          </button>
        </form>
      </div>

      {/* show all comment  */}

      <div className="grid grid-cols-1 md:grid-cols-2">
        {commnt.map((comment) => (
          <div
            key={comment._id}
            className="w-full max-w-md px-8 py-4 mt-16 bg-white rounded-lg shadow-lg dark:bg-gray-800"
          >
            <div className="flex justify-center items-center gap-4 -mt-16 md:justify-end">
              <h1 className="text-lg font-medium text-blue-600 dark:text-blue-300">
                {user?.displayName}
              </h1>
              <img
                className="object-cover w-20 h-20 border-2 border-blue-500 rounded-full dark:border-blue-400"
                src={comment.postedPhoto}
                alt=""
              />
            </div>

            <p className="mt-2 text-sm text-gray-600 dark:text-gray-200">
              {comment.comment}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PostDetails;
