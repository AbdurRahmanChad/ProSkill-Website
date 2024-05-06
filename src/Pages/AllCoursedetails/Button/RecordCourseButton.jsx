import React from "react";

export default function RecordCourseButton({ image, title }) {
  return (
    <div className="w-full min-h-full mx-auto pt-32 lg:px-4">
      <div className="flex flex-col sm:flex-col md:flex-row lg:flex-row gap-0 lg:gap-20 items-center">
        {/*===================== Hero Section Text ================== */}
        <div className="text-center lg:pl-2 w-full lg:-mt-20">
          <h1 className="text-xl sm:text-xl md:text-xl lg:text-xl lg:text-left text-white">
            {title}
          </h1>
        </div>
        {/*===================== Hero Section Image ================== */}
        <div className="w-full">
          <img
            className="w-2/4 mx-auto pt-10 lg:mr-20"
            src={image}
            alt={title}
          />
        </div>
      </div>
    </div>
  );
}
