import React from "react";

const Location = () => {
  return (
    <section className="bg-white">
      <div className="container mx-auto lg:pt-0">
        <div className="mx-10 sm:mx-4 md:mx-4 lg:mx-20">
          <div className="w-full h-screen">
            <h1 className="text-3xl text-center text-slate-500 py-10">
              Google Maps
            </h1>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.7633380870534!2d90.41386257479213!3d23.75581738856934!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b9e2b2521baf%3A0x5c9efb10991933f!2sScholar&#39;s%20IT%20Limited!5e0!3m2!1sen!2sbd!4v1704535272427!5m2!1sen!2sbd"
              width="100%"
              height="60%"
              allowfullscreen=""
              loading="eager"
              referrerpolicy="no-referrer-when-downgrade"
              className=""
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
