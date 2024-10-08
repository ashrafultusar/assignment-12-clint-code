import useAuth from "../Hook/useAuth";

const AnnouncementForm = ({ handelSubmit }) => {
  const { user } = useAuth();

  return (
    <div>
      <div>
        <div className="w-full min-h-[calc(100vh-40px)] flex  justify-center items-center text-gray-800 rounded-xl bg-gray-50">

        {/* <div className="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2">
                <img className="w-full h-full max-w-md" src="https://merakiui.com/images/components/Email-campaign-bro.svg" alt="" />
          </div> */}
          
          <form onSubmit={handelSubmit}>
            <div className="">
              <div className="space-y-6"></div>
              <div className="space-y-6">
                <div className="space-y-1 text-sm">
                  <label htmlFor="title" className="block text-gray-600">
                    Announcement Title
                  </label>
                  <input
                    className="w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md "
                    name="title"
                    id="title"
                    type="text"
                    placeholder="Title"
                    required
                  />
                </div>
                {/* image */}

                <div className=" p-4 bg-white w-full  m-auto rounded-lg flex justify-between items-center">
                  <div className="file_upload px-5 py-3 relative border-4 border-dotted border-gray-300 rounded-lg">
                    <div className="flex flex-col w-max mx-auto text-center">
                      <label>
                        <input
                          className="text-sm cursor-pointer w-36 hidden"
                          type="file"
                          name="image"
                          id="image"
                          accept="image/*"
                          hidden
                        />
                        <div className="bg-rose-500 text-white border border-gray-300 rounded font-semibold cursor-pointer p-1 px-3 hover:bg-rose-500">
                          Upload You Image
                        </div>
                      </label>
                    </div>
                  </div>

                  <div className="h-16 w-16 object-cover overflow-hidden flex items-center"></div>
                </div>

                {/*  author name */}
                <div className="">
                  <div className=" text-sm">
                    <label htmlFor="price" className="block text-gray-600">
                      Author Name
                    </label>
                    <input
                      className="w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md "
                      name="name"
                      id="text"
                      type="text"
                      placeholder={user?.displayName}
                    />
                  </div>
                </div>

                <div className="space-y-1 text-sm">
                  <label htmlFor="description" className="block text-gray-600">
                    Post Description
                  </label>

                  <textarea
                    id="description"
                    className="block rounded-md focus:rose-300 w-full h-32 px-4 py-3 text-gray-800  border border-rose-300 focus:outline-rose-500 "
                    name="description"
                  ></textarea>
                </div>
              </div>
              <button
            type="submit"
            className="w-full p-3 mt-5 text-center font-medium text-white transition duration-200 rounded shadow-md bg-rose-500"
          >
            Submit To continue
          </button>
            </div>
          </form>

          
        </div>
      </div>
    </div>
  );
};

export default AnnouncementForm;
