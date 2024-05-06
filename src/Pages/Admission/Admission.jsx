import React from "react";
import GraphicsAd from "../../assets/graphics.png";
import DigitalAd from "../../assets/digital-ad.png";
import WebAd from "../../assets/web-ad.png";
import AdmissionForm from "./AdmissionForm";
import Navbar from "../../Components/MainLayout/Navbar";
import OurTeam from "../../Components/Home/OurTeam";

const Admission = () => {
  return (
    <>
      <Navbar />
      <section className="">
        <div className="bg-black">
          <div className="container mx-auto">
            {/*===================== Hero Section ================== */}
            <div className="container px-8 pt-20 lg:px-16 py-20">
              <div className="flex flex-col sm:flex-col md:flex-row lg:flex-row justify-between gap-10 sm:gap-10 lg:gap-32">
                {/*===================== Hero Section Text ================== */}
                <div className="mt-20">
                  <h1 className="text-sm  text-center px-6 lg:text-xl text-white">
                    ONLINE BATCH ADMISSION WITH <br />
                    SPECIAL DISCOUNT!
                  </h1>
                  <p className="text-bgOrangeRed py-3 px-6 text-center text-xs lg:text-sm">
                    3 months course | 38 classes | Lifetime support
                  </p>
                </div>
                {/*===================== Hero Section Image ================== */}
                {/*===================== Grid  Start ================== */}
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-10 lg:gap-6 px-6 mt-6 md:mt-20 lg:mt-12">
                  {/*===================== Grid Design 01 ================== */}
                  <div className="">
                    <img
                      className="w-full h-40 lg:h-52 rounded-2xl"
                      src={GraphicsAd}
                      alt="GraphicsAd"
                    />
                  </div>
                  {/*===================== Grid  Image 02 ================== */}
                  <div className="">
                    <img
                      className="w-full h-40 lg:h-52 rounded-2xl"
                      src={DigitalAd}
                      alt="DigitalAd"
                    />
                  </div>
                  {/*===================== Grid  Image 03 ================== */}
                  <div className="">
                    <img
                      className="w-full h-40 lg:h-52 rounded-2xl"
                      src={WebAd}
                      alt="WebAd"
                    />
                  </div>
                  {/*===================== Grid  Start 03 End================== */}
                </div>
                {/*===================== Grid  Start  End================== */}
              </div>
            </div>
            {/*===================== Hero Section End ================== */}
          </div>
        </div>
        <AdmissionForm />
        <OurTeam />
      </section>
    </>
  );
};

export default Admission;
