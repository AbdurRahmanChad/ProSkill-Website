import React from "react";
import { useState } from "react";
import Swal from "sweetalert2";

const AdmissionForm = () => {
  
  const [forData, setForData] = useState({
    select_course: "",
    name: "",
    email: "",
    phone: "",
    address: "",
    code: "",
  });

  function inputChangeHandler(event) {
    setForData({
      ...forData,
      [event.target.name]: event.target.value,
    });
  }
  function formSumbitHandler(e) {
    e.preventDefault();

    Swal.fire({
      title: "Form Submitted Sucessfully!",
      text: "Do you want to continue",
      icon: "success",
      confirmButtonText: "Cool",
    });
    setForData({
      select_course: "",
      name: "",
      email: "",
      phone: "",
      address: "",
      code: "",
    });

    console.log(forData);
  }

  return (
    <section className="bg-white">
      {/*===================== Contact Section Start ================ */}
      <div className="container mx-auto px-6 sm:px-9 lg:px-52">
        <h1 className="text-3xl text-slate-400 py-6 px-6 text-center font-bold">
          ADMISSION FORM
        </h1>
        <div className="mx-6">
          <p className="text-slate-400">Please Fill Out The Forms Below</p>
          <form className="w-full overflow-hidden" onSubmit={formSumbitHandler}>
            {/*============Course and Mobile Numbar====================== */}
            <div className="flex flex-col sm:flex-col md:flex-col lg:flex-row justify-between items-center sm:gap-0 md:gap-0 lg:gap-10">
              <div className="mb-6 w-full">
                <select
                  name="select_course"
                  id="select_course"
                  onChange={inputChangeHandler}
                  value={forData.select_course}
                  className="block border border-white bg-bgButton focus:outline-none rounded-[5px] p-2.5 w-full text-slate-400"
                  required
                >
                  <option value="0">Select Course</option>
                  <option value="1">Grapics Design</option>
                  <option value="2">Digital Marketing</option>
                  <option value="3">Web Design</option>
                </select>
              </div>
              {/*============ Mobile Number ====================== */}
              <div className="mb-6 w-full">
                <input
                  type="text"
                  placeholder="Mobile Number"
                  onChange={inputChangeHandler}
                  value={forData.phone}
                  name="phone"
                  className="w-full p-2 focus:outline-none rounded-[5px] bg-bgButton"
                  required
                ></input>
              </div>
            </div>

            {/*============ Email  ====================== */}
            <div className="flex flex-col sm:gap-0 md:gap-0 lg:flex-row justify-between items-center lg:gap-10">
              <div className="mb-6 w-full">
                <input
                  type="text"
                  placeholder="Enter Your Name"
                  onChange={inputChangeHandler}
                  value={forData.name}
                  name="name"
                  className="w-full p-2 focus:outline-none rounded-[5px] bg-bgButton"
                  required
                ></input>
              </div>
              {/*============ Email optinal ====================== */}
              <div className="mb-6 w-full">
                <input
                  type="email"
                  placeholder="Email Optinal"
                  onChange={inputChangeHandler}
                  value={forData.email}
                  name="email"
                  className="w-full p-2 focus:outline-none rounded-[5px] bg-bgButton"
                  required
                ></input>
              </div>
            </div>

            {/*=============Present Address ====================== */}
            <div className="flex flex-col sm:gap-0 md:gap-0 lg:flex-row justify-between items-center lg:gap-10 ">
              <div className="mb-6 w-full">
                <input
                  type="text"
                  placeholder="Present Address"
                  onChange={inputChangeHandler}
                  value={forData.address}
                  name="address"
                  className="w-full p-2 focus:outline-none rounded-[5px] bg-bgButton"
                  required
                ></input>
              </div>
              {/*=============Scholarship Code====================== */}
              <div className="mb-6 w-full">
                <input
                  type="text"
                  placeholder="Scholarship Code"
                  onChange={inputChangeHandler}
                  value={forData.code}
                  name="code"
                  className="w-full p-2 focus:outline-none rounded-[5px] bg-bgButton"
                  required
                ></input>
              </div>
            </div>

            {/*================send Message=================== */}
            <button
              type="submit"
              className="min-w-full mt-4 p-2 focus:outline-none rounded-[5px] bg-bgOrangeRed text-white
                     hover:bg-headingTextColor text-center ease-linear duration-150 font-[700]"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
      {/*===================== Contact Section end ================== */}
    </section>
  );
};

export default AdmissionForm;
