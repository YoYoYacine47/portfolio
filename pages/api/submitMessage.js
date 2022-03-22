import validateCaptcha from "./captcha";

export default async function submitMessage(req, res) {
  const { body } = req;
  const { captcha } = body;
  console.log(captcha);
  console.log(body);

  if (!(await validateCaptcha(req.body.captcha))) {
    return res.redirect(`/captcha`);
  }
  delete req.body["g-recaptcha-response"];
  console.log("recaptcha valid!!");
}
