import React from "react";
import RecordButton from "../record/RecordButton";
import GirlImg from "../../assets/women.png";
import RecordSlider from "../record/RecordSlider";

const courses = [
  {
    id: 1,
    image: GirlImg,
    title: "Digital Marketing",
    tutorial: 21,
    duration: "1.45",
    price: 1990,
  },
  {
    id: 2,
    image: GirlImg,
    title: "Web Development",
    tutorial: 21,
    duration: "5.40",
    price: 2190,
  },
  {
    id: 3,
    image: GirlImg,
    title: "Software Engineering",
    tutorial: 21,
    duration: "6",
    price: 1100,
  },
  {
    id: 4,
    image: GirlImg,
    title: "Graphics Design",
    tutorial: 21,
    duration: "5",
    price: 1400,
  },
];

const Record = () => {
  return (
    <div className="bg-bgRecord relative">
      <div className="container mx-auto">
        {/*===================== Text Button ================== */}
        <div className="">
          <RecordButton name="RECORDED COURSES" />
          {/*===================== Grid ================== */}
          <div className="py-16 sm:py-16 md:py-20 lg:py-20 mx-6">
            <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-10 md:gap-10 lg:gap-6">
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

export default Record;
