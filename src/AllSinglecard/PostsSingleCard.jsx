import { Link } from "react-router-dom";

const PostsSingleCard = ({ post }) => {
  const {
    author_image,
    author_name,
    post_title,
    post_description,
    tag,
    post_time,_id
  } = post;

  return (
    <div>
      <Link to={`/postDetails/${_id}`}>
      <div className="max-w-2xl px-8 py-4 bg-white rounded-lg shadow-md dark:bg-gray-800">
        <div className="flex items-center justify-between">
          <span className="text-sm font-light text-gray-600 dark:text-gray-400">
            Post Time: {post_time}
          </span>
          <a
            className="px-3 py-1 text-sm font-bold text-gray-100 transition-colors duration-300 transform bg-gray-600 rounded cursor-pointer hover:bg-gray-500"
            role="button"
          >
            {tag}
          </a>
        </div>

        <div className="mt-2">
          <h1 className="text-xl font-bold text-gray-700 dark:text-white hover:text-gray-600 dark:hover:text-gray-200">
            {post_title}
          </h1>
          <p className="mt-2 text-gray-600 dark:text-gray-300">
            {post_description}
          </p>
        </div>

        <div className="flex items-center justify-between mt-4">
          <div className="flex gap-4">
            <h1>vote</h1>
            <h1>comment</h1>
          </div>

          <div className="flex items-center">
            <a
              className="font-bold text-gray-700 cursor-pointer dark:text-gray-200"
              role="link"
            >
              <div className="flex items-center">
                <img
                  className="hidden object-cover w-10 h-10 mx-4 rounded-full sm:block"
                  src={author_image}
                  alt=""
                />
                {author_name}
              </div>
            </a>
          </div>
        </div>
      </div></Link>
    </div>
  );
};

export default PostsSingleCard;
