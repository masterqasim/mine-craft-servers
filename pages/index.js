import { display } from "@mui/system";
import React, { useEffect, useState } from "react";
import Layout from "../components/layout";
import ServersTable from "../components/serversTable";
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
      <div className=" md:w-9/12 w-11/12 mx-auto h-[1200px]">
        <h1 className="text-black text-4xl mt-10 font-thin mb-10">
          Best Minecraft Servers
        </h1>
        <hr />
        <div className="flex mt-4">
          <div className="w-full md:w-4/6">
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
        <div className="w-full flex-column  md:flex mt-10 align-center justify-between">
          {dropDownData.map((val) => {
            return (
              <div>
                <button className="peer  mt-2 w-full md:w-[200px] py-2 bg-[#222222] text-white">
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

                <div className="hidden w-11/12 md:w-[200px] h-[250px] overflow-auto	 absolute peer-hover:flex hover:flex flex-col bg-white drop-shadow-lg">
                  {val?.list?.map((dropDownVal) => {
                    return (
                      <a
                        className="px-2 md:text-left text-center py-3 text-black text-[14px] hover:bg-[#2780E3] hover:text-white"
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
        <ServersTable />
      </div>
      <div className="w-full bg-gray-200 h-32 mt-10"></div>
      <div className=" md:w-9/12 w-11/12 mx-auto h-[1200px]">
        <div>
          <h1 className="text-black text-4xl mt-10 font-thin mb-5">
            The Best Minecraft Servers{" "}
          </h1>
          <div className="border-2">
            <iframe
              width="100%"
              height="539"
              src="https://www.youtube.com/embed/lNlaDt1uB-8"
              title="I Survived 100 Days in Minecraft PRISON..."
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
            <div className="w-full bg-gray-100 h-32"></div>
            <div className="w-full p-5">
              <p className="text-black">
                OPBlocks is a high-quality Minecraft Prison, Survival SMP,
                Skyblock, and Pixelmon server featuring unique content and an
                amazing community, friendly staff, and awesome players like you!
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Home;
