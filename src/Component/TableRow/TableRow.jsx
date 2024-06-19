import { useState } from "react";
import DeletModal from "../Modal/DeletModal";
import { Link } from "react-router-dom";

const TableRow = ({ p, refetch, handleDelete }) => {
  // for delete modal
  let [isOpen, setIsOpen] = useState(false);
  const closeModal = () => {
    setIsOpen(false);
  };

  const { post_time } = p;

  const date = new Date(post_time);

  // Extracting hours, minutes, and seconds
  const hours = date.getUTCHours().toString().padStart(2, "0");
  const minutes = date.getUTCMinutes().toString().padStart(2, "0");
  // const seconds = date.getUTCSeconds().toString().padStart(2, '0');

  // Formatting time as HH:MM:SS
  const timeString = `${hours}:${minutes}`;

  return (
    <tr>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <div className="flex items-center">
          <div className="flex-shrink-0">
            <div className="block relative">
              <img
                alt="profile"
                src={p.author_image}
                className="mx-auto object-cover rounded h-10 w-15 "
              />
            </div>
          </div>
        </div>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 whitespace-no-wrap">{p.post_title}</p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 whitespace-no-wrap">{10}</p>
      </td>

      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        {timeString}
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <button
          onClick={() => setIsOpen(true)}
          className="relative cursor-pointer inline-block px-3 py-1 font-semibold text-green-900 leading-tight"
        >
          <span
            aria-hidden="true"
            className="absolute inset-0 bg-red-200 opacity-50 rounded-full"
          ></span>
          <span className="relative">Delete</span>
        </button>
        {/* Delete modal */}

        <DeletModal
          closeModal={closeModal}
          isOpen={isOpen}
          handleDelete={handleDelete}
          id={p._id}
        ></DeletModal>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <span className="relative cursor-pointer inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
          <span
            aria-hidden="true"
            className="absolute inset-0 bg-green-200 opacity-50 rounded-full"
          ></span>
          <Link to={"/comment"}>
            <button className="relative">Comment</button>
          </Link>
        </span>
        {/* Update Modal */}
      </td>
    </tr>
  );
};

export default TableRow;
