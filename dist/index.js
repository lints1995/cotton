const e=e=>{if(!e)return null;const t=e.slice(e.indexOf("?")+1).split("&"),l={};return t.map((e=>{const[t,a]=e.split("=");l[t]=decodeURIComponent(a)})),l},t=e=>{var t,l;if(!e)return"";let a=parseFloat(e).toFixed(2).split(".");e=null===(t=a[0])||void 0===t?void 0:t.replace(/\b(0+)/g,"").split("").reverse();const r=null===(l=a[1])||void 0===l?void 0:l.replace(/(0+)\b/g,"").split("");let n="";const s={0:"零",1:"壹",2:"贰",3:"叁",4:"肆",5:"伍",6:"陆",7:"柒",8:"捌",9:"玖"},o={0:"",1:"拾",2:"佰",3:"仟"},i={0:"角",1:"分"},u=e=>{if(e&&!(e.length>4))return e.map(((e,t)=>"0"===e?s[0]:`${s[e]}${o[t]}`)).reverse().join("").replace(/(零+)$/g,"")};switch(!0){case e.length<5:n=u(e);break;case e.length<9:n=`${u(e.slice(4,e.length))}万${u(e.slice(0,4))}`;break;case e.length<13:n=`${u(e.slice(8,e.length))}亿${u(e.slice(4,8))}万${u(e.slice(0,4))}`}let c;return n=`${n.replace(/零零零/g,"零").replace(/零零/g,"零")}`,r&&(c=r.map(((e,t)=>{if("0"!==e)return`${s[e]}${i[t]}`})).join("")),n=c?`${n?`${n}元`:n}${c}`:`${n}元整`,n},l=(e,t)=>{let l=null;return function(){l&&clearTimeout(l),l=setTimeout((()=>{e.apply(this)}),null!=t?t:0)}},a=(e,t)=>{let l=null;return function(){l||(l=setTimeout((()=>{e.apply(this,arguments),l=null}),null!=t?t:1e3))}},r=e=>!!e&&/^1[3,4,5,6,7,8,9]\d{9}$/.test(e),n=function(e){return Object.prototype.toString.call(e).replace(/\[object\s(.+)\]/,"$1").toLowerCase()},s=(e,t="YYYY-MM-DD hh:mm:ss")=>{try{if(!e)return"";const l=String(parseInt(String(e))).length;if(10!=l&&13!=l)throw"timestamp format error";e=10===l?1e3*e:e;const[a,r]=t.split(" ")?t.split(" "):"YYYY-MM-DD hh:mm:ss",n=new Date(e),s=n.getFullYear(),i=o(n.getMonth()+1),u=o(n.getDate()),c=o(n.getHours()),p=o(n.getMinutes()),m=o(n.getSeconds()),g=a.split(""),$=r.split("");return`${s}${g[4]}${i}${g[7]}${u} ${c}${$[2]}${p}${$[5]}${m}`}catch(e){throw"timestamp format error"}},o=e=>e<10?`0${e}`:e,i=e=>e?new Date(e).valueOf():(new Date).valueOf();const u=function(e){if("object"!==n(e))throw"equalNullObject: The incoming data type must be an object type";return 0===Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e)).length};var c={getQueryParams:e,getAmountChineseNumeral:t,validatePhoneNum:r,getDataType:n,debounce:l,throttle:a,dateFormat:s,getTimeStamp:i,equalNullObject:u};export{s as dateFormat,l as debounce,c as default,u as equalNullObject,t as getAmountChineseNumeral,n as getDataType,e as getQueryParams,i as getTimeStamp,a as throttle,r as validatePhoneNum};
