import React from "react";
import TimeLine from "./TimeLine";

function Education() {
  return (
    <section
      id="education"
      className="grid lg:grid-cols-2 items-center justify-items-center w-full h-screen"
    >
      <TimeLine />
      <div className="space-y-3 p-5 font-medium">
        <p className="">High School: Science</p>
        <p className="">Bachelor: Network and Information System</p>
        <p className="">Master: Information System</p>
      </div>
    </section>
  );
}

export default Education;
