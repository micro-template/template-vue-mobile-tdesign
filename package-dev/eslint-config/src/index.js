import {
  javascript,
  typescript,
  stylistic,
  vue,
  css,
  json,
  importX,
  ignores,
  command,
  custom
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
  command,
  custom
];

export default DEFAULT;
