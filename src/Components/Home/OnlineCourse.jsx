import React from "react";
import GraphicsImg from "../../assets/graphics.png";
import DigitalImg from "../../assets/digital-ad.png";
import WebImg from "../../assets/web-ad.png";
import RecordButton from "../record/RecordButton";

const OnlineCourse = () => {
  return (
    <div className="bg-black pb-16">
      <div className="container mx-auto relative">
        {/*===================== Logo Start ================== */}
        <div className="mx-96 sm:mx-96 md:mx-0 lg:mx-36 pt-10">
          <RecordButton name="ONLINE COURSES" />
          {/*===================== Grid Start ================== */}

          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 p-6 lg:pb-4 gap-10 pt-10 md:pt-20 lg:pt-20">
            <div>
              <img
                className="max-w-full min-h-full object-cover rounded-3xl"
                src={GraphicsImg}
                alt="GraphicsImg"
              />
            </div>
            <div>
              <img
                className="max-w-full min-h-full object-cover rounded-3xl"
                src={DigitalImg}
                alt="DigitalImg"
              />
            </div>
            <div>
              <img
                className="max-w-full min-h-full object-cover rounded-3xl"
                src={WebImg}
                alt="WebImg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OnlineCourse;
