require('dotenv').config();
const MarkdownIt = require('markdown-it');
const md = new MarkdownIt({ html: true, linkify: true, breaks: true });

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy('./src/images/**/*.{png,jpg,webp}');
  eleventyConfig.addPassthroughCopy('./src/favicon.ico');
  eleventyConfig.addPassthroughCopy('./src/favicon.ico');
  eleventyConfig.addWatchTarget('./src/js/');
  eleventyConfig.addWatchTarget('./src/scss/');
  if (process.env.BRANCH !== 'main') {
    eleventyConfig.addPassthroughCopy('./src/robots.txt');
  }
  eleventyConfig.addJavaScriptFunction('parseMarkdown', async function(str) {
    return typeof str === 'string' ? md.render(str) : '';
  });
  eleventyConfig.addJavaScriptFunction('lookup', function(arr, key, val) {
    return arr.find((obj)=>obj[key] === val);
  });
  return {
    dir: {
      input: 'src',
      includes: '_includes',
      layouts: '_layouts',
    },
    templateFormats: ['html', '11ty.js', 'liquid', 'njk', 'md'],
  }
};
