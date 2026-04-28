"use strict";var d=function(n,r){return function(){return r||n((r={exports:{}}).exports,r),r.exports}};var f=d(function(b,v){
var i=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),q=require('@stdlib/assert-is-iterator-like/dist'),m=require('@stdlib/assert-is-function/dist'),u=require('@stdlib/symbol-iterator/dist'),g=require('@stdlib/stats-incr-range/dist'),p=require('@stdlib/error-tools-fmtprodmsg/dist');function o(n){var r,t,a;if(!q(n))throw new TypeError(p('1KV3w',n));return a=g(),r={},i(r,"next",s),i(r,"return",c),u&&m(n[u])&&i(r,u,l),r;function s(){var e;return t?{done:!0}:(e=n.next(),e.done?(t=!0,e):(typeof e.value=="number"?e=a(e.value):e=a(NaN),{value:e,done:!1}))}function c(e){return t=!0,arguments.length?{value:e,done:!0}:{done:!0}}function l(){return o(n[u]())}}v.exports=o
});var x=f();module.exports=x;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
