import React from "react";
import Navbar from "../../Components/MainLayout/Navbar";
import RecordCourseButton from "../AllCoursedetails/Button/RecordCourseButton";
import OnlineCorsImg from "../../assets/Online.png";
import OnlineCourseLayout from "../OnlineCourses/OnlineCourseLayout";
import Record from "../../Components/Home/Record";
import OurTeam from "../../Components/Home/OurTeam";

const OnlineCourses = () => {
  return (
    <>
      <Navbar />
      <section className="">
        <div className="bg-black">
          <div className="container mx-auto">
            <div className="">
              {/*===================== Hero Section ================== */}
              <RecordCourseButton
                image={OnlineCorsImg}
                title="Online Course Details"
              />
              {/*===================== Hero Section End ===============*/}
            </div>
          </div>
        </div>
        <OnlineCourseLayout />
        <Record />
        <OurTeam />
      </section>
    </>
  );
};

export default OnlineCourses;
