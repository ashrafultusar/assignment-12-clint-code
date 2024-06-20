// // import { useMutation } from "@tanstack/react-query";
// // import { axiosSecure } from "../../../Hook/useAxiosSecure";
// // import { toast } from "react-toastify";

// // const AllCommentSingleTable = ({ comnt }) => {
// //   const { comment, postedPhoto, postEmail } = comnt;

// //   // console.log(comment);
// //   const { mutateAsync } = useMutation({
// //     mutationFn: async (postData) => {
// //       const { data } = await axiosSecure.post("/report", postData);
// //       return data;
// //     },

// //     onSuccess: () => {
// //       console.log("Data save successfully");
// //       toast.success("report added successfully");
// //     },
// //   });


// //   const handelreport = async e => {
// //     e.preventDefault();
// //     const form = e.target;
// //     const select = form.report.value;
// //     // console.log(select);

// //     try {
// //       const postData = {
// //         select,
// //       };
// //       console.log(postData);
// //       await mutateAsync(postData);
// //       form.reset();
// //     } catch (err) {
// //       console.log(err.message);
// //       toast.error(err.message);
// //     }


// // }



// //   return (
// //     <div className="">
// //       <tr>
// //         <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
// //           <div className="flex items-center">
// //             <div className="flex-shrink-0">
// //               <div className="block relative">
// //                 <img
// //                   alt="profile"
// //                   src={postedPhoto}
// //                   className="mx-auto object-cover rounded h-10 w-15 "
// //                 />
// //               </div>
// //             </div>
// //           </div>
// //         </td>
// //         <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
// //           <p className="text-gray-900 whitespace-no-wrap">{comment}</p>
// //         </td>
// //         <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
// //           <p className="text-gray-900 whitespace-no-wrap">{postEmail}</p>
// //         </td>
       
// //         <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm ">
// //           <form onSubmit={handelreport} className="flex items-center justify-center gap-12">
// //           <select name="report" className="select select-secondary w-full max-w-xs">
// //             <option>Offensive</option>
// //             <option>Spam</option>
// //             <option>Misleading or scam</option>
// //           </select>

// //             <input type="submit" value='Report' className="relative cursor-pointer inline-block px-3 py-1 font-semibold text-black bg-red-200  rounded-full" />

          
// //           </form>
        
// //         </td>
// //       </tr>
// //     </div>
// //   );
// // };

// // export default AllCommentSingleTable;

// import { useState } from "react";
// import { useMutation } from "@tanstack/react-query";
// import { axiosSecure } from "../../../Hook/useAxiosSecure";
// import { toast } from "react-toastify";

// const AllCommentSingleTable = ({ comnt }) => {
//   const { comment, postedPhoto, postEmail } = comnt;
//   const [isButtonDisabled, setIsButtonDisabled] = useState(true);

//   const { mutateAsync } = useMutation({
//     mutationFn: async (postData) => {
//       const { data } = await axiosSecure.post("/report", postData);
//       return data;
//     },
//     onSuccess: () => {
//       console.log("Data save successfully");
//       toast.success("report added successfully");
//     },
//   });

//   const handelreport = async (e) => {
//     e.preventDefault();
//     const form = e.target;
//     const select = form.report.value;
//     try {
//       const postData = { select };
//       console.log(postData);
//       await mutateAsync(postData);
//       setIsButtonDisabled(true);  // Disable button after submit
//       form.reset();
//     } catch (err) {
//       console.log(err.message);
//       toast.error(err.message);
//     }
//   };

//   const handleSelectChange = (e) => {
//     const value = e.target.value;
//     if (value) {
//       setIsButtonDisabled(false);
//     } else {
//       setIsButtonDisabled(true);
//     }
//   };

