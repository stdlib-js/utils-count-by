// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,r;e=this,r=function(){"use strict";var e=Math.floor;function r(r){return"object"==typeof r&&null!==r&&"number"==typeof r.length&&(t=r.length,e(t)===t)&&r.length>=0&&r.length<=9007199254740991;var t}var t=/./,n="function"==typeof Object.defineProperty?Object.defineProperty:null,i=Object.defineProperty;function o(e){return"number"==typeof e}function a(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}function c(e,r,t){var n=!1,i=r-e.length;return i<0||(function(e){return"-"===e[0]}(e)&&(n=!0,e=e.substr(1)),e=t?e+a(i):a(i)+e,n&&(e="-"+e)),e}var s=String.prototype.toLowerCase,l=String.prototype.toUpperCase;function u(e){var r,t,n;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(t=e.arg,n=parseInt(t,10),!isFinite(n)){if(!o(t))throw new Error("invalid integer. Value: "+t);n=0}return n<0&&("u"===e.specifier||10!==r)&&(n=4294967295+n+1),n<0?(t=(-n).toString(r),e.precision&&(t=c(t,e.precision,e.padRight)),t="-"+t):(t=n.toString(r),n||e.precision?e.precision&&(t=c(t,e.precision,e.padRight)):t="",e.sign&&(t=e.sign+t)),16===r&&(e.alternate&&(t="0x"+t),t=e.specifier===l.call(e.specifier)?l.call(t):s.call(t)),8===r&&e.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function f(e){return"string"==typeof e}var p=Math.abs,g=String.prototype.toLowerCase,d=String.prototype.toUpperCase,h=String.prototype.replace,y=/e\+(\d)$/,b=/e-(\d)$/,w=/^(\d+)$/,v=/^(\d+)e/,m=/\.0$/,S=/\.0*e/,E=/(\..*[^0])0*e/;function j(e){var r,t,n=parseFloat(e.arg);if(!isFinite(n)){if(!o(e.arg))throw new Error("invalid floating-point number. Value: "+t);n=e.arg}switch(e.specifier){case"e":case"E":t=n.toExponential(e.precision);break;case"f":case"F":t=n.toFixed(e.precision);break;case"g":case"G":p(n)<1e-4?((r=e.precision)>0&&(r-=1),t=n.toExponential(r)):t=n.toPrecision(e.precision),e.alternate||(t=h.call(t,E,"$1e"),t=h.call(t,S,"e"),t=h.call(t,m,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return t=h.call(t,y,"e+0$1"),t=h.call(t,b,"e-0$1"),e.alternate&&(t=h.call(t,w,"$1."),t=h.call(t,v,"$1.e")),n>=0&&e.sign&&(t=e.sign+t),t=e.specifier===d.call(e.specifier)?d.call(t):g.call(t)}function x(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}function k(e,r,t){var n=r-e.length;return n<0?e:e=t?e+x(n):x(n)+e}var _=String.fromCharCode,T=isNaN,O=Array.isArray;function V(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function A(e){var r,t,n,i,o,a,s,l,p;if(!O(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(a="",s=1,l=0;l<e.length;l++)if(f(n=e[l]))a+=n;else{if(r=void 0!==n.precision,!(n=V(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+l+"`. Value: `"+n+"`.");for(n.mapping&&(s=n.mapping),t=n.flags,p=0;p<t.length;p++)switch(i=t.charAt(p)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[s],10),s+=1,T(n.width))throw new TypeError("the argument for * width at position "+s+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(r&&"*"===n.precision){if(n.precision=parseInt(arguments[s],10),s+=1,T(n.precision))throw new TypeError("the argument for * precision at position "+s+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,r=!1)}switch(n.arg=arguments[s],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(n.padZeros=!1),n.arg=u(n);break;case"s":n.maxWidth=r?n.precision:-1;break;case"c":if(!T(n.arg)){if((o=parseInt(n.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=T(o)?String(n.arg):_(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(n.precision=6),n.arg=j(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=c(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=k(n.arg,n.width,n.padRight)),a+=n.arg||"",s+=1}return a}var F=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function $(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function I(e){var r,t,n,i;for(t=[],i=0,n=F.exec(e);n;)(r=e.slice(i,F.lastIndex-n[0].length)).length&&t.push(r),t.push($(n)),i=F.lastIndex,n=F.exec(e);return(r=e.slice(i)).length&&t.push(r),t}function C(e){return"string"==typeof e}function P(e){var r,t;if(!C(e))throw new TypeError(P("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=[I(e)],t=1;t<arguments.length;t++)r.push(arguments[t]);return A.apply(null,r)}var R,L=Object.prototype,Z=L.toString,B=L.__defineGetter__,W=L.__defineSetter__,G=L.__lookupGetter__,M=L.__lookupSetter__;R=function(){try{return n({},"x",{}),!0}catch(e){return!1}}()?i:function(e,r,t){var n,i,o,a;if("object"!=typeof e||null===e||"[object Array]"===Z.call(e))throw new TypeError(P("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof t||null===t||"[object Array]"===Z.call(t))throw new TypeError(P("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(G.call(e,r)||M.call(e,r)?(n=e.__proto__,e.__proto__=L,delete e[r],e[r]=t.value,e.__proto__=n):e[r]=t.value),o="get"in t,a="set"in t,i&&(o||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&B&&B.call(e,r,t.get),a&&W&&W.call(e,r,t.set),e};var N=R;function U(e,r,t){N(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})}function X(e){return"boolean"==typeof e}function z(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}var q=z();function D(){return q&&"symbol"==typeof Symbol.toStringTag}var H=Object.prototype.toString,J=Object.prototype.hasOwnProperty;function K(e,r){return null!=e&&J.call(e,r)}var Q="function"==typeof Symbol?Symbol:void 0,Y="function"==typeof Q?Q.toStringTag:"",ee=D()?function(e){var r,t,n;if(null==e)return H.call(e);t=e[Y],r=K(e,Y);try{e[Y]=void 0}catch(r){return H.call(e)}return n=H.call(e),r?e[Y]=t:delete e[Y],n}:function(e){return H.call(e)},re=Boolean,te=Boolean.prototype.toString,ne=D();function ie(e){return"object"==typeof e&&(e instanceof re||(ne?function(e){try{return te.call(e),!0}catch(e){return!1}}(e):"[object Boolean]"===ee(e)))}function oe(e){return X(e)||ie(e)}function ae(){return new Function("return this;")()}U(oe,"isPrimitive",X),U(oe,"isObject",ie);var ce="object"==typeof self?self:null,se="object"==typeof window?window:null,le="object"==typeof globalThis?globalThis:null,ue=function(e){if(arguments.length){if(!X(e))throw new TypeError(P("invalid argument. Must provide a boolean. Value: `%s`.",e));if(e)return ae()}if(le)return le;if(ce)return ce;if(se)return se;throw new Error("unexpected error. Unable to resolve global object.")}(),fe=ue.document&&ue.document.childNodes,pe=Int8Array;function ge(){return/^\s*function\s*([^(]*)/i}var de=/^\s*function\s*([^(]*)/i;U(ge,"REGEXP",de);var he=z(),ye=Object.prototype.toString,be="function"==typeof Symbol?Symbol:void 0,we="function"==typeof be?be.toStringTag:"",ve=he&&"symbol"==typeof Symbol.toStringTag?function(e){var r,t,n;if(null==e)return ye.call(e);t=e[we],r=K(e,we);try{e[we]=void 0}catch(r){return ye.call(e)}return n=ye.call(e),r?e[we]=t:delete e[we],n}:function(e){return ye.call(e)},me=Array.isArray?Array.isArray:function(e){return"[object Array]"===ve(e)};function Se(e){return null!==e&&"object"==typeof e}function Ee(e){var r,t,n,i;if(("Object"===(t=ee(e).slice(8,-1))||"Error"===t)&&e.constructor){if("string"==typeof(n=e.constructor).name)return n.name;if(r=de.exec(n.toString()))return r[1]}return Se(i=e)&&(i._isBuffer||i.constructor&&"function"==typeof i.constructor.isBuffer&&i.constructor.isBuffer(i))?"Buffer":t}U(Se,"isObjectLikeArray",function(e){if("function"!=typeof e)throw new TypeError(P("invalid argument. Must provide a function. Value: `%s`.",e));return function(r){var t,n;if(!me(r))return!1;if(0===(t=r.length))return!1;for(n=0;n<t;n++)if(!1===e(r[n]))return!1;return!0}}(Se));var je="function"==typeof t||"object"==typeof pe||"function"==typeof fe?function(e){return Ee(e).toLowerCase()}:function(e){var r;return null===e?"null":"object"==(r=typeof e)?Ee(e).toLowerCase():r};function xe(e){return"function"===je(e)}function ke(e){return"number"==typeof e}function _e(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}function Te(e,r,t){var n=!1,i=r-e.length;return i<0||(function(e){return"-"===e[0]}(e)&&(n=!0,e=e.substr(1)),e=t?e+_e(i):_e(i)+e,n&&(e="-"+e)),e}var Oe=String.prototype.toLowerCase,Ve=String.prototype.toUpperCase;function Ae(e){var r,t,n;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(t=e.arg,n=parseInt(t,10),!isFinite(n)){if(!ke(t))throw new Error("invalid integer. Value: "+t);n=0}return n<0&&("u"===e.specifier||10!==r)&&(n=4294967295+n+1),n<0?(t=(-n).toString(r),e.precision&&(t=Te(t,e.precision,e.padRight)),t="-"+t):(t=n.toString(r),n||e.precision?e.precision&&(t=Te(t,e.precision,e.padRight)):t="",e.sign&&(t=e.sign+t)),16===r&&(e.alternate&&(t="0x"+t),t=e.specifier===Ve.call(e.specifier)?Ve.call(t):Oe.call(t)),8===r&&e.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function Fe(e){return"string"==typeof e}var $e=Math.abs,Ie=String.prototype.toLowerCase,Ce=String.prototype.toUpperCase,Pe=String.prototype.replace,Re=/e\+(\d)$/,Le=/e-(\d)$/,Ze=/^(\d+)$/,Be=/^(\d+)e/,We=/\.0$/,Ge=/\.0*e/,Me=/(\..*[^0])0*e/;function Ne(e){var r,t,n=parseFloat(e.arg);if(!isFinite(n)){if(!ke(e.arg))throw new Error("invalid floating-point number. Value: "+t);n=e.arg}switch(e.specifier){case"e":case"E":t=n.toExponential(e.precision);break;case"f":case"F":t=n.toFixed(e.precision);break;case"g":case"G":$e(n)<1e-4?((r=e.precision)>0&&(r-=1),t=n.toExponential(r)):t=n.toPrecision(e.precision),e.alternate||(t=Pe.call(t,Me,"$1e"),t=Pe.call(t,Ge,"e"),t=Pe.call(t,We,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return t=Pe.call(t,Re,"e+0$1"),t=Pe.call(t,Le,"e-0$1"),e.alternate&&(t=Pe.call(t,Ze,"$1."),t=Pe.call(t,Be,"$1.e")),n>=0&&e.sign&&(t=e.sign+t),t=e.specifier===Ce.call(e.specifier)?Ce.call(t):Ie.call(t)}function Ue(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}function Xe(e,r,t){var n=r-e.length;return n<0?e:e=t?e+Ue(n):Ue(n)+e}var ze=String.fromCharCode,qe=isNaN,De=Array.isArray;function He(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function Je(e){var r,t,n,i,o,a,c,s,l;if(!De(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(a="",c=1,s=0;s<e.length;s++)if(Fe(n=e[s]))a+=n;else{if(r=void 0!==n.precision,!(n=He(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+n+"`.");for(n.mapping&&(c=n.mapping),t=n.flags,l=0;l<t.length;l++)switch(i=t.charAt(l)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[c],10),c+=1,qe(n.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(r&&"*"===n.precision){if(n.precision=parseInt(arguments[c],10),c+=1,qe(n.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,r=!1)}switch(n.arg=arguments[c],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(n.padZeros=!1),n.arg=Ae(n);break;case"s":n.maxWidth=r?n.precision:-1;break;case"c":if(!qe(n.arg)){if((o=parseInt(n.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=qe(o)?String(n.arg):ze(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(n.precision=6),n.arg=Ne(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=Te(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=Xe(n.arg,n.width,n.padRight)),a+=n.arg||"",c+=1}return a}var Ke=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function Qe(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function Ye(e){var r,t,n,i;for(t=[],i=0,n=Ke.exec(e);n;)(r=e.slice(i,Ke.lastIndex-n[0].length)).length&&t.push(r),t.push(Qe(n)),i=Ke.lastIndex,n=Ke.exec(e);return(r=e.slice(i)).length&&t.push(r),t}function er(e){return"string"==typeof e}function rr(e){var r,t,n;if(!er(e))throw new TypeError(rr("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=Ye(e),(t=new Array(arguments.length))[0]=r,n=1;n<t.length;n++)t[n]=arguments[n];return Je.apply(null,t)}var tr,nr=Object,ir=Object.getPrototypeOf,or=z(),ar=Object.prototype.toString,cr="function"==typeof Symbol?Symbol:void 0,sr="function"==typeof cr?cr.toStringTag:"",lr=or&&"symbol"==typeof Symbol.toStringTag?function(e){var r,t,n;if(null==e)return ar.call(e);t=e[sr],r=K(e,sr);try{e[sr]=void 0}catch(r){return ar.call(e)}return n=ar.call(e),r?e[sr]=t:delete e[sr],n}:function(e){return ar.call(e)};tr=xe(Object.getPrototypeOf)?ir:function(e){var r=function(e){return e.__proto__}(e);return r||null===r?r:"[object Function]"===lr(e.constructor)?e.constructor.prototype:e instanceof Object?Object.prototype:null};var ur=tr,fr=z(),pr=Object.prototype.toString,gr="function"==typeof Symbol?Symbol:void 0,dr="function"==typeof gr?gr.toStringTag:"",hr=fr&&"symbol"==typeof Symbol.toStringTag?function(e){var r,t,n;if(null==e)return pr.call(e);t=e[dr],r=K(e,dr);try{e[dr]=void 0}catch(r){return pr.call(e)}return n=pr.call(e),r?e[dr]=t:delete e[dr],n}:function(e){return pr.call(e)},yr=Object.prototype;function br(e){var r;return!!function(e){return"object"==typeof e&&null!==e&&!me(e)}(e)&&(r=function(e){return null==e?null:(e=nr(e),ur(e))}(e),!r||!K(e,"constructor")&&K(r,"constructor")&&xe(r.constructor)&&"[object Function]"===hr(r.constructor)&&K(r,"isPrototypeOf")&&xe(r.isPrototypeOf)&&(r===yr||function(e){var r;for(r in e)if(!K(e,r))return!1;return!0}(e)))}function wr(e,r){return br(r)?(K(r,"thisArg")&&(e.thisArg=r.thisArg),null):new TypeError(rr("invalid argument. Options argument must be an object. Value: `%s`.",r))}return function(e,t,n){var i,o,a,c,s,l,u,f;if(!r(e))throw new TypeError(rr("invalid argument. First argument must be a collection. Value: `%s`.",e));if(o={},2===arguments.length)l=t;else{if(a=wr(o,t))throw a;l=n}if(!xe(l))throw new TypeError(rr("invalid argument. Last argument must be a function. Value: `%s`.",l));for(i=o.thisArg,s=e.length,c={},f=0;f<s;f++)K(c,u=l.call(i,e[f],f))?c[u]+=1:c[u]=1;return c}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(e="undefined"!=typeof globalThis?globalThis:e||self).countBy=r();
//# sourceMappingURL=browser.js.map
