import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hook/useAxiosSecure";
import LoadingSpinner from "../Shared/LoadingSpinner/LoadingSpinner";
import { useParams } from "react-router-dom";
import useAxiosCommon from "../../Hook/useAxiosCommon";

const PostDetails = () => {
  const { id } = useParams();
  const axiosCommon = useAxiosCommon();

  const { data: post = {}, isLoading } = useQuery({
    queryKey: ["/post", id],
    queryFn: async () => {
      const { data } = await axiosCommon.get(`/post/${id}`);
      // console.log(data)
      return data;
    },
  });

  if (isLoading) return <LoadingSpinner></LoadingSpinner>;
  console.log(post);

  const {
    author_image,
    author_name,
    post_description,
    post_time,
    post_title,
    tag,
  } = post;

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
              {post_title}
            </h1>

            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
              {post_description}
            </p>
          </div>

          <div className="mt-4">
            <div className="flex items-center">
              <div className="flex items-center">
                <img className="object-cover h-10 rounded-full" src="" alt="" />
                              <h1 className="mx-2 font-semibold text-gray-700 dark:text-gray-200">{ author_name}</h1>
              </div>
              <span className="mx-1 text-xs text-gray-600 dark:text-gray-300">
               {post_time}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostDetails;
