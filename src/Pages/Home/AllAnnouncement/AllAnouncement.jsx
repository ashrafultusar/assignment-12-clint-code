import { useQuery } from "@tanstack/react-query";
import useAxiosCommon from "../../../Hook/useAxiosCommon";
import LoadingSpinner from "../../Shared/LoadingSpinner/LoadingSpinner";

const AllAnouncement = () => {
  const axiosCommon = useAxiosCommon();

  const { data: posts = [], isLoading } = useQuery({
    queryKey: ["/announcements"],
    queryFn: async () => {
      const { data } = await axiosCommon.get("/announcements");
      // console.log(data)
      return data;
    },
  });

  console.log(posts, posts.length);

  if (isLoading) return <LoadingSpinner></LoadingSpinner>;

  return (
    <div className="my-10">
      {/* {posts.map((p) => (
                <div key={p._id} className="w-full  px-8 py-4 mt-16 bg-white rounded-lg shadow-lg dark:bg-gray-800">
                <div className="flex justify-center -mt-16 md:justify-end">
                  <img
                    className="object-cover w-16 h-16 border-2 border-blue-500 rounded-full dark:border-blue-400"
                    src={p.author_image}
                    alt=""
                  />
                </div>
        
                <h2 className="mt-2 text-xl font-semibold text-gray-800 dark:text-white md:mt-0">
                  {p.title}
                </h2>
        
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-200">
                 {p.description}
                </p>
        
                <div className="flex justify-end mt-4">
                  <a
                    href="#"
                    className="text-lg font-medium text-blue-600 dark:text-blue-300"
                    role="link"
                  >
                    {p.name}
                  </a>
                </div>
              </div>
                
              ))} */}
      {posts.length > 0 && (
        <div id="announcement-section" >
          <h2 className="text-xl md:text-3xl font-bold text-center mb-4">Announcements</h2>
          <ul id="announcement-list" className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {posts.map((p) => (
              <div
                key={p._id}
                className="w-full  px-8 py-4 mt-16 bg-white rounded-lg shadow-lg dark:bg-gray-800 "
              >
                <div className="flex justify-center -mt-16 md:justify-end">
                  <img
                    className="object-cover w-16 h-16 border-2 border-blue-500 rounded-full dark:border-blue-400"
                    src={p.author_image}
                    alt=""
                  />
                </div>

                <h2 className="mt-2 text-xl font-semibold text-gray-800 dark:text-white md:mt-0">
                  {p.title}
                </h2>

                <p className="mt-2 text-sm text-gray-600 dark:text-gray-200">
                  {p.description}
                </p>

                <div className="flex justify-end mt-4">
                  <a
                    href="#"
                    className="text-lg font-medium text-blue-600 dark:text-blue-300"
                    role="link"
                  >
                    {p.name}
                  </a>
                </div>
              </div>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default AllAnouncement;
