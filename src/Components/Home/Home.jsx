import React from "react";
import GraphicsImg from "../../assets/graphics.png";
import DigitalImg from "../../assets/digital-ad.png";
import WebImg from "../../assets/web-ad.png";
import Navbar from "../MainLayout/Navbar";

const images = [
  {
    id: 1,
    image: GraphicsImg,
  },
  {
    id: 2,
    image: DigitalImg,
  },
  {
    id: 3,
    image: WebImg,
  },
];

const Home = () => {
  return (
    <>
      <Navbar />
      <section className="bg-black relative">
        <header className="container mx-auto py-16">
          <div className="mb-20">
            {/*===================== Text Design ================*/}
            <div className="text-center">
              <h2 className="text-sm sm:text-sm md:text-sm lg:text-xl text-white pt-16">
                ONLINE BATCH ADMISSION WITH <br />
                SPECIAL DISCOUNT!
              </h2>
              <p className="text-bgOrangeRed p-12 py-2 text-xs">
                3 months course | 38 classes | Lifetime support
              </p>
            </div>
            {/*===================== Grid Design ================*/}
            <div
              className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-10 mx-0 sm:mx-0 md:mx-0 lg:mx-56 py-12 lg:py-0 lg:pt-16 p-12 sm:p-0
             mt-6 sm:mt-6 md:mt-6 lg:mt-0"
            >
              {images.map((item) => {
                return (
                  <div key={item} className="rounded-xl md:rounded-sm ">
                    <div className="">
                      <img
                        className="w-full h-full object-cover rounded-3xl"
                        src={item.image}
                        alt="images"
                      />
                    </div>
                    {/*================Text=================================*/}
                    <div>
                      <p className="text-white text-center">{item.title}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </header>
      </section>
    </>
  );
};

export default Home;
