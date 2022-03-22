import Image from "next/image";
import React from "react";

function Project({ link, image, title, description, tools }) {
  return (
    <div className="bg-[#d1d5db] dark:bg-[#1f29379c] lg:w-96 w-72 rounded-md">
      <a href={link} target="_blank" rel="noreferrer" className="">
        <div className="bg-white rounded-md relative w-full h-48 lg:h-60 ">
          <Image
            className="rounded-t-md hover:opacity-70 cursor-pointer"
            layout="fill"
            src={image}
            alt="image"
            objectFit="cover"
          />
        </div>
      </a>
      <div className="p-2 space-y-2 mt-auto">
        <p className="text-sm font-medium text-blue-600 ">{tools}</p>
        <h3 className="">{title}</h3>
        <p className="">{description}</p>
      </div>
    </div>
  );
}

export default Project;
