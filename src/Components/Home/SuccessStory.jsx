import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SuccessSlider from "../record/SuccessSlider";
const sliders = [
  {
    id: 1,
    video: "https://www.youtube.com/embed/28P0gx08wHk?si=47TzJX20RZ2h5LIA",
    title: "Success Story",
    text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elitsed diam nonummy nibh euismod tincidunt ut laoreetdoloremagna aliquam erat volutpat. Ut wisi enim ad minimveniam,quis nostrud exerci tation Lorem ipsum dolor sitamet,consectetuer adipiscing elit, sed diam nonummy nibheuismodtincidunt ut laoreet dolore magna aliquam eratvolutpat. Utwisi enim ad minim",
  },
  {
    id: 2,
    video: "https://www.youtube.com/embed/rukG0xhx-7Q?si=reV2EqpSaSGyCO5Q",
    title: "Success Story",
    text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elitsed diam nonummy nibh euismod tincidunt ut laoreetdoloremagna aliquam erat volutpat. Ut wisi enim ad minimveniam,quis nostrud exerci tation Lorem ipsum dolor sitamet,consectetuer adipiscing elit, sed diam nonummy nibheuismodtincidunt ut laoreet dolore magna aliquam eratvolutpat. Utwisi enim ad minim",
  },
  {
    id: 3,
    video: "https://www.youtube.com/embed/oC6gGDxiJ4M?si=1L0poA1d49lxxyTT",
    title: "Success Story",
    text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elitsed diam nonummy nibh euismod tincidunt ut laoreetdoloremagna aliquam erat volutpat. Ut wisi enim ad minimveniam,quis nostrud exerci tation Lorem ipsum dolor sitamet,consectetuer adipiscing elit, sed diam nonummy nibheuismodtincidunt ut laoreet dolore magna aliquam eratvolutpat. Utwisi enim ad minim",
  },
  {
    id: 4,
    video: "https://www.youtube.com/embed/kLsBsc7L6oQ?si=RvhduXYQIaAa9D-0",
    title: "Success Story",
    text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elitsed diam nonummy nibh euismod tincidunt ut laoreetdoloremagna aliquam erat volutpat. Ut wisi enim ad minimveniam,quis nostrud exerci tation Lorem ipsum dolor sitamet,consectetuer adipiscing elit, sed diam nonummy nibheuismodtincidunt ut laoreet dolore magna aliquam eratvolutpat. Utwisi enim ad minim",
  },
  {
    id: 5,
    video: "https://www.youtube.com/embed/y9_4R9y6F00?si=ejMFftO6BnsYmgRY",
    title: "Success Story",
    text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elitsed diam nonummy nibh euismod tincidunt ut laoreetdoloremagna aliquam erat volutpat. Ut wisi enim ad minimveniam,quis nostrud exerci tation Lorem ipsum dolor sitamet,consectetuer adipiscing elit, sed diam nonummy nibheuismodtincidunt ut laoreet dolore magna aliquam eratvolutpat. Utwisi enim ad minim",
  },
];

const SuccessStory = () => {
  let settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
  };
  return (
    <div className="">
      <div className="bgStory">
        <div className="container mx-auto py-16">
          <div className="mx-6 sm:mx-6 lg:mx-16">
            <Slider {...settings}>
              {/*===================== image+ text ================== */}
              {sliders.map((slider) => (
                <SuccessSlider key={slider.id} slider={slider} />
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessStory;
