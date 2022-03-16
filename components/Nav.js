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
import { Link, animateScroll as scroll } from "react-scroll";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";

export default function Nav() {
  const router = useRouter();
  const { t } = useTranslation("common");
  const { pathname, asPath, query } = router;

  const changeLang = (lang) => {
    router.push({ pathname, query }, asPath, {
      locale: lang,
    });
  };

  return (
    <div className="sticky top-0 flex bg-gray-300 dark:bg-gray-800 flex-col justify-between items-center p-2 h-screen ">
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
        <Link title="Home" to="home" smooth={true}>
          <HomeIcon className="icons" width={28} height={28} />
        </Link>
        <Link title="Skills" to="skills" smooth="true">
          <CodeIcon className="icons" width={28} height={28} />
        </Link>
        <Link title="Education" to="education" smooth="true">
          <AcademicCapIcon className="icons" width={28} height={28} />
        </Link>
        <Link title="Portfolio" to="portfolio" smooth="true">
          <PresentationChartBarIcon className="icons" width={28} height={28} />
        </Link>
        <Link title="Communication" to="communication" smooth="true">
          <AnnotationIcon className="icons" width={28} height={28} />
        </Link>
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
