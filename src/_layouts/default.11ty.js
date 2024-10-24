/**
 * Default layout template.
 */
import navPrimary from "../_includes/navPrimary.js";
import footer from "../_includes/footer.js";
import header from "../_includes/header.js";
import openGraph from "../_includes/openGraph.js";
import canonical from "../_includes/canonical.js";

export default class LayoutDefault {
  render(data) {
    return `
<!DOCTYPE html>
<html class="no-js" lang="en">
    <head>
        <title>${data.title}</title>
        <link rel="preload" href="/css/${data.meta.env === "production" ? data.manifest["style.css"] : "style.css"}" as="style">
        <link rel="stylesheet" href="/css/${data.meta.env === "production" ? data.manifest["style.css"] : "style.css"}" media="all">
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta name="color-scheme" content="dark light">
        <meta name="description" content="${data.metaDescription}">
        ${canonical(data)}
        ${openGraph(data)}
        <script type="module" src="/js/${data.meta.env === "production" ? data.manifest["components.js"] : "components.esm.js"}" async></script>
        <script>
            document.documentElement.className = document.documentElement.className.replace('no-js','js');
            var currentMode = localStorage.getItem('mode');
            if (currentMode === 'dark') { document.documentElement.classList.add('dark-mode'); }
        </script>
    </head>
    <body>
        ${navPrimary()}
        ${header()}
        <main id="main-content" class="${data.styles ? data.styles : ""}">
        ${data.content}
        </main>
        ${footer()}
        <script type="module" src="/js/${data.meta.env === "production" ? data.manifest["main.js"] : "bundle.esm.js"}" async></script>
        <script nomodule src="/js/${data.meta.env === "production" ? data.manifest["main.iife.js"] : "bundle.iife.js"}" defer></script>
    </body>
</html>
`;
  }
}
