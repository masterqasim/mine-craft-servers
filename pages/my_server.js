import Link from "next/link";
import React, { useRef, useState } from "react";
import Layout from "../components/layout";

const Contact = () => {
  return (
    <Layout>
      <div className=" md:w-9/12 w-11/12 mx-auto mb-5">
        <h1 className="text-black text-4xl mt-10 font-thin mb-6">My Servers</h1>
        <hr />

        <ul class="flex flex-wrap mt-5 text-sm font-medium text-center text-gray-500 border-b ">
          <li class="mr-2">
            <span
              href="#"
              aria-current="page"
              class="inline-block p-4 border border-b-0"
            >
              Servers
            </span>
          </li>
          <li class="mr-2">
            <a
              href="#"
              class="inline-block p-4 text-blue-600 hover:text-gray-600 hover:bg-gray-100 "
            >
              Settings
            </a>
          </li>
          <li class="mr-2">
            <Link
              href="./add_server"
              class="inline-block p-4 text-blue-600 hover:text-gray-600 hover:bg-gray-100 "
            >
              Add Server
            </Link>
          </li>
        </ul>
        <div className="flex flex-col mt-5">
          <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="py-4 inline-block min-w-full sm:px-6 lg:px-8">
              <div className="overflow-hidden">
                <table className="min-w-full text-center">
                  <thead className="border text-black bg-gray-100">
                    <tr>
                      <th
                        scope="col"
                        className="text-sm align-center font-medium  py-4 w-3/12"
                      >
                        Name
                      </th>
                      <th
                        scope="col"
                        className="text-sm font-medium text py-4 border-r border-l px-3 w-5/12"
                      >
                        Vote URL
                      </th>
                      <th
                        scope="col"
                        className="text-sm font-medium text py-4 border-r border-l px-3 w-1/12"
                      >
                        Votes
                      </th>
                      <th
                        scope="col"
                        className="text-sm font-medium px-7 py-4 w-3/12"
                      >
                        Options
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {Array(5)
                      .fill("1")
                      .map((val, i) => {
                        return (
                          <tr className="bg-white border">
                            <td className="block py-4 whitespace-nowrap text-sm font-medium ">
                              <a href="#" className="text-blue-500">
                                Snapcraft
                              </a>
                            </td>
                            <td className="text-sm px-3 text-gray-900 font-light py-4 whitespace-nowrap border">
                              <div className="mb-3 flex">
                                <input
                                  readOnly
                                  value={
                                    "https://topminecraftservers.org/vote/30822"
                                  }
                                  type="text"
                                  className="w-full px-3 py-1.5 text-base text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300"
                                  placeholder="Example label"
                                />
                              </div>
                            </td>
                            <td className="text-sm px-3 text-gray-900 text-center font-light py-4 whitespace-nowrap border">
                              <div className="flex justify-center"> 1</div>
                            </td>
                            <td className="text-sm hidden md:block text-gray-900 font-light px-2 py-4 whitespace-nowrapborder ">
                              <div className="flex">
                                <button className="px-3 py2 bg-blue-600 text-white rounded mr-3">
                                  Edit
                                </button>
                                <button className="px-3 py2 bg-red-600 text-white rounded">
                                  Delete
                                </button>
                              </div>
                            </td>
                          </tr>
                        );
                      })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default Contact;
