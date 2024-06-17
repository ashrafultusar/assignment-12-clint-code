import { useMutation, useQuery } from "@tanstack/react-query";
import useAuth from "../../../Hook/useAuth";
import useAxiosSecure from "../../../Hook/useAxiosSecure";
import { Cell, Pie, PieChart, Tooltip } from "recharts";
import { toast } from "react-toastify";

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

// Custom shape for the pie chart
const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

const AdminProfile = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const { data: stats = {} } = useQuery({
    queryKey: ["admin-stats"],
    queryFn: async () => {
      const res = await axiosSecure("/admin-stats");
      return res.data;
    },
  });

  // console.log(stats);

  const PieChartData = [
    { name: "Users", value: stats.users },
    { name: "Posts", value: stats.posts },
    { name: "Comments", value: stats.comment },
  ];

  // handel tag add
  const { mutateAsync } = useMutation({
    mutationFn: async (postData) => {
      const { data } = await axiosSecure.post("/tag", postData);
      return data;
    },

    onSuccess: () => {
      console.log("Data save successfully");
      toast.success("Post added successfully");
    },
  });

  const handelTags = async (e) => {
    e.preventDefault();
    const form = e.target;
    const tag = form.tag.value;

    try {
      const postData = {
        tag,
      };
      console.log(postData);
      await mutateAsync(postData);
      form.reset()
    } catch (err) {
      console.log(err.message);
      toast.error(err.message);
    }
  };

  return (
    <div>
      <h2 className="text-3xl text-red-500 font-bold">
        <span>Hi, Welcome </span>
        {user?.displayName}
      </h2>
      <div className="my-6">
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
      {/* data count stastic */}
      
 
      <div className="stats stats-vertical lg:stats-horizontal shadow">
        <div className="stat">
          <div className="stat-title">Total Posts</div>
          <div className="stat-value">{stats?.posts}</div>
        </div>

        <div className="stat">
          <div className="stat-title">Total Comments</div>
          <div className="stat-value">{stats?.comment}</div>
        </div>

        <div className="stat">
          <div className="stat-title">Total Users</div>
          <div className="stat-value">{stats?.users}</div>
        </div>
      </div>
        
         {/* chart */}
      <PieChart width={400} height={400}>
        <Pie
          data={PieChartData}
          cx="50%"
          cy="50%"
          labelLine={false}
          label={renderCustomizedLabel}
          outerRadius={80}
          fill="#8884d8"
          dataKey="value"
        >
          {PieChartData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip></Tooltip>
      </PieChart>


      {/* add
 tags */}

      <div>
        <form onSubmit={handelTags} className="flex">
          <input
            type="text"
            name="tag"
            placeholder="Add a tag..."
            className="input input-bordered w-full max-w-xs"
          />
          <button
            type="submit"
            className="bg-[#1877F2] rounded-lg hover:bg-[#1877F2]/80 duration-300 transition-colors border border-transparent px-4 py-2.5 flex items-center gap-2 text-white"
          >
            Add Tag
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminProfile;
