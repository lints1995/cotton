!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t((e="undefined"!=typeof globalThis?globalThis:e||self).$c={})}(this,(function(e){"use strict";const t=e=>{if(!e)return null;const t=e.slice(e.indexOf("?")+1).split("&"),r={};return t.map((e=>{const[t,n]=e.split("=");r[t]=decodeURIComponent(n)})),r},r=e=>{var t,r;if(!e)return"";let n=parseFloat(e).toFixed(2).split(".");e=null===(t=n[0])||void 0===t?void 0:t.replace(/\b(0+)/g,"").split("").reverse();const l=null===(r=n[1])||void 0===r?void 0:r.replace(/(0+)\b/g,"").split("");let o="";const s={0:"零",1:"壹",2:"贰",3:"叁",4:"肆",5:"伍",6:"陆",7:"柒",8:"捌",9:"玖"},i={0:"",1:"拾",2:"佰",3:"仟"},a={0:"角",1:"分"},u=e=>{if(e&&!(e.length>4))return e.map(((e,t)=>"0"===e?s[0]:`${s[e]}${i[t]}`)).reverse().join("").replace(/(零+)$/g,"")};switch(!0){case e.length<5:o=u(e);break;case e.length<9:o=`${u(e.slice(4,e.length))}万${u(e.slice(0,4))}`;break;case e.length<13:o=`${u(e.slice(8,e.length))}亿${u(e.slice(4,8))}万${u(e.slice(0,4))}`}let c;return o=`${o.replace(/零零零/g,"零").replace(/零零/g,"零")}`,l&&(c=l.map(((e,t)=>{if("0"!==e)return`${s[e]}${a[t]}`})).join("")),o=c?`${o?`${o}元`:o}${c}`:`${o}元整`,o},n=(e,t)=>{let r=null;return function(){r&&clearTimeout(r),r=setTimeout((()=>{e.apply(this)}),null!=t?t:0)}},l=(e,t)=>{let r=null;return function(){r||(r=setTimeout((()=>{e.apply(this,arguments),r=null}),null!=t?t:1e3))}},o=e=>{if(!e)return!1;return/^1[3,4,5,6,7,8,9]\d{9}$/.test(e)},s=e=>Object.prototype.toString.call(e).replace(/\[object\s(.+)\]/,"$1").toLowerCase(),i=(e,t="YYYY-MM-DD hh:mm:ss")=>{try{if(console.log(t.split(" ")),!e)return"";const r=String(parseInt(String(e))).length;if(10!=r&&13!=r)return console.error("timestamp format error");e=10===r?1e3*e:e;const[n,l]=t.split(" ")?t.split(" "):"YYYY-MM-DD hh:mm:ss",o=new Date(e),s=o.getFullYear(),i=a(o.getMonth()+1),u=a(o.getDate()),c=a(o.getHours()),p=a(o.getMinutes()),g=a(o.getSeconds()),m=n.split(""),d=l.split("");return`${s}${m[4]}${i}${m[7]}${u} ${c}${d[2]}${p}${d[5]}${g}`}catch(e){console.error("timestamp format error")}},a=e=>e<10?`0${e}`:e,u=e=>e?new Date(e).valueOf():(new Date).valueOf();var c={getQueryParams:t,getAmountInWords:r,validatePhoneNum:o,getDataType:s,debounce:n,throttle:l,dateFormat:i,getTimeStamp:u};e.dateFormat=i,e.debounce=n,e.default=c,e.getAmountInWords=r,e.getDataType=s,e.getQueryParams=t,e.getTimeStamp=u,e.throttle=l,e.validatePhoneNum=o,Object.defineProperty(e,"__esModule",{value:!0})}));
