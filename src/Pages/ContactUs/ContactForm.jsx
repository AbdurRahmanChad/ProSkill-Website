import React, { useState } from "react";
import Swal from "sweetalert2";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  function inputChangeHandler(event) {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  }

  function formSubmitHandler(e) {
    e.preventDefault();

    Swal.fire({
      title: "Form Submitted Successful!",
      text: "Do you want to continue",
      icon: "success",
      confirmButtonText: "Cool",
    });
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
    });

    console.log(formData);
  }
  return (
    <div className="pt-14 px-10">
      {/*============ Form Section Start ====================== */}
      <div className="shadow-2xl py-16 px-14 rounded-xl">
        <h1 className="text-slate-500 text-2xl pb-6">Get in Touch</h1>
        <form className="w-full" onSubmit={formSubmitHandler}>
          {/*============ Name ====================== */}
          <div className="mb-4 w-full">
            <input
              type="text"
              placeholder="Enter your Name"
              onChange={inputChangeHandler}
              value={formData.name}
              name="name"
              className="w-full lg:w-96 p-2 focus:outline-none rounded-[5px] bg-bgButton"
              required
            ></input>
          </div>
          {/*============ Mobile Number ====================== */}
          <div className="mb-4 w-full">
            <input
              type="email"
              placeholder="Enter Your Email"
              onChange={inputChangeHandler}
              value={formData.email}
              name="email"
              className="w-full p-2 focus:outline-none rounded-[5px] bg-bgButton"
              required
            ></input>
          </div>
          {/*============ Email ====================== */}
          <div className="mb-4 w-full">
            <input
              type="text"
              placeholder="Mobile Number"
              onChange={inputChangeHandler}
              value={formData.phone}
              name="phone"
              className="w-full p-2 focus:outline-none rounded-[5px] bg-bgButton"
              required
            ></input>
          </div>
          {/*============== Massage ====================== */}
          <div className="mb-4 w-full">
            <input
              type="text"
              placeholder=" Enter Your Massage"
              onChange={inputChangeHandler}
              value={formData.message}
              name="message"
              className="w-full pt-2 pl-1 pb-20 focus:outline-none rounded-[5px] bg-bgButton text-black"
              required
            ></input>
          </div>
          {/*================send Message=================== */}
          <button
            type="submit"
            className="w-full p-2 mt-2 focus:outline-none rounded-[5px] bg-bgOrangeRed text-white
           hover:bg-headingTextColor text-center ease-linear duration-150 font-[700]"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
