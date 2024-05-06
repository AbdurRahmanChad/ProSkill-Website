import React from "react";
import Navbar from "../../Components/MainLayout/Navbar";
import OnlineCourse from "../../Components/Home/OnlineCourse";
import RecordCourseButton from "../AllCoursedetails/Button/RecordCourseButton";
import OnlineCorsImg from "../../assets/Online.png";
import OnlineCourseLayout from "../OnlineCourses/OnlineCourseLayout";
import OurTeam from "../../Components/Home/OurTeam";

const RecordedCourses = () => {
  return (
    <>
      <Navbar />
      <section className="">
        <div className="bg-black">
          <div className="container min-h-full mx-auto">
            <div className="">
              {/*===================== Hero Section Start =================*/}
              <RecordCourseButton
                image={OnlineCorsImg}
                title="Recorded Course Details"
              />
              {/*===================== Hero Section End ================== */}
            </div>
          </div>
        </div>
        <OnlineCourseLayout />
        <OnlineCourse />
        <OurTeam />
        <hr />
      </section>
    </>
  );
};

export default RecordedCourses;
