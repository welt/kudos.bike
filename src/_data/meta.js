/* eslint-disable import/no-extraneous-dependencies */
require('dotenv').config();

module.exports = {
  canonical: process.env.CANONICAL,
  env: process.env.ELEVENTY_ENV,
};
