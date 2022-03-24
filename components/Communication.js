import { useTranslation } from "next-i18next";
import React, { useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setContact, setEducation } from "../app/slices/ScrollSlice";

import Script from "next/script";
import axios from "axios";
import CustomizedSnackbars from "../components/Snackbar";

function Communication() {
  const { t } = useTranslation("common");
  const dispatch = useDispatch();

  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [subject, setSubject] = useState(null);
  const [message, setMessage] = useState(null);

  const [processing, setProcessing] = useState(false);
  const [open, setOpen] = React.useState(false);

  const ref = useCallback(
    (ref) => {
      if (ref !== null) {
        dispatch(setContact(ref));
      }
    },
    [dispatch]
  );

  const handleSubmit = async (e) => {
    e.preventDefault();

    setProcessing(true);
    await axios.post("/api/submitMessage", { name, email, subject, message });
    setProcessing(false);
    setSubject("");
    setMessage("");
    setOpen(true);
  };

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
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            id="name"
            value={name}
            required
            className="input"
            onChange={(event) => setName(event.target.value)}
            placeholder={t("name")}
          />
          <input
            id="email"
            value={email}
            required
            className="input"
            onChange={(event) => setEmail(event.target.value)}
            type="email"
            placeholder={t("email")}
          />
          <input
            type="text"
            id="subject"
            required
            className="input"
            value={subject}
            onChange={(event) => setSubject(event.target.value)}
            placeholder={t("subject")}
          />
          <textarea
            type="text"
            id="message"
            required
            className="input overflow-x-clip h-48"
            value={message}
            onChange={(event) => setMessage(event.target.value)}
            rows="5"
            cols="30"
            placeholder={t("message")}
          />
          <div className="flex justify-center"></div>
          <button
            className="dark:bg-[#1f2937] bg-[#d1d5db] p-2 font-semibold rounded-md shadow-md border"
            type="submit"
            disabled={!name || !email || !subject || !message || processing}
          >
            {t("Submit")}
          </button>
        </form>
      </div>
      <CustomizedSnackbars open={open} setOpen={setOpen} />
    </section>
  );
}

export default Communication;
