import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import db from "../../firebase";

const register = async (req, res) => {
  const { name, email, subject, message } = req.body;

  const data = {
    name,
    email,
    subject,
    message,
    timestamp: serverTimestamp(),
  };
  console.log("send message");
  await addDoc(collection(db, "messages"), data);

  res.status(200).json();
};

export default register;
