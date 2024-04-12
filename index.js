// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(r,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(r="undefined"!=typeof globalThis?globalThis:r||self).countBy=e()}(this,(function(){"use strict";var r=Math.floor;var e=9007199254740991;function t(t){return"object"==typeof t&&null!==t&&"number"==typeof t.length&&(n=t.length,r(n)===n)&&t.length>=0&&t.length<=e;var n}var n=/./,o="function"==typeof Object.defineProperty?Object.defineProperty:null;var i=Object.defineProperty;function a(r){return"number"==typeof r}function c(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function u(r,e,t){var n=!1,o=e-r.length;return o<0||(function(r){return"-"===r[0]}(r)&&(n=!0,r=r.substr(1)),r=t?r+c(o):c(o)+r,n&&(r="-"+r)),r}var l=String.prototype.toLowerCase,s=String.prototype.toUpperCase;function f(r){var e,t,n;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(t=r.arg,n=parseInt(t,10),!isFinite(n)){if(!a(t))throw new Error("invalid integer. Value: "+t);n=0}return n<0&&("u"===r.specifier||10!==e)&&(n=4294967295+n+1),n<0?(t=(-n).toString(e),r.precision&&(t=u(t,r.precision,r.padRight)),t="-"+t):(t=n.toString(e),n||r.precision?r.precision&&(t=u(t,r.precision,r.padRight)):t="",r.sign&&(t=r.sign+t)),16===e&&(r.alternate&&(t="0x"+t),t=r.specifier===s.call(r.specifier)?s.call(t):l.call(t)),8===e&&r.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}var p=Math.abs,g=String.prototype.toLowerCase,d=String.prototype.toUpperCase,h=String.prototype.replace,y=/e\+(\d)$/,b=/e-(\d)$/,v=/^(\d+)$/,w=/^(\d+)e/,m=/\.0$/,j=/\.0*e/,_=/(\..*[^0])0*e/;function E(r){var e,t,n=parseFloat(r.arg);if(!isFinite(n)){if(!a(r.arg))throw new Error("invalid floating-point number. Value: "+t);n=r.arg}switch(r.specifier){case"e":case"E":t=n.toExponential(r.precision);break;case"f":case"F":t=n.toFixed(r.precision);break;case"g":case"G":p(n)<1e-4?((e=r.precision)>0&&(e-=1),t=n.toExponential(e)):t=n.toPrecision(r.precision),r.alternate||(t=h.call(t,_,"$1e"),t=h.call(t,j,"e"),t=h.call(t,m,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=h.call(t,y,"e+0$1"),t=h.call(t,b,"e-0$1"),r.alternate&&(t=h.call(t,v,"$1."),t=h.call(t,w,"$1.e")),n>=0&&r.sign&&(t=r.sign+t),t=r.specifier===d.call(r.specifier)?d.call(t):g.call(t)}function S(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}var x=String.fromCharCode,O=isNaN,k=Array.isArray;function A(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function T(r){var e,t,n,o,i,a,c,l,s,p,g,d,h;if(!k(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(a="",c=1,l=0;l<r.length;l++)if(n=r[l],"string"==typeof n)a+=n;else{if(e=void 0!==n.precision,!(n=A(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+l+"`. Value: `"+n+"`.");for(n.mapping&&(c=n.mapping),t=n.flags,s=0;s<t.length;s++)switch(o=t.charAt(s)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+o)}if("*"===n.width){if(n.width=parseInt(arguments[c],10),c+=1,O(n.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[c],10),c+=1,O(n.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[c],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=f(n);break;case"s":n.maxWidth=e?n.precision:-1;break;case"c":if(!O(n.arg)){if((i=parseInt(n.arg,10))<0||i>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=O(i)?String(n.arg):x(i)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=E(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=u(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=(p=n.arg,g=n.width,d=n.padRight,h=void 0,(h=g-p.length)<0?p:p=d?p+S(h):S(h)+p)),a+=n.arg||"",c+=1}return a}var V=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function F(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function P(r){var e,t,n,o;for(t=[],o=0,n=V.exec(r);n;)(e=r.slice(o,V.lastIndex-n[0].length)).length&&t.push(e),t.push(F(n)),o=V.lastIndex,n=V.exec(r);return(e=r.slice(o)).length&&t.push(e),t}function C(r){var e,t;if("string"!=typeof r)throw new TypeError(C("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=[P(r)],t=1;t<arguments.length;t++)e.push(arguments[t]);return T.apply(null,e)}var I,$=Object.prototype,L=$.toString,B=$.__defineGetter__,R=$.__defineSetter__,G=$.__lookupGetter__,Z=$.__lookupSetter__;I=function(){try{return o({},"x",{}),!0}catch(r){return!1}}()?i:function(r,e,t){var n,o,i,a;if("object"!=typeof r||null===r||"[object Array]"===L.call(r))throw new TypeError(C("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===L.call(t))throw new TypeError(C("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((o="value"in t)&&(G.call(r,e)||Z.call(r,e)?(n=r.__proto__,r.__proto__=$,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),i="get"in t,a="set"in t,o&&(i||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&B&&B.call(r,e,t.get),a&&R&&R.call(r,e,t.set),r};var M=I;function U(r,e,t){M(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}function W(r){return"boolean"==typeof r}var N="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function X(){return N&&"symbol"==typeof Symbol.toStringTag}var q=Object.prototype.toString;var z=Object.prototype.hasOwnProperty;function D(r,e){return null!=r&&z.call(r,e)}var H="function"==typeof Symbol?Symbol:void 0,J="function"==typeof H?H.toStringTag:"";var K=X()?function(r){var e,t,n;if(null==r)return q.call(r);t=r[J],e=D(r,J);try{r[J]=void 0}catch(e){return q.call(r)}return n=q.call(r),e?r[J]=t:delete r[J],n}:function(r){return q.call(r)},Q=Boolean,Y=Boolean.prototype.toString;var rr=X();function er(r){return"object"==typeof r&&(r instanceof Q||(rr?function(r){try{return Y.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===K(r)))}function tr(r){return W(r)||er(r)}U(tr,"isPrimitive",W),U(tr,"isObject",er);var nr="object"==typeof self?self:null,or="object"==typeof window?window:null,ir="object"==typeof global?global:null,ar="object"==typeof globalThis?globalThis:null;var cr=function(r){if(arguments.length){if(!W(r))throw new TypeError(C("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return new Function("return this;")()}if(ar)return ar;if(nr)return nr;if(or)return or;if(ir)return ir;throw new Error("unexpected error. Unable to resolve global object.")}(),ur=cr.document&&cr.document.childNodes,lr=Int8Array;function sr(){return/^\s*function\s*([^(]*)/i}var fr=/^\s*function\s*([^(]*)/i;U(sr,"REGEXP",fr);var pr=Array.isArray?Array.isArray:function(r){return"[object Array]"===K(r)};function gr(r){return null!==r&&"object"==typeof r}function dr(r){var e,t,n,o;if(("Object"===(t=K(r).slice(8,-1))||"Error"===t)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(e=fr.exec(n.toString()))return e[1]}return gr(o=r)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":t}U(gr,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError(C("invalid argument. Must provide a function. Value: `%s`.",r));return function(e){var t,n;if(!pr(e))return!1;if(0===(t=e.length))return!1;for(n=0;n<t;n++)if(!1===r(e[n]))return!1;return!0}}(gr));var hr="function"==typeof n||"object"==typeof lr||"function"==typeof ur?function(r){return dr(r).toLowerCase()}:function(r){var e;return null===r?"null":"object"===(e=typeof r)?dr(r).toLowerCase():e};function yr(r){return"function"===hr(r)}function br(){var r,e=arguments,t="https://stdlib.io/e/"+e[0]+"?";for(r=1;r<e.length;r++)t+="&arg[]="+encodeURIComponent(e[r]);return t}var vr,wr=Object,mr=Object.getPrototypeOf;vr=yr(Object.getPrototypeOf)?mr:function(r){var e=function(r){return r.__proto__}(r);return e||null===e?e:"[object Function]"===K(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null};var jr=vr;var _r=Object.prototype;function Er(r){var e;return!!function(r){return"object"==typeof r&&null!==r&&!pr(r)}(r)&&(e=function(r){return null==r?null:(r=wr(r),jr(r))}(r),!e||!D(r,"constructor")&&D(e,"constructor")&&yr(e.constructor)&&"[object Function]"===K(e.constructor)&&D(e,"isPrototypeOf")&&yr(e.isPrototypeOf)&&(e===_r||function(r){var e;for(e in r)if(!D(r,e))return!1;return!0}(r)))}return function(r,e,n){var o,i,a,c,u,l,s,f;if(!t(r))throw new TypeError(br("1SLAh",r));if(i={},2===arguments.length)l=e;else{if(a=function(r,e){return Er(e)?(D(e,"thisArg")&&(r.thisArg=e.thisArg),null):new TypeError(br("1SL2V",e))}(i,e),a)throw a;l=n}if(!yr(l))throw new TypeError(br("1SL3q",l));for(o=i.thisArg,u=r.length,c={},f=0;f<u;f++)D(c,s=l.call(o,r[f],f))?c[s]+=1:c[s]=1;return c}}));
//# sourceMappingURL=index.js.map
