module.exports=__NEXT_REGISTER_PAGE("/emergency-static",function(){var e=webpackJsonp([18],{108:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:true});t.on=n;t.off=o;function n(e,t,r,n){n=n||false;e.addEventListener?e.addEventListener(t,r,n):e.attachEvent&&e.attachEvent("on"+t,function(t){r.call(e,t||window.event)})}function o(e,t,r,n){n=n||false;e.removeEventListener?e.removeEventListener(t,r,n):e.detachEvent&&e.detachEvent("on"+t,r)}},109:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:true});t.default=function(e){if(!e)return document.documentElement;var t="absolute"===e.style.position;var r=/(scroll|auto)/;var n=e;while(n){if(!n.parentNode)return e.ownerDocument||document.documentElement;var o=window.getComputedStyle(n);var a=o.position;var i=o.overflow;var l=o["overflow-x"];var u=o["overflow-y"];if("static"===a&&t){n=n.parentNode;continue}if(r.test(i)&&r.test(l)&&r.test(u))return n;n=n.parentNode}return e.ownerDocument||e.documentElement||document.documentElement}},110:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:true});t.default=n;function n(e,t,r){var n=void 0;var o=void 0;var a=void 0;var i=void 0;var l=void 0;var u=function u(){var f=+new Date-i;if(f<t&&f>=0)n=setTimeout(u,t-f);else{n=null;if(!r){l=e.apply(a,o);if(!n){a=null;o=null}}}};return function f(){a=this;o=arguments;i=+new Date;var c=r&&!n;n||(n=setTimeout(u,t));if(c){l=e.apply(a,o);a=null;o=null}return l}}},111:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:true});t.default=n;function n(e,t,r){t||(t=250);var n,o;return function(){var a=r||this;var i=+new Date,l=arguments;if(n&&i<n+t){clearTimeout(o);o=setTimeout(function(){n=i;e.apply(a,l)},t)}else{n=i;e.apply(a,l)}}}},112:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:true});var n=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||false;n.configurable=true;"value"in n&&(n.writable=true);Object.defineProperty(e,n.key,n)}}return function(t,r,n){r&&e(t.prototype,r);n&&e(t,n);return t}}();var o=r(0);var a=u(o);var i=r(40);var l=u(i);function u(e){return e&&e.__esModule?e:{default:e}}function f(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function c(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function s(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:false,writable:true,configurable:true}});t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var v=function e(t){return t.displayName||t.name||"Component"};t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return function t(r){return function(t){s(o,t);function o(){f(this,o);var e=c(this,(o.__proto__||Object.getPrototypeOf(o)).call(this));e.displayName="LazyLoad"+v(r);return e}n(o,[{key:"render",value:function t(){return a.default.createElement(l.default,e,a.default.createElement(r,this.props))}}]);return o}(o.Component)}}},113:function(e,t){e.exports={prefix:"fas",iconName:"exclamation-triangle",icon:[576,512,[],"f071","M569.517 440.013C587.975 472.007 564.806 512 527.94 512H48.054c-36.937 0-59.999-40.055-41.577-71.987L246.423 23.985c18.467-32.009 64.72-31.951 83.154 0l239.94 416.028zM288 354c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z"]}},119:function(e,t,r){"use strict";var n=r(0);var o=r.n(n);var a=r(1);var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e};function l(e,t){var r={};for(var n in e){if(t.indexOf(n)>=0)continue;if(!Object.prototype.hasOwnProperty.call(e,n))continue;r[n]=e[n]}return r}var u=a["a"].withComponent("h3");var f=function e(t){var r=t.children,o=t.small,a=void 0!==o&&o,f=l(t,["children","small"]);return n["createElement"](u,i({f:a?[2,3]:[3,4],fontWeight:"semibold",mb:1,color:"bango.pink"},f),r)};t["a"]=f},40:function(e,t,r){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:true});t.forceCheck=t.lazyload=void 0;var n=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||false;n.configurable=true;"value"in n&&(n.writable=true);Object.defineProperty(e,n.key,n)}}return function(t,r,n){r&&e(t.prototype,r);n&&e(t,n);return t}}();var o=r(0);var a=g(o);var i=r(282);var l=g(i);var u=r(65);var f=g(u);var c=r(108);var s=r(109);var v=g(s);var d=r(110);var p=g(d);var h=r(111);var m=g(h);var y=r(112);var b=g(y);function g(e){return e&&e.__esModule?e:{default:e}}function w(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function E(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function O(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:false,writable:true,configurable:true}});t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var _={top:0,right:0,bottom:0,left:0,width:0,height:0};var j="data-lazyload-listened";var x=[];var P=[];var k=false;try{var z=Object.defineProperty({},"passive",{get:function e(){k=true}});window.addEventListener("test",null,z)}catch(e){}var M=!!k&&{capture:false,passive:true};var C=function e(t,r){var n=l.default.findDOMNode(t);var o=void 0;var a=void 0;try{var i=r.getBoundingClientRect();o=i.top;a=i.height}catch(e){o=_.top;a=_.height}var u=window.innerHeight||document.documentElement.clientHeight;var f=Math.max(o,0);var c=Math.min(u,o+a)-f;var s=void 0;var v=void 0;try{var d=n.getBoundingClientRect();s=d.top;v=d.height}catch(e){s=_.top;v=_.height}var p=s-f;var h=Array.isArray(t.props.offset)?t.props.offset:[t.props.offset,t.props.offset];return p-h[0]<=c&&p+v+h[1]>=0};var T=function e(t){var r=l.default.findDOMNode(t);if(!(r.offsetWidth||r.offsetHeight||r.getClientRects().length))return false;var n=void 0;var o=void 0;try{var a=r.getBoundingClientRect();n=a.top;o=a.height}catch(e){n=_.top;o=_.height}var i=window.innerHeight||document.documentElement.clientHeight;var u=Array.isArray(t.props.offset)?t.props.offset:[t.props.offset,t.props.offset];return n-u[0]<=i&&n+o+u[1]>=0};var L=function e(t){var r=l.default.findDOMNode(t);if(!r)return;var n=(0,v.default)(r);var o=t.props.overflow&&n!==r.ownerDocument&&n!==document&&n!==document.documentElement;var a=o?C(t,n):T(t);if(a){if(!t.visible){t.props.once&&P.push(t);t.visible=true;t.forceUpdate()}}else if(!(t.props.once&&t.visible)){t.visible=false;t.props.unmountIfInvisible&&t.forceUpdate()}};var D=function e(){P.forEach(function(e){var t=x.indexOf(e);-1!==t&&x.splice(t,1)});P=[]};var A=function e(){for(var t=0;t<x.length;++t){var r=x[t];L(r)}D()};var N=void 0;var H=null;var I=function(t){O(r,t);function r(e){w(this,r);var t=E(this,(r.__proto__||Object.getPrototypeOf(r)).call(this,e));t.visible=false;return t}n(r,[{key:"componentDidMount",value:function t(){if("undefined"!==typeof e&&false){a.default.Children.count(this.props.children)>1&&console.warn("[react-lazyload] Only one child is allowed to be passed to `LazyLoad`.");this.props.wheel&&console.warn("[react-lazyload] Props `wheel` is not supported anymore, try set `overflow` for lazy loading in overflow containers.");this.props.placeholder||void 0!==this.props.height||0!==l.default.findDOMNode(this).offsetHeight||console.warn("[react-lazyload] Please add `height` props to <LazyLoad> for better performance.")}var r=false;if(void 0!==this.props.debounce&&"throttle"===N){console.warn("[react-lazyload] Previous delay function is `throttle`, now switching to `debounce`, try setting them unanimously");r=true}else if("debounce"===N&&void 0===this.props.debounce){console.warn("[react-lazyload] Previous delay function is `debounce`, now switching to `throttle`, try setting them unanimously");r=true}if(r){(0,c.off)(window,"scroll",H,M);(0,c.off)(window,"resize",H,M);H=null}if(!H)if(void 0!==this.props.debounce){H=(0,p.default)(A,"number"===typeof this.props.debounce?this.props.debounce:300);N="debounce"}else if(void 0!==this.props.throttle){H=(0,m.default)(A,"number"===typeof this.props.throttle?this.props.throttle:300);N="throttle"}else H=A;if(this.props.overflow){var n=(0,v.default)(l.default.findDOMNode(this));if(n&&"function"===typeof n.getAttribute){var o=+n.getAttribute(j)+1;1===o&&n.addEventListener("scroll",H,M);n.setAttribute(j,o)}}else if(0===x.length||r){var i=this.props,u=i.scroll,f=i.resize;u&&(0,c.on)(window,"scroll",H,M);f&&(0,c.on)(window,"resize",H,M)}x.push(this);L(this)}},{key:"shouldComponentUpdate",value:function e(){return this.visible}},{key:"componentWillUnmount",value:function e(){if(this.props.overflow){var t=(0,v.default)(l.default.findDOMNode(this));if(t&&"function"===typeof t.getAttribute){var r=+t.getAttribute(j)-1;if(0===r){t.removeEventListener("scroll",H,M);t.removeAttribute(j)}else t.setAttribute(j,r)}}var n=x.indexOf(this);-1!==n&&x.splice(n,1);if(0===x.length){(0,c.off)(window,"resize",H,M);(0,c.off)(window,"scroll",H,M)}}},{key:"render",value:function e(){return this.visible?this.props.children:this.props.placeholder?this.props.placeholder:a.default.createElement("div",{style:{height:this.props.height},className:"lazyload-placeholder"})}}]);return r}(o.Component);I.propTypes={once:f.default.bool,height:f.default.oneOfType([f.default.number,f.default.string]),offset:f.default.oneOfType([f.default.number,f.default.arrayOf(f.default.number)]),overflow:f.default.bool,resize:f.default.bool,scroll:f.default.bool,children:f.default.node,throttle:f.default.oneOfType([f.default.number,f.default.bool]),debounce:f.default.oneOfType([f.default.number,f.default.bool]),placeholder:f.default.node,unmountIfInvisible:f.default.bool};I.defaultProps={once:false,offset:0,overflow:false,resize:false,scroll:true,unmountIfInvisible:false};var W=t.lazyload=b.default;t.default=I;t.forceCheck=A}).call(t,r(283))},421:function(e,t,r){"use strict";var n=r(0);var o=r.n(n);var a=r(6);var i=r(1);var l=r(19);var u=r(66);var f=r(27);var c=r(116);var s=r(64);var v=i["a"].withComponent("h1");var d=function e(t){var r=t.section,o=t.hideButton,d=void 0!==o&&o;return n["createElement"](l["a"],{py:4},n["createElement"](a["a"],{alignItems:"center",justifyContent:"center",m:-2},n["createElement"](i["a"],{flex:"1 0 200px",m:2},n["createElement"](v,{f:[4,null,6,7],fontWeight:"semibold",color:"bango.pink",mb:2,lineHeight:"tight"},r.heading),n["createElement"](u["a"],{md:r.text,f:[2,null,3],fontWeight:"semibold",mb:3}),!d&&n["createElement"](n["Fragment"],null,n["createElement"](f["a"],{href:r.linkUrl,display:["none","inline"]},n["createElement"](c["a"],{size:[2,2,3]},r.linkLabelLong)),n["createElement"](f["a"],{href:r.linkUrl,display:["block","none"]},n["createElement"](c["a"],{block:true},r.linkLabelShort)))),n["createElement"](i["a"],{display:["none","block"],flex:"0 1 350px",bg:"silver",align:"center",m:2},n["createElement"](s["a"],{fill:true,asset:r.image,alt:r.image.title}))))};t["a"]=d},64:function(e,t,r){"use strict";var n=r(0);var o=r.n(n);var a=r(4);var i=r(40);var l=r.n(i);var u=[1,1.5,2];var f=2;var c=function e(t,r,n,o,a,i){var l=Math.floor(r*(n||t.image.width/f));var u=Math.floor(r*(o||t.image.height/f));var c={w:l,h:u};a&&(c.fit=a);i&&(c.f=i);var s=Object.keys(c).map(function(e){return e+"="+c[e]}).join("&");var v=1===r?"":" "+r+"x";return t.url+"?"+s+v};var s=function e(t,r,n,o,a){return u.map(function(e){return c(t,e,r,n,o,a)}).join(", ")};var v=a["c"].img.withConfig({componentId:"a0o4fg-0"})(["max-width:100%;width:",";height:",";"],function(e){return e.widthWanted},function(e){return e.heightWanted});var d=function e(t,r){if(t)return t+"px";if(r)return"100%";return"auto"};var p=function e(t){if(t)return t+"px";return"auto"};var h=function e(t){var r=t.asset,o=t.alt,a=t.fill,i=void 0!==a&&a,u=t.width,f=t.height,h=t.fit,m=t.focus;return n["createElement"](l.a,{once:true,resize:true,offset:100},n["createElement"](v,{widthWanted:d(u,i),heightWanted:p(f),src:c(r,1,u,f,h,m),srcSet:s(r,u,f,h,m),alt:o}))};t["a"]=h},707:function(e,t,r){e.exports=r(708)},708:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:true});var n=r(0);var o=r.n(n);var a=r(480);var i=r.n(a);var l=r(105);var u=r(113);var f=r.n(u);var c=r(69);var s=r(484);var v=r(409);var d=r(6);var p=r(1);var h=r(7);var m=r(482);var y=r(483);var b=r(19);var g=r(481);var w=r(421);var E=r(119);var O=r(104);var _=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e};function j(e,t){var r={};for(var n in e){if(t.indexOf(n)>=0)continue;if(!Object.prototype.hasOwnProperty.call(e,n))continue;r[n]=e[n]}return r}var x=function e(t){var r=t.url,o=t.pageHome,a=j(t,["url","pageHome"]);return n["createElement"](O["a"],_({page:o,url:r},a),function(e){return n["createElement"](s["a"],{title:e.meta.seoTitle},n["createElement"](i.a,null,n["createElement"]("title",{key:"title"},e.meta.seoTitle," | Bango"),e.meta&&n["createElement"](n["Fragment"],null,n["createElement"]("meta",{key:"desc",name:"description",content:e.meta.seoDescription}),n["createElement"]("meta",{key:"keywords",name:"keywords",content:e.meta.seoKeywords}))),n["createElement"](v["a"],null,n["createElement"](d["a"],{flexDirection:"column",height:"vfill"},n["createElement"](p["a"],{flex:"none"},n["createElement"](g["a"],null),n["createElement"]("header",null,n["createElement"](m["a"],null))),n["createElement"](d["a"],{flexDirection:"column",grow:true},n["createElement"](w["a"],{section:e.heroSection,hideButton:true}),n["createElement"](b["a"],{grow:true,py:4,bg:"bango.yellow"},n["createElement"](d["a"],{flexWrap:"wrap",m:-2},n["createElement"](p["a"],{flex:"1 0 330px",bg:"white",p:2,m:2},n["createElement"](E["a"],null,n["createElement"](h["a"],{mr:2},n["createElement"](l["a"],{icon:f.a})),"Site unavailable – maintenance in progress"),n["createElement"]("p",null,"Sorry! The Bango website is currently undergoing maintenance. Although this looks like the Bango website, it's just an emergency hologram. Please return later."))))),n["createElement"](p["a"],{flex:"none"},n["createElement"](y["a"],null)))))})};t["default"]=Object(c["a"])({Page:x,propsAPI:{pageHome:{method:"GET",api:"page/home",cache:false}}})}},[707]);return{page:e.default}});