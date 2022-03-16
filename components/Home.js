import React from "react";
import { useEffect, useState } from "react";
import Image from "next/image";
import { useTranslation } from "next-i18next";
import Typewriter from "typewriter-effect";

function Home() {
  const { t } = useTranslation("common");
  const [title, setTitle] = useState(true);

  return (
    <section
      id="home"
      className="flex flex-col lg:grid grid-cols-2 grid-rows-2 gap-6 px-6 lg:p-20 justify-items-center items-center lg:h-screen"
    >
      <div className="">
        <p className="code">{"<Typewriter"}</p>
        <div className="text-xl lg:text-6xl dark:text-[#11c8fe] font-semibold font-mono flex flex-col items-center">
          {/* <Typewriter
            onInit={(typewriter) => {
              typewriter
                .typeString(t("hello"))
                .start()
                .typeString("<p></p>")
                .start()
                .typeString(t("myName"))
                .start()
                .callFunction(() => {
                  setTitle(false);
                });
            }}
          /> */}
        </div>
        <div
          className={`${
            title && "hidden"
          } pt-6 text-lg lg:text-3xl font-medium `}
        >
          <p className="">{t("fullstack")}</p>
          <p className="">{t("student")}</p>
        </div>
      </div>
      <div className="">
        <p className="code">{"<Image"}</p>
        <div className="relative w-48 h-48 lg:w-64 lg:h-64">
          <Image
            className=" border rounded-lg shadow-lg"
            src="/yoyo.jpg"
            layout="fill"
            objectFit="contain"
            alt="image"
          />
        </div>
      </div>
      <div className=" lg:px-60 lg:py-20 col-span-2 self-stretch justify-self-stretch">
        <p className="code">{"<h3"}</p>
        <h3 className="lg:text-3xl text-lg lg:mb-6 font-bold dark:text-[#11c8fe] border-b-4 pb-2 w-fit border-[#11c8fe] shadow-sm">
          {t("about")}
        </h3>
        <p className="lg:text-xl font-medium">{t("aboutContent")}</p>
      </div>
    </section>
  );
}

export default Home;
