import React, { useEffect, useState } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

function ProgressBar({ value, text }) {
  const [percentage, setPercentage] = useState(0);
  useEffect(() => {
    setTimeout(() => {
      setPercentage(value);
    }, 500);
  });

  return (
    <CircularProgressbar
      value={percentage}
      text={text}
      styles={buildStyles({
        // Rotation of path and trail, in number of turns (0-1)
        rotation: 0.25,

        // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
        strokeLinecap: "round",

        // Text size
        textSize: "16px",

        // How long animation takes to go from one percentage to another, in seconds
        pathTransitionDuration: 1,

        // Can specify path transition in more detail, or remove it entirely
        // pathTransition: 'none',

        // Colors
        pathColor: `#11c8fe`,
        textColor: "#6b7280",
        trailColor: "rgba(62, 152, 199, 0)",
        backgroundColor: "#3e98c7",
      })}
    />
  );
}

export default ProgressBar;
