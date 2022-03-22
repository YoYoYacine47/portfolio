import {
  ArrowsExpandIcon,
  InformationCircleIcon,
  MinusSmIcon,
  TerminalIcon,
  XIcon,
} from "@heroicons/react/outline";
import { useTheme } from "next-themes";
import { useRouter } from "next/router";
import React, { useRef, useState } from "react";
import Dialog from "./Dialog";
import { useSelector } from "react-redux";
import { selectElements } from "../app/slices/ScrollSlice";

function Terminal() {
  const [text, setText] = useState();
  const router = useRouter();
  const { pathname, asPath, query } = router;
  const { theme, setTheme } = useTheme();
  const elements = useSelector(selectElements);

  const changeLang = (lang) => {
    router.push({ pathname, query }, asPath, {
      locale: lang,
    });
  };

  const handleSubmit = () => {
    console.log({ text });
    switch (text) {
      case "chlang en":
        changeLang("en");
        break;
      case "chlang ar":
        changeLang("ar");
        break;
      case "chmod light":
        setTheme("light");
        break;
      case "chmod dark":
        setTheme("dark");
        break;
      case "cd home":
        elements.homeRef.scrollIntoView();
        break;
      case "cd skills":
        elements.skillsRef.scrollIntoView();
        break;
      case "cd education":
        elements.eductionRef.scrollIntoView();
        break;
      case "cd portfolio":
        elements.portfolioRef.scrollIntoView();
        break;
      case "cd contact":
        elements.contactRef.scrollIntoView();
        break;
    }
  };

  return (
    <div dir="ltr" className="font-semibold font-mono border max-w-lg">
      <div className="bg-[#1f2937] p-1 h-6 flex items-center text-white">
        <div className="flex">
          <XIcon className="h-5 w-5" />
          <ArrowsExpandIcon className="h-5 w-5" />
          <MinusSmIcon className="h-5 w-5" />
        </div>
        <div className="flex flex-grow justify-center">
          <TerminalIcon className="h-5 w-5" />
          <p>Terminal</p>
        </div>
        <div className="cursor-pointer hover:shadow-md hover:scale-105">
          <Dialog />
        </div>
      </div>
      <form
        action="javascript:void(0);"
        className="flex items-center w-full"
        onSubmit={() => handleSubmit()}
      >
        <p className="text-green-600  pr-2">
          yoyo@yacine<span className="text-blue-600">:/</span>$
        </p>
        <input
          className="bg-transparent border-none w-full focus:outline-none"
          onChange={(event) => setText(event.target.value)}
        />
      </form>
    </div>
  );
}

export default Terminal;
