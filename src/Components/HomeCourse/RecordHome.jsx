import React from "react";
import WomenImg1 from "../../assets/women.png";
import RecordBorder from "../Border/RecordBorder";
import RecordSlider from "../record/RecordSlider";

const courses = [
  {
    id: 1,
    image: WomenImg1,
    title: "Digital Marketing",
    tutorial: 21,
    duration: "1.45",
    price: 1990,
  },
  {
    id: 2,
    image: WomenImg1,
    title: "Web Development",
    tutorial: 21,
    duration: "5.40",
    price: 2190,
  },
  {
    id: 3,
    image: WomenImg1,
    title: "Software Engineering",
    tutorial: 21,
    duration: "6",
    price: 1100,
  },
  {
    id: 4,
    image: WomenImg1,
    title: "Graphics Design",
    tutorial: 21,
    duration: "5",
    price: 1400,
  },
];

const RecordHome = () => {
  return (
    <div className="bg-bgRecord relative">
      <div className="container mx-auto">
        {/*===================== Text Button ================== */}
        <div className="mx-6 sm:mx-6 md:mx-10 lg:mx-16">
          <RecordBorder />
          {/*===================== Grid ================== */}

          <div className="py-16 sm:py-16 md:py-20 lg:py-20">
            <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 px-6 gap-6 sm:gap-10 md:gap-10 lg:gap-6">
              {courses.map((course) => (
                <RecordSlider key={course.id} course={course} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecordHome;
