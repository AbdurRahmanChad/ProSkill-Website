import React from "react";
import { NavLink } from "react-router-dom";
import { HiOutlineVideoCamera } from "react-icons/hi";
import { BiHomeAlt2 } from "react-icons/bi";
import {
  AiOutlineContacts,
  AiOutlineShoppingCart,
  AiOutlineUserAdd,
} from "react-icons/ai";

const MobileMenu = () => {
  return (
    <div className="">
      <div className="w-full h-[60px] bg-black max-w-full mx-auto text-white flex justify-between items-center px-6 fixed bottom-0 lg:hidden">
        <div>
          <NavLink to="/">
            <BiHomeAlt2 className="text-sm sm:text-2xl mx-auto" />
            <p className="text-[10px] sm:text-sm mt-1">Home</p>
          </NavLink>
        </div>
        <div>
          <NavLink to="/OnlineCourses">
            <AiOutlineShoppingCart className="text-sm sm:text-2xl mx-auto" />
            <p className="text-[10px] sm:text-sm mt-1">Online</p>
          </NavLink>
        </div>
        <div>
          <NavLink to="/RecordedCourses">
            <HiOutlineVideoCamera className="text-sm sm:text-2xl mx-auto" />
            <p className="text-[10px] sm:text-sm mt-1">Recorded</p>
          </NavLink>
        </div>
        <div>
          <NavLink to="/ContactUs">
            <AiOutlineContacts className="text-sm sm:text-2xl mx-auto" />
            <p className="text-[10px] sm:text-sm mt-1">Contact</p>
          </NavLink>
        </div>
        <div>
          <NavLink to="/Admission">
            <AiOutlineUserAdd className="text-sm sm:text-2xl mx-auto" />
            <p className="text-[10px] sm:text-sm mt-1">Admission</p>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
