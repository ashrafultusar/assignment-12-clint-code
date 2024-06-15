import { Helmet } from "react-helmet-async";
import useAxiosSecure from "../../../Hook/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import LoadingSpinner from "../../Shared/LoadingSpinner/LoadingSpinner";
import UserDataRow from "../../../Component/UserDataRow/UserDataRow";


const ManageUser = () => {

  const axiosSecure = useAxiosSecure()
  
  
    //   Fetch users Data
    const {
      data: users = [],
      isLoading,
      refetch,
    } = useQuery({
      queryKey: ['users'],
      queryFn: async () => {
        const { data } = await axiosSecure(`/users`)
        return data
      },
    })
  
  console.log(users)


 
  
    if (isLoading) return <LoadingSpinner></LoadingSpinner>

    return (
        <div>
             <div className='container mx-auto px-4 sm:px-8'>
        <Helmet>
          <title>Manage Users</title>
        </Helmet>
        <div className='py-8'>
          <div className='-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto'>
            <div className='inline-block min-w-full shadow rounded-lg overflow-hidden'>
              <table className='min-w-full leading-normal'>
               
                <tbody>
                  {users.map(user => <UserDataRow key={user._id} refetch={refetch} user={user}></UserDataRow>)}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
        </div>
    );
};

export default ManageUser;