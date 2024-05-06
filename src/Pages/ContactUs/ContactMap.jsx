import React from "react";
import {
  FaYoutube,
  FaFacebook,
  FaMapMarkerAlt,
  FaPhoneSquare,
} from "react-icons/fa";
import { HiMail } from "react-icons/hi";
import ContactForm from "./ContactForm";

const ContactMap = () => {
  return (
    <div className=" bg-white">
      <div className=" flex flex-col sm:flex-col md:flex-col lg:flex-row justify-around pt-20 lg:px-10">
        {/*===================== Get in Touch Section Part 01 Start ================== */}
        <div className="px-10 sm:px-10 md:px-10 xl:px-32">
          <h1 className="text-2xl text-slate-500 font-bold">Get in Touch</h1>
          {/*===================== Get in Touch Section Text ================== */}
          <div className="my-6 text-slate-500">
            <p className="text-sm">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
              <br /> diam nonummy nibh euismod tincidunt ut laoreet dolore
              <br />
              magna aliquam erat volutpat. Ut wisi enim ad minim veniam,
              <br /> quis nostrud exerci tation
            </p>
          </div>
          {/*====== Get in Touch Section Address =============== */}
          <div className="">
            <p className="flex gap-1 text-sm text-slate-500">
              <FaMapMarkerAlt className="text-xl mt-2 text-slate-500" />
              QC48+8H7, 91/B Khilgaon Chowdhury Para
              <br /> 1219 DIT Rd, Dhaka 1219
            </p>
          </div>
          {/*===========Get in Touch Section Email =============*/}
          <div className="my-6 text-sm">
            <p className="flex gap-2 my-4 text-slate-500">
              <HiMail className="text-xl text-slate-500" />
              <span>E-mail:</span>
              <a href="mailto:proskill.info@gmail.com">
                proskill.info@gmail.com
              </a>
            </p>
            <p className="flex gap-2 text-sm text-slate-500">
              <FaPhoneSquare className="text-xl text-slate-500" />
              <span>Hotline:</span>
              <a href="tel:+8801902434895">+8801902434895</a>
            </p>
          </div>
          {/*=====================  Section Facebook Youtube ================== */}
          <div className="text-slate-500 my-4">
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
        <ContactForm />
        {/*===================== Get in Touch Section Part 01 End ================== */}
      </div>
    </div>
  );
};

export default ContactMap;
