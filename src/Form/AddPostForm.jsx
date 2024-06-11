// import { TbFidgetSpinner } from "react-icons/tb";
// import useAuth from "../Hook/useAuth";

import { useQuery } from "@tanstack/react-query";
import useAuth from "../Hook/useAuth";
import useAxiosSecure from "../Hook/useAxiosSecure";
import { Link } from "react-router-dom";

const AddPostForm = ({ handelSubmit }) => {
  const { user } = useAuth();

  const axiosSecure = useAxiosSecure();
  //   Fetch post Data
  const { data: post = [] } = useQuery({
    queryKey: ["mypost", user?.email],
    queryFn: async () => {
      const { data } = await axiosSecure.get(`/mypost/${user.email}`);

      return data;
    },
  });

  console.log(post);

  return (
    <div>
      <div className="w-full min-h-[calc(100vh-40px)] flex flex-col justify-center items-center text-gray-800 rounded-xl bg-gray-50">
        <form onSubmit={handelSubmit}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div className="space-y-6">
              {/* <div className="space-y-1 text-sm">
                <label htmlFor="location" className="block text-gray-600">
                  Location
                </label>
                <input
                  className="w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md "
                  name="location"
                  id="location"
                  type="text"
                  placeholder="Location"
                  required
                />
              </div> */}

              <div className="space-y-1 text-sm">
                <label htmlFor="category" className="block text-gray-600">
                  Tag
                </label>
                <select
                  required
                  className="w-full px-4 py-3 border-rose-300 focus:outline-rose-500 rounded-md"
                  name="tag"
                >
                  <option>Java</option>
                  <option>CSS</option>
                  <option>Database</option>
                  <option>JavaScript</option>
                  <option>Python</option>
                </select>
              </div>
            </div>
            <div className="space-y-6">
              <div className="space-y-1 text-sm">
                <label htmlFor="title" className="block text-gray-600">
                  Post Title
                </label>
                <input
                  className="w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md "
                  name="title"
                  id="title"
                  type="text"
                  placeholder="Title"
                  required
                />
              </div>
              {/* image */}
              <div className=" p-4 bg-white w-full  m-auto rounded-lg flex justify-between items-center">
                <div className="file_upload px-5 py-3 relative border-4 border-dotted border-gray-300 rounded-lg">
                  <div className="flex flex-col w-max mx-auto text-center">
                    <label>
                      <input
                        className="text-sm cursor-pointer w-36 hidden"
                        type="file"
                        name="image"
                        id="image"
                        accept="image/*"
                        hidden
                      />
                      <div className="bg-rose-500 text-white border border-gray-300 rounded font-semibold cursor-pointer p-1 px-3 hover:bg-rose-500">
                        {/* {imageText} */}
                        Upload You Image
                      </div>
                    </label>
                  </div>
                </div>
                <div className="h-16 w-16 object-cover overflow-hidden flex items-center"></div>
              </div>
              {/*  author name */}
              <div className="flex justify-between gap-2">
                <div className="space-y-1 text-sm">
                  <label htmlFor="price" className="block text-gray-600">
                    Author Name
                  </label>
                  <input
                    className="w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md "
                    name="name"
                    id="text"
                    type="text"
                    placeholder={user?.displayName}
                  />
                </div>
                {/* author emali */}
                <div className="space-y-1 text-sm">
                  <label htmlFor="guest" className="block text-gray-600">
                    Author Email
                  </label>
                  <input
                    className="w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md "
                    name="email"
                    id="guest"
                    type="email"
                    placeholder={user?.email}
                  />
                </div>
              </div>

              {/* <div className="flex justify-between gap-2">
                <div className="space-y-1 text-sm">
                  <label htmlFor="bedrooms" className="block text-gray-600">
                    author Email
                  </label>
                  <input
                    className="w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md "
                    name="email"
                    id="bedrooms"
                    type="text"
                    placeholder="Bedrooms"
                    required
                  />
                </div>

                <div className="space-y-1 text-sm">
                  <label htmlFor="bathrooms" className="block text-gray-600">
                    Bathrooms
                  </label>
                  <input
                    className="w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md "
                    name="bathrooms"
                    id="bathrooms"
                    type="number"
                    placeholder="Bathrooms"
                    required
                  />
                </div>
              </div> */}

              <div className="space-y-1 text-sm">
                <label htmlFor="description" className="block text-gray-600">
                  Post Description
                </label>

                <textarea
                  id="description"
                  className="block rounded-md focus:rose-300 w-full h-32 px-4 py-3 text-gray-800  border border-rose-300 focus:outline-rose-500 "
                  name="description"
                ></textarea>
              </div>
            </div>
          </div>

          {post.length < 5 ? <button
            type="submit"
            className="w-full p-3 mt-5 text-center font-medium text-white transition duration-200 rounded shadow-md bg-rose-500"
          >
            Submit To continue
          </button>
            :
        <Link to={'/membership'}><button
        type="submit"
        className="w-full p-3 mt-5 text-center font-medium text-white transition duration-200 rounded shadow-md bg-rose-500"
      >
       Become a Member
      </button></Link>
          
        }
          
         
        </form>
      </div>
    </div>
  );
};

export default AddPostForm;
