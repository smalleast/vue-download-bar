!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.VueDownloadBar=e():t.VueDownloadBar=e()}(this,function(){return function(t){function e(i){if(n[i])return n[i].exports;var r=n[i]={exports:{},id:i,loaded:!1};return t[i].call(r.exports,r,r.exports,e),r.loaded=!0,r.exports}var n={};return e.m=t,e.c=n,e.p="/",e(0)}([function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}var r=n(6),o=i(r);t.exports=o.default},function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var r=n(4),o=i(r);e.default={props:{mlinks:{type:[Object,Array]},AppUrl:{type:[Object,String]},className:{type:String}},methods:{download:function(){o.default.ios?window.location.href=this.AppUrl.IOS:o.default.android?window.location.href=this.AppUrl.Android:window.location.href=this.AppUrl.PC}},mounted:function(){var t=[];this.mlinks.length>0&&this.mlinks.map(function(e,n){e.hashId&&(t=[{mlink:e.link,button:document.querySelector("a#openAppDown"),params:{id:e.hashId}}])}),o.default.ios&&!o.default.ios8&&t?new Mlink(t):document.getElementById("openAppDown").onclick=function(){this.download()}}}},function(t,e,n){e=t.exports=n(3)(),e.push([t.id,".download-bar{height:50px;z-index:99}.download-bar,.download-bar .bottom-tip{width:100%;position:fixed;bottom:0;left:0}.download-bar .bottom-tip{height:49px;line-height:49px;text-align:center;background:#a72e23;color:#fff;z-index:100;font-size:14px}.download-bar .bottom-tip:active{background:#7b1c1a}","",{version:3,sources:["/./src/components/download-bar.vue"],names:[],mappings:"AACA,cAAyB,YAAY,AAA+B,UAAU,CAC7E,AACD,wCAFc,WAAW,AAAY,eAAe,SAAS,MAAO,CAGnE,AADD,0BAAqC,YAAY,iBAAiB,kBAAkB,mBAAmB,WAAW,AAAe,YAAY,AAAgB,cAAc,CAC1K,AACD,iCAAiC,kBAAkB,CAClD",file:"download-bar.vue",sourcesContent:["\n.download-bar{width:100%;height:50px;position:fixed;bottom:0;left:0;z-index:99\n}\n.download-bar .bottom-tip{width:100%;height:49px;line-height:49px;text-align:center;background:#a72e23;color:#fff;position:fixed;z-index:100;bottom:0;left:0;font-size:14px\n}\n.download-bar .bottom-tip:active{background:#7b1c1a\n}\n"],sourceRoot:"webpack://"}])},function(t,e){t.exports=function(){var t=[];return t.toString=function(){for(var t=[],e=0;e<this.length;e++){var n=this[e];n[2]?t.push("@media "+n[2]+"{"+n[1]+"}"):t.push(n[1])}return t.join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var i={},r=0;r<this.length;r++){var o=this[r][0];"number"==typeof o&&(i[o]=!0)}for(r=0;r<e.length;r++){var s=e[r];"number"==typeof s[0]&&i[s[0]]||(n&&!s[2]?s[2]=n:n&&(s[2]="("+s[2]+") and ("+n+")"),t.push(s))}},t}},function(t,e,n){!function(){var e=e||window||this,i=e.nx||n(5),r=e.navigator,o=r.userAgent,s=document.documentElement.style,a=Object.prototype.toString,c="[object Opera]",u={trident:"ms",gecko:"Moz",webkit:"Webkit",presto:"O"},_={trident:"-ms-",gecko:"-moz-",webkit:"-webkit-",presto:"-o-"},f=i.declare("nx.Browser",{statics:{init:function(){i.mix(this,{trident:o.indexOf("Trident")>-1,presto:o.indexOf("Presto")>-1,webKit:o.indexOf("AppleWebKit")>-1,gecko:o.indexOf("Gecko")>-1&&o.indexOf("KHTML")==-1,mobile:!!o.match(/AppleWebKit.*Mobile.*/),ios:!!o.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),android:o.indexOf("Android")>-1||o.indexOf("Adr")>-1,iPhone:o.indexOf("iPhone")>-1,iPad:o.indexOf("iPad")>-1,webApp:o.indexOf("Safari")==-1,weixin:o.indexOf("MicroMessenger")>-1,qq:" qq"==o.match(/\sQQ/i),ios8:o.indexOf("OS 8")>-1})},engine:function(){return e.opera&&a.call(opera)===c?"presto":"MozAppearance"in s?"gecko":"WebkitAppearance"in s?"webkit":"string"==typeof r.cpuClass?"trident":"unknown"},language:function(){return(r.browserLanguage||r.language).toLowerCase()},jsPrefix:function(){return u[f.engine()]},cssPrefix:function(){return _[f.engine()]}}});"undefined"!=typeof t&&t.exports&&(t.exports=f)}()},function(t,e){nx={BREAKER:{},VERSION:"1.0.15",DEBUG:!1,GLOBAL:function(){return this}.call(null)},function(t,e){var n,i={},r=i.toString,o=/(?:{)([\w.]+?)(?:})/gm,s="Boolean Number String Function Array Date RegExp Object Error",a=[],c=a.filter,u=a.slice;a.concat;s.split(" ").forEach(function(t){i["[object "+t+"]"]=t.toLowerCase()}),t.noop=function(){},t.error=function(t){throw new Error(t)},t.each=function(e,n,i){var r,o;if(e){if(e.each)return e.each(n,i);if(o=e.length,t.isArrayLike(e))for(r=0;r<o&&n.call(i,r,e[r])!==t.BREAKER;r++);else for(r in e)if(e.hasOwnProperty(r)&&n.call(i,r,e[r])===t.BREAKER)break}},t.type=function(t){return t&&t.type?t.type():null==t?String(t):i[r.call(t)]||"object"},t.camelCase=function(t){return(t||"").replace(/[-_]+(.)?/g,function(t,e){return e?e.toUpperCase():""})},t.trim=function(t){return null==t?"":String.prototype.trim.call(t)},t.capitalize=function(t){return t.charAt(0).toUpperCase()+t.slice(1)},t.deserializeValue=function(e){try{return e?"true"==e||"false"!=e&&("null"==e?null:+e+""==e?+e:/^[\[\{]/.test(e)?t.parse(e):e):e}catch(t){return e}},t.dasherize=function(t){return t.replace(/::/g,"/").replace(/([A-Z]+)([A-Z][a-z])/g,"$1_$2").replace(/([a-z\d])([A-Z])/g,"$1_$2").replace(/_/g,"-").toLowerCase()},t.clone=function(e,i,r){var o=t.isPlainObject,s=t.isArray;for(key in i)r&&(o(i[key])||s(i[key]))?(o(i[key])&&!o(e[key])&&(e[key]={}),s(i[key])&&!s(e[key])&&(e[key]=[]),t.clone(e[key],i[key],r)):i[key]!==n&&(e[key]=i[key]);return e},t.mix=function(e){var n,i=u.call(arguments,1);return"boolean"==typeof e&&(n=e,e=i.shift()),i.forEach(function(i){t.clone(e,i,n)}),e},t.isNumber=function(t){return!isNaN(t)&&"number"==typeof t},t.isBoolean=function(t){return"boolean"==typeof t},t.isString=function(t){return"string"==typeof t},t.isArray=Array.isArray||function(t){return t instanceof Array},t.isArrayLike=function(t){return"number"==typeof t.length},t.isFunction=function(t){return"function"==typeof t},t.isObject=function(e){return"object"==t.type(e)},t.isDocument=function(t){return null!=t&&9==t.nodeType},t.isWindow=function(t){return null!=t&&t==t.global},t.isPlainObject=function(e){return t.isObject(e)&&!t.isWindow(e)&&Object.getPrototypeOf(e)==Object.prototype},t.isEmptyObject=function(t){var e;for(e in t)return!1;return!0},t.has=function(t,e){return!!t&&(t.has?t.has(e):e in t)},t.get=function(t,e){if(t)return t.get?t.get(e):t[e]},t.set=function(t,e,n){if(t)return t.set?t.set(e,n):t[e]=n},t.gets=function(e){if(e)return e.gets?e.gets():t.mix({},e)},t.sets=function(e,n){if(e)return e.sets?e.sets(n):t.mix(e,n)},t.is=function(e,i){if(e&&e.is)return e.is(i);if("string"==typeof i)switch(i){case"undefined":return e===n;case"null":return null===e;case"object":return t.isObject(e);case"plain":return t.isPlainObject(e);case"string":case"boolean":case"number":case"function":return typeof e===i;case"array":return t.isArray(e);default:return r(e).toLowerCase().slice(8,-1)===i}else if("function"==typeof i)return e instanceof i},t.path=function(e,i,r){"string"!=typeof i&&t.error("Path must be a string!");var o,s=i.split("."),a=e||t.global;return n===r?t.each(s,function(e,n){a=t.get(a,n)}):(o=s.pop(),s.forEach(function(t){a=a[t]=a[t]||{}}),t.set(a,o,r)),a},t.format=function(e,n){var i=e||"",r=t.isArray(n)?function(t,e){return n[e]}:function(e,i){return t.path(n,i)};return i=e.replace(o,r)},t.toArray=function(e){return e?t.isArrayLike(e)?u.call(e):[e]:[]},t.compact=function(t){return c.call(t,function(t){return null!=t})},t.parse=function(t){try{return JSON.parse(t)}catch(t){}return t},t.stringify=function(t){try{return JSON.stringify(t)}catch(t){}return t},t.delete=function(e,n){var i=t.clone({},e,!0);return n.forEach(function(t){delete i[t]}),i},t.param=function(t){var e,n,i,r=[];for(e in t)n=t[e],null!=n&&(i=angular.isArray(n)?n.join():n,r.push(encodeURIComponent(e)+"="+encodeURIComponent(i)));return r.join("&")},t.hashlize=function(n){var i,r,o,s,a={},c=n||e.location.search.substring(1),u=c.split("&");return t.each(u,function(t,e){switch(r=e.split("="),o=r[0],s=r[1],typeof a[o]){case"undefined":a[o]=decodeURIComponent(s);break;case"string":i=[a[o],decodeURIComponent(s)],a[o]=i;break;default:a[o].push(decodeURIComponent(s))}}),a}}(nx,nx.GLOBAL),"undefined"!=typeof t&&t.exports&&(t.exports=nx),function(t,e){t.event={init:function(){this.__listeners__={}},destroy:function(){this.__listeners__={}},on:function(t,e,n){var i=this.__listeners__,r=i[t]=i[t]||[];r.push({owner:this,handler:e,context:n})},off:function(e,n,i){var r=this.__listeners__[e];n?t.each(r,function(t,e){e.handler!==n||i&&e.context!==i||r.splice(t,1)}):r.length=0},fire:function(e,n){var i=this.__listeners__[e];i&&t.each(i,function(e,i){if(i&&i.handler&&i.handler.call(i.context||i.owner,i.owner,n)===!1)return t.BREAKER})}}}(nx,nx.GLOBAL),function(t,e){function n(){}var i={__classId__:0,__type__:"nx.RootClass",__base__:Object,__module__:"root",__meta__:{},__init__:t.noop,__static_init__:t.noop,__mixins__:[],__statics__:{},__properties__:[],__methods__:{}},r=i.__methods__=n.prototype={constructor:n,base:function(){var t=this.base.caller.__base__;if(t)return t.apply(this,arguments)},setMeta:function(t,e){this["__"+t+"__"]=e},getMeta:function(t){return this["__"+t+"__"]},is:function(e){var n=this.__type__;if(n===e)return!0;var i=this.__base__;return!!i&&t.is(i.prototype,e)},type:function(){return this.__type__},has:function(t){return t in this},get:function(t){var e=this.memberType(t);switch(e){case"method":case"property":case"undefined":return this[t];case"static":return this.constructor[t]}},set:function(t,e){this[t]=e},gets:function(){var e={};return t.each(this.__properties__,function(t){e[t]=this.get(t)},this),e},sets:function(e){t.each(e,function(t,e){this.set(t,e)},this)},member:function(t){return this["@"+t]},memberMeta:function(t){var e=this.member(t);return e&&e.__meta__},memberType:function(t){var e=this.member(t);return e&&e.__type__||"undefined"},init:function(){},destroy:function(){},toString:function(){return"[Class@"+this.__type__+"]"}};t.mix(n,i),t.mix(r,i),t.mix(r,t.event),t.RootClass=n}(nx,nx.GLOBAL),function(t,e){t.defineProperty=function(e,n,i){var r,o,s,a,c,u,_="@"+n,f=t.isObject(i)?i:{value:i};return"value"in f?(c=f.value,u="_"+n,r=t.type(c),o=function(){return u in this?this[u]:t.isFunction(r)?c.call(this):c},s=function(t){this[u]=t}):(o=i.get||e[_]&&e[_].get||t.noop,s=i.set||e[_]&&e[_].set||t.noop),_ in e&&(o.__base__=e[_].get,s.__base__=e[_].set),a=e[_]={__meta__:i,__name__:n,__type__:"property",get:o,set:s,configurable:!0},Object.defineProperty(e,n,a),a},t.defineMethod=function(t,e,n){var i="@"+e,r=t[i]={__meta__:n,__name__:e,__type__:"method"};return t[e]=n,r},t.defineStatic=function(t,e,n){var i={__meta__:n,__name__:e,__type__:"static"};return t[e]=n,i}}(nx,nx.GLOBAL),function(t,e){function n(e,n){this.type=e,this.meta=n,this.base=n.extend||t.RootClass,this.module=t.camelCase(n.module),this.$base=this.base.prototype,this.__classMeta__={},this.__Class__=null,this.__constructor__=null}var i=1,r=0,o={},s="nx.Anonymous",a={distinct:function(t){var e,n=[],i={};return t.forEach(function(t){e=t.__type__,i[e]||(i[e]=!0,n.push(t))}),n||t},union:function(){var e=[];return t.each(arguments,function(t,n){e=e.concat(n||[])}),a.distinct(e)}};n.prototype={constructor:n,initMetaProcessor:function(){var e=this.meta.methods||{},n=this.meta.statics||{};t.mix(this.__classMeta__,{__type__:this.type,__meta__:this.meta,__base__:this.base,__module__:this.module,__classId__:i++,__init__:e.init||this.base.__init__,__static_init__:n.init||this.base.__static_init__})},createClassProcessor:function(){var e=this;this.__Class__=function(){this.__id__=++r,this.__listeners__={},e.__constructor__.apply(this,t.toArray(arguments)),t.DEBUG&&(o[r]=this)}},mixinItemsProcessor:function(){var e=this.base,n=this.meta.mixins,i=this.__classMeta__,r=[],o={},s={},c={},u=[],_={},f={},l={};t.each(n,function(e,n){u=n.__mixins__,_=n.__methods__,f=n.__properties__,l=n.__statics__,r=r.concat(u),t.mix(o,_),t.mix(s,f),t.mix(c,l)}),i.__mixins__=a.union(r,e.__mixins__,n),i.__methods__=t.mix(o,e.__methods__),i.__properties__=t.mix(s,e.__properties__),i.__statics__=t.mix(c,e.__statics__)},inheritProcessor:function(){var t=this.__classMeta__;this.copyAtProps(t),this.defineMethods(t),this.defineProperties(t),this.defineStatics(t)},copyAtProps:function(e){var n=this.$base;t.each(n,function(t,e){t.indexOf("@")>-1&&(this.__Class__.prototype[t]=e)},this)},defineMethods:function(e){var n=this.meta.methods||{},i=Object.keys(n),r=e.__methods__,o=this.__Class__.prototype;t.each(r,function(e,r){t.defineMethod(o,e,r),i.indexOf(e)>-1&&(t.defineMethod(o,e,n[e]),o[e].__base__=r)}),t.each(n,function(e,n){o[e]||t.defineMethod(o,e,n)}),e.__methods__=t.mix(r,n)},defineProperties:function(e){var n=this.meta.properties||{},i=e.__properties__,r=this.__Class__.prototype;t.each(n,function(e,n){t.defineProperty(r,e,n)}),e.__properties__=t.mix(i,n)},defineStatics:function(e){var n=t.mix(e.__statics__,this.meta.statics);t.each(n,function(e,n){t.defineStatic(this.__Class__,e,n)},this)},methodsConstructorProcessor:function(){var e=this.__classMeta__,n=e.__mixins__;this.__constructor__=function(){t.each(n,function(t,e){e.__init__.call(this)},this),e.__init__.apply(this,t.toArray(arguments))}},staticsConstructorProcessor:function(){var t=this.__classMeta__;t.__static_init__.call(this.__Class__)},registerNsProcessor:function(){var n=this.type,i=this.__Class__,r=this.__classMeta__;t.mix(i.prototype,r,{constructor:this.__Class__}),t.mix(i,r),n!==s&&t.path(e,n,i)}},t.declare=function(t,e){var i="string"==typeof t?t:s,r=e||t,o=new n(i,r);return o.initMetaProcessor(),o.createClassProcessor(),o.mixinItemsProcessor(),o.inheritProcessor(),o.methodsConstructorProcessor(),o.staticsConstructorProcessor(),o.registerNsProcessor(),o.__Class__},t.DEBUG&&(t.$=function(t){return o[t]})}(nx,nx.GLOBAL)},function(t,e,n){var i,r;n(9),i=n(1);var o=n(7);r=i=i||{},"object"!=typeof i.default&&"function"!=typeof i.default||(r=i=i.default),"function"==typeof r&&(r=r.options),r.render=o.render,r.staticRenderFns=o.staticRenderFns,t.exports=i},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"download-bar",attrs:{id:"app"}},[n("a",{attrs:{id:"openAppDown"}},[n("div",{staticClass:"bottom-tip",class:t.className},[t._t("default",[t._v("\n        打开龘藏APP更多精彩\n      ")])],2)])])},staticRenderFns:[]}},function(t,e,n){function i(t,e){for(var n=0;n<t.length;n++){var i=t[n],r=f[i.id];if(r){r.refs++;for(var o=0;o<r.parts.length;o++)r.parts[o](i.parts[o]);for(;o<i.parts.length;o++)r.parts.push(c(i.parts[o],e))}else{for(var s=[],o=0;o<i.parts.length;o++)s.push(c(i.parts[o],e));f[i.id]={id:i.id,refs:1,parts:s}}}}function r(t){for(var e=[],n={},i=0;i<t.length;i++){var r=t[i],o=r[0],s=r[1],a=r[2],c=r[3],u={css:s,media:a,sourceMap:c};n[o]?n[o].parts.push(u):e.push(n[o]={id:o,parts:[u]})}return e}function o(t,e){var n=d(),i=y[y.length-1];if("top"===t.insertAt)i?i.nextSibling?n.insertBefore(e,i.nextSibling):n.appendChild(e):n.insertBefore(e,n.firstChild),y.push(e);else{if("bottom"!==t.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");n.appendChild(e)}}function s(t){t.parentNode.removeChild(t);var e=y.indexOf(t);e>=0&&y.splice(e,1)}function a(t){var e=document.createElement("style");return e.type="text/css",o(t,e),e}function c(t,e){var n,i,r;if(e.singleton){var o=m++;n=h||(h=a(e)),i=u.bind(null,n,o,!1),r=u.bind(null,n,o,!0)}else n=a(e),i=_.bind(null,n),r=function(){s(n)};return i(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;i(t=e)}else r()}}function u(t,e,n,i){var r=n?"":i.css;if(t.styleSheet)t.styleSheet.cssText=b(e,r);else{var o=document.createTextNode(r),s=t.childNodes;s[e]&&t.removeChild(s[e]),s.length?t.insertBefore(o,s[e]):t.appendChild(o)}}function _(t,e){var n=e.css,i=e.media,r=e.sourceMap;if(i&&t.setAttribute("media",i),r&&(n+="\n/*# sourceURL="+r.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */"),t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}var f={},l=function(t){var e;return function(){return"undefined"==typeof e&&(e=t.apply(this,arguments)),e}},p=l(function(){return/msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())}),d=l(function(){return document.head||document.getElementsByTagName("head")[0]}),h=null,m=0,y=[];t.exports=function(t,e){e=e||{},"undefined"==typeof e.singleton&&(e.singleton=p()),"undefined"==typeof e.insertAt&&(e.insertAt="bottom");var n=r(t);return i(n,e),function(t){for(var o=[],s=0;s<n.length;s++){var a=n[s],c=f[a.id];c.refs--,o.push(c)}if(t){var u=r(t);i(u,e)}for(var s=0;s<o.length;s++){var c=o[s];if(0===c.refs){for(var _=0;_<c.parts.length;_++)c.parts[_]();delete f[c.id]}}}};var b=function(){var t=[];return function(e,n){return t[e]=n,t.filter(Boolean).join("\n")}}()},function(t,e,n){var i=n(2);"string"==typeof i&&(i=[[t.id,i,""]]);n(8)(i,{});i.locals&&(t.exports=i.locals)}])});
//# sourceMappingURL=vue-download-bar.js.map