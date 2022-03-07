module.exports = function openGraph(data) {
  return `
    <meta property="og:title" content="${data.title}" />
    <meta property="og:url" content="${data.meta.canonical}${data.page.url}" />
    <meta property="og:description" content="${data.metaDescription}" />
    <meta property="og:image" content="/images/kudos-logo.png" />
    <meta property="og:type" content="website" />
`;
};
