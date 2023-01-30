import React from "react";
import Layout from "../../components/layout";

const Vote = () => {
  return (
    <Layout>
      <div className=" md:w-9/12 w-11/12 mx-auto mb-5 h-full">
        <h1 className="text-black text-4xl mt-10 font-thin mb-6">Add Server</h1>
        <hr />
        <div className="md:flex block">
          <div className="w-full"></div>
          <div className="w-full p-5">
            <div className="mt-8">
              <label className="text-black font-bold text-sm">
                Minecraft Username
              </label>
              <input
                type="text"
                name="name"
                placeholder="Name"
                className="p-2 w-full border-[0.7px] border-gray-300 mt-1"
              />
            </div>
            <button className="p-2 w-full border-[0.7px] border-gray-300 mt-1 bg-[#1967be] text-white">
              Vote!
            </button>
            <button className="p-2 w-full border-[0.7px] border-gray-300 mt-1 bg-[#090909] text-white">
              Return to server page
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Vote;
