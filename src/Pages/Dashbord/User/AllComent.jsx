import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { axiosCommon } from '../../../Hook/useAxiosCommon';
import { useParams } from 'react-router-dom';
import AllCommentSingleTable from './AllCommentSingleTable';

const AllComent = () => {
    
  


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
        {
          comments.map(comnt=><AllCommentSingleTable comnt={comnt} key={comnt.id}></AllCommentSingleTable>)
            }
        </div>
    );
};

export default AllComent;