import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { axiosCommon } from '../../../Hook/useAxiosCommon';
import { useParams } from 'react-router-dom';
import AllCommentSingleTable from './AllCommentSingleTable';
import Sidebar from '../../../Component/Dashbord/Sidebar';

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
      <div >
        {/* <Sidebar></Sidebar> */}
        {/* {
          comments.map(comnt=><AllCommentSingleTable comnt={comnt} key={comnt._id}></AllCommentSingleTable>)
            } */}
         {comments && comments.length > 0 ? (
        comments.map(comnt => (
          <AllCommentSingleTable comnt={comnt} key={comnt._id} />
        ))
      ) : (
        <p className='container mx-auto mt-96 text-center text-2xl font-bold text-red-400'>No comment On this post</p>
      )}

        </div>
    );
};

export default AllComent;