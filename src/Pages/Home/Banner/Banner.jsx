import { useState } from "react";

const Banner = () => {

  const [search,setSearch]=useState('')


  const handelsearch = e => {
    e.preventDefault()
    const searchText = e.target.search.value
    console.log(searchText);
setSearch(searchText)
  }


  return (
    <div>
      <div
        className="hero h-[460px]"
        style={{
          backgroundImage:
            "url(https://i.ibb.co/3NrRj6M/images.png)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
            <p className="mb-5">
              Search Your Favorite Author Post
            </p>
            
            <div>
              <form onSubmit={handelsearch}>
                <input className="text-black p-3 rounded-l-lg" type="text" name="search" id="" />
                <input className="p-3 rounded-r-lg bg-[#B58753]" type="submit" value='Search' />
              </form>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
