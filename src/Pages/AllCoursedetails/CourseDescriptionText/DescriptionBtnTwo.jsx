import React from "react";
import { Tabs, TabPanel } from "react-tabs";
import CoursesVideo from "./CourseVideo";

const courses = [
  {
    id: 1,
    name: "Lecture 1.1",
    title: "Course Installation 1",
    duration: "10.9m",
  },
  {
    id: 2,
    name: "Lecture 1.1",
    title: "Course Installation 1",
    duration: "10.9m",
  },
  {
    id: 3,
    name: "Lecture 1.1",
    title: "Course Installation 1",
    duration: "10.9m",
  },
];

export default function DescriptionBtnTwo({ title }) {
  return (
    <Tabs>
      <TabPanel>
        <div className="w-full py-5 text-slate-500">
          <h1 className="text-xl py-2 font-bold">{title}</h1>
          <div className="text-justify text-slate-400 font-medium">
            <p className="py-4 text-lg">
              Maximus Ligula Eleifend Id Nisl Quis Interdum. Sed Malesuada
              Tortor Non Turpis Semper Bibendum. Ut Ac Nisi Porta, Malesuada
              Risus Non Viverra Dolor. Vestibulum Ante Ipsum Primis In Faucibus
              Orci Luctus Et Ultrices Posuere.
            </p>
          </div>
          {/*==========================================================*/}
          <div className="">
            {/*============================Heading============================*/}
            <div className="border-2 rounded-2xl">
              <div
                className="max-w-full min-h-full lg:min-h-14 bg-bgOrangeRed text-white lg:text-xl py-4
               flex justify-between px-6 lg:px-4 rounded-t-xl"
              >
                <h1>Introduction</h1>
                <p>0/3</p>
              </div>
            </div>
            {/*============================01============================*/}
            <div className="">
              {courses.map((course) => (
                <CoursesVideo key={course.id} course={course} />
              ))}
            </div>
          </div>
        </div>
      </TabPanel>
    </Tabs>
  );
}
