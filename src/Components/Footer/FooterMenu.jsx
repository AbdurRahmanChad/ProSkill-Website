import React from "react";
import { Link } from "react-router-dom";

const FooterMenu = () => {
  return (
    <div>
      <div className="">
        <hr />
        <div className="hidden sm:hidden md:hidden lg:block lg:mx-44 xl:mx-32">
          <ul className="flex justify-between items-center gap-4 py-2 text-slate-300">
            <Link to="/">
              <li className="text-xs">Home</li>
            </Link>
            <Link to="/OnlineCourses">
              <li className="text-xs">Online Courses</li>
            </Link>
            <Link to="/RecordedCourses">
              <li className="text-xs">Recorded Courses</li>
            </Link>
            <Link to="/ContactUs">
              <li className="text-xs">Contact us </li>
            </Link>
            <Link to="/PrivacyPolicy">
              <li className="text-xs">Privacy Policy </li>
            </Link>
            <Link to="/Termas">
              <li className="text-xs">Terms & Conditions</li>
            </Link>
            <Link to="/Admission">
              <li className="text-xs">Admission </li>
            </Link>
          </ul>
        </div>
        <hr />
      </div>
      <p className="text-sm text-slate-300 text-center py-1 hidden sm:hidden md:hidden lg:block">
        all right reserved ProSkill
      </p>
    </div>
  );
};

export default FooterMenu;
