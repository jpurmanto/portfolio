"use client";

import { navbarItems } from "@/constants";
import { CreateNavbarLinks } from "@/helpers";
import { useEffect, useState } from "react";
import { scroller } from "react-scroll";

export default function Navbar(): JSX.Element {
  const [activeLink, setActiveLink] = useState<string>("home");
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <header
      className={
        "fixed top-0 w-full z-30 transition-all pt-0 bg-[#fffffff2] select-none"
      }
    >
      <nav className="relative px-4 py-6 flex justify-between items-center">
        <div className="lg:hidden pl-2">
          <button
            id="navbar-burger"
            className="flex items-center text-[var(--primary-color)] p-3"
            onClick={() => setShowSidebar(true)}
          >
            <svg
              className="block h-4 w-4 fill-current"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
            </svg>
          </button>
        </div>
        <ul className="hidden absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 lg:flex lg:mx-auto lg:items-center lg:w-auto lg:space-x-6">
          <CreateNavbarLinks
            setActiveLink={setActiveLink}
            activeLink={activeLink}
            navbarItems={navbarItems}
            setShowSidebar={setShowSidebar}
          />
        </ul>
        <div className="col-start-10 col-end-12 font-medium flex lg:hidden justify-center items-center">
          <button
            onClick={() =>
              scroller.scrollTo("contact", {
                duration: 1500,
                delay: 100,
                smooth: true,
              })
            }
          >
            Contact Me
          </button>
        </div>
      </nav>

      <div
        className={`navbar-menu relative z-50 ${showSidebar ? "" : "hidden"}`}
      >
        <div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25"></div>
        <nav className="fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 bg-white border-r overflow-y-auto">
          <div className="flex items-center mb-8 pt-2">
            <button
              id="navbar-close"
              className="p-[.5rem]"
              onClick={() => setShowSidebar(false)}
            >
              <svg
                className="h-6 w-6 text-gray-400 cursor-pointer hover:text-gray-500"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>
          </div>
          <div>
            <ul className="flex flex-col">
              <CreateNavbarLinks
                setActiveLink={setActiveLink}
                activeLink={activeLink}
                navbarItems={navbarItems}
              />
            </ul>
          </div>
          <div className="mt-auto">
            <p className="my-4 text-xs text-center text-gray-400">
              <span>Copyright © 2023</span>
            </p>
          </div>
        </nav>
      </div>
    </header>
  );
}
