
import useAxiosSecure from "../../../Hook/useAxiosSecure";
import { useMutation, useQuery } from "@tanstack/react-query";
import { toast } from 'react-toastify'; // Add toast notifications

const Activities = () => {
  const axiosSecure = useAxiosSecure();

  const { data: reports = [], refetch: refetchReports } = useQuery({
    queryKey: ["/reports"],
    queryFn: async () => {
      const { data } = await axiosSecure.get("/reports");
      return data;
    },
  });
  console.log(reports);
  
  const { data: comments = [], refetch: refetchComments } = useQuery({
    queryKey: ["/allcoment"],
    queryFn: async () => {
      const { data } = await axiosSecure.get("/allcoment");
      return data;
    },
  });

  const { mutateAsync } = useMutation({
    mutationFn: async (id) => {
      const { data } = await axiosSecure.delete(`/comment/${id}`);
      return data;
    },
    onSuccess: (data) => {
      console.log(data);
      refetchReports();
      refetchComments();
      toast.success("Successfully deleted your reported comment.");
    },
  });

  // Handle Delete
  const handeldelete = async (id) => {
    console.log(id);
    try {
      await mutateAsync(id);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <thead>
        <tr>
          <th
            scope="col"
            className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
          >
            Image
          </th>
          <th
            scope="col"
            className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
          >
            Comment
          </th>
          <th
            scope="col"
            className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
          >
            Report
          </th>
          <th
            scope="col"
            className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
          >
            Delete
          </th>
        </tr>
      </thead>

      {reports.map((report) => (
        <tr key={report.id} report={report}>
          <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <div className="block relative">
                  <img
                    alt="profile"
                    src={report?.photo}
                    className="mx-auto object-cover rounded h-10 w-15 "
                  />
                </div>
              </div>
            </div>
          </td>
          <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
            <p className="text-gray-900 whitespace-no-wrap">
              {report?.postComment}
            </p>
          </td>
          <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
            <p className="text-gray-900 whitespace-no-wrap">{report?.select}</p>
          </td>
          <td>
            <button
              onClick={() => handeldelete(report.commentId)}
              className="bg-red-500 px-2 py-1 rounded-full ml-2"
            >
              Delete
            </button>
          </td>
        </tr>
      ))}
    </div>
  );
};

export default Activities;
