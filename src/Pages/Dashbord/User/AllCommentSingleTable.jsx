const AllCommentSingleTable = ({ comnt }) => {
  const { comment, postedPhoto, postEmail } = comnt;

  // console.log(comment);

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
          <p className="text-gray-900 whitespace-no-wrap">{comment}</p>
        </td>
        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
          <p className="text-gray-900 whitespace-no-wrap">{postEmail}</p>
        </td>

              <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  
              <button
        //   onClick={() => setIsOpen(true)}
          className="relative cursor-pointer inline-block px-3 py-1 font-semibold text-green-900 leading-tight"
        >
          <span
            aria-hidden="true"
            className="absolute inset-0 bg-red-200 opacity-50 rounded-full"
          ></span>
          <span className="relative">Delete</span>
        </button>
        </td>
      </tr>
    </div>
  );
};

export default AllCommentSingleTable;
