import React from "react";
import ContactImag from "../../assets/contact-img.png";

export default function ContactButton({ title }) {
  return (
    <div className="w-full min-h-full mx-auto pt-16 sm:pt-10 md:pt-32 lg:pt-0 md:pl-8 lg:pl-16">
      <div className="flex flex-col sm:flex-col md:flex-row lg:flex-row gap-8 sm:gap-8 md:gap-8 items-center w-full">
        {/*===================== Hero Section Text ================== */}
        <div
          className="w-full pt-10 sm:pt-10 md:pt-0 lg:pt-0 text-center 
         md:text-justify lg:text-left"
        >
          <h1 className="text-2xl text-white">{title}</h1>
        </div>
        {/*===================== Hero Section Image ================== */}
        <div className="w-full pt-0 lg:pt-48">
          <img className="w-2/3 mx-auto" src={ContactImag} alt={title} />
        </div>
      </div>
    </div>
  );
}
