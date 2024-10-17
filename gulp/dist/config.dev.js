"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.paths = exports.plugins = void 0;

var _gulp = _interopRequireDefault(require("gulp"));

var _gulpDebug = _interopRequireDefault(require("gulp-debug"));

var _del = require("del");

var _gulpImagemin = _interopRequireWildcard(require("gulp-imagemin"));

var _imageminPngquant = _interopRequireDefault(require("imagemin-pngquant"));

var _imageminZopfli = _interopRequireDefault(require("imagemin-zopfli"));

var _imageminMozjpeg = _interopRequireDefault(require("imagemin-mozjpeg"));

var _imageminGiflossy = _interopRequireDefault(require("imagemin-giflossy"));

var _gulpNewer = _interopRequireDefault(require("gulp-newer"));

var _browserSync = _interopRequireDefault(require("browser-sync"));

var _webpack = _interopRequireDefault(require("webpack"));

var _webpackStream = _interopRequireDefault(require("webpack-stream"));

var _gulpIf = _interopRequireDefault(require("gulp-if"));

var _gulpSvgSprite = _interopRequireDefault(require("gulp-svg-sprite"));

var _sass = _interopRequireDefault(require("sass"));

var _gulpSass = _interopRequireDefault(require("gulp-sass"));

var _gulpCleanCss = _interopRequireDefault(require("gulp-clean-css"));

var _gulpGroupCssMediaQueries = _interopRequireDefault(require("gulp-group-css-media-queries"));

var _gulpAutoprefixer = _interopRequireDefault(require("gulp-autoprefixer"));

var _gulpSourcemaps = _interopRequireDefault(require("gulp-sourcemaps"));

var _gulpPlumber = _interopRequireDefault(require("gulp-plumber"));

var _gulpFileInclude = _interopRequireDefault(require("gulp-file-include"));

var _gulpWebp = _interopRequireDefault(require("gulp-webp"));

var _gulpTtf2woff = _interopRequireDefault(require("gulp-ttf2woff"));

var _gulpTtf2woff2 = _interopRequireDefault(require("gulp-ttf2woff2"));

var _path = _interopRequireDefault(require("path"));

var _gulpNotify = _interopRequireDefault(require("gulp-notify"));

var _gulpZip = _interopRequireDefault(require("gulp-zip"));

var _gulpAvif = _interopRequireDefault(require("gulp-avif"));

var _ghPages = _interopRequireDefault(require("gh-pages"));

var _gulpFilter = _interopRequireDefault(require("gulp-filter"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var plugins = {
  gulp: _gulp["default"],
  debug: _gulpDebug["default"],
  deleteAsync: _del.deleteAsync,
  imagemin: _gulpImagemin["default"],
  imageminPngquant: _imageminPngquant["default"],
  svgo: _gulpImagemin.svgo,
  imageminZopfli: _imageminZopfli["default"],
  imageminMozjpeg: _imageminMozjpeg["default"],
  imageminGiflossy: _imageminGiflossy["default"],
  newer: _gulpNewer["default"],
  browsersync: _browserSync["default"],
  webpack: _webpack["default"],
  webpackStream: _webpackStream["default"],
  gulpif: _gulpIf["default"],
  svg: _gulpSvgSprite["default"],
  gulpsass: _gulpSass["default"],
  dartsass: _sass["default"],
  mincss: _gulpCleanCss["default"],
  groupmedia: _gulpGroupCssMediaQueries["default"],
  autoprefixer: _gulpAutoprefixer["default"],
  sourcemaps: _gulpSourcemaps["default"],
  plumber: _gulpPlumber["default"],
  include: _gulpFileInclude["default"],
  webp: _gulpWebp["default"],
  ttf2woff: _gulpTtf2woff["default"],
  ttf2woff2: _gulpTtf2woff2["default"],
  path: _path["default"],
  notify: _gulpNotify["default"],
  zip: _gulpZip["default"],
  avif: _gulpAvif["default"],
  deploy: _ghPages["default"],
  filter: _gulpFilter["default"]
};
exports.plugins = plugins;
var devFolder = './src';
var productFolder = './app';
var paths = {
  html: {
    src: "".concat(devFolder, "/html/*.html"),
    app: "".concat(productFolder, "/"),
    watch: "".concat(devFolder, "/html/**/*.html")
  },
  styles: {
    src: "".concat(devFolder, "/styles/style.{scss,sass,css}"),
    app: "".concat(productFolder, "/css/"),
    watch: "".concat(devFolder, "/styles/**/*.{scss,sass,css}")
  },
  scripts: {
    src: "".concat(devFolder, "/js/main.js"),
    app: "".concat(productFolder, "/js/"),
    watch: "".concat(devFolder, "/js/**/*.js")
  },
  images: {
    src: "".concat(devFolder, "/img"),
    app: "".concat(productFolder, "/img"),
    watch: "".concat(devFolder, "/img/"),
    srcExceptions: ["!".concat(devFolder, "/img/sprites/**/*")]
  },
  sprites: {
    src: "".concat(devFolder, "/img/sprites/*.svg"),
    app: "".concat(productFolder, "/img/sprites/"),
    watch: "".concat(devFolder, "/img/sprites/*.svg")
  },
  fonts: {
    src: "".concat(devFolder, "/fonts/**/*.ttf"),
    app: "".concat(productFolder, "/fonts/"),
    watch: "".concat(devFolder, "/fonts/**/*")
  },
  resources: {
    src: "".concat(devFolder, "/resources/**")
  },
  devFolder: devFolder,
  productFolder: productFolder,
  rootFolder: _path["default"].basename(_path["default"].resolve())
};
exports.paths = paths;
global.app = {
  production: process.argv.includes('--production'),
  dev: process.argv.includes('--dev'),
  paths: paths,
  plugins: plugins
};