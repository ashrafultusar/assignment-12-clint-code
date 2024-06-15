import LoadingSpinner from "../../Shared/LoadingSpinner/LoadingSpinner";
import { Helmet } from "react-helmet-async";
import useAuth from "../../../Hook/useAuth";
import useRole from "../../../Hook/useRole";
import useAxiosSecure from "../../../Hook/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import PostsSingleCard from "../../../AllSinglecard/PostsSingleCard";
import { SlBadge } from "react-icons/sl";

const MyProfile = () => {
  const { user, loading } = useAuth() || {};
  const [role, isLoading] = useRole();

  //user info
  const { data: users = {} } = useQuery({
    queryKey: ["users", user?.email],
    enabled: !!user?.email,
    queryFn: async () => {
      const { data } = await axiosSecure(`/user/${user?.email}`);
      return data;
    },
  });
  console.log(users.badges);

  // user recent post data
  const axiosSecure = useAxiosSecure();
  //   Fetch post Data
  const { data: post = [] } = useQuery({
    queryKey: ["mypost", user?.email],
    queryFn: async () => {
      const { data } = await axiosSecure.get(`/mypost/${user.email}`);

      return data;
    },
  });

  // console.log(post);

  if (isLoading || loading) return <LoadingSpinner></LoadingSpinner>;

  return (
    <div>
      <div className="flex justify-center items-center h-screen">
        <Helmet>
          <title>Profile</title>
        </Helmet>
        <div className="bg-white shadow-lg rounded-2xl w-3/5">
          <img
            alt="profile"
            src="https://wallpapercave.com/wp/wp10784415.jpg"
            className="w-full mb-4 rounded-t-lg h-36"
          />
          <div className="flex flex-col items-center justify-center p-4 -mt-16">
            <a href="#" className="relative block">
              <img
                alt="profile"
                src={user?.photoURL}
                className="mx-auto object-cover rounded-full h-24 w-24  border-2 border-white "
              />
            </a>

            <p className="p-2 uppercase px-4 text-xs text-white bg-black rounded-full">
              {role}
            </p>
            <p className="p-2 uppercase px-4 text-xs   bg-[#ff7473] rounded-full text-black mt-2"><span className="font-bold">Membership: </span>
             <span > {users.badges==="Gold"? "Gold":"Bronze"}</span>
            </p>
           

            <p className="mt-2 text-xl font-medium text-gray-800 "></p>
            <div className="w-full p-2 mt-4 rounded-lg">
              <div className="flex flex-wrap items-center justify-between text-sm text-gray-600 ">
                <p className="flex flex-col">
                  Name
                  <span className="font-bold text-black ">
                    {user?.displayName}
                  </span>
                </p>
                <p className="flex flex-col">
                  Email
                  <span className="font-bold text-black ">{user?.email}</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* recent post */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {post.slice(0, 3).map((post) => (
          <PostsSingleCard key={post._id} post={post}></PostsSingleCard>
        ))}
      </div>
    </div>
  );
};

export default MyProfile;
