"use strict";var f=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(n){throw (r=0, n)}};};var o=f(function(j,m){
var w=require('@stdlib/assert-is-plain-object/dist'),b=require('@stdlib/assert-has-own-property/dist'),p=require('@stdlib/error-tools-fmtprodmsg/dist');function d(e,r){return w(r)?(b(r,"thisArg")&&(e.thisArg=r.thisArg),null):new TypeError(p('1SL2V',r));}m.exports=d
});var q=f(function(F,c){
var A=require('@stdlib/assert-is-collection/dist'),y=require('@stdlib/assert-is-function/dist'),O=require('@stdlib/assert-has-own-property/dist'),h=require('@stdlib/error-tools-fmtprodmsg/dist'),x=o();function E(e,r,n){var g,s,v,a,l,t,u,i;if(!A(e))throw new TypeError(h('1SLAh',e));if(s={},arguments.length===2)t=r;else{if(v=x(s,r),v)throw v;t=n}if(!y(t))throw new TypeError(h('1SL3q',t));for(g=s.thisArg,l=e.length,a={},i=0;i<l;i++)u=t.call(g,e[i],i),O(a,u)?a[u]+=1:a[u]=1;return a}c.exports=E
});var T=q();module.exports=T;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
