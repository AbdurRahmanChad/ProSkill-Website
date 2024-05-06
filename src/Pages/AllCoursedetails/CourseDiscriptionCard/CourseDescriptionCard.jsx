import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../../../assets/Online.png";
import { HiClock } from "react-icons/hi";
import { useApps, useAppsDispatch } from "../../../context/appContext";
const CourseDescriptionCard = ({ name }) => {
  const { backgroundColor, borderColor, textColor } = useApps();
  const dispatch = useAppsDispatch();

  return (
    <div>
      <div
        className="max-w-xs min-h-[520px] w-full h-full bg-black sm:px-0 my-4 mb-16 lg:-mt-12 lg:px-2 lg:mb-0 lg:my-10 rounded-3xl"
        style={{ backgroundColor, color: textColor, borderColor }}
      >
        {/*===================== Course Description Logo and Text ================== */}
        <div className="">
          <div className="w-full min-h-full">
            <div className="flex gap-6 items-center py-2 pt-6 px-4">
              <div>
                <h1 className="text-3xl">{name}</h1>
              </div>
              <div className="mt-2">
                <img src={Logo} alt="logo" />
              </div>
            </div>
            <hr className="mx-4" />
          </div>
          {/*======Course Description Course + Admission =========== */}
          <div className=" flex justify-between gap-10 px-4 py-2 text-xs">
            <p className="font-semibold">Graphic Design Course</p>
            <p className="font-bold">BDT: 7500</p>
          </div>
          <div className="text-center py-3 sm:mx-3 sm:text-xs lg:mx-3">
            <NavLink to="/admission">
              <button className="onlineCourseBtnBuy">Admission</button>
            </NavLink>
          </div>
          {/*===================== Course Includes ================================= */}
          <p className="px-3 text-xs py-2 font-medium">This Course Includes:</p>
        </div>
        {/*===================== Course All Image NAd text  ======================= */}
        <div className="pb-3">
          {/*===================== Course Level button Part-01 ================== */}
          <div className=" flex justify-between items-center px-3 py-2">
            <div className="flex gap-2 text-xs">
              <HiClock className="text-[15px]" />
              <p className="">Course Level</p>
            </div>
            <p className="text-xs">Beginner</p>
          </div>
          <hr className="mx-4 my-1" />
          {/*===================== Course Level button Part-01 End================== */}
          {/*===================== Course Level button Part-02 ================== */}
          <div className=" flex justify-between items-center px-3 py-2">
            <div className="flex gap-2 text-xs">
              <HiClock className="text-[15px]" />
              <p className="text-xs">Course Level</p>
            </div>
            <p className="text-xs">Beginner</p>
          </div>
          <hr className="mx-4 my-1" />
          {/*=======Course Level button Part-02 End================*/}
          {/*=======Course Level button Part-03 ================== */}
          <div className=" flex justify-between items-center px-3 py-2">
            <div className="flex gap-2">
              <HiClock className="text-[15px]" />
              <p className="text-xs">Lessons</p>
            </div>
            <p className="text-xs">38</p>
          </div>
          <hr className="mx-4 my-1" />
          {/*==== Course Level button Part-03 End================== */}
          {/*======= Course Level button Part-04 ================== */}
          <div className=" flex justify-between items-center px-3 py-2">
            <div className="flex gap-2">
              <HiClock className="text-[15px]" />
              <p className="text-xs">Class Time</p>
            </div>
            <p className="text-xs"> 9.00 PM</p>
          </div>
          <hr className="mx-4 my-1" />
          {/*==== Course Level button Part-04 End================== */}
          {/*======= Course Level button Part-05 ================== */}
          <div className="flex justify-between items-center px-3 py-2">
            <div className="flex gap-2">
              <HiClock className="text-[15px]" />
              <p className="text-xs">Extra Tips</p>
            </div>
            <p className="text-xs">5</p>
          </div>
          <hr className="mx-4 my-1" />
          {/*===== Course Level button Part-05 End================== */}
          {/*===================== Course Level button Part-06 ================== */}
          <div className="flex justify-between items-center px-3 py-2">
            <div className="flex gap-2">
              <HiClock className="text-[15px]" />
              <p className="text-xs">Language</p>
            </div>
            <p className="text-xs">Bangla</p>
          </div>
          {/*===================== Course Level button Part-06 End================== */}
        </div>
      </div>
    </div>
  );
};

export default CourseDescriptionCard;
