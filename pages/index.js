import { display } from "@mui/system";
import React, { useEffect, useState } from "react";
import Layout from "../components/layout";
import { getCountries } from "../network/network";

function Home() {
  const [countries, setCountries] = useState("");
  const dropDownData = [
    {
      label: "sort",
      list: [
        { text: "Most video", link: "#" },
        { text: "Most video", link: "#" },
        { text: "Most video", link: "#" },
        { text: "Most video", link: "#" },
      ],
    },
    {
      label: "Type",
      list: [
        { text: "Most video", link: "#" },
        { text: "Most video", link: "#" },
        { text: "Most video", link: "#" },
        { text: "Most video", link: "#" },
      ],
    },
    {
      label: "Version",
      list: [
        { text: "Most video", link: "#" },
        { text: "Most video", link: "#" },
        { text: "Most video", link: "#" },
        { text: "Most video", link: "#" },
      ],
    },
    {
      label: "Country",
      list: countries || [],
    },
  ];

  useEffect(() => {
    fetchCountry();
  }, []);

  const fetchCountry = async () => {
    const countries = await getCountries();
    setCountries(countries);
    return countries;
  };

  return (
    <Layout>
      <div className="h-24" style={{ background: "#ECEEEF" }}></div>
      <div className="w-4/6 mx-auto h-[1200px]">
        <h1 className="text-black text-4xl mt-10 font-thin mb-10">
          Best Minecraft Servers
        </h1>
        <hr />
        <div className="flex mt-4">
          <div className="w-4/6">
            <p className="text-black text-sm mb-4">
              Top Minecraft Servers lists some of the{" "}
              <b>Best Minecraft Servers</b> on the web to play on. Browse down
              our list and discover an incredible selection of servers until you
              find one that appears to be ideal for you! Click on a server to
              learn more about it, or just copy the ip address into your
              Minecraft client and find out for yourself just how great it is.
            </p>
            <hr />
            <div className="flex mt-5">
              <div
                className="w-full text-center py-5 text-xl"
                style={{ background: "#2780E3" }}
              >
                Register
              </div>
              <div className="w-full text-center bg-[#222222] py-5 text-xl">
                Login
              </div>
            </div>
          </div>
          <div className="w-">
            <p className="text-black"></p>
          </div>
        </div>
        <div className="w-full flex mt-10 align-center justify-between">
          {dropDownData.map((val) => {
            return (
              <div>
                <button className="peer w-[200px] py-2 bg-[#222222] text-white">
                  <span className="flex justify-center align-center">
                    {val.label}
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="caret-down"
                      className="w-2 ml-1"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 320 512"
                    >
                      <path
                        fill="currentColor"
                        d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"
                      ></path>
                    </svg>
                  </span>
                </button>

                <div className="hidden w-[200px] h-[250px] overflow-auto	 absolute peer-hover:flex hover:flex flex-col bg-white drop-shadow-lg">
                  {val?.list?.map((dropDownVal) => {
                    return (
                      <a
                        className="px-5 py-3 text-black text-[14px] hover:bg-[#2780E3] hover:text-white"
                        href="#"
                      >
                        {dropDownVal.value && (
                          <img
                            style={{
                              height: "15px",
                              display: "inline",
                              marginRight: "5px",
                            }}
                            className="md-country-picker-flag"
                            src={
                              "https://img.mobiscroll.com/demos/flags/" +
                              dropDownVal.value +
                              ".png"
                            }
                            alt="Flag"
                          />
                        )}
                        {dropDownVal.text}
                      </a>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
        <div className="flex flex-col mt-5">
          <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="py-4 inline-block min-w-full sm:px-6 lg:px-8">
              <div className="overflow-hidden">
                <table className="min-w-full text-center">
                  <thead className="border text-black bg-gray-100">
                    <tr>
                      <th
                        scope="col"
                        className="text-sm font-medium  py-4 border w-1/12"
                      >
                        Rank
                      </th>
                      <th
                        scope="col"
                        className="text-sm font-medium text py-4 border-r px-3 w-full"
                      >
                        Featured Server
                      </th>
                      <th
                        scope="col"
                        className="text-sm font-medium px-7 py-4 border-r"
                      >
                        About
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {Array(5)
                      .fill("1")
                      .map((val, i) => {
                        return (
                          <tr className="bg-white border">
                            <td className=" py-4 whitespace-nowrap text-sm font-medium text-gray-900 border">
                              {i + 1}
                            </td>
                            <td className="text-sm px-3 text-gray-900 font-light py-4 whitespace-nowrap border">
                              <div className="mb-3 flex">
                                <span className="border px-4 py-2 text-lg text-black text-base bg-gray-100">
                                  IP:
                                </span>
                                <input
                                  readOnly
                                  value={"play.wumpussmp.ga"}
                                  type="text"
                                  className="w-full px-3 py-1.5 text-base text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300"
                                  placeholder="Example label"
                                />
                                <button className="border text-white px-4 py-2 bg-[#2780E3]">
                                  Copy!
                                </button>
                              </div>
                            </td>
                            <td className="text-sm text-gray-900 font-light px-2 py-4 whitespace-nowrap border">
                              <div className="flex justify-between">
                                <div className="border p-8">
                                  <p>Players Online</p>
                                  <p className="font-bold text-green-600 text-lg">
                                    98
                                  </p>
                                </div>
                                <div className=" p-2">
                                  <p className="text-[16px] font-bold">
                                    MC Version: <span>1.90</span>
                                  </p>
                                  <p className="text-sm font-bold">
                                    Game Modes:{" "}
                                    <span className="font-[100]">Economy</span>
                                    <span className="font-[100]">Economy</span>
                                    <span className="font-[100]">Economy</span>
                                  </p>
                                </div>
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
}

export default Home;
