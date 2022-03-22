import React, { useCallback } from "react";
import "react-circular-progressbar/dist/styles.css";
import { useDispatch } from "react-redux";
import { setSkills } from "../app/slices/ScrollSlice";
import ProgressBar from "./ProgressBar";

function Skills() {
  const dispatch = useDispatch();
  const ref = useCallback(
    (ref) => {
      if (ref !== null) {
        dispatch(setSkills(ref));
      }
    },
    [dispatch]
  );

  return (
    <section
      ref={ref}
      className="h-screen items-center flex justify-center flex-col p-2"
    >
      <h2 className="text-3xl lg:text-6xl items-start font-bold text-[#11c8fe] p-2 lg:p-8">
        Skills
      </h2>
      <div className="flex flex-col justify-center lg:grid grid-cols-2 gap-4 lg:gap-8">
        <div className="col-span-1">
          <h3 className="place-self-start lg:text-3xl text-lg font-bold dark:text-gray-500">
            Programing Languages
          </h3>
          <div className=" flex space-x-4 justify-center flex-wrap ">
            <div className="progress">
              <ProgressBar value={90} text={`Js`} />
            </div>
            <div className="progress">
              <ProgressBar value={80} text={`Java`} />
            </div>
            <div className="progress">
              <ProgressBar value={85} text={`Kotlin`} />
            </div>
            <div className="progress">
              <ProgressBar value={30} text={`Others`} />
            </div>
          </div>
        </div>
        <div className="">
          <h3 className="lg:text-3xl text-lg font-bold dark:text-gray-500">
            Languages
          </h3>
          <div className="flex space-x-4 justify-center">
            <div className="progress">
              <ProgressBar value={95} text={`Arabic`} />
            </div>
            <div className="progress">
              <ProgressBar value={60} text={`English`} />
            </div>
            <div className="progress">
              <ProgressBar value={20} text={`French`} />
            </div>
          </div>
        </div>

        <div className="col-span-1 w-full">
          <h3 className="lg:text-3xl text-lg lg:mb-6 font-bold dark:text-gray-500">
            Frameworks And Platforms
          </h3>
          <div className=" flex space-x-4 flex-wrap justify-center">
            <div className="progress">
              <ProgressBar value={90} text={`React`} />
            </div>
            <div className="progress">
              <ProgressBar value={70} text={`Firebase`} />
            </div>
            <div className="progress">
              <ProgressBar value={85} text={`AndroidStd`} />
            </div>
            <div className="progress">
              <ProgressBar value={30} text={`Laravel`} />
            </div>
          </div>
        </div>
        <div className="w-full">
          <h3 className="lg:text-3xl text-lg lg:mb-6 font-bold dark:text-gray-500">
            Operating System and Softwares
          </h3>
          <div className=" flex space-x-4 justify-center">
            <div className="progress">
              <ProgressBar value={70} text={`Linux OS`} />
            </div>
            <div className="progress">
              <ProgressBar value={50} text={`Office`} />
            </div>
            <div className="progress">
              <ProgressBar value={50} text={`GIMP`} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
