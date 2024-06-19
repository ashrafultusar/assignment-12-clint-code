import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { axiosCommon } from '../../../Hook/useAxiosCommon';
import { useParams } from 'react-router-dom';

const AllComent = () => {
    // const { _id } = useParams();
    // const { data: commnt = [] } = useQuery({
    //     queryKey: ["/comments", _id],
    //     queryFn: async () => {
    //       const { data } = await axiosCommon.get(`/comments`, {
    //         params: { postId: id },
    //       });
    //       return data;
    //     },
    //   });

    // console.log(commnt);
    const { postId } = useParams();

    const { data: comments = [], isLoading, error } = useQuery({
      queryKey: ["/comments", postId],
      queryFn: async () => {
        const { data } = await axiosCommon.get(`/comments`, {
          params: { postId },
        });
        return data;
      },
    });

console.log(comments);

    return (
        <div>
            <h1>all comment</h1>
        </div>
    );
};

export default AllComent;