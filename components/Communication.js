import { useTranslation } from "next-i18next";
import React, { useCallback, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { useDispatch } from "react-redux";
import { setContact } from "../app/slices/ScrollSlice";

function Communication() {
  const { t } = useTranslation("common");

  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [subject, setSubject] = useState(null);
  const [message, setMessage] = useState(null);

  const dispatch = useDispatch();
  const ref = useCallback(
    (ref) => {
      if (ref !== null) {
        dispatch(setContact(ref));
      }
    },
    [dispatch]
  );

  return (
    <section
      ref={ref}
      id="communication"
      className="flex flex-col  items-center w-full min-h-screen h-screen"
    >
      <h2 className="text-3xl lg:text-6xl font-bold text-[#11c8fe] p-2 lg:p-8">
        Contact
      </h2>
      <div className="font-bold text-lg flex items-center h-full">
        <form
          className="flex flex-col space-y-4 w-full max-w-lg "
          method="post"
          action="/api/submitMessage"
          encType="multipart/form-data"
          onSubmit={(event) => {
            if (grecaptcha.getResponse() === "") {
              event.preventDefault();
              alert("Please click <I'm not a robot> before sending the job");
            }
          }}
        >
          <input
            className="input"
            onChange={(event) => setName(event.target.value)}
            placeholder={t("name")}
          />
          <input
            className="input"
            onChange={(event) => setEmail(event.target.value)}
            type="email"
            placeholder={t("email")}
          />
          <input
            className="input"
            onChange={(event) => setSubject(event.target.value)}
            placeholder={t("subject")}
          />
          <textarea
            type="text"
            className="input overflow-x-clip h-48"
            onChange={(event) => setMessage(event.target.value)}
            rows="5"
            cols="30"
            placeholder={t("message")}
          />
          <div className="flex justify-center">
            <ReCAPTCHA size="normal" sitekey={process.env.SITE_KEY} />
          </div>
          <button
            className="dark:bg-[#1f2937] bg-[#d1d5db] p-2 font-semibold rounded-md shadow-md border"
            type="submit"
          >
            {t("Submit")}
          </button>
        </form>
      </div>
    </section>
  );
}

export default Communication;
