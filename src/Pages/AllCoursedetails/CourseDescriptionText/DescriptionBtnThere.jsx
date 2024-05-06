import React from "react";
import { Tabs, TabPanel } from "react-tabs";
import Profile from "../../../assets/profile.jpg";
import { BiLogoFacebook } from "react-icons/bi";
import {
  AiOutlineTwitter,
  AiOutlineInstagram,
  AiOutlineFileExclamation,
  AiOutlineUserAdd,
} from "react-icons/ai";

export default function DescriptionBtnThere({ title }) {
  return (
    <Tabs>
      <TabPanel>
        <div className=" w-full py-5 lg:py-8 text-slate-500">
          <h1 className="text-xl sm:text-xl md:text-xl lg:text-xl  font-bold">
            {title}
          </h1>
          <div className="text-justify text-slate-400 font-medium">
            <p className="py-2 text-sm">
              Maximus Ligula Eleifend Id Nisl Quis Interdum. Sed Malesuada
              Tortor Non Turpis Semper Bibendum. Ut Ac Nisi Porta, Malesuada
              Risus Non Viverra Dolor. Vestibulum Ante Ipsum Primis In Faucibus
              Orci Luctus Et Ultrices Posuere.
            </p>
          </div>
          {/*=============================Image text Start===================*/}
          <div className="border rounded-2xl mt-4">
            <div className="flex flex-col md:flex-row lg:flex-row items-center justify-center md:justify-between gap-0">
              <div className="w-full p-8 lg:p-3 flex flex-col items-center justify-center">
                <img
                  className="!min-w-[140px] !min-h-[140px] object-cover rounded-full"
                  src={Profile}
                  alt="Profile"
                />
              </div>
              {/*============================= text Start====================*/}
              <div className="text-justify">
                <div className="py-6">
                  <h1 className="text-2xl text-center sm:text-center md:text-left lg:text-left pl-0 sm:pl-0 md:pl-2 lg:pl-2">
                    Md. Abdur Rahman
                  </h1>
                  <div
                    className="flex flex-col sm:flex-col md:flex-row lg:flex-row items-center gap-0 sm:gap-0 md:gap-4 lg:gap-4
                   sm:pl-0 md:pl-2 lg:pl-2 pt-2"
                  >
                    <p>Business</p>
                    <div className="flex gap-2">
                      <AiOutlineFileExclamation className="mt-1" />
                      <p className=""> 1 Course</p>
                    </div>
                    <div className="flex gap-2">
                      <AiOutlineUserAdd className="mt-1" />
                      <p>4 Students</p>
                    </div>
                  </div>
                  <p className="text-sm  pt-3 px-2 lg:pr-2">
                    Maximus ligula eleifend id nisl quis interdum. Sed malesuada
                    tortor non turpis semper ac nisi porta, malesuada risus awra
                    nondolor. Vestibulum ante ipsum primis in faucibus orci
                    luctus et curae in tristique libero.Maximus ligula eleifend
                    id nisl quis interdum. Sed malesuada tortor non turpis
                    semper bibendumt ac nisi porta, malesuada risus awra
                    nondolor. Vestibulum ante ipsum primis in faucibus orci
                    luctus et ultrices posuere cubilia curae in tristique
                    libero.
                  </p>
                  <div className="flex justify-start">
                    <BiLogoFacebook className="w-6 h-6 p-1 m-2 bg-slate-300 rounded-full" />
                    <AiOutlineTwitter className="w-6 h-6 p-1 m-2 bg-slate-300 rounded-full" />
                    <AiOutlineInstagram className="w-6 h-6 p-1 m-2 bg-slate-300 rounded-full" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*=============================Image text End===================*/}
        </div>
      </TabPanel>
    </Tabs>
  );
}
