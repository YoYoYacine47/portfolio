import Head from "next/head";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Nav from "../components/Nav";
import Home from "../components/Home";
import Education from "../components/Education";
import Portfolio from "../components/Portfolio";
import Communication from "../components/Communication";
import Skills from "../components/Skills";
import Script from "next/script";

export default function Index() {
  const router = useRouter();
  const [der, setDer] = useState("ltr");
  const site_key = process.env.SITE_KEY;

  useEffect(() => {
    router.locale === "ar" ? setDer("rtl") : setDer("ltr");
  }, [router.locale]);

  return (
    <div
      id="container"
      dir={der}
      className="dark:text-gray-200 dark:bg-gray-900 text-gray-900 bg-gray-200 "
    >
      <Head>
        <title>YoYoYacine</title>
        <meta name="description" content="created by RAMDANE YACINE" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Script
        src={`https://www.google.com/recaptcha/api.js?render=${site_key}`}
      />

      <main className="flex">
        <Nav />
        <div className="">
          <Home />
          <Skills />
          <Education />
          <Portfolio />
          <Communication />
        </div>
      </main>
    </div>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
      // Will be passed to the page component as props
    },
  };
}
