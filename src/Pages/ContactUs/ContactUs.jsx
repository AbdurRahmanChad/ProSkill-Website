import React from "react";
import Navbar from "../../Components/MainLayout/Navbar";
import ContactButton from "./ContactButton";

import Location from "./Location";
import ContactMap from "./ContactMap";

const ContactUs = () => {
  return (
    <>
      <Navbar />
      <div className="bg-black">
        <div className="container mx-auto">
          {/*===================== Hero Section ================== */}
          <ContactButton title="Contact Us" />
        </div>
        {/*===================== Contact Map Contact Form =======*/}
        <ContactMap />
        {/*===================== Location Google Maps End =======*/}
        <Location />
      </div>
    </>
  );
};

export default ContactUs;
