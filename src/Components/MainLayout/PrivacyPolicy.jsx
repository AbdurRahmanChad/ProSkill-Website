import React from "react";
import Navbar from "./Navbar";
import RecordCourseButton from "../../Pages/AllCoursedetails/Button/RecordCourseButton";
import { BsCircleFill } from "react-icons/bs";
import PrivacyImg from "../../assets/privacy.jpg";

const PrivacyPolicy = () => {
  return (
    <>
      <Navbar />
      <div className="bg-black">
        <div className="container mx-auto">
          <RecordCourseButton title="Terma & Condition" image={PrivacyImg} />
        </div>
        <div className="">
          <div className="mx-w-full min-h-full bg-white p-10">
            <div className="flex flex-col sm:flex-col md:flex-row lg:flex-row justify-between items-center">
              {/*=========================================================*/}
              <div className="lg:ml-24 lg:mr-8">
                <div className="flex gap-4 py-2">
                  <BsCircleFill className="w-3 h-3 mt-2" />
                  <p>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                    sed diam nonummy..
                  </p>
                </div>
                <div className="flex gap-4 py-2">
                  <BsCircleFill className="w-3 h-3 mt-2" />
                  <p>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                    sed diam nonummy..
                  </p>
                </div>
                <div className="flex gap-4 py-2">
                  <BsCircleFill className="w-3 h-3 mt-2" />
                  <p>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                    sed diam nonummy..
                  </p>
                </div>
                <div className="flex gap-4 py-2">
                  <BsCircleFill className="w-3 h-3 mt-2" />
                  <p>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                    sed diam nonummy..
                  </p>
                </div>
                <div className="flex gap-4 py-2">
                  <BsCircleFill className="w-3 h-3 mt-2" />
                  <p>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                    sed diam nonummy..
                  </p>
                </div>
              </div>
              {/*=========================================================*/}
              <div>
                <div className="flex gap-4 py-2">
                  <BsCircleFill className="w-3 h-3 mt-2" />
                  <p>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                    sed diam nonummy..
                  </p>
                </div>
                <div className="flex gap-4 py-2">
                  <BsCircleFill className="w-3 h-3 mt-2" />
                  <p>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                    sed diam nonummy..
                  </p>
                </div>
                <div className="flex gap-4 py-2">
                  <BsCircleFill className="w-3 h-3 mt-2" />
                  <p>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                    sed diam nonummy..
                  </p>
                </div>
                <div className="flex gap-4 py-2">
                  <BsCircleFill className="w-3 h-3 mt-2" />
                  <p>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                    sed diam nonummy..
                  </p>
                </div>
                <div className="flex gap-4 py-2">
                  <BsCircleFill className="w-3 h-3 mt-2" />
                  <p>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                    sed diam nonummy..
                  </p>
                </div>
              </div>
              {/*=========================================================*/}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PrivacyPolicy;
