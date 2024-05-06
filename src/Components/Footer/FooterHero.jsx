import React from "react";
import FootImg from "../../assets/logo.png";
import FootImage from "../../assets/logo2.png";
import { HiMail, HiPhoneIncoming } from "react-icons/hi";
import { FaYoutube, FaFacebook } from "react-icons/fa";

const FooterHero = () => {
  return (
    <section className="pb-20 sm:pb-16 md:pb-16 lg:pb-4 pt-6">
      <div className="container mx-auto">
        <div className="">
          <div className="flex lg:justify-between mx-10 sm:mx-10 lg:mx-0">
            <div>
              {/*===================== Logo ================== */}
              <div className="text-white py-6">
                <img src={FootImg} alt="FootImg" className="w-36" />
              </div>
              {/*===================== Office Location ================== */}
              <div className="text-xs lg:text-sm text-slate-300">
                <p className="text-bgOrangeRed">Head Office</p>
                <p>QC48+8H7, 91/B Khilgaon Chowdhury Para</p>
                <p>1219 DIT Rd, Dhaka 1219</p>
              </div>
              {/*===================== Contact ================== */}
              <div className=" py-6">
                <div>
                  <p className="flex gap-2 text-sm sm:text-sm md:text-sm lg:text-sm text-slate-300">
                    <HiMail className="text-xl lg:text-lg lg:mt-[2px] text-slate-300" />
                    <span>Email:</span>
                    <a href="mailto:proskill.info@gmail.com">
                      proskill.info@gmail.com
                    </a>
                  </p>
                </div>
                <div>
                  <p className="flex gap-2 text-sm sm:text-sm md:text-sm lg:text-sm text-slate-300 py-2">
                    <HiPhoneIncoming className="text-xl sm:text-xl md:text-xl lg:text-lg text-slate-300" />
                    <span>Call Us:</span>
                    <a href="tel:+8801902434895">+8801902434895</a>
                  </p>
                </div>
              </div>
              {/*===================== Logo ================== */}
              <div className="text-bgOrangeRed my-4">
                <p className="flex gap-2">
                  <a href="https://web.facebook.com/proskilltoday">
                    <FaFacebook className="text-xl" />
                  </a>
                  <a href="https://www.youtube.com/@Proskillbd">
                    <FaYoutube className="text-xl" />
                  </a>
                  Proskill
                </p>
              </div>
            </div>
            {/*===================== Logo ================== */}
            <div className="py-6 hidden lg:block">
              <img className="" src={FootImage} alt="FImage" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FooterHero;
