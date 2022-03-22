import React, { useCallback } from "react";
import { useDispatch } from "react-redux";
import { setEducation } from "../app/slices/ScrollSlice";
import TimeLine from "./TimeLine";

function Education() {
  const dispatch = useDispatch();
  const ref = useCallback(
    (ref) => {
      if (ref !== null) {
        dispatch(setEducation(ref));
      }
    },
    [dispatch]
  );

  return (
    <section
      ref={ref}
      id="education"
      className="relative h-screen flex items-center p-2 lg:p-6 flex-col"
    >
      <h2 className="text-3xl lg:text-6xl font-bold text-[#11c8fe] p-2 lg:p-8">
        Education
      </h2>
      <div className="grid lg:grid-cols-2 items-center justify-items-center">
        <div className="absolute  h-screen w-full flex text-4xl lg:text-9xl font-bold items-center justify-center opacity-10">
          <div className="">
            <p className="">NextJs</p>
            <p className="dark:text-[#11c8fe]">ReactJs</p>
            <p className="">I18n</p>
            <p className="dark:text-[#11c8fe]">Tailwind Css</p>
          </div>
        </div>
        <TimeLine />
        <div className="space-y-3 p-5 font-medium">
          <p className="">High School: Science</p>
          <p className="">Bachelor: Network and Information System</p>
          <p className="">Master: Information System</p>
        </div>
      </div>
    </section>
  );
}

export default Education;
