"use client";

import { navbarItems } from "@/constants";
import { CreateNavbarLinks } from "@/helpers";
import { useEffect, useState } from "react";
import { scroller } from "react-scroll";

export default function Navbar(): JSX.Element {
  const [activeLink, setActiveLink] = useState("home");
  const [scrollActive, setScrollActive] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScrollActive(window.screenY > 20);
    });
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 w-full z-30 bg-white-500 transition-all ${
          scrollActive ? "shadow-md pt-0" : "pt-4"
        }`}
      >
        <nav className="max-w-screen-xl px-6 sm:px-8 lg:px-16 mx-auto grid grid-flow-col py-3 sm:py-4">
          <div className="col-start-1 col-end-2 flex items-center">
            <div className="cursor-pointer flex gap-2 font-bold items-center text-[20px] text-green-main">
              <div className="w-[40px] h-[40px] flex justify-center items-center p-3 rounded-[8px] border-green-main bg-green-main">
                <span className="text-[#fff] text-[25px] font-bold">P</span>
              </div>
              ortfolio
            </div>
          </div>
          <ul className="hidden lg:flex col-start-4 col-end-8 text-[#000] items-center">
            <CreateNavbarLinks
              setActiveLink={setActiveLink}
              activeLink={activeLink}
              getMenuItems={navbarItems}
            />
          </ul>
          <div className="col-start-10 col-end-12 font-medium flex justify-center items-center">
            <button
              onClick={() =>
                scroller.scrollTo("contact", {
                  duration: 1500,
                  delay: 100,
                  smooth: true,
                })
              }
              className="py-3 px-6 border-[2px] bg-[#fff] border-green-main text-[#000] font-semibold rounded-lg text-xl tracking-widest hover:shadow-green-md transition-all outline-none"
            >
              Contact Me
            </button>
          </div>
        </nav>
      </header>
      <nav className="fixed lg:hidden bottom-0 left-0 right-0 z-20 px-4 sm:px-8 shadow-t">
        <div className="bg-white-500 sm:px-3">
          <ul className="overflow-x-auto flex w-full justify-between items-center text-[#000]">
            <CreateNavbarLinks
              setActiveLink={setActiveLink}
              activeLink={activeLink}
              getMenuItems={navbarItems}
            />
          </ul>
        </div>
      </nav>
    </>
  );
}
