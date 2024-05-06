import { useState } from "react";
import CourseDescriptionBtn from "../AllCoursedetails/CourseDescriptionText/CourseDescriptionBtn";
import CourseDescriptionCard from "../AllCoursedetails/CourseDiscriptionCard/CourseDescriptionCard";
const CoursesDescription = () => {
  const [active, setActive] = useState("graphics design");
  return (
    <section>
      <header className="container bg-white px-10 pt-0 lg:px-10">
        <div className="">
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-0 py-10">
            <div>
              <button
                className={`descriptionBtn ${
                  active === "graphics design" ? "group" : ""
                }`}
                onClick={() => {
                  setActive("graphics design");
                }}
              >
                Graphics Design
                <span className="descriptionBtn-span"></span>
              </button>
            </div>
            <div>
              <button
                className={`descriptionBtn ${
                  active === "digital marketing" ? "group" : ""
                }`}
                onClick={() => {
                  setActive("digital marketing");
                }}
              >
                Digital Marketing
                <span className="descriptionBtn-span"></span>
              </button>
            </div>
            <div>
              <button
                className={`descriptionBtn ${
                  active === "web development" ? "group" : ""
                }`}
                onClick={() => {
                  setActive("web development");
                }}
              >
                Web Development
                <span className="descriptionBtn-span"></span>
              </button>
            </div>
          </div>
          <hr className="mb-6" />
        </div>
        {/*===================== Course Description Start ================== */}
        {active === "graphics design" && (
          <div className="flex flex-col items-center lg:flex-row gap-0 lg:gap-6 w-full overflow-hidden">
            {/*===================== Course Description Text ================= */}
            <div className="">
              <CourseDescriptionBtn />
            </div>
            {/*===================== Course Description Curd ================= */}
            <div className="">
              <CourseDescriptionCard name="Graphics Design" />
            </div>
          </div>
        )}
        {/*===================== Course Description Start ================== */}
        {active === "digital marketing" && (
          <div className="flex flex-col items-center lg:flex-row gap-0 lg:gap-2 w-full overflow-hidden">
            {/*===================== Course Description Text ================= */}
            <div className="">
              <CourseDescriptionBtn />
            </div>
            {/*===================== Course Description Curd ================= */}
            <div className="">
              <CourseDescriptionCard name="Digital Marketing" />
            </div>
          </div>
        )}
        {/*===================== Course Description Start ================== */}
        {active === "web development" && (
          <div className="flex flex-col items-center lg:flex-row gap-0 lg:gap-2 w-full overflow-hidden">
            {/*===================== Course Description Text ================= */}
            <div className="">
              <CourseDescriptionBtn />
            </div>
            {/*===================== Course Description Curd ================= */}
            <div className="">
              <CourseDescriptionCard name="Web Development" />
            </div>
          </div>
        )}
      </header>
    </section>
  );
};

export default CoursesDescription;
