import React from "react";
import {
  AiOutlineMenu,
  AiOutlineSearch,
  AiOutlineClose,
  AiFillTag,
} from "react-icons/ai";
import { BsFillCartFill, BsFillSaveFill } from "react-icons/bs";
import { TbTruckDelivery } from "react-icons/tb";
import { MdFavorite, MdHelp } from "react-icons/md";
import { FaUserFriends, FaWallet } from "react-icons/fa";
import { useState } from "react";

const MENU = [
  {
    name: "Orders",
    icon: <TbTruckDelivery size={25} className="mr-4" />,
  },
  {
    name: "Favorites",
    icon: <MdFavorite size={25} className="mr-4" />,
  },
  {
    name: "Wallet",
    icon: <FaWallet size={25} className="mr-4" />,
  },
  {
    name: "Help",
    icon: <MdHelp size={25} className="mr-4" />,
  },
  {
    name: "Promotions",
    icon: <AiFillTag size={25} className="mr-4" />,
  },
  {
    name: "Best ones",
    icon: <BsFillSaveFill size={25} className="mr-4" />,
  },
  {
    name: "Invite friends",
    icon: <FaUserFriends size={25} className="mr-4" />,
  },
];

const NavBar = () => {
  const [showNav, setshowNav] = useState(false);
  console.log(showNav);

  return (
    <div className="max-w-[1640px] mx-auto  flex justify-between items-center p-4 ">
      {/* left side */}
      <div className="flex items-center">
        <div
          onClick={() => setshowNav((prev) => !prev)}
          className="cursor-pointer"
        >
          <AiOutlineMenu />
        </div>
        <h1 className="text-2xl sm:text-3xl lg:text-4xl px-2">
          Restaurant <span className="font-bold">App</span>
        </h1>
        <div className="hidden lg:flex items-center bg-gray-200 rounded-full p-1 text-[14px]">
          <p className="bg-black text-white rounded-full p-2">Delivery </p>
          <p className="p-2">Picker </p>
        </div>
      </div>
      {/* search input  */}
      <div className="bg-gray-200 rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px]">
        <AiOutlineSearch size={20} />
        <input
          className="bg-transparent p-2 w-full focus:outline-none"
          type="text"
          placeholder="Seach foods"
        />
      </div>
      {/* cart button */}
      <button className="bg-black text-white hidden md:flex items-center p-2 rounded-full">
        <BsFillCartFill size={20} className="mr-2" /> Cart
      </button>

      {/* mobile menu */}
      {/* overlay */}
      {showNav ? (
        <div className="bg-black/80 fixed w-full h-screen z-10 top-0 left-0"></div>
      ) : null}

      {/* side drawer menu */}
      <div
        onClick={() => setshowNav(false)}
        className={
          showNav
            ? "fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300"
            : "fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300"
        }
      >
        <AiOutlineClose
          size={30}
          className="absolute right-4 top-4 cursor-pointer  text-black"
        />
        <h2 className="text-2xl p-4">
          Restaurant <span className="font-bold">App</span>
        </h2>
        <nav>
          <ul className="flex flex-col p-4 text-gray-800">
            {MENU.map((item, i) => (
              <li
                key={`menu_item_${i}`}
                className="text-xl py-4 flex items-center cursor-pointer hover:bg-gray-200"
              >
                {item.icon}
                {item.name}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default NavBar;
