import getQueryParams from "./getQueryParams";
import getAmountChineseNumeral from "./getAmountChineseNumeral";
import debounce from "./debounce";
import throttle from "./throttle";
import validatePhoneNum from "./validatePhoneNum";
import getDataType from "./getDataType";
import dateFormat from "./dateFormat";
import getTimeStamp from "./getTimeStamp";
import equalNullObject from "./equalNullObject";
declare const _default: {
    getQueryParams: (url: string) => {};
    getAmountChineseNumeral: (money: any) => string;
    validatePhoneNum: (phone: string) => boolean;
    getDataType: (data: any) => any;
    debounce: (fn: () => void, delay?: number) => () => void;
    throttle: (fn: () => void, delay?: number) => () => void;
    dateFormat: (time: number, format?: string) => string;
    getTimeStamp: (s?: string) => number;
    equalNullObject: (obj: Object) => boolean;
};
export default _default;
export { getQueryParams, getAmountChineseNumeral, validatePhoneNum, getDataType, debounce, throttle, dateFormat, getTimeStamp, equalNullObject };
