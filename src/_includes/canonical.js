module.exports = function canonical(data) {
  if ('canonical' in data.meta && 'url' in data.page) {
    return `<link rel="canonical" href="${data.meta.canonical}${data.page.url}">`;
  }
  return '';
};
