import React, { useCallback } from "react";
import { useDispatch } from "react-redux";
import { setPortfolio } from "../app/slices/ScrollSlice";
import Project from "./Project";

function Portfolio() {
  const dispatch = useDispatch();
  const ref = useCallback(
    (ref) => {
      if (ref !== null) {
        dispatch(setPortfolio(ref));
      }
    },
    [dispatch]
  );
  return (
    <section id="portfolio" ref={ref} className="w-full ">
      {
        <div className="grid gap-6 p-6 lg:grid-col-2 xl:grid-cols-3 justify-items-center">
          <Project
            link="https://amazon-clone-ivory-eta.vercel.app/"
            image="/projects/amazon.png"
            title="Amazon Clone"
            tools="NextJs Tailwind Stripe"
          />
          <Project
            link="https://sweet-psi.vercel.app/"
            image="/projects/sweet.png"
            title="Sweet Store"
            tools="NextJs Tailwind N18i"
          />
          <Project
            link="https://airbnb-two.vercel.app/"
            image="/projects/airbnb.png"
            title="airbnb Clone"
            tools="NextJs"
          />
          <Project
            image="/projects/ssAndroid.png"
            title="WebView"
            tools="Kotlin Firebase"
          />
          <Project
            image="/projects/ssPrice.png"
            title="SS prices"
            tools="Kotlin Firebase SqlLite"
          />
          <Project
            link="https://play.google.com/store/apps/details?id=com.yoyoyacine.moviesquotes"
            image="/projects/movie.png"
            title="Movie Quotes"
            tools="Java GoogleAds Firebase"
          />
        </div>
      }
    </section>
  );
}

export default Portfolio;
