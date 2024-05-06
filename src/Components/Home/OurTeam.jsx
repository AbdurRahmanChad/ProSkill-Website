import React from "react";
import GirlImg from "../../assets//girl-img.png";
import GirlImg2 from "../../assets/girl-img.png";
import BoysImg from "../../assets/boys-01.png";
import BoysImg2 from "../../assets/boys-02.png";

const team = [
  {
    id: 1,
    image: GirlImg,
    name: "Abdur Rahman",
    title: "Digital",
    description: "Digital Marketer",
  },
  {
    id: 2,
    image: BoysImg,
    name: "Abdur rahman",
    title: "Web ",
    description: "Web Developer",
  },
  {
    id: 3,
    image: GirlImg2,
    name: "Abdur Rahman",
    title: "Sofware ",
    description: "Software Engineer",
  },
  {
    id: 4,
    image: BoysImg2,
    name: "Abdur Rahman",
    title: "Graphics ",
    description: "Graphics Designer",
  },
];

const OurTeam = () => {
  return (
    <section className="bgOurTeam">
      <div className="container mx-auto py-20">
        {/*===================== Button ================== */}
        <div className="mx-12 sm:mx-12 lg:mx-20">
          <div className="text-center">
            <h2 className="text-2xl sm:text-4xl lg:text-4xl font-bold text-bgText">
              OUR TEAM
            </h2>
            <p className="text-xs sm:text-sm lg:text-lg text-slate-400">
              Buy any Pro-skill you want at affordable prices
            </p>
          </div>
          {/*===================== Grid Design ================== */}
          <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-0 sm:gap-10 md:gap-6">
            {/*===================== Grid 1 ================== */}
            {team.map((item) => {
              return (
                <div key={item}>
                  <div className="rounded-lg my-10 py-4">
                    <div className="h-full">
                      <img
                        className="w-full h-full object-cover rounded-t-xl"
                        src={item.image}
                        alt="images"
                      />
                    </div>
                    <div className="bg-bgOrange rounded-b-lg text-center py-2">
                      <h2 className="text-lg xl:text-lg">{item.name}</h2>
                      <p className="text-sm xl:text-sm">{item.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurTeam;
