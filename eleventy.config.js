import dotenv from "dotenv";
dotenv.config();

export default async function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("./src/images/**/*.{png,jpg,webp}");
  eleventyConfig.addPassthroughCopy("./src/favicon.ico");
  eleventyConfig.addPassthroughCopy("./src/favicon.ico");
  eleventyConfig.addWatchTarget("./src/js/");
  eleventyConfig.addWatchTarget("./src/scss/");

  eleventyConfig.addJavaScriptFunction("lookup", function (arr, key, val) {
    return arr.find((obj) => obj[key] === val);
  });

  return {
    dir: {
      input: "src",
      includes: "_includes",
      layouts: "_layouts",
    },
    templateFormats: ["html", "11ty.js", "liquid", "njk", "md"],
  };
}
