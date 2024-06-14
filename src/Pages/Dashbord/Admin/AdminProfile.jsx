import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../Hook/useAuth";
import useAxiosSecure from "../../../Hook/useAxiosSecure";




const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];


// coustom shape for the pie chart
const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

// const PieChartData = chartdata.map(data => {
  
// })


const AdminProfile = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const { data: stats } = useQuery({
    queryKey: ["admin-stats"],
    queryFn: async () => {
      const res = await axiosSecure("/admin-stats");
      return res.data;
    },
  });

  console.log(stats);


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

      <div className="stats stats-vertical lg:stats-horizontal shadow">
        <div className="stat">
          <div className="stat-title">Total Posts</div>
          <div className="stat-value">{stats?.posts}</div>
        </div>

        <div className="stat">
          <div className="stat-title">Total Comment</div>
          <div className="stat-value">4,200</div>
        </div>

        <div className="stat">
          <div className="stat-title">Total Users</div>
          <div className="stat-value">{stats?.users}</div>
        </div>
      </div>

{/* chart */}

<PieChart width={400} height={400}>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
        </PieChart>
    </div>
  );
};

export default AdminProfile;
