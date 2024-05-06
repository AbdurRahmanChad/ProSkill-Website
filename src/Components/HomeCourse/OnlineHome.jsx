import React from "react";
import { NavLink } from "react-router-dom";
import GraphicsImg from "../../assets/graphics.png";
import OnlineBorder from "../Border/OnlineBorder";

const images = [
  {
    id: 1,
    Image: GraphicsImg,
  },
  {
    id: 1,
    Image: GraphicsImg,
  },
  {
    id: 1,
    Image: GraphicsImg,
  },
];
const OnlineHome = () => {
  return (
    <div className="bg-black pb-16">
      <div className="container mx-auto relative">
        {/*===================== Logo Start ================== */}
        <div className="mx-6 sm:mx-6 md:mx-20 lg:mx-[195px] pt-10">
          <OnlineBorder />
          {/*===================== Grid Start ================== */}
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 p-6 lg:pb-4 gap-10 pt-10 md:pt-20 lg:pt-20">
            {images.map((item) => {
              return (
                <div key={item}>
                  <div>
                    <NavLink to="/admission">
                      <img
                        className="max-w-full min-h-full object-cover rounded-3xl"
                        src={item.Image}
                        alt="images"
                      />
                    </NavLink>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OnlineHome;
