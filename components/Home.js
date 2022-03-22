import React, { useCallback, useRef } from "react";
import { useEffect, useState } from "react";
import Image from "next/image";
import { useTranslation } from "next-i18next";
import Typewriter from "typewriter-effect";
import Terminal from "./Terminal";
import { useDispatch } from "react-redux";
import { setHome } from "../app/slices/ScrollSlice";
import { PhoneIcon, MailIcon } from "@heroicons/react/solid";
import { Tooltip } from "@mui/material";

function Home() {
  const { t } = useTranslation("common");
  const [title, setTitle] = useState(true);
  const dispatch = useDispatch();
  const ref = useCallback(
    (ref) => {
      if (ref !== null) {
        dispatch(setHome(ref));
      }
    },
    [dispatch]
  );

  return (
    <section
      id="home"
      ref={ref}
      className="flex flex-col lg:grid grid-cols-2 grid-rows-2 gap-6 p-4 lg:p-20 justify-items-center items-center h-screen min-h-[50rem]"
    >
      <div className="">
        <div className="text-xl lg:text-6xl dark:text-[#11c8fe] font-semibold font-mono flex flex-col items-center">
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .typeString(t("hello"))
                .typeString("<p></p>")
                .typeString(t("myName"))
                .callFunction(() => {
                  setTitle(false);
                })
                .start();
            }}
          />
        </div>
        <div className={`pt-6 text-lg lg:text-3xl font-medium`}>
          <p className="">{t("fullstack")}</p>
          <p className="">{t("student")}</p>
        </div>
      </div>
      <div className="flex flex-col items-center">
        <div className="relative mb-2 w-52 h-52 lg:w-72 lg:h-72">
          <Image
            className=" border rounded-lg shadow-lg"
            src="/yoyo.jpg"
            layout="fill"
            objectFit="contain"
            alt="image"
          />
        </div>
        <div className="font-medium">
          <Tooltip
            disableFocusListener
            disableTouchListener
            title="Click To Copy"
          >
            <p
              className="flex items-center text-lg cursor-pointer"
              onClick={() => {
                navigator.clipboard.writeText("ramdaneyacine31@gmail.com");
              }}
            >
              <MailIcon className="mr-2" height="22" />{" "}
              ramdaneyacine31@gmail.com
            </p>
          </Tooltip>
          <Tooltip disableFocusListener disableTouchListener title="Call Now">
            <a href={"tel:+213556075290"} className="text-lg flex items-center">
              <PhoneIcon height="22" className="mr-2" />
              +213556075290
            </a>
          </Tooltip>
        </div>
      </div>
      <div className=" lg:px-60 lg:py-20 col-span-2 self-stretch justify-self-stretch">
        <Terminal />
        <h3 className="lg:text-3xl text-lg lg:mb-6 font-bold dark:text-[#11c8fe] border-b-4 pb-2 w-fit border-[#11c8fe] shadow-sm">
          {t("about")}
        </h3>
        <p className="lg:text-xl font-medium">{t("aboutContent")}</p>
      </div>
    </section>
  );
}

export default Home;
