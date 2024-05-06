import React from "react";

const RecordSlider = ({ course }) => {
  const { image, title, tutorial, duration, price } = course;
  return (
    <div className="w-full">
      <div className="relative">
        <img
          className="w-full h-full object-cover rounded-t-3xl"
          src={image}
          alt={title}
        />
      </div>
      {/*===================== Button + Text Div ================== */}
      <div className="text-center bg-black text-white rounded-b-3xl relative">
        {/*===================== Button ================== */}
        <div className="absolute left-0 w-full flex flex-col items-center justify-center -top-3">
          <button className="buyNowBtn">BUY NOW</button>
        </div>
        {/*===================== Text ================== */}
        <div className="py-6">
          <p className="text-sm lg:text-xs">{title}</p>
          <p className="text-xs text-slate-300">
            {tutorial} Classes | {duration} Hours
          </p>
          <button className="bg-bgSilver px-3 mt-2 rounded-full text-sm text-black font-bold">
            Price: {price}
          </button>
        </div>
      </div>
    </div>
  );
};

export default RecordSlider;
