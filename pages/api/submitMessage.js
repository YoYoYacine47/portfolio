import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import db from "../../firebase";

const register = async (req, res) => {
  const SECRET_KEY = process.env.RECAPTCHA_SECRET;

  const { name, email, subject, message, recaptchaResponse } = req.body;

  const verifyUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${SECRET_KEY}&response=${recaptchaResponse}`;

  try {
    const recaptchaRes = await fetch(verifyUrl, { method: "POST" });

    const recaptchaJson = await recaptchaRes.json();
    const data = {
      name,
      email,
      subject,
      message,
      timestamp: serverTimestamp(),
    };
    await addDoc(collection(db, "messages"), data);

    res.status(200).json();
  } catch (e) {
    res.status(400).json(e.error);
  }
};

export default register;
