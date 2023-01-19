import React, { useRef, useState } from "react";
import Layout from "../components/layout";

const Contact = () => {
  return (
    <Layout>
      <div className=" md:w-9/12 w-11/12 mx-auto mb-5">
        <h1 className="text-black text-4xl mt-10 font-thin mb-6">Contact</h1>
        <hr />
        <div className=" mt-1 text-black px-4 py-4">
          <div>
            <label className="text-black font-bold text-sm">Name</label>
            <br />
            <input
              type="text"
              className="p-2 sm:w-5/12 w-full border-[0.7px] border-gray-300 mt-1"
            />
          </div>
          <div className="mt-8">
            <label className="text-black font-bold text-sm">Email</label>
            <br />
            <input
              type="text"
              className="p-2 sm:w-5/12 w-full border-[0.7px] border-gray-300 mt-1"
            />
          </div>
          <div className="mt-8">
            <label className="text-black font-bold text-sm">Title</label>
            <br />
            <input
              type="text"
              className="p-2 sm:w-5/12 w-full border-[0.7px] border-gray-300 mt-1"
            />
          </div>
          <div className="mt-8">
            <label className="text-black font-bold text-sm">Message</label>
            <br />
            <textarea
              type="text"
              rows={6}
              className="p-2 w-full border-[0.7px] border-gray-300 mt-1"
            />
          </div>
          <button className="px-4 py-3 bg-[#2780E3] mt-5 text-white">
            Send Message
          </button>
        </div>
      </div>
    </Layout>
  );
};
export default Contact;
