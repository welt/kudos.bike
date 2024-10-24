import dotenv from "dotenv";

dotenv.config();

export default {
  canonical: process.env.CANONICAL,
  env: process.env.ELEVENTY_ENV,
  siteName: "Kudos Time Trial Series",
};
