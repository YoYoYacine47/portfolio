import React from "react";
import { Button, ButtonGroup } from "@mui/material";
import { HomeIcon, CodeIcon } from "@heroicons/react/outline";
import {
  AcademicCapIcon,
  PresentationChartBarIcon,
  AnnotationIcon,
} from "@heroicons/react/outline";
import { Instagram, Audiotrack, GitHub } from "@mui/icons-material/";
import ModeSwitch from "../components/ModeSwitch";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { selectElements } from "../app/slices/ScrollSlice";

export default function Nav() {
  const router = useRouter();
  const { t } = useTranslation("common");
  const { pathname, asPath, query } = router;

  const changeLang = (lang) => {
    router.push({ pathname, query }, asPath, {
      locale: lang,
    });
  };
  const elements = useSelector(selectElements);

  return (
    <div className="sticky top-0 flex bg-gray-300 dark:bg-gray-800 flex-col justify-between items-center py-2 lg:p-2 h-screen ">
      <div className="flex flex-col items-center space-y-2">
        <h3 className="font-bold font-mono border-r-2 border-l-2 px-2 rounded-sm border-[#11c8fe]">
          YoYo
        </h3>
        <ModeSwitch />
        <ButtonGroup
          size="small"
          orientation="vertical"
          aria-label="vertical contained button group"
          variant="text"
        >
          <Button
            onClick={() => changeLang("en")}
            disabled={router.locale === "en"}
            className="dark:text-[#11c8fe] font-bold"
            key="en"
          >
            En
          </Button>
          <Button
            onClick={() => changeLang("ar")}
            disabled={router.locale === "ar"}
            className="dark:text-[#11c8fe] font-bold"
            key="ar"
          >
            Ar
          </Button>
        </ButtonGroup>
      </div>
      <div className="flex flex-col space-y-2 justify-center items-center dark:text-[#11c8fe]">
        <HomeIcon
          onClick={() => elements.homeRef.scrollIntoView()}
          className="icons"
          width={28}
          height={28}
        />
        <CodeIcon
          onClick={() => elements.skillsRef.scrollIntoView()}
          className="icons"
          width={28}
          height={28}
        />
        <AcademicCapIcon
          onClick={() => elements.educationRef.scrollIntoView()}
          className="icons"
          width={28}
          height={28}
        />
        <PresentationChartBarIcon
          onClick={() => elements.portfolioRef.scrollIntoView()}
          className="icons"
          width={28}
          height={28}
        />
        <AnnotationIcon
          onClick={() => elements.contactRef.scrollIntoView()}
          className="icons"
          width={28}
          height={28}
        />
      </div>
      <div className="flex flex-col items-center space-y-2 dark:text-[#11c8fe]">
        <a
          href="https://github.com/YoYoYacine47/YoYoYacine47"
          target="_blank"
          rel="noreferrer"
        >
          <GitHub />
        </a>
        <a
          href="https://www.instagram.com/ramdaneyacine47/"
          target="_blank"
          rel="noreferrer"
        >
          <Instagram />
        </a>
        <a
          href="https://www.tiktok.com/@yoyo__yacine"
          target="_blank"
          rel="noreferrer"
        >
          <Audiotrack />
        </a>
      </div>
    </div>
  );
}
