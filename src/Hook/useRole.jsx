import { useState } from "react";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";
import { useQueries, useQuery } from "@tanstack/react-query";

const useRole = () => {

    const { user,loading } = useAuth()
    const axiosSecure=useAxiosSecure()
    // const [role,setRole]=useState()


    const { data:role, isLoading } = useQuery({
        queryKey: ['role',user?.email],
        enabled: !loading&& !!user?.email,
        queryFn: async () => {
            const { data } = await axiosSecure(`/user/${user?.email}`)
            return data.role
        }
    })
    // fetch user before using email


    return [role, isLoading]
};

export default useRole;