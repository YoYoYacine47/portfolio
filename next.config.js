/** @type {import('next').NextConfig} */
const { i18n } = require("./next-i18next.config");
const nextConfig = {
  reactStrictMode: true,
  i18n,
  env: {
    SITE_KEY: process.env.SITE_KEY,
    RECAPTCHA_SECRET: process.env.RECAPTCHA_SECRET,
  },
};

module.exports = nextConfig;