//   return (
//     <div className="">
//       <tr>
//         <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
//           <div className="flex items-center">
//             <div className="flex-shrink-0">
//               <div className="block relative">
//                 <img
//                   alt="profile"
//                   src={postedPhoto}
//                   className="mx-auto object-cover rounded h-10 w-15 "
//                 />
//               </div>
//             </div>
//           </div>
//         </td>
//         <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
//           <p className="text-gray-900 whitespace-no-wrap">{comment}</p>
//         </td>
//         <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
//           <p className="text-gray-900 whitespace-no-wrap">{postEmail}</p>
//         </td>
//         <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
//           <form onSubmit={handelreport} className="flex items-center justify-center gap-12">
//             <select name="report" className="select select-secondary w-full max-w-xs" onChange={handleSelectChange}>
//               <option value="">Select reason</option>
//               <option>Offensive</option>
//               <option>Spam</option>
//               <option>Misleading or scam</option>
//             </select>
//             <input
//               type="submit"
//               value="Report"
//               className="relative cursor-pointer inline-block px-3 py-1 font-semibold text-black bg-red-200 rounded-full"
//               disabled={isButtonDisabled}
//             />
//           </form>
//         </td>
//       </tr>
//     </div>
//   );
// };

// export default AllCommentSingleTable;

import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { axiosSecure } from "../../../Hook/useAxiosSecure";
import { toast } from "react-toastify";
import Modal from 'react-modal';

const AllCommentSingleTable = ({ comnt }) => {
  const { comment, postedPhoto, postEmail,_id } = comnt;
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState("");


  const { mutateAsync } = useMutation({
    mutationFn: async (postData) => {
      const { data } = await axiosSecure.post("/report", postData);
      return data;
    },
    onSuccess: () => {
      console.log("Data save successfully");
      toast.success("report added successfully");
    },
  });

  const handelreport = async (e) => {
    e.preventDefault();
    const form = e.target;
    const select = form.report.value;
    const photo = postedPhoto;
    const postComment = comment;
    const email = postEmail;
    const commentId=_id
    
    try {
      const postData = { select,photo,postComment,email,commentId };
      console.log(postData);
      await mutateAsync(postData);
      setIsButtonDisabled(true);  // Disable button after submit
      form.reset();
    } catch (err) {
      console.log(err.message);
      toast.error(err.message);
    }
  };

  const handleSelectChange = (e) => {
    const value = e.target.value;
    if (value) {
      setIsButtonDisabled(false);
    } else {
      setIsButtonDisabled(true);
    }
  };

  const handleReadMore = (fullComment) => {
    setModalContent(fullComment);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const truncateComment = (text, length) => {
    if (text.length > length) {
      return (
        <>
          {text.substring(0, length)}...
          <button className="text-blue-500" onClick={() => handleReadMore(text)}>Read More</button>
        </>
      );
    }
    return text;
  };

  return (
    <div>
      <tr>
        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <div className="block relative">
                <img
                  alt="profile"
                  src={postedPhoto}
                  className="mx-auto object-cover rounded h-10 w-15 "
                />
              </div>
            </div>
          </div>
        </td>
        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
          <p className="text-gray-900 whitespace-no-wrap">
            {truncateComment(comment, 20)}
          </p>
        </td>
        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
          <p className="text-gray-900 whitespace-no-wrap">{postEmail}</p>
        </td>
        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
          <form onSubmit={handelreport} className="flex items-center justify-center gap-12">
            <select name="report" className="select select-secondary w-full max-w-xs" onChange={handleSelectChange}>
              <option value="">Select reason</option>
              <option>Offensive</option>
              <option>Spam</option>
              <option>Misleading or scam</option>
            </select>
            <input
              type="submit"
              value="Report"
              className="relative cursor-pointer inline-block px-3 py-1 font-semibold text-black bg-red-200 rounded-full"
              disabled={isButtonDisabled}
            />
          </form>
        </td>
      </tr>

      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Comment Modal"
        className="modal"
        overlayClassName="overlay"
      >
        <h2>Full Comment</h2>
        <p>{modalContent}</p>
        <button onClick={closeModal} className="mt-4 text-white bg-blue-500 px-4 py-2 rounded">Close</button>
      </Modal>
    </div>
  );
};

export default AllCommentSingleTable;
