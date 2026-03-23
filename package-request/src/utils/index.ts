/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  isObject,
  isString
} from "lodash-es";

import {
  TRecordable
} from "#/types";

const DATE_TIME_FORMAT = "YYYY-MM-DD HH:mm:ss";

export function joinTimestamp<T extends boolean>(_join: boolean, _restful: T): T extends true ? string : object;

// eslint-disable-next-line no-redeclare
export function joinTimestamp(join: boolean, restful = false): string | object {
  if (!join) {
    return restful ? "" : {};
  }

  const now = new Date().getTime();

  if (restful) {
    return `?_t=${now}`;
  }

  return {
    _t: now
  };
}

// 格式化提交参数时间
export function formatRequestDate(params: TRecordable) {
  if (Object.prototype.toString.call(params) !== "[object Object]") {
    return;
  }

  // eslint-disable-next-line guard-for-in
  for (const key in params) {
    if (params[key] && params[key]._isAMomentObject) {
      params[key] = params[key].format(DATE_TIME_FORMAT);
    }

    if (isString(key)) {
      const value = params[key];

      if (value) {
        try {
          params[key] = isString(value) ? value.trim() : value;
        } catch (error: any) {
          // eslint-disable-next-line preserve-caught-error
          throw new Error(error);
        }
      }
    }

    if (isObject(params[key])) {
      formatRequestDate(params[key]);
    }
  }
}

// 将对象转为Url参数
export function setObjToUrlParams(baseUrl: string, obj: { [index: string]: any }): string {
  let parameters = "";

  // eslint-disable-next-line guard-for-in
  for (const key in obj) {
    parameters += `${key}=${encodeURIComponent(obj[key])}&`;
  }

  parameters = parameters.replace(/&$/, "");

  return (/\?$/).test(baseUrl) ? baseUrl + parameters : baseUrl.replace(/\/?$/, "?") + parameters;
}
