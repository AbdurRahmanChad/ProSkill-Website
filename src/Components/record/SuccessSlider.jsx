import React from "react";

const SuccessSlider = ({ slider }) => {
  const { video, title, text } = slider;
  return (
    <div>
      <div className="grid p-6 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-6 md:gap-2 lg:gap-6">
        {/*===================== Image =================*/}
        <div className="w-full h-[270px] sm:h-[270px] md:h-80 lg:h-[200px] xl:h-[295px] object-cover rounded-xl">
          <iframe
            width="100%"
            height="100%"
            src={video}
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
        {/*===================== text ================== */}
        <div className="my-auto">
          <div>
            <h1 className="text-white text-left text-3xl lg:text-2xl mb-2 lg:mb-0 font-bold">
              {title}
            </h1>
            <p className="text-white text-justify text-sm md:text-lg lg:text-xs xl:text-lg lg:py-1">
              {text}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessSlider;
