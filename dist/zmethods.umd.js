!function(t,r){"object"==typeof exports&&"object"==typeof module?module.exports=r():"function"==typeof define&&define.amd?define([],r):"object"==typeof exports?exports.zmethods=r():t.zmethods=r()}(window,function(){return function(t){var r={};function n(e){if(r[e])return r[e].exports;var o=r[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=r,n.d=function(t,r,e){n.o(t,r)||Object.defineProperty(t,r,{enumerable:!0,get:e})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,r){if(1&r&&(t=n(t)),8&r)return t;if(4&r&&"object"==typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(n.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&r&&"string"!=typeof t)for(var o in t)n.d(e,o,function(r){return t[r]}.bind(null,o));return e},n.n=function(t){var r=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(r,"a",r),r},n.o=function(t,r){return Object.prototype.hasOwnProperty.call(t,r)},n.p="",n(n.s=0)}([function(t,r,n){"use strict";n.r(r);var e=function(t,r){let n=null;return function(){n&&clearTimeout(n),n=window.setTimeout(function(){t.apply(this,arguments)}.bind(this),r)}};var o=function(t,r){return function(){const n=Date.now();0+r<n&&t.apply(this,arguments)}};var u=function(t){return new Promise(r=>{setTimeout(()=>{r()},1e3*t)})};var i=function(t,r){return!!(t&&Array.isArray(t)&&t.length>0)&&!!~t.indexOf(r)};var f=function(t){if("number"!=typeof t)throw new Error("size must be number");if(0===t)return"0 Byte";let r=0;for(;t>=1024;)t/=1024,++r;return`${t} ${["Byte","KB","MB","GB","TB","PB"][r]}`};var c=function(t){return(+t||0).toString().replace(/^-?\d+/g,t=>t.replace(/(?=(?!\b)(\d{3})+$)/g,","))};var a=function t(r,n=[]){if(!r||"object"!=typeof r)return r;const e=n.filter(t=>t.original===r)[0];if(e)return e.copy;const o=Array.isArray(r)?[]:{};return n.push({original:r,copy:o}),Object.keys(r).forEach(e=>{o[e]=t(r[e],n)}),o};var l=function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(t){const r=16*Math.random()|0;return("x"===t?r:3&r|8).toString(16)})};var d=function(t,r){return(Array(r).join("0")+t).slice(-r)};var s=function(t,...r){if(t&&t.length>0){t=t.sort((t,r)=>t-r);let n=[];for(let e=r.length>0?r[0]:t[0],o=t[t.length-1];e<=o;e++)-1===t.indexOf(e)&&n.push(e);return n}return[]};var p=function(t){if("string"==typeof t)try{const r=JSON.parse(t);return!(!r||"object"!=typeof r)}catch(t){return!1}return!1};var y=function(t){return"[object Object]"!==Object.prototype.toString.call(t)?"":"{}"===JSON.stringify(t)?"":Object.keys(t).filter(r=>t[r]).map(r=>`${r}=${t[r]}`).join("&")};var x=function(t,r){if(t.length!==r.length)return!1;for(let n=1,e=t.length;n<e;n++)if(!t.includes(r[n]))return!1;for(let n=1,e=t.length;n<e;n++)if(!r.includes(t[n]))return!1;return!0};var h=function(t,r){if(t.length<r)throw"Number exceeds the array's length";let n=[];const e=JSON.parse(JSON.stringify(t));let o=e.length;for(let t=0;t<r;t++){const r=Math.floor(Math.random()*o);n[t]=e[r],[e[r],e[o-1]]=[e[o-1],e[r]],o--}return n};var g=function(t){if(!Array.isArray(t))throw new TypeError("prop need Array");if(0===t.length)return[];for(let r=0,n=t.length;r<n;r++){let e=Math.floor(Math.random()*n);[t[r],t[e]]=[t[e],t[r]]}return t};var b=function(t,r){r=Math.max(r,0);const n=t?t.length:0;if(!n||r<1)return[];let e=0,o=0;const u=new Array(Math.ceil(n/r));for(;e<n;)u[o++]=t.slice(e,e+=r);return u};var m=function(t){let r={},n=t.length,e=[];for(let o=1;o<n;o++){let n=typeof t[o];r[t[o]+n]||(r[t[o]+n]=!0,e.push(t[o]))}return e};n.d(r,"debounce",function(){return e}),n.d(r,"throttle",function(){return o}),n.d(r,"sleep",function(){return u}),n.d(r,"toIndexOf",function(){return i}),n.d(r,"byteFormat",function(){return f}),n.d(r,"thousandsDot",function(){return c}),n.d(r,"deepCopy",function(){return a}),n.d(r,"guid",function(){return l}),n.d(r,"numPadding",function(){return d}),n.d(r,"findLackNum",function(){return s}),n.d(r,"isJSON",function(){return p}),n.d(r,"queryFormat",function(){return y}),n.d(r,"arrEqual",function(){return x}),n.d(r,"arrRandom",function(){return h}),n.d(r,"arrShuffle",function(){return g}),n.d(r,"arrChunk",function(){return b}),n.d(r,"arrUnique",function(){return m})}])});