import Link from "next/link";
import React, { useState } from "react";

const Header = () => {
  const [showNav, setShowNav] = useState(false);
  return (
    <div className="bg-[#222222] p-2">
      <nav class="flex items-center justify-between md:w-9/12 w-11/12 mx-auto flex-wrap">
        <div class="flex items-center flex-shrink-0 text-white mr-6">
          <span class="text-xl font-semibold" href="#">
            Top Minecraft Servers
          </span>
        </div>
        <div class="block lg:hidden">
          <button
            onClick={() => setShowNav(!showNav)}
            class="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white"
          >
            <svg
              class="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <div
          className={`w-full block flex-grow ${
            !showNav && " hidden"
          } lg:flex lg:items-center lg:w-auto`}
        >
          <div class="text-sm lg:flex-grow">
            <a
              href="#responsive-header"
              class="block mt-4 lg:inline-block lg:mt-0 text-white mr-4"
            >
              List By...
            </a>

            {/* 
        
            
            </a> */}
            <div
              href="#responsive-header"
              class="block mt-4 lg:inline-block lg:mt-0 text-white mr-4"
            >
              <button className="peer py-2 bg-[#222222] text-white">
                <span className="flex justify-center align-center">
                  Account...
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

              <div className="hidden w-11/12 md:w-[150px] overflow-auto absolute peer-hover:flex hover:flex flex-col bg-white drop-shadow-lg">
                <a
                  className="px-2 md:text-left text-center py-3 text-black text-[14px] hover:bg-[#2780E3] hover:text-white"
                  href="#"
                >
                  My Servers
                </a>
                <Link
                  className="px-2 md:text-left text-center py-3 text-black text-[14px] hover:bg-[#2780E3] hover:text-white"
                  href="./add_server"
                >
                  Add Servers
                </Link>
              </div>
            </div>

            <a
              href="#responsive-header"
              class="block mt-4 lg:inline-block lg:mt-0 text-white mr-5"
            >
              Sponsored
            </a>
            <Link
              href="./contact"
              class="block mt-4 lg:inline-block lg:mt-0 text-white"
            >
              Contact
            </Link>
          </div>
          <div>
            <input type="text" placeholder="Search..." className="p-2 m-0" />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
