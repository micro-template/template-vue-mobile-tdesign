import {
  isPlainObject,
  isEmpty
} from "lodash-es";

export default function isNonEmptyPlainObject(value?: unknown): boolean {
  return isPlainObject(value) && !isEmpty(value);
}
