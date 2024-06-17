const AllTag = () => {
  return (
    <div>
      <h1 className="text-xl md:text-2xl font-bold text-center my-6">
        Recommended Tag
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
        <div className="card bg-[#02251e] shadow-xl">
          <div className="card-body flex items-center text-white">
            <h2 className="card-title">Python</h2>
          </div>
        </div>
        <div className="card  bg-[#02251e] shadow-xl">
          <div className="card-body flex items-center text-white">
            <h2 className="card-title">JavaScript</h2>
          </div>
        </div>
        <div className="card  bg-[#02251e] shadow-xl">
          <div className="card-body flex items-center text-white">
            <h2 className="card-title">CSS</h2>
          </div>
        </div>
        <div className="card  bg-[#02251e] shadow-xl">
          <div className="card-body flex items-center text-white">
            <h2 className="card-title">Database</h2>
          </div>
        </div>
        <div className="card  bg-[#02251e] shadow-xl">
          <div className="card-body flex items-center text-white">
            <h2 className="card-title">HTML</h2>
          </div>
        </div>
        <div className="card  bg-[#02251e] shadow-xl">
          <div className="card-body flex items-center text-white">
            <h2 className="card-title">Java</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllTag;
