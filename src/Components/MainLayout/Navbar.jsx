import { useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../../assets/logo.png";
import { HiMenu, HiX } from "react-icons/hi";
import { useAppsDispatch } from "../../context/appContext";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const dispatch = useAppsDispatch();

  const toogleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <section className="bg-black">
      <header className="w-full h-full">
        <nav className="w-full mx-auto px-10 lg:px-20 z-30 fixed bg-black">
          <div className="w-full flex justify-between items-center py-4">
            {/*===================== Logo Start ================== */}
            <div className="cursor-pointer w-36 pb-2">
              <NavLink to="/">
                <img src={Logo} alt="logo"></img>
              </NavLink>
            </div>
            {/*===================== Navbar Start ================== */}
            <div className="lg:flex justify-between items-center gap-10 hidden">
              <ul className="flex justify-between items-center gap-10 ">
                <li
                  onClick={() =>
                    dispatch({
                      type: "SET_BACKGROUND_COLOR",
                      payload: {
                        backgroundColor: "black",
                        borderColor: "white",
                        textColor: "silver",
                      },
                    })
                  }
                >
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? "text-bgOrangeRed" : " text-bgText navLinkBtn"
                    }
                    to="/OnlineCourses"
                  >
                    Online Courses
                  </NavLink>
                </li>
                <li
                  onClick={() =>
                    dispatch({
                      type: "SET_BACKGROUND_COLOR",
                      payload: {
                        backgroundColor: "#F1F2F2",
                        textColor: "black",
                        borderColor: "white",
                      },
                    })
                  }
                >
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? "text-bgOrangeRed" : "text-bgText navLinkBtn"
                    }
                    to="/RecordedCourses"
                  >
                    Recorded Courses
                  </NavLink>
                </li>
                <li
                  onClick={() =>
                    dispatch({ type: "SET_BACKGROUND_COLOR", payload: "black" })
                  }
                >
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? "text-bgOrangeRed" : "text-bgText navLinkBtn"
                    }
                    to="/ContactUs"
                  >
                    Contact Us
                  </NavLink>
                </li>
              </ul>
              <div className="lg:block hidden">
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "px-6 py-2 bg-white text-black rounded-full"
                      : "px-6 py-2 bg-bgOrangeRed text-white rounded-full"
                  }
                  to="/Admission"
                >
                  <button className="font-bold">Admission</button>
                </NavLink>
              </div>
              {/*===================== Navbar  End================== */}
            </div>
            {/*===================== Button ================== */}
            <button
              onClick={toogleMenu}
              className="lg:hidden text-white text-3xl"
            >
              {isMenuOpen ? <HiX /> : <HiMenu />}
            </button>
          </div>
          {/*===================== Menu Is Small device ================== */}
          {isMenuOpen && (
            <div className="bg-black py-6">
              <li className="py-2 -ml-5">
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "text-bgOrangeRed" : " text-bgText navLinkBtn"
                  }
                  to="/OnlineCourses"
                >
                  Online Courses
                </NavLink>
              </li>
              <li className="py-2 -ml-5">
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "text-bgOrangeRed" : "text-bgText navLinkBtn"
                  }
                  to="/RecordedCourses"
                >
                  Recorded Courses
                </NavLink>
              </li>
              <li className="py-2 -ml-5">
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "text-bgOrangeRed" : "text-bgText navLinkBtn"
                  }
                  to="/ContactUs"
                >
                  Contact Us
                </NavLink>
              </li>
              <div className="py-2 -ml-3">
                <NavLink to="/Admission">
                  <button className="outLineBtn">Admission</button>
                </NavLink>
              </div>
            </div>
          )}
        </nav>
      </header>
    </section>
  );
};

export default Navbar;
