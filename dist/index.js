"use strict";var l=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var m=l(function(j,f){
var w=require('@stdlib/assert-is-plain-object/dist'),b=require('@stdlib/assert-has-own-property/dist'),p=require('@stdlib/error-tools-fmtprodmsg/dist');function d(e,r){return w(r)?(b(r,"thisArg")&&(e.thisArg=r.thisArg),null):new TypeError(p('1SL2V',r));}f.exports=d
});var c=l(function(F,h){
var A=require('@stdlib/assert-is-collection/dist'),y=require('@stdlib/assert-is-function/dist'),O=require('@stdlib/assert-has-own-property/dist'),o=require('@stdlib/error-tools-fmtprodmsg/dist'),x=m();function E(e,r,q){var v,n,s,a,g,t,u,i;if(!A(e))throw new TypeError(o('1SLAh',e));if(n={},arguments.length===2)t=r;else{if(s=x(n,r),s)throw s;t=q}if(!y(t))throw new TypeError(o('1SL3q',t));for(v=n.thisArg,g=e.length,a={},i=0;i<g;i++)u=t.call(v,e[i],i),O(a,u)?a[u]+=1:a[u]=1;return a}h.exports=E
});var T=c();module.exports=T;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
