import React from "react";
import { Tabs, TabPanel } from "react-tabs";
import { AiFillCheckCircle } from "react-icons/ai";

export default function DescriptionBtnOne({ title }) {
  return (
    <Tabs>
      <TabPanel>
        <div className="py-5 text-slate-400">
          <h1 className="text-xl font-medium">{title}</h1>
          <div className="text-justify font-medium">
            <p className="py-2 text-sm">
              Maximus Ligula Eleifend Id Nisl Quis Interdum. Sed Malesuada
              Tortor Non Turpis Semper Bibendum. Ut Ac Nisi Porta, Malesuada
              Risus Non Viverra Dolor. Vestibulum Ante Ipsum Primis In Faucibus
              Orci Luctus Et Ultrices Posuere Cubilia Curae In Tristique Libero,
              Quis Ultrices Diam Praesent Varius Diam Dui. Class Aptent Taciti
              Sociosqu Ad Litora Torquent Per Conubia Nostra.
            </p>
            <p className="text-sm">
              Maximus Ligula Eleifend Id Nisl Quis Interdum. Sed Malesuada
              Tortor Non Turpis Semper Bibendum. Ut Ac Nisi Porta, Malesuada
              Risus Non Viverra Dolor. Vestibulum Ante Ipsum Primis In Faucibus
              Orci Luctus Et Ultrices Posuere Cubilia Curae In Tristique Libero,
              Quis Ultrices Diam Praesent Varius Diam Dui. Class Aptent Taciti
              Sociosqu Ad Litora Torquent Per Conubia Nostra.
            </p>
            <div>
              <h1 className="mt-4 text-lg">
                What Will I Learn From This Course?
              </h1>
              <p className="pt-2 text-xs">
                Maximus Ligula Eleifend Id Nisl Quis Interdum. Sed Malesuada
                Tortor Non Turpis Semper Bibendum. Ut Ac Nisi Porta, Malesuada
                Risus Non Viverra Dolor. Vestibulum Ante Ipsum Primis In
                Faucibus Orci Luctus Et Ultrices Posuere.
              </p>
              <div
                className="flex flex-col sm:flex-col md:flex-col lg:flex-row lg:items-center gap-2 sm:gap-2 md:gap-2 lg:gap-4 pt-4
               xl:justify-between"
              >
                <div className="">
                  <div className="flex gap-2">
                    <AiFillCheckCircle className="w-4 h-4 lg:w-3 lg:h-3 xl:w-5 xl:h-4" />
                    <p className="text-[9px] sm:text-xs md:text-xs lg:text-xs xl:text-sm">
                      Become a Graphics Designer.
                    </p>
                  </div>
                  <div className="flex gap-2 py-1">
                    <AiFillCheckCircle className="w-4 h-4 lg:w-4 lg:h-3 xl:w-5 xl:h-4" />
                    <p className="text-[9px] sm:text-xs md:text-xs lg:text-xs xl:text-sm">
                      You will be able to add Graphics Designer
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <AiFillCheckCircle className="w-4 h-4 lg:w-3 lg:h-3 xl:w-5 xl:h-4" />
                    <p className="text-[9px] sm:text-xs md:text-xs lg:text-xs xl:text-sm">
                      Become a Digital Marketer.
                    </p>
                  </div>
                </div>
                <div className="">
                  <div className="flex gap-2">
                    <AiFillCheckCircle className="w-4 h-4 lg:w-3 lg:h-3 xl:w-5 xl:h-4" />
                    <p className="text-[9px] sm:text-xs md:text-xs lg:text-xs xl:text-sm">
                      How to use premade UI kits..
                    </p>
                  </div>
                  <div className="flex gap-2 py-1">
                    <AiFillCheckCircle className="w-4 h-4 lg:w-4 lg:h-3 xl:w-5 xl:h-4" />
                    <p className="text-[9px] sm:text-xs md:text-xs lg:text-xs xl:text-sm">
                      Create your first UX brief & persona..
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <AiFillCheckCircle className="w-4 h-4 lg:w-4 lg:h-3 xl:w-5 xl:h-4" />
                    <p className="text-[9px] sm:text-xs md:text-xs lg:text-xs xl:text-sm">
                      Build & test a full website design.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </TabPanel>
    </Tabs>
  );
}
