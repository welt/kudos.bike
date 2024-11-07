// rollup.config.js

import { babel } from "@rollup/plugin-babel";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import terser from "@rollup/plugin-terser";

/* Hack for unusual ESM/npm package structure - oudated plugin */
/* https://github.com/shuizhongyueming/rollup-plugin-output-manifest/issues/21#issuecomment-1368169746 */
import pluginManifest from "rollup-plugin-output-manifest";
const { default: outputManifest } = pluginManifest;

const devMode = process.env.NODE_ENV !== "production";
const manifestOpts = {
  isMerge: true,
  fileName: "../../src/_data/manifest.json",
};
const iifeOpts = {
  keyValueDecorator: (k, v) => ({ [`${k}.iife.js`]: v }),
};

const noop = () => {};

export default [
  {
    input: "./src/js/components.js",
    plugins: [
      nodeResolve(),
      commonjs(),
      devMode ? noop() : outputManifest(manifestOpts),
    ],
    output: {
      entryFileNames: devMode
        ? "components.esm.js"
        : "components-[hash].esm.js",
      generatedCode: "es2015",
      name: "components",
      dir: "./_site/js/",
      format: "es",
      sourcemap: devMode ? "inline" : false,
      plugins: [
        devMode
          ? noop()
          : terser({
              ecma: 2020,
              mangle: { toplevel: true },
              compress: {
                module: true,
                toplevel: true,
                unsafe_arrows: true,
                drop_console: !devMode,
                drop_debugger: !devMode,
              },
              output: {
                quote_style: 1,
                comments: false,
              },
            }),
      ],
    },
    watch: {
      include: "./src/js/**",
      clearScreen: false,
    },
  },
  {
    input: "./src/js/main.js",
    plugins: [
      nodeResolve(),
      commonjs(),
      devMode ? noop() : outputManifest(manifestOpts),
    ],
    output: {
      entryFileNames: devMode ? "bundle.esm.js" : "bundle-[hash].esm.js",
      generatedCode: "es2015",
      name: "bundle",
      format: "es",
      dir: "./_site/js/",
      sourcemap: devMode ? "inline" : false,
      plugins: [
        devMode
          ? noop()
          : terser({
              ecma: 2020,
              mangle: { toplevel: true },
              compress: {
                module: true,
                toplevel: true,
                unsafe_arrows: true,
                drop_console: !devMode,
                drop_debugger: !devMode,
              },
              output: {
                quote_style: 1,
                comments: false,
              },
            }),
      ],
    },
    watch: {
      include: "./src/js/**",
      clearScreen: false,
    },
  },
  {
    input: "./src/js/main.js",
    plugins: [
      nodeResolve(),
      commonjs(),
      babel({
        presets: ["@babel/preset-env"],
        babelHelpers: "bundled",
      }),
      devMode ? noop() : outputManifest(Object.assign(manifestOpts, iifeOpts)),
    ],
    output: {
      entryFileNames: devMode ? "bundle.iife.js" : "bundle-[hash].iife.js",
      name: "main",
      dir: "./_site/js/",
      format: "iife",
      sourcemap: devMode ? "inline" : false,
      plugins: [
        devMode
          ? noop()
          : terser({
              ecma: 2015, // @see https://terser.org/docs/api-reference.html#minify-options
              mangle: { toplevel: true },
              compress: {
                module: true,
                toplevel: true,
                unsafe_arrows: true,
                drop_console: !devMode,
                drop_debugger: !devMode,
              },
              output: {
                quote_style: 1,
                comments: false,
              },
            }),
      ],
    },
  },
];
