import { useState } from "react";
import { AiOutlineClockCircle, AiOutlineFileExclamation } from "react-icons/ai";
import { HiX } from "react-icons/hi";
import { BsDashLg } from "react-icons/bs";
const video_ = `<iframe
    id="youtubeFrame"
    src="https://www.youtube.com/embed/9umUzJHsCSY?si=wl_aYGf-pEfIIsqU"
    title="YouTube video player"
    frameBorder="0"
    class="w-full lg:min-w-[50%] xl:min-w-[55%] min-h-[210px] lg:min-h-[440px] xl:min-h-[450px] max-h-[70vh]"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
    allowFullScreen
  ></iframe>`;

export default function CoursesVideo({ course }) {
  const { name, title, duration, video } = course;
  const [faq, setFaq] = useState(false);
  // youtube video setup
  const pauseButton = () => {
    var youtubeFrame = document.getElementById("youtubeFrame");
    var container = document.getElementById("containerVideoFrame");
    // youtubeFrame.remove();
    container.innerHTML = video_;

    // Check if the YouTube iframe API is available
    if (
      youtubeFrame &&
      typeof youtubeFrame.contentWindow.postMessage === "function"
    ) {
      // Use postMessage to send a command to the iframe
      youtubeFrame.contentWindow.postMessage(
        '{"event":"command","func":"pauseVideo","args":""}',
        "*"
      );
    }
  };

  return (
    <div className="border-2 border-t-0">
      <div
        onClick={() => setFaq(!faq)}
        className="max-w-full min-h-full bg-white text-sm sm:text-sm md:text-sm lg:text-xl py-4
         flex flex-col sm:flex-row lg:flex-row sm:gap-20 md:gap-0 lg:gap-12 xl:gap-52 px-6 lg:px-2 rounded-lg"
      >
        <div className="flex gap-2">
          <AiOutlineFileExclamation className="mt-1" />
          <h1>{name}</h1>
        </div>
        <p>{title}</p>
        <div className="flex gap-2">
          <AiOutlineClockCircle className="mt-1" />
          <p>{duration}</p>
        </div>
      </div>

      <div
        className={`w-full fixed top-0 left-0 min-h-screen z-50  p-2 ring-1 ring-slate-500 ${
          faq ? "" : "hidden"
        }`}
      >
        <div className="w-[70%] lg:w-full pt-[212px] mx-auto xl:ml-20">
          <div
            className="w-full h-64 lg:max-w-[50%] lg:min-h-[440px] lg:ml-20 xl:max-w-[55%] xl:min-h-[450px] xl:ml-20
             bg-bgOrangeRed mx-auto opacity-100 text-slate-100
             flex items-center justify-center relative rounded-md"
            onClick={() => setFaq(!faq)}
          >
            <div className="absolute text-xl flex justify-end gap-2 w-full top-0 mt-2 mr-2">
              <BsDashLg />
              <HiX onClick={pauseButton} />
            </div>
            <div className="w-[99.9%] lg:pt-7">
              <div
                className="w-full min-h-[210px] lg:!min-w-[50%] lg:min-h-[350px] max-h-[70vh] mt-[30px]"
                id="containerVideoFrame"
                dangerouslySetInnerHTML={{
                  __html: video_,
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
