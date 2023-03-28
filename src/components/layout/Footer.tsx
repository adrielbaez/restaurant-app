import React from "react";
import { BsArrowBarUp } from "react-icons/bs";

export const Footer = () => {
  const toTop = () => {
    // scroll to top of page with smooth scroll
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-gray-800 text-white max-w-[1640px] mx-auto  p-4">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm md:text-base">Created by Adriel with ❤️</p>
        <ul className="flex flex-col md:flex-row justify-center list-none">
          <li>
            <p
              onClick={toTop}
              className="hover:text-gray-400 flex items-center cursor-pointer"
            >
              To top <BsArrowBarUp className="ml-4" />
            </p>
          </li>
        </ul>
      </div>
    </footer>
  );
};
