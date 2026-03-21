import {
  javascript,
  typescript,
  stylistic, vue, css, json, importX, ignores, command
} from "./config/index.js";

const DEFAULT = [
  javascript,
  typescript,
  stylistic,
  vue,
  css,
  ...json,
  ...importX,
  ignores,
  command
];

export default DEFAULT;
