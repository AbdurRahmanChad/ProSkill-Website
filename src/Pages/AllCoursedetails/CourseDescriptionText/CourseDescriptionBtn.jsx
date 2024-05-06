import { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import DescriptionBtnOne from "./DescriptionBtnOne";
import DescriptionBtnTwo from "./DescriptionBtnTwo";
import DescriptionBtnThere from "./DescriptionBtnThere";

const CourseDescriptionBtn = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  function tabsHandler(index) {
    setActiveIndex(index);
  }
  return (
    <div>
      <div className=" min-h-[580px] w-full h-auto bg-white">
        <Tabs onSelect={tabsHandler}>
          <TabList className="cursor-pointer grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-10 text-center">
            <Tab
              className={`${
                activeIndex === 0 ? "onlineCourseBtn" : "onlineCourseBtnTwo"
              } max-w-xs`}
            >
              Overview
            </Tab>
            <Tab
              className={`${
                activeIndex === 1 ? "onlineCourseBtn" : "onlineCourseBtnTwo"
              } max-w-xs`}
            >
              Curriculum
            </Tab>
            <Tab
              className={`${
                activeIndex === 2 ? "onlineCourseBtn" : "onlineCourseBtnTwo"
              } max-w-xs`}
            >
              Instructor
            </Tab>
          </TabList>
          {/*===================== TabPenal Part 01 ================== */}
          <TabPanel>
            <DescriptionBtnOne title="Course Description" />
          </TabPanel>
          {/*===================== TabPenal Part 02 ================== */}
          <TabPanel>
            <DescriptionBtnTwo title="Course Curriculum" />
          </TabPanel>
          {/*===================== TabPenal Part 03 ================== */}
          <TabPanel>
            <DescriptionBtnThere title="Instructor  Description" />
          </TabPanel>
          {/*===================== TabPenal Part 04 ================== */}
        </Tabs>
      </div>
    </div>
  );
};

export default CourseDescriptionBtn;
