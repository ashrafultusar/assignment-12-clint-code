import { useQuery } from "@tanstack/react-query";
import { axiosSecure } from "../../../Hook/useAxiosSecure";

const AllTag = () => {
  const { data: tags = [] } = useQuery({
    queryKey: ["tags"],
    queryFn: async () => {
      const { data } = await axiosSecure.get(`/tags`);
      return data;
    },
  });
  console.log(tags);

  return (
    <div>
      <h1 className="text-xl md:text-2xl font-bold text-center my-6">
        Recommended Tag
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
        {tags.map((tag) => (
          <div className="card bg-[#02251e] shadow-xl">
            <div className="card-body flex items-center text-white">
              <h2 className="card-title">{tag.tag}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllTag;
