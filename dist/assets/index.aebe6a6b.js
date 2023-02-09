var $g=Object.defineProperty;var Zg=(n,e,t)=>e in n?$g(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var ze=(n,e,t)=>(Zg(n,typeof e!="symbol"?e+"":e,t),t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerpolicy&&(s.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?s.credentials="include":r.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();function Kg(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var Ze={exports:{}},Le={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var go=Symbol.for("react.element"),Qg=Symbol.for("react.portal"),Jg=Symbol.for("react.fragment"),e0=Symbol.for("react.strict_mode"),t0=Symbol.for("react.profiler"),n0=Symbol.for("react.provider"),i0=Symbol.for("react.context"),r0=Symbol.for("react.forward_ref"),s0=Symbol.for("react.suspense"),o0=Symbol.for("react.memo"),a0=Symbol.for("react.lazy"),Df=Symbol.iterator;function l0(n){return n===null||typeof n!="object"?null:(n=Df&&n[Df]||n["@@iterator"],typeof n=="function"?n:null)}var sp={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},op=Object.assign,ap={};function xs(n,e,t){this.props=n,this.context=e,this.refs=ap,this.updater=t||sp}xs.prototype.isReactComponent={};xs.prototype.setState=function(n,e){if(typeof n!="object"&&typeof n!="function"&&n!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,n,e,"setState")};xs.prototype.forceUpdate=function(n){this.updater.enqueueForceUpdate(this,n,"forceUpdate")};function lp(){}lp.prototype=xs.prototype;function Ac(n,e,t){this.props=n,this.context=e,this.refs=ap,this.updater=t||sp}var Lc=Ac.prototype=new lp;Lc.constructor=Ac;op(Lc,xs.prototype);Lc.isPureReactComponent=!0;var Rf=Array.isArray,up=Object.prototype.hasOwnProperty,Pc={current:null},cp={key:!0,ref:!0,__self:!0,__source:!0};function fp(n,e,t){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)up.call(e,i)&&!cp.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=t;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];r.children=l}if(n&&n.defaultProps)for(i in a=n.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:go,type:n,key:s,ref:o,props:r,_owner:Pc.current}}function u0(n,e){return{$$typeof:go,type:n.type,key:e,ref:n.ref,props:n.props,_owner:n._owner}}function Dc(n){return typeof n=="object"&&n!==null&&n.$$typeof===go}function c0(n){var e={"=":"=0",":":"=2"};return"$"+n.replace(/[=:]/g,function(t){return e[t]})}var If=/\/+/g;function yl(n,e){return typeof n=="object"&&n!==null&&n.key!=null?c0(""+n.key):e.toString(36)}function ua(n,e,t,i,r){var s=typeof n;(s==="undefined"||s==="boolean")&&(n=null);var o=!1;if(n===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(n.$$typeof){case go:case Qg:o=!0}}if(o)return o=n,r=r(o),n=i===""?"."+yl(o,0):i,Rf(r)?(t="",n!=null&&(t=n.replace(If,"$&/")+"/"),ua(r,e,t,"",function(u){return u})):r!=null&&(Dc(r)&&(r=u0(r,t+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(If,"$&/")+"/")+n)),e.push(r)),1;if(o=0,i=i===""?".":i+":",Rf(n))for(var a=0;a<n.length;a++){s=n[a];var l=i+yl(s,a);o+=ua(s,e,t,l,r)}else if(l=l0(n),typeof l=="function")for(n=l.call(n),a=0;!(s=n.next()).done;)s=s.value,l=i+yl(s,a++),o+=ua(s,e,t,l,r);else if(s==="object")throw e=String(n),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function To(n,e,t){if(n==null)return n;var i=[],r=0;return ua(n,i,"","",function(s){return e.call(t,s,r++)}),i}function f0(n){if(n._status===-1){var e=n._result;e=e(),e.then(function(t){(n._status===0||n._status===-1)&&(n._status=1,n._result=t)},function(t){(n._status===0||n._status===-1)&&(n._status=2,n._result=t)}),n._status===-1&&(n._status=0,n._result=e)}if(n._status===1)return n._result.default;throw n._result}var zt={current:null},ca={transition:null},d0={ReactCurrentDispatcher:zt,ReactCurrentBatchConfig:ca,ReactCurrentOwner:Pc};Le.Children={map:To,forEach:function(n,e,t){To(n,function(){e.apply(this,arguments)},t)},count:function(n){var e=0;return To(n,function(){e++}),e},toArray:function(n){return To(n,function(e){return e})||[]},only:function(n){if(!Dc(n))throw Error("React.Children.only expected to receive a single React element child.");return n}};Le.Component=xs;Le.Fragment=Jg;Le.Profiler=t0;Le.PureComponent=Ac;Le.StrictMode=e0;Le.Suspense=s0;Le.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=d0;Le.cloneElement=function(n,e,t){if(n==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+n+".");var i=op({},n.props),r=n.key,s=n.ref,o=n._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Pc.current),e.key!==void 0&&(r=""+e.key),n.type&&n.type.defaultProps)var a=n.type.defaultProps;for(l in e)up.call(e,l)&&!cp.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=t;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];i.children=a}return{$$typeof:go,type:n.type,key:r,ref:s,props:i,_owner:o}};Le.createContext=function(n){return n={$$typeof:i0,_currentValue:n,_currentValue2:n,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},n.Provider={$$typeof:n0,_context:n},n.Consumer=n};Le.createElement=fp;Le.createFactory=function(n){var e=fp.bind(null,n);return e.type=n,e};Le.createRef=function(){return{current:null}};Le.forwardRef=function(n){return{$$typeof:r0,render:n}};Le.isValidElement=Dc;Le.lazy=function(n){return{$$typeof:a0,_payload:{_status:-1,_result:n},_init:f0}};Le.memo=function(n,e){return{$$typeof:o0,type:n,compare:e===void 0?null:e}};Le.startTransition=function(n){var e=ca.transition;ca.transition={};try{n()}finally{ca.transition=e}};Le.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};Le.useCallback=function(n,e){return zt.current.useCallback(n,e)};Le.useContext=function(n){return zt.current.useContext(n)};Le.useDebugValue=function(){};Le.useDeferredValue=function(n){return zt.current.useDeferredValue(n)};Le.useEffect=function(n,e){return zt.current.useEffect(n,e)};Le.useId=function(){return zt.current.useId()};Le.useImperativeHandle=function(n,e,t){return zt.current.useImperativeHandle(n,e,t)};Le.useInsertionEffect=function(n,e){return zt.current.useInsertionEffect(n,e)};Le.useLayoutEffect=function(n,e){return zt.current.useLayoutEffect(n,e)};Le.useMemo=function(n,e){return zt.current.useMemo(n,e)};Le.useReducer=function(n,e,t){return zt.current.useReducer(n,e,t)};Le.useRef=function(n){return zt.current.useRef(n)};Le.useState=function(n){return zt.current.useState(n)};Le.useSyncExternalStore=function(n,e,t){return zt.current.useSyncExternalStore(n,e,t)};Le.useTransition=function(){return zt.current.useTransition()};Le.version="18.2.0";(function(n){n.exports=Le})(Ze);const h0=Kg(Ze.exports);var Tu={},dp={exports:{}},en={},hp={exports:{}},pp={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(n){function e(I,P){var N=I.length;I.push(P);e:for(;0<N;){var Y=N-1>>>1,q=I[Y];if(0<r(q,P))I[Y]=P,I[N]=q,N=Y;else break e}}function t(I){return I.length===0?null:I[0]}function i(I){if(I.length===0)return null;var P=I[0],N=I.pop();if(N!==P){I[0]=N;e:for(var Y=0,q=I.length,K=q>>>1;Y<K;){var oe=2*(Y+1)-1,_e=I[oe],H=oe+1,Pe=I[H];if(0>r(_e,N))H<q&&0>r(Pe,_e)?(I[Y]=Pe,I[H]=N,Y=H):(I[Y]=_e,I[oe]=N,Y=oe);else if(H<q&&0>r(Pe,N))I[Y]=Pe,I[H]=N,Y=H;else break e}}return P}function r(I,P){var N=I.sortIndex-P.sortIndex;return N!==0?N:I.id-P.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;n.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();n.unstable_now=function(){return o.now()-a}}var l=[],u=[],c=1,d=null,f=3,g=!1,x=!1,p=!1,h=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function _(I){for(var P=t(u);P!==null;){if(P.callback===null)i(u);else if(P.startTime<=I)i(u),P.sortIndex=P.expirationTime,e(l,P);else break;P=t(u)}}function M(I){if(p=!1,_(I),!x)if(t(l)!==null)x=!0,Z(S);else{var P=t(u);P!==null&&Q(M,P.startTime-I)}}function S(I,P){x=!1,p&&(p=!1,m(y),y=-1),g=!0;var N=f;try{for(_(P),d=t(l);d!==null&&(!(d.expirationTime>P)||I&&!$());){var Y=d.callback;if(typeof Y=="function"){d.callback=null,f=d.priorityLevel;var q=Y(d.expirationTime<=P);P=n.unstable_now(),typeof q=="function"?d.callback=q:d===t(l)&&i(l),_(P)}else i(l);d=t(l)}if(d!==null)var K=!0;else{var oe=t(u);oe!==null&&Q(M,oe.startTime-P),K=!1}return K}finally{d=null,f=N,g=!1}}var C=!1,L=null,y=-1,b=5,R=-1;function $(){return!(n.unstable_now()-R<b)}function re(){if(L!==null){var I=n.unstable_now();R=I;var P=!0;try{P=L(!0,I)}finally{P?B():(C=!1,L=null)}}else C=!1}var B;if(typeof v=="function")B=function(){v(re)};else if(typeof MessageChannel<"u"){var k=new MessageChannel,X=k.port2;k.port1.onmessage=re,B=function(){X.postMessage(null)}}else B=function(){h(re,0)};function Z(I){L=I,C||(C=!0,B())}function Q(I,P){y=h(function(){I(n.unstable_now())},P)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(I){I.callback=null},n.unstable_continueExecution=function(){x||g||(x=!0,Z(S))},n.unstable_forceFrameRate=function(I){0>I||125<I?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):b=0<I?Math.floor(1e3/I):5},n.unstable_getCurrentPriorityLevel=function(){return f},n.unstable_getFirstCallbackNode=function(){return t(l)},n.unstable_next=function(I){switch(f){case 1:case 2:case 3:var P=3;break;default:P=f}var N=f;f=P;try{return I()}finally{f=N}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(I,P){switch(I){case 1:case 2:case 3:case 4:case 5:break;default:I=3}var N=f;f=I;try{return P()}finally{f=N}},n.unstable_scheduleCallback=function(I,P,N){var Y=n.unstable_now();switch(typeof N=="object"&&N!==null?(N=N.delay,N=typeof N=="number"&&0<N?Y+N:Y):N=Y,I){case 1:var q=-1;break;case 2:q=250;break;case 5:q=1073741823;break;case 4:q=1e4;break;default:q=5e3}return q=N+q,I={id:c++,callback:P,priorityLevel:I,startTime:N,expirationTime:q,sortIndex:-1},N>Y?(I.sortIndex=N,e(u,I),t(l)===null&&I===t(u)&&(p?(m(y),y=-1):p=!0,Q(M,N-Y))):(I.sortIndex=q,e(l,I),x||g||(x=!0,Z(S))),I},n.unstable_shouldYield=$,n.unstable_wrapCallback=function(I){var P=f;return function(){var N=f;f=P;try{return I.apply(this,arguments)}finally{f=N}}}})(pp);(function(n){n.exports=pp})(hp);/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var mp=Ze.exports,Jt=hp.exports;function J(n){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+n,t=1;t<arguments.length;t++)e+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+n+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var gp=new Set,Ks={};function gr(n,e){as(n,e),as(n+"Capture",e)}function as(n,e){for(Ks[n]=e,n=0;n<e.length;n++)gp.add(e[n])}var ri=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Cu=Object.prototype.hasOwnProperty,p0=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Nf={},zf={};function m0(n){return Cu.call(zf,n)?!0:Cu.call(Nf,n)?!1:p0.test(n)?zf[n]=!0:(Nf[n]=!0,!1)}function g0(n,e,t,i){if(t!==null&&t.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:t!==null?!t.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function v0(n,e,t,i){if(e===null||typeof e>"u"||g0(n,e,t,i))return!0;if(i)return!1;if(t!==null)switch(t.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Ft(n,e,t,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=t,this.propertyName=n,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Et={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){Et[n]=new Ft(n,0,!1,n,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var e=n[0];Et[e]=new Ft(e,1,!1,n[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(n){Et[n]=new Ft(n,2,!1,n.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){Et[n]=new Ft(n,2,!1,n,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){Et[n]=new Ft(n,3,!1,n.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(n){Et[n]=new Ft(n,3,!0,n,null,!1,!1)});["capture","download"].forEach(function(n){Et[n]=new Ft(n,4,!1,n,null,!1,!1)});["cols","rows","size","span"].forEach(function(n){Et[n]=new Ft(n,6,!1,n,null,!1,!1)});["rowSpan","start"].forEach(function(n){Et[n]=new Ft(n,5,!1,n.toLowerCase(),null,!1,!1)});var Rc=/[\-:]([a-z])/g;function Ic(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var e=n.replace(Rc,Ic);Et[e]=new Ft(e,1,!1,n,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var e=n.replace(Rc,Ic);Et[e]=new Ft(e,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(n){var e=n.replace(Rc,Ic);Et[e]=new Ft(e,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(n){Et[n]=new Ft(n,1,!1,n.toLowerCase(),null,!1,!1)});Et.xlinkHref=new Ft("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(n){Et[n]=new Ft(n,1,!1,n.toLowerCase(),null,!0,!0)});function Nc(n,e,t,i){var r=Et.hasOwnProperty(e)?Et[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(v0(e,t,r,i)&&(t=null),i||r===null?m0(e)&&(t===null?n.removeAttribute(e):n.setAttribute(e,""+t)):r.mustUseProperty?n[r.propertyName]=t===null?r.type===3?!1:"":t:(e=r.attributeName,i=r.attributeNamespace,t===null?n.removeAttribute(e):(r=r.type,t=r===3||r===4&&t===!0?"":""+t,i?n.setAttributeNS(i,e,t):n.setAttribute(e,t))))}var li=mp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Co=Symbol.for("react.element"),Br=Symbol.for("react.portal"),Vr=Symbol.for("react.fragment"),zc=Symbol.for("react.strict_mode"),bu=Symbol.for("react.profiler"),vp=Symbol.for("react.provider"),_p=Symbol.for("react.context"),Fc=Symbol.for("react.forward_ref"),Au=Symbol.for("react.suspense"),Lu=Symbol.for("react.suspense_list"),kc=Symbol.for("react.memo"),xi=Symbol.for("react.lazy"),xp=Symbol.for("react.offscreen"),Ff=Symbol.iterator;function Es(n){return n===null||typeof n!="object"?null:(n=Ff&&n[Ff]||n["@@iterator"],typeof n=="function"?n:null)}var Je=Object.assign,Sl;function Fs(n){if(Sl===void 0)try{throw Error()}catch(t){var e=t.stack.trim().match(/\n( *(at )?)/);Sl=e&&e[1]||""}return`
`+Sl+n}var Ml=!1;function wl(n,e){if(!n||Ml)return"";Ml=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var i=u}Reflect.construct(n,[],e)}else{try{e.call()}catch(u){i=u}n.call(e.prototype)}else{try{throw Error()}catch(u){i=u}n()}}catch(u){if(u&&i&&typeof u.stack=="string"){for(var r=u.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return n.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",n.displayName)),l}while(1<=o&&0<=a);break}}}finally{Ml=!1,Error.prepareStackTrace=t}return(n=n?n.displayName||n.name:"")?Fs(n):""}function _0(n){switch(n.tag){case 5:return Fs(n.type);case 16:return Fs("Lazy");case 13:return Fs("Suspense");case 19:return Fs("SuspenseList");case 0:case 2:case 15:return n=wl(n.type,!1),n;case 11:return n=wl(n.type.render,!1),n;case 1:return n=wl(n.type,!0),n;default:return""}}function Pu(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case Vr:return"Fragment";case Br:return"Portal";case bu:return"Profiler";case zc:return"StrictMode";case Au:return"Suspense";case Lu:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case _p:return(n.displayName||"Context")+".Consumer";case vp:return(n._context.displayName||"Context")+".Provider";case Fc:var e=n.render;return n=n.displayName,n||(n=e.displayName||e.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case kc:return e=n.displayName||null,e!==null?e:Pu(n.type)||"Memo";case xi:e=n._payload,n=n._init;try{return Pu(n(e))}catch{}}return null}function x0(n){var e=n.type;switch(n.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=e.render,n=n.displayName||n.name||"",e.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Pu(e);case 8:return e===zc?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function zi(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function yp(n){var e=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function y0(n){var e=yp(n)?"checked":"value",t=Object.getOwnPropertyDescriptor(n.constructor.prototype,e),i=""+n[e];if(!n.hasOwnProperty(e)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var r=t.get,s=t.set;return Object.defineProperty(n,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(n,e,{enumerable:t.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){n._valueTracker=null,delete n[e]}}}}function bo(n){n._valueTracker||(n._valueTracker=y0(n))}function Sp(n){if(!n)return!1;var e=n._valueTracker;if(!e)return!0;var t=e.getValue(),i="";return n&&(i=yp(n)?n.checked?"true":"false":n.value),n=i,n!==t?(e.setValue(n),!0):!1}function wa(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function Du(n,e){var t=e.checked;return Je({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t!=null?t:n._wrapperState.initialChecked})}function kf(n,e){var t=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;t=zi(e.value!=null?e.value:t),n._wrapperState={initialChecked:i,initialValue:t,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Mp(n,e){e=e.checked,e!=null&&Nc(n,"checked",e,!1)}function Ru(n,e){Mp(n,e);var t=zi(e.value),i=e.type;if(t!=null)i==="number"?(t===0&&n.value===""||n.value!=t)&&(n.value=""+t):n.value!==""+t&&(n.value=""+t);else if(i==="submit"||i==="reset"){n.removeAttribute("value");return}e.hasOwnProperty("value")?Iu(n,e.type,t):e.hasOwnProperty("defaultValue")&&Iu(n,e.type,zi(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(n.defaultChecked=!!e.defaultChecked)}function Of(n,e,t){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+n._wrapperState.initialValue,t||e===n.value||(n.value=e),n.defaultValue=e}t=n.name,t!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,t!==""&&(n.name=t)}function Iu(n,e,t){(e!=="number"||wa(n.ownerDocument)!==n)&&(t==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+t&&(n.defaultValue=""+t))}var ks=Array.isArray;function Jr(n,e,t,i){if(n=n.options,e){e={};for(var r=0;r<t.length;r++)e["$"+t[r]]=!0;for(t=0;t<n.length;t++)r=e.hasOwnProperty("$"+n[t].value),n[t].selected!==r&&(n[t].selected=r),r&&i&&(n[t].defaultSelected=!0)}else{for(t=""+zi(t),e=null,r=0;r<n.length;r++){if(n[r].value===t){n[r].selected=!0,i&&(n[r].defaultSelected=!0);return}e!==null||n[r].disabled||(e=n[r])}e!==null&&(e.selected=!0)}}function Nu(n,e){if(e.dangerouslySetInnerHTML!=null)throw Error(J(91));return Je({},e,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function Uf(n,e){var t=e.value;if(t==null){if(t=e.children,e=e.defaultValue,t!=null){if(e!=null)throw Error(J(92));if(ks(t)){if(1<t.length)throw Error(J(93));t=t[0]}e=t}e==null&&(e=""),t=e}n._wrapperState={initialValue:zi(t)}}function wp(n,e){var t=zi(e.value),i=zi(e.defaultValue);t!=null&&(t=""+t,t!==n.value&&(n.value=t),e.defaultValue==null&&n.defaultValue!==t&&(n.defaultValue=t)),i!=null&&(n.defaultValue=""+i)}function Bf(n){var e=n.textContent;e===n._wrapperState.initialValue&&e!==""&&e!==null&&(n.value=e)}function Ep(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function zu(n,e){return n==null||n==="http://www.w3.org/1999/xhtml"?Ep(e):n==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var Ao,Tp=function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,t,i,r){MSApp.execUnsafeLocalFunction(function(){return n(e,t,i,r)})}:n}(function(n,e){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=e;else{for(Ao=Ao||document.createElement("div"),Ao.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Ao.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;e.firstChild;)n.appendChild(e.firstChild)}});function Qs(n,e){if(e){var t=n.firstChild;if(t&&t===n.lastChild&&t.nodeType===3){t.nodeValue=e;return}}n.textContent=e}var Gs={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},S0=["Webkit","ms","Moz","O"];Object.keys(Gs).forEach(function(n){S0.forEach(function(e){e=e+n.charAt(0).toUpperCase()+n.substring(1),Gs[e]=Gs[n]})});function Cp(n,e,t){return e==null||typeof e=="boolean"||e===""?"":t||typeof e!="number"||e===0||Gs.hasOwnProperty(n)&&Gs[n]?(""+e).trim():e+"px"}function bp(n,e){n=n.style;for(var t in e)if(e.hasOwnProperty(t)){var i=t.indexOf("--")===0,r=Cp(t,e[t],i);t==="float"&&(t="cssFloat"),i?n.setProperty(t,r):n[t]=r}}var M0=Je({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Fu(n,e){if(e){if(M0[n]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(J(137,n));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(J(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(J(61))}if(e.style!=null&&typeof e.style!="object")throw Error(J(62))}}function ku(n,e){if(n.indexOf("-")===-1)return typeof e.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ou=null;function Oc(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var Uu=null,es=null,ts=null;function Vf(n){if(n=xo(n)){if(typeof Uu!="function")throw Error(J(280));var e=n.stateNode;e&&(e=Qa(e),Uu(n.stateNode,n.type,e))}}function Ap(n){es?ts?ts.push(n):ts=[n]:es=n}function Lp(){if(es){var n=es,e=ts;if(ts=es=null,Vf(n),e)for(n=0;n<e.length;n++)Vf(e[n])}}function Pp(n,e){return n(e)}function Dp(){}var El=!1;function Rp(n,e,t){if(El)return n(e,t);El=!0;try{return Pp(n,e,t)}finally{El=!1,(es!==null||ts!==null)&&(Dp(),Lp())}}function Js(n,e){var t=n.stateNode;if(t===null)return null;var i=Qa(t);if(i===null)return null;t=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(n=n.type,i=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!i;break e;default:n=!1}if(n)return null;if(t&&typeof t!="function")throw Error(J(231,e,typeof t));return t}var Bu=!1;if(ri)try{var Ts={};Object.defineProperty(Ts,"passive",{get:function(){Bu=!0}}),window.addEventListener("test",Ts,Ts),window.removeEventListener("test",Ts,Ts)}catch{Bu=!1}function w0(n,e,t,i,r,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(t,u)}catch(c){this.onError(c)}}var Hs=!1,Ea=null,Ta=!1,Vu=null,E0={onError:function(n){Hs=!0,Ea=n}};function T0(n,e,t,i,r,s,o,a,l){Hs=!1,Ea=null,w0.apply(E0,arguments)}function C0(n,e,t,i,r,s,o,a,l){if(T0.apply(this,arguments),Hs){if(Hs){var u=Ea;Hs=!1,Ea=null}else throw Error(J(198));Ta||(Ta=!0,Vu=u)}}function vr(n){var e=n,t=n;if(n.alternate)for(;e.return;)e=e.return;else{n=e;do e=n,(e.flags&4098)!==0&&(t=e.return),n=e.return;while(n)}return e.tag===3?t:null}function Ip(n){if(n.tag===13){var e=n.memoizedState;if(e===null&&(n=n.alternate,n!==null&&(e=n.memoizedState)),e!==null)return e.dehydrated}return null}function Gf(n){if(vr(n)!==n)throw Error(J(188))}function b0(n){var e=n.alternate;if(!e){if(e=vr(n),e===null)throw Error(J(188));return e!==n?null:n}for(var t=n,i=e;;){var r=t.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){t=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===t)return Gf(r),n;if(s===i)return Gf(r),e;s=s.sibling}throw Error(J(188))}if(t.return!==i.return)t=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===t){o=!0,t=r,i=s;break}if(a===i){o=!0,i=r,t=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===t){o=!0,t=s,i=r;break}if(a===i){o=!0,i=s,t=r;break}a=a.sibling}if(!o)throw Error(J(189))}}if(t.alternate!==i)throw Error(J(190))}if(t.tag!==3)throw Error(J(188));return t.stateNode.current===t?n:e}function Np(n){return n=b0(n),n!==null?zp(n):null}function zp(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var e=zp(n);if(e!==null)return e;n=n.sibling}return null}var Fp=Jt.unstable_scheduleCallback,Hf=Jt.unstable_cancelCallback,A0=Jt.unstable_shouldYield,L0=Jt.unstable_requestPaint,it=Jt.unstable_now,P0=Jt.unstable_getCurrentPriorityLevel,Uc=Jt.unstable_ImmediatePriority,kp=Jt.unstable_UserBlockingPriority,Ca=Jt.unstable_NormalPriority,D0=Jt.unstable_LowPriority,Op=Jt.unstable_IdlePriority,Ya=null,Un=null;function R0(n){if(Un&&typeof Un.onCommitFiberRoot=="function")try{Un.onCommitFiberRoot(Ya,n,void 0,(n.current.flags&128)===128)}catch{}}var Ln=Math.clz32?Math.clz32:z0,I0=Math.log,N0=Math.LN2;function z0(n){return n>>>=0,n===0?32:31-(I0(n)/N0|0)|0}var Lo=64,Po=4194304;function Os(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function ba(n,e){var t=n.pendingLanes;if(t===0)return 0;var i=0,r=n.suspendedLanes,s=n.pingedLanes,o=t&268435455;if(o!==0){var a=o&~r;a!==0?i=Os(a):(s&=o,s!==0&&(i=Os(s)))}else o=t&~r,o!==0?i=Os(o):s!==0&&(i=Os(s));if(i===0)return 0;if(e!==0&&e!==i&&(e&r)===0&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if((i&4)!==0&&(i|=t&16),e=n.entangledLanes,e!==0)for(n=n.entanglements,e&=i;0<e;)t=31-Ln(e),r=1<<t,i|=n[t],e&=~r;return i}function F0(n,e){switch(n){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function k0(n,e){for(var t=n.suspendedLanes,i=n.pingedLanes,r=n.expirationTimes,s=n.pendingLanes;0<s;){var o=31-Ln(s),a=1<<o,l=r[o];l===-1?((a&t)===0||(a&i)!==0)&&(r[o]=F0(a,e)):l<=e&&(n.expiredLanes|=a),s&=~a}}function Gu(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function Up(){var n=Lo;return Lo<<=1,(Lo&4194240)===0&&(Lo=64),n}function Tl(n){for(var e=[],t=0;31>t;t++)e.push(n);return e}function vo(n,e,t){n.pendingLanes|=e,e!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,e=31-Ln(e),n[e]=t}function O0(n,e){var t=n.pendingLanes&~e;n.pendingLanes=e,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=e,n.mutableReadLanes&=e,n.entangledLanes&=e,e=n.entanglements;var i=n.eventTimes;for(n=n.expirationTimes;0<t;){var r=31-Ln(t),s=1<<r;e[r]=0,i[r]=-1,n[r]=-1,t&=~s}}function Bc(n,e){var t=n.entangledLanes|=e;for(n=n.entanglements;t;){var i=31-Ln(t),r=1<<i;r&e|n[i]&e&&(n[i]|=e),t&=~r}}var Ve=0;function Bp(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var Vp,Vc,Gp,Hp,Wp,Hu=!1,Do=[],Ti=null,Ci=null,bi=null,eo=new Map,to=new Map,Si=[],U0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Wf(n,e){switch(n){case"focusin":case"focusout":Ti=null;break;case"dragenter":case"dragleave":Ci=null;break;case"mouseover":case"mouseout":bi=null;break;case"pointerover":case"pointerout":eo.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":to.delete(e.pointerId)}}function Cs(n,e,t,i,r,s){return n===null||n.nativeEvent!==s?(n={blockedOn:e,domEventName:t,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=xo(e),e!==null&&Vc(e)),n):(n.eventSystemFlags|=i,e=n.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),n)}function B0(n,e,t,i,r){switch(e){case"focusin":return Ti=Cs(Ti,n,e,t,i,r),!0;case"dragenter":return Ci=Cs(Ci,n,e,t,i,r),!0;case"mouseover":return bi=Cs(bi,n,e,t,i,r),!0;case"pointerover":var s=r.pointerId;return eo.set(s,Cs(eo.get(s)||null,n,e,t,i,r)),!0;case"gotpointercapture":return s=r.pointerId,to.set(s,Cs(to.get(s)||null,n,e,t,i,r)),!0}return!1}function jp(n){var e=Qi(n.target);if(e!==null){var t=vr(e);if(t!==null){if(e=t.tag,e===13){if(e=Ip(t),e!==null){n.blockedOn=e,Wp(n.priority,function(){Gp(t)});return}}else if(e===3&&t.stateNode.current.memoizedState.isDehydrated){n.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}n.blockedOn=null}function fa(n){if(n.blockedOn!==null)return!1;for(var e=n.targetContainers;0<e.length;){var t=Wu(n.domEventName,n.eventSystemFlags,e[0],n.nativeEvent);if(t===null){t=n.nativeEvent;var i=new t.constructor(t.type,t);Ou=i,t.target.dispatchEvent(i),Ou=null}else return e=xo(t),e!==null&&Vc(e),n.blockedOn=t,!1;e.shift()}return!0}function jf(n,e,t){fa(n)&&t.delete(e)}function V0(){Hu=!1,Ti!==null&&fa(Ti)&&(Ti=null),Ci!==null&&fa(Ci)&&(Ci=null),bi!==null&&fa(bi)&&(bi=null),eo.forEach(jf),to.forEach(jf)}function bs(n,e){n.blockedOn===e&&(n.blockedOn=null,Hu||(Hu=!0,Jt.unstable_scheduleCallback(Jt.unstable_NormalPriority,V0)))}function no(n){function e(r){return bs(r,n)}if(0<Do.length){bs(Do[0],n);for(var t=1;t<Do.length;t++){var i=Do[t];i.blockedOn===n&&(i.blockedOn=null)}}for(Ti!==null&&bs(Ti,n),Ci!==null&&bs(Ci,n),bi!==null&&bs(bi,n),eo.forEach(e),to.forEach(e),t=0;t<Si.length;t++)i=Si[t],i.blockedOn===n&&(i.blockedOn=null);for(;0<Si.length&&(t=Si[0],t.blockedOn===null);)jp(t),t.blockedOn===null&&Si.shift()}var ns=li.ReactCurrentBatchConfig,Aa=!0;function G0(n,e,t,i){var r=Ve,s=ns.transition;ns.transition=null;try{Ve=1,Gc(n,e,t,i)}finally{Ve=r,ns.transition=s}}function H0(n,e,t,i){var r=Ve,s=ns.transition;ns.transition=null;try{Ve=4,Gc(n,e,t,i)}finally{Ve=r,ns.transition=s}}function Gc(n,e,t,i){if(Aa){var r=Wu(n,e,t,i);if(r===null)zl(n,e,i,La,t),Wf(n,i);else if(B0(r,n,e,t,i))i.stopPropagation();else if(Wf(n,i),e&4&&-1<U0.indexOf(n)){for(;r!==null;){var s=xo(r);if(s!==null&&Vp(s),s=Wu(n,e,t,i),s===null&&zl(n,e,i,La,t),s===r)break;r=s}r!==null&&i.stopPropagation()}else zl(n,e,i,null,t)}}var La=null;function Wu(n,e,t,i){if(La=null,n=Oc(i),n=Qi(n),n!==null)if(e=vr(n),e===null)n=null;else if(t=e.tag,t===13){if(n=Ip(e),n!==null)return n;n=null}else if(t===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;n=null}else e!==n&&(n=null);return La=n,null}function Xp(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(P0()){case Uc:return 1;case kp:return 4;case Ca:case D0:return 16;case Op:return 536870912;default:return 16}default:return 16}}var wi=null,Hc=null,da=null;function qp(){if(da)return da;var n,e=Hc,t=e.length,i,r="value"in wi?wi.value:wi.textContent,s=r.length;for(n=0;n<t&&e[n]===r[n];n++);var o=t-n;for(i=1;i<=o&&e[t-i]===r[s-i];i++);return da=r.slice(n,1<i?1-i:void 0)}function ha(n){var e=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&e===13&&(n=13)):n=e,n===10&&(n=13),32<=n||n===13?n:0}function Ro(){return!0}function Xf(){return!1}function tn(n){function e(t,i,r,s,o){this._reactName=t,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in n)n.hasOwnProperty(a)&&(t=n[a],this[a]=t?t(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Ro:Xf,this.isPropagationStopped=Xf,this}return Je(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=Ro)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=Ro)},persist:function(){},isPersistent:Ro}),e}var ys={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Wc=tn(ys),_o=Je({},ys,{view:0,detail:0}),W0=tn(_o),Cl,bl,As,$a=Je({},_o,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:jc,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==As&&(As&&n.type==="mousemove"?(Cl=n.screenX-As.screenX,bl=n.screenY-As.screenY):bl=Cl=0,As=n),Cl)},movementY:function(n){return"movementY"in n?n.movementY:bl}}),qf=tn($a),j0=Je({},$a,{dataTransfer:0}),X0=tn(j0),q0=Je({},_o,{relatedTarget:0}),Al=tn(q0),Y0=Je({},ys,{animationName:0,elapsedTime:0,pseudoElement:0}),$0=tn(Y0),Z0=Je({},ys,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),K0=tn(Z0),Q0=Je({},ys,{data:0}),Yf=tn(Q0),J0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},ev={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},tv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function nv(n){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(n):(n=tv[n])?!!e[n]:!1}function jc(){return nv}var iv=Je({},_o,{key:function(n){if(n.key){var e=J0[n.key]||n.key;if(e!=="Unidentified")return e}return n.type==="keypress"?(n=ha(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?ev[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:jc,charCode:function(n){return n.type==="keypress"?ha(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?ha(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),rv=tn(iv),sv=Je({},$a,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),$f=tn(sv),ov=Je({},_o,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:jc}),av=tn(ov),lv=Je({},ys,{propertyName:0,elapsedTime:0,pseudoElement:0}),uv=tn(lv),cv=Je({},$a,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),fv=tn(cv),dv=[9,13,27,32],Xc=ri&&"CompositionEvent"in window,Ws=null;ri&&"documentMode"in document&&(Ws=document.documentMode);var hv=ri&&"TextEvent"in window&&!Ws,Yp=ri&&(!Xc||Ws&&8<Ws&&11>=Ws),Zf=String.fromCharCode(32),Kf=!1;function $p(n,e){switch(n){case"keyup":return dv.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Zp(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var Gr=!1;function pv(n,e){switch(n){case"compositionend":return Zp(e);case"keypress":return e.which!==32?null:(Kf=!0,Zf);case"textInput":return n=e.data,n===Zf&&Kf?null:n;default:return null}}function mv(n,e){if(Gr)return n==="compositionend"||!Xc&&$p(n,e)?(n=qp(),da=Hc=wi=null,Gr=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Yp&&e.locale!=="ko"?null:e.data;default:return null}}var gv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Qf(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e==="input"?!!gv[n.type]:e==="textarea"}function Kp(n,e,t,i){Ap(i),e=Pa(e,"onChange"),0<e.length&&(t=new Wc("onChange","change",null,t,i),n.push({event:t,listeners:e}))}var js=null,io=null;function vv(n){lm(n,0)}function Za(n){var e=jr(n);if(Sp(e))return n}function _v(n,e){if(n==="change")return e}var Qp=!1;if(ri){var Ll;if(ri){var Pl="oninput"in document;if(!Pl){var Jf=document.createElement("div");Jf.setAttribute("oninput","return;"),Pl=typeof Jf.oninput=="function"}Ll=Pl}else Ll=!1;Qp=Ll&&(!document.documentMode||9<document.documentMode)}function ed(){js&&(js.detachEvent("onpropertychange",Jp),io=js=null)}function Jp(n){if(n.propertyName==="value"&&Za(io)){var e=[];Kp(e,io,n,Oc(n)),Rp(vv,e)}}function xv(n,e,t){n==="focusin"?(ed(),js=e,io=t,js.attachEvent("onpropertychange",Jp)):n==="focusout"&&ed()}function yv(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return Za(io)}function Sv(n,e){if(n==="click")return Za(e)}function Mv(n,e){if(n==="input"||n==="change")return Za(e)}function wv(n,e){return n===e&&(n!==0||1/n===1/e)||n!==n&&e!==e}var Rn=typeof Object.is=="function"?Object.is:wv;function ro(n,e){if(Rn(n,e))return!0;if(typeof n!="object"||n===null||typeof e!="object"||e===null)return!1;var t=Object.keys(n),i=Object.keys(e);if(t.length!==i.length)return!1;for(i=0;i<t.length;i++){var r=t[i];if(!Cu.call(e,r)||!Rn(n[r],e[r]))return!1}return!0}function td(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function nd(n,e){var t=td(n);n=0;for(var i;t;){if(t.nodeType===3){if(i=n+t.textContent.length,n<=e&&i>=e)return{node:t,offset:e-n};n=i}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=td(t)}}function em(n,e){return n&&e?n===e?!0:n&&n.nodeType===3?!1:e&&e.nodeType===3?em(n,e.parentNode):"contains"in n?n.contains(e):n.compareDocumentPosition?!!(n.compareDocumentPosition(e)&16):!1:!1}function tm(){for(var n=window,e=wa();e instanceof n.HTMLIFrameElement;){try{var t=typeof e.contentWindow.location.href=="string"}catch{t=!1}if(t)n=e.contentWindow;else break;e=wa(n.document)}return e}function qc(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e&&(e==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||e==="textarea"||n.contentEditable==="true")}function Ev(n){var e=tm(),t=n.focusedElem,i=n.selectionRange;if(e!==t&&t&&t.ownerDocument&&em(t.ownerDocument.documentElement,t)){if(i!==null&&qc(t)){if(e=i.start,n=i.end,n===void 0&&(n=e),"selectionStart"in t)t.selectionStart=e,t.selectionEnd=Math.min(n,t.value.length);else if(n=(e=t.ownerDocument||document)&&e.defaultView||window,n.getSelection){n=n.getSelection();var r=t.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!n.extend&&s>i&&(r=i,i=s,s=r),r=nd(t,s);var o=nd(t,i);r&&o&&(n.rangeCount!==1||n.anchorNode!==r.node||n.anchorOffset!==r.offset||n.focusNode!==o.node||n.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),n.removeAllRanges(),s>i?(n.addRange(e),n.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),n.addRange(e)))}}for(e=[],n=t;n=n.parentNode;)n.nodeType===1&&e.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<e.length;t++)n=e[t],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var Tv=ri&&"documentMode"in document&&11>=document.documentMode,Hr=null,ju=null,Xs=null,Xu=!1;function id(n,e,t){var i=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;Xu||Hr==null||Hr!==wa(i)||(i=Hr,"selectionStart"in i&&qc(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Xs&&ro(Xs,i)||(Xs=i,i=Pa(ju,"onSelect"),0<i.length&&(e=new Wc("onSelect","select",null,e,t),n.push({event:e,listeners:i}),e.target=Hr)))}function Io(n,e){var t={};return t[n.toLowerCase()]=e.toLowerCase(),t["Webkit"+n]="webkit"+e,t["Moz"+n]="moz"+e,t}var Wr={animationend:Io("Animation","AnimationEnd"),animationiteration:Io("Animation","AnimationIteration"),animationstart:Io("Animation","AnimationStart"),transitionend:Io("Transition","TransitionEnd")},Dl={},nm={};ri&&(nm=document.createElement("div").style,"AnimationEvent"in window||(delete Wr.animationend.animation,delete Wr.animationiteration.animation,delete Wr.animationstart.animation),"TransitionEvent"in window||delete Wr.transitionend.transition);function Ka(n){if(Dl[n])return Dl[n];if(!Wr[n])return n;var e=Wr[n],t;for(t in e)if(e.hasOwnProperty(t)&&t in nm)return Dl[n]=e[t];return n}var im=Ka("animationend"),rm=Ka("animationiteration"),sm=Ka("animationstart"),om=Ka("transitionend"),am=new Map,rd="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Oi(n,e){am.set(n,e),gr(e,[n])}for(var Rl=0;Rl<rd.length;Rl++){var Il=rd[Rl],Cv=Il.toLowerCase(),bv=Il[0].toUpperCase()+Il.slice(1);Oi(Cv,"on"+bv)}Oi(im,"onAnimationEnd");Oi(rm,"onAnimationIteration");Oi(sm,"onAnimationStart");Oi("dblclick","onDoubleClick");Oi("focusin","onFocus");Oi("focusout","onBlur");Oi(om,"onTransitionEnd");as("onMouseEnter",["mouseout","mouseover"]);as("onMouseLeave",["mouseout","mouseover"]);as("onPointerEnter",["pointerout","pointerover"]);as("onPointerLeave",["pointerout","pointerover"]);gr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));gr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));gr("onBeforeInput",["compositionend","keypress","textInput","paste"]);gr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));gr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));gr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Us="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Av=new Set("cancel close invalid load scroll toggle".split(" ").concat(Us));function sd(n,e,t){var i=n.type||"unknown-event";n.currentTarget=t,C0(i,e,void 0,n),n.currentTarget=null}function lm(n,e){e=(e&4)!==0;for(var t=0;t<n.length;t++){var i=n[t],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;sd(r,a,u),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;sd(r,a,u),s=l}}}if(Ta)throw n=Vu,Ta=!1,Vu=null,n}function We(n,e){var t=e[Ku];t===void 0&&(t=e[Ku]=new Set);var i=n+"__bubble";t.has(i)||(um(e,n,2,!1),t.add(i))}function Nl(n,e,t){var i=0;e&&(i|=4),um(t,n,i,e)}var No="_reactListening"+Math.random().toString(36).slice(2);function so(n){if(!n[No]){n[No]=!0,gp.forEach(function(t){t!=="selectionchange"&&(Av.has(t)||Nl(t,!1,n),Nl(t,!0,n))});var e=n.nodeType===9?n:n.ownerDocument;e===null||e[No]||(e[No]=!0,Nl("selectionchange",!1,e))}}function um(n,e,t,i){switch(Xp(e)){case 1:var r=G0;break;case 4:r=H0;break;default:r=Gc}t=r.bind(null,e,t,n),r=void 0,!Bu||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?n.addEventListener(e,t,{capture:!0,passive:r}):n.addEventListener(e,t,!0):r!==void 0?n.addEventListener(e,t,{passive:r}):n.addEventListener(e,t,!1)}function zl(n,e,t,i,r){var s=i;if((e&1)===0&&(e&2)===0&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=Qi(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}Rp(function(){var u=s,c=Oc(t),d=[];e:{var f=am.get(n);if(f!==void 0){var g=Wc,x=n;switch(n){case"keypress":if(ha(t)===0)break e;case"keydown":case"keyup":g=rv;break;case"focusin":x="focus",g=Al;break;case"focusout":x="blur",g=Al;break;case"beforeblur":case"afterblur":g=Al;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=qf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=X0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=av;break;case im:case rm:case sm:g=$0;break;case om:g=uv;break;case"scroll":g=W0;break;case"wheel":g=fv;break;case"copy":case"cut":case"paste":g=K0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=$f}var p=(e&4)!==0,h=!p&&n==="scroll",m=p?f!==null?f+"Capture":null:f;p=[];for(var v=u,_;v!==null;){_=v;var M=_.stateNode;if(_.tag===5&&M!==null&&(_=M,m!==null&&(M=Js(v,m),M!=null&&p.push(oo(v,M,_)))),h)break;v=v.return}0<p.length&&(f=new g(f,x,null,t,c),d.push({event:f,listeners:p}))}}if((e&7)===0){e:{if(f=n==="mouseover"||n==="pointerover",g=n==="mouseout"||n==="pointerout",f&&t!==Ou&&(x=t.relatedTarget||t.fromElement)&&(Qi(x)||x[si]))break e;if((g||f)&&(f=c.window===c?c:(f=c.ownerDocument)?f.defaultView||f.parentWindow:window,g?(x=t.relatedTarget||t.toElement,g=u,x=x?Qi(x):null,x!==null&&(h=vr(x),x!==h||x.tag!==5&&x.tag!==6)&&(x=null)):(g=null,x=u),g!==x)){if(p=qf,M="onMouseLeave",m="onMouseEnter",v="mouse",(n==="pointerout"||n==="pointerover")&&(p=$f,M="onPointerLeave",m="onPointerEnter",v="pointer"),h=g==null?f:jr(g),_=x==null?f:jr(x),f=new p(M,v+"leave",g,t,c),f.target=h,f.relatedTarget=_,M=null,Qi(c)===u&&(p=new p(m,v+"enter",x,t,c),p.target=_,p.relatedTarget=h,M=p),h=M,g&&x)t:{for(p=g,m=x,v=0,_=p;_;_=Mr(_))v++;for(_=0,M=m;M;M=Mr(M))_++;for(;0<v-_;)p=Mr(p),v--;for(;0<_-v;)m=Mr(m),_--;for(;v--;){if(p===m||m!==null&&p===m.alternate)break t;p=Mr(p),m=Mr(m)}p=null}else p=null;g!==null&&od(d,f,g,p,!1),x!==null&&h!==null&&od(d,h,x,p,!0)}}e:{if(f=u?jr(u):window,g=f.nodeName&&f.nodeName.toLowerCase(),g==="select"||g==="input"&&f.type==="file")var S=_v;else if(Qf(f))if(Qp)S=Mv;else{S=yv;var C=xv}else(g=f.nodeName)&&g.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(S=Sv);if(S&&(S=S(n,u))){Kp(d,S,t,c);break e}C&&C(n,f,u),n==="focusout"&&(C=f._wrapperState)&&C.controlled&&f.type==="number"&&Iu(f,"number",f.value)}switch(C=u?jr(u):window,n){case"focusin":(Qf(C)||C.contentEditable==="true")&&(Hr=C,ju=u,Xs=null);break;case"focusout":Xs=ju=Hr=null;break;case"mousedown":Xu=!0;break;case"contextmenu":case"mouseup":case"dragend":Xu=!1,id(d,t,c);break;case"selectionchange":if(Tv)break;case"keydown":case"keyup":id(d,t,c)}var L;if(Xc)e:{switch(n){case"compositionstart":var y="onCompositionStart";break e;case"compositionend":y="onCompositionEnd";break e;case"compositionupdate":y="onCompositionUpdate";break e}y=void 0}else Gr?$p(n,t)&&(y="onCompositionEnd"):n==="keydown"&&t.keyCode===229&&(y="onCompositionStart");y&&(Yp&&t.locale!=="ko"&&(Gr||y!=="onCompositionStart"?y==="onCompositionEnd"&&Gr&&(L=qp()):(wi=c,Hc="value"in wi?wi.value:wi.textContent,Gr=!0)),C=Pa(u,y),0<C.length&&(y=new Yf(y,n,null,t,c),d.push({event:y,listeners:C}),L?y.data=L:(L=Zp(t),L!==null&&(y.data=L)))),(L=hv?pv(n,t):mv(n,t))&&(u=Pa(u,"onBeforeInput"),0<u.length&&(c=new Yf("onBeforeInput","beforeinput",null,t,c),d.push({event:c,listeners:u}),c.data=L))}lm(d,e)})}function oo(n,e,t){return{instance:n,listener:e,currentTarget:t}}function Pa(n,e){for(var t=e+"Capture",i=[];n!==null;){var r=n,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=Js(n,t),s!=null&&i.unshift(oo(n,s,r)),s=Js(n,e),s!=null&&i.push(oo(n,s,r))),n=n.return}return i}function Mr(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function od(n,e,t,i,r){for(var s=e._reactName,o=[];t!==null&&t!==i;){var a=t,l=a.alternate,u=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&u!==null&&(a=u,r?(l=Js(t,s),l!=null&&o.unshift(oo(t,l,a))):r||(l=Js(t,s),l!=null&&o.push(oo(t,l,a)))),t=t.return}o.length!==0&&n.push({event:e,listeners:o})}var Lv=/\r\n?/g,Pv=/\u0000|\uFFFD/g;function ad(n){return(typeof n=="string"?n:""+n).replace(Lv,`
`).replace(Pv,"")}function zo(n,e,t){if(e=ad(e),ad(n)!==e&&t)throw Error(J(425))}function Da(){}var qu=null,Yu=null;function $u(n,e){return n==="textarea"||n==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Zu=typeof setTimeout=="function"?setTimeout:void 0,Dv=typeof clearTimeout=="function"?clearTimeout:void 0,ld=typeof Promise=="function"?Promise:void 0,Rv=typeof queueMicrotask=="function"?queueMicrotask:typeof ld<"u"?function(n){return ld.resolve(null).then(n).catch(Iv)}:Zu;function Iv(n){setTimeout(function(){throw n})}function Fl(n,e){var t=e,i=0;do{var r=t.nextSibling;if(n.removeChild(t),r&&r.nodeType===8)if(t=r.data,t==="/$"){if(i===0){n.removeChild(r),no(e);return}i--}else t!=="$"&&t!=="$?"&&t!=="$!"||i++;t=r}while(t);no(e)}function Ai(n){for(;n!=null;n=n.nextSibling){var e=n.nodeType;if(e===1||e===3)break;if(e===8){if(e=n.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return n}function ud(n){n=n.previousSibling;for(var e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="$"||t==="$!"||t==="$?"){if(e===0)return n;e--}else t==="/$"&&e++}n=n.previousSibling}return null}var Ss=Math.random().toString(36).slice(2),kn="__reactFiber$"+Ss,ao="__reactProps$"+Ss,si="__reactContainer$"+Ss,Ku="__reactEvents$"+Ss,Nv="__reactListeners$"+Ss,zv="__reactHandles$"+Ss;function Qi(n){var e=n[kn];if(e)return e;for(var t=n.parentNode;t;){if(e=t[si]||t[kn]){if(t=e.alternate,e.child!==null||t!==null&&t.child!==null)for(n=ud(n);n!==null;){if(t=n[kn])return t;n=ud(n)}return e}n=t,t=n.parentNode}return null}function xo(n){return n=n[kn]||n[si],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function jr(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(J(33))}function Qa(n){return n[ao]||null}var Qu=[],Xr=-1;function Ui(n){return{current:n}}function Xe(n){0>Xr||(n.current=Qu[Xr],Qu[Xr]=null,Xr--)}function He(n,e){Xr++,Qu[Xr]=n.current,n.current=e}var Fi={},Pt=Ui(Fi),Vt=Ui(!1),lr=Fi;function ls(n,e){var t=n.type.contextTypes;if(!t)return Fi;var i=n.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in t)r[s]=e[s];return i&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=e,n.__reactInternalMemoizedMaskedChildContext=r),r}function Gt(n){return n=n.childContextTypes,n!=null}function Ra(){Xe(Vt),Xe(Pt)}function cd(n,e,t){if(Pt.current!==Fi)throw Error(J(168));He(Pt,e),He(Vt,t)}function cm(n,e,t){var i=n.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return t;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(J(108,x0(n)||"Unknown",r));return Je({},t,i)}function Ia(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||Fi,lr=Pt.current,He(Pt,n),He(Vt,Vt.current),!0}function fd(n,e,t){var i=n.stateNode;if(!i)throw Error(J(169));t?(n=cm(n,e,lr),i.__reactInternalMemoizedMergedChildContext=n,Xe(Vt),Xe(Pt),He(Pt,n)):Xe(Vt),He(Vt,t)}var Kn=null,Ja=!1,kl=!1;function fm(n){Kn===null?Kn=[n]:Kn.push(n)}function Fv(n){Ja=!0,fm(n)}function Bi(){if(!kl&&Kn!==null){kl=!0;var n=0,e=Ve;try{var t=Kn;for(Ve=1;n<t.length;n++){var i=t[n];do i=i(!0);while(i!==null)}Kn=null,Ja=!1}catch(r){throw Kn!==null&&(Kn=Kn.slice(n+1)),Fp(Uc,Bi),r}finally{Ve=e,kl=!1}}return null}var qr=[],Yr=0,Na=null,za=0,ln=[],un=0,ur=null,Jn=1,ei="";function qi(n,e){qr[Yr++]=za,qr[Yr++]=Na,Na=n,za=e}function dm(n,e,t){ln[un++]=Jn,ln[un++]=ei,ln[un++]=ur,ur=n;var i=Jn;n=ei;var r=32-Ln(i)-1;i&=~(1<<r),t+=1;var s=32-Ln(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,Jn=1<<32-Ln(e)+r|t<<r|i,ei=s+n}else Jn=1<<s|t<<r|i,ei=n}function Yc(n){n.return!==null&&(qi(n,1),dm(n,1,0))}function $c(n){for(;n===Na;)Na=qr[--Yr],qr[Yr]=null,za=qr[--Yr],qr[Yr]=null;for(;n===ur;)ur=ln[--un],ln[un]=null,ei=ln[--un],ln[un]=null,Jn=ln[--un],ln[un]=null}var Kt=null,Zt=null,Ye=!1,Cn=null;function hm(n,e){var t=dn(5,null,null,0);t.elementType="DELETED",t.stateNode=e,t.return=n,e=n.deletions,e===null?(n.deletions=[t],n.flags|=16):e.push(t)}function dd(n,e){switch(n.tag){case 5:var t=n.type;return e=e.nodeType!==1||t.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(n.stateNode=e,Kt=n,Zt=Ai(e.firstChild),!0):!1;case 6:return e=n.pendingProps===""||e.nodeType!==3?null:e,e!==null?(n.stateNode=e,Kt=n,Zt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(t=ur!==null?{id:Jn,overflow:ei}:null,n.memoizedState={dehydrated:e,treeContext:t,retryLane:1073741824},t=dn(18,null,null,0),t.stateNode=e,t.return=n,n.child=t,Kt=n,Zt=null,!0):!1;default:return!1}}function Ju(n){return(n.mode&1)!==0&&(n.flags&128)===0}function ec(n){if(Ye){var e=Zt;if(e){var t=e;if(!dd(n,e)){if(Ju(n))throw Error(J(418));e=Ai(t.nextSibling);var i=Kt;e&&dd(n,e)?hm(i,t):(n.flags=n.flags&-4097|2,Ye=!1,Kt=n)}}else{if(Ju(n))throw Error(J(418));n.flags=n.flags&-4097|2,Ye=!1,Kt=n}}}function hd(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;Kt=n}function Fo(n){if(n!==Kt)return!1;if(!Ye)return hd(n),Ye=!0,!1;var e;if((e=n.tag!==3)&&!(e=n.tag!==5)&&(e=n.type,e=e!=="head"&&e!=="body"&&!$u(n.type,n.memoizedProps)),e&&(e=Zt)){if(Ju(n))throw pm(),Error(J(418));for(;e;)hm(n,e),e=Ai(e.nextSibling)}if(hd(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(J(317));e:{for(n=n.nextSibling,e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="/$"){if(e===0){Zt=Ai(n.nextSibling);break e}e--}else t!=="$"&&t!=="$!"&&t!=="$?"||e++}n=n.nextSibling}Zt=null}}else Zt=Kt?Ai(n.stateNode.nextSibling):null;return!0}function pm(){for(var n=Zt;n;)n=Ai(n.nextSibling)}function us(){Zt=Kt=null,Ye=!1}function Zc(n){Cn===null?Cn=[n]:Cn.push(n)}var kv=li.ReactCurrentBatchConfig;function En(n,e){if(n&&n.defaultProps){e=Je({},e),n=n.defaultProps;for(var t in n)e[t]===void 0&&(e[t]=n[t]);return e}return e}var Fa=Ui(null),ka=null,$r=null,Kc=null;function Qc(){Kc=$r=ka=null}function Jc(n){var e=Fa.current;Xe(Fa),n._currentValue=e}function tc(n,e,t){for(;n!==null;){var i=n.alternate;if((n.childLanes&e)!==e?(n.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),n===t)break;n=n.return}}function is(n,e){ka=n,Kc=$r=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&e)!==0&&(Bt=!0),n.firstContext=null)}function gn(n){var e=n._currentValue;if(Kc!==n)if(n={context:n,memoizedValue:e,next:null},$r===null){if(ka===null)throw Error(J(308));$r=n,ka.dependencies={lanes:0,firstContext:n}}else $r=$r.next=n;return e}var Ji=null;function ef(n){Ji===null?Ji=[n]:Ji.push(n)}function mm(n,e,t,i){var r=e.interleaved;return r===null?(t.next=t,ef(e)):(t.next=r.next,r.next=t),e.interleaved=t,oi(n,i)}function oi(n,e){n.lanes|=e;var t=n.alternate;for(t!==null&&(t.lanes|=e),t=n,n=n.return;n!==null;)n.childLanes|=e,t=n.alternate,t!==null&&(t.childLanes|=e),t=n,n=n.return;return t.tag===3?t.stateNode:null}var yi=!1;function tf(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function gm(n,e){n=n.updateQueue,e.updateQueue===n&&(e.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function ni(n,e){return{eventTime:n,lane:e,tag:0,payload:null,callback:null,next:null}}function Li(n,e,t){var i=n.updateQueue;if(i===null)return null;if(i=i.shared,(Ne&2)!==0){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,oi(n,t)}return r=i.interleaved,r===null?(e.next=e,ef(i)):(e.next=r.next,r.next=e),i.interleaved=e,oi(n,t)}function pa(n,e,t){if(e=e.updateQueue,e!==null&&(e=e.shared,(t&4194240)!==0)){var i=e.lanes;i&=n.pendingLanes,t|=i,e.lanes=t,Bc(n,t)}}function pd(n,e){var t=n.updateQueue,i=n.alternate;if(i!==null&&(i=i.updateQueue,t===i)){var r=null,s=null;if(t=t.firstBaseUpdate,t!==null){do{var o={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};s===null?r=s=o:s=s.next=o,t=t.next}while(t!==null);s===null?r=s=e:s=s.next=e}else r=s=e;t={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},n.updateQueue=t;return}n=t.lastBaseUpdate,n===null?t.firstBaseUpdate=e:n.next=e,t.lastBaseUpdate=e}function Oa(n,e,t,i){var r=n.updateQueue;yi=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var c=n.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==o&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(s!==null){var d=r.baseState;o=0,c=u=l=null,a=s;do{var f=a.lane,g=a.eventTime;if((i&f)===f){c!==null&&(c=c.next={eventTime:g,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var x=n,p=a;switch(f=e,g=t,p.tag){case 1:if(x=p.payload,typeof x=="function"){d=x.call(g,d,f);break e}d=x;break e;case 3:x.flags=x.flags&-65537|128;case 0:if(x=p.payload,f=typeof x=="function"?x.call(g,d,f):x,f==null)break e;d=Je({},d,f);break e;case 2:yi=!0}}a.callback!==null&&a.lane!==0&&(n.flags|=64,f=r.effects,f===null?r.effects=[a]:f.push(a))}else g={eventTime:g,lane:f,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=g,l=d):c=c.next=g,o|=f;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;f=a,a=f.next,f.next=null,r.lastBaseUpdate=f,r.shared.pending=null}}while(1);if(c===null&&(l=d),r.baseState=l,r.firstBaseUpdate=u,r.lastBaseUpdate=c,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);fr|=o,n.lanes=o,n.memoizedState=d}}function md(n,e,t){if(n=e.effects,e.effects=null,n!==null)for(e=0;e<n.length;e++){var i=n[e],r=i.callback;if(r!==null){if(i.callback=null,i=t,typeof r!="function")throw Error(J(191,r));r.call(i)}}}var vm=new mp.Component().refs;function nc(n,e,t,i){e=n.memoizedState,t=t(i,e),t=t==null?e:Je({},e,t),n.memoizedState=t,n.lanes===0&&(n.updateQueue.baseState=t)}var el={isMounted:function(n){return(n=n._reactInternals)?vr(n)===n:!1},enqueueSetState:function(n,e,t){n=n._reactInternals;var i=Nt(),r=Di(n),s=ni(i,r);s.payload=e,t!=null&&(s.callback=t),e=Li(n,s,r),e!==null&&(Pn(e,n,r,i),pa(e,n,r))},enqueueReplaceState:function(n,e,t){n=n._reactInternals;var i=Nt(),r=Di(n),s=ni(i,r);s.tag=1,s.payload=e,t!=null&&(s.callback=t),e=Li(n,s,r),e!==null&&(Pn(e,n,r,i),pa(e,n,r))},enqueueForceUpdate:function(n,e){n=n._reactInternals;var t=Nt(),i=Di(n),r=ni(t,i);r.tag=2,e!=null&&(r.callback=e),e=Li(n,r,i),e!==null&&(Pn(e,n,i,t),pa(e,n,i))}};function gd(n,e,t,i,r,s,o){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!ro(t,i)||!ro(r,s):!0}function _m(n,e,t){var i=!1,r=Fi,s=e.contextType;return typeof s=="object"&&s!==null?s=gn(s):(r=Gt(e)?lr:Pt.current,i=e.contextTypes,s=(i=i!=null)?ls(n,r):Fi),e=new e(t,s),n.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=el,n.stateNode=e,e._reactInternals=n,i&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=r,n.__reactInternalMemoizedMaskedChildContext=s),e}function vd(n,e,t,i){n=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(t,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(t,i),e.state!==n&&el.enqueueReplaceState(e,e.state,null)}function ic(n,e,t,i){var r=n.stateNode;r.props=t,r.state=n.memoizedState,r.refs=vm,tf(n);var s=e.contextType;typeof s=="object"&&s!==null?r.context=gn(s):(s=Gt(e)?lr:Pt.current,r.context=ls(n,s)),r.state=n.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(nc(n,e,s,t),r.state=n.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&el.enqueueReplaceState(r,r.state,null),Oa(n,t,r,i),r.state=n.memoizedState),typeof r.componentDidMount=="function"&&(n.flags|=4194308)}function Ls(n,e,t){if(n=t.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(J(309));var i=t.stateNode}if(!i)throw Error(J(147,n));var r=i,s=""+n;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;a===vm&&(a=r.refs={}),o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof n!="string")throw Error(J(284));if(!t._owner)throw Error(J(290,n))}return n}function ko(n,e){throw n=Object.prototype.toString.call(e),Error(J(31,n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n))}function _d(n){var e=n._init;return e(n._payload)}function xm(n){function e(m,v){if(n){var _=m.deletions;_===null?(m.deletions=[v],m.flags|=16):_.push(v)}}function t(m,v){if(!n)return null;for(;v!==null;)e(m,v),v=v.sibling;return null}function i(m,v){for(m=new Map;v!==null;)v.key!==null?m.set(v.key,v):m.set(v.index,v),v=v.sibling;return m}function r(m,v){return m=Ri(m,v),m.index=0,m.sibling=null,m}function s(m,v,_){return m.index=_,n?(_=m.alternate,_!==null?(_=_.index,_<v?(m.flags|=2,v):_):(m.flags|=2,v)):(m.flags|=1048576,v)}function o(m){return n&&m.alternate===null&&(m.flags|=2),m}function a(m,v,_,M){return v===null||v.tag!==6?(v=Wl(_,m.mode,M),v.return=m,v):(v=r(v,_),v.return=m,v)}function l(m,v,_,M){var S=_.type;return S===Vr?c(m,v,_.props.children,M,_.key):v!==null&&(v.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===xi&&_d(S)===v.type)?(M=r(v,_.props),M.ref=Ls(m,v,_),M.return=m,M):(M=ya(_.type,_.key,_.props,null,m.mode,M),M.ref=Ls(m,v,_),M.return=m,M)}function u(m,v,_,M){return v===null||v.tag!==4||v.stateNode.containerInfo!==_.containerInfo||v.stateNode.implementation!==_.implementation?(v=jl(_,m.mode,M),v.return=m,v):(v=r(v,_.children||[]),v.return=m,v)}function c(m,v,_,M,S){return v===null||v.tag!==7?(v=sr(_,m.mode,M,S),v.return=m,v):(v=r(v,_),v.return=m,v)}function d(m,v,_){if(typeof v=="string"&&v!==""||typeof v=="number")return v=Wl(""+v,m.mode,_),v.return=m,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Co:return _=ya(v.type,v.key,v.props,null,m.mode,_),_.ref=Ls(m,null,v),_.return=m,_;case Br:return v=jl(v,m.mode,_),v.return=m,v;case xi:var M=v._init;return d(m,M(v._payload),_)}if(ks(v)||Es(v))return v=sr(v,m.mode,_,null),v.return=m,v;ko(m,v)}return null}function f(m,v,_,M){var S=v!==null?v.key:null;if(typeof _=="string"&&_!==""||typeof _=="number")return S!==null?null:a(m,v,""+_,M);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case Co:return _.key===S?l(m,v,_,M):null;case Br:return _.key===S?u(m,v,_,M):null;case xi:return S=_._init,f(m,v,S(_._payload),M)}if(ks(_)||Es(_))return S!==null?null:c(m,v,_,M,null);ko(m,_)}return null}function g(m,v,_,M,S){if(typeof M=="string"&&M!==""||typeof M=="number")return m=m.get(_)||null,a(v,m,""+M,S);if(typeof M=="object"&&M!==null){switch(M.$$typeof){case Co:return m=m.get(M.key===null?_:M.key)||null,l(v,m,M,S);case Br:return m=m.get(M.key===null?_:M.key)||null,u(v,m,M,S);case xi:var C=M._init;return g(m,v,_,C(M._payload),S)}if(ks(M)||Es(M))return m=m.get(_)||null,c(v,m,M,S,null);ko(v,M)}return null}function x(m,v,_,M){for(var S=null,C=null,L=v,y=v=0,b=null;L!==null&&y<_.length;y++){L.index>y?(b=L,L=null):b=L.sibling;var R=f(m,L,_[y],M);if(R===null){L===null&&(L=b);break}n&&L&&R.alternate===null&&e(m,L),v=s(R,v,y),C===null?S=R:C.sibling=R,C=R,L=b}if(y===_.length)return t(m,L),Ye&&qi(m,y),S;if(L===null){for(;y<_.length;y++)L=d(m,_[y],M),L!==null&&(v=s(L,v,y),C===null?S=L:C.sibling=L,C=L);return Ye&&qi(m,y),S}for(L=i(m,L);y<_.length;y++)b=g(L,m,y,_[y],M),b!==null&&(n&&b.alternate!==null&&L.delete(b.key===null?y:b.key),v=s(b,v,y),C===null?S=b:C.sibling=b,C=b);return n&&L.forEach(function($){return e(m,$)}),Ye&&qi(m,y),S}function p(m,v,_,M){var S=Es(_);if(typeof S!="function")throw Error(J(150));if(_=S.call(_),_==null)throw Error(J(151));for(var C=S=null,L=v,y=v=0,b=null,R=_.next();L!==null&&!R.done;y++,R=_.next()){L.index>y?(b=L,L=null):b=L.sibling;var $=f(m,L,R.value,M);if($===null){L===null&&(L=b);break}n&&L&&$.alternate===null&&e(m,L),v=s($,v,y),C===null?S=$:C.sibling=$,C=$,L=b}if(R.done)return t(m,L),Ye&&qi(m,y),S;if(L===null){for(;!R.done;y++,R=_.next())R=d(m,R.value,M),R!==null&&(v=s(R,v,y),C===null?S=R:C.sibling=R,C=R);return Ye&&qi(m,y),S}for(L=i(m,L);!R.done;y++,R=_.next())R=g(L,m,y,R.value,M),R!==null&&(n&&R.alternate!==null&&L.delete(R.key===null?y:R.key),v=s(R,v,y),C===null?S=R:C.sibling=R,C=R);return n&&L.forEach(function(re){return e(m,re)}),Ye&&qi(m,y),S}function h(m,v,_,M){if(typeof _=="object"&&_!==null&&_.type===Vr&&_.key===null&&(_=_.props.children),typeof _=="object"&&_!==null){switch(_.$$typeof){case Co:e:{for(var S=_.key,C=v;C!==null;){if(C.key===S){if(S=_.type,S===Vr){if(C.tag===7){t(m,C.sibling),v=r(C,_.props.children),v.return=m,m=v;break e}}else if(C.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===xi&&_d(S)===C.type){t(m,C.sibling),v=r(C,_.props),v.ref=Ls(m,C,_),v.return=m,m=v;break e}t(m,C);break}else e(m,C);C=C.sibling}_.type===Vr?(v=sr(_.props.children,m.mode,M,_.key),v.return=m,m=v):(M=ya(_.type,_.key,_.props,null,m.mode,M),M.ref=Ls(m,v,_),M.return=m,m=M)}return o(m);case Br:e:{for(C=_.key;v!==null;){if(v.key===C)if(v.tag===4&&v.stateNode.containerInfo===_.containerInfo&&v.stateNode.implementation===_.implementation){t(m,v.sibling),v=r(v,_.children||[]),v.return=m,m=v;break e}else{t(m,v);break}else e(m,v);v=v.sibling}v=jl(_,m.mode,M),v.return=m,m=v}return o(m);case xi:return C=_._init,h(m,v,C(_._payload),M)}if(ks(_))return x(m,v,_,M);if(Es(_))return p(m,v,_,M);ko(m,_)}return typeof _=="string"&&_!==""||typeof _=="number"?(_=""+_,v!==null&&v.tag===6?(t(m,v.sibling),v=r(v,_),v.return=m,m=v):(t(m,v),v=Wl(_,m.mode,M),v.return=m,m=v),o(m)):t(m,v)}return h}var cs=xm(!0),ym=xm(!1),yo={},Bn=Ui(yo),lo=Ui(yo),uo=Ui(yo);function er(n){if(n===yo)throw Error(J(174));return n}function nf(n,e){switch(He(uo,e),He(lo,n),He(Bn,yo),n=e.nodeType,n){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:zu(null,"");break;default:n=n===8?e.parentNode:e,e=n.namespaceURI||null,n=n.tagName,e=zu(e,n)}Xe(Bn),He(Bn,e)}function fs(){Xe(Bn),Xe(lo),Xe(uo)}function Sm(n){er(uo.current);var e=er(Bn.current),t=zu(e,n.type);e!==t&&(He(lo,n),He(Bn,t))}function rf(n){lo.current===n&&(Xe(Bn),Xe(lo))}var Ke=Ui(0);function Ua(n){for(var e=n;e!==null;){if(e.tag===13){var t=e.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if((e.flags&128)!==0)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Ol=[];function sf(){for(var n=0;n<Ol.length;n++)Ol[n]._workInProgressVersionPrimary=null;Ol.length=0}var ma=li.ReactCurrentDispatcher,Ul=li.ReactCurrentBatchConfig,cr=0,Qe=null,ft=null,_t=null,Ba=!1,qs=!1,co=0,Ov=0;function Ct(){throw Error(J(321))}function of(n,e){if(e===null)return!1;for(var t=0;t<e.length&&t<n.length;t++)if(!Rn(n[t],e[t]))return!1;return!0}function af(n,e,t,i,r,s){if(cr=s,Qe=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,ma.current=n===null||n.memoizedState===null?Gv:Hv,n=t(i,r),qs){s=0;do{if(qs=!1,co=0,25<=s)throw Error(J(301));s+=1,_t=ft=null,e.updateQueue=null,ma.current=Wv,n=t(i,r)}while(qs)}if(ma.current=Va,e=ft!==null&&ft.next!==null,cr=0,_t=ft=Qe=null,Ba=!1,e)throw Error(J(300));return n}function lf(){var n=co!==0;return co=0,n}function zn(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return _t===null?Qe.memoizedState=_t=n:_t=_t.next=n,_t}function vn(){if(ft===null){var n=Qe.alternate;n=n!==null?n.memoizedState:null}else n=ft.next;var e=_t===null?Qe.memoizedState:_t.next;if(e!==null)_t=e,ft=n;else{if(n===null)throw Error(J(310));ft=n,n={memoizedState:ft.memoizedState,baseState:ft.baseState,baseQueue:ft.baseQueue,queue:ft.queue,next:null},_t===null?Qe.memoizedState=_t=n:_t=_t.next=n}return _t}function fo(n,e){return typeof e=="function"?e(n):e}function Bl(n){var e=vn(),t=e.queue;if(t===null)throw Error(J(311));t.lastRenderedReducer=n;var i=ft,r=i.baseQueue,s=t.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,t.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,u=s;do{var c=u.lane;if((cr&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),i=u.hasEagerState?u.eagerState:n(i,u.action);else{var d={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=d,o=i):l=l.next=d,Qe.lanes|=c,fr|=c}u=u.next}while(u!==null&&u!==s);l===null?o=i:l.next=a,Rn(i,e.memoizedState)||(Bt=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,t.lastRenderedState=i}if(n=t.interleaved,n!==null){r=n;do s=r.lane,Qe.lanes|=s,fr|=s,r=r.next;while(r!==n)}else r===null&&(t.lanes=0);return[e.memoizedState,t.dispatch]}function Vl(n){var e=vn(),t=e.queue;if(t===null)throw Error(J(311));t.lastRenderedReducer=n;var i=t.dispatch,r=t.pending,s=e.memoizedState;if(r!==null){t.pending=null;var o=r=r.next;do s=n(s,o.action),o=o.next;while(o!==r);Rn(s,e.memoizedState)||(Bt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),t.lastRenderedState=s}return[s,i]}function Mm(){}function wm(n,e){var t=Qe,i=vn(),r=e(),s=!Rn(i.memoizedState,r);if(s&&(i.memoizedState=r,Bt=!0),i=i.queue,uf(Cm.bind(null,t,i,n),[n]),i.getSnapshot!==e||s||_t!==null&&_t.memoizedState.tag&1){if(t.flags|=2048,ho(9,Tm.bind(null,t,i,r,e),void 0,null),xt===null)throw Error(J(349));(cr&30)!==0||Em(t,e,r)}return r}function Em(n,e,t){n.flags|=16384,n={getSnapshot:e,value:t},e=Qe.updateQueue,e===null?(e={lastEffect:null,stores:null},Qe.updateQueue=e,e.stores=[n]):(t=e.stores,t===null?e.stores=[n]:t.push(n))}function Tm(n,e,t,i){e.value=t,e.getSnapshot=i,bm(e)&&Am(n)}function Cm(n,e,t){return t(function(){bm(e)&&Am(n)})}function bm(n){var e=n.getSnapshot;n=n.value;try{var t=e();return!Rn(n,t)}catch{return!0}}function Am(n){var e=oi(n,1);e!==null&&Pn(e,n,1,-1)}function xd(n){var e=zn();return typeof n=="function"&&(n=n()),e.memoizedState=e.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:fo,lastRenderedState:n},e.queue=n,n=n.dispatch=Vv.bind(null,Qe,n),[e.memoizedState,n]}function ho(n,e,t,i){return n={tag:n,create:e,destroy:t,deps:i,next:null},e=Qe.updateQueue,e===null?(e={lastEffect:null,stores:null},Qe.updateQueue=e,e.lastEffect=n.next=n):(t=e.lastEffect,t===null?e.lastEffect=n.next=n:(i=t.next,t.next=n,n.next=i,e.lastEffect=n)),n}function Lm(){return vn().memoizedState}function ga(n,e,t,i){var r=zn();Qe.flags|=n,r.memoizedState=ho(1|e,t,void 0,i===void 0?null:i)}function tl(n,e,t,i){var r=vn();i=i===void 0?null:i;var s=void 0;if(ft!==null){var o=ft.memoizedState;if(s=o.destroy,i!==null&&of(i,o.deps)){r.memoizedState=ho(e,t,s,i);return}}Qe.flags|=n,r.memoizedState=ho(1|e,t,s,i)}function yd(n,e){return ga(8390656,8,n,e)}function uf(n,e){return tl(2048,8,n,e)}function Pm(n,e){return tl(4,2,n,e)}function Dm(n,e){return tl(4,4,n,e)}function Rm(n,e){if(typeof e=="function")return n=n(),e(n),function(){e(null)};if(e!=null)return n=n(),e.current=n,function(){e.current=null}}function Im(n,e,t){return t=t!=null?t.concat([n]):null,tl(4,4,Rm.bind(null,e,n),t)}function cf(){}function Nm(n,e){var t=vn();e=e===void 0?null:e;var i=t.memoizedState;return i!==null&&e!==null&&of(e,i[1])?i[0]:(t.memoizedState=[n,e],n)}function zm(n,e){var t=vn();e=e===void 0?null:e;var i=t.memoizedState;return i!==null&&e!==null&&of(e,i[1])?i[0]:(n=n(),t.memoizedState=[n,e],n)}function Fm(n,e,t){return(cr&21)===0?(n.baseState&&(n.baseState=!1,Bt=!0),n.memoizedState=t):(Rn(t,e)||(t=Up(),Qe.lanes|=t,fr|=t,n.baseState=!0),e)}function Uv(n,e){var t=Ve;Ve=t!==0&&4>t?t:4,n(!0);var i=Ul.transition;Ul.transition={};try{n(!1),e()}finally{Ve=t,Ul.transition=i}}function km(){return vn().memoizedState}function Bv(n,e,t){var i=Di(n);if(t={lane:i,action:t,hasEagerState:!1,eagerState:null,next:null},Om(n))Um(e,t);else if(t=mm(n,e,t,i),t!==null){var r=Nt();Pn(t,n,i,r),Bm(t,e,i)}}function Vv(n,e,t){var i=Di(n),r={lane:i,action:t,hasEagerState:!1,eagerState:null,next:null};if(Om(n))Um(e,r);else{var s=n.alternate;if(n.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,t);if(r.hasEagerState=!0,r.eagerState=a,Rn(a,o)){var l=e.interleaved;l===null?(r.next=r,ef(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}t=mm(n,e,r,i),t!==null&&(r=Nt(),Pn(t,n,i,r),Bm(t,e,i))}}function Om(n){var e=n.alternate;return n===Qe||e!==null&&e===Qe}function Um(n,e){qs=Ba=!0;var t=n.pending;t===null?e.next=e:(e.next=t.next,t.next=e),n.pending=e}function Bm(n,e,t){if((t&4194240)!==0){var i=e.lanes;i&=n.pendingLanes,t|=i,e.lanes=t,Bc(n,t)}}var Va={readContext:gn,useCallback:Ct,useContext:Ct,useEffect:Ct,useImperativeHandle:Ct,useInsertionEffect:Ct,useLayoutEffect:Ct,useMemo:Ct,useReducer:Ct,useRef:Ct,useState:Ct,useDebugValue:Ct,useDeferredValue:Ct,useTransition:Ct,useMutableSource:Ct,useSyncExternalStore:Ct,useId:Ct,unstable_isNewReconciler:!1},Gv={readContext:gn,useCallback:function(n,e){return zn().memoizedState=[n,e===void 0?null:e],n},useContext:gn,useEffect:yd,useImperativeHandle:function(n,e,t){return t=t!=null?t.concat([n]):null,ga(4194308,4,Rm.bind(null,e,n),t)},useLayoutEffect:function(n,e){return ga(4194308,4,n,e)},useInsertionEffect:function(n,e){return ga(4,2,n,e)},useMemo:function(n,e){var t=zn();return e=e===void 0?null:e,n=n(),t.memoizedState=[n,e],n},useReducer:function(n,e,t){var i=zn();return e=t!==void 0?t(e):e,i.memoizedState=i.baseState=e,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:e},i.queue=n,n=n.dispatch=Bv.bind(null,Qe,n),[i.memoizedState,n]},useRef:function(n){var e=zn();return n={current:n},e.memoizedState=n},useState:xd,useDebugValue:cf,useDeferredValue:function(n){return zn().memoizedState=n},useTransition:function(){var n=xd(!1),e=n[0];return n=Uv.bind(null,n[1]),zn().memoizedState=n,[e,n]},useMutableSource:function(){},useSyncExternalStore:function(n,e,t){var i=Qe,r=zn();if(Ye){if(t===void 0)throw Error(J(407));t=t()}else{if(t=e(),xt===null)throw Error(J(349));(cr&30)!==0||Em(i,e,t)}r.memoizedState=t;var s={value:t,getSnapshot:e};return r.queue=s,yd(Cm.bind(null,i,s,n),[n]),i.flags|=2048,ho(9,Tm.bind(null,i,s,t,e),void 0,null),t},useId:function(){var n=zn(),e=xt.identifierPrefix;if(Ye){var t=ei,i=Jn;t=(i&~(1<<32-Ln(i)-1)).toString(32)+t,e=":"+e+"R"+t,t=co++,0<t&&(e+="H"+t.toString(32)),e+=":"}else t=Ov++,e=":"+e+"r"+t.toString(32)+":";return n.memoizedState=e},unstable_isNewReconciler:!1},Hv={readContext:gn,useCallback:Nm,useContext:gn,useEffect:uf,useImperativeHandle:Im,useInsertionEffect:Pm,useLayoutEffect:Dm,useMemo:zm,useReducer:Bl,useRef:Lm,useState:function(){return Bl(fo)},useDebugValue:cf,useDeferredValue:function(n){var e=vn();return Fm(e,ft.memoizedState,n)},useTransition:function(){var n=Bl(fo)[0],e=vn().memoizedState;return[n,e]},useMutableSource:Mm,useSyncExternalStore:wm,useId:km,unstable_isNewReconciler:!1},Wv={readContext:gn,useCallback:Nm,useContext:gn,useEffect:uf,useImperativeHandle:Im,useInsertionEffect:Pm,useLayoutEffect:Dm,useMemo:zm,useReducer:Vl,useRef:Lm,useState:function(){return Vl(fo)},useDebugValue:cf,useDeferredValue:function(n){var e=vn();return ft===null?e.memoizedState=n:Fm(e,ft.memoizedState,n)},useTransition:function(){var n=Vl(fo)[0],e=vn().memoizedState;return[n,e]},useMutableSource:Mm,useSyncExternalStore:wm,useId:km,unstable_isNewReconciler:!1};function ds(n,e){try{var t="",i=e;do t+=_0(i),i=i.return;while(i);var r=t}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:n,source:e,stack:r,digest:null}}function Gl(n,e,t){return{value:n,source:null,stack:t!=null?t:null,digest:e!=null?e:null}}function rc(n,e){try{console.error(e.value)}catch(t){setTimeout(function(){throw t})}}var jv=typeof WeakMap=="function"?WeakMap:Map;function Vm(n,e,t){t=ni(-1,t),t.tag=3,t.payload={element:null};var i=e.value;return t.callback=function(){Ha||(Ha=!0,pc=i),rc(n,e)},t}function Gm(n,e,t){t=ni(-1,t),t.tag=3;var i=n.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;t.payload=function(){return i(r)},t.callback=function(){rc(n,e)}}var s=n.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(t.callback=function(){rc(n,e),typeof i!="function"&&(Pi===null?Pi=new Set([this]):Pi.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),t}function Sd(n,e,t){var i=n.pingCache;if(i===null){i=n.pingCache=new jv;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(t)||(r.add(t),n=s_.bind(null,n,e,t),e.then(n,n))}function Md(n){do{var e;if((e=n.tag===13)&&(e=n.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return n;n=n.return}while(n!==null);return null}function wd(n,e,t,i,r){return(n.mode&1)===0?(n===e?n.flags|=65536:(n.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(e=ni(-1,1),e.tag=2,Li(t,e,1))),t.lanes|=1),n):(n.flags|=65536,n.lanes=r,n)}var Xv=li.ReactCurrentOwner,Bt=!1;function It(n,e,t,i){e.child=n===null?ym(e,null,t,i):cs(e,n.child,t,i)}function Ed(n,e,t,i,r){t=t.render;var s=e.ref;return is(e,r),i=af(n,e,t,i,s,r),t=lf(),n!==null&&!Bt?(e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~r,ai(n,e,r)):(Ye&&t&&Yc(e),e.flags|=1,It(n,e,i,r),e.child)}function Td(n,e,t,i,r){if(n===null){var s=t.type;return typeof s=="function"&&!_f(s)&&s.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(e.tag=15,e.type=s,Hm(n,e,s,i,r)):(n=ya(t.type,null,i,e,e.mode,r),n.ref=e.ref,n.return=e,e.child=n)}if(s=n.child,(n.lanes&r)===0){var o=s.memoizedProps;if(t=t.compare,t=t!==null?t:ro,t(o,i)&&n.ref===e.ref)return ai(n,e,r)}return e.flags|=1,n=Ri(s,i),n.ref=e.ref,n.return=e,e.child=n}function Hm(n,e,t,i,r){if(n!==null){var s=n.memoizedProps;if(ro(s,i)&&n.ref===e.ref)if(Bt=!1,e.pendingProps=i=s,(n.lanes&r)!==0)(n.flags&131072)!==0&&(Bt=!0);else return e.lanes=n.lanes,ai(n,e,r)}return sc(n,e,t,i,r)}function Wm(n,e,t){var i=e.pendingProps,r=i.children,s=n!==null?n.memoizedState:null;if(i.mode==="hidden")if((e.mode&1)===0)e.memoizedState={baseLanes:0,cachePool:null,transitions:null},He(Kr,$t),$t|=t;else{if((t&1073741824)===0)return n=s!==null?s.baseLanes|t:t,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:n,cachePool:null,transitions:null},e.updateQueue=null,He(Kr,$t),$t|=n,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:t,He(Kr,$t),$t|=i}else s!==null?(i=s.baseLanes|t,e.memoizedState=null):i=t,He(Kr,$t),$t|=i;return It(n,e,r,t),e.child}function jm(n,e){var t=e.ref;(n===null&&t!==null||n!==null&&n.ref!==t)&&(e.flags|=512,e.flags|=2097152)}function sc(n,e,t,i,r){var s=Gt(t)?lr:Pt.current;return s=ls(e,s),is(e,r),t=af(n,e,t,i,s,r),i=lf(),n!==null&&!Bt?(e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~r,ai(n,e,r)):(Ye&&i&&Yc(e),e.flags|=1,It(n,e,t,r),e.child)}function Cd(n,e,t,i,r){if(Gt(t)){var s=!0;Ia(e)}else s=!1;if(is(e,r),e.stateNode===null)va(n,e),_m(e,t,i),ic(e,t,i,r),i=!0;else if(n===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=t.contextType;typeof u=="object"&&u!==null?u=gn(u):(u=Gt(t)?lr:Pt.current,u=ls(e,u));var c=t.getDerivedStateFromProps,d=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";d||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==u)&&vd(e,o,i,u),yi=!1;var f=e.memoizedState;o.state=f,Oa(e,i,o,r),l=e.memoizedState,a!==i||f!==l||Vt.current||yi?(typeof c=="function"&&(nc(e,t,c,i),l=e.memoizedState),(a=yi||gd(e,t,a,i,f,l,u))?(d||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=u,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,gm(n,e),a=e.memoizedProps,u=e.type===e.elementType?a:En(e.type,a),o.props=u,d=e.pendingProps,f=o.context,l=t.contextType,typeof l=="object"&&l!==null?l=gn(l):(l=Gt(t)?lr:Pt.current,l=ls(e,l));var g=t.getDerivedStateFromProps;(c=typeof g=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==d||f!==l)&&vd(e,o,i,l),yi=!1,f=e.memoizedState,o.state=f,Oa(e,i,o,r);var x=e.memoizedState;a!==d||f!==x||Vt.current||yi?(typeof g=="function"&&(nc(e,t,g,i),x=e.memoizedState),(u=yi||gd(e,t,u,i,f,x,l)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,x,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,x,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===n.memoizedProps&&f===n.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===n.memoizedProps&&f===n.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=x),o.props=i,o.state=x,o.context=l,i=u):(typeof o.componentDidUpdate!="function"||a===n.memoizedProps&&f===n.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===n.memoizedProps&&f===n.memoizedState||(e.flags|=1024),i=!1)}return oc(n,e,t,i,s,r)}function oc(n,e,t,i,r,s){jm(n,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&fd(e,t,!1),ai(n,e,s);i=e.stateNode,Xv.current=e;var a=o&&typeof t.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,n!==null&&o?(e.child=cs(e,n.child,null,s),e.child=cs(e,null,a,s)):It(n,e,a,s),e.memoizedState=i.state,r&&fd(e,t,!0),e.child}function Xm(n){var e=n.stateNode;e.pendingContext?cd(n,e.pendingContext,e.pendingContext!==e.context):e.context&&cd(n,e.context,!1),nf(n,e.containerInfo)}function bd(n,e,t,i,r){return us(),Zc(r),e.flags|=256,It(n,e,t,i),e.child}var ac={dehydrated:null,treeContext:null,retryLane:0};function lc(n){return{baseLanes:n,cachePool:null,transitions:null}}function qm(n,e,t){var i=e.pendingProps,r=Ke.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=n!==null&&n.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(n===null||n.memoizedState!==null)&&(r|=1),He(Ke,r&1),n===null)return ec(e),n=e.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((e.mode&1)===0?e.lanes=1:n.data==="$!"?e.lanes=8:e.lanes=1073741824,null):(o=i.children,n=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},(i&1)===0&&s!==null?(s.childLanes=0,s.pendingProps=o):s=rl(o,i,0,null),n=sr(n,i,t,null),s.return=e,n.return=e,s.sibling=n,e.child=s,e.child.memoizedState=lc(t),e.memoizedState=ac,n):ff(e,o));if(r=n.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return qv(n,e,o,i,a,r,t);if(s){s=i.fallback,o=e.mode,r=n.child,a=r.sibling;var l={mode:"hidden",children:i.children};return(o&1)===0&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=Ri(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=Ri(a,s):(s=sr(s,o,t,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=n.child.memoizedState,o=o===null?lc(t):{baseLanes:o.baseLanes|t,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=n.childLanes&~t,e.memoizedState=ac,i}return s=n.child,n=s.sibling,i=Ri(s,{mode:"visible",children:i.children}),(e.mode&1)===0&&(i.lanes=t),i.return=e,i.sibling=null,n!==null&&(t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)),e.child=i,e.memoizedState=null,i}function ff(n,e){return e=rl({mode:"visible",children:e},n.mode,0,null),e.return=n,n.child=e}function Oo(n,e,t,i){return i!==null&&Zc(i),cs(e,n.child,null,t),n=ff(e,e.pendingProps.children),n.flags|=2,e.memoizedState=null,n}function qv(n,e,t,i,r,s,o){if(t)return e.flags&256?(e.flags&=-257,i=Gl(Error(J(422))),Oo(n,e,o,i)):e.memoizedState!==null?(e.child=n.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=rl({mode:"visible",children:i.children},r,0,null),s=sr(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,(e.mode&1)!==0&&cs(e,n.child,null,o),e.child.memoizedState=lc(o),e.memoizedState=ac,s);if((e.mode&1)===0)return Oo(n,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(J(419)),i=Gl(s,i,void 0),Oo(n,e,o,i)}if(a=(o&n.childLanes)!==0,Bt||a){if(i=xt,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=(r&(i.suspendedLanes|o))!==0?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,oi(n,r),Pn(i,n,r,-1))}return vf(),i=Gl(Error(J(421))),Oo(n,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=n.child,e=o_.bind(null,n),r._reactRetry=e,null):(n=s.treeContext,Zt=Ai(r.nextSibling),Kt=e,Ye=!0,Cn=null,n!==null&&(ln[un++]=Jn,ln[un++]=ei,ln[un++]=ur,Jn=n.id,ei=n.overflow,ur=e),e=ff(e,i.children),e.flags|=4096,e)}function Ad(n,e,t){n.lanes|=e;var i=n.alternate;i!==null&&(i.lanes|=e),tc(n.return,e,t)}function Hl(n,e,t,i,r){var s=n.memoizedState;s===null?n.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:t,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=t,s.tailMode=r)}function Ym(n,e,t){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(It(n,e,i.children,t),i=Ke.current,(i&2)!==0)i=i&1|2,e.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=e.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&Ad(n,t,e);else if(n.tag===19)Ad(n,t,e);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break e;for(;n.sibling===null;){if(n.return===null||n.return===e)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}i&=1}if(He(Ke,i),(e.mode&1)===0)e.memoizedState=null;else switch(r){case"forwards":for(t=e.child,r=null;t!==null;)n=t.alternate,n!==null&&Ua(n)===null&&(r=t),t=t.sibling;t=r,t===null?(r=e.child,e.child=null):(r=t.sibling,t.sibling=null),Hl(e,!1,r,t,s);break;case"backwards":for(t=null,r=e.child,e.child=null;r!==null;){if(n=r.alternate,n!==null&&Ua(n)===null){e.child=r;break}n=r.sibling,r.sibling=t,t=r,r=n}Hl(e,!0,t,null,s);break;case"together":Hl(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function va(n,e){(e.mode&1)===0&&n!==null&&(n.alternate=null,e.alternate=null,e.flags|=2)}function ai(n,e,t){if(n!==null&&(e.dependencies=n.dependencies),fr|=e.lanes,(t&e.childLanes)===0)return null;if(n!==null&&e.child!==n.child)throw Error(J(153));if(e.child!==null){for(n=e.child,t=Ri(n,n.pendingProps),e.child=t,t.return=e;n.sibling!==null;)n=n.sibling,t=t.sibling=Ri(n,n.pendingProps),t.return=e;t.sibling=null}return e.child}function Yv(n,e,t){switch(e.tag){case 3:Xm(e),us();break;case 5:Sm(e);break;case 1:Gt(e.type)&&Ia(e);break;case 4:nf(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;He(Fa,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(He(Ke,Ke.current&1),e.flags|=128,null):(t&e.child.childLanes)!==0?qm(n,e,t):(He(Ke,Ke.current&1),n=ai(n,e,t),n!==null?n.sibling:null);He(Ke,Ke.current&1);break;case 19:if(i=(t&e.childLanes)!==0,(n.flags&128)!==0){if(i)return Ym(n,e,t);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),He(Ke,Ke.current),i)break;return null;case 22:case 23:return e.lanes=0,Wm(n,e,t)}return ai(n,e,t)}var $m,uc,Zm,Km;$m=function(n,e){for(var t=e.child;t!==null;){if(t.tag===5||t.tag===6)n.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};uc=function(){};Zm=function(n,e,t,i){var r=n.memoizedProps;if(r!==i){n=e.stateNode,er(Bn.current);var s=null;switch(t){case"input":r=Du(n,r),i=Du(n,i),s=[];break;case"select":r=Je({},r,{value:void 0}),i=Je({},i,{value:void 0}),s=[];break;case"textarea":r=Nu(n,r),i=Nu(n,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(n.onclick=Da)}Fu(t,i);var o;t=null;for(u in r)if(!i.hasOwnProperty(u)&&r.hasOwnProperty(u)&&r[u]!=null)if(u==="style"){var a=r[u];for(o in a)a.hasOwnProperty(o)&&(t||(t={}),t[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Ks.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in i){var l=i[u];if(a=r!=null?r[u]:void 0,i.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(t||(t={}),t[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(t||(t={}),t[o]=l[o])}else t||(s||(s=[]),s.push(u,t)),t=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Ks.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&We("scroll",n),s||a===l||(s=[])):(s=s||[]).push(u,l))}t&&(s=s||[]).push("style",t);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};Km=function(n,e,t,i){t!==i&&(e.flags|=4)};function Ps(n,e){if(!Ye)switch(n.tailMode){case"hidden":e=n.tail;for(var t=null;e!==null;)e.alternate!==null&&(t=e),e=e.sibling;t===null?n.tail=null:t.sibling=null;break;case"collapsed":t=n.tail;for(var i=null;t!==null;)t.alternate!==null&&(i=t),t=t.sibling;i===null?e||n.tail===null?n.tail=null:n.tail.sibling=null:i.sibling=null}}function bt(n){var e=n.alternate!==null&&n.alternate.child===n.child,t=0,i=0;if(e)for(var r=n.child;r!==null;)t|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=n,r=r.sibling;else for(r=n.child;r!==null;)t|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=n,r=r.sibling;return n.subtreeFlags|=i,n.childLanes=t,e}function $v(n,e,t){var i=e.pendingProps;switch($c(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return bt(e),null;case 1:return Gt(e.type)&&Ra(),bt(e),null;case 3:return i=e.stateNode,fs(),Xe(Vt),Xe(Pt),sf(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(n===null||n.child===null)&&(Fo(e)?e.flags|=4:n===null||n.memoizedState.isDehydrated&&(e.flags&256)===0||(e.flags|=1024,Cn!==null&&(vc(Cn),Cn=null))),uc(n,e),bt(e),null;case 5:rf(e);var r=er(uo.current);if(t=e.type,n!==null&&e.stateNode!=null)Zm(n,e,t,i,r),n.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(J(166));return bt(e),null}if(n=er(Bn.current),Fo(e)){i=e.stateNode,t=e.type;var s=e.memoizedProps;switch(i[kn]=e,i[ao]=s,n=(e.mode&1)!==0,t){case"dialog":We("cancel",i),We("close",i);break;case"iframe":case"object":case"embed":We("load",i);break;case"video":case"audio":for(r=0;r<Us.length;r++)We(Us[r],i);break;case"source":We("error",i);break;case"img":case"image":case"link":We("error",i),We("load",i);break;case"details":We("toggle",i);break;case"input":kf(i,s),We("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},We("invalid",i);break;case"textarea":Uf(i,s),We("invalid",i)}Fu(t,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&zo(i.textContent,a,n),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&zo(i.textContent,a,n),r=["children",""+a]):Ks.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&We("scroll",i)}switch(t){case"input":bo(i),Of(i,s,!0);break;case"textarea":bo(i),Bf(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=Da)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=Ep(t)),n==="http://www.w3.org/1999/xhtml"?t==="script"?(n=o.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof i.is=="string"?n=o.createElement(t,{is:i.is}):(n=o.createElement(t),t==="select"&&(o=n,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):n=o.createElementNS(n,t),n[kn]=e,n[ao]=i,$m(n,e,!1,!1),e.stateNode=n;e:{switch(o=ku(t,i),t){case"dialog":We("cancel",n),We("close",n),r=i;break;case"iframe":case"object":case"embed":We("load",n),r=i;break;case"video":case"audio":for(r=0;r<Us.length;r++)We(Us[r],n);r=i;break;case"source":We("error",n),r=i;break;case"img":case"image":case"link":We("error",n),We("load",n),r=i;break;case"details":We("toggle",n),r=i;break;case"input":kf(n,i),r=Du(n,i),We("invalid",n);break;case"option":r=i;break;case"select":n._wrapperState={wasMultiple:!!i.multiple},r=Je({},i,{value:void 0}),We("invalid",n);break;case"textarea":Uf(n,i),r=Nu(n,i),We("invalid",n);break;default:r=i}Fu(t,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?bp(n,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Tp(n,l)):s==="children"?typeof l=="string"?(t!=="textarea"||l!=="")&&Qs(n,l):typeof l=="number"&&Qs(n,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Ks.hasOwnProperty(s)?l!=null&&s==="onScroll"&&We("scroll",n):l!=null&&Nc(n,s,l,o))}switch(t){case"input":bo(n),Of(n,i,!1);break;case"textarea":bo(n),Bf(n);break;case"option":i.value!=null&&n.setAttribute("value",""+zi(i.value));break;case"select":n.multiple=!!i.multiple,s=i.value,s!=null?Jr(n,!!i.multiple,s,!1):i.defaultValue!=null&&Jr(n,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(n.onclick=Da)}switch(t){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return bt(e),null;case 6:if(n&&e.stateNode!=null)Km(n,e,n.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(J(166));if(t=er(uo.current),er(Bn.current),Fo(e)){if(i=e.stateNode,t=e.memoizedProps,i[kn]=e,(s=i.nodeValue!==t)&&(n=Kt,n!==null))switch(n.tag){case 3:zo(i.nodeValue,t,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&zo(i.nodeValue,t,(n.mode&1)!==0)}s&&(e.flags|=4)}else i=(t.nodeType===9?t:t.ownerDocument).createTextNode(i),i[kn]=e,e.stateNode=i}return bt(e),null;case 13:if(Xe(Ke),i=e.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(Ye&&Zt!==null&&(e.mode&1)!==0&&(e.flags&128)===0)pm(),us(),e.flags|=98560,s=!1;else if(s=Fo(e),i!==null&&i.dehydrated!==null){if(n===null){if(!s)throw Error(J(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(J(317));s[kn]=e}else us(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;bt(e),s=!1}else Cn!==null&&(vc(Cn),Cn=null),s=!0;if(!s)return e.flags&65536?e:null}return(e.flags&128)!==0?(e.lanes=t,e):(i=i!==null,i!==(n!==null&&n.memoizedState!==null)&&i&&(e.child.flags|=8192,(e.mode&1)!==0&&(n===null||(Ke.current&1)!==0?dt===0&&(dt=3):vf())),e.updateQueue!==null&&(e.flags|=4),bt(e),null);case 4:return fs(),uc(n,e),n===null&&so(e.stateNode.containerInfo),bt(e),null;case 10:return Jc(e.type._context),bt(e),null;case 17:return Gt(e.type)&&Ra(),bt(e),null;case 19:if(Xe(Ke),s=e.memoizedState,s===null)return bt(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)Ps(s,!1);else{if(dt!==0||n!==null&&(n.flags&128)!==0)for(n=e.child;n!==null;){if(o=Ua(n),o!==null){for(e.flags|=128,Ps(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=t,t=e.child;t!==null;)s=t,n=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=n,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,n=o.dependencies,s.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t=t.sibling;return He(Ke,Ke.current&1|2),e.child}n=n.sibling}s.tail!==null&&it()>hs&&(e.flags|=128,i=!0,Ps(s,!1),e.lanes=4194304)}else{if(!i)if(n=Ua(o),n!==null){if(e.flags|=128,i=!0,t=n.updateQueue,t!==null&&(e.updateQueue=t,e.flags|=4),Ps(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!Ye)return bt(e),null}else 2*it()-s.renderingStartTime>hs&&t!==1073741824&&(e.flags|=128,i=!0,Ps(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(t=s.last,t!==null?t.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=it(),e.sibling=null,t=Ke.current,He(Ke,i?t&1|2:t&1),e):(bt(e),null);case 22:case 23:return gf(),i=e.memoizedState!==null,n!==null&&n.memoizedState!==null!==i&&(e.flags|=8192),i&&(e.mode&1)!==0?($t&1073741824)!==0&&(bt(e),e.subtreeFlags&6&&(e.flags|=8192)):bt(e),null;case 24:return null;case 25:return null}throw Error(J(156,e.tag))}function Zv(n,e){switch($c(e),e.tag){case 1:return Gt(e.type)&&Ra(),n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 3:return fs(),Xe(Vt),Xe(Pt),sf(),n=e.flags,(n&65536)!==0&&(n&128)===0?(e.flags=n&-65537|128,e):null;case 5:return rf(e),null;case 13:if(Xe(Ke),n=e.memoizedState,n!==null&&n.dehydrated!==null){if(e.alternate===null)throw Error(J(340));us()}return n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 19:return Xe(Ke),null;case 4:return fs(),null;case 10:return Jc(e.type._context),null;case 22:case 23:return gf(),null;case 24:return null;default:return null}}var Uo=!1,Lt=!1,Kv=typeof WeakSet=="function"?WeakSet:Set,ce=null;function Zr(n,e){var t=n.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(i){nt(n,e,i)}else t.current=null}function cc(n,e,t){try{t()}catch(i){nt(n,e,i)}}var Ld=!1;function Qv(n,e){if(qu=Aa,n=tm(),qc(n)){if("selectionStart"in n)var t={start:n.selectionStart,end:n.selectionEnd};else e:{t=(t=n.ownerDocument)&&t.defaultView||window;var i=t.getSelection&&t.getSelection();if(i&&i.rangeCount!==0){t=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{t.nodeType,s.nodeType}catch{t=null;break e}var o=0,a=-1,l=-1,u=0,c=0,d=n,f=null;t:for(;;){for(var g;d!==t||r!==0&&d.nodeType!==3||(a=o+r),d!==s||i!==0&&d.nodeType!==3||(l=o+i),d.nodeType===3&&(o+=d.nodeValue.length),(g=d.firstChild)!==null;)f=d,d=g;for(;;){if(d===n)break t;if(f===t&&++u===r&&(a=o),f===s&&++c===i&&(l=o),(g=d.nextSibling)!==null)break;d=f,f=d.parentNode}d=g}t=a===-1||l===-1?null:{start:a,end:l}}else t=null}t=t||{start:0,end:0}}else t=null;for(Yu={focusedElem:n,selectionRange:t},Aa=!1,ce=e;ce!==null;)if(e=ce,n=e.child,(e.subtreeFlags&1028)!==0&&n!==null)n.return=e,ce=n;else for(;ce!==null;){e=ce;try{var x=e.alternate;if((e.flags&1024)!==0)switch(e.tag){case 0:case 11:case 15:break;case 1:if(x!==null){var p=x.memoizedProps,h=x.memoizedState,m=e.stateNode,v=m.getSnapshotBeforeUpdate(e.elementType===e.type?p:En(e.type,p),h);m.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var _=e.stateNode.containerInfo;_.nodeType===1?_.textContent="":_.nodeType===9&&_.documentElement&&_.removeChild(_.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(J(163))}}catch(M){nt(e,e.return,M)}if(n=e.sibling,n!==null){n.return=e.return,ce=n;break}ce=e.return}return x=Ld,Ld=!1,x}function Ys(n,e,t){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&n)===n){var s=r.destroy;r.destroy=void 0,s!==void 0&&cc(e,t,s)}r=r.next}while(r!==i)}}function nl(n,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var t=e=e.next;do{if((t.tag&n)===n){var i=t.create;t.destroy=i()}t=t.next}while(t!==e)}}function fc(n){var e=n.ref;if(e!==null){var t=n.stateNode;switch(n.tag){case 5:n=t;break;default:n=t}typeof e=="function"?e(n):e.current=n}}function Qm(n){var e=n.alternate;e!==null&&(n.alternate=null,Qm(e)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(e=n.stateNode,e!==null&&(delete e[kn],delete e[ao],delete e[Ku],delete e[Nv],delete e[zv])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function Jm(n){return n.tag===5||n.tag===3||n.tag===4}function Pd(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||Jm(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function dc(n,e,t){var i=n.tag;if(i===5||i===6)n=n.stateNode,e?t.nodeType===8?t.parentNode.insertBefore(n,e):t.insertBefore(n,e):(t.nodeType===8?(e=t.parentNode,e.insertBefore(n,t)):(e=t,e.appendChild(n)),t=t._reactRootContainer,t!=null||e.onclick!==null||(e.onclick=Da));else if(i!==4&&(n=n.child,n!==null))for(dc(n,e,t),n=n.sibling;n!==null;)dc(n,e,t),n=n.sibling}function hc(n,e,t){var i=n.tag;if(i===5||i===6)n=n.stateNode,e?t.insertBefore(n,e):t.appendChild(n);else if(i!==4&&(n=n.child,n!==null))for(hc(n,e,t),n=n.sibling;n!==null;)hc(n,e,t),n=n.sibling}var yt=null,Tn=!1;function fi(n,e,t){for(t=t.child;t!==null;)eg(n,e,t),t=t.sibling}function eg(n,e,t){if(Un&&typeof Un.onCommitFiberUnmount=="function")try{Un.onCommitFiberUnmount(Ya,t)}catch{}switch(t.tag){case 5:Lt||Zr(t,e);case 6:var i=yt,r=Tn;yt=null,fi(n,e,t),yt=i,Tn=r,yt!==null&&(Tn?(n=yt,t=t.stateNode,n.nodeType===8?n.parentNode.removeChild(t):n.removeChild(t)):yt.removeChild(t.stateNode));break;case 18:yt!==null&&(Tn?(n=yt,t=t.stateNode,n.nodeType===8?Fl(n.parentNode,t):n.nodeType===1&&Fl(n,t),no(n)):Fl(yt,t.stateNode));break;case 4:i=yt,r=Tn,yt=t.stateNode.containerInfo,Tn=!0,fi(n,e,t),yt=i,Tn=r;break;case 0:case 11:case 14:case 15:if(!Lt&&(i=t.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&((s&2)!==0||(s&4)!==0)&&cc(t,e,o),r=r.next}while(r!==i)}fi(n,e,t);break;case 1:if(!Lt&&(Zr(t,e),i=t.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=t.memoizedProps,i.state=t.memoizedState,i.componentWillUnmount()}catch(a){nt(t,e,a)}fi(n,e,t);break;case 21:fi(n,e,t);break;case 22:t.mode&1?(Lt=(i=Lt)||t.memoizedState!==null,fi(n,e,t),Lt=i):fi(n,e,t);break;default:fi(n,e,t)}}function Dd(n){var e=n.updateQueue;if(e!==null){n.updateQueue=null;var t=n.stateNode;t===null&&(t=n.stateNode=new Kv),e.forEach(function(i){var r=a_.bind(null,n,i);t.has(i)||(t.add(i),i.then(r,r))})}}function xn(n,e){var t=e.deletions;if(t!==null)for(var i=0;i<t.length;i++){var r=t[i];try{var s=n,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:yt=a.stateNode,Tn=!1;break e;case 3:yt=a.stateNode.containerInfo,Tn=!0;break e;case 4:yt=a.stateNode.containerInfo,Tn=!0;break e}a=a.return}if(yt===null)throw Error(J(160));eg(s,o,r),yt=null,Tn=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(u){nt(r,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)tg(e,n),e=e.sibling}function tg(n,e){var t=n.alternate,i=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(xn(e,n),Nn(n),i&4){try{Ys(3,n,n.return),nl(3,n)}catch(p){nt(n,n.return,p)}try{Ys(5,n,n.return)}catch(p){nt(n,n.return,p)}}break;case 1:xn(e,n),Nn(n),i&512&&t!==null&&Zr(t,t.return);break;case 5:if(xn(e,n),Nn(n),i&512&&t!==null&&Zr(t,t.return),n.flags&32){var r=n.stateNode;try{Qs(r,"")}catch(p){nt(n,n.return,p)}}if(i&4&&(r=n.stateNode,r!=null)){var s=n.memoizedProps,o=t!==null?t.memoizedProps:s,a=n.type,l=n.updateQueue;if(n.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&Mp(r,s),ku(a,o);var u=ku(a,s);for(o=0;o<l.length;o+=2){var c=l[o],d=l[o+1];c==="style"?bp(r,d):c==="dangerouslySetInnerHTML"?Tp(r,d):c==="children"?Qs(r,d):Nc(r,c,d,u)}switch(a){case"input":Ru(r,s);break;case"textarea":wp(r,s);break;case"select":var f=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var g=s.value;g!=null?Jr(r,!!s.multiple,g,!1):f!==!!s.multiple&&(s.defaultValue!=null?Jr(r,!!s.multiple,s.defaultValue,!0):Jr(r,!!s.multiple,s.multiple?[]:"",!1))}r[ao]=s}catch(p){nt(n,n.return,p)}}break;case 6:if(xn(e,n),Nn(n),i&4){if(n.stateNode===null)throw Error(J(162));r=n.stateNode,s=n.memoizedProps;try{r.nodeValue=s}catch(p){nt(n,n.return,p)}}break;case 3:if(xn(e,n),Nn(n),i&4&&t!==null&&t.memoizedState.isDehydrated)try{no(e.containerInfo)}catch(p){nt(n,n.return,p)}break;case 4:xn(e,n),Nn(n);break;case 13:xn(e,n),Nn(n),r=n.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(pf=it())),i&4&&Dd(n);break;case 22:if(c=t!==null&&t.memoizedState!==null,n.mode&1?(Lt=(u=Lt)||c,xn(e,n),Lt=u):xn(e,n),Nn(n),i&8192){if(u=n.memoizedState!==null,(n.stateNode.isHidden=u)&&!c&&(n.mode&1)!==0)for(ce=n,c=n.child;c!==null;){for(d=ce=c;ce!==null;){switch(f=ce,g=f.child,f.tag){case 0:case 11:case 14:case 15:Ys(4,f,f.return);break;case 1:Zr(f,f.return);var x=f.stateNode;if(typeof x.componentWillUnmount=="function"){i=f,t=f.return;try{e=i,x.props=e.memoizedProps,x.state=e.memoizedState,x.componentWillUnmount()}catch(p){nt(i,t,p)}}break;case 5:Zr(f,f.return);break;case 22:if(f.memoizedState!==null){Id(d);continue}}g!==null?(g.return=f,ce=g):Id(d)}c=c.sibling}e:for(c=null,d=n;;){if(d.tag===5){if(c===null){c=d;try{r=d.stateNode,u?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=d.stateNode,l=d.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=Cp("display",o))}catch(p){nt(n,n.return,p)}}}else if(d.tag===6){if(c===null)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(p){nt(n,n.return,p)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===n)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===n)break e;for(;d.sibling===null;){if(d.return===null||d.return===n)break e;c===d&&(c=null),d=d.return}c===d&&(c=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:xn(e,n),Nn(n),i&4&&Dd(n);break;case 21:break;default:xn(e,n),Nn(n)}}function Nn(n){var e=n.flags;if(e&2){try{e:{for(var t=n.return;t!==null;){if(Jm(t)){var i=t;break e}t=t.return}throw Error(J(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(Qs(r,""),i.flags&=-33);var s=Pd(n);hc(n,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=Pd(n);dc(n,a,o);break;default:throw Error(J(161))}}catch(l){nt(n,n.return,l)}n.flags&=-3}e&4096&&(n.flags&=-4097)}function Jv(n,e,t){ce=n,ng(n)}function ng(n,e,t){for(var i=(n.mode&1)!==0;ce!==null;){var r=ce,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||Uo;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||Lt;a=Uo;var u=Lt;if(Uo=o,(Lt=l)&&!u)for(ce=r;ce!==null;)o=ce,l=o.child,o.tag===22&&o.memoizedState!==null?Nd(r):l!==null?(l.return=o,ce=l):Nd(r);for(;s!==null;)ce=s,ng(s),s=s.sibling;ce=r,Uo=a,Lt=u}Rd(n)}else(r.subtreeFlags&8772)!==0&&s!==null?(s.return=r,ce=s):Rd(n)}}function Rd(n){for(;ce!==null;){var e=ce;if((e.flags&8772)!==0){var t=e.alternate;try{if((e.flags&8772)!==0)switch(e.tag){case 0:case 11:case 15:Lt||nl(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!Lt)if(t===null)i.componentDidMount();else{var r=e.elementType===e.type?t.memoizedProps:En(e.type,t.memoizedProps);i.componentDidUpdate(r,t.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&md(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(t=null,e.child!==null)switch(e.child.tag){case 5:t=e.child.stateNode;break;case 1:t=e.child.stateNode}md(e,o,t)}break;case 5:var a=e.stateNode;if(t===null&&e.flags&4){t=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&t.focus();break;case"img":l.src&&(t.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var d=c.dehydrated;d!==null&&no(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(J(163))}Lt||e.flags&512&&fc(e)}catch(f){nt(e,e.return,f)}}if(e===n){ce=null;break}if(t=e.sibling,t!==null){t.return=e.return,ce=t;break}ce=e.return}}function Id(n){for(;ce!==null;){var e=ce;if(e===n){ce=null;break}var t=e.sibling;if(t!==null){t.return=e.return,ce=t;break}ce=e.return}}function Nd(n){for(;ce!==null;){var e=ce;try{switch(e.tag){case 0:case 11:case 15:var t=e.return;try{nl(4,e)}catch(l){nt(e,t,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){nt(e,r,l)}}var s=e.return;try{fc(e)}catch(l){nt(e,s,l)}break;case 5:var o=e.return;try{fc(e)}catch(l){nt(e,o,l)}}}catch(l){nt(e,e.return,l)}if(e===n){ce=null;break}var a=e.sibling;if(a!==null){a.return=e.return,ce=a;break}ce=e.return}}var e_=Math.ceil,Ga=li.ReactCurrentDispatcher,df=li.ReactCurrentOwner,pn=li.ReactCurrentBatchConfig,Ne=0,xt=null,at=null,Mt=0,$t=0,Kr=Ui(0),dt=0,po=null,fr=0,il=0,hf=0,$s=null,kt=null,pf=0,hs=1/0,$n=null,Ha=!1,pc=null,Pi=null,Bo=!1,Ei=null,Wa=0,Zs=0,mc=null,_a=-1,xa=0;function Nt(){return(Ne&6)!==0?it():_a!==-1?_a:_a=it()}function Di(n){return(n.mode&1)===0?1:(Ne&2)!==0&&Mt!==0?Mt&-Mt:kv.transition!==null?(xa===0&&(xa=Up()),xa):(n=Ve,n!==0||(n=window.event,n=n===void 0?16:Xp(n.type)),n)}function Pn(n,e,t,i){if(50<Zs)throw Zs=0,mc=null,Error(J(185));vo(n,t,i),((Ne&2)===0||n!==xt)&&(n===xt&&((Ne&2)===0&&(il|=t),dt===4&&Mi(n,Mt)),Ht(n,i),t===1&&Ne===0&&(e.mode&1)===0&&(hs=it()+500,Ja&&Bi()))}function Ht(n,e){var t=n.callbackNode;k0(n,e);var i=ba(n,n===xt?Mt:0);if(i===0)t!==null&&Hf(t),n.callbackNode=null,n.callbackPriority=0;else if(e=i&-i,n.callbackPriority!==e){if(t!=null&&Hf(t),e===1)n.tag===0?Fv(zd.bind(null,n)):fm(zd.bind(null,n)),Rv(function(){(Ne&6)===0&&Bi()}),t=null;else{switch(Bp(i)){case 1:t=Uc;break;case 4:t=kp;break;case 16:t=Ca;break;case 536870912:t=Op;break;default:t=Ca}t=cg(t,ig.bind(null,n))}n.callbackPriority=e,n.callbackNode=t}}function ig(n,e){if(_a=-1,xa=0,(Ne&6)!==0)throw Error(J(327));var t=n.callbackNode;if(rs()&&n.callbackNode!==t)return null;var i=ba(n,n===xt?Mt:0);if(i===0)return null;if((i&30)!==0||(i&n.expiredLanes)!==0||e)e=ja(n,i);else{e=i;var r=Ne;Ne|=2;var s=sg();(xt!==n||Mt!==e)&&($n=null,hs=it()+500,rr(n,e));do try{i_();break}catch(a){rg(n,a)}while(1);Qc(),Ga.current=s,Ne=r,at!==null?e=0:(xt=null,Mt=0,e=dt)}if(e!==0){if(e===2&&(r=Gu(n),r!==0&&(i=r,e=gc(n,r))),e===1)throw t=po,rr(n,0),Mi(n,i),Ht(n,it()),t;if(e===6)Mi(n,i);else{if(r=n.current.alternate,(i&30)===0&&!t_(r)&&(e=ja(n,i),e===2&&(s=Gu(n),s!==0&&(i=s,e=gc(n,s))),e===1))throw t=po,rr(n,0),Mi(n,i),Ht(n,it()),t;switch(n.finishedWork=r,n.finishedLanes=i,e){case 0:case 1:throw Error(J(345));case 2:Yi(n,kt,$n);break;case 3:if(Mi(n,i),(i&130023424)===i&&(e=pf+500-it(),10<e)){if(ba(n,0)!==0)break;if(r=n.suspendedLanes,(r&i)!==i){Nt(),n.pingedLanes|=n.suspendedLanes&r;break}n.timeoutHandle=Zu(Yi.bind(null,n,kt,$n),e);break}Yi(n,kt,$n);break;case 4:if(Mi(n,i),(i&4194240)===i)break;for(e=n.eventTimes,r=-1;0<i;){var o=31-Ln(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=it()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*e_(i/1960))-i,10<i){n.timeoutHandle=Zu(Yi.bind(null,n,kt,$n),i);break}Yi(n,kt,$n);break;case 5:Yi(n,kt,$n);break;default:throw Error(J(329))}}}return Ht(n,it()),n.callbackNode===t?ig.bind(null,n):null}function gc(n,e){var t=$s;return n.current.memoizedState.isDehydrated&&(rr(n,e).flags|=256),n=ja(n,e),n!==2&&(e=kt,kt=t,e!==null&&vc(e)),n}function vc(n){kt===null?kt=n:kt.push.apply(kt,n)}function t_(n){for(var e=n;;){if(e.flags&16384){var t=e.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var i=0;i<t.length;i++){var r=t[i],s=r.getSnapshot;r=r.value;try{if(!Rn(s(),r))return!1}catch{return!1}}}if(t=e.child,e.subtreeFlags&16384&&t!==null)t.return=e,e=t;else{if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Mi(n,e){for(e&=~hf,e&=~il,n.suspendedLanes|=e,n.pingedLanes&=~e,n=n.expirationTimes;0<e;){var t=31-Ln(e),i=1<<t;n[t]=-1,e&=~i}}function zd(n){if((Ne&6)!==0)throw Error(J(327));rs();var e=ba(n,0);if((e&1)===0)return Ht(n,it()),null;var t=ja(n,e);if(n.tag!==0&&t===2){var i=Gu(n);i!==0&&(e=i,t=gc(n,i))}if(t===1)throw t=po,rr(n,0),Mi(n,e),Ht(n,it()),t;if(t===6)throw Error(J(345));return n.finishedWork=n.current.alternate,n.finishedLanes=e,Yi(n,kt,$n),Ht(n,it()),null}function mf(n,e){var t=Ne;Ne|=1;try{return n(e)}finally{Ne=t,Ne===0&&(hs=it()+500,Ja&&Bi())}}function dr(n){Ei!==null&&Ei.tag===0&&(Ne&6)===0&&rs();var e=Ne;Ne|=1;var t=pn.transition,i=Ve;try{if(pn.transition=null,Ve=1,n)return n()}finally{Ve=i,pn.transition=t,Ne=e,(Ne&6)===0&&Bi()}}function gf(){$t=Kr.current,Xe(Kr)}function rr(n,e){n.finishedWork=null,n.finishedLanes=0;var t=n.timeoutHandle;if(t!==-1&&(n.timeoutHandle=-1,Dv(t)),at!==null)for(t=at.return;t!==null;){var i=t;switch($c(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Ra();break;case 3:fs(),Xe(Vt),Xe(Pt),sf();break;case 5:rf(i);break;case 4:fs();break;case 13:Xe(Ke);break;case 19:Xe(Ke);break;case 10:Jc(i.type._context);break;case 22:case 23:gf()}t=t.return}if(xt=n,at=n=Ri(n.current,null),Mt=$t=e,dt=0,po=null,hf=il=fr=0,kt=$s=null,Ji!==null){for(e=0;e<Ji.length;e++)if(t=Ji[e],i=t.interleaved,i!==null){t.interleaved=null;var r=i.next,s=t.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}t.pending=i}Ji=null}return n}function rg(n,e){do{var t=at;try{if(Qc(),ma.current=Va,Ba){for(var i=Qe.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}Ba=!1}if(cr=0,_t=ft=Qe=null,qs=!1,co=0,df.current=null,t===null||t.return===null){dt=1,po=e,at=null;break}e:{var s=n,o=t.return,a=t,l=e;if(e=Mt,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,d=c.tag;if((c.mode&1)===0&&(d===0||d===11||d===15)){var f=c.alternate;f?(c.updateQueue=f.updateQueue,c.memoizedState=f.memoizedState,c.lanes=f.lanes):(c.updateQueue=null,c.memoizedState=null)}var g=Md(o);if(g!==null){g.flags&=-257,wd(g,o,a,s,e),g.mode&1&&Sd(s,u,e),e=g,l=u;var x=e.updateQueue;if(x===null){var p=new Set;p.add(l),e.updateQueue=p}else x.add(l);break e}else{if((e&1)===0){Sd(s,u,e),vf();break e}l=Error(J(426))}}else if(Ye&&a.mode&1){var h=Md(o);if(h!==null){(h.flags&65536)===0&&(h.flags|=256),wd(h,o,a,s,e),Zc(ds(l,a));break e}}s=l=ds(l,a),dt!==4&&(dt=2),$s===null?$s=[s]:$s.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var m=Vm(s,l,e);pd(s,m);break e;case 1:a=l;var v=s.type,_=s.stateNode;if((s.flags&128)===0&&(typeof v.getDerivedStateFromError=="function"||_!==null&&typeof _.componentDidCatch=="function"&&(Pi===null||!Pi.has(_)))){s.flags|=65536,e&=-e,s.lanes|=e;var M=Gm(s,a,e);pd(s,M);break e}}s=s.return}while(s!==null)}ag(t)}catch(S){e=S,at===t&&t!==null&&(at=t=t.return);continue}break}while(1)}function sg(){var n=Ga.current;return Ga.current=Va,n===null?Va:n}function vf(){(dt===0||dt===3||dt===2)&&(dt=4),xt===null||(fr&268435455)===0&&(il&268435455)===0||Mi(xt,Mt)}function ja(n,e){var t=Ne;Ne|=2;var i=sg();(xt!==n||Mt!==e)&&($n=null,rr(n,e));do try{n_();break}catch(r){rg(n,r)}while(1);if(Qc(),Ne=t,Ga.current=i,at!==null)throw Error(J(261));return xt=null,Mt=0,dt}function n_(){for(;at!==null;)og(at)}function i_(){for(;at!==null&&!A0();)og(at)}function og(n){var e=ug(n.alternate,n,$t);n.memoizedProps=n.pendingProps,e===null?ag(n):at=e,df.current=null}function ag(n){var e=n;do{var t=e.alternate;if(n=e.return,(e.flags&32768)===0){if(t=$v(t,e,$t),t!==null){at=t;return}}else{if(t=Zv(t,e),t!==null){t.flags&=32767,at=t;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{dt=6,at=null;return}}if(e=e.sibling,e!==null){at=e;return}at=e=n}while(e!==null);dt===0&&(dt=5)}function Yi(n,e,t){var i=Ve,r=pn.transition;try{pn.transition=null,Ve=1,r_(n,e,t,i)}finally{pn.transition=r,Ve=i}return null}function r_(n,e,t,i){do rs();while(Ei!==null);if((Ne&6)!==0)throw Error(J(327));t=n.finishedWork;var r=n.finishedLanes;if(t===null)return null;if(n.finishedWork=null,n.finishedLanes=0,t===n.current)throw Error(J(177));n.callbackNode=null,n.callbackPriority=0;var s=t.lanes|t.childLanes;if(O0(n,s),n===xt&&(at=xt=null,Mt=0),(t.subtreeFlags&2064)===0&&(t.flags&2064)===0||Bo||(Bo=!0,cg(Ca,function(){return rs(),null})),s=(t.flags&15990)!==0,(t.subtreeFlags&15990)!==0||s){s=pn.transition,pn.transition=null;var o=Ve;Ve=1;var a=Ne;Ne|=4,df.current=null,Qv(n,t),tg(t,n),Ev(Yu),Aa=!!qu,Yu=qu=null,n.current=t,Jv(t),L0(),Ne=a,Ve=o,pn.transition=s}else n.current=t;if(Bo&&(Bo=!1,Ei=n,Wa=r),s=n.pendingLanes,s===0&&(Pi=null),R0(t.stateNode),Ht(n,it()),e!==null)for(i=n.onRecoverableError,t=0;t<e.length;t++)r=e[t],i(r.value,{componentStack:r.stack,digest:r.digest});if(Ha)throw Ha=!1,n=pc,pc=null,n;return(Wa&1)!==0&&n.tag!==0&&rs(),s=n.pendingLanes,(s&1)!==0?n===mc?Zs++:(Zs=0,mc=n):Zs=0,Bi(),null}function rs(){if(Ei!==null){var n=Bp(Wa),e=pn.transition,t=Ve;try{if(pn.transition=null,Ve=16>n?16:n,Ei===null)var i=!1;else{if(n=Ei,Ei=null,Wa=0,(Ne&6)!==0)throw Error(J(331));var r=Ne;for(Ne|=4,ce=n.current;ce!==null;){var s=ce,o=s.child;if((ce.flags&16)!==0){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(ce=u;ce!==null;){var c=ce;switch(c.tag){case 0:case 11:case 15:Ys(8,c,s)}var d=c.child;if(d!==null)d.return=c,ce=d;else for(;ce!==null;){c=ce;var f=c.sibling,g=c.return;if(Qm(c),c===u){ce=null;break}if(f!==null){f.return=g,ce=f;break}ce=g}}}var x=s.alternate;if(x!==null){var p=x.child;if(p!==null){x.child=null;do{var h=p.sibling;p.sibling=null,p=h}while(p!==null)}}ce=s}}if((s.subtreeFlags&2064)!==0&&o!==null)o.return=s,ce=o;else e:for(;ce!==null;){if(s=ce,(s.flags&2048)!==0)switch(s.tag){case 0:case 11:case 15:Ys(9,s,s.return)}var m=s.sibling;if(m!==null){m.return=s.return,ce=m;break e}ce=s.return}}var v=n.current;for(ce=v;ce!==null;){o=ce;var _=o.child;if((o.subtreeFlags&2064)!==0&&_!==null)_.return=o,ce=_;else e:for(o=v;ce!==null;){if(a=ce,(a.flags&2048)!==0)try{switch(a.tag){case 0:case 11:case 15:nl(9,a)}}catch(S){nt(a,a.return,S)}if(a===o){ce=null;break e}var M=a.sibling;if(M!==null){M.return=a.return,ce=M;break e}ce=a.return}}if(Ne=r,Bi(),Un&&typeof Un.onPostCommitFiberRoot=="function")try{Un.onPostCommitFiberRoot(Ya,n)}catch{}i=!0}return i}finally{Ve=t,pn.transition=e}}return!1}function Fd(n,e,t){e=ds(t,e),e=Vm(n,e,1),n=Li(n,e,1),e=Nt(),n!==null&&(vo(n,1,e),Ht(n,e))}function nt(n,e,t){if(n.tag===3)Fd(n,n,t);else for(;e!==null;){if(e.tag===3){Fd(e,n,t);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Pi===null||!Pi.has(i))){n=ds(t,n),n=Gm(e,n,1),e=Li(e,n,1),n=Nt(),e!==null&&(vo(e,1,n),Ht(e,n));break}}e=e.return}}function s_(n,e,t){var i=n.pingCache;i!==null&&i.delete(e),e=Nt(),n.pingedLanes|=n.suspendedLanes&t,xt===n&&(Mt&t)===t&&(dt===4||dt===3&&(Mt&130023424)===Mt&&500>it()-pf?rr(n,0):hf|=t),Ht(n,e)}function lg(n,e){e===0&&((n.mode&1)===0?e=1:(e=Po,Po<<=1,(Po&130023424)===0&&(Po=4194304)));var t=Nt();n=oi(n,e),n!==null&&(vo(n,e,t),Ht(n,t))}function o_(n){var e=n.memoizedState,t=0;e!==null&&(t=e.retryLane),lg(n,t)}function a_(n,e){var t=0;switch(n.tag){case 13:var i=n.stateNode,r=n.memoizedState;r!==null&&(t=r.retryLane);break;case 19:i=n.stateNode;break;default:throw Error(J(314))}i!==null&&i.delete(e),lg(n,t)}var ug;ug=function(n,e,t){if(n!==null)if(n.memoizedProps!==e.pendingProps||Vt.current)Bt=!0;else{if((n.lanes&t)===0&&(e.flags&128)===0)return Bt=!1,Yv(n,e,t);Bt=(n.flags&131072)!==0}else Bt=!1,Ye&&(e.flags&1048576)!==0&&dm(e,za,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;va(n,e),n=e.pendingProps;var r=ls(e,Pt.current);is(e,t),r=af(null,e,i,n,r,t);var s=lf();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Gt(i)?(s=!0,Ia(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,tf(e),r.updater=el,e.stateNode=r,r._reactInternals=e,ic(e,i,n,t),e=oc(null,e,i,!0,s,t)):(e.tag=0,Ye&&s&&Yc(e),It(null,e,r,t),e=e.child),e;case 16:i=e.elementType;e:{switch(va(n,e),n=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=u_(i),n=En(i,n),r){case 0:e=sc(null,e,i,n,t);break e;case 1:e=Cd(null,e,i,n,t);break e;case 11:e=Ed(null,e,i,n,t);break e;case 14:e=Td(null,e,i,En(i.type,n),t);break e}throw Error(J(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:En(i,r),sc(n,e,i,r,t);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:En(i,r),Cd(n,e,i,r,t);case 3:e:{if(Xm(e),n===null)throw Error(J(387));i=e.pendingProps,s=e.memoizedState,r=s.element,gm(n,e),Oa(e,i,null,t);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=ds(Error(J(423)),e),e=bd(n,e,i,t,r);break e}else if(i!==r){r=ds(Error(J(424)),e),e=bd(n,e,i,t,r);break e}else for(Zt=Ai(e.stateNode.containerInfo.firstChild),Kt=e,Ye=!0,Cn=null,t=ym(e,null,i,t),e.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(us(),i===r){e=ai(n,e,t);break e}It(n,e,i,t)}e=e.child}return e;case 5:return Sm(e),n===null&&ec(e),i=e.type,r=e.pendingProps,s=n!==null?n.memoizedProps:null,o=r.children,$u(i,r)?o=null:s!==null&&$u(i,s)&&(e.flags|=32),jm(n,e),It(n,e,o,t),e.child;case 6:return n===null&&ec(e),null;case 13:return qm(n,e,t);case 4:return nf(e,e.stateNode.containerInfo),i=e.pendingProps,n===null?e.child=cs(e,null,i,t):It(n,e,i,t),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:En(i,r),Ed(n,e,i,r,t);case 7:return It(n,e,e.pendingProps,t),e.child;case 8:return It(n,e,e.pendingProps.children,t),e.child;case 12:return It(n,e,e.pendingProps.children,t),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,He(Fa,i._currentValue),i._currentValue=o,s!==null)if(Rn(s.value,o)){if(s.children===r.children&&!Vt.current){e=ai(n,e,t);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=ni(-1,t&-t),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}s.lanes|=t,l=s.alternate,l!==null&&(l.lanes|=t),tc(s.return,t,e),a.lanes|=t;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(J(341));o.lanes|=t,a=o.alternate,a!==null&&(a.lanes|=t),tc(o,t,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}It(n,e,r.children,t),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,is(e,t),r=gn(r),i=i(r),e.flags|=1,It(n,e,i,t),e.child;case 14:return i=e.type,r=En(i,e.pendingProps),r=En(i.type,r),Td(n,e,i,r,t);case 15:return Hm(n,e,e.type,e.pendingProps,t);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:En(i,r),va(n,e),e.tag=1,Gt(i)?(n=!0,Ia(e)):n=!1,is(e,t),_m(e,i,r),ic(e,i,r,t),oc(null,e,i,!0,n,t);case 19:return Ym(n,e,t);case 22:return Wm(n,e,t)}throw Error(J(156,e.tag))};function cg(n,e){return Fp(n,e)}function l_(n,e,t,i){this.tag=n,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function dn(n,e,t,i){return new l_(n,e,t,i)}function _f(n){return n=n.prototype,!(!n||!n.isReactComponent)}function u_(n){if(typeof n=="function")return _f(n)?1:0;if(n!=null){if(n=n.$$typeof,n===Fc)return 11;if(n===kc)return 14}return 2}function Ri(n,e){var t=n.alternate;return t===null?(t=dn(n.tag,e,n.key,n.mode),t.elementType=n.elementType,t.type=n.type,t.stateNode=n.stateNode,t.alternate=n,n.alternate=t):(t.pendingProps=e,t.type=n.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=n.flags&14680064,t.childLanes=n.childLanes,t.lanes=n.lanes,t.child=n.child,t.memoizedProps=n.memoizedProps,t.memoizedState=n.memoizedState,t.updateQueue=n.updateQueue,e=n.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},t.sibling=n.sibling,t.index=n.index,t.ref=n.ref,t}function ya(n,e,t,i,r,s){var o=2;if(i=n,typeof n=="function")_f(n)&&(o=1);else if(typeof n=="string")o=5;else e:switch(n){case Vr:return sr(t.children,r,s,e);case zc:o=8,r|=8;break;case bu:return n=dn(12,t,e,r|2),n.elementType=bu,n.lanes=s,n;case Au:return n=dn(13,t,e,r),n.elementType=Au,n.lanes=s,n;case Lu:return n=dn(19,t,e,r),n.elementType=Lu,n.lanes=s,n;case xp:return rl(t,r,s,e);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case vp:o=10;break e;case _p:o=9;break e;case Fc:o=11;break e;case kc:o=14;break e;case xi:o=16,i=null;break e}throw Error(J(130,n==null?n:typeof n,""))}return e=dn(o,t,e,r),e.elementType=n,e.type=i,e.lanes=s,e}function sr(n,e,t,i){return n=dn(7,n,i,e),n.lanes=t,n}function rl(n,e,t,i){return n=dn(22,n,i,e),n.elementType=xp,n.lanes=t,n.stateNode={isHidden:!1},n}function Wl(n,e,t){return n=dn(6,n,null,e),n.lanes=t,n}function jl(n,e,t){return e=dn(4,n.children!==null?n.children:[],n.key,e),e.lanes=t,e.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},e}function c_(n,e,t,i,r){this.tag=e,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Tl(0),this.expirationTimes=Tl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Tl(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function xf(n,e,t,i,r,s,o,a,l){return n=new c_(n,e,t,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=dn(3,null,null,e),n.current=s,s.stateNode=n,s.memoizedState={element:i,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},tf(s),n}function f_(n,e,t){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Br,key:i==null?null:""+i,children:n,containerInfo:e,implementation:t}}function fg(n){if(!n)return Fi;n=n._reactInternals;e:{if(vr(n)!==n||n.tag!==1)throw Error(J(170));var e=n;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Gt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(J(171))}if(n.tag===1){var t=n.type;if(Gt(t))return cm(n,t,e)}return e}function dg(n,e,t,i,r,s,o,a,l){return n=xf(t,i,!0,n,r,s,o,a,l),n.context=fg(null),t=n.current,i=Nt(),r=Di(t),s=ni(i,r),s.callback=e!=null?e:null,Li(t,s,r),n.current.lanes=r,vo(n,r,i),Ht(n,i),n}function sl(n,e,t,i){var r=e.current,s=Nt(),o=Di(r);return t=fg(t),e.context===null?e.context=t:e.pendingContext=t,e=ni(s,o),e.payload={element:n},i=i===void 0?null:i,i!==null&&(e.callback=i),n=Li(r,e,o),n!==null&&(Pn(n,r,o,s),pa(n,r,o)),o}function Xa(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function kd(n,e){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var t=n.retryLane;n.retryLane=t!==0&&t<e?t:e}}function yf(n,e){kd(n,e),(n=n.alternate)&&kd(n,e)}function d_(){return null}var hg=typeof reportError=="function"?reportError:function(n){console.error(n)};function Sf(n){this._internalRoot=n}ol.prototype.render=Sf.prototype.render=function(n){var e=this._internalRoot;if(e===null)throw Error(J(409));sl(n,e,null,null)};ol.prototype.unmount=Sf.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var e=n.containerInfo;dr(function(){sl(null,n,null,null)}),e[si]=null}};function ol(n){this._internalRoot=n}ol.prototype.unstable_scheduleHydration=function(n){if(n){var e=Hp();n={blockedOn:null,target:n,priority:e};for(var t=0;t<Si.length&&e!==0&&e<Si[t].priority;t++);Si.splice(t,0,n),t===0&&jp(n)}};function Mf(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function al(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function Od(){}function h_(n,e,t,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var u=Xa(o);s.call(u)}}var o=dg(e,i,n,0,null,!1,!1,"",Od);return n._reactRootContainer=o,n[si]=o.current,so(n.nodeType===8?n.parentNode:n),dr(),o}for(;r=n.lastChild;)n.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var u=Xa(l);a.call(u)}}var l=xf(n,0,!1,null,null,!1,!1,"",Od);return n._reactRootContainer=l,n[si]=l.current,so(n.nodeType===8?n.parentNode:n),dr(function(){sl(e,l,t,i)}),l}function ll(n,e,t,i,r){var s=t._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=Xa(o);a.call(l)}}sl(e,o,n,r)}else o=h_(t,e,n,r,i);return Xa(o)}Vp=function(n){switch(n.tag){case 3:var e=n.stateNode;if(e.current.memoizedState.isDehydrated){var t=Os(e.pendingLanes);t!==0&&(Bc(e,t|1),Ht(e,it()),(Ne&6)===0&&(hs=it()+500,Bi()))}break;case 13:dr(function(){var i=oi(n,1);if(i!==null){var r=Nt();Pn(i,n,1,r)}}),yf(n,1)}};Vc=function(n){if(n.tag===13){var e=oi(n,134217728);if(e!==null){var t=Nt();Pn(e,n,134217728,t)}yf(n,134217728)}};Gp=function(n){if(n.tag===13){var e=Di(n),t=oi(n,e);if(t!==null){var i=Nt();Pn(t,n,e,i)}yf(n,e)}};Hp=function(){return Ve};Wp=function(n,e){var t=Ve;try{return Ve=n,e()}finally{Ve=t}};Uu=function(n,e,t){switch(e){case"input":if(Ru(n,t),e=t.name,t.type==="radio"&&e!=null){for(t=n;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<t.length;e++){var i=t[e];if(i!==n&&i.form===n.form){var r=Qa(i);if(!r)throw Error(J(90));Sp(i),Ru(i,r)}}}break;case"textarea":wp(n,t);break;case"select":e=t.value,e!=null&&Jr(n,!!t.multiple,e,!1)}};Pp=mf;Dp=dr;var p_={usingClientEntryPoint:!1,Events:[xo,jr,Qa,Ap,Lp,mf]},Ds={findFiberByHostInstance:Qi,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},m_={bundleType:Ds.bundleType,version:Ds.version,rendererPackageName:Ds.rendererPackageName,rendererConfig:Ds.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:li.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=Np(n),n===null?null:n.stateNode},findFiberByHostInstance:Ds.findFiberByHostInstance||d_,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Vo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Vo.isDisabled&&Vo.supportsFiber)try{Ya=Vo.inject(m_),Un=Vo}catch{}}en.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=p_;en.createPortal=function(n,e){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Mf(e))throw Error(J(200));return f_(n,e,null,t)};en.createRoot=function(n,e){if(!Mf(n))throw Error(J(299));var t=!1,i="",r=hg;return e!=null&&(e.unstable_strictMode===!0&&(t=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=xf(n,1,!1,null,null,t,!1,i,r),n[si]=e.current,so(n.nodeType===8?n.parentNode:n),new Sf(e)};en.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var e=n._reactInternals;if(e===void 0)throw typeof n.render=="function"?Error(J(188)):(n=Object.keys(n).join(","),Error(J(268,n)));return n=Np(e),n=n===null?null:n.stateNode,n};en.flushSync=function(n){return dr(n)};en.hydrate=function(n,e,t){if(!al(e))throw Error(J(200));return ll(null,n,e,!0,t)};en.hydrateRoot=function(n,e,t){if(!Mf(n))throw Error(J(405));var i=t!=null&&t.hydratedSources||null,r=!1,s="",o=hg;if(t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(s=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),e=dg(e,null,n,1,t!=null?t:null,r,!1,s,o),n[si]=e.current,so(n),i)for(n=0;n<i.length;n++)t=i[n],r=t._getVersion,r=r(t._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[t,r]:e.mutableSourceEagerHydrationData.push(t,r);return new ol(e)};en.render=function(n,e,t){if(!al(e))throw Error(J(200));return ll(null,n,e,!1,t)};en.unmountComponentAtNode=function(n){if(!al(n))throw Error(J(40));return n._reactRootContainer?(dr(function(){ll(null,null,n,!1,function(){n._reactRootContainer=null,n[si]=null})}),!0):!1};en.unstable_batchedUpdates=mf;en.unstable_renderSubtreeIntoContainer=function(n,e,t,i){if(!al(t))throw Error(J(200));if(n==null||n._reactInternals===void 0)throw Error(J(38));return ll(n,e,t,!1,i)};en.version="18.2.0-next-9e3b772b8-20220608";(function(n){function e(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(t){console.error(t)}}e(),n.exports=en})(dp);var Ud=dp.exports;Tu.createRoot=Ud.createRoot,Tu.hydrateRoot=Ud.hydrateRoot;function g_(){const n=["a","b","c","d","e","f","0","1","2","3","4","5","6","7","8","9"];let e=[];for(let t=0;t<36;t++)t===8||t===13||t===18||t===23?e[t]="-":e[t]=n[Math.ceil(Math.random()*n.length-1)];return e.join("")}var Bd=g_;/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const wf="146",wr={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Er={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},v_=0,Vd=1,__=2,pg=1,x_=2,Bs=3,ps=0,mn=1,ti=2,Ii=0,ss=1,Gd=2,Hd=3,Wd=4,y_=5,Ur=100,S_=101,M_=102,jd=103,Xd=104,w_=200,E_=201,T_=202,C_=203,mg=204,gg=205,b_=206,A_=207,L_=208,P_=209,D_=210,R_=0,I_=1,N_=2,_c=3,z_=4,F_=5,k_=6,O_=7,vg=0,U_=1,B_=2,ii=0,V_=1,G_=2,H_=3,W_=4,j_=5,_g=300,ms=301,gs=302,xc=303,yc=304,ul=306,Sc=1e3,bn=1001,Mc=1002,Ot=1003,qd=1004,Yd=1005,cn=1006,X_=1007,cl=1008,hr=1009,q_=1010,Y_=1011,xg=1012,$_=1013,tr=1014,nr=1015,mo=1016,Z_=1017,K_=1018,os=1020,Q_=1021,J_=1022,An=1023,ex=1024,tx=1025,or=1026,vs=1027,nx=1028,ix=1029,rx=1030,sx=1031,ox=1033,Xl=33776,ql=33777,Yl=33778,$l=33779,$d=35840,Zd=35841,Kd=35842,Qd=35843,ax=36196,Jd=37492,eh=37496,th=37808,nh=37809,ih=37810,rh=37811,sh=37812,oh=37813,ah=37814,lh=37815,uh=37816,ch=37817,fh=37818,dh=37819,hh=37820,ph=37821,mh=36492,pr=3e3,tt=3001,lx=3200,ux=3201,cx=0,fx=1,Zn="srgb",ir="srgb-linear",Zl=7680,dx=519,gh=35044,vh="300 es",wc=1035;class _r{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const At=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Kl=Math.PI/180,_h=180/Math.PI;function So(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(At[n&255]+At[n>>8&255]+At[n>>16&255]+At[n>>24&255]+"-"+At[e&255]+At[e>>8&255]+"-"+At[e>>16&15|64]+At[e>>24&255]+"-"+At[t&63|128]+At[t>>8&255]+"-"+At[t>>16&255]+At[t>>24&255]+At[i&255]+At[i>>8&255]+At[i>>16&255]+At[i>>24&255]).toLowerCase()}function Ut(n,e,t){return Math.max(e,Math.min(t,n))}function hx(n,e){return(n%e+e)%e}function Ql(n,e,t){return(1-t)*n+t*e}function xh(n){return(n&n-1)===0&&n!==0}function Ec(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Go(n,e){switch(e.constructor){case Float32Array:return n;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Xt(n,e){switch(e.constructor){case Float32Array:return n;case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class we{constructor(e=0,t=0){we.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class hn{constructor(){hn.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,t,i,r,s,o,a,l,u){const c=this.elements;return c[0]=e,c[1]=r,c[2]=a,c[3]=t,c[4]=s,c[5]=l,c[6]=i,c[7]=o,c[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],l=i[6],u=i[1],c=i[4],d=i[7],f=i[2],g=i[5],x=i[8],p=r[0],h=r[3],m=r[6],v=r[1],_=r[4],M=r[7],S=r[2],C=r[5],L=r[8];return s[0]=o*p+a*v+l*S,s[3]=o*h+a*_+l*C,s[6]=o*m+a*M+l*L,s[1]=u*p+c*v+d*S,s[4]=u*h+c*_+d*C,s[7]=u*m+c*M+d*L,s[2]=f*p+g*v+x*S,s[5]=f*h+g*_+x*C,s[8]=f*m+g*M+x*L,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8];return t*o*c-t*a*u-i*s*c+i*a*l+r*s*u-r*o*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8],d=c*o-a*u,f=a*l-c*s,g=u*s-o*l,x=t*d+i*f+r*g;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);const p=1/x;return e[0]=d*p,e[1]=(r*u-c*i)*p,e[2]=(a*i-r*o)*p,e[3]=f*p,e[4]=(c*t-r*l)*p,e[5]=(r*s-a*t)*p,e[6]=g*p,e[7]=(i*l-u*t)*p,e[8]=(o*t-i*s)*p,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){const l=Math.cos(s),u=Math.sin(s);return this.set(i*l,i*u,-i*(l*o+u*a)+o+e,-r*u,r*l,-r*(-u*o+l*a)+a+t,0,0,1),this}scale(e,t){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=t,i[4]*=t,i[7]*=t,this}rotate(e){const t=Math.cos(e),i=Math.sin(e),r=this.elements,s=r[0],o=r[3],a=r[6],l=r[1],u=r[4],c=r[7];return r[0]=t*s+i*l,r[3]=t*o+i*u,r[6]=t*a+i*c,r[1]=-i*s+t*l,r[4]=-i*o+t*u,r[7]=-i*a+t*c,this}translate(e,t){const i=this.elements;return i[0]+=e*i[2],i[3]+=e*i[5],i[6]+=e*i[8],i[1]+=t*i[2],i[4]+=t*i[5],i[7]+=t*i[8],this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}function yg(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function qa(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function ar(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Sa(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}const Jl={[Zn]:{[ir]:ar},[ir]:{[Zn]:Sa}},yn={legacyMode:!0,get workingColorSpace(){return ir},set workingColorSpace(n){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(n,e,t){if(this.legacyMode||e===t||!e||!t)return n;if(Jl[e]&&Jl[e][t]!==void 0){const i=Jl[e][t];return n.r=i(n.r),n.g=i(n.g),n.b=i(n.b),n}throw new Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(n,e){return this.convert(n,this.workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this.workingColorSpace)}},Sg={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ct={r:0,g:0,b:0},Sn={h:0,s:0,l:0},Ho={h:0,s:0,l:0};function eu(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}function Wo(n,e){return e.r=n.r,e.g=n.g,e.b=n.b,e}class $e{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&i===void 0?this.set(e):this.setRGB(e,t,i)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Zn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,yn.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=ir){return this.r=e,this.g=t,this.b=i,yn.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=ir){if(e=hx(e,1),t=Ut(t,0,1),i=Ut(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=eu(o,s,e+1/3),this.g=eu(o,s,e),this.b=eu(o,s,e-1/3)}return yn.toWorkingColorSpace(this,r),this}setStyle(e,t=Zn){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(255,parseInt(s[1],10))/255,this.g=Math.min(255,parseInt(s[2],10))/255,this.b=Math.min(255,parseInt(s[3],10))/255,yn.toWorkingColorSpace(this,t),i(s[4]),this;if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(100,parseInt(s[1],10))/100,this.g=Math.min(100,parseInt(s[2],10))/100,this.b=Math.min(100,parseInt(s[3],10))/100,yn.toWorkingColorSpace(this,t),i(s[4]),this;break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)){const l=parseFloat(s[1])/360,u=parseFloat(s[2])/100,c=parseFloat(s[3])/100;return i(s[4]),this.setHSL(l,u,c,t)}break}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.r=parseInt(s.charAt(0)+s.charAt(0),16)/255,this.g=parseInt(s.charAt(1)+s.charAt(1),16)/255,this.b=parseInt(s.charAt(2)+s.charAt(2),16)/255,yn.toWorkingColorSpace(this,t),this;if(o===6)return this.r=parseInt(s.charAt(0)+s.charAt(1),16)/255,this.g=parseInt(s.charAt(2)+s.charAt(3),16)/255,this.b=parseInt(s.charAt(4)+s.charAt(5),16)/255,yn.toWorkingColorSpace(this,t),this}return e&&e.length>0?this.setColorName(e,t):this}setColorName(e,t=Zn){const i=Sg[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ar(e.r),this.g=ar(e.g),this.b=ar(e.b),this}copyLinearToSRGB(e){return this.r=Sa(e.r),this.g=Sa(e.g),this.b=Sa(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Zn){return yn.fromWorkingColorSpace(Wo(this,ct),e),Ut(ct.r*255,0,255)<<16^Ut(ct.g*255,0,255)<<8^Ut(ct.b*255,0,255)<<0}getHexString(e=Zn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ir){yn.fromWorkingColorSpace(Wo(this,ct),t);const i=ct.r,r=ct.g,s=ct.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,u;const c=(a+o)/2;if(a===o)l=0,u=0;else{const d=o-a;switch(u=c<=.5?d/(o+a):d/(2-o-a),o){case i:l=(r-s)/d+(r<s?6:0);break;case r:l=(s-i)/d+2;break;case s:l=(i-r)/d+4;break}l/=6}return e.h=l,e.s=u,e.l=c,e}getRGB(e,t=ir){return yn.fromWorkingColorSpace(Wo(this,ct),t),e.r=ct.r,e.g=ct.g,e.b=ct.b,e}getStyle(e=Zn){return yn.fromWorkingColorSpace(Wo(this,ct),e),e!==Zn?`color(${e} ${ct.r} ${ct.g} ${ct.b})`:`rgb(${ct.r*255|0},${ct.g*255|0},${ct.b*255|0})`}offsetHSL(e,t,i){return this.getHSL(Sn),Sn.h+=e,Sn.s+=t,Sn.l+=i,this.setHSL(Sn.h,Sn.s,Sn.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Sn),e.getHSL(Ho);const i=Ql(Sn.h,Ho.h,t),r=Ql(Sn.s,Ho.s,t),s=Ql(Sn.l,Ho.l,t);return this.setHSL(i,r,s),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}$e.NAMES=Sg;let Tr;class Mg{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Tr===void 0&&(Tr=qa("canvas")),Tr.width=e.width,Tr.height=e.height;const i=Tr.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Tr}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=qa("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=ar(s[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(ar(t[i]/255)*255):t[i]=ar(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class wg{constructor(e=null){this.isSource=!0,this.uuid=So(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(tu(r[o].image)):s.push(tu(r[o]))}else s=tu(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function tu(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Mg.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let px=0;class _n extends _r{constructor(e=_n.DEFAULT_IMAGE,t=_n.DEFAULT_MAPPING,i=bn,r=bn,s=cn,o=cl,a=An,l=hr,u=1,c=pr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:px++}),this.uuid=So(),this.name="",this.source=new wg(e),this.mipmaps=[],this.mapping=t,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=u,this.format=a,this.internalFormat=null,this.type=l,this.offset=new we(0,0),this.repeat=new we(1,1),this.center=new we(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new hn,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=c,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return JSON.stringify(this.userData)!=="{}"&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==_g)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Sc:e.x=e.x-Math.floor(e.x);break;case bn:e.x=e.x<0?0:1;break;case Mc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Sc:e.y=e.y-Math.floor(e.y);break;case bn:e.y=e.y<0?0:1;break;case Mc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}_n.DEFAULT_IMAGE=null;_n.DEFAULT_MAPPING=_g;class St{constructor(e=0,t=0,i=0,r=1){St.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,u=l[0],c=l[4],d=l[8],f=l[1],g=l[5],x=l[9],p=l[2],h=l[6],m=l[10];if(Math.abs(c-f)<.01&&Math.abs(d-p)<.01&&Math.abs(x-h)<.01){if(Math.abs(c+f)<.1&&Math.abs(d+p)<.1&&Math.abs(x+h)<.1&&Math.abs(u+g+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const _=(u+1)/2,M=(g+1)/2,S=(m+1)/2,C=(c+f)/4,L=(d+p)/4,y=(x+h)/4;return _>M&&_>S?_<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(_),r=C/i,s=L/i):M>S?M<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(M),i=C/r,s=y/r):S<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(S),i=L/s,r=y/s),this.set(i,r,s,t),this}let v=Math.sqrt((h-x)*(h-x)+(d-p)*(d-p)+(f-c)*(f-c));return Math.abs(v)<.001&&(v=1),this.x=(h-x)/v,this.y=(d-p)/v,this.z=(f-c)/v,this.w=Math.acos((u+g+m-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class ki extends _r{constructor(e=1,t=1,i={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new St(0,0,e,t),this.scissorTest=!1,this.viewport=new St(0,0,e,t);const r={width:e,height:t,depth:1};this.texture=new _n(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.internalFormat=i.internalFormat!==void 0?i.internalFormat:null,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:cn,this.depthBuffer=i.depthBuffer!==void 0?i.depthBuffer:!0,this.stencilBuffer=i.stencilBuffer!==void 0?i.stencilBuffer:!1,this.depthTexture=i.depthTexture!==void 0?i.depthTexture:null,this.samples=i.samples!==void 0?i.samples:0}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new wg(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Eg extends _n{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Ot,this.minFilter=Ot,this.wrapR=bn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class mx extends _n{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Ot,this.minFilter=Ot,this.wrapR=bn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class mr{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,o,a){let l=i[r+0],u=i[r+1],c=i[r+2],d=i[r+3];const f=s[o+0],g=s[o+1],x=s[o+2],p=s[o+3];if(a===0){e[t+0]=l,e[t+1]=u,e[t+2]=c,e[t+3]=d;return}if(a===1){e[t+0]=f,e[t+1]=g,e[t+2]=x,e[t+3]=p;return}if(d!==p||l!==f||u!==g||c!==x){let h=1-a;const m=l*f+u*g+c*x+d*p,v=m>=0?1:-1,_=1-m*m;if(_>Number.EPSILON){const S=Math.sqrt(_),C=Math.atan2(S,m*v);h=Math.sin(h*C)/S,a=Math.sin(a*C)/S}const M=a*v;if(l=l*h+f*M,u=u*h+g*M,c=c*h+x*M,d=d*h+p*M,h===1-a){const S=1/Math.sqrt(l*l+u*u+c*c+d*d);l*=S,u*=S,c*=S,d*=S}}e[t]=l,e[t+1]=u,e[t+2]=c,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,r,s,o){const a=i[r],l=i[r+1],u=i[r+2],c=i[r+3],d=s[o],f=s[o+1],g=s[o+2],x=s[o+3];return e[t]=a*x+c*d+l*g-u*f,e[t+1]=l*x+c*f+u*d-a*g,e[t+2]=u*x+c*g+a*f-l*d,e[t+3]=c*x-a*d-l*f-u*g,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,u=a(i/2),c=a(r/2),d=a(s/2),f=l(i/2),g=l(r/2),x=l(s/2);switch(o){case"XYZ":this._x=f*c*d+u*g*x,this._y=u*g*d-f*c*x,this._z=u*c*x+f*g*d,this._w=u*c*d-f*g*x;break;case"YXZ":this._x=f*c*d+u*g*x,this._y=u*g*d-f*c*x,this._z=u*c*x-f*g*d,this._w=u*c*d+f*g*x;break;case"ZXY":this._x=f*c*d-u*g*x,this._y=u*g*d+f*c*x,this._z=u*c*x+f*g*d,this._w=u*c*d-f*g*x;break;case"ZYX":this._x=f*c*d-u*g*x,this._y=u*g*d+f*c*x,this._z=u*c*x-f*g*d,this._w=u*c*d+f*g*x;break;case"YZX":this._x=f*c*d+u*g*x,this._y=u*g*d+f*c*x,this._z=u*c*x-f*g*d,this._w=u*c*d-f*g*x;break;case"XZY":this._x=f*c*d-u*g*x,this._y=u*g*d-f*c*x,this._z=u*c*x+f*g*d,this._w=u*c*d+f*g*x;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],u=t[2],c=t[6],d=t[10],f=i+a+d;if(f>0){const g=.5/Math.sqrt(f+1);this._w=.25/g,this._x=(c-l)*g,this._y=(s-u)*g,this._z=(o-r)*g}else if(i>a&&i>d){const g=2*Math.sqrt(1+i-a-d);this._w=(c-l)/g,this._x=.25*g,this._y=(r+o)/g,this._z=(s+u)/g}else if(a>d){const g=2*Math.sqrt(1+a-i-d);this._w=(s-u)/g,this._x=(r+o)/g,this._y=.25*g,this._z=(l+c)/g}else{const g=2*Math.sqrt(1+d-i-a);this._w=(o-r)/g,this._x=(s+u)/g,this._y=(l+c)/g,this._z=.25*g}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ut(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,u=t._z,c=t._w;return this._x=i*c+o*a+r*u-s*l,this._y=r*c+o*l+s*a-i*u,this._z=s*c+o*u+i*l-r*a,this._w=o*c-i*a-r*l-s*u,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const g=1-t;return this._w=g*o+t*this._w,this._x=g*i+t*this._x,this._y=g*r+t*this._y,this._z=g*s+t*this._z,this.normalize(),this._onChangeCallback(),this}const u=Math.sqrt(l),c=Math.atan2(u,a),d=Math.sin((1-t)*c)/u,f=Math.sin(t*c)/u;return this._w=o*d+this._w*f,this._x=i*d+this._x*f,this._y=r*d+this._y*f,this._z=s*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(r),i*Math.sin(s),i*Math.cos(s),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class O{constructor(e=0,t=0,i=0){O.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(yh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(yh.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,u=l*t+o*r-a*i,c=l*i+a*t-s*r,d=l*r+s*i-o*t,f=-s*t-o*i-a*r;return this.x=u*l+f*-s+c*-a-d*-o,this.y=c*l+f*-o+d*-s-u*-a,this.z=d*l+f*-a+u*-o-c*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return nu.copy(this).projectOnVector(e),this.sub(nu)}reflect(e){return this.sub(nu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Ut(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const nu=new O,yh=new mr;class Mo{constructor(e=new O(1/0,1/0,1/0),t=new O(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=1/0,i=1/0,r=1/0,s=-1/0,o=-1/0,a=-1/0;for(let l=0,u=e.length;l<u;l+=3){const c=e[l],d=e[l+1],f=e[l+2];c<t&&(t=c),d<i&&(i=d),f<r&&(r=f),c>s&&(s=c),d>o&&(o=d),f>a&&(a=f)}return this.min.set(t,i,r),this.max.set(s,o,a),this}setFromBufferAttribute(e){let t=1/0,i=1/0,r=1/0,s=-1/0,o=-1/0,a=-1/0;for(let l=0,u=e.count;l<u;l++){const c=e.getX(l),d=e.getY(l),f=e.getZ(l);c<t&&(t=c),d<i&&(i=d),f<r&&(r=f),c>s&&(s=c),d>o&&(o=d),f>a&&(a=f)}return this.min.set(t,i,r),this.max.set(s,o,a),this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Wi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0)if(t&&i.attributes!=null&&i.attributes.position!==void 0){const s=i.attributes.position;for(let o=0,a=s.count;o<a;o++)Wi.fromBufferAttribute(s,o).applyMatrix4(e.matrixWorld),this.expandByPoint(Wi)}else i.boundingBox===null&&i.computeBoundingBox(),iu.copy(i.boundingBox),iu.applyMatrix4(e.matrixWorld),this.union(iu);const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Wi),Wi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Rs),jo.subVectors(this.max,Rs),Cr.subVectors(e.a,Rs),br.subVectors(e.b,Rs),Ar.subVectors(e.c,Rs),di.subVectors(br,Cr),hi.subVectors(Ar,br),ji.subVectors(Cr,Ar);let t=[0,-di.z,di.y,0,-hi.z,hi.y,0,-ji.z,ji.y,di.z,0,-di.x,hi.z,0,-hi.x,ji.z,0,-ji.x,-di.y,di.x,0,-hi.y,hi.x,0,-ji.y,ji.x,0];return!ru(t,Cr,br,Ar,jo)||(t=[1,0,0,0,1,0,0,0,1],!ru(t,Cr,br,Ar,jo))?!1:(Xo.crossVectors(di,hi),t=[Xo.x,Xo.y,Xo.z],ru(t,Cr,br,Ar,jo))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return Wi.copy(e).clamp(this.min,this.max).sub(e).length()}getBoundingSphere(e){return this.getCenter(e.center),e.radius=this.getSize(Wi).length()*.5,e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Wn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Wn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Wn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Wn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Wn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Wn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Wn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Wn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Wn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Wn=[new O,new O,new O,new O,new O,new O,new O,new O],Wi=new O,iu=new Mo,Cr=new O,br=new O,Ar=new O,di=new O,hi=new O,ji=new O,Rs=new O,jo=new O,Xo=new O,Xi=new O;function ru(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){Xi.fromArray(n,s);const a=r.x*Math.abs(Xi.x)+r.y*Math.abs(Xi.y)+r.z*Math.abs(Xi.z),l=e.dot(Xi),u=t.dot(Xi),c=i.dot(Xi);if(Math.max(-Math.max(l,u,c),Math.min(l,u,c))>a)return!1}return!0}const gx=new Mo,Is=new O,su=new O;class Ef{constructor(e=new O,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):gx.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Is.subVectors(e,this.center);const t=Is.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(Is,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(su.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Is.copy(e.center).add(su)),this.expandByPoint(Is.copy(e.center).sub(su))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const jn=new O,ou=new O,qo=new O,pi=new O,au=new O,Yo=new O,lu=new O;class Tg{constructor(e=new O,t=new O(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.direction).multiplyScalar(e).add(this.origin)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,jn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.direction).multiplyScalar(i).add(this.origin)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=jn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(jn.copy(this.direction).multiplyScalar(t).add(this.origin),jn.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){ou.copy(e).add(t).multiplyScalar(.5),qo.copy(t).sub(e).normalize(),pi.copy(this.origin).sub(ou);const s=e.distanceTo(t)*.5,o=-this.direction.dot(qo),a=pi.dot(this.direction),l=-pi.dot(qo),u=pi.lengthSq(),c=Math.abs(1-o*o);let d,f,g,x;if(c>0)if(d=o*l-a,f=o*a-l,x=s*c,d>=0)if(f>=-x)if(f<=x){const p=1/c;d*=p,f*=p,g=d*(d+o*f+2*a)+f*(o*d+f+2*l)+u}else f=s,d=Math.max(0,-(o*f+a)),g=-d*d+f*(f+2*l)+u;else f=-s,d=Math.max(0,-(o*f+a)),g=-d*d+f*(f+2*l)+u;else f<=-x?(d=Math.max(0,-(-o*s+a)),f=d>0?-s:Math.min(Math.max(-s,-l),s),g=-d*d+f*(f+2*l)+u):f<=x?(d=0,f=Math.min(Math.max(-s,-l),s),g=f*(f+2*l)+u):(d=Math.max(0,-(o*s+a)),f=d>0?s:Math.min(Math.max(-s,-l),s),g=-d*d+f*(f+2*l)+u);else f=o>0?-s:s,d=Math.max(0,-(o*f+a)),g=-d*d+f*(f+2*l)+u;return i&&i.copy(this.direction).multiplyScalar(d).add(this.origin),r&&r.copy(qo).multiplyScalar(f).add(ou),g}intersectSphere(e,t){jn.subVectors(e.center,this.origin);const i=jn.dot(this.direction),r=jn.dot(jn)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return a<0&&l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,a,l;const u=1/this.direction.x,c=1/this.direction.y,d=1/this.direction.z,f=this.origin;return u>=0?(i=(e.min.x-f.x)*u,r=(e.max.x-f.x)*u):(i=(e.max.x-f.x)*u,r=(e.min.x-f.x)*u),c>=0?(s=(e.min.y-f.y)*c,o=(e.max.y-f.y)*c):(s=(e.max.y-f.y)*c,o=(e.min.y-f.y)*c),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),d>=0?(a=(e.min.z-f.z)*d,l=(e.max.z-f.z)*d):(a=(e.max.z-f.z)*d,l=(e.min.z-f.z)*d),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,jn)!==null}intersectTriangle(e,t,i,r,s){au.subVectors(t,e),Yo.subVectors(i,e),lu.crossVectors(au,Yo);let o=this.direction.dot(lu),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;pi.subVectors(this.origin,e);const l=a*this.direction.dot(Yo.crossVectors(pi,Yo));if(l<0)return null;const u=a*this.direction.dot(au.cross(pi));if(u<0||l+u>o)return null;const c=-a*pi.dot(lu);return c<0?null:this.at(c/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class wt{constructor(){wt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,t,i,r,s,o,a,l,u,c,d,f,g,x,p,h){const m=this.elements;return m[0]=e,m[4]=t,m[8]=i,m[12]=r,m[1]=s,m[5]=o,m[9]=a,m[13]=l,m[2]=u,m[6]=c,m[10]=d,m[14]=f,m[3]=g,m[7]=x,m[11]=p,m[15]=h,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new wt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/Lr.setFromMatrixColumn(e,0).length(),s=1/Lr.setFromMatrixColumn(e,1).length(),o=1/Lr.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),u=Math.sin(r),c=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const f=o*c,g=o*d,x=a*c,p=a*d;t[0]=l*c,t[4]=-l*d,t[8]=u,t[1]=g+x*u,t[5]=f-p*u,t[9]=-a*l,t[2]=p-f*u,t[6]=x+g*u,t[10]=o*l}else if(e.order==="YXZ"){const f=l*c,g=l*d,x=u*c,p=u*d;t[0]=f+p*a,t[4]=x*a-g,t[8]=o*u,t[1]=o*d,t[5]=o*c,t[9]=-a,t[2]=g*a-x,t[6]=p+f*a,t[10]=o*l}else if(e.order==="ZXY"){const f=l*c,g=l*d,x=u*c,p=u*d;t[0]=f-p*a,t[4]=-o*d,t[8]=x+g*a,t[1]=g+x*a,t[5]=o*c,t[9]=p-f*a,t[2]=-o*u,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const f=o*c,g=o*d,x=a*c,p=a*d;t[0]=l*c,t[4]=x*u-g,t[8]=f*u+p,t[1]=l*d,t[5]=p*u+f,t[9]=g*u-x,t[2]=-u,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const f=o*l,g=o*u,x=a*l,p=a*u;t[0]=l*c,t[4]=p-f*d,t[8]=x*d+g,t[1]=d,t[5]=o*c,t[9]=-a*c,t[2]=-u*c,t[6]=g*d+x,t[10]=f-p*d}else if(e.order==="XZY"){const f=o*l,g=o*u,x=a*l,p=a*u;t[0]=l*c,t[4]=-d,t[8]=u*c,t[1]=f*d+p,t[5]=o*c,t[9]=g*d-x,t[2]=x*d-g,t[6]=a*c,t[10]=p*d+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(vx,e,_x)}lookAt(e,t,i){const r=this.elements;return qt.subVectors(e,t),qt.lengthSq()===0&&(qt.z=1),qt.normalize(),mi.crossVectors(i,qt),mi.lengthSq()===0&&(Math.abs(i.z)===1?qt.x+=1e-4:qt.z+=1e-4,qt.normalize(),mi.crossVectors(i,qt)),mi.normalize(),$o.crossVectors(qt,mi),r[0]=mi.x,r[4]=$o.x,r[8]=qt.x,r[1]=mi.y,r[5]=$o.y,r[9]=qt.y,r[2]=mi.z,r[6]=$o.z,r[10]=qt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],l=i[8],u=i[12],c=i[1],d=i[5],f=i[9],g=i[13],x=i[2],p=i[6],h=i[10],m=i[14],v=i[3],_=i[7],M=i[11],S=i[15],C=r[0],L=r[4],y=r[8],b=r[12],R=r[1],$=r[5],re=r[9],B=r[13],k=r[2],X=r[6],Z=r[10],Q=r[14],I=r[3],P=r[7],N=r[11],Y=r[15];return s[0]=o*C+a*R+l*k+u*I,s[4]=o*L+a*$+l*X+u*P,s[8]=o*y+a*re+l*Z+u*N,s[12]=o*b+a*B+l*Q+u*Y,s[1]=c*C+d*R+f*k+g*I,s[5]=c*L+d*$+f*X+g*P,s[9]=c*y+d*re+f*Z+g*N,s[13]=c*b+d*B+f*Q+g*Y,s[2]=x*C+p*R+h*k+m*I,s[6]=x*L+p*$+h*X+m*P,s[10]=x*y+p*re+h*Z+m*N,s[14]=x*b+p*B+h*Q+m*Y,s[3]=v*C+_*R+M*k+S*I,s[7]=v*L+_*$+M*X+S*P,s[11]=v*y+_*re+M*Z+S*N,s[15]=v*b+_*B+M*Q+S*Y,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],u=e[13],c=e[2],d=e[6],f=e[10],g=e[14],x=e[3],p=e[7],h=e[11],m=e[15];return x*(+s*l*d-r*u*d-s*a*f+i*u*f+r*a*g-i*l*g)+p*(+t*l*g-t*u*f+s*o*f-r*o*g+r*u*c-s*l*c)+h*(+t*u*d-t*a*g-s*o*d+i*o*g+s*a*c-i*u*c)+m*(-r*a*c-t*l*d+t*a*f+r*o*d-i*o*f+i*l*c)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8],d=e[9],f=e[10],g=e[11],x=e[12],p=e[13],h=e[14],m=e[15],v=d*h*u-p*f*u+p*l*g-a*h*g-d*l*m+a*f*m,_=x*f*u-c*h*u-x*l*g+o*h*g+c*l*m-o*f*m,M=c*p*u-x*d*u+x*a*g-o*p*g-c*a*m+o*d*m,S=x*d*l-c*p*l-x*a*f+o*p*f+c*a*h-o*d*h,C=t*v+i*_+r*M+s*S;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const L=1/C;return e[0]=v*L,e[1]=(p*f*s-d*h*s-p*r*g+i*h*g+d*r*m-i*f*m)*L,e[2]=(a*h*s-p*l*s+p*r*u-i*h*u-a*r*m+i*l*m)*L,e[3]=(d*l*s-a*f*s-d*r*u+i*f*u+a*r*g-i*l*g)*L,e[4]=_*L,e[5]=(c*h*s-x*f*s+x*r*g-t*h*g-c*r*m+t*f*m)*L,e[6]=(x*l*s-o*h*s-x*r*u+t*h*u+o*r*m-t*l*m)*L,e[7]=(o*f*s-c*l*s+c*r*u-t*f*u-o*r*g+t*l*g)*L,e[8]=M*L,e[9]=(x*d*s-c*p*s-x*i*g+t*p*g+c*i*m-t*d*m)*L,e[10]=(o*p*s-x*a*s+x*i*u-t*p*u-o*i*m+t*a*m)*L,e[11]=(c*a*s-o*d*s-c*i*u+t*d*u+o*i*g-t*a*g)*L,e[12]=S*L,e[13]=(c*p*r-x*d*r+x*i*f-t*p*f-c*i*h+t*d*h)*L,e[14]=(x*a*r-o*p*r-x*i*l+t*p*l+o*i*h-t*a*h)*L,e[15]=(o*d*r-c*a*r+c*i*l-t*d*l-o*i*f+t*a*f)*L,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,l=e.z,u=s*o,c=s*a;return this.set(u*o+i,u*a-r*l,u*l+r*a,0,u*a+r*l,c*a+i,c*l-r*o,0,u*l-r*a,c*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,u=s+s,c=o+o,d=a+a,f=s*u,g=s*c,x=s*d,p=o*c,h=o*d,m=a*d,v=l*u,_=l*c,M=l*d,S=i.x,C=i.y,L=i.z;return r[0]=(1-(p+m))*S,r[1]=(g+M)*S,r[2]=(x-_)*S,r[3]=0,r[4]=(g-M)*C,r[5]=(1-(f+m))*C,r[6]=(h+v)*C,r[7]=0,r[8]=(x+_)*L,r[9]=(h-v)*L,r[10]=(1-(f+p))*L,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=Lr.set(r[0],r[1],r[2]).length();const o=Lr.set(r[4],r[5],r[6]).length(),a=Lr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Mn.copy(this);const u=1/s,c=1/o,d=1/a;return Mn.elements[0]*=u,Mn.elements[1]*=u,Mn.elements[2]*=u,Mn.elements[4]*=c,Mn.elements[5]*=c,Mn.elements[6]*=c,Mn.elements[8]*=d,Mn.elements[9]*=d,Mn.elements[10]*=d,t.setFromRotationMatrix(Mn),i.x=s,i.y=o,i.z=a,this}makePerspective(e,t,i,r,s,o){const a=this.elements,l=2*s/(t-e),u=2*s/(i-r),c=(t+e)/(t-e),d=(i+r)/(i-r),f=-(o+s)/(o-s),g=-2*o*s/(o-s);return a[0]=l,a[4]=0,a[8]=c,a[12]=0,a[1]=0,a[5]=u,a[9]=d,a[13]=0,a[2]=0,a[6]=0,a[10]=f,a[14]=g,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(e,t,i,r,s,o){const a=this.elements,l=1/(t-e),u=1/(i-r),c=1/(o-s),d=(t+e)*l,f=(i+r)*u,g=(o+s)*c;return a[0]=2*l,a[4]=0,a[8]=0,a[12]=-d,a[1]=0,a[5]=2*u,a[9]=0,a[13]=-f,a[2]=0,a[6]=0,a[10]=-2*c,a[14]=-g,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Lr=new O,Mn=new wt,vx=new O(0,0,0),_x=new O(1,1,1),mi=new O,$o=new O,qt=new O,Sh=new wt,Mh=new mr;class wo{constructor(e=0,t=0,i=0,r=wo.DefaultOrder){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],u=r[5],c=r[9],d=r[2],f=r[6],g=r[10];switch(t){case"XYZ":this._y=Math.asin(Ut(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-c,g),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,u),this._z=0);break;case"YXZ":this._x=Math.asin(-Ut(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(a,g),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(Ut(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,g),this._z=Math.atan2(-o,u)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Ut(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,g),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,u));break;case"YZX":this._z=Math.asin(Ut(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-c,u),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(a,g));break;case"XZY":this._z=Math.asin(-Ut(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,u),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-c,g),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Sh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Sh,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Mh.setFromEuler(this),this.setFromQuaternion(Mh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}toVector3(){console.error("THREE.Euler: .toVector3() has been removed. Use Vector3.setFromEuler() instead")}}wo.DefaultOrder="XYZ";wo.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];class Tf{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let xx=0;const wh=new O,Pr=new mr,Xn=new wt,Zo=new O,Ns=new O,yx=new O,Sx=new mr,Eh=new O(1,0,0),Th=new O(0,1,0),Ch=new O(0,0,1),Mx={type:"added"},bh={type:"removed"};class Qt extends _r{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:xx++}),this.uuid=So(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Qt.DefaultUp.clone();const e=new O,t=new wo,i=new mr,r=new O(1,1,1);function s(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new wt},normalMatrix:{value:new hn}}),this.matrix=new wt,this.matrixWorld=new wt,this.matrixAutoUpdate=Qt.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=Qt.DefaultMatrixWorldAutoUpdate,this.layers=new Tf,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Pr.setFromAxisAngle(e,t),this.quaternion.multiply(Pr),this}rotateOnWorldAxis(e,t){return Pr.setFromAxisAngle(e,t),this.quaternion.premultiply(Pr),this}rotateX(e){return this.rotateOnAxis(Eh,e)}rotateY(e){return this.rotateOnAxis(Th,e)}rotateZ(e){return this.rotateOnAxis(Ch,e)}translateOnAxis(e,t){return wh.copy(e).applyQuaternion(this.quaternion),this.position.add(wh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Eh,e)}translateY(e){return this.translateOnAxis(Th,e)}translateZ(e){return this.translateOnAxis(Ch,e)}localToWorld(e){return e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return e.applyMatrix4(Xn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Zo.copy(e):Zo.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Ns.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Xn.lookAt(Ns,Zo,this.up):Xn.lookAt(Zo,Ns,this.up),this.quaternion.setFromRotationMatrix(Xn),r&&(Xn.extractRotation(r.matrixWorld),Pr.setFromRotationMatrix(Xn),this.quaternion.premultiply(Pr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Mx)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(bh)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(bh)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),Xn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Xn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Xn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ns,e,yx),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ns,Sx,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++){const s=t[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++){const a=r[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),JSON.stringify(this.userData)!=="{}"&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let u=0,c=l.length;u<c;u++){const d=l[u];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,u=this.material.length;l<u;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),u=o(e.textures),c=o(e.images),d=o(e.shapes),f=o(e.skeletons),g=o(e.animations),x=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),u.length>0&&(i.textures=u),c.length>0&&(i.images=c),d.length>0&&(i.shapes=d),f.length>0&&(i.skeletons=f),g.length>0&&(i.animations=g),x.length>0&&(i.nodes=x)}return i.object=r,i;function o(a){const l=[];for(const u in a){const c=a[u];delete c.metadata,l.push(c)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Qt.DefaultUp=new O(0,1,0);Qt.DefaultMatrixAutoUpdate=!0;Qt.DefaultMatrixWorldAutoUpdate=!0;const wn=new O,qn=new O,uu=new O,Yn=new O,Dr=new O,Rr=new O,Ah=new O,cu=new O,fu=new O,du=new O;class Qn{constructor(e=new O,t=new O,i=new O){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),wn.subVectors(e,t),r.cross(wn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){wn.subVectors(r,t),qn.subVectors(i,t),uu.subVectors(e,t);const o=wn.dot(wn),a=wn.dot(qn),l=wn.dot(uu),u=qn.dot(qn),c=qn.dot(uu),d=o*u-a*a;if(d===0)return s.set(-2,-1,-1);const f=1/d,g=(u*l-a*c)*f,x=(o*c-a*l)*f;return s.set(1-g-x,x,g)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,Yn),Yn.x>=0&&Yn.y>=0&&Yn.x+Yn.y<=1}static getUV(e,t,i,r,s,o,a,l){return this.getBarycoord(e,t,i,r,Yn),l.set(0,0),l.addScaledVector(s,Yn.x),l.addScaledVector(o,Yn.y),l.addScaledVector(a,Yn.z),l}static isFrontFacing(e,t,i,r){return wn.subVectors(i,t),qn.subVectors(e,t),wn.cross(qn).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return wn.subVectors(this.c,this.b),qn.subVectors(this.a,this.b),wn.cross(qn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Qn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Qn.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,r,s){return Qn.getUV(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return Qn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Qn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let o,a;Dr.subVectors(r,i),Rr.subVectors(s,i),cu.subVectors(e,i);const l=Dr.dot(cu),u=Rr.dot(cu);if(l<=0&&u<=0)return t.copy(i);fu.subVectors(e,r);const c=Dr.dot(fu),d=Rr.dot(fu);if(c>=0&&d<=c)return t.copy(r);const f=l*d-c*u;if(f<=0&&l>=0&&c<=0)return o=l/(l-c),t.copy(i).addScaledVector(Dr,o);du.subVectors(e,s);const g=Dr.dot(du),x=Rr.dot(du);if(x>=0&&g<=x)return t.copy(s);const p=g*u-l*x;if(p<=0&&u>=0&&x<=0)return a=u/(u-x),t.copy(i).addScaledVector(Rr,a);const h=c*x-g*d;if(h<=0&&d-c>=0&&g-x>=0)return Ah.subVectors(s,r),a=(d-c)/(d-c+(g-x)),t.copy(r).addScaledVector(Ah,a);const m=1/(h+p+f);return o=p*m,a=f*m,t.copy(i).addScaledVector(Dr,o).addScaledVector(Rr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let wx=0;class fl extends _r{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:wx++}),this.uuid=So(),this.name="",this.type="Material",this.blending=ss,this.side=ps,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=mg,this.blendDst=gg,this.blendEquation=Ur,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=_c,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=dx,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Zl,this.stencilZFail=Zl,this.stencilZPass=Zl,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn("THREE.Material: '"+t+"' parameter is undefined.");continue}const r=this[t];if(r===void 0){console.warn("THREE."+this.type+": '"+t+"' is not a property of this material.");continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==ss&&(i.blending=this.blending),this.side!==ps&&(i.side=this.side),this.vertexColors&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=this.transparent),i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.stencilWrite=this.stencilWrite,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(i.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(i.wireframe=this.wireframe),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=this.flatShading),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),JSON.stringify(this.userData)!=="{}"&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Cg extends fl{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new $e(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=vg,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const ot=new O,Ko=new we;class Vn{constructor(e,t,i){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i===!0,this.usage=gh,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Ko.fromBufferAttribute(this,t),Ko.applyMatrix3(e),this.setXY(t,Ko.x,Ko.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)ot.fromBufferAttribute(this,t),ot.applyMatrix3(e),this.setXYZ(t,ot.x,ot.y,ot.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)ot.fromBufferAttribute(this,t),ot.applyMatrix4(e),this.setXYZ(t,ot.x,ot.y,ot.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)ot.fromBufferAttribute(this,t),ot.applyNormalMatrix(e),this.setXYZ(t,ot.x,ot.y,ot.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)ot.fromBufferAttribute(this,t),ot.transformDirection(e),this.setXYZ(t,ot.x,ot.y,ot.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Go(t,this.array)),t}setX(e,t){return this.normalized&&(t=Xt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Go(t,this.array)),t}setY(e,t){return this.normalized&&(t=Xt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Go(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Xt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Go(t,this.array)),t}setW(e,t){return this.normalized&&(t=Xt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Xt(t,this.array),i=Xt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=Xt(t,this.array),i=Xt(i,this.array),r=Xt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=Xt(t,this.array),i=Xt(i,this.array),r=Xt(r,this.array),s=Xt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==gh&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class bg extends Vn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Ag extends Vn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Dn extends Vn{constructor(e,t,i){super(new Float32Array(e),t,i)}}let Ex=0;const an=new wt,hu=new Qt,Ir=new O,Yt=new Mo,zs=new Mo,vt=new O;class ui extends _r{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ex++}),this.uuid=So(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(yg(e)?Ag:bg)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new hn().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return an.makeRotationFromQuaternion(e),this.applyMatrix4(an),this}rotateX(e){return an.makeRotationX(e),this.applyMatrix4(an),this}rotateY(e){return an.makeRotationY(e),this.applyMatrix4(an),this}rotateZ(e){return an.makeRotationZ(e),this.applyMatrix4(an),this}translate(e,t,i){return an.makeTranslation(e,t,i),this.applyMatrix4(an),this}scale(e,t,i){return an.makeScale(e,t,i),this.applyMatrix4(an),this}lookAt(e){return hu.lookAt(e),hu.updateMatrix(),this.applyMatrix4(hu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ir).negate(),this.translate(Ir.x,Ir.y,Ir.z),this}setFromPoints(e){const t=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Dn(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Mo);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new O(-1/0,-1/0,-1/0),new O(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];Yt.setFromBufferAttribute(s),this.morphTargetsRelative?(vt.addVectors(this.boundingBox.min,Yt.min),this.boundingBox.expandByPoint(vt),vt.addVectors(this.boundingBox.max,Yt.max),this.boundingBox.expandByPoint(vt)):(this.boundingBox.expandByPoint(Yt.min),this.boundingBox.expandByPoint(Yt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ef);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new O,1/0);return}if(e){const i=this.boundingSphere.center;if(Yt.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];zs.setFromBufferAttribute(a),this.morphTargetsRelative?(vt.addVectors(Yt.min,zs.min),Yt.expandByPoint(vt),vt.addVectors(Yt.max,zs.max),Yt.expandByPoint(vt)):(Yt.expandByPoint(zs.min),Yt.expandByPoint(zs.max))}Yt.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)vt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(vt));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let u=0,c=a.count;u<c;u++)vt.fromBufferAttribute(a,u),l&&(Ir.fromBufferAttribute(e,u),vt.add(Ir)),r=Math.max(r,i.distanceToSquared(vt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=t.position.array,s=t.normal.array,o=t.uv.array,a=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Vn(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,u=[],c=[];for(let R=0;R<a;R++)u[R]=new O,c[R]=new O;const d=new O,f=new O,g=new O,x=new we,p=new we,h=new we,m=new O,v=new O;function _(R,$,re){d.fromArray(r,R*3),f.fromArray(r,$*3),g.fromArray(r,re*3),x.fromArray(o,R*2),p.fromArray(o,$*2),h.fromArray(o,re*2),f.sub(d),g.sub(d),p.sub(x),h.sub(x);const B=1/(p.x*h.y-h.x*p.y);!isFinite(B)||(m.copy(f).multiplyScalar(h.y).addScaledVector(g,-p.y).multiplyScalar(B),v.copy(g).multiplyScalar(p.x).addScaledVector(f,-h.x).multiplyScalar(B),u[R].add(m),u[$].add(m),u[re].add(m),c[R].add(v),c[$].add(v),c[re].add(v))}let M=this.groups;M.length===0&&(M=[{start:0,count:i.length}]);for(let R=0,$=M.length;R<$;++R){const re=M[R],B=re.start,k=re.count;for(let X=B,Z=B+k;X<Z;X+=3)_(i[X+0],i[X+1],i[X+2])}const S=new O,C=new O,L=new O,y=new O;function b(R){L.fromArray(s,R*3),y.copy(L);const $=u[R];S.copy($),S.sub(L.multiplyScalar(L.dot($))).normalize(),C.crossVectors(y,$);const B=C.dot(c[R])<0?-1:1;l[R*4]=S.x,l[R*4+1]=S.y,l[R*4+2]=S.z,l[R*4+3]=B}for(let R=0,$=M.length;R<$;++R){const re=M[R],B=re.start,k=re.count;for(let X=B,Z=B+k;X<Z;X+=3)b(i[X+0]),b(i[X+1]),b(i[X+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Vn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,g=i.count;f<g;f++)i.setXYZ(f,0,0,0);const r=new O,s=new O,o=new O,a=new O,l=new O,u=new O,c=new O,d=new O;if(e)for(let f=0,g=e.count;f<g;f+=3){const x=e.getX(f+0),p=e.getX(f+1),h=e.getX(f+2);r.fromBufferAttribute(t,x),s.fromBufferAttribute(t,p),o.fromBufferAttribute(t,h),c.subVectors(o,s),d.subVectors(r,s),c.cross(d),a.fromBufferAttribute(i,x),l.fromBufferAttribute(i,p),u.fromBufferAttribute(i,h),a.add(c),l.add(c),u.add(c),i.setXYZ(x,a.x,a.y,a.z),i.setXYZ(p,l.x,l.y,l.z),i.setXYZ(h,u.x,u.y,u.z)}else for(let f=0,g=t.count;f<g;f+=3)r.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),c.subVectors(o,s),d.subVectors(r,s),c.cross(d),i.setXYZ(f+0,c.x,c.y,c.z),i.setXYZ(f+1,c.x,c.y,c.z),i.setXYZ(f+2,c.x,c.y,c.z);this.normalizeNormals(),i.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeBufferGeometries() instead."),this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)vt.fromBufferAttribute(e,t),vt.normalize(),e.setXYZ(t,vt.x,vt.y,vt.z)}toNonIndexed(){function e(a,l){const u=a.array,c=a.itemSize,d=a.normalized,f=new u.constructor(l.length*c);let g=0,x=0;for(let p=0,h=l.length;p<h;p++){a.isInterleavedBufferAttribute?g=l[p]*a.data.stride+a.offset:g=l[p]*c;for(let m=0;m<c;m++)f[x++]=u[g++]}return new Vn(f,c,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new ui,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],u=e(l,i);t.setAttribute(a,u)}const s=this.morphAttributes;for(const a in s){const l=[],u=s[a];for(let c=0,d=u.length;c<d;c++){const f=u[c],g=e(f,i);l.push(g)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const u=o[a];t.addGroup(u.start,u.count,u.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(e[u]=l[u]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const u=i[l];e.data.attributes[l]=u.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],c=[];for(let d=0,f=u.length;d<f;d++){const g=u[d];c.push(g.toJSON(e.data))}c.length>0&&(r[l]=c,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const u in r){const c=r[u];this.setAttribute(u,c.clone(t))}const s=e.morphAttributes;for(const u in s){const c=[],d=s[u];for(let f=0,g=d.length;f<g;f++)c.push(d[f].clone(t));this.morphAttributes[u]=c}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let u=0,c=o.length;u<c;u++){const d=o[u];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,e.parameters!==void 0&&(this.parameters=Object.assign({},e.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}const Lh=new wt,Nr=new Tg,pu=new Ef,gi=new O,vi=new O,_i=new O,mu=new O,gu=new O,vu=new O,Qo=new O,Jo=new O,ea=new O,ta=new we,na=new we,ia=new we,_u=new O,ra=new O;class On extends Qt{constructor(e=new ui,t=new Cg){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;if(r===void 0||(i.boundingSphere===null&&i.computeBoundingSphere(),pu.copy(i.boundingSphere),pu.applyMatrix4(s),e.ray.intersectsSphere(pu)===!1)||(Lh.copy(s).invert(),Nr.copy(e.ray).applyMatrix4(Lh),i.boundingBox!==null&&Nr.intersectsBox(i.boundingBox)===!1))return;let o;const a=i.index,l=i.attributes.position,u=i.morphAttributes.position,c=i.morphTargetsRelative,d=i.attributes.uv,f=i.attributes.uv2,g=i.groups,x=i.drawRange;if(a!==null)if(Array.isArray(r))for(let p=0,h=g.length;p<h;p++){const m=g[p],v=r[m.materialIndex],_=Math.max(m.start,x.start),M=Math.min(a.count,Math.min(m.start+m.count,x.start+x.count));for(let S=_,C=M;S<C;S+=3){const L=a.getX(S),y=a.getX(S+1),b=a.getX(S+2);o=sa(this,v,e,Nr,l,u,c,d,f,L,y,b),o&&(o.faceIndex=Math.floor(S/3),o.face.materialIndex=m.materialIndex,t.push(o))}}else{const p=Math.max(0,x.start),h=Math.min(a.count,x.start+x.count);for(let m=p,v=h;m<v;m+=3){const _=a.getX(m),M=a.getX(m+1),S=a.getX(m+2);o=sa(this,r,e,Nr,l,u,c,d,f,_,M,S),o&&(o.faceIndex=Math.floor(m/3),t.push(o))}}else if(l!==void 0)if(Array.isArray(r))for(let p=0,h=g.length;p<h;p++){const m=g[p],v=r[m.materialIndex],_=Math.max(m.start,x.start),M=Math.min(l.count,Math.min(m.start+m.count,x.start+x.count));for(let S=_,C=M;S<C;S+=3){const L=S,y=S+1,b=S+2;o=sa(this,v,e,Nr,l,u,c,d,f,L,y,b),o&&(o.faceIndex=Math.floor(S/3),o.face.materialIndex=m.materialIndex,t.push(o))}}else{const p=Math.max(0,x.start),h=Math.min(l.count,x.start+x.count);for(let m=p,v=h;m<v;m+=3){const _=m,M=m+1,S=m+2;o=sa(this,r,e,Nr,l,u,c,d,f,_,M,S),o&&(o.faceIndex=Math.floor(m/3),t.push(o))}}}}function Tx(n,e,t,i,r,s,o,a){let l;if(e.side===mn?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side!==ti,a),l===null)return null;ra.copy(a),ra.applyMatrix4(n.matrixWorld);const u=t.ray.origin.distanceTo(ra);return u<t.near||u>t.far?null:{distance:u,point:ra.clone(),object:n}}function sa(n,e,t,i,r,s,o,a,l,u,c,d){gi.fromBufferAttribute(r,u),vi.fromBufferAttribute(r,c),_i.fromBufferAttribute(r,d);const f=n.morphTargetInfluences;if(s&&f){Qo.set(0,0,0),Jo.set(0,0,0),ea.set(0,0,0);for(let x=0,p=s.length;x<p;x++){const h=f[x],m=s[x];h!==0&&(mu.fromBufferAttribute(m,u),gu.fromBufferAttribute(m,c),vu.fromBufferAttribute(m,d),o?(Qo.addScaledVector(mu,h),Jo.addScaledVector(gu,h),ea.addScaledVector(vu,h)):(Qo.addScaledVector(mu.sub(gi),h),Jo.addScaledVector(gu.sub(vi),h),ea.addScaledVector(vu.sub(_i),h)))}gi.add(Qo),vi.add(Jo),_i.add(ea)}n.isSkinnedMesh&&(n.boneTransform(u,gi),n.boneTransform(c,vi),n.boneTransform(d,_i));const g=Tx(n,e,t,i,gi,vi,_i,_u);if(g){a&&(ta.fromBufferAttribute(a,u),na.fromBufferAttribute(a,c),ia.fromBufferAttribute(a,d),g.uv=Qn.getUV(_u,gi,vi,_i,ta,na,ia,new we)),l&&(ta.fromBufferAttribute(l,u),na.fromBufferAttribute(l,c),ia.fromBufferAttribute(l,d),g.uv2=Qn.getUV(_u,gi,vi,_i,ta,na,ia,new we));const x={a:u,b:c,c:d,normal:new O,materialIndex:0};Qn.getNormal(gi,vi,_i,x.normal),g.face=x}return g}class Eo extends ui{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],u=[],c=[],d=[];let f=0,g=0;x("z","y","x",-1,-1,i,t,e,o,s,0),x("z","y","x",1,-1,i,t,-e,o,s,1),x("x","z","y",1,1,e,i,t,r,o,2),x("x","z","y",1,-1,e,i,-t,r,o,3),x("x","y","z",1,-1,e,t,i,r,s,4),x("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Dn(u,3)),this.setAttribute("normal",new Dn(c,3)),this.setAttribute("uv",new Dn(d,2));function x(p,h,m,v,_,M,S,C,L,y,b){const R=M/L,$=S/y,re=M/2,B=S/2,k=C/2,X=L+1,Z=y+1;let Q=0,I=0;const P=new O;for(let N=0;N<Z;N++){const Y=N*$-B;for(let q=0;q<X;q++){const K=q*R-re;P[p]=K*v,P[h]=Y*_,P[m]=k,u.push(P.x,P.y,P.z),P[p]=0,P[h]=0,P[m]=C>0?1:-1,c.push(P.x,P.y,P.z),d.push(q/L),d.push(1-N/y),Q+=1}}for(let N=0;N<y;N++)for(let Y=0;Y<L;Y++){const q=f+Y+X*N,K=f+Y+X*(N+1),oe=f+(Y+1)+X*(N+1),_e=f+(Y+1)+X*N;l.push(q,K,_e),l.push(K,oe,_e),I+=6}a.addGroup(g,I,b),g+=I,f+=Q}}static fromJSON(e){return new Eo(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function _s(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function Rt(n){const e={};for(let t=0;t<n.length;t++){const i=_s(n[t]);for(const r in i)e[r]=i[r]}return e}function Cx(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}const Lg={clone:_s,merge:Rt};var bx=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ax=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Gn extends fl{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=bx,this.fragmentShader=Ax,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=_s(e.uniforms),this.uniformsGroups=Cx(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class Pg extends Qt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new wt,this.projectionMatrix=new wt,this.projectionMatrixInverse=new wt}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class fn extends Pg{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=_h*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Kl*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return _h*2*Math.atan(Math.tan(Kl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Kl*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,u=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*i/u,r*=o.width/l,i*=o.height/u}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const zr=90,Fr=1;class Lx extends Qt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i;const r=new fn(zr,Fr,e,t);r.layers=this.layers,r.up.set(0,-1,0),r.lookAt(new O(1,0,0)),this.add(r);const s=new fn(zr,Fr,e,t);s.layers=this.layers,s.up.set(0,-1,0),s.lookAt(new O(-1,0,0)),this.add(s);const o=new fn(zr,Fr,e,t);o.layers=this.layers,o.up.set(0,0,1),o.lookAt(new O(0,1,0)),this.add(o);const a=new fn(zr,Fr,e,t);a.layers=this.layers,a.up.set(0,0,-1),a.lookAt(new O(0,-1,0)),this.add(a);const l=new fn(zr,Fr,e,t);l.layers=this.layers,l.up.set(0,-1,0),l.lookAt(new O(0,0,1)),this.add(l);const u=new fn(zr,Fr,e,t);u.layers=this.layers,u.up.set(0,-1,0),u.lookAt(new O(0,0,-1)),this.add(u)}update(e,t){this.parent===null&&this.updateMatrixWorld();const i=this.renderTarget,[r,s,o,a,l,u]=this.children,c=e.getRenderTarget(),d=e.toneMapping,f=e.xr.enabled;e.toneMapping=ii,e.xr.enabled=!1;const g=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0),e.render(t,r),e.setRenderTarget(i,1),e.render(t,s),e.setRenderTarget(i,2),e.render(t,o),e.setRenderTarget(i,3),e.render(t,a),e.setRenderTarget(i,4),e.render(t,l),i.texture.generateMipmaps=g,e.setRenderTarget(i,5),e.render(t,u),e.setRenderTarget(c),e.toneMapping=d,e.xr.enabled=f,i.texture.needsPMREMUpdate=!0}}class Dg extends _n{constructor(e,t,i,r,s,o,a,l,u,c){e=e!==void 0?e:[],t=t!==void 0?t:ms,super(e,t,i,r,s,o,a,l,u,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Px extends ki{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Dg(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:cn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Eo(5,5,5),s=new Gn({name:"CubemapFromEquirect",uniforms:_s(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:mn,blending:Ii});s.uniforms.tEquirect.value=t;const o=new On(r,s),a=t.minFilter;return t.minFilter===cl&&(t.minFilter=cn),new Lx(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}}const xu=new O,Dx=new O,Rx=new hn;class $i{constructor(e=new O(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=xu.subVectors(i,t).cross(Dx.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)}intersectLine(e,t){const i=e.delta(xu),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(i).multiplyScalar(s).add(e.start)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||Rx.getNormalMatrix(e),r=this.coplanarPoint(xu).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const kr=new Ef,oa=new O;class Rg{constructor(e=new $i,t=new $i,i=new $i,r=new $i,s=new $i,o=new $i){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e){const t=this.planes,i=e.elements,r=i[0],s=i[1],o=i[2],a=i[3],l=i[4],u=i[5],c=i[6],d=i[7],f=i[8],g=i[9],x=i[10],p=i[11],h=i[12],m=i[13],v=i[14],_=i[15];return t[0].setComponents(a-r,d-l,p-f,_-h).normalize(),t[1].setComponents(a+r,d+l,p+f,_+h).normalize(),t[2].setComponents(a+s,d+u,p+g,_+m).normalize(),t[3].setComponents(a-s,d-u,p-g,_-m).normalize(),t[4].setComponents(a-o,d-c,p-x,_-v).normalize(),t[5].setComponents(a+o,d+c,p+x,_+v).normalize(),this}intersectsObject(e){const t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),kr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(kr)}intersectsSprite(e){return kr.center.set(0,0,0),kr.radius=.7071067811865476,kr.applyMatrix4(e.matrixWorld),this.intersectsSphere(kr)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(oa.x=r.normal.x>0?e.max.x:e.min.x,oa.y=r.normal.y>0?e.max.y:e.min.y,oa.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(oa)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Ig(){let n=null,e=!1,t=null,i=null;function r(s,o){t(s,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function Ix(n,e){const t=e.isWebGL2,i=new WeakMap;function r(u,c){const d=u.array,f=u.usage,g=n.createBuffer();n.bindBuffer(c,g),n.bufferData(c,d,f),u.onUploadCallback();let x;if(d instanceof Float32Array)x=5126;else if(d instanceof Uint16Array)if(u.isFloat16BufferAttribute)if(t)x=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else x=5123;else if(d instanceof Int16Array)x=5122;else if(d instanceof Uint32Array)x=5125;else if(d instanceof Int32Array)x=5124;else if(d instanceof Int8Array)x=5120;else if(d instanceof Uint8Array)x=5121;else if(d instanceof Uint8ClampedArray)x=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:g,type:x,bytesPerElement:d.BYTES_PER_ELEMENT,version:u.version}}function s(u,c,d){const f=c.array,g=c.updateRange;n.bindBuffer(d,u),g.count===-1?n.bufferSubData(d,0,f):(t?n.bufferSubData(d,g.offset*f.BYTES_PER_ELEMENT,f,g.offset,g.count):n.bufferSubData(d,g.offset*f.BYTES_PER_ELEMENT,f.subarray(g.offset,g.offset+g.count)),g.count=-1)}function o(u){return u.isInterleavedBufferAttribute&&(u=u.data),i.get(u)}function a(u){u.isInterleavedBufferAttribute&&(u=u.data);const c=i.get(u);c&&(n.deleteBuffer(c.buffer),i.delete(u))}function l(u,c){if(u.isGLBufferAttribute){const f=i.get(u);(!f||f.version<u.version)&&i.set(u,{buffer:u.buffer,type:u.type,bytesPerElement:u.elementSize,version:u.version});return}u.isInterleavedBufferAttribute&&(u=u.data);const d=i.get(u);d===void 0?i.set(u,r(u,c)):d.version<u.version&&(s(d.buffer,u,c),d.version=u.version)}return{get:o,remove:a,update:l}}class dl extends ui{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(i),l=Math.floor(r),u=a+1,c=l+1,d=e/a,f=t/l,g=[],x=[],p=[],h=[];for(let m=0;m<c;m++){const v=m*f-o;for(let _=0;_<u;_++){const M=_*d-s;x.push(M,-v,0),p.push(0,0,1),h.push(_/a),h.push(1-m/l)}}for(let m=0;m<l;m++)for(let v=0;v<a;v++){const _=v+u*m,M=v+u*(m+1),S=v+1+u*(m+1),C=v+1+u*m;g.push(_,M,C),g.push(M,S,C)}this.setIndex(g),this.setAttribute("position",new Dn(x,3)),this.setAttribute("normal",new Dn(p,3)),this.setAttribute("uv",new Dn(h,2))}static fromJSON(e){return new dl(e.width,e.height,e.widthSegments,e.heightSegments)}}var Nx=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,zx=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Fx=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,kx=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Ox=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Ux=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Bx="vec3 transformed = vec3( position );",Vx=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Gx=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
#ifdef USE_IRIDESCENCE
	vec3 BRDF_GGX_Iridescence( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float iridescence, const in vec3 iridescenceFresnel, const in float roughness ) {
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = mix( F_Schlick( f0, f90, dotVH ), iridescenceFresnel, iridescence );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif`,Hx=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			 return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float R21 = R12;
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Wx=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,jx=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,Xx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,qx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Yx=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,$x=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Zx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Kx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Qx=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Jx=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,ey=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,ty=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,ny=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,iy=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,ry=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,sy=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,oy="gl_FragColor = linearToOutputTexel( gl_FragColor );",ay=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,ly=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,uy=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,cy=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,fy=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,dy=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,hy=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,py=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,my=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,gy=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,vy=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,_y=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,xy=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,yy=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Sy=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert
#define Material_LightProbeLOD( material )	(0)`,My=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( PHYSICALLY_CORRECT_LIGHTS )
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#else
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,wy=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,Ey=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Ty=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon
#define Material_LightProbeLOD( material )	(0)`,Cy=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,by=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong
#define Material_LightProbeLOD( material )	(0)`,Ay=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARCOLORMAP
			specularColorFactor *= texture2D( specularColorMap, vUv ).rgb;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEENCOLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEENROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
	#endif
#endif`,Ly=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	#ifdef USE_IRIDESCENCE
		reflectedLight.directSpecular += irradiance * BRDF_GGX_Iridescence( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness );
	#else
		reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Py=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Dy=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Ry=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,Iy=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Ny=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,zy=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Fy=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,ky=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Oy=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Uy=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,By=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Vy=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Gy=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Hy=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Wy=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,jy=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,Xy=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,qy=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,Yy=`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,$y=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Zy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ky=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Qy=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,Jy=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,e1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,t1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,n1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,i1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,r1=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,s1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,o1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,a1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,l1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,u1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,c1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,f1=`#if NUM_SPOT_LIGHT_COORDS > 0
  varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
  uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );
		bool inFrustum = all( inFrustumVec );
		bvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );
		bool frustumTest = all( frustumTestVec );
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,d1=`#if NUM_SPOT_LIGHT_COORDS > 0
  uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
  varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,h1=`#if defined( USE_SHADOWMAP ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_COORDS > 0 || NUM_POINT_LIGHT_SHADOWS > 0
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		vec4 shadowWorldPosition;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
		vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
		vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
#endif`,p1=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,m1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,g1=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,v1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,_1=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,x1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,y1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,S1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,M1=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,w1=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmission.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, material.transmission );
#endif`,E1=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		#ifdef texture2DLodEXT
			return texture2DLodEXT( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#else
			return texture2D( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#endif
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,T1=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,C1=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,b1=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,A1=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,L1=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,P1=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,D1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const R1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,I1=`uniform sampler2D t2D;
varying vec2 vUv;
void main() {
	gl_FragColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		gl_FragColor = vec4( mix( pow( gl_FragColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), gl_FragColor.rgb * 0.0773993808, vec3( lessThanEqual( gl_FragColor.rgb, vec3( 0.04045 ) ) ) ), gl_FragColor.w );
	#endif
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,N1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,z1=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,F1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,k1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,O1=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,U1=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,B1=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,V1=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,G1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,H1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,W1=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,j1=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,X1=`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,q1=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Y1=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,$1=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Z1=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,K1=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Q1=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,J1=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,eS=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,tS=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,nS=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,iS=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,rS=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,sS=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,oS=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,aS=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,lS=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,uS=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,cS=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,fS=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Ce={alphamap_fragment:Nx,alphamap_pars_fragment:zx,alphatest_fragment:Fx,alphatest_pars_fragment:kx,aomap_fragment:Ox,aomap_pars_fragment:Ux,begin_vertex:Bx,beginnormal_vertex:Vx,bsdfs:Gx,iridescence_fragment:Hx,bumpmap_pars_fragment:Wx,clipping_planes_fragment:jx,clipping_planes_pars_fragment:Xx,clipping_planes_pars_vertex:qx,clipping_planes_vertex:Yx,color_fragment:$x,color_pars_fragment:Zx,color_pars_vertex:Kx,color_vertex:Qx,common:Jx,cube_uv_reflection_fragment:ey,defaultnormal_vertex:ty,displacementmap_pars_vertex:ny,displacementmap_vertex:iy,emissivemap_fragment:ry,emissivemap_pars_fragment:sy,encodings_fragment:oy,encodings_pars_fragment:ay,envmap_fragment:ly,envmap_common_pars_fragment:uy,envmap_pars_fragment:cy,envmap_pars_vertex:fy,envmap_physical_pars_fragment:wy,envmap_vertex:dy,fog_vertex:hy,fog_pars_vertex:py,fog_fragment:my,fog_pars_fragment:gy,gradientmap_pars_fragment:vy,lightmap_fragment:_y,lightmap_pars_fragment:xy,lights_lambert_fragment:yy,lights_lambert_pars_fragment:Sy,lights_pars_begin:My,lights_toon_fragment:Ey,lights_toon_pars_fragment:Ty,lights_phong_fragment:Cy,lights_phong_pars_fragment:by,lights_physical_fragment:Ay,lights_physical_pars_fragment:Ly,lights_fragment_begin:Py,lights_fragment_maps:Dy,lights_fragment_end:Ry,logdepthbuf_fragment:Iy,logdepthbuf_pars_fragment:Ny,logdepthbuf_pars_vertex:zy,logdepthbuf_vertex:Fy,map_fragment:ky,map_pars_fragment:Oy,map_particle_fragment:Uy,map_particle_pars_fragment:By,metalnessmap_fragment:Vy,metalnessmap_pars_fragment:Gy,morphcolor_vertex:Hy,morphnormal_vertex:Wy,morphtarget_pars_vertex:jy,morphtarget_vertex:Xy,normal_fragment_begin:qy,normal_fragment_maps:Yy,normal_pars_fragment:$y,normal_pars_vertex:Zy,normal_vertex:Ky,normalmap_pars_fragment:Qy,clearcoat_normal_fragment_begin:Jy,clearcoat_normal_fragment_maps:e1,clearcoat_pars_fragment:t1,iridescence_pars_fragment:n1,output_fragment:i1,packing:r1,premultiplied_alpha_fragment:s1,project_vertex:o1,dithering_fragment:a1,dithering_pars_fragment:l1,roughnessmap_fragment:u1,roughnessmap_pars_fragment:c1,shadowmap_pars_fragment:f1,shadowmap_pars_vertex:d1,shadowmap_vertex:h1,shadowmask_pars_fragment:p1,skinbase_vertex:m1,skinning_pars_vertex:g1,skinning_vertex:v1,skinnormal_vertex:_1,specularmap_fragment:x1,specularmap_pars_fragment:y1,tonemapping_fragment:S1,tonemapping_pars_fragment:M1,transmission_fragment:w1,transmission_pars_fragment:E1,uv_pars_fragment:T1,uv_pars_vertex:C1,uv_vertex:b1,uv2_pars_fragment:A1,uv2_pars_vertex:L1,uv2_vertex:P1,worldpos_vertex:D1,background_vert:R1,background_frag:I1,backgroundCube_vert:N1,backgroundCube_frag:z1,cube_vert:F1,cube_frag:k1,depth_vert:O1,depth_frag:U1,distanceRGBA_vert:B1,distanceRGBA_frag:V1,equirect_vert:G1,equirect_frag:H1,linedashed_vert:W1,linedashed_frag:j1,meshbasic_vert:X1,meshbasic_frag:q1,meshlambert_vert:Y1,meshlambert_frag:$1,meshmatcap_vert:Z1,meshmatcap_frag:K1,meshnormal_vert:Q1,meshnormal_frag:J1,meshphong_vert:eS,meshphong_frag:tS,meshphysical_vert:nS,meshphysical_frag:iS,meshtoon_vert:rS,meshtoon_frag:sS,points_vert:oS,points_frag:aS,shadow_vert:lS,shadow_frag:uS,sprite_vert:cS,sprite_frag:fS},ie={common:{diffuse:{value:new $e(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new hn},uv2Transform:{value:new hn},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new we(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new $e(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new $e(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new hn}},sprite:{diffuse:{value:new $e(16777215)},opacity:{value:1},center:{value:new we(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new hn}}},Fn={basic:{uniforms:Rt([ie.common,ie.specularmap,ie.envmap,ie.aomap,ie.lightmap,ie.fog]),vertexShader:Ce.meshbasic_vert,fragmentShader:Ce.meshbasic_frag},lambert:{uniforms:Rt([ie.common,ie.specularmap,ie.envmap,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.fog,ie.lights,{emissive:{value:new $e(0)}}]),vertexShader:Ce.meshlambert_vert,fragmentShader:Ce.meshlambert_frag},phong:{uniforms:Rt([ie.common,ie.specularmap,ie.envmap,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.fog,ie.lights,{emissive:{value:new $e(0)},specular:{value:new $e(1118481)},shininess:{value:30}}]),vertexShader:Ce.meshphong_vert,fragmentShader:Ce.meshphong_frag},standard:{uniforms:Rt([ie.common,ie.envmap,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.roughnessmap,ie.metalnessmap,ie.fog,ie.lights,{emissive:{value:new $e(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ce.meshphysical_vert,fragmentShader:Ce.meshphysical_frag},toon:{uniforms:Rt([ie.common,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.gradientmap,ie.fog,ie.lights,{emissive:{value:new $e(0)}}]),vertexShader:Ce.meshtoon_vert,fragmentShader:Ce.meshtoon_frag},matcap:{uniforms:Rt([ie.common,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.fog,{matcap:{value:null}}]),vertexShader:Ce.meshmatcap_vert,fragmentShader:Ce.meshmatcap_frag},points:{uniforms:Rt([ie.points,ie.fog]),vertexShader:Ce.points_vert,fragmentShader:Ce.points_frag},dashed:{uniforms:Rt([ie.common,ie.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ce.linedashed_vert,fragmentShader:Ce.linedashed_frag},depth:{uniforms:Rt([ie.common,ie.displacementmap]),vertexShader:Ce.depth_vert,fragmentShader:Ce.depth_frag},normal:{uniforms:Rt([ie.common,ie.bumpmap,ie.normalmap,ie.displacementmap,{opacity:{value:1}}]),vertexShader:Ce.meshnormal_vert,fragmentShader:Ce.meshnormal_frag},sprite:{uniforms:Rt([ie.sprite,ie.fog]),vertexShader:Ce.sprite_vert,fragmentShader:Ce.sprite_frag},background:{uniforms:{uvTransform:{value:new hn},t2D:{value:null}},vertexShader:Ce.background_vert,fragmentShader:Ce.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0}},vertexShader:Ce.backgroundCube_vert,fragmentShader:Ce.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ce.cube_vert,fragmentShader:Ce.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ce.equirect_vert,fragmentShader:Ce.equirect_frag},distanceRGBA:{uniforms:Rt([ie.common,ie.displacementmap,{referencePosition:{value:new O},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ce.distanceRGBA_vert,fragmentShader:Ce.distanceRGBA_frag},shadow:{uniforms:Rt([ie.lights,ie.fog,{color:{value:new $e(0)},opacity:{value:1}}]),vertexShader:Ce.shadow_vert,fragmentShader:Ce.shadow_frag}};Fn.physical={uniforms:Rt([Fn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new we(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new $e(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new we},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new $e(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new $e(1,1,1)},specularColorMap:{value:null}}]),vertexShader:Ce.meshphysical_vert,fragmentShader:Ce.meshphysical_frag};function dS(n,e,t,i,r,s,o){const a=new $e(0);let l=s===!0?0:1,u,c,d=null,f=0,g=null;function x(h,m){let v=!1,_=m.isScene===!0?m.background:null;_&&_.isTexture&&(_=(m.backgroundBlurriness>0?t:e).get(_));const M=n.xr,S=M.getSession&&M.getSession();S&&S.environmentBlendMode==="additive"&&(_=null),_===null?p(a,l):_&&_.isColor&&(p(_,1),v=!0),(n.autoClear||v)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),_&&(_.isCubeTexture||_.mapping===ul)?(c===void 0&&(c=new On(new Eo(1,1,1),new Gn({name:"BackgroundCubeMaterial",uniforms:_s(Fn.backgroundCube.uniforms),vertexShader:Fn.backgroundCube.vertexShader,fragmentShader:Fn.backgroundCube.fragmentShader,side:mn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(C,L,y){this.matrixWorld.copyPosition(y.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(c)),c.material.uniforms.envMap.value=_,c.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=m.backgroundBlurriness,(d!==_||f!==_.version||g!==n.toneMapping)&&(c.material.needsUpdate=!0,d=_,f=_.version,g=n.toneMapping),c.layers.enableAll(),h.unshift(c,c.geometry,c.material,0,0,null)):_&&_.isTexture&&(u===void 0&&(u=new On(new dl(2,2),new Gn({name:"BackgroundMaterial",uniforms:_s(Fn.background.uniforms),vertexShader:Fn.background.vertexShader,fragmentShader:Fn.background.fragmentShader,side:ps,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(u)),u.material.uniforms.t2D.value=_,_.matrixAutoUpdate===!0&&_.updateMatrix(),u.material.uniforms.uvTransform.value.copy(_.matrix),(d!==_||f!==_.version||g!==n.toneMapping)&&(u.material.needsUpdate=!0,d=_,f=_.version,g=n.toneMapping),u.layers.enableAll(),h.unshift(u,u.geometry,u.material,0,0,null))}function p(h,m){i.buffers.color.setClear(h.r,h.g,h.b,m,o)}return{getClearColor:function(){return a},setClearColor:function(h,m=1){a.set(h),l=m,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(h){l=h,p(a,l)},render:x}}function hS(n,e,t,i){const r=n.getParameter(34921),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||s!==null,a={},l=h(null);let u=l,c=!1;function d(k,X,Z,Q,I){let P=!1;if(o){const N=p(Q,Z,X);u!==N&&(u=N,g(u.object)),P=m(k,Q,Z,I),P&&v(k,Q,Z,I)}else{const N=X.wireframe===!0;(u.geometry!==Q.id||u.program!==Z.id||u.wireframe!==N)&&(u.geometry=Q.id,u.program=Z.id,u.wireframe=N,P=!0)}I!==null&&t.update(I,34963),(P||c)&&(c=!1,y(k,X,Z,Q),I!==null&&n.bindBuffer(34963,t.get(I).buffer))}function f(){return i.isWebGL2?n.createVertexArray():s.createVertexArrayOES()}function g(k){return i.isWebGL2?n.bindVertexArray(k):s.bindVertexArrayOES(k)}function x(k){return i.isWebGL2?n.deleteVertexArray(k):s.deleteVertexArrayOES(k)}function p(k,X,Z){const Q=Z.wireframe===!0;let I=a[k.id];I===void 0&&(I={},a[k.id]=I);let P=I[X.id];P===void 0&&(P={},I[X.id]=P);let N=P[Q];return N===void 0&&(N=h(f()),P[Q]=N),N}function h(k){const X=[],Z=[],Q=[];for(let I=0;I<r;I++)X[I]=0,Z[I]=0,Q[I]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:X,enabledAttributes:Z,attributeDivisors:Q,object:k,attributes:{},index:null}}function m(k,X,Z,Q){const I=u.attributes,P=X.attributes;let N=0;const Y=Z.getAttributes();for(const q in Y)if(Y[q].location>=0){const oe=I[q];let _e=P[q];if(_e===void 0&&(q==="instanceMatrix"&&k.instanceMatrix&&(_e=k.instanceMatrix),q==="instanceColor"&&k.instanceColor&&(_e=k.instanceColor)),oe===void 0||oe.attribute!==_e||_e&&oe.data!==_e.data)return!0;N++}return u.attributesNum!==N||u.index!==Q}function v(k,X,Z,Q){const I={},P=X.attributes;let N=0;const Y=Z.getAttributes();for(const q in Y)if(Y[q].location>=0){let oe=P[q];oe===void 0&&(q==="instanceMatrix"&&k.instanceMatrix&&(oe=k.instanceMatrix),q==="instanceColor"&&k.instanceColor&&(oe=k.instanceColor));const _e={};_e.attribute=oe,oe&&oe.data&&(_e.data=oe.data),I[q]=_e,N++}u.attributes=I,u.attributesNum=N,u.index=Q}function _(){const k=u.newAttributes;for(let X=0,Z=k.length;X<Z;X++)k[X]=0}function M(k){S(k,0)}function S(k,X){const Z=u.newAttributes,Q=u.enabledAttributes,I=u.attributeDivisors;Z[k]=1,Q[k]===0&&(n.enableVertexAttribArray(k),Q[k]=1),I[k]!==X&&((i.isWebGL2?n:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](k,X),I[k]=X)}function C(){const k=u.newAttributes,X=u.enabledAttributes;for(let Z=0,Q=X.length;Z<Q;Z++)X[Z]!==k[Z]&&(n.disableVertexAttribArray(Z),X[Z]=0)}function L(k,X,Z,Q,I,P){i.isWebGL2===!0&&(Z===5124||Z===5125)?n.vertexAttribIPointer(k,X,Z,I,P):n.vertexAttribPointer(k,X,Z,Q,I,P)}function y(k,X,Z,Q){if(i.isWebGL2===!1&&(k.isInstancedMesh||Q.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;_();const I=Q.attributes,P=Z.getAttributes(),N=X.defaultAttributeValues;for(const Y in P){const q=P[Y];if(q.location>=0){let K=I[Y];if(K===void 0&&(Y==="instanceMatrix"&&k.instanceMatrix&&(K=k.instanceMatrix),Y==="instanceColor"&&k.instanceColor&&(K=k.instanceColor)),K!==void 0){const oe=K.normalized,_e=K.itemSize,H=t.get(K);if(H===void 0)continue;const Pe=H.buffer,ye=H.type,Se=H.bytesPerElement;if(K.isInterleavedBufferAttribute){const de=K.data,Ue=de.stride,Ee=K.offset;if(de.isInstancedInterleavedBuffer){for(let ve=0;ve<q.locationSize;ve++)S(q.location+ve,de.meshPerAttribute);k.isInstancedMesh!==!0&&Q._maxInstanceCount===void 0&&(Q._maxInstanceCount=de.meshPerAttribute*de.count)}else for(let ve=0;ve<q.locationSize;ve++)M(q.location+ve);n.bindBuffer(34962,Pe);for(let ve=0;ve<q.locationSize;ve++)L(q.location+ve,_e/q.locationSize,ye,oe,Ue*Se,(Ee+_e/q.locationSize*ve)*Se)}else{if(K.isInstancedBufferAttribute){for(let de=0;de<q.locationSize;de++)S(q.location+de,K.meshPerAttribute);k.isInstancedMesh!==!0&&Q._maxInstanceCount===void 0&&(Q._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let de=0;de<q.locationSize;de++)M(q.location+de);n.bindBuffer(34962,Pe);for(let de=0;de<q.locationSize;de++)L(q.location+de,_e/q.locationSize,ye,oe,_e*Se,_e/q.locationSize*de*Se)}}else if(N!==void 0){const oe=N[Y];if(oe!==void 0)switch(oe.length){case 2:n.vertexAttrib2fv(q.location,oe);break;case 3:n.vertexAttrib3fv(q.location,oe);break;case 4:n.vertexAttrib4fv(q.location,oe);break;default:n.vertexAttrib1fv(q.location,oe)}}}}C()}function b(){re();for(const k in a){const X=a[k];for(const Z in X){const Q=X[Z];for(const I in Q)x(Q[I].object),delete Q[I];delete X[Z]}delete a[k]}}function R(k){if(a[k.id]===void 0)return;const X=a[k.id];for(const Z in X){const Q=X[Z];for(const I in Q)x(Q[I].object),delete Q[I];delete X[Z]}delete a[k.id]}function $(k){for(const X in a){const Z=a[X];if(Z[k.id]===void 0)continue;const Q=Z[k.id];for(const I in Q)x(Q[I].object),delete Q[I];delete Z[k.id]}}function re(){B(),c=!0,u!==l&&(u=l,g(u.object))}function B(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:re,resetDefaultState:B,dispose:b,releaseStatesOfGeometry:R,releaseStatesOfProgram:$,initAttributes:_,enableAttribute:M,disableUnusedAttributes:C}}function pS(n,e,t,i){const r=i.isWebGL2;let s;function o(u){s=u}function a(u,c){n.drawArrays(s,u,c),t.update(c,s,1)}function l(u,c,d){if(d===0)return;let f,g;if(r)f=n,g="drawArraysInstanced";else if(f=e.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[g](s,u,c,d),t.update(c,s,d)}this.setMode=o,this.render=a,this.renderInstances=l}function mS(n,e,t){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const L=e.get("EXT_texture_filter_anisotropic");i=n.getParameter(L.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(L){if(L==="highp"){if(n.getShaderPrecisionFormat(35633,36338).precision>0&&n.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";L="mediump"}return L==="mediump"&&n.getShaderPrecisionFormat(35633,36337).precision>0&&n.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&n instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext<"u"&&n instanceof WebGL2ComputeRenderingContext;let a=t.precision!==void 0?t.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const u=o||e.has("WEBGL_draw_buffers"),c=t.logarithmicDepthBuffer===!0,d=n.getParameter(34930),f=n.getParameter(35660),g=n.getParameter(3379),x=n.getParameter(34076),p=n.getParameter(34921),h=n.getParameter(36347),m=n.getParameter(36348),v=n.getParameter(36349),_=f>0,M=o||e.has("OES_texture_float"),S=_&&M,C=o?n.getParameter(36183):0;return{isWebGL2:o,drawBuffers:u,getMaxAnisotropy:r,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:c,maxTextures:d,maxVertexTextures:f,maxTextureSize:g,maxCubemapSize:x,maxAttributes:p,maxVertexUniforms:h,maxVaryings:m,maxFragmentUniforms:v,vertexTextures:_,floatFragmentTextures:M,floatVertexTextures:S,maxSamples:C}}function gS(n){const e=this;let t=null,i=0,r=!1,s=!1;const o=new $i,a=new hn,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f,g){const x=d.length!==0||f||i!==0||r;return r=f,t=c(d,g,0),i=d.length,x},this.beginShadows=function(){s=!0,c(null)},this.endShadows=function(){s=!1,u()},this.setState=function(d,f,g){const x=d.clippingPlanes,p=d.clipIntersection,h=d.clipShadows,m=n.get(d);if(!r||x===null||x.length===0||s&&!h)s?c(null):u();else{const v=s?0:i,_=v*4;let M=m.clippingState||null;l.value=M,M=c(x,f,_,g);for(let S=0;S!==_;++S)M[S]=t[S];m.clippingState=M,this.numIntersection=p?this.numPlanes:0,this.numPlanes+=v}};function u(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function c(d,f,g,x){const p=d!==null?d.length:0;let h=null;if(p!==0){if(h=l.value,x!==!0||h===null){const m=g+p*4,v=f.matrixWorldInverse;a.getNormalMatrix(v),(h===null||h.length<m)&&(h=new Float32Array(m));for(let _=0,M=g;_!==p;++_,M+=4)o.copy(d[_]).applyMatrix4(v,a),o.normal.toArray(h,M),h[M+3]=o.constant}l.value=h,l.needsUpdate=!0}return e.numPlanes=p,e.numIntersection=0,h}}function vS(n){let e=new WeakMap;function t(o,a){return a===xc?o.mapping=ms:a===yc&&(o.mapping=gs),o}function i(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const a=o.mapping;if(a===xc||a===yc)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const u=new Px(l.height/2);return u.fromEquirectangularTexture(n,o),e.set(o,u),o.addEventListener("dispose",r),t(u.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class Cf extends Pg{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,o=s+u*this.view.width,a-=c*this.view.offsetY,l=a-c*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Qr=4,Ph=[.125,.215,.35,.446,.526,.582],Ki=20,yu=new Cf,Dh=new $e;let Su=null;const Zi=(1+Math.sqrt(5))/2,Or=1/Zi,Rh=[new O(1,1,1),new O(-1,1,1),new O(1,1,-1),new O(-1,1,-1),new O(0,Zi,Or),new O(0,Zi,-Or),new O(Or,0,Zi),new O(-Or,0,Zi),new O(Zi,Or,0),new O(-Zi,Or,0)];class Ih{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){Su=this._renderer.getRenderTarget(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Fh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=zh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Su),e.scissorTest=!1,aa(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ms||e.mapping===gs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Su=this._renderer.getRenderTarget();const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:cn,minFilter:cn,generateMipmaps:!1,type:mo,format:An,encoding:pr,depthBuffer:!1},r=Nh(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Nh(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=_S(s)),this._blurMaterial=xS(s,e,t)}return r}_compileMaterial(e){const t=new On(this._lodPlanes[0],e);this._renderer.compile(t,yu)}_sceneToCubeUV(e,t,i,r){const a=new fn(90,1,t,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],c=this._renderer,d=c.autoClear,f=c.toneMapping;c.getClearColor(Dh),c.toneMapping=ii,c.autoClear=!1;const g=new Cg({name:"PMREM.Background",side:mn,depthWrite:!1,depthTest:!1}),x=new On(new Eo,g);let p=!1;const h=e.background;h?h.isColor&&(g.color.copy(h),e.background=null,p=!0):(g.color.copy(Dh),p=!0);for(let m=0;m<6;m++){const v=m%3;v===0?(a.up.set(0,l[m],0),a.lookAt(u[m],0,0)):v===1?(a.up.set(0,0,l[m]),a.lookAt(0,u[m],0)):(a.up.set(0,l[m],0),a.lookAt(0,0,u[m]));const _=this._cubeSize;aa(r,v*_,m>2?_:0,_,_),c.setRenderTarget(r),p&&c.render(x,a),c.render(e,a)}x.geometry.dispose(),x.material.dispose(),c.toneMapping=f,c.autoClear=d,e.background=h}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===ms||e.mapping===gs;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Fh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=zh());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new On(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;aa(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,yu)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Rh[(r-1)%Rh.length];this._blur(e,r-1,r,s,o)}t.autoClear=i}_blur(e,t,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,o,a){const l=this._renderer,u=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const c=3,d=new On(this._lodPlanes[r],u),f=u.uniforms,g=this._sizeLods[i]-1,x=isFinite(s)?Math.PI/(2*g):2*Math.PI/(2*Ki-1),p=s/x,h=isFinite(s)?1+Math.floor(c*p):Ki;h>Ki&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${h} samples when the maximum is set to ${Ki}`);const m=[];let v=0;for(let L=0;L<Ki;++L){const y=L/p,b=Math.exp(-y*y/2);m.push(b),L===0?v+=b:L<h&&(v+=2*b)}for(let L=0;L<m.length;L++)m[L]=m[L]/v;f.envMap.value=e.texture,f.samples.value=h,f.weights.value=m,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:_}=this;f.dTheta.value=x,f.mipInt.value=_-i;const M=this._sizeLods[r],S=3*M*(r>_-Qr?r-_+Qr:0),C=4*(this._cubeSize-M);aa(t,S,C,3*M,2*M),l.setRenderTarget(t),l.render(d,yu)}}function _S(n){const e=[],t=[],i=[];let r=n;const s=n-Qr+1+Ph.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let l=1/a;o>n-Qr?l=Ph[o-n+Qr-1]:o===0&&(l=0),i.push(l);const u=1/(a-2),c=-u,d=1+u,f=[c,c,d,c,d,d,c,c,d,d,c,d],g=6,x=6,p=3,h=2,m=1,v=new Float32Array(p*x*g),_=new Float32Array(h*x*g),M=new Float32Array(m*x*g);for(let C=0;C<g;C++){const L=C%3*2/3-1,y=C>2?0:-1,b=[L,y,0,L+2/3,y,0,L+2/3,y+1,0,L,y,0,L+2/3,y+1,0,L,y+1,0];v.set(b,p*x*C),_.set(f,h*x*C);const R=[C,C,C,C,C,C];M.set(R,m*x*C)}const S=new ui;S.setAttribute("position",new Vn(v,p)),S.setAttribute("uv",new Vn(_,h)),S.setAttribute("faceIndex",new Vn(M,m)),e.push(S),r>Qr&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Nh(n,e,t){const i=new ki(n,e,t);return i.texture.mapping=ul,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function aa(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function xS(n,e,t){const i=new Float32Array(Ki),r=new O(0,1,0);return new Gn({name:"SphericalGaussianBlur",defines:{n:Ki,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:bf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Ii,depthTest:!1,depthWrite:!1})}function zh(){return new Gn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:bf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Ii,depthTest:!1,depthWrite:!1})}function Fh(){return new Gn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:bf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ii,depthTest:!1,depthWrite:!1})}function bf(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function yS(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const l=a.mapping,u=l===xc||l===yc,c=l===ms||l===gs;if(u||c)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let d=e.get(a);return t===null&&(t=new Ih(n)),d=u?t.fromEquirectangular(a,d):t.fromCubemap(a,d),e.set(a,d),d.texture}else{if(e.has(a))return e.get(a).texture;{const d=a.image;if(u&&d&&d.height>0||c&&d&&r(d)){t===null&&(t=new Ih(n));const f=u?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,f),a.addEventListener("dispose",s),f.texture}else return null}}}return a}function r(a){let l=0;const u=6;for(let c=0;c<u;c++)a[c]!==void 0&&l++;return l===u}function s(a){const l=a.target;l.removeEventListener("dispose",s);const u=e.get(l);u!==void 0&&(e.delete(l),u.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function SS(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){const r=t(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function MS(n,e,t,i){const r={},s=new WeakMap;function o(d){const f=d.target;f.index!==null&&e.remove(f.index);for(const x in f.attributes)e.remove(f.attributes[x]);f.removeEventListener("dispose",o),delete r[f.id];const g=s.get(f);g&&(e.remove(g),s.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(d,f){return r[f.id]===!0||(f.addEventListener("dispose",o),r[f.id]=!0,t.memory.geometries++),f}function l(d){const f=d.attributes;for(const x in f)e.update(f[x],34962);const g=d.morphAttributes;for(const x in g){const p=g[x];for(let h=0,m=p.length;h<m;h++)e.update(p[h],34962)}}function u(d){const f=[],g=d.index,x=d.attributes.position;let p=0;if(g!==null){const v=g.array;p=g.version;for(let _=0,M=v.length;_<M;_+=3){const S=v[_+0],C=v[_+1],L=v[_+2];f.push(S,C,C,L,L,S)}}else{const v=x.array;p=x.version;for(let _=0,M=v.length/3-1;_<M;_+=3){const S=_+0,C=_+1,L=_+2;f.push(S,C,C,L,L,S)}}const h=new(yg(f)?Ag:bg)(f,1);h.version=p;const m=s.get(d);m&&e.remove(m),s.set(d,h)}function c(d){const f=s.get(d);if(f){const g=d.index;g!==null&&f.version<g.version&&u(d)}else u(d);return s.get(d)}return{get:a,update:l,getWireframeAttribute:c}}function wS(n,e,t,i){const r=i.isWebGL2;let s;function o(f){s=f}let a,l;function u(f){a=f.type,l=f.bytesPerElement}function c(f,g){n.drawElements(s,g,a,f*l),t.update(g,s,1)}function d(f,g,x){if(x===0)return;let p,h;if(r)p=n,h="drawElementsInstanced";else if(p=e.get("ANGLE_instanced_arrays"),h="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[h](s,g,a,f*l,x),t.update(g,s,x)}this.setMode=o,this.setIndex=u,this.render=c,this.renderInstances=d}function ES(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case 4:t.triangles+=a*(s/3);break;case 1:t.lines+=a*(s/2);break;case 3:t.lines+=a*(s-1);break;case 2:t.lines+=a*s;break;case 0:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function TS(n,e){return n[0]-e[0]}function CS(n,e){return Math.abs(e[1])-Math.abs(n[1])}function bS(n,e,t){const i={},r=new Float32Array(8),s=new WeakMap,o=new St,a=[];for(let u=0;u<8;u++)a[u]=[u,0];function l(u,c,d,f){const g=u.morphTargetInfluences;if(e.isWebGL2===!0){const p=c.morphAttributes.position||c.morphAttributes.normal||c.morphAttributes.color,h=p!==void 0?p.length:0;let m=s.get(c);if(m===void 0||m.count!==h){let Z=function(){k.dispose(),s.delete(c),c.removeEventListener("dispose",Z)};var x=Z;m!==void 0&&m.texture.dispose();const M=c.morphAttributes.position!==void 0,S=c.morphAttributes.normal!==void 0,C=c.morphAttributes.color!==void 0,L=c.morphAttributes.position||[],y=c.morphAttributes.normal||[],b=c.morphAttributes.color||[];let R=0;M===!0&&(R=1),S===!0&&(R=2),C===!0&&(R=3);let $=c.attributes.position.count*R,re=1;$>e.maxTextureSize&&(re=Math.ceil($/e.maxTextureSize),$=e.maxTextureSize);const B=new Float32Array($*re*4*h),k=new Eg(B,$,re,h);k.type=nr,k.needsUpdate=!0;const X=R*4;for(let Q=0;Q<h;Q++){const I=L[Q],P=y[Q],N=b[Q],Y=$*re*4*Q;for(let q=0;q<I.count;q++){const K=q*X;M===!0&&(o.fromBufferAttribute(I,q),B[Y+K+0]=o.x,B[Y+K+1]=o.y,B[Y+K+2]=o.z,B[Y+K+3]=0),S===!0&&(o.fromBufferAttribute(P,q),B[Y+K+4]=o.x,B[Y+K+5]=o.y,B[Y+K+6]=o.z,B[Y+K+7]=0),C===!0&&(o.fromBufferAttribute(N,q),B[Y+K+8]=o.x,B[Y+K+9]=o.y,B[Y+K+10]=o.z,B[Y+K+11]=N.itemSize===4?o.w:1)}}m={count:h,texture:k,size:new we($,re)},s.set(c,m),c.addEventListener("dispose",Z)}let v=0;for(let M=0;M<g.length;M++)v+=g[M];const _=c.morphTargetsRelative?1:1-v;f.getUniforms().setValue(n,"morphTargetBaseInfluence",_),f.getUniforms().setValue(n,"morphTargetInfluences",g),f.getUniforms().setValue(n,"morphTargetsTexture",m.texture,t),f.getUniforms().setValue(n,"morphTargetsTextureSize",m.size)}else{const p=g===void 0?0:g.length;let h=i[c.id];if(h===void 0||h.length!==p){h=[];for(let S=0;S<p;S++)h[S]=[S,0];i[c.id]=h}for(let S=0;S<p;S++){const C=h[S];C[0]=S,C[1]=g[S]}h.sort(CS);for(let S=0;S<8;S++)S<p&&h[S][1]?(a[S][0]=h[S][0],a[S][1]=h[S][1]):(a[S][0]=Number.MAX_SAFE_INTEGER,a[S][1]=0);a.sort(TS);const m=c.morphAttributes.position,v=c.morphAttributes.normal;let _=0;for(let S=0;S<8;S++){const C=a[S],L=C[0],y=C[1];L!==Number.MAX_SAFE_INTEGER&&y?(m&&c.getAttribute("morphTarget"+S)!==m[L]&&c.setAttribute("morphTarget"+S,m[L]),v&&c.getAttribute("morphNormal"+S)!==v[L]&&c.setAttribute("morphNormal"+S,v[L]),r[S]=y,_+=y):(m&&c.hasAttribute("morphTarget"+S)===!0&&c.deleteAttribute("morphTarget"+S),v&&c.hasAttribute("morphNormal"+S)===!0&&c.deleteAttribute("morphNormal"+S),r[S]=0)}const M=c.morphTargetsRelative?1:1-_;f.getUniforms().setValue(n,"morphTargetBaseInfluence",M),f.getUniforms().setValue(n,"morphTargetInfluences",r)}}return{update:l}}function AS(n,e,t,i){let r=new WeakMap;function s(l){const u=i.render.frame,c=l.geometry,d=e.get(l,c);return r.get(d)!==u&&(e.update(d),r.set(d,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),t.update(l.instanceMatrix,34962),l.instanceColor!==null&&t.update(l.instanceColor,34962)),d}function o(){r=new WeakMap}function a(l){const u=l.target;u.removeEventListener("dispose",a),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:s,dispose:o}}const Ng=new _n,zg=new Eg,Fg=new mx,kg=new Dg,kh=[],Oh=[],Uh=new Float32Array(16),Bh=new Float32Array(9),Vh=new Float32Array(4);function Ms(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=kh[r];if(s===void 0&&(s=new Float32Array(r),kh[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function ht(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function pt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function hl(n,e){let t=Oh[e];t===void 0&&(t=new Int32Array(e),Oh[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function LS(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function PS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ht(t,e))return;n.uniform2fv(this.addr,e),pt(t,e)}}function DS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(ht(t,e))return;n.uniform3fv(this.addr,e),pt(t,e)}}function RS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ht(t,e))return;n.uniform4fv(this.addr,e),pt(t,e)}}function IS(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(ht(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),pt(t,e)}else{if(ht(t,i))return;Vh.set(i),n.uniformMatrix2fv(this.addr,!1,Vh),pt(t,i)}}function NS(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(ht(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),pt(t,e)}else{if(ht(t,i))return;Bh.set(i),n.uniformMatrix3fv(this.addr,!1,Bh),pt(t,i)}}function zS(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(ht(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),pt(t,e)}else{if(ht(t,i))return;Uh.set(i),n.uniformMatrix4fv(this.addr,!1,Uh),pt(t,i)}}function FS(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function kS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ht(t,e))return;n.uniform2iv(this.addr,e),pt(t,e)}}function OS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ht(t,e))return;n.uniform3iv(this.addr,e),pt(t,e)}}function US(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ht(t,e))return;n.uniform4iv(this.addr,e),pt(t,e)}}function BS(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function VS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ht(t,e))return;n.uniform2uiv(this.addr,e),pt(t,e)}}function GS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ht(t,e))return;n.uniform3uiv(this.addr,e),pt(t,e)}}function HS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ht(t,e))return;n.uniform4uiv(this.addr,e),pt(t,e)}}function WS(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2D(e||Ng,r)}function jS(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||Fg,r)}function XS(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||kg,r)}function qS(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||zg,r)}function YS(n){switch(n){case 5126:return LS;case 35664:return PS;case 35665:return DS;case 35666:return RS;case 35674:return IS;case 35675:return NS;case 35676:return zS;case 5124:case 35670:return FS;case 35667:case 35671:return kS;case 35668:case 35672:return OS;case 35669:case 35673:return US;case 5125:return BS;case 36294:return VS;case 36295:return GS;case 36296:return HS;case 35678:case 36198:case 36298:case 36306:case 35682:return WS;case 35679:case 36299:case 36307:return jS;case 35680:case 36300:case 36308:case 36293:return XS;case 36289:case 36303:case 36311:case 36292:return qS}}function $S(n,e){n.uniform1fv(this.addr,e)}function ZS(n,e){const t=Ms(e,this.size,2);n.uniform2fv(this.addr,t)}function KS(n,e){const t=Ms(e,this.size,3);n.uniform3fv(this.addr,t)}function QS(n,e){const t=Ms(e,this.size,4);n.uniform4fv(this.addr,t)}function JS(n,e){const t=Ms(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function eM(n,e){const t=Ms(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function tM(n,e){const t=Ms(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function nM(n,e){n.uniform1iv(this.addr,e)}function iM(n,e){n.uniform2iv(this.addr,e)}function rM(n,e){n.uniform3iv(this.addr,e)}function sM(n,e){n.uniform4iv(this.addr,e)}function oM(n,e){n.uniform1uiv(this.addr,e)}function aM(n,e){n.uniform2uiv(this.addr,e)}function lM(n,e){n.uniform3uiv(this.addr,e)}function uM(n,e){n.uniform4uiv(this.addr,e)}function cM(n,e,t){const i=this.cache,r=e.length,s=hl(t,r);ht(i,s)||(n.uniform1iv(this.addr,s),pt(i,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||Ng,s[o])}function fM(n,e,t){const i=this.cache,r=e.length,s=hl(t,r);ht(i,s)||(n.uniform1iv(this.addr,s),pt(i,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||Fg,s[o])}function dM(n,e,t){const i=this.cache,r=e.length,s=hl(t,r);ht(i,s)||(n.uniform1iv(this.addr,s),pt(i,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||kg,s[o])}function hM(n,e,t){const i=this.cache,r=e.length,s=hl(t,r);ht(i,s)||(n.uniform1iv(this.addr,s),pt(i,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||zg,s[o])}function pM(n){switch(n){case 5126:return $S;case 35664:return ZS;case 35665:return KS;case 35666:return QS;case 35674:return JS;case 35675:return eM;case 35676:return tM;case 5124:case 35670:return nM;case 35667:case 35671:return iM;case 35668:case 35672:return rM;case 35669:case 35673:return sM;case 5125:return oM;case 36294:return aM;case 36295:return lM;case 36296:return uM;case 35678:case 36198:case 36298:case 36306:case 35682:return cM;case 35679:case 36299:case 36307:return fM;case 35680:case 36300:case 36308:case 36293:return dM;case 36289:case 36303:case 36311:case 36292:return hM}}class mM{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.setValue=YS(t.type)}}class gM{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.size=t.size,this.setValue=pM(t.type)}}class vM{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],i)}}}const Mu=/(\w+)(\])?(\[|\.)?/g;function Gh(n,e){n.seq.push(e),n.map[e.id]=e}function _M(n,e,t){const i=n.name,r=i.length;for(Mu.lastIndex=0;;){const s=Mu.exec(i),o=Mu.lastIndex;let a=s[1];const l=s[2]==="]",u=s[3];if(l&&(a=a|0),u===void 0||u==="["&&o+2===r){Gh(t,u===void 0?new mM(a,n,e):new gM(a,n,e));break}else{let d=t.map[a];d===void 0&&(d=new vM(a),Gh(t,d)),t=d}}}class Ma{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,35718);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);_M(s,o,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&i.push(o)}return i}}function Hh(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}let xM=0;function yM(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}function SM(n){switch(n){case pr:return["Linear","( value )"];case tt:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",n),["Linear","( value )"]}}function Wh(n,e,t){const i=n.getShaderParameter(e,35713),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+yM(n.getShaderSource(e),o)}else return r}function MM(n,e){const t=SM(e);return"vec4 "+n+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function wM(n,e){let t;switch(e){case V_:t="Linear";break;case G_:t="Reinhard";break;case H_:t="OptimizedCineon";break;case W_:t="ACESFilmic";break;case j_:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function EM(n){return[n.extensionDerivatives||!!n.envMapCubeUVHeight||n.bumpMap||n.tangentSpaceNormalMap||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Vs).join(`
`)}function TM(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function CM(n,e){const t={},i=n.getProgramParameter(e,35721);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),o=s.name;let a=1;s.type===35674&&(a=2),s.type===35675&&(a=3),s.type===35676&&(a=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function Vs(n){return n!==""}function jh(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Xh(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const bM=/^[ \t]*#include +<([\w\d./]+)>/gm;function Tc(n){return n.replace(bM,AM)}function AM(n,e){const t=Ce[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return Tc(t)}const LM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function qh(n){return n.replace(LM,PM)}function PM(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Yh(n){let e="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function DM(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===pg?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===x_?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Bs&&(e="SHADOWMAP_TYPE_VSM"),e}function RM(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case ms:case gs:e="ENVMAP_TYPE_CUBE";break;case ul:e="ENVMAP_TYPE_CUBE_UV";break}return e}function IM(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case gs:e="ENVMAP_MODE_REFRACTION";break}return e}function NM(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case vg:e="ENVMAP_BLENDING_MULTIPLY";break;case U_:e="ENVMAP_BLENDING_MIX";break;case B_:e="ENVMAP_BLENDING_ADD";break}return e}function zM(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function FM(n,e,t,i){const r=n.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=DM(t),u=RM(t),c=IM(t),d=NM(t),f=zM(t),g=t.isWebGL2?"":EM(t),x=TM(s),p=r.createProgram();let h,m,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(h=[x].filter(Vs).join(`
`),h.length>0&&(h+=`
`),m=[g,x].filter(Vs).join(`
`),m.length>0&&(m+=`
`)):(h=[Yh(t),"#define SHADER_NAME "+t.shaderName,x,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Vs).join(`
`),m=[g,Yh(t),"#define SHADER_NAME "+t.shaderName,x,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.envMap?"#define "+c:"",t.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ii?"#define TONE_MAPPING":"",t.toneMapping!==ii?Ce.tonemapping_pars_fragment:"",t.toneMapping!==ii?wM("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ce.encodings_pars_fragment,MM("linearToOutputTexel",t.outputEncoding),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Vs).join(`
`)),o=Tc(o),o=jh(o,t),o=Xh(o,t),a=Tc(a),a=jh(a,t),a=Xh(a,t),o=qh(o),a=qh(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,h=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+h,m=["#define varying in",t.glslVersion===vh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===vh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const _=v+h+o,M=v+m+a,S=Hh(r,35633,_),C=Hh(r,35632,M);if(r.attachShader(p,S),r.attachShader(p,C),t.index0AttributeName!==void 0?r.bindAttribLocation(p,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(p,0,"position"),r.linkProgram(p),n.debug.checkShaderErrors){const b=r.getProgramInfoLog(p).trim(),R=r.getShaderInfoLog(S).trim(),$=r.getShaderInfoLog(C).trim();let re=!0,B=!0;if(r.getProgramParameter(p,35714)===!1){re=!1;const k=Wh(r,S,"vertex"),X=Wh(r,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(p,35715)+`

Program Info Log: `+b+`
`+k+`
`+X)}else b!==""?console.warn("THREE.WebGLProgram: Program Info Log:",b):(R===""||$==="")&&(B=!1);B&&(this.diagnostics={runnable:re,programLog:b,vertexShader:{log:R,prefix:h},fragmentShader:{log:$,prefix:m}})}r.deleteShader(S),r.deleteShader(C);let L;this.getUniforms=function(){return L===void 0&&(L=new Ma(r,p)),L};let y;return this.getAttributes=function(){return y===void 0&&(y=CM(r,p)),y},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(p),this.program=void 0},this.name=t.shaderName,this.id=xM++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=S,this.fragmentShader=C,this}let kM=0;class OM{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new UM(e),t.set(e,i)),i}}class UM{constructor(e){this.id=kM++,this.code=e,this.usedTimes=0}}function BM(n,e,t,i,r,s,o){const a=new Tf,l=new OM,u=[],c=r.isWebGL2,d=r.logarithmicDepthBuffer,f=r.vertexTextures;let g=r.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(y,b,R,$,re){const B=$.fog,k=re.geometry,X=y.isMeshStandardMaterial?$.environment:null,Z=(y.isMeshStandardMaterial?t:e).get(y.envMap||X),Q=!!Z&&Z.mapping===ul?Z.image.height:null,I=x[y.type];y.precision!==null&&(g=r.getMaxPrecision(y.precision),g!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",g,"instead."));const P=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,N=P!==void 0?P.length:0;let Y=0;k.morphAttributes.position!==void 0&&(Y=1),k.morphAttributes.normal!==void 0&&(Y=2),k.morphAttributes.color!==void 0&&(Y=3);let q,K,oe,_e;if(I){const Ue=Fn[I];q=Ue.vertexShader,K=Ue.fragmentShader}else q=y.vertexShader,K=y.fragmentShader,l.update(y),oe=l.getVertexShaderID(y),_e=l.getFragmentShaderID(y);const H=n.getRenderTarget(),Pe=y.alphaTest>0,ye=y.clearcoat>0,Se=y.iridescence>0;return{isWebGL2:c,shaderID:I,shaderName:y.type,vertexShader:q,fragmentShader:K,defines:y.defines,customVertexShaderID:oe,customFragmentShaderID:_e,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:g,instancing:re.isInstancedMesh===!0,instancingColor:re.isInstancedMesh===!0&&re.instanceColor!==null,supportsVertexTextures:f,outputEncoding:H===null?n.outputEncoding:H.isXRRenderTarget===!0?H.texture.encoding:pr,map:!!y.map,matcap:!!y.matcap,envMap:!!Z,envMapMode:Z&&Z.mapping,envMapCubeUVHeight:Q,lightMap:!!y.lightMap,aoMap:!!y.aoMap,emissiveMap:!!y.emissiveMap,bumpMap:!!y.bumpMap,normalMap:!!y.normalMap,objectSpaceNormalMap:y.normalMapType===fx,tangentSpaceNormalMap:y.normalMapType===cx,decodeVideoTexture:!!y.map&&y.map.isVideoTexture===!0&&y.map.encoding===tt,clearcoat:ye,clearcoatMap:ye&&!!y.clearcoatMap,clearcoatRoughnessMap:ye&&!!y.clearcoatRoughnessMap,clearcoatNormalMap:ye&&!!y.clearcoatNormalMap,iridescence:Se,iridescenceMap:Se&&!!y.iridescenceMap,iridescenceThicknessMap:Se&&!!y.iridescenceThicknessMap,displacementMap:!!y.displacementMap,roughnessMap:!!y.roughnessMap,metalnessMap:!!y.metalnessMap,specularMap:!!y.specularMap,specularIntensityMap:!!y.specularIntensityMap,specularColorMap:!!y.specularColorMap,opaque:y.transparent===!1&&y.blending===ss,alphaMap:!!y.alphaMap,alphaTest:Pe,gradientMap:!!y.gradientMap,sheen:y.sheen>0,sheenColorMap:!!y.sheenColorMap,sheenRoughnessMap:!!y.sheenRoughnessMap,transmission:y.transmission>0,transmissionMap:!!y.transmissionMap,thicknessMap:!!y.thicknessMap,combine:y.combine,vertexTangents:!!y.normalMap&&!!k.attributes.tangent,vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,vertexUvs:!!y.map||!!y.bumpMap||!!y.normalMap||!!y.specularMap||!!y.alphaMap||!!y.emissiveMap||!!y.roughnessMap||!!y.metalnessMap||!!y.clearcoatMap||!!y.clearcoatRoughnessMap||!!y.clearcoatNormalMap||!!y.iridescenceMap||!!y.iridescenceThicknessMap||!!y.displacementMap||!!y.transmissionMap||!!y.thicknessMap||!!y.specularIntensityMap||!!y.specularColorMap||!!y.sheenColorMap||!!y.sheenRoughnessMap,uvsVertexOnly:!(!!y.map||!!y.bumpMap||!!y.normalMap||!!y.specularMap||!!y.alphaMap||!!y.emissiveMap||!!y.roughnessMap||!!y.metalnessMap||!!y.clearcoatNormalMap||!!y.iridescenceMap||!!y.iridescenceThicknessMap||y.transmission>0||!!y.transmissionMap||!!y.thicknessMap||!!y.specularIntensityMap||!!y.specularColorMap||y.sheen>0||!!y.sheenColorMap||!!y.sheenRoughnessMap)&&!!y.displacementMap,fog:!!B,useFog:y.fog===!0,fogExp2:B&&B.isFogExp2,flatShading:!!y.flatShading,sizeAttenuation:y.sizeAttenuation,logarithmicDepthBuffer:d,skinning:re.isSkinnedMesh===!0,morphTargets:k.morphAttributes.position!==void 0,morphNormals:k.morphAttributes.normal!==void 0,morphColors:k.morphAttributes.color!==void 0,morphTargetsCount:N,morphTextureStride:Y,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:y.dithering,shadowMapEnabled:n.shadowMap.enabled&&R.length>0,shadowMapType:n.shadowMap.type,toneMapping:y.toneMapped?n.toneMapping:ii,physicallyCorrectLights:n.physicallyCorrectLights,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===ti,flipSided:y.side===mn,useDepthPacking:!!y.depthPacking,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionDerivatives:y.extensions&&y.extensions.derivatives,extensionFragDepth:y.extensions&&y.extensions.fragDepth,extensionDrawBuffers:y.extensions&&y.extensions.drawBuffers,extensionShaderTextureLOD:y.extensions&&y.extensions.shaderTextureLOD,rendererExtensionFragDepth:c||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:c||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:c||i.has("EXT_shader_texture_lod"),customProgramCacheKey:y.customProgramCacheKey()}}function h(y){const b=[];if(y.shaderID?b.push(y.shaderID):(b.push(y.customVertexShaderID),b.push(y.customFragmentShaderID)),y.defines!==void 0)for(const R in y.defines)b.push(R),b.push(y.defines[R]);return y.isRawShaderMaterial===!1&&(m(b,y),v(b,y),b.push(n.outputEncoding)),b.push(y.customProgramCacheKey),b.join()}function m(y,b){y.push(b.precision),y.push(b.outputEncoding),y.push(b.envMapMode),y.push(b.envMapCubeUVHeight),y.push(b.combine),y.push(b.vertexUvs),y.push(b.fogExp2),y.push(b.sizeAttenuation),y.push(b.morphTargetsCount),y.push(b.morphAttributeCount),y.push(b.numDirLights),y.push(b.numPointLights),y.push(b.numSpotLights),y.push(b.numSpotLightMaps),y.push(b.numHemiLights),y.push(b.numRectAreaLights),y.push(b.numDirLightShadows),y.push(b.numPointLightShadows),y.push(b.numSpotLightShadows),y.push(b.numSpotLightShadowsWithMaps),y.push(b.shadowMapType),y.push(b.toneMapping),y.push(b.numClippingPlanes),y.push(b.numClipIntersection),y.push(b.depthPacking)}function v(y,b){a.disableAll(),b.isWebGL2&&a.enable(0),b.supportsVertexTextures&&a.enable(1),b.instancing&&a.enable(2),b.instancingColor&&a.enable(3),b.map&&a.enable(4),b.matcap&&a.enable(5),b.envMap&&a.enable(6),b.lightMap&&a.enable(7),b.aoMap&&a.enable(8),b.emissiveMap&&a.enable(9),b.bumpMap&&a.enable(10),b.normalMap&&a.enable(11),b.objectSpaceNormalMap&&a.enable(12),b.tangentSpaceNormalMap&&a.enable(13),b.clearcoat&&a.enable(14),b.clearcoatMap&&a.enable(15),b.clearcoatRoughnessMap&&a.enable(16),b.clearcoatNormalMap&&a.enable(17),b.iridescence&&a.enable(18),b.iridescenceMap&&a.enable(19),b.iridescenceThicknessMap&&a.enable(20),b.displacementMap&&a.enable(21),b.specularMap&&a.enable(22),b.roughnessMap&&a.enable(23),b.metalnessMap&&a.enable(24),b.gradientMap&&a.enable(25),b.alphaMap&&a.enable(26),b.alphaTest&&a.enable(27),b.vertexColors&&a.enable(28),b.vertexAlphas&&a.enable(29),b.vertexUvs&&a.enable(30),b.vertexTangents&&a.enable(31),b.uvsVertexOnly&&a.enable(32),y.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.skinning&&a.enable(4),b.morphTargets&&a.enable(5),b.morphNormals&&a.enable(6),b.morphColors&&a.enable(7),b.premultipliedAlpha&&a.enable(8),b.shadowMapEnabled&&a.enable(9),b.physicallyCorrectLights&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.specularIntensityMap&&a.enable(15),b.specularColorMap&&a.enable(16),b.transmission&&a.enable(17),b.transmissionMap&&a.enable(18),b.thicknessMap&&a.enable(19),b.sheen&&a.enable(20),b.sheenColorMap&&a.enable(21),b.sheenRoughnessMap&&a.enable(22),b.decodeVideoTexture&&a.enable(23),b.opaque&&a.enable(24),y.push(a.mask)}function _(y){const b=x[y.type];let R;if(b){const $=Fn[b];R=Lg.clone($.uniforms)}else R=y.uniforms;return R}function M(y,b){let R;for(let $=0,re=u.length;$<re;$++){const B=u[$];if(B.cacheKey===b){R=B,++R.usedTimes;break}}return R===void 0&&(R=new FM(n,b,y,s),u.push(R)),R}function S(y){if(--y.usedTimes===0){const b=u.indexOf(y);u[b]=u[u.length-1],u.pop(),y.destroy()}}function C(y){l.remove(y)}function L(){l.dispose()}return{getParameters:p,getProgramCacheKey:h,getUniforms:_,acquireProgram:M,releaseProgram:S,releaseShaderCache:C,programs:u,dispose:L}}function VM(){let n=new WeakMap;function e(s){let o=n.get(s);return o===void 0&&(o={},n.set(s,o)),o}function t(s){n.delete(s)}function i(s,o,a){n.get(s)[o]=a}function r(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:r}}function GM(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function $h(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Zh(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function o(d,f,g,x,p,h){let m=n[e];return m===void 0?(m={id:d.id,object:d,geometry:f,material:g,groupOrder:x,renderOrder:d.renderOrder,z:p,group:h},n[e]=m):(m.id=d.id,m.object=d,m.geometry=f,m.material=g,m.groupOrder=x,m.renderOrder=d.renderOrder,m.z=p,m.group=h),e++,m}function a(d,f,g,x,p,h){const m=o(d,f,g,x,p,h);g.transmission>0?i.push(m):g.transparent===!0?r.push(m):t.push(m)}function l(d,f,g,x,p,h){const m=o(d,f,g,x,p,h);g.transmission>0?i.unshift(m):g.transparent===!0?r.unshift(m):t.unshift(m)}function u(d,f){t.length>1&&t.sort(d||GM),i.length>1&&i.sort(f||$h),r.length>1&&r.sort(f||$h)}function c(){for(let d=e,f=n.length;d<f;d++){const g=n[d];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:c,sort:u}}function HM(){let n=new WeakMap;function e(i,r){const s=n.get(i);let o;return s===void 0?(o=new Zh,n.set(i,[o])):r>=s.length?(o=new Zh,s.push(o)):o=s[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function WM(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new O,color:new $e};break;case"SpotLight":t={position:new O,direction:new O,color:new $e,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new O,color:new $e,distance:0,decay:0};break;case"HemisphereLight":t={direction:new O,skyColor:new $e,groundColor:new $e};break;case"RectAreaLight":t={color:new $e,position:new O,halfWidth:new O,halfHeight:new O};break}return n[e.id]=t,t}}}function jM(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new we};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new we};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new we,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let XM=0;function qM(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function YM(n,e){const t=new WM,i=jM(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let c=0;c<9;c++)r.probe.push(new O);const s=new O,o=new wt,a=new wt;function l(c,d){let f=0,g=0,x=0;for(let $=0;$<9;$++)r.probe[$].set(0,0,0);let p=0,h=0,m=0,v=0,_=0,M=0,S=0,C=0,L=0,y=0;c.sort(qM);const b=d!==!0?Math.PI:1;for(let $=0,re=c.length;$<re;$++){const B=c[$],k=B.color,X=B.intensity,Z=B.distance,Q=B.shadow&&B.shadow.map?B.shadow.map.texture:null;if(B.isAmbientLight)f+=k.r*X*b,g+=k.g*X*b,x+=k.b*X*b;else if(B.isLightProbe)for(let I=0;I<9;I++)r.probe[I].addScaledVector(B.sh.coefficients[I],X);else if(B.isDirectionalLight){const I=t.get(B);if(I.color.copy(B.color).multiplyScalar(B.intensity*b),B.castShadow){const P=B.shadow,N=i.get(B);N.shadowBias=P.bias,N.shadowNormalBias=P.normalBias,N.shadowRadius=P.radius,N.shadowMapSize=P.mapSize,r.directionalShadow[p]=N,r.directionalShadowMap[p]=Q,r.directionalShadowMatrix[p]=B.shadow.matrix,M++}r.directional[p]=I,p++}else if(B.isSpotLight){const I=t.get(B);I.position.setFromMatrixPosition(B.matrixWorld),I.color.copy(k).multiplyScalar(X*b),I.distance=Z,I.coneCos=Math.cos(B.angle),I.penumbraCos=Math.cos(B.angle*(1-B.penumbra)),I.decay=B.decay,r.spot[m]=I;const P=B.shadow;if(B.map&&(r.spotLightMap[L]=B.map,L++,P.updateMatrices(B),B.castShadow&&y++),r.spotLightMatrix[m]=P.matrix,B.castShadow){const N=i.get(B);N.shadowBias=P.bias,N.shadowNormalBias=P.normalBias,N.shadowRadius=P.radius,N.shadowMapSize=P.mapSize,r.spotShadow[m]=N,r.spotShadowMap[m]=Q,C++}m++}else if(B.isRectAreaLight){const I=t.get(B);I.color.copy(k).multiplyScalar(X),I.halfWidth.set(B.width*.5,0,0),I.halfHeight.set(0,B.height*.5,0),r.rectArea[v]=I,v++}else if(B.isPointLight){const I=t.get(B);if(I.color.copy(B.color).multiplyScalar(B.intensity*b),I.distance=B.distance,I.decay=B.decay,B.castShadow){const P=B.shadow,N=i.get(B);N.shadowBias=P.bias,N.shadowNormalBias=P.normalBias,N.shadowRadius=P.radius,N.shadowMapSize=P.mapSize,N.shadowCameraNear=P.camera.near,N.shadowCameraFar=P.camera.far,r.pointShadow[h]=N,r.pointShadowMap[h]=Q,r.pointShadowMatrix[h]=B.shadow.matrix,S++}r.point[h]=I,h++}else if(B.isHemisphereLight){const I=t.get(B);I.skyColor.copy(B.color).multiplyScalar(X*b),I.groundColor.copy(B.groundColor).multiplyScalar(X*b),r.hemi[_]=I,_++}}v>0&&(e.isWebGL2||n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=ie.LTC_FLOAT_1,r.rectAreaLTC2=ie.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=ie.LTC_HALF_1,r.rectAreaLTC2=ie.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=f,r.ambient[1]=g,r.ambient[2]=x;const R=r.hash;(R.directionalLength!==p||R.pointLength!==h||R.spotLength!==m||R.rectAreaLength!==v||R.hemiLength!==_||R.numDirectionalShadows!==M||R.numPointShadows!==S||R.numSpotShadows!==C||R.numSpotMaps!==L)&&(r.directional.length=p,r.spot.length=m,r.rectArea.length=v,r.point.length=h,r.hemi.length=_,r.directionalShadow.length=M,r.directionalShadowMap.length=M,r.pointShadow.length=S,r.pointShadowMap.length=S,r.spotShadow.length=C,r.spotShadowMap.length=C,r.directionalShadowMatrix.length=M,r.pointShadowMatrix.length=S,r.spotLightMatrix.length=C+L-y,r.spotLightMap.length=L,r.numSpotLightShadowsWithMaps=y,R.directionalLength=p,R.pointLength=h,R.spotLength=m,R.rectAreaLength=v,R.hemiLength=_,R.numDirectionalShadows=M,R.numPointShadows=S,R.numSpotShadows=C,R.numSpotMaps=L,r.version=XM++)}function u(c,d){let f=0,g=0,x=0,p=0,h=0;const m=d.matrixWorldInverse;for(let v=0,_=c.length;v<_;v++){const M=c[v];if(M.isDirectionalLight){const S=r.directional[f];S.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(m),f++}else if(M.isSpotLight){const S=r.spot[x];S.position.setFromMatrixPosition(M.matrixWorld),S.position.applyMatrix4(m),S.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(m),x++}else if(M.isRectAreaLight){const S=r.rectArea[p];S.position.setFromMatrixPosition(M.matrixWorld),S.position.applyMatrix4(m),a.identity(),o.copy(M.matrixWorld),o.premultiply(m),a.extractRotation(o),S.halfWidth.set(M.width*.5,0,0),S.halfHeight.set(0,M.height*.5,0),S.halfWidth.applyMatrix4(a),S.halfHeight.applyMatrix4(a),p++}else if(M.isPointLight){const S=r.point[g];S.position.setFromMatrixPosition(M.matrixWorld),S.position.applyMatrix4(m),g++}else if(M.isHemisphereLight){const S=r.hemi[h];S.direction.setFromMatrixPosition(M.matrixWorld),S.direction.transformDirection(m),h++}}}return{setup:l,setupView:u,state:r}}function Kh(n,e){const t=new YM(n,e),i=[],r=[];function s(){i.length=0,r.length=0}function o(d){i.push(d)}function a(d){r.push(d)}function l(d){t.setup(i,d)}function u(d){t.setupView(i,d)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:t},setupLights:l,setupLightsView:u,pushLight:o,pushShadow:a}}function $M(n,e){let t=new WeakMap;function i(s,o=0){const a=t.get(s);let l;return a===void 0?(l=new Kh(n,e),t.set(s,[l])):o>=a.length?(l=new Kh(n,e),a.push(l)):l=a[o],l}function r(){t=new WeakMap}return{get:i,dispose:r}}class ZM extends fl{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=lx,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class KM extends fl{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new O,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const QM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,JM=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function ew(n,e,t){let i=new Rg;const r=new we,s=new we,o=new St,a=new ZM({depthPacking:ux}),l=new KM,u={},c=t.maxTextureSize,d={0:mn,1:ps,2:ti},f=new Gn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new we},radius:{value:4}},vertexShader:QM,fragmentShader:JM}),g=f.clone();g.defines.HORIZONTAL_PASS=1;const x=new ui;x.setAttribute("position",new Vn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const p=new On(x,f),h=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=pg,this.render=function(M,S,C){if(h.enabled===!1||h.autoUpdate===!1&&h.needsUpdate===!1||M.length===0)return;const L=n.getRenderTarget(),y=n.getActiveCubeFace(),b=n.getActiveMipmapLevel(),R=n.state;R.setBlending(Ii),R.buffers.color.setClear(1,1,1,1),R.buffers.depth.setTest(!0),R.setScissorTest(!1);for(let $=0,re=M.length;$<re;$++){const B=M[$],k=B.shadow;if(k===void 0){console.warn("THREE.WebGLShadowMap:",B,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;r.copy(k.mapSize);const X=k.getFrameExtents();if(r.multiply(X),s.copy(k.mapSize),(r.x>c||r.y>c)&&(r.x>c&&(s.x=Math.floor(c/X.x),r.x=s.x*X.x,k.mapSize.x=s.x),r.y>c&&(s.y=Math.floor(c/X.y),r.y=s.y*X.y,k.mapSize.y=s.y)),k.map===null){const Q=this.type!==Bs?{minFilter:Ot,magFilter:Ot}:{};k.map=new ki(r.x,r.y,Q),k.map.texture.name=B.name+".shadowMap",k.camera.updateProjectionMatrix()}n.setRenderTarget(k.map),n.clear();const Z=k.getViewportCount();for(let Q=0;Q<Z;Q++){const I=k.getViewport(Q);o.set(s.x*I.x,s.y*I.y,s.x*I.z,s.y*I.w),R.viewport(o),k.updateMatrices(B,Q),i=k.getFrustum(),_(S,C,k.camera,B,this.type)}k.isPointLightShadow!==!0&&this.type===Bs&&m(k,C),k.needsUpdate=!1}h.needsUpdate=!1,n.setRenderTarget(L,y,b)};function m(M,S){const C=e.update(p);f.defines.VSM_SAMPLES!==M.blurSamples&&(f.defines.VSM_SAMPLES=M.blurSamples,g.defines.VSM_SAMPLES=M.blurSamples,f.needsUpdate=!0,g.needsUpdate=!0),M.mapPass===null&&(M.mapPass=new ki(r.x,r.y)),f.uniforms.shadow_pass.value=M.map.texture,f.uniforms.resolution.value=M.mapSize,f.uniforms.radius.value=M.radius,n.setRenderTarget(M.mapPass),n.clear(),n.renderBufferDirect(S,null,C,f,p,null),g.uniforms.shadow_pass.value=M.mapPass.texture,g.uniforms.resolution.value=M.mapSize,g.uniforms.radius.value=M.radius,n.setRenderTarget(M.map),n.clear(),n.renderBufferDirect(S,null,C,g,p,null)}function v(M,S,C,L,y,b){let R=null;const $=C.isPointLight===!0?M.customDistanceMaterial:M.customDepthMaterial;if($!==void 0?R=$:R=C.isPointLight===!0?l:a,n.localClippingEnabled&&S.clipShadows===!0&&Array.isArray(S.clippingPlanes)&&S.clippingPlanes.length!==0||S.displacementMap&&S.displacementScale!==0||S.alphaMap&&S.alphaTest>0){const re=R.uuid,B=S.uuid;let k=u[re];k===void 0&&(k={},u[re]=k);let X=k[B];X===void 0&&(X=R.clone(),k[B]=X),R=X}return R.visible=S.visible,R.wireframe=S.wireframe,b===Bs?R.side=S.shadowSide!==null?S.shadowSide:S.side:R.side=S.shadowSide!==null?S.shadowSide:d[S.side],R.alphaMap=S.alphaMap,R.alphaTest=S.alphaTest,R.clipShadows=S.clipShadows,R.clippingPlanes=S.clippingPlanes,R.clipIntersection=S.clipIntersection,R.displacementMap=S.displacementMap,R.displacementScale=S.displacementScale,R.displacementBias=S.displacementBias,R.wireframeLinewidth=S.wireframeLinewidth,R.linewidth=S.linewidth,C.isPointLight===!0&&R.isMeshDistanceMaterial===!0&&(R.referencePosition.setFromMatrixPosition(C.matrixWorld),R.nearDistance=L,R.farDistance=y),R}function _(M,S,C,L,y){if(M.visible===!1)return;if(M.layers.test(S.layers)&&(M.isMesh||M.isLine||M.isPoints)&&(M.castShadow||M.receiveShadow&&y===Bs)&&(!M.frustumCulled||i.intersectsObject(M))){M.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,M.matrixWorld);const $=e.update(M),re=M.material;if(Array.isArray(re)){const B=$.groups;for(let k=0,X=B.length;k<X;k++){const Z=B[k],Q=re[Z.materialIndex];if(Q&&Q.visible){const I=v(M,Q,L,C.near,C.far,y);n.renderBufferDirect(C,null,$,I,M,Z)}}}else if(re.visible){const B=v(M,re,L,C.near,C.far,y);n.renderBufferDirect(C,null,$,B,M,null)}}const R=M.children;for(let $=0,re=R.length;$<re;$++)_(R[$],S,C,L,y)}}function tw(n,e,t){const i=t.isWebGL2;function r(){let D=!1;const W=new St;let ee=null;const ue=new St(0,0,0,0);return{setMask:function(me){ee!==me&&!D&&(n.colorMask(me,me,me,me),ee=me)},setLocked:function(me){D=me},setClear:function(me,Fe,gt,Tt,Vi){Vi===!0&&(me*=Tt,Fe*=Tt,gt*=Tt),W.set(me,Fe,gt,Tt),ue.equals(W)===!1&&(n.clearColor(me,Fe,gt,Tt),ue.copy(W))},reset:function(){D=!1,ee=null,ue.set(-1,0,0,0)}}}function s(){let D=!1,W=null,ee=null,ue=null;return{setTest:function(me){me?Pe(2929):ye(2929)},setMask:function(me){W!==me&&!D&&(n.depthMask(me),W=me)},setFunc:function(me){if(ee!==me){switch(me){case R_:n.depthFunc(512);break;case I_:n.depthFunc(519);break;case N_:n.depthFunc(513);break;case _c:n.depthFunc(515);break;case z_:n.depthFunc(514);break;case F_:n.depthFunc(518);break;case k_:n.depthFunc(516);break;case O_:n.depthFunc(517);break;default:n.depthFunc(515)}ee=me}},setLocked:function(me){D=me},setClear:function(me){ue!==me&&(n.clearDepth(me),ue=me)},reset:function(){D=!1,W=null,ee=null,ue=null}}}function o(){let D=!1,W=null,ee=null,ue=null,me=null,Fe=null,gt=null,Tt=null,Vi=null;return{setTest:function(qe){D||(qe?Pe(2960):ye(2960))},setMask:function(qe){W!==qe&&!D&&(n.stencilMask(qe),W=qe)},setFunc:function(qe,Hn,sn){(ee!==qe||ue!==Hn||me!==sn)&&(n.stencilFunc(qe,Hn,sn),ee=qe,ue=Hn,me=sn)},setOp:function(qe,Hn,sn){(Fe!==qe||gt!==Hn||Tt!==sn)&&(n.stencilOp(qe,Hn,sn),Fe=qe,gt=Hn,Tt=sn)},setLocked:function(qe){D=qe},setClear:function(qe){Vi!==qe&&(n.clearStencil(qe),Vi=qe)},reset:function(){D=!1,W=null,ee=null,ue=null,me=null,Fe=null,gt=null,Tt=null,Vi=null}}}const a=new r,l=new s,u=new o,c=new WeakMap,d=new WeakMap;let f={},g={},x=new WeakMap,p=[],h=null,m=!1,v=null,_=null,M=null,S=null,C=null,L=null,y=null,b=!1,R=null,$=null,re=null,B=null,k=null;const X=n.getParameter(35661);let Z=!1,Q=0;const I=n.getParameter(7938);I.indexOf("WebGL")!==-1?(Q=parseFloat(/^WebGL (\d)/.exec(I)[1]),Z=Q>=1):I.indexOf("OpenGL ES")!==-1&&(Q=parseFloat(/^OpenGL ES (\d)/.exec(I)[1]),Z=Q>=2);let P=null,N={};const Y=n.getParameter(3088),q=n.getParameter(2978),K=new St().fromArray(Y),oe=new St().fromArray(q);function _e(D,W,ee){const ue=new Uint8Array(4),me=n.createTexture();n.bindTexture(D,me),n.texParameteri(D,10241,9728),n.texParameteri(D,10240,9728);for(let Fe=0;Fe<ee;Fe++)n.texImage2D(W+Fe,0,6408,1,1,0,6408,5121,ue);return me}const H={};H[3553]=_e(3553,3553,1),H[34067]=_e(34067,34069,6),a.setClear(0,0,0,1),l.setClear(1),u.setClear(0),Pe(2929),l.setFunc(_c),lt(!1),Wt(Vd),Pe(2884),rt(Ii);function Pe(D){f[D]!==!0&&(n.enable(D),f[D]=!0)}function ye(D){f[D]!==!1&&(n.disable(D),f[D]=!1)}function Se(D,W){return g[D]!==W?(n.bindFramebuffer(D,W),g[D]=W,i&&(D===36009&&(g[36160]=W),D===36160&&(g[36009]=W)),!0):!1}function de(D,W){let ee=p,ue=!1;if(D)if(ee=x.get(W),ee===void 0&&(ee=[],x.set(W,ee)),D.isWebGLMultipleRenderTargets){const me=D.texture;if(ee.length!==me.length||ee[0]!==36064){for(let Fe=0,gt=me.length;Fe<gt;Fe++)ee[Fe]=36064+Fe;ee.length=me.length,ue=!0}}else ee[0]!==36064&&(ee[0]=36064,ue=!0);else ee[0]!==1029&&(ee[0]=1029,ue=!0);ue&&(t.isWebGL2?n.drawBuffers(ee):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(ee))}function Ue(D){return h!==D?(n.useProgram(D),h=D,!0):!1}const Ee={[Ur]:32774,[S_]:32778,[M_]:32779};if(i)Ee[jd]=32775,Ee[Xd]=32776;else{const D=e.get("EXT_blend_minmax");D!==null&&(Ee[jd]=D.MIN_EXT,Ee[Xd]=D.MAX_EXT)}const ve={[w_]:0,[E_]:1,[T_]:768,[mg]:770,[D_]:776,[L_]:774,[b_]:772,[C_]:769,[gg]:771,[P_]:775,[A_]:773};function rt(D,W,ee,ue,me,Fe,gt,Tt){if(D===Ii){m===!0&&(ye(3042),m=!1);return}if(m===!1&&(Pe(3042),m=!0),D!==y_){if(D!==v||Tt!==b){if((_!==Ur||C!==Ur)&&(n.blendEquation(32774),_=Ur,C=Ur),Tt)switch(D){case ss:n.blendFuncSeparate(1,771,1,771);break;case Gd:n.blendFunc(1,1);break;case Hd:n.blendFuncSeparate(0,769,0,1);break;case Wd:n.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case ss:n.blendFuncSeparate(770,771,1,771);break;case Gd:n.blendFunc(770,1);break;case Hd:n.blendFuncSeparate(0,769,0,1);break;case Wd:n.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}M=null,S=null,L=null,y=null,v=D,b=Tt}return}me=me||W,Fe=Fe||ee,gt=gt||ue,(W!==_||me!==C)&&(n.blendEquationSeparate(Ee[W],Ee[me]),_=W,C=me),(ee!==M||ue!==S||Fe!==L||gt!==y)&&(n.blendFuncSeparate(ve[ee],ve[ue],ve[Fe],ve[gt]),M=ee,S=ue,L=Fe,y=gt),v=D,b=null}function mt(D,W){D.side===ti?ye(2884):Pe(2884);let ee=D.side===mn;W&&(ee=!ee),lt(ee),D.blending===ss&&D.transparent===!1?rt(Ii):rt(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.premultipliedAlpha),l.setFunc(D.depthFunc),l.setTest(D.depthTest),l.setMask(D.depthWrite),a.setMask(D.colorWrite);const ue=D.stencilWrite;u.setTest(ue),ue&&(u.setMask(D.stencilWriteMask),u.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),u.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),Be(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?Pe(32926):ye(32926)}function lt(D){R!==D&&(D?n.frontFace(2304):n.frontFace(2305),R=D)}function Wt(D){D!==v_?(Pe(2884),D!==$&&(D===Vd?n.cullFace(1029):D===__?n.cullFace(1028):n.cullFace(1032))):ye(2884),$=D}function ut(D){D!==re&&(Z&&n.lineWidth(D),re=D)}function Be(D,W,ee){D?(Pe(32823),(B!==W||k!==ee)&&(n.polygonOffset(W,ee),B=W,k=ee)):ye(32823)}function nn(D){D?Pe(3089):ye(3089)}function rn(D){D===void 0&&(D=33984+X-1),P!==D&&(n.activeTexture(D),P=D)}function T(D,W,ee){ee===void 0&&(P===null?ee=33984+X-1:ee=P);let ue=N[ee];ue===void 0&&(ue={type:void 0,texture:void 0},N[ee]=ue),(ue.type!==D||ue.texture!==W)&&(P!==ee&&(n.activeTexture(ee),P=ee),n.bindTexture(D,W||H[D]),ue.type=D,ue.texture=W)}function w(){const D=N[P];D!==void 0&&D.type!==void 0&&(n.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function V(){try{n.compressedTexImage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function te(){try{n.compressedTexImage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ne(){try{n.texSubImage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function se(){try{n.texSubImage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function xe(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function A(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function z(){try{n.texStorage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function le(){try{n.texStorage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function fe(){try{n.texImage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ae(){try{n.texImage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function pe(D){K.equals(D)===!1&&(n.scissor(D.x,D.y,D.z,D.w),K.copy(D))}function he(D){oe.equals(D)===!1&&(n.viewport(D.x,D.y,D.z,D.w),oe.copy(D))}function De(D,W){let ee=d.get(W);ee===void 0&&(ee=new WeakMap,d.set(W,ee));let ue=ee.get(D);ue===void 0&&(ue=n.getUniformBlockIndex(W,D.name),ee.set(D,ue))}function Re(D,W){const ue=d.get(W).get(D);c.get(D)!==ue&&(n.uniformBlockBinding(W,ue,D.__bindingPointIndex),c.set(D,ue))}function Ge(){n.disable(3042),n.disable(2884),n.disable(2929),n.disable(32823),n.disable(3089),n.disable(2960),n.disable(32926),n.blendEquation(32774),n.blendFunc(1,0),n.blendFuncSeparate(1,0,1,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(513),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(519,0,4294967295),n.stencilOp(7680,7680,7680),n.clearStencil(0),n.cullFace(1029),n.frontFace(2305),n.polygonOffset(0,0),n.activeTexture(33984),n.bindFramebuffer(36160,null),i===!0&&(n.bindFramebuffer(36009,null),n.bindFramebuffer(36008,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),f={},P=null,N={},g={},x=new WeakMap,p=[],h=null,m=!1,v=null,_=null,M=null,S=null,C=null,L=null,y=null,b=!1,R=null,$=null,re=null,B=null,k=null,K.set(0,0,n.canvas.width,n.canvas.height),oe.set(0,0,n.canvas.width,n.canvas.height),a.reset(),l.reset(),u.reset()}return{buffers:{color:a,depth:l,stencil:u},enable:Pe,disable:ye,bindFramebuffer:Se,drawBuffers:de,useProgram:Ue,setBlending:rt,setMaterial:mt,setFlipSided:lt,setCullFace:Wt,setLineWidth:ut,setPolygonOffset:Be,setScissorTest:nn,activeTexture:rn,bindTexture:T,unbindTexture:w,compressedTexImage2D:V,compressedTexImage3D:te,texImage2D:fe,texImage3D:ae,updateUBOMapping:De,uniformBlockBinding:Re,texStorage2D:z,texStorage3D:le,texSubImage2D:ne,texSubImage3D:se,compressedTexSubImage2D:xe,compressedTexSubImage3D:A,scissor:pe,viewport:he,reset:Ge}}function nw(n,e,t,i,r,s,o){const a=r.isWebGL2,l=r.maxTextures,u=r.maxCubemapSize,c=r.maxTextureSize,d=r.maxSamples,f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,g=/OculusBrowser/g.test(typeof navigator>"u"?"":navigator.userAgent),x=new WeakMap;let p;const h=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(T,w){return m?new OffscreenCanvas(T,w):qa("canvas")}function _(T,w,V,te){let ne=1;if((T.width>te||T.height>te)&&(ne=te/Math.max(T.width,T.height)),ne<1||w===!0)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap){const se=w?Ec:Math.floor,xe=se(ne*T.width),A=se(ne*T.height);p===void 0&&(p=v(xe,A));const z=V?v(xe,A):p;return z.width=xe,z.height=A,z.getContext("2d").drawImage(T,0,0,xe,A),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+T.width+"x"+T.height+") to ("+xe+"x"+A+")."),z}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+T.width+"x"+T.height+")."),T;return T}function M(T){return xh(T.width)&&xh(T.height)}function S(T){return a?!1:T.wrapS!==bn||T.wrapT!==bn||T.minFilter!==Ot&&T.minFilter!==cn}function C(T,w){return T.generateMipmaps&&w&&T.minFilter!==Ot&&T.minFilter!==cn}function L(T){n.generateMipmap(T)}function y(T,w,V,te,ne=!1){if(a===!1)return w;if(T!==null){if(n[T]!==void 0)return n[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let se=w;return w===6403&&(V===5126&&(se=33326),V===5131&&(se=33325),V===5121&&(se=33321)),w===33319&&(V===5126&&(se=33328),V===5131&&(se=33327),V===5121&&(se=33323)),w===6408&&(V===5126&&(se=34836),V===5131&&(se=34842),V===5121&&(se=te===tt&&ne===!1?35907:32856),V===32819&&(se=32854),V===32820&&(se=32855)),(se===33325||se===33326||se===33327||se===33328||se===34842||se===34836)&&e.get("EXT_color_buffer_float"),se}function b(T,w,V){return C(T,V)===!0||T.isFramebufferTexture&&T.minFilter!==Ot&&T.minFilter!==cn?Math.log2(Math.max(w.width,w.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?w.mipmaps.length:1}function R(T){return T===Ot||T===qd||T===Yd?9728:9729}function $(T){const w=T.target;w.removeEventListener("dispose",$),B(w),w.isVideoTexture&&x.delete(w)}function re(T){const w=T.target;w.removeEventListener("dispose",re),X(w)}function B(T){const w=i.get(T);if(w.__webglInit===void 0)return;const V=T.source,te=h.get(V);if(te){const ne=te[w.__cacheKey];ne.usedTimes--,ne.usedTimes===0&&k(T),Object.keys(te).length===0&&h.delete(V)}i.remove(T)}function k(T){const w=i.get(T);n.deleteTexture(w.__webglTexture);const V=T.source,te=h.get(V);delete te[w.__cacheKey],o.memory.textures--}function X(T){const w=T.texture,V=i.get(T),te=i.get(w);if(te.__webglTexture!==void 0&&(n.deleteTexture(te.__webglTexture),o.memory.textures--),T.depthTexture&&T.depthTexture.dispose(),T.isWebGLCubeRenderTarget)for(let ne=0;ne<6;ne++)n.deleteFramebuffer(V.__webglFramebuffer[ne]),V.__webglDepthbuffer&&n.deleteRenderbuffer(V.__webglDepthbuffer[ne]);else{if(n.deleteFramebuffer(V.__webglFramebuffer),V.__webglDepthbuffer&&n.deleteRenderbuffer(V.__webglDepthbuffer),V.__webglMultisampledFramebuffer&&n.deleteFramebuffer(V.__webglMultisampledFramebuffer),V.__webglColorRenderbuffer)for(let ne=0;ne<V.__webglColorRenderbuffer.length;ne++)V.__webglColorRenderbuffer[ne]&&n.deleteRenderbuffer(V.__webglColorRenderbuffer[ne]);V.__webglDepthRenderbuffer&&n.deleteRenderbuffer(V.__webglDepthRenderbuffer)}if(T.isWebGLMultipleRenderTargets)for(let ne=0,se=w.length;ne<se;ne++){const xe=i.get(w[ne]);xe.__webglTexture&&(n.deleteTexture(xe.__webglTexture),o.memory.textures--),i.remove(w[ne])}i.remove(w),i.remove(T)}let Z=0;function Q(){Z=0}function I(){const T=Z;return T>=l&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+l),Z+=1,T}function P(T){const w=[];return w.push(T.wrapS),w.push(T.wrapT),w.push(T.wrapR||0),w.push(T.magFilter),w.push(T.minFilter),w.push(T.anisotropy),w.push(T.internalFormat),w.push(T.format),w.push(T.type),w.push(T.generateMipmaps),w.push(T.premultiplyAlpha),w.push(T.flipY),w.push(T.unpackAlignment),w.push(T.encoding),w.join()}function N(T,w){const V=i.get(T);if(T.isVideoTexture&&nn(T),T.isRenderTargetTexture===!1&&T.version>0&&V.__version!==T.version){const te=T.image;if(te===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(te.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ye(V,T,w);return}}t.bindTexture(3553,V.__webglTexture,33984+w)}function Y(T,w){const V=i.get(T);if(T.version>0&&V.__version!==T.version){ye(V,T,w);return}t.bindTexture(35866,V.__webglTexture,33984+w)}function q(T,w){const V=i.get(T);if(T.version>0&&V.__version!==T.version){ye(V,T,w);return}t.bindTexture(32879,V.__webglTexture,33984+w)}function K(T,w){const V=i.get(T);if(T.version>0&&V.__version!==T.version){Se(V,T,w);return}t.bindTexture(34067,V.__webglTexture,33984+w)}const oe={[Sc]:10497,[bn]:33071,[Mc]:33648},_e={[Ot]:9728,[qd]:9984,[Yd]:9986,[cn]:9729,[X_]:9985,[cl]:9987};function H(T,w,V){if(V?(n.texParameteri(T,10242,oe[w.wrapS]),n.texParameteri(T,10243,oe[w.wrapT]),(T===32879||T===35866)&&n.texParameteri(T,32882,oe[w.wrapR]),n.texParameteri(T,10240,_e[w.magFilter]),n.texParameteri(T,10241,_e[w.minFilter])):(n.texParameteri(T,10242,33071),n.texParameteri(T,10243,33071),(T===32879||T===35866)&&n.texParameteri(T,32882,33071),(w.wrapS!==bn||w.wrapT!==bn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(T,10240,R(w.magFilter)),n.texParameteri(T,10241,R(w.minFilter)),w.minFilter!==Ot&&w.minFilter!==cn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const te=e.get("EXT_texture_filter_anisotropic");if(w.type===nr&&e.has("OES_texture_float_linear")===!1||a===!1&&w.type===mo&&e.has("OES_texture_half_float_linear")===!1)return;(w.anisotropy>1||i.get(w).__currentAnisotropy)&&(n.texParameterf(T,te.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,r.getMaxAnisotropy())),i.get(w).__currentAnisotropy=w.anisotropy)}}function Pe(T,w){let V=!1;T.__webglInit===void 0&&(T.__webglInit=!0,w.addEventListener("dispose",$));const te=w.source;let ne=h.get(te);ne===void 0&&(ne={},h.set(te,ne));const se=P(w);if(se!==T.__cacheKey){ne[se]===void 0&&(ne[se]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,V=!0),ne[se].usedTimes++;const xe=ne[T.__cacheKey];xe!==void 0&&(ne[T.__cacheKey].usedTimes--,xe.usedTimes===0&&k(w)),T.__cacheKey=se,T.__webglTexture=ne[se].texture}return V}function ye(T,w,V){let te=3553;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(te=35866),w.isData3DTexture&&(te=32879);const ne=Pe(T,w),se=w.source;t.bindTexture(te,T.__webglTexture,33984+V);const xe=i.get(se);if(se.version!==xe.__version||ne===!0){t.activeTexture(33984+V),n.pixelStorei(37440,w.flipY),n.pixelStorei(37441,w.premultiplyAlpha),n.pixelStorei(3317,w.unpackAlignment),n.pixelStorei(37443,0);const A=S(w)&&M(w.image)===!1;let z=_(w.image,A,!1,c);z=rn(w,z);const le=M(z)||a,fe=s.convert(w.format,w.encoding);let ae=s.convert(w.type),pe=y(w.internalFormat,fe,ae,w.encoding,w.isVideoTexture);H(te,w,le);let he;const De=w.mipmaps,Re=a&&w.isVideoTexture!==!0,Ge=xe.__version===void 0||ne===!0,D=b(w,z,le);if(w.isDepthTexture)pe=6402,a?w.type===nr?pe=36012:w.type===tr?pe=33190:w.type===os?pe=35056:pe=33189:w.type===nr&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),w.format===or&&pe===6402&&w.type!==xg&&w.type!==tr&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),w.type=tr,ae=s.convert(w.type)),w.format===vs&&pe===6402&&(pe=34041,w.type!==os&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),w.type=os,ae=s.convert(w.type))),Ge&&(Re?t.texStorage2D(3553,1,pe,z.width,z.height):t.texImage2D(3553,0,pe,z.width,z.height,0,fe,ae,null));else if(w.isDataTexture)if(De.length>0&&le){Re&&Ge&&t.texStorage2D(3553,D,pe,De[0].width,De[0].height);for(let W=0,ee=De.length;W<ee;W++)he=De[W],Re?t.texSubImage2D(3553,W,0,0,he.width,he.height,fe,ae,he.data):t.texImage2D(3553,W,pe,he.width,he.height,0,fe,ae,he.data);w.generateMipmaps=!1}else Re?(Ge&&t.texStorage2D(3553,D,pe,z.width,z.height),t.texSubImage2D(3553,0,0,0,z.width,z.height,fe,ae,z.data)):t.texImage2D(3553,0,pe,z.width,z.height,0,fe,ae,z.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){Re&&Ge&&t.texStorage3D(35866,D,pe,De[0].width,De[0].height,z.depth);for(let W=0,ee=De.length;W<ee;W++)he=De[W],w.format!==An?fe!==null?Re?t.compressedTexSubImage3D(35866,W,0,0,0,he.width,he.height,z.depth,fe,he.data,0,0):t.compressedTexImage3D(35866,W,pe,he.width,he.height,z.depth,0,he.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Re?t.texSubImage3D(35866,W,0,0,0,he.width,he.height,z.depth,fe,ae,he.data):t.texImage3D(35866,W,pe,he.width,he.height,z.depth,0,fe,ae,he.data)}else{Re&&Ge&&t.texStorage2D(3553,D,pe,De[0].width,De[0].height);for(let W=0,ee=De.length;W<ee;W++)he=De[W],w.format!==An?fe!==null?Re?t.compressedTexSubImage2D(3553,W,0,0,he.width,he.height,fe,he.data):t.compressedTexImage2D(3553,W,pe,he.width,he.height,0,he.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Re?t.texSubImage2D(3553,W,0,0,he.width,he.height,fe,ae,he.data):t.texImage2D(3553,W,pe,he.width,he.height,0,fe,ae,he.data)}else if(w.isDataArrayTexture)Re?(Ge&&t.texStorage3D(35866,D,pe,z.width,z.height,z.depth),t.texSubImage3D(35866,0,0,0,0,z.width,z.height,z.depth,fe,ae,z.data)):t.texImage3D(35866,0,pe,z.width,z.height,z.depth,0,fe,ae,z.data);else if(w.isData3DTexture)Re?(Ge&&t.texStorage3D(32879,D,pe,z.width,z.height,z.depth),t.texSubImage3D(32879,0,0,0,0,z.width,z.height,z.depth,fe,ae,z.data)):t.texImage3D(32879,0,pe,z.width,z.height,z.depth,0,fe,ae,z.data);else if(w.isFramebufferTexture){if(Ge)if(Re)t.texStorage2D(3553,D,pe,z.width,z.height);else{let W=z.width,ee=z.height;for(let ue=0;ue<D;ue++)t.texImage2D(3553,ue,pe,W,ee,0,fe,ae,null),W>>=1,ee>>=1}}else if(De.length>0&&le){Re&&Ge&&t.texStorage2D(3553,D,pe,De[0].width,De[0].height);for(let W=0,ee=De.length;W<ee;W++)he=De[W],Re?t.texSubImage2D(3553,W,0,0,fe,ae,he):t.texImage2D(3553,W,pe,fe,ae,he);w.generateMipmaps=!1}else Re?(Ge&&t.texStorage2D(3553,D,pe,z.width,z.height),t.texSubImage2D(3553,0,0,0,fe,ae,z)):t.texImage2D(3553,0,pe,fe,ae,z);C(w,le)&&L(te),xe.__version=se.version,w.onUpdate&&w.onUpdate(w)}T.__version=w.version}function Se(T,w,V){if(w.image.length!==6)return;const te=Pe(T,w),ne=w.source;t.bindTexture(34067,T.__webglTexture,33984+V);const se=i.get(ne);if(ne.version!==se.__version||te===!0){t.activeTexture(33984+V),n.pixelStorei(37440,w.flipY),n.pixelStorei(37441,w.premultiplyAlpha),n.pixelStorei(3317,w.unpackAlignment),n.pixelStorei(37443,0);const xe=w.isCompressedTexture||w.image[0].isCompressedTexture,A=w.image[0]&&w.image[0].isDataTexture,z=[];for(let W=0;W<6;W++)!xe&&!A?z[W]=_(w.image[W],!1,!0,u):z[W]=A?w.image[W].image:w.image[W],z[W]=rn(w,z[W]);const le=z[0],fe=M(le)||a,ae=s.convert(w.format,w.encoding),pe=s.convert(w.type),he=y(w.internalFormat,ae,pe,w.encoding),De=a&&w.isVideoTexture!==!0,Re=se.__version===void 0||te===!0;let Ge=b(w,le,fe);H(34067,w,fe);let D;if(xe){De&&Re&&t.texStorage2D(34067,Ge,he,le.width,le.height);for(let W=0;W<6;W++){D=z[W].mipmaps;for(let ee=0;ee<D.length;ee++){const ue=D[ee];w.format!==An?ae!==null?De?t.compressedTexSubImage2D(34069+W,ee,0,0,ue.width,ue.height,ae,ue.data):t.compressedTexImage2D(34069+W,ee,he,ue.width,ue.height,0,ue.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):De?t.texSubImage2D(34069+W,ee,0,0,ue.width,ue.height,ae,pe,ue.data):t.texImage2D(34069+W,ee,he,ue.width,ue.height,0,ae,pe,ue.data)}}}else{D=w.mipmaps,De&&Re&&(D.length>0&&Ge++,t.texStorage2D(34067,Ge,he,z[0].width,z[0].height));for(let W=0;W<6;W++)if(A){De?t.texSubImage2D(34069+W,0,0,0,z[W].width,z[W].height,ae,pe,z[W].data):t.texImage2D(34069+W,0,he,z[W].width,z[W].height,0,ae,pe,z[W].data);for(let ee=0;ee<D.length;ee++){const me=D[ee].image[W].image;De?t.texSubImage2D(34069+W,ee+1,0,0,me.width,me.height,ae,pe,me.data):t.texImage2D(34069+W,ee+1,he,me.width,me.height,0,ae,pe,me.data)}}else{De?t.texSubImage2D(34069+W,0,0,0,ae,pe,z[W]):t.texImage2D(34069+W,0,he,ae,pe,z[W]);for(let ee=0;ee<D.length;ee++){const ue=D[ee];De?t.texSubImage2D(34069+W,ee+1,0,0,ae,pe,ue.image[W]):t.texImage2D(34069+W,ee+1,he,ae,pe,ue.image[W])}}}C(w,fe)&&L(34067),se.__version=ne.version,w.onUpdate&&w.onUpdate(w)}T.__version=w.version}function de(T,w,V,te,ne){const se=s.convert(V.format,V.encoding),xe=s.convert(V.type),A=y(V.internalFormat,se,xe,V.encoding);i.get(w).__hasExternalTextures||(ne===32879||ne===35866?t.texImage3D(ne,0,A,w.width,w.height,w.depth,0,se,xe,null):t.texImage2D(ne,0,A,w.width,w.height,0,se,xe,null)),t.bindFramebuffer(36160,T),Be(w)?f.framebufferTexture2DMultisampleEXT(36160,te,ne,i.get(V).__webglTexture,0,ut(w)):(ne===3553||ne>=34069&&ne<=34074)&&n.framebufferTexture2D(36160,te,ne,i.get(V).__webglTexture,0),t.bindFramebuffer(36160,null)}function Ue(T,w,V){if(n.bindRenderbuffer(36161,T),w.depthBuffer&&!w.stencilBuffer){let te=33189;if(V||Be(w)){const ne=w.depthTexture;ne&&ne.isDepthTexture&&(ne.type===nr?te=36012:ne.type===tr&&(te=33190));const se=ut(w);Be(w)?f.renderbufferStorageMultisampleEXT(36161,se,te,w.width,w.height):n.renderbufferStorageMultisample(36161,se,te,w.width,w.height)}else n.renderbufferStorage(36161,te,w.width,w.height);n.framebufferRenderbuffer(36160,36096,36161,T)}else if(w.depthBuffer&&w.stencilBuffer){const te=ut(w);V&&Be(w)===!1?n.renderbufferStorageMultisample(36161,te,35056,w.width,w.height):Be(w)?f.renderbufferStorageMultisampleEXT(36161,te,35056,w.width,w.height):n.renderbufferStorage(36161,34041,w.width,w.height),n.framebufferRenderbuffer(36160,33306,36161,T)}else{const te=w.isWebGLMultipleRenderTargets===!0?w.texture:[w.texture];for(let ne=0;ne<te.length;ne++){const se=te[ne],xe=s.convert(se.format,se.encoding),A=s.convert(se.type),z=y(se.internalFormat,xe,A,se.encoding),le=ut(w);V&&Be(w)===!1?n.renderbufferStorageMultisample(36161,le,z,w.width,w.height):Be(w)?f.renderbufferStorageMultisampleEXT(36161,le,z,w.width,w.height):n.renderbufferStorage(36161,z,w.width,w.height)}}n.bindRenderbuffer(36161,null)}function Ee(T,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,T),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(w.depthTexture).__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),N(w.depthTexture,0);const te=i.get(w.depthTexture).__webglTexture,ne=ut(w);if(w.depthTexture.format===or)Be(w)?f.framebufferTexture2DMultisampleEXT(36160,36096,3553,te,0,ne):n.framebufferTexture2D(36160,36096,3553,te,0);else if(w.depthTexture.format===vs)Be(w)?f.framebufferTexture2DMultisampleEXT(36160,33306,3553,te,0,ne):n.framebufferTexture2D(36160,33306,3553,te,0);else throw new Error("Unknown depthTexture format")}function ve(T){const w=i.get(T),V=T.isWebGLCubeRenderTarget===!0;if(T.depthTexture&&!w.__autoAllocateDepthBuffer){if(V)throw new Error("target.depthTexture not supported in Cube render targets");Ee(w.__webglFramebuffer,T)}else if(V){w.__webglDepthbuffer=[];for(let te=0;te<6;te++)t.bindFramebuffer(36160,w.__webglFramebuffer[te]),w.__webglDepthbuffer[te]=n.createRenderbuffer(),Ue(w.__webglDepthbuffer[te],T,!1)}else t.bindFramebuffer(36160,w.__webglFramebuffer),w.__webglDepthbuffer=n.createRenderbuffer(),Ue(w.__webglDepthbuffer,T,!1);t.bindFramebuffer(36160,null)}function rt(T,w,V){const te=i.get(T);w!==void 0&&de(te.__webglFramebuffer,T,T.texture,36064,3553),V!==void 0&&ve(T)}function mt(T){const w=T.texture,V=i.get(T),te=i.get(w);T.addEventListener("dispose",re),T.isWebGLMultipleRenderTargets!==!0&&(te.__webglTexture===void 0&&(te.__webglTexture=n.createTexture()),te.__version=w.version,o.memory.textures++);const ne=T.isWebGLCubeRenderTarget===!0,se=T.isWebGLMultipleRenderTargets===!0,xe=M(T)||a;if(ne){V.__webglFramebuffer=[];for(let A=0;A<6;A++)V.__webglFramebuffer[A]=n.createFramebuffer()}else{if(V.__webglFramebuffer=n.createFramebuffer(),se)if(r.drawBuffers){const A=T.texture;for(let z=0,le=A.length;z<le;z++){const fe=i.get(A[z]);fe.__webglTexture===void 0&&(fe.__webglTexture=n.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&T.samples>0&&Be(T)===!1){const A=se?w:[w];V.__webglMultisampledFramebuffer=n.createFramebuffer(),V.__webglColorRenderbuffer=[],t.bindFramebuffer(36160,V.__webglMultisampledFramebuffer);for(let z=0;z<A.length;z++){const le=A[z];V.__webglColorRenderbuffer[z]=n.createRenderbuffer(),n.bindRenderbuffer(36161,V.__webglColorRenderbuffer[z]);const fe=s.convert(le.format,le.encoding),ae=s.convert(le.type),pe=y(le.internalFormat,fe,ae,le.encoding,T.isXRRenderTarget===!0),he=ut(T);n.renderbufferStorageMultisample(36161,he,pe,T.width,T.height),n.framebufferRenderbuffer(36160,36064+z,36161,V.__webglColorRenderbuffer[z])}n.bindRenderbuffer(36161,null),T.depthBuffer&&(V.__webglDepthRenderbuffer=n.createRenderbuffer(),Ue(V.__webglDepthRenderbuffer,T,!0)),t.bindFramebuffer(36160,null)}}if(ne){t.bindTexture(34067,te.__webglTexture),H(34067,w,xe);for(let A=0;A<6;A++)de(V.__webglFramebuffer[A],T,w,36064,34069+A);C(w,xe)&&L(34067),t.unbindTexture()}else if(se){const A=T.texture;for(let z=0,le=A.length;z<le;z++){const fe=A[z],ae=i.get(fe);t.bindTexture(3553,ae.__webglTexture),H(3553,fe,xe),de(V.__webglFramebuffer,T,fe,36064+z,3553),C(fe,xe)&&L(3553)}t.unbindTexture()}else{let A=3553;(T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(a?A=T.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(A,te.__webglTexture),H(A,w,xe),de(V.__webglFramebuffer,T,w,36064,A),C(w,xe)&&L(A),t.unbindTexture()}T.depthBuffer&&ve(T)}function lt(T){const w=M(T)||a,V=T.isWebGLMultipleRenderTargets===!0?T.texture:[T.texture];for(let te=0,ne=V.length;te<ne;te++){const se=V[te];if(C(se,w)){const xe=T.isWebGLCubeRenderTarget?34067:3553,A=i.get(se).__webglTexture;t.bindTexture(xe,A),L(xe),t.unbindTexture()}}}function Wt(T){if(a&&T.samples>0&&Be(T)===!1){const w=T.isWebGLMultipleRenderTargets?T.texture:[T.texture],V=T.width,te=T.height;let ne=16384;const se=[],xe=T.stencilBuffer?33306:36096,A=i.get(T),z=T.isWebGLMultipleRenderTargets===!0;if(z)for(let le=0;le<w.length;le++)t.bindFramebuffer(36160,A.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(36160,36064+le,36161,null),t.bindFramebuffer(36160,A.__webglFramebuffer),n.framebufferTexture2D(36009,36064+le,3553,null,0);t.bindFramebuffer(36008,A.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,A.__webglFramebuffer);for(let le=0;le<w.length;le++){se.push(36064+le),T.depthBuffer&&se.push(xe);const fe=A.__ignoreDepthValues!==void 0?A.__ignoreDepthValues:!1;if(fe===!1&&(T.depthBuffer&&(ne|=256),T.stencilBuffer&&(ne|=1024)),z&&n.framebufferRenderbuffer(36008,36064,36161,A.__webglColorRenderbuffer[le]),fe===!0&&(n.invalidateFramebuffer(36008,[xe]),n.invalidateFramebuffer(36009,[xe])),z){const ae=i.get(w[le]).__webglTexture;n.framebufferTexture2D(36009,36064,3553,ae,0)}n.blitFramebuffer(0,0,V,te,0,0,V,te,ne,9728),g&&n.invalidateFramebuffer(36008,se)}if(t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,null),z)for(let le=0;le<w.length;le++){t.bindFramebuffer(36160,A.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(36160,36064+le,36161,A.__webglColorRenderbuffer[le]);const fe=i.get(w[le]).__webglTexture;t.bindFramebuffer(36160,A.__webglFramebuffer),n.framebufferTexture2D(36009,36064+le,3553,fe,0)}t.bindFramebuffer(36009,A.__webglMultisampledFramebuffer)}}function ut(T){return Math.min(d,T.samples)}function Be(T){const w=i.get(T);return a&&T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function nn(T){const w=o.render.frame;x.get(T)!==w&&(x.set(T,w),T.update())}function rn(T,w){const V=T.encoding,te=T.format,ne=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||T.format===wc||V!==pr&&(V===tt?a===!1?e.has("EXT_sRGB")===!0&&te===An?(T.format=wc,T.minFilter=cn,T.generateMipmaps=!1):w=Mg.sRGBToLinear(w):(te!==An||ne!==hr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",V)),w}this.allocateTextureUnit=I,this.resetTextureUnits=Q,this.setTexture2D=N,this.setTexture2DArray=Y,this.setTexture3D=q,this.setTextureCube=K,this.rebindTextures=rt,this.setupRenderTarget=mt,this.updateRenderTargetMipmap=lt,this.updateMultisampleRenderTarget=Wt,this.setupDepthRenderbuffer=ve,this.setupFrameBufferTexture=de,this.useMultisampledRTT=Be}function iw(n,e,t){const i=t.isWebGL2;function r(s,o=null){let a;if(s===hr)return 5121;if(s===Z_)return 32819;if(s===K_)return 32820;if(s===q_)return 5120;if(s===Y_)return 5122;if(s===xg)return 5123;if(s===$_)return 5124;if(s===tr)return 5125;if(s===nr)return 5126;if(s===mo)return i?5131:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===Q_)return 6406;if(s===An)return 6408;if(s===ex)return 6409;if(s===tx)return 6410;if(s===or)return 6402;if(s===vs)return 34041;if(s===nx)return 6403;if(s===J_)return console.warn("THREE.WebGLRenderer: THREE.RGBFormat has been removed. Use THREE.RGBAFormat instead. https://github.com/mrdoob/three.js/pull/23228"),6408;if(s===wc)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===ix)return 36244;if(s===rx)return 33319;if(s===sx)return 33320;if(s===ox)return 36249;if(s===Xl||s===ql||s===Yl||s===$l)if(o===tt)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===Xl)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===ql)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Yl)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===$l)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===Xl)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===ql)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Yl)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===$l)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===$d||s===Zd||s===Kd||s===Qd)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===$d)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Zd)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Kd)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Qd)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===ax)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===Jd||s===eh)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===Jd)return o===tt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===eh)return o===tt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===th||s===nh||s===ih||s===rh||s===sh||s===oh||s===ah||s===lh||s===uh||s===ch||s===fh||s===dh||s===hh||s===ph)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===th)return o===tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===nh)return o===tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===ih)return o===tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===rh)return o===tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===sh)return o===tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===oh)return o===tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===ah)return o===tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===lh)return o===tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===uh)return o===tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===ch)return o===tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===fh)return o===tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===dh)return o===tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===hh)return o===tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===ph)return o===tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===mh)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===mh)return o===tt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;return s===os?i?34042:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):n[s]!==void 0?n[s]:null}return{convert:r}}class rw extends fn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class la extends Qt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const sw={type:"move"};class wu{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new la,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new la,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new O,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new O),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new la,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new O,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new O),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,u=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(u&&e.hand){o=!0;for(const p of e.hand.values()){const h=t.getJointPose(p,i);if(u.joints[p.jointName]===void 0){const v=new la;v.matrixAutoUpdate=!1,v.visible=!1,u.joints[p.jointName]=v,u.add(v)}const m=u.joints[p.jointName];h!==null&&(m.matrix.fromArray(h.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.jointRadius=h.radius),m.visible=h!==null}const c=u.joints["index-finger-tip"],d=u.joints["thumb-tip"],f=c.position.distanceTo(d.position),g=.02,x=.005;u.inputState.pinching&&f>g+x?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&f<=g-x&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(sw)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),u!==null&&(u.visible=o!==null),this}}class ow extends _n{constructor(e,t,i,r,s,o,a,l,u,c){if(c=c!==void 0?c:or,c!==or&&c!==vs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&c===or&&(i=tr),i===void 0&&c===vs&&(i=os),super(null,r,s,o,a,l,c,i,u),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Ot,this.minFilter=l!==void 0?l:Ot,this.flipY=!1,this.generateMipmaps=!1}}class aw extends _r{constructor(e,t){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=null,u=null,c=null,d=null,f=null,g=null;const x=t.getContextAttributes();let p=null,h=null;const m=[],v=[],_=new fn;_.layers.enable(1),_.viewport=new St;const M=new fn;M.layers.enable(2),M.viewport=new St;const S=[_,M],C=new rw;C.layers.enable(1),C.layers.enable(2);let L=null,y=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(P){let N=m[P];return N===void 0&&(N=new wu,m[P]=N),N.getTargetRaySpace()},this.getControllerGrip=function(P){let N=m[P];return N===void 0&&(N=new wu,m[P]=N),N.getGripSpace()},this.getHand=function(P){let N=m[P];return N===void 0&&(N=new wu,m[P]=N),N.getHandSpace()};function b(P){const N=v.indexOf(P.inputSource);if(N===-1)return;const Y=m[N];Y!==void 0&&Y.dispatchEvent({type:P.type,data:P.inputSource})}function R(){r.removeEventListener("select",b),r.removeEventListener("selectstart",b),r.removeEventListener("selectend",b),r.removeEventListener("squeeze",b),r.removeEventListener("squeezestart",b),r.removeEventListener("squeezeend",b),r.removeEventListener("end",R),r.removeEventListener("inputsourceschange",$);for(let P=0;P<m.length;P++){const N=v[P];N!==null&&(v[P]=null,m[P].disconnect(N))}L=null,y=null,e.setRenderTarget(p),f=null,d=null,c=null,r=null,h=null,I.stop(),i.isPresenting=!1,i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(P){s=P,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(P){a=P,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(P){l=P},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return c},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(P){if(r=P,r!==null){if(p=e.getRenderTarget(),r.addEventListener("select",b),r.addEventListener("selectstart",b),r.addEventListener("selectend",b),r.addEventListener("squeeze",b),r.addEventListener("squeezestart",b),r.addEventListener("squeezeend",b),r.addEventListener("end",R),r.addEventListener("inputsourceschange",$),x.xrCompatible!==!0&&await t.makeXRCompatible(),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const N={antialias:r.renderState.layers===void 0?x.antialias:!0,alpha:x.alpha,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(r,t,N),r.updateRenderState({baseLayer:f}),h=new ki(f.framebufferWidth,f.framebufferHeight,{format:An,type:hr,encoding:e.outputEncoding,stencilBuffer:x.stencil})}else{let N=null,Y=null,q=null;x.depth&&(q=x.stencil?35056:33190,N=x.stencil?vs:or,Y=x.stencil?os:tr);const K={colorFormat:32856,depthFormat:q,scaleFactor:s};c=new XRWebGLBinding(r,t),d=c.createProjectionLayer(K),r.updateRenderState({layers:[d]}),h=new ki(d.textureWidth,d.textureHeight,{format:An,type:hr,depthTexture:new ow(d.textureWidth,d.textureHeight,Y,void 0,void 0,void 0,void 0,void 0,void 0,N),stencilBuffer:x.stencil,encoding:e.outputEncoding,samples:x.antialias?4:0});const oe=e.properties.get(h);oe.__ignoreDepthValues=d.ignoreDepthValues}h.isXRRenderTarget=!0,this.setFoveation(1),l=null,o=await r.requestReferenceSpace(a),I.setContext(r),I.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}};function $(P){for(let N=0;N<P.removed.length;N++){const Y=P.removed[N],q=v.indexOf(Y);q>=0&&(v[q]=null,m[q].dispatchEvent({type:"disconnected",data:Y}))}for(let N=0;N<P.added.length;N++){const Y=P.added[N];let q=v.indexOf(Y);if(q===-1){for(let oe=0;oe<m.length;oe++)if(oe>=v.length){v.push(Y),q=oe;break}else if(v[oe]===null){v[oe]=Y,q=oe;break}if(q===-1)break}const K=m[q];K&&K.dispatchEvent({type:"connected",data:Y})}}const re=new O,B=new O;function k(P,N,Y){re.setFromMatrixPosition(N.matrixWorld),B.setFromMatrixPosition(Y.matrixWorld);const q=re.distanceTo(B),K=N.projectionMatrix.elements,oe=Y.projectionMatrix.elements,_e=K[14]/(K[10]-1),H=K[14]/(K[10]+1),Pe=(K[9]+1)/K[5],ye=(K[9]-1)/K[5],Se=(K[8]-1)/K[0],de=(oe[8]+1)/oe[0],Ue=_e*Se,Ee=_e*de,ve=q/(-Se+de),rt=ve*-Se;N.matrixWorld.decompose(P.position,P.quaternion,P.scale),P.translateX(rt),P.translateZ(ve),P.matrixWorld.compose(P.position,P.quaternion,P.scale),P.matrixWorldInverse.copy(P.matrixWorld).invert();const mt=_e+ve,lt=H+ve,Wt=Ue-rt,ut=Ee+(q-rt),Be=Pe*H/lt*mt,nn=ye*H/lt*mt;P.projectionMatrix.makePerspective(Wt,ut,Be,nn,mt,lt)}function X(P,N){N===null?P.matrixWorld.copy(P.matrix):P.matrixWorld.multiplyMatrices(N.matrixWorld,P.matrix),P.matrixWorldInverse.copy(P.matrixWorld).invert()}this.updateCamera=function(P){if(r===null)return;C.near=M.near=_.near=P.near,C.far=M.far=_.far=P.far,(L!==C.near||y!==C.far)&&(r.updateRenderState({depthNear:C.near,depthFar:C.far}),L=C.near,y=C.far);const N=P.parent,Y=C.cameras;X(C,N);for(let K=0;K<Y.length;K++)X(Y[K],N);C.matrixWorld.decompose(C.position,C.quaternion,C.scale),P.matrix.copy(C.matrix),P.matrix.decompose(P.position,P.quaternion,P.scale);const q=P.children;for(let K=0,oe=q.length;K<oe;K++)q[K].updateMatrixWorld(!0);Y.length===2?k(C,_,M):C.projectionMatrix.copy(_.projectionMatrix)},this.getCamera=function(){return C},this.getFoveation=function(){if(d!==null)return d.fixedFoveation;if(f!==null)return f.fixedFoveation},this.setFoveation=function(P){d!==null&&(d.fixedFoveation=P),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=P)};let Z=null;function Q(P,N){if(u=N.getViewerPose(l||o),g=N,u!==null){const Y=u.views;f!==null&&(e.setRenderTargetFramebuffer(h,f.framebuffer),e.setRenderTarget(h));let q=!1;Y.length!==C.cameras.length&&(C.cameras.length=0,q=!0);for(let K=0;K<Y.length;K++){const oe=Y[K];let _e=null;if(f!==null)_e=f.getViewport(oe);else{const Pe=c.getViewSubImage(d,oe);_e=Pe.viewport,K===0&&(e.setRenderTargetTextures(h,Pe.colorTexture,d.ignoreDepthValues?void 0:Pe.depthStencilTexture),e.setRenderTarget(h))}let H=S[K];H===void 0&&(H=new fn,H.layers.enable(K),H.viewport=new St,S[K]=H),H.matrix.fromArray(oe.transform.matrix),H.projectionMatrix.fromArray(oe.projectionMatrix),H.viewport.set(_e.x,_e.y,_e.width,_e.height),K===0&&C.matrix.copy(H.matrix),q===!0&&C.cameras.push(H)}}for(let Y=0;Y<m.length;Y++){const q=v[Y],K=m[Y];q!==null&&K!==void 0&&K.update(q,N,l||o)}Z&&Z(P,N),g=null}const I=new Ig;I.setAnimationLoop(Q),this.setAnimationLoop=function(P){Z=P},this.dispose=function(){}}}function lw(n,e){function t(p,h){p.fogColor.value.copy(h.color),h.isFog?(p.fogNear.value=h.near,p.fogFar.value=h.far):h.isFogExp2&&(p.fogDensity.value=h.density)}function i(p,h,m,v,_){h.isMeshBasicMaterial||h.isMeshLambertMaterial?r(p,h):h.isMeshToonMaterial?(r(p,h),c(p,h)):h.isMeshPhongMaterial?(r(p,h),u(p,h)):h.isMeshStandardMaterial?(r(p,h),d(p,h),h.isMeshPhysicalMaterial&&f(p,h,_)):h.isMeshMatcapMaterial?(r(p,h),g(p,h)):h.isMeshDepthMaterial?r(p,h):h.isMeshDistanceMaterial?(r(p,h),x(p,h)):h.isMeshNormalMaterial?r(p,h):h.isLineBasicMaterial?(s(p,h),h.isLineDashedMaterial&&o(p,h)):h.isPointsMaterial?a(p,h,m,v):h.isSpriteMaterial?l(p,h):h.isShadowMaterial?(p.color.value.copy(h.color),p.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function r(p,h){p.opacity.value=h.opacity,h.color&&p.diffuse.value.copy(h.color),h.emissive&&p.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(p.map.value=h.map),h.alphaMap&&(p.alphaMap.value=h.alphaMap),h.bumpMap&&(p.bumpMap.value=h.bumpMap,p.bumpScale.value=h.bumpScale,h.side===mn&&(p.bumpScale.value*=-1)),h.displacementMap&&(p.displacementMap.value=h.displacementMap,p.displacementScale.value=h.displacementScale,p.displacementBias.value=h.displacementBias),h.emissiveMap&&(p.emissiveMap.value=h.emissiveMap),h.normalMap&&(p.normalMap.value=h.normalMap,p.normalScale.value.copy(h.normalScale),h.side===mn&&p.normalScale.value.negate()),h.specularMap&&(p.specularMap.value=h.specularMap),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest);const m=e.get(h).envMap;if(m&&(p.envMap.value=m,p.flipEnvMap.value=m.isCubeTexture&&m.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=h.reflectivity,p.ior.value=h.ior,p.refractionRatio.value=h.refractionRatio),h.lightMap){p.lightMap.value=h.lightMap;const M=n.physicallyCorrectLights!==!0?Math.PI:1;p.lightMapIntensity.value=h.lightMapIntensity*M}h.aoMap&&(p.aoMap.value=h.aoMap,p.aoMapIntensity.value=h.aoMapIntensity);let v;h.map?v=h.map:h.specularMap?v=h.specularMap:h.displacementMap?v=h.displacementMap:h.normalMap?v=h.normalMap:h.bumpMap?v=h.bumpMap:h.roughnessMap?v=h.roughnessMap:h.metalnessMap?v=h.metalnessMap:h.alphaMap?v=h.alphaMap:h.emissiveMap?v=h.emissiveMap:h.clearcoatMap?v=h.clearcoatMap:h.clearcoatNormalMap?v=h.clearcoatNormalMap:h.clearcoatRoughnessMap?v=h.clearcoatRoughnessMap:h.iridescenceMap?v=h.iridescenceMap:h.iridescenceThicknessMap?v=h.iridescenceThicknessMap:h.specularIntensityMap?v=h.specularIntensityMap:h.specularColorMap?v=h.specularColorMap:h.transmissionMap?v=h.transmissionMap:h.thicknessMap?v=h.thicknessMap:h.sheenColorMap?v=h.sheenColorMap:h.sheenRoughnessMap&&(v=h.sheenRoughnessMap),v!==void 0&&(v.isWebGLRenderTarget&&(v=v.texture),v.matrixAutoUpdate===!0&&v.updateMatrix(),p.uvTransform.value.copy(v.matrix));let _;h.aoMap?_=h.aoMap:h.lightMap&&(_=h.lightMap),_!==void 0&&(_.isWebGLRenderTarget&&(_=_.texture),_.matrixAutoUpdate===!0&&_.updateMatrix(),p.uv2Transform.value.copy(_.matrix))}function s(p,h){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity}function o(p,h){p.dashSize.value=h.dashSize,p.totalSize.value=h.dashSize+h.gapSize,p.scale.value=h.scale}function a(p,h,m,v){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity,p.size.value=h.size*m,p.scale.value=v*.5,h.map&&(p.map.value=h.map),h.alphaMap&&(p.alphaMap.value=h.alphaMap),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest);let _;h.map?_=h.map:h.alphaMap&&(_=h.alphaMap),_!==void 0&&(_.matrixAutoUpdate===!0&&_.updateMatrix(),p.uvTransform.value.copy(_.matrix))}function l(p,h){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity,p.rotation.value=h.rotation,h.map&&(p.map.value=h.map),h.alphaMap&&(p.alphaMap.value=h.alphaMap),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest);let m;h.map?m=h.map:h.alphaMap&&(m=h.alphaMap),m!==void 0&&(m.matrixAutoUpdate===!0&&m.updateMatrix(),p.uvTransform.value.copy(m.matrix))}function u(p,h){p.specular.value.copy(h.specular),p.shininess.value=Math.max(h.shininess,1e-4)}function c(p,h){h.gradientMap&&(p.gradientMap.value=h.gradientMap)}function d(p,h){p.roughness.value=h.roughness,p.metalness.value=h.metalness,h.roughnessMap&&(p.roughnessMap.value=h.roughnessMap),h.metalnessMap&&(p.metalnessMap.value=h.metalnessMap),e.get(h).envMap&&(p.envMapIntensity.value=h.envMapIntensity)}function f(p,h,m){p.ior.value=h.ior,h.sheen>0&&(p.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),p.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(p.sheenColorMap.value=h.sheenColorMap),h.sheenRoughnessMap&&(p.sheenRoughnessMap.value=h.sheenRoughnessMap)),h.clearcoat>0&&(p.clearcoat.value=h.clearcoat,p.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(p.clearcoatMap.value=h.clearcoatMap),h.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap),h.clearcoatNormalMap&&(p.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),p.clearcoatNormalMap.value=h.clearcoatNormalMap,h.side===mn&&p.clearcoatNormalScale.value.negate())),h.iridescence>0&&(p.iridescence.value=h.iridescence,p.iridescenceIOR.value=h.iridescenceIOR,p.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(p.iridescenceMap.value=h.iridescenceMap),h.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=h.iridescenceThicknessMap)),h.transmission>0&&(p.transmission.value=h.transmission,p.transmissionSamplerMap.value=m.texture,p.transmissionSamplerSize.value.set(m.width,m.height),h.transmissionMap&&(p.transmissionMap.value=h.transmissionMap),p.thickness.value=h.thickness,h.thicknessMap&&(p.thicknessMap.value=h.thicknessMap),p.attenuationDistance.value=h.attenuationDistance,p.attenuationColor.value.copy(h.attenuationColor)),p.specularIntensity.value=h.specularIntensity,p.specularColor.value.copy(h.specularColor),h.specularIntensityMap&&(p.specularIntensityMap.value=h.specularIntensityMap),h.specularColorMap&&(p.specularColorMap.value=h.specularColorMap)}function g(p,h){h.matcap&&(p.matcap.value=h.matcap)}function x(p,h){p.referencePosition.value.copy(h.referencePosition),p.nearDistance.value=h.nearDistance,p.farDistance.value=h.farDistance}return{refreshFogUniforms:t,refreshMaterialUniforms:i}}function uw(n,e,t,i){let r={},s={},o=[];const a=t.isWebGL2?n.getParameter(35375):0;function l(v,_){const M=_.program;i.uniformBlockBinding(v,M)}function u(v,_){let M=r[v.id];M===void 0&&(x(v),M=c(v),r[v.id]=M,v.addEventListener("dispose",h));const S=_.program;i.updateUBOMapping(v,S);const C=e.render.frame;s[v.id]!==C&&(f(v),s[v.id]=C)}function c(v){const _=d();v.__bindingPointIndex=_;const M=n.createBuffer(),S=v.__size,C=v.usage;return n.bindBuffer(35345,M),n.bufferData(35345,S,C),n.bindBuffer(35345,null),n.bindBufferBase(35345,_,M),M}function d(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(v){const _=r[v.id],M=v.uniforms,S=v.__cache;n.bindBuffer(35345,_);for(let C=0,L=M.length;C<L;C++){const y=M[C];if(g(y,C,S)===!0){const b=y.value,R=y.__offset;typeof b=="number"?(y.__data[0]=b,n.bufferSubData(35345,R,y.__data)):(y.value.isMatrix3?(y.__data[0]=y.value.elements[0],y.__data[1]=y.value.elements[1],y.__data[2]=y.value.elements[2],y.__data[3]=y.value.elements[0],y.__data[4]=y.value.elements[3],y.__data[5]=y.value.elements[4],y.__data[6]=y.value.elements[5],y.__data[7]=y.value.elements[0],y.__data[8]=y.value.elements[6],y.__data[9]=y.value.elements[7],y.__data[10]=y.value.elements[8],y.__data[11]=y.value.elements[0]):b.toArray(y.__data),n.bufferSubData(35345,R,y.__data))}}n.bindBuffer(35345,null)}function g(v,_,M){const S=v.value;if(M[_]===void 0)return typeof S=="number"?M[_]=S:M[_]=S.clone(),!0;if(typeof S=="number"){if(M[_]!==S)return M[_]=S,!0}else{const C=M[_];if(C.equals(S)===!1)return C.copy(S),!0}return!1}function x(v){const _=v.uniforms;let M=0;const S=16;let C=0;for(let L=0,y=_.length;L<y;L++){const b=_[L],R=p(b);if(b.__data=new Float32Array(R.storage/Float32Array.BYTES_PER_ELEMENT),b.__offset=M,L>0){C=M%S;const $=S-C;C!==0&&$-R.boundary<0&&(M+=S-C,b.__offset=M)}M+=R.storage}return C=M%S,C>0&&(M+=S-C),v.__size=M,v.__cache={},this}function p(v){const _=v.value,M={boundary:0,storage:0};return typeof _=="number"?(M.boundary=4,M.storage=4):_.isVector2?(M.boundary=8,M.storage=8):_.isVector3||_.isColor?(M.boundary=16,M.storage=12):_.isVector4?(M.boundary=16,M.storage=16):_.isMatrix3?(M.boundary=48,M.storage=48):_.isMatrix4?(M.boundary=64,M.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),M}function h(v){const _=v.target;_.removeEventListener("dispose",h);const M=o.indexOf(_.__bindingPointIndex);o.splice(M,1),n.deleteBuffer(r[_.id]),delete r[_.id],delete s[_.id]}function m(){for(const v in r)n.deleteBuffer(r[v]);o=[],r={},s={}}return{bind:l,update:u,dispose:m}}function cw(){const n=qa("canvas");return n.style.display="block",n}function Og(n={}){this.isWebGLRenderer=!0;const e=n.canvas!==void 0?n.canvas:cw(),t=n.context!==void 0?n.context:null,i=n.depth!==void 0?n.depth:!0,r=n.stencil!==void 0?n.stencil:!0,s=n.antialias!==void 0?n.antialias:!1,o=n.premultipliedAlpha!==void 0?n.premultipliedAlpha:!0,a=n.preserveDrawingBuffer!==void 0?n.preserveDrawingBuffer:!1,l=n.powerPreference!==void 0?n.powerPreference:"default",u=n.failIfMajorPerformanceCaveat!==void 0?n.failIfMajorPerformanceCaveat:!1;let c;t!==null?c=t.getContextAttributes().alpha:c=n.alpha!==void 0?n.alpha:!1;let d=null,f=null;const g=[],x=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=pr,this.physicallyCorrectLights=!1,this.toneMapping=ii,this.toneMappingExposure=1,Object.defineProperties(this,{gammaFactor:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaFactor has been removed."),2},set:function(){console.warn("THREE.WebGLRenderer: .gammaFactor has been removed.")}}});const p=this;let h=!1,m=0,v=0,_=null,M=-1,S=null;const C=new St,L=new St;let y=null,b=e.width,R=e.height,$=1,re=null,B=null;const k=new St(0,0,b,R),X=new St(0,0,b,R);let Z=!1;const Q=new Rg;let I=!1,P=!1,N=null;const Y=new wt,q=new we,K=new O,oe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function _e(){return _===null?$:1}let H=t;function Pe(E,U){for(let G=0;G<E.length;G++){const F=E[G],j=e.getContext(F,U);if(j!==null)return j}return null}try{const E={alpha:!0,depth:i,stencil:r,antialias:s,premultipliedAlpha:o,preserveDrawingBuffer:a,powerPreference:l,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${wf}`),e.addEventListener("webglcontextlost",pe,!1),e.addEventListener("webglcontextrestored",he,!1),e.addEventListener("webglcontextcreationerror",De,!1),H===null){const U=["webgl2","webgl","experimental-webgl"];if(p.isWebGL1Renderer===!0&&U.shift(),H=Pe(U,E),H===null)throw Pe(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}H.getShaderPrecisionFormat===void 0&&(H.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let ye,Se,de,Ue,Ee,ve,rt,mt,lt,Wt,ut,Be,nn,rn,T,w,V,te,ne,se,xe,A,z,le;function fe(){ye=new SS(H),Se=new mS(H,ye,n),ye.init(Se),A=new iw(H,ye,Se),de=new tw(H,ye,Se),Ue=new ES,Ee=new VM,ve=new nw(H,ye,de,Ee,Se,A,Ue),rt=new vS(p),mt=new yS(p),lt=new Ix(H,Se),z=new hS(H,ye,lt,Se),Wt=new MS(H,lt,Ue,z),ut=new AS(H,Wt,lt,Ue),ne=new bS(H,Se,ve),w=new gS(Ee),Be=new BM(p,rt,mt,ye,Se,z,w),nn=new lw(p,Ee),rn=new HM,T=new $M(ye,Se),te=new dS(p,rt,mt,de,ut,c,o),V=new ew(p,ut,Se),le=new uw(H,Ue,Se,de),se=new pS(H,ye,Ue,Se),xe=new wS(H,ye,Ue,Se),Ue.programs=Be.programs,p.capabilities=Se,p.extensions=ye,p.properties=Ee,p.renderLists=rn,p.shadowMap=V,p.state=de,p.info=Ue}fe();const ae=new aw(p,H);this.xr=ae,this.getContext=function(){return H},this.getContextAttributes=function(){return H.getContextAttributes()},this.forceContextLoss=function(){const E=ye.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=ye.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return $},this.setPixelRatio=function(E){E!==void 0&&($=E,this.setSize(b,R,!1))},this.getSize=function(E){return E.set(b,R)},this.setSize=function(E,U,G){if(ae.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}b=E,R=U,e.width=Math.floor(E*$),e.height=Math.floor(U*$),G!==!1&&(e.style.width=E+"px",e.style.height=U+"px"),this.setViewport(0,0,E,U)},this.getDrawingBufferSize=function(E){return E.set(b*$,R*$).floor()},this.setDrawingBufferSize=function(E,U,G){b=E,R=U,$=G,e.width=Math.floor(E*G),e.height=Math.floor(U*G),this.setViewport(0,0,E,U)},this.getCurrentViewport=function(E){return E.copy(C)},this.getViewport=function(E){return E.copy(k)},this.setViewport=function(E,U,G,F){E.isVector4?k.set(E.x,E.y,E.z,E.w):k.set(E,U,G,F),de.viewport(C.copy(k).multiplyScalar($).floor())},this.getScissor=function(E){return E.copy(X)},this.setScissor=function(E,U,G,F){E.isVector4?X.set(E.x,E.y,E.z,E.w):X.set(E,U,G,F),de.scissor(L.copy(X).multiplyScalar($).floor())},this.getScissorTest=function(){return Z},this.setScissorTest=function(E){de.setScissorTest(Z=E)},this.setOpaqueSort=function(E){re=E},this.setTransparentSort=function(E){B=E},this.getClearColor=function(E){return E.copy(te.getClearColor())},this.setClearColor=function(){te.setClearColor.apply(te,arguments)},this.getClearAlpha=function(){return te.getClearAlpha()},this.setClearAlpha=function(){te.setClearAlpha.apply(te,arguments)},this.clear=function(E=!0,U=!0,G=!0){let F=0;E&&(F|=16384),U&&(F|=256),G&&(F|=1024),H.clear(F)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",pe,!1),e.removeEventListener("webglcontextrestored",he,!1),e.removeEventListener("webglcontextcreationerror",De,!1),rn.dispose(),T.dispose(),Ee.dispose(),rt.dispose(),mt.dispose(),ut.dispose(),z.dispose(),le.dispose(),Be.dispose(),ae.dispose(),ae.removeEventListener("sessionstart",ue),ae.removeEventListener("sessionend",me),N&&(N.dispose(),N=null),Fe.stop()};function pe(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),h=!0}function he(){console.log("THREE.WebGLRenderer: Context Restored."),h=!1;const E=Ue.autoReset,U=V.enabled,G=V.autoUpdate,F=V.needsUpdate,j=V.type;fe(),Ue.autoReset=E,V.enabled=U,V.autoUpdate=G,V.needsUpdate=F,V.type=j}function De(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function Re(E){const U=E.target;U.removeEventListener("dispose",Re),Ge(U)}function Ge(E){D(E),Ee.remove(E)}function D(E){const U=Ee.get(E).programs;U!==void 0&&(U.forEach(function(G){Be.releaseProgram(G)}),E.isShaderMaterial&&Be.releaseShaderCache(E))}this.renderBufferDirect=function(E,U,G,F,j,ge){U===null&&(U=oe);const Me=j.isMesh&&j.matrixWorld.determinant()<0,be=jg(E,U,G,F,j);de.setMaterial(F,Me);let Te=G.index;const ke=G.attributes.position;if(Te===null){if(ke===void 0||ke.count===0)return}else if(Te.count===0)return;let Ae=1;F.wireframe===!0&&(Te=Wt.getWireframeAttribute(G),Ae=2),z.setup(j,F,be,G,Te);let Ie,et=se;Te!==null&&(Ie=lt.get(Te),et=xe,et.setIndex(Ie));const Gi=Te!==null?Te.count:ke.count,xr=G.drawRange.start*Ae,yr=G.drawRange.count*Ae,In=ge!==null?ge.start*Ae:0,Oe=ge!==null?ge.count*Ae:1/0,Sr=Math.max(xr,In),st=Math.min(Gi,xr+yr,In+Oe)-1,on=Math.max(0,st-Sr+1);if(on!==0){if(j.isMesh)F.wireframe===!0?(de.setLineWidth(F.wireframeLinewidth*_e()),et.setMode(1)):et.setMode(4);else if(j.isLine){let ci=F.linewidth;ci===void 0&&(ci=1),de.setLineWidth(ci*_e()),j.isLineSegments?et.setMode(1):j.isLineLoop?et.setMode(2):et.setMode(3)}else j.isPoints?et.setMode(0):j.isSprite&&et.setMode(4);if(j.isInstancedMesh)et.renderInstances(Sr,on,j.count);else if(G.isInstancedBufferGeometry){const ci=Math.min(G.instanceCount,G._maxInstanceCount);et.renderInstances(Sr,on,ci)}else et.render(Sr,on)}},this.compile=function(E,U){function G(F,j,ge){F.transparent===!0&&F.side===ti?(F.side=mn,F.needsUpdate=!0,sn(F,j,ge),F.side=ps,F.needsUpdate=!0,sn(F,j,ge),F.side=ti):sn(F,j,ge)}f=T.get(E),f.init(),x.push(f),E.traverseVisible(function(F){F.isLight&&F.layers.test(U.layers)&&(f.pushLight(F),F.castShadow&&f.pushShadow(F))}),f.setupLights(p.physicallyCorrectLights),E.traverse(function(F){const j=F.material;if(j)if(Array.isArray(j))for(let ge=0;ge<j.length;ge++){const Me=j[ge];G(Me,E,F)}else G(j,E,F)}),x.pop(),f=null};let W=null;function ee(E){W&&W(E)}function ue(){Fe.stop()}function me(){Fe.start()}const Fe=new Ig;Fe.setAnimationLoop(ee),typeof self<"u"&&Fe.setContext(self),this.setAnimationLoop=function(E){W=E,ae.setAnimationLoop(E),E===null?Fe.stop():Fe.start()},ae.addEventListener("sessionstart",ue),ae.addEventListener("sessionend",me),this.render=function(E,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(h===!0)return;E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),ae.enabled===!0&&ae.isPresenting===!0&&(ae.cameraAutoUpdate===!0&&ae.updateCamera(U),U=ae.getCamera()),E.isScene===!0&&E.onBeforeRender(p,E,U,_),f=T.get(E,x.length),f.init(),x.push(f),Y.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),Q.setFromProjectionMatrix(Y),P=this.localClippingEnabled,I=w.init(this.clippingPlanes,P,U),d=rn.get(E,g.length),d.init(),g.push(d),gt(E,U,0,p.sortObjects),d.finish(),p.sortObjects===!0&&d.sort(re,B),I===!0&&w.beginShadows();const G=f.state.shadowsArray;if(V.render(G,E,U),I===!0&&w.endShadows(),this.info.autoReset===!0&&this.info.reset(),te.render(d,E),f.setupLights(p.physicallyCorrectLights),U.isArrayCamera){const F=U.cameras;for(let j=0,ge=F.length;j<ge;j++){const Me=F[j];Tt(d,E,Me,Me.viewport)}}else Tt(d,E,U);_!==null&&(ve.updateMultisampleRenderTarget(_),ve.updateRenderTargetMipmap(_)),E.isScene===!0&&E.onAfterRender(p,E,U),z.resetDefaultState(),M=-1,S=null,x.pop(),x.length>0?f=x[x.length-1]:f=null,g.pop(),g.length>0?d=g[g.length-1]:d=null};function gt(E,U,G,F){if(E.visible===!1)return;if(E.layers.test(U.layers)){if(E.isGroup)G=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(U);else if(E.isLight)f.pushLight(E),E.castShadow&&f.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||Q.intersectsSprite(E)){F&&K.setFromMatrixPosition(E.matrixWorld).applyMatrix4(Y);const Me=ut.update(E),be=E.material;be.visible&&d.push(E,Me,be,G,K.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(E.isSkinnedMesh&&E.skeleton.frame!==Ue.render.frame&&(E.skeleton.update(),E.skeleton.frame=Ue.render.frame),!E.frustumCulled||Q.intersectsObject(E))){F&&K.setFromMatrixPosition(E.matrixWorld).applyMatrix4(Y);const Me=ut.update(E),be=E.material;if(Array.isArray(be)){const Te=Me.groups;for(let ke=0,Ae=Te.length;ke<Ae;ke++){const Ie=Te[ke],et=be[Ie.materialIndex];et&&et.visible&&d.push(E,Me,et,G,K.z,Ie)}}else be.visible&&d.push(E,Me,be,G,K.z,null)}}const ge=E.children;for(let Me=0,be=ge.length;Me<be;Me++)gt(ge[Me],U,G,F)}function Tt(E,U,G,F){const j=E.opaque,ge=E.transmissive,Me=E.transparent;f.setupLightsView(G),ge.length>0&&Vi(j,U,G),F&&de.viewport(C.copy(F)),j.length>0&&qe(j,U,G),ge.length>0&&qe(ge,U,G),Me.length>0&&qe(Me,U,G),de.buffers.depth.setTest(!0),de.buffers.depth.setMask(!0),de.buffers.color.setMask(!0),de.setPolygonOffset(!1)}function Vi(E,U,G){const F=Se.isWebGL2;N===null&&(N=new ki(1,1,{generateMipmaps:!0,type:ye.has("EXT_color_buffer_half_float")?mo:hr,minFilter:cl,samples:F&&s===!0?4:0})),p.getDrawingBufferSize(q),F?N.setSize(q.x,q.y):N.setSize(Ec(q.x),Ec(q.y));const j=p.getRenderTarget();p.setRenderTarget(N),p.clear();const ge=p.toneMapping;p.toneMapping=ii,qe(E,U,G),p.toneMapping=ge,ve.updateMultisampleRenderTarget(N),ve.updateRenderTargetMipmap(N),p.setRenderTarget(j)}function qe(E,U,G){const F=U.isScene===!0?U.overrideMaterial:null;for(let j=0,ge=E.length;j<ge;j++){const Me=E[j],be=Me.object,Te=Me.geometry,ke=F===null?Me.material:F,Ae=Me.group;be.layers.test(G.layers)&&Hn(be,U,G,Te,ke,Ae)}}function Hn(E,U,G,F,j,ge){E.onBeforeRender(p,U,G,F,j,ge),E.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),j.onBeforeRender(p,U,G,F,E,ge),j.transparent===!0&&j.side===ti?(j.side=mn,j.needsUpdate=!0,p.renderBufferDirect(G,U,F,j,E,ge),j.side=ps,j.needsUpdate=!0,p.renderBufferDirect(G,U,F,j,E,ge),j.side=ti):p.renderBufferDirect(G,U,F,j,E,ge),E.onAfterRender(p,U,G,F,j,ge)}function sn(E,U,G){U.isScene!==!0&&(U=oe);const F=Ee.get(E),j=f.state.lights,ge=f.state.shadowsArray,Me=j.state.version,be=Be.getParameters(E,j.state,ge,U,G),Te=Be.getProgramCacheKey(be);let ke=F.programs;F.environment=E.isMeshStandardMaterial?U.environment:null,F.fog=U.fog,F.envMap=(E.isMeshStandardMaterial?mt:rt).get(E.envMap||F.environment),ke===void 0&&(E.addEventListener("dispose",Re),ke=new Map,F.programs=ke);let Ae=ke.get(Te);if(Ae!==void 0){if(F.currentProgram===Ae&&F.lightsStateVersion===Me)return Lf(E,be),Ae}else be.uniforms=Be.getUniforms(E),E.onBuild(G,be,p),E.onBeforeCompile(be,p),Ae=Be.acquireProgram(be,Te),ke.set(Te,Ae),F.uniforms=be.uniforms;const Ie=F.uniforms;(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Ie.clippingPlanes=w.uniform),Lf(E,be),F.needsLights=qg(E),F.lightsStateVersion=Me,F.needsLights&&(Ie.ambientLightColor.value=j.state.ambient,Ie.lightProbe.value=j.state.probe,Ie.directionalLights.value=j.state.directional,Ie.directionalLightShadows.value=j.state.directionalShadow,Ie.spotLights.value=j.state.spot,Ie.spotLightShadows.value=j.state.spotShadow,Ie.rectAreaLights.value=j.state.rectArea,Ie.ltc_1.value=j.state.rectAreaLTC1,Ie.ltc_2.value=j.state.rectAreaLTC2,Ie.pointLights.value=j.state.point,Ie.pointLightShadows.value=j.state.pointShadow,Ie.hemisphereLights.value=j.state.hemi,Ie.directionalShadowMap.value=j.state.directionalShadowMap,Ie.directionalShadowMatrix.value=j.state.directionalShadowMatrix,Ie.spotShadowMap.value=j.state.spotShadowMap,Ie.spotLightMatrix.value=j.state.spotLightMatrix,Ie.spotLightMap.value=j.state.spotLightMap,Ie.pointShadowMap.value=j.state.pointShadowMap,Ie.pointShadowMatrix.value=j.state.pointShadowMatrix);const et=Ae.getUniforms(),Gi=Ma.seqWithValue(et.seq,Ie);return F.currentProgram=Ae,F.uniformsList=Gi,Ae}function Lf(E,U){const G=Ee.get(E);G.outputEncoding=U.outputEncoding,G.instancing=U.instancing,G.skinning=U.skinning,G.morphTargets=U.morphTargets,G.morphNormals=U.morphNormals,G.morphColors=U.morphColors,G.morphTargetsCount=U.morphTargetsCount,G.numClippingPlanes=U.numClippingPlanes,G.numIntersection=U.numClipIntersection,G.vertexAlphas=U.vertexAlphas,G.vertexTangents=U.vertexTangents,G.toneMapping=U.toneMapping}function jg(E,U,G,F,j){U.isScene!==!0&&(U=oe),ve.resetTextureUnits();const ge=U.fog,Me=F.isMeshStandardMaterial?U.environment:null,be=_===null?p.outputEncoding:_.isXRRenderTarget===!0?_.texture.encoding:pr,Te=(F.isMeshStandardMaterial?mt:rt).get(F.envMap||Me),ke=F.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,Ae=!!F.normalMap&&!!G.attributes.tangent,Ie=!!G.morphAttributes.position,et=!!G.morphAttributes.normal,Gi=!!G.morphAttributes.color,xr=F.toneMapped?p.toneMapping:ii,yr=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,In=yr!==void 0?yr.length:0,Oe=Ee.get(F),Sr=f.state.lights;if(I===!0&&(P===!0||E!==S)){const jt=E===S&&F.id===M;w.setState(F,E,jt)}let st=!1;F.version===Oe.__version?(Oe.needsLights&&Oe.lightsStateVersion!==Sr.state.version||Oe.outputEncoding!==be||j.isInstancedMesh&&Oe.instancing===!1||!j.isInstancedMesh&&Oe.instancing===!0||j.isSkinnedMesh&&Oe.skinning===!1||!j.isSkinnedMesh&&Oe.skinning===!0||Oe.envMap!==Te||F.fog===!0&&Oe.fog!==ge||Oe.numClippingPlanes!==void 0&&(Oe.numClippingPlanes!==w.numPlanes||Oe.numIntersection!==w.numIntersection)||Oe.vertexAlphas!==ke||Oe.vertexTangents!==Ae||Oe.morphTargets!==Ie||Oe.morphNormals!==et||Oe.morphColors!==Gi||Oe.toneMapping!==xr||Se.isWebGL2===!0&&Oe.morphTargetsCount!==In)&&(st=!0):(st=!0,Oe.__version=F.version);let on=Oe.currentProgram;st===!0&&(on=sn(F,U,j));let ci=!1,ws=!1,vl=!1;const Dt=on.getUniforms(),Hi=Oe.uniforms;if(de.useProgram(on.program)&&(ci=!0,ws=!0,vl=!0),F.id!==M&&(M=F.id,ws=!0),ci||S!==E){if(Dt.setValue(H,"projectionMatrix",E.projectionMatrix),Se.logarithmicDepthBuffer&&Dt.setValue(H,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),S!==E&&(S=E,ws=!0,vl=!0),F.isShaderMaterial||F.isMeshPhongMaterial||F.isMeshToonMaterial||F.isMeshStandardMaterial||F.envMap){const jt=Dt.map.cameraPosition;jt!==void 0&&jt.setValue(H,K.setFromMatrixPosition(E.matrixWorld))}(F.isMeshPhongMaterial||F.isMeshToonMaterial||F.isMeshLambertMaterial||F.isMeshBasicMaterial||F.isMeshStandardMaterial||F.isShaderMaterial)&&Dt.setValue(H,"isOrthographic",E.isOrthographicCamera===!0),(F.isMeshPhongMaterial||F.isMeshToonMaterial||F.isMeshLambertMaterial||F.isMeshBasicMaterial||F.isMeshStandardMaterial||F.isShaderMaterial||F.isShadowMaterial||j.isSkinnedMesh)&&Dt.setValue(H,"viewMatrix",E.matrixWorldInverse)}if(j.isSkinnedMesh){Dt.setOptional(H,j,"bindMatrix"),Dt.setOptional(H,j,"bindMatrixInverse");const jt=j.skeleton;jt&&(Se.floatVertexTextures?(jt.boneTexture===null&&jt.computeBoneTexture(),Dt.setValue(H,"boneTexture",jt.boneTexture,ve),Dt.setValue(H,"boneTextureSize",jt.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const _l=G.morphAttributes;if((_l.position!==void 0||_l.normal!==void 0||_l.color!==void 0&&Se.isWebGL2===!0)&&ne.update(j,G,F,on),(ws||Oe.receiveShadow!==j.receiveShadow)&&(Oe.receiveShadow=j.receiveShadow,Dt.setValue(H,"receiveShadow",j.receiveShadow)),F.isMeshGouraudMaterial&&F.envMap!==null&&(Hi.envMap.value=Te,Hi.flipEnvMap.value=Te.isCubeTexture&&Te.isRenderTargetTexture===!1?-1:1),ws&&(Dt.setValue(H,"toneMappingExposure",p.toneMappingExposure),Oe.needsLights&&Xg(Hi,vl),ge&&F.fog===!0&&nn.refreshFogUniforms(Hi,ge),nn.refreshMaterialUniforms(Hi,F,$,R,N),Ma.upload(H,Oe.uniformsList,Hi,ve)),F.isShaderMaterial&&F.uniformsNeedUpdate===!0&&(Ma.upload(H,Oe.uniformsList,Hi,ve),F.uniformsNeedUpdate=!1),F.isSpriteMaterial&&Dt.setValue(H,"center",j.center),Dt.setValue(H,"modelViewMatrix",j.modelViewMatrix),Dt.setValue(H,"normalMatrix",j.normalMatrix),Dt.setValue(H,"modelMatrix",j.matrixWorld),F.isShaderMaterial||F.isRawShaderMaterial){const jt=F.uniformsGroups;for(let xl=0,Yg=jt.length;xl<Yg;xl++)if(Se.isWebGL2){const Pf=jt[xl];le.update(Pf,on),le.bind(Pf,on)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return on}function Xg(E,U){E.ambientLightColor.needsUpdate=U,E.lightProbe.needsUpdate=U,E.directionalLights.needsUpdate=U,E.directionalLightShadows.needsUpdate=U,E.pointLights.needsUpdate=U,E.pointLightShadows.needsUpdate=U,E.spotLights.needsUpdate=U,E.spotLightShadows.needsUpdate=U,E.rectAreaLights.needsUpdate=U,E.hemisphereLights.needsUpdate=U}function qg(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return m},this.getActiveMipmapLevel=function(){return v},this.getRenderTarget=function(){return _},this.setRenderTargetTextures=function(E,U,G){Ee.get(E.texture).__webglTexture=U,Ee.get(E.depthTexture).__webglTexture=G;const F=Ee.get(E);F.__hasExternalTextures=!0,F.__hasExternalTextures&&(F.__autoAllocateDepthBuffer=G===void 0,F.__autoAllocateDepthBuffer||ye.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),F.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(E,U){const G=Ee.get(E);G.__webglFramebuffer=U,G.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(E,U=0,G=0){_=E,m=U,v=G;let F=!0,j=null,ge=!1,Me=!1;if(E){const Te=Ee.get(E);Te.__useDefaultFramebuffer!==void 0?(de.bindFramebuffer(36160,null),F=!1):Te.__webglFramebuffer===void 0?ve.setupRenderTarget(E):Te.__hasExternalTextures&&ve.rebindTextures(E,Ee.get(E.texture).__webglTexture,Ee.get(E.depthTexture).__webglTexture);const ke=E.texture;(ke.isData3DTexture||ke.isDataArrayTexture||ke.isCompressedArrayTexture)&&(Me=!0);const Ae=Ee.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(j=Ae[U],ge=!0):Se.isWebGL2&&E.samples>0&&ve.useMultisampledRTT(E)===!1?j=Ee.get(E).__webglMultisampledFramebuffer:j=Ae,C.copy(E.viewport),L.copy(E.scissor),y=E.scissorTest}else C.copy(k).multiplyScalar($).floor(),L.copy(X).multiplyScalar($).floor(),y=Z;if(de.bindFramebuffer(36160,j)&&Se.drawBuffers&&F&&de.drawBuffers(E,j),de.viewport(C),de.scissor(L),de.setScissorTest(y),ge){const Te=Ee.get(E.texture);H.framebufferTexture2D(36160,36064,34069+U,Te.__webglTexture,G)}else if(Me){const Te=Ee.get(E.texture),ke=U||0;H.framebufferTextureLayer(36160,36064,Te.__webglTexture,G||0,ke)}M=-1},this.readRenderTargetPixels=function(E,U,G,F,j,ge,Me){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let be=Ee.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Me!==void 0&&(be=be[Me]),be){de.bindFramebuffer(36160,be);try{const Te=E.texture,ke=Te.format,Ae=Te.type;if(ke!==An&&A.convert(ke)!==H.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ie=Ae===mo&&(ye.has("EXT_color_buffer_half_float")||Se.isWebGL2&&ye.has("EXT_color_buffer_float"));if(Ae!==hr&&A.convert(Ae)!==H.getParameter(35738)&&!(Ae===nr&&(Se.isWebGL2||ye.has("OES_texture_float")||ye.has("WEBGL_color_buffer_float")))&&!Ie){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=E.width-F&&G>=0&&G<=E.height-j&&H.readPixels(U,G,F,j,A.convert(ke),A.convert(Ae),ge)}finally{const Te=_!==null?Ee.get(_).__webglFramebuffer:null;de.bindFramebuffer(36160,Te)}}},this.copyFramebufferToTexture=function(E,U,G=0){const F=Math.pow(2,-G),j=Math.floor(U.image.width*F),ge=Math.floor(U.image.height*F);ve.setTexture2D(U,0),H.copyTexSubImage2D(3553,G,0,0,E.x,E.y,j,ge),de.unbindTexture()},this.copyTextureToTexture=function(E,U,G,F=0){const j=U.image.width,ge=U.image.height,Me=A.convert(G.format),be=A.convert(G.type);ve.setTexture2D(G,0),H.pixelStorei(37440,G.flipY),H.pixelStorei(37441,G.premultiplyAlpha),H.pixelStorei(3317,G.unpackAlignment),U.isDataTexture?H.texSubImage2D(3553,F,E.x,E.y,j,ge,Me,be,U.image.data):U.isCompressedTexture?H.compressedTexSubImage2D(3553,F,E.x,E.y,U.mipmaps[0].width,U.mipmaps[0].height,Me,U.mipmaps[0].data):H.texSubImage2D(3553,F,E.x,E.y,Me,be,U.image),F===0&&G.generateMipmaps&&H.generateMipmap(3553),de.unbindTexture()},this.copyTextureToTexture3D=function(E,U,G,F,j=0){if(p.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const ge=E.max.x-E.min.x+1,Me=E.max.y-E.min.y+1,be=E.max.z-E.min.z+1,Te=A.convert(F.format),ke=A.convert(F.type);let Ae;if(F.isData3DTexture)ve.setTexture3D(F,0),Ae=32879;else if(F.isDataArrayTexture)ve.setTexture2DArray(F,0),Ae=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}H.pixelStorei(37440,F.flipY),H.pixelStorei(37441,F.premultiplyAlpha),H.pixelStorei(3317,F.unpackAlignment);const Ie=H.getParameter(3314),et=H.getParameter(32878),Gi=H.getParameter(3316),xr=H.getParameter(3315),yr=H.getParameter(32877),In=G.isCompressedTexture?G.mipmaps[0]:G.image;H.pixelStorei(3314,In.width),H.pixelStorei(32878,In.height),H.pixelStorei(3316,E.min.x),H.pixelStorei(3315,E.min.y),H.pixelStorei(32877,E.min.z),G.isDataTexture||G.isData3DTexture?H.texSubImage3D(Ae,j,U.x,U.y,U.z,ge,Me,be,Te,ke,In.data):G.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),H.compressedTexSubImage3D(Ae,j,U.x,U.y,U.z,ge,Me,be,Te,In.data)):H.texSubImage3D(Ae,j,U.x,U.y,U.z,ge,Me,be,Te,ke,In),H.pixelStorei(3314,Ie),H.pixelStorei(32878,et),H.pixelStorei(3316,Gi),H.pixelStorei(3315,xr),H.pixelStorei(32877,yr),j===0&&F.generateMipmaps&&H.generateMipmap(Ae),de.unbindTexture()},this.initTexture=function(E){E.isCubeTexture?ve.setTextureCube(E,0):E.isData3DTexture?ve.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?ve.setTexture2DArray(E,0):ve.setTexture2D(E,0),de.unbindTexture()},this.resetState=function(){m=0,v=0,_=null,de.reset(),z.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}class fw extends Og{}fw.prototype.isWebGL1Renderer=!0;class dw extends Qt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.backgroundBlurriness=this.backgroundBlurriness),t}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}}class Ug{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Qh(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=Qh();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Qh(){return(typeof performance>"u"?Date:performance).now()}class hw{constructor(e,t,i=0,r=1/0){this.ray=new Tg(e,t),this.near=i,this.far=r,this.camera=null,this.layers=new Tf,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,i=[]){return Cc(e,this,i,t),i.sort(Jh),i}intersectObjects(e,t=!0,i=[]){for(let r=0,s=e.length;r<s;r++)Cc(e[r],this,i,t);return i.sort(Jh),i}}function Jh(n,e){return n.distance-e.distance}function Cc(n,e,t,i){if(n.layers.test(e.layers)&&n.raycast(e,t),i===!0){const r=n.children;for(let s=0,o=r.length;s<o;s++)Cc(r[s],e,t,!0)}}class ep{constructor(e=1,t=0,i=0){return this.radius=e,this.phi=t,this.theta=i,this}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(Ut(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:wf}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=wf);const tp={type:"change"},Eu={type:"start"},np={type:"end"};class pw extends _r{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new O,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:wr.ROTATE,MIDDLE:wr.DOLLY,RIGHT:wr.PAN},this.touches={ONE:Er.ROTATE,TWO:Er.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(A){A.addEventListener("keydown",rn),this._domElementKeyEvents=A},this.saveState=function(){i.target0.copy(i.target),i.position0.copy(i.object.position),i.zoom0=i.object.zoom},this.reset=function(){i.target.copy(i.target0),i.object.position.copy(i.position0),i.object.zoom=i.zoom0,i.object.updateProjectionMatrix(),i.dispatchEvent(tp),i.update(),s=r.NONE},this.update=function(){const A=new O,z=new mr().setFromUnitVectors(e.up,new O(0,1,0)),le=z.clone().invert(),fe=new O,ae=new mr,pe=2*Math.PI;return function(){const De=i.object.position;A.copy(De).sub(i.target),A.applyQuaternion(z),a.setFromVector3(A),i.autoRotate&&s===r.NONE&&b(L()),i.enableDamping?(a.theta+=l.theta*i.dampingFactor,a.phi+=l.phi*i.dampingFactor):(a.theta+=l.theta,a.phi+=l.phi);let Re=i.minAzimuthAngle,Ge=i.maxAzimuthAngle;return isFinite(Re)&&isFinite(Ge)&&(Re<-Math.PI?Re+=pe:Re>Math.PI&&(Re-=pe),Ge<-Math.PI?Ge+=pe:Ge>Math.PI&&(Ge-=pe),Re<=Ge?a.theta=Math.max(Re,Math.min(Ge,a.theta)):a.theta=a.theta>(Re+Ge)/2?Math.max(Re,a.theta):Math.min(Ge,a.theta)),a.phi=Math.max(i.minPolarAngle,Math.min(i.maxPolarAngle,a.phi)),a.makeSafe(),a.radius*=u,a.radius=Math.max(i.minDistance,Math.min(i.maxDistance,a.radius)),i.enableDamping===!0?i.target.addScaledVector(c,i.dampingFactor):i.target.add(c),A.setFromSpherical(a),A.applyQuaternion(le),De.copy(i.target).add(A),i.object.lookAt(i.target),i.enableDamping===!0?(l.theta*=1-i.dampingFactor,l.phi*=1-i.dampingFactor,c.multiplyScalar(1-i.dampingFactor)):(l.set(0,0,0),c.set(0,0,0)),u=1,d||fe.distanceToSquared(i.object.position)>o||8*(1-ae.dot(i.object.quaternion))>o?(i.dispatchEvent(tp),fe.copy(i.object.position),ae.copy(i.object.quaternion),d=!1,!0):!1}}(),this.dispose=function(){i.domElement.removeEventListener("contextmenu",V),i.domElement.removeEventListener("pointerdown",rt),i.domElement.removeEventListener("pointercancel",Wt),i.domElement.removeEventListener("wheel",nn),i.domElement.removeEventListener("pointermove",mt),i.domElement.removeEventListener("pointerup",lt),i._domElementKeyEvents!==null&&i._domElementKeyEvents.removeEventListener("keydown",rn)};const i=this,r={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=r.NONE;const o=1e-6,a=new ep,l=new ep;let u=1;const c=new O;let d=!1;const f=new we,g=new we,x=new we,p=new we,h=new we,m=new we,v=new we,_=new we,M=new we,S=[],C={};function L(){return 2*Math.PI/60/60*i.autoRotateSpeed}function y(){return Math.pow(.95,i.zoomSpeed)}function b(A){l.theta-=A}function R(A){l.phi-=A}const $=function(){const A=new O;return function(le,fe){A.setFromMatrixColumn(fe,0),A.multiplyScalar(-le),c.add(A)}}(),re=function(){const A=new O;return function(le,fe){i.screenSpacePanning===!0?A.setFromMatrixColumn(fe,1):(A.setFromMatrixColumn(fe,0),A.crossVectors(i.object.up,A)),A.multiplyScalar(le),c.add(A)}}(),B=function(){const A=new O;return function(le,fe){const ae=i.domElement;if(i.object.isPerspectiveCamera){const pe=i.object.position;A.copy(pe).sub(i.target);let he=A.length();he*=Math.tan(i.object.fov/2*Math.PI/180),$(2*le*he/ae.clientHeight,i.object.matrix),re(2*fe*he/ae.clientHeight,i.object.matrix)}else i.object.isOrthographicCamera?($(le*(i.object.right-i.object.left)/i.object.zoom/ae.clientWidth,i.object.matrix),re(fe*(i.object.top-i.object.bottom)/i.object.zoom/ae.clientHeight,i.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),i.enablePan=!1)}}();function k(A){i.object.isPerspectiveCamera?u/=A:i.object.isOrthographicCamera?(i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom*A)),i.object.updateProjectionMatrix(),d=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function X(A){i.object.isPerspectiveCamera?u*=A:i.object.isOrthographicCamera?(i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/A)),i.object.updateProjectionMatrix(),d=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function Z(A){f.set(A.clientX,A.clientY)}function Q(A){v.set(A.clientX,A.clientY)}function I(A){p.set(A.clientX,A.clientY)}function P(A){g.set(A.clientX,A.clientY),x.subVectors(g,f).multiplyScalar(i.rotateSpeed);const z=i.domElement;b(2*Math.PI*x.x/z.clientHeight),R(2*Math.PI*x.y/z.clientHeight),f.copy(g),i.update()}function N(A){_.set(A.clientX,A.clientY),M.subVectors(_,v),M.y>0?k(y()):M.y<0&&X(y()),v.copy(_),i.update()}function Y(A){h.set(A.clientX,A.clientY),m.subVectors(h,p).multiplyScalar(i.panSpeed),B(m.x,m.y),p.copy(h),i.update()}function q(A){A.deltaY<0?X(y()):A.deltaY>0&&k(y()),i.update()}function K(A){let z=!1;switch(A.code){case i.keys.UP:B(0,i.keyPanSpeed),z=!0;break;case i.keys.BOTTOM:B(0,-i.keyPanSpeed),z=!0;break;case i.keys.LEFT:B(i.keyPanSpeed,0),z=!0;break;case i.keys.RIGHT:B(-i.keyPanSpeed,0),z=!0;break}z&&(A.preventDefault(),i.update())}function oe(){if(S.length===1)f.set(S[0].pageX,S[0].pageY);else{const A=.5*(S[0].pageX+S[1].pageX),z=.5*(S[0].pageY+S[1].pageY);f.set(A,z)}}function _e(){if(S.length===1)p.set(S[0].pageX,S[0].pageY);else{const A=.5*(S[0].pageX+S[1].pageX),z=.5*(S[0].pageY+S[1].pageY);p.set(A,z)}}function H(){const A=S[0].pageX-S[1].pageX,z=S[0].pageY-S[1].pageY,le=Math.sqrt(A*A+z*z);v.set(0,le)}function Pe(){i.enableZoom&&H(),i.enablePan&&_e()}function ye(){i.enableZoom&&H(),i.enableRotate&&oe()}function Se(A){if(S.length==1)g.set(A.pageX,A.pageY);else{const le=xe(A),fe=.5*(A.pageX+le.x),ae=.5*(A.pageY+le.y);g.set(fe,ae)}x.subVectors(g,f).multiplyScalar(i.rotateSpeed);const z=i.domElement;b(2*Math.PI*x.x/z.clientHeight),R(2*Math.PI*x.y/z.clientHeight),f.copy(g)}function de(A){if(S.length===1)h.set(A.pageX,A.pageY);else{const z=xe(A),le=.5*(A.pageX+z.x),fe=.5*(A.pageY+z.y);h.set(le,fe)}m.subVectors(h,p).multiplyScalar(i.panSpeed),B(m.x,m.y),p.copy(h)}function Ue(A){const z=xe(A),le=A.pageX-z.x,fe=A.pageY-z.y,ae=Math.sqrt(le*le+fe*fe);_.set(0,ae),M.set(0,Math.pow(_.y/v.y,i.zoomSpeed)),k(M.y),v.copy(_)}function Ee(A){i.enableZoom&&Ue(A),i.enablePan&&de(A)}function ve(A){i.enableZoom&&Ue(A),i.enableRotate&&Se(A)}function rt(A){i.enabled!==!1&&(S.length===0&&(i.domElement.setPointerCapture(A.pointerId),i.domElement.addEventListener("pointermove",mt),i.domElement.addEventListener("pointerup",lt)),te(A),A.pointerType==="touch"?T(A):ut(A))}function mt(A){i.enabled!==!1&&(A.pointerType==="touch"?w(A):Be(A))}function lt(A){ne(A),S.length===0&&(i.domElement.releasePointerCapture(A.pointerId),i.domElement.removeEventListener("pointermove",mt),i.domElement.removeEventListener("pointerup",lt)),i.dispatchEvent(np),s=r.NONE}function Wt(A){ne(A)}function ut(A){let z;switch(A.button){case 0:z=i.mouseButtons.LEFT;break;case 1:z=i.mouseButtons.MIDDLE;break;case 2:z=i.mouseButtons.RIGHT;break;default:z=-1}switch(z){case wr.DOLLY:if(i.enableZoom===!1)return;Q(A),s=r.DOLLY;break;case wr.ROTATE:if(A.ctrlKey||A.metaKey||A.shiftKey){if(i.enablePan===!1)return;I(A),s=r.PAN}else{if(i.enableRotate===!1)return;Z(A),s=r.ROTATE}break;case wr.PAN:if(A.ctrlKey||A.metaKey||A.shiftKey){if(i.enableRotate===!1)return;Z(A),s=r.ROTATE}else{if(i.enablePan===!1)return;I(A),s=r.PAN}break;default:s=r.NONE}s!==r.NONE&&i.dispatchEvent(Eu)}function Be(A){switch(s){case r.ROTATE:if(i.enableRotate===!1)return;P(A);break;case r.DOLLY:if(i.enableZoom===!1)return;N(A);break;case r.PAN:if(i.enablePan===!1)return;Y(A);break}}function nn(A){i.enabled===!1||i.enableZoom===!1||s!==r.NONE||(A.preventDefault(),i.dispatchEvent(Eu),q(A),i.dispatchEvent(np))}function rn(A){i.enabled===!1||i.enablePan===!1||K(A)}function T(A){switch(se(A),S.length){case 1:switch(i.touches.ONE){case Er.ROTATE:if(i.enableRotate===!1)return;oe(),s=r.TOUCH_ROTATE;break;case Er.PAN:if(i.enablePan===!1)return;_e(),s=r.TOUCH_PAN;break;default:s=r.NONE}break;case 2:switch(i.touches.TWO){case Er.DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;Pe(),s=r.TOUCH_DOLLY_PAN;break;case Er.DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;ye(),s=r.TOUCH_DOLLY_ROTATE;break;default:s=r.NONE}break;default:s=r.NONE}s!==r.NONE&&i.dispatchEvent(Eu)}function w(A){switch(se(A),s){case r.TOUCH_ROTATE:if(i.enableRotate===!1)return;Se(A),i.update();break;case r.TOUCH_PAN:if(i.enablePan===!1)return;de(A),i.update();break;case r.TOUCH_DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;Ee(A),i.update();break;case r.TOUCH_DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;ve(A),i.update();break;default:s=r.NONE}}function V(A){i.enabled!==!1&&A.preventDefault()}function te(A){S.push(A)}function ne(A){delete C[A.pointerId];for(let z=0;z<S.length;z++)if(S[z].pointerId==A.pointerId){S.splice(z,1);return}}function se(A){let z=C[A.pointerId];z===void 0&&(z=new we,C[A.pointerId]=z),z.set(A.pageX,A.pageY)}function xe(A){const z=A.pointerId===S[0].pointerId?S[1]:S[0];return C[z.pointerId]}i.domElement.addEventListener("contextmenu",V),i.domElement.addEventListener("pointerdown",rt),i.domElement.addEventListener("pointercancel",Wt),i.domElement.addEventListener("wheel",nn,{passive:!1}),this.update()}}const ip={uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );
			gl_FragColor.a *= opacity;


		}`};class pl{constructor(){this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const mw=new Cf(-1,1,1,-1,0,1),Af=new ui;Af.setAttribute("position",new Dn([-1,3,0,-1,-1,0,3,-1,0],3));Af.setAttribute("uv",new Dn([0,2,0,0,2,0],2));class gw{constructor(e){this._mesh=new On(Af,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,mw)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class bc extends pl{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof Gn?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Lg.clone(e.uniforms),this.material=new Gn({defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new gw(this.material)}render(e,t,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class rp extends pl{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,i){const r=e.getContext(),s=e.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(r.REPLACE,r.REPLACE,r.REPLACE),s.buffers.stencil.setFunc(r.ALWAYS,o,4294967295),s.buffers.stencil.setClear(a),s.buffers.stencil.setLocked(!0),e.setRenderTarget(i),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(r.EQUAL,1,4294967295),s.buffers.stencil.setOp(r.KEEP,r.KEEP,r.KEEP),s.buffers.stencil.setLocked(!0)}}class vw extends pl{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class _w{constructor(e,t){if(this.renderer=e,t===void 0){const i=e.getSize(new we);this._pixelRatio=e.getPixelRatio(),this._width=i.width,this._height=i.height,t=new ki(this._width*this._pixelRatio,this._height*this._pixelRatio),t.texture.name="EffectComposer.rt1"}else this._pixelRatio=1,this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],ip===void 0&&console.error("THREE.EffectComposer relies on CopyShader"),bc===void 0&&console.error("THREE.EffectComposer relies on ShaderPass"),this.copyPass=new bc(ip),this.clock=new Ug}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let i=!1;for(let r=0,s=this.passes.length;r<s;r++){const o=this.passes[r];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(r),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,i),o.needsSwap){if(i){const a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}rp!==void 0&&(o instanceof rp?i=!0:o instanceof vw&&(i=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new we);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const i=this._width*this._pixelRatio,r=this._height*this._pixelRatio;this.renderTarget1.setSize(i,r),this.renderTarget2.setSize(i,r);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(i,r)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}new Cf(-1,1,1,-1,0,1);const Bg=new ui;Bg.setAttribute("position",new Dn([-1,3,0,-1,-1,0,3,-1,0],3));Bg.setAttribute("uv",new Dn([0,2,0,0,2,0],2));class xw extends pl{constructor(e,t,i,r,s){super(),this.scene=e,this.camera=t,this.overrideMaterial=i,this.clearColor=r,this.clearAlpha=s!==void 0?s:0,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new $e}render(e,t,i){const r=e.autoClear;e.autoClear=!1;let s,o;this.overrideMaterial!==void 0&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor&&(e.getClearColor(this._oldClearColor),s=e.getClearAlpha(),e.setClearColor(this.clearColor,this.clearAlpha)),this.clearDepth&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:i),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor&&e.setClearColor(this._oldClearColor,s),this.overrideMaterial!==void 0&&(this.scene.overrideMaterial=o),e.autoClear=r}}var yw=`vec4 permute(vec4 x){return mod(((x*34.0)+1.0)*x, 289.0);}
vec4 taylorInvSqrt(vec4 r){return 1.79284291400159 - 0.85373472095314 * r;}
vec3 fade(vec3 t) {return t*t*t*(t*(t*6.0-15.0)+10.0);}

float cnoise(vec3 P){
  vec3 Pi0 = floor(P); 
  vec3 Pi1 = Pi0 + vec3(1.0); 
  Pi0 = mod(Pi0, 289.0);
  Pi1 = mod(Pi1, 289.0);
  vec3 Pf0 = fract(P); 
  vec3 Pf1 = Pf0 - vec3(1.0); 
  vec4 ix = vec4(Pi0.x, Pi1.x, Pi0.x, Pi1.x);
  vec4 iy = vec4(Pi0.yy, Pi1.yy);
  vec4 iz0 = Pi0.zzzz;
  vec4 iz1 = Pi1.zzzz;

  vec4 ixy = permute(permute(ix) + iy);
  vec4 ixy0 = permute(ixy + iz0);
  vec4 ixy1 = permute(ixy + iz1);

  vec4 gx0 = ixy0 / 7.0;
  vec4 gy0 = fract(floor(gx0) / 7.0) - 0.5;
  gx0 = fract(gx0);
  vec4 gz0 = vec4(0.5) - abs(gx0) - abs(gy0);
  vec4 sz0 = step(gz0, vec4(0.0));
  gx0 -= sz0 * (step(0.0, gx0) - 0.5);
  gy0 -= sz0 * (step(0.0, gy0) - 0.5);

  vec4 gx1 = ixy1 / 7.0;
  vec4 gy1 = fract(floor(gx1) / 7.0) - 0.5;
  gx1 = fract(gx1);
  vec4 gz1 = vec4(0.5) - abs(gx1) - abs(gy1);
  vec4 sz1 = step(gz1, vec4(0.0));
  gx1 -= sz1 * (step(0.0, gx1) - 0.5);
  gy1 -= sz1 * (step(0.0, gy1) - 0.5);

  vec3 g000 = vec3(gx0.x,gy0.x,gz0.x);
  vec3 g100 = vec3(gx0.y,gy0.y,gz0.y);
  vec3 g010 = vec3(gx0.z,gy0.z,gz0.z);
  vec3 g110 = vec3(gx0.w,gy0.w,gz0.w);
  vec3 g001 = vec3(gx1.x,gy1.x,gz1.x);
  vec3 g101 = vec3(gx1.y,gy1.y,gz1.y);
  vec3 g011 = vec3(gx1.z,gy1.z,gz1.z);
  vec3 g111 = vec3(gx1.w,gy1.w,gz1.w);

  vec4 norm0 = taylorInvSqrt(vec4(dot(g000, g000), dot(g010, g010), dot(g100, g100), dot(g110, g110)));
  g000 *= norm0.x;
  g010 *= norm0.y;
  g100 *= norm0.z;
  g110 *= norm0.w;
  vec4 norm1 = taylorInvSqrt(vec4(dot(g001, g001), dot(g011, g011), dot(g101, g101), dot(g111, g111)));
  g001 *= norm1.x;
  g011 *= norm1.y;
  g101 *= norm1.z;
  g111 *= norm1.w;

  float n000 = dot(g000, Pf0);
  float n100 = dot(g100, vec3(Pf1.x, Pf0.yz));
  float n010 = dot(g010, vec3(Pf0.x, Pf1.y, Pf0.z));
  float n110 = dot(g110, vec3(Pf1.xy, Pf0.z));
  float n001 = dot(g001, vec3(Pf0.xy, Pf1.z));
  float n101 = dot(g101, vec3(Pf1.x, Pf0.y, Pf1.z));
  float n011 = dot(g011, vec3(Pf0.x, Pf1.yz));
  float n111 = dot(g111, Pf1);

  vec3 fade_xyz = fade(Pf0);
  vec4 n_z = mix(vec4(n000, n100, n010, n110), vec4(n001, n101, n011, n111), fade_xyz.z);
  vec2 n_yz = mix(n_z.xy, n_z.zw, fade_xyz.y);
  float n_xyz = mix(n_yz.x, n_yz.y, fade_xyz.x); 
  return 2.2 * n_xyz;
}`;class Sw{constructor(e){ze(this,"width");ze(this,"height");ze(this,"ref");ze(this,"scene");ze(this,"camera");ze(this,"renderer");ze(this,"controls");ze(this,"objects",[]);ze(this,"scroll");ze(this,"raycaster");ze(this,"mouse");ze(this,"composer");ze(this,"renderPass");ze(this,"myEffect");ze(this,"customPass");ze(this,"speedTarget");this.ref=Ze.exports.createRef(),this.scene=new dw,this.width=e.width,this.height=e.height,this.camera=new fn(70,this.width/this.height,100,2e3),this.camera.position.z=600,this.camera.fov=2*Math.atan(this.height/2/600)*(180/Math.PI),this.camera.aspect=this.width/this.height,this.camera.updateProjectionMatrix(),this.raycaster=new hw,this.mouse=new we}init(){return!this.ref||!this.ref.current?this:(this.renderer=new Og({canvas:this.ref.current,antialias:!0,alpha:!0}),this.renderer.setSize(this.width,this.height),this.renderer.setPixelRatio(Math.min(devicePixelRatio,2)),this.controls=new pw(this.camera,this.renderer.domElement),this.controls.enableDamping=!0,this.composerPass(),this.composer.render(),this)}render(e){e&&this.objects.forEach(t=>t.update(e)),this.customPass.uniforms.scrollSpeed.value=this.speedTarget,this.customPass.uniforms.time.value=e,this.composer.render()}composerPass(){this.composer=new _w(this.renderer),this.renderPass=new xw(this.scene,this.camera),this.composer.addPass(this.renderPass),this.myEffect={uniforms:{tDiffuse:{value:null},scrollSpeed:{value:null},time:{value:null}},vertexShader:`
		  varying vec2 vUv;
		  void main() {
			vUv = uv;
			gl_Position = projectionMatrix 
			  * modelViewMatrix 
			  * vec4( position, 1.0 );
		  }
		  `,fragmentShader:`
		uniform sampler2D tDiffuse;
        varying vec2 vUv;
        uniform float scrollSpeed;
        uniform float time;
        ${yw}
        void main(){
          vec2 newUV = vUv;
          float area = smoothstep(1.,0.8,vUv.y)*2. - 1.;
          float area1 = smoothstep(0.4,0.0,vUv.y);
          area1 = pow(area1,4.);
          float noise = 0.5*(cnoise(vec3(vUv*10.,time)) + 1.);
          float n = smoothstep(0.5,0.51, noise + area/2.);
          newUV.x -= (vUv.x - 0.5)*0.1*area1*scrollSpeed;
          gl_FragColor = texture2D( tDiffuse, newUV);
          gl_FragColor = mix(vec4(1.),texture2D( tDiffuse, newUV),n);
        }`},this.customPass=new bc(this.myEffect),this.customPass.renderToScreen=!0,this.composer.addPass(this.customPass)}resize(e,t){this.width=e,this.height=t,this.camera.aspect=this.width/this.height,this.camera.updateProjectionMatrix(),this.renderer.setSize(this.width,this.height),this.renderer.setPixelRatio(Math.min(devicePixelRatio,2)),this.objects.forEach(i=>i.resize())}mouseMovement(e){this.mouse=new we(e.clientX/this.width*2-1,-(e.clientY/this.height)*2+1),this.raycaster.setFromCamera(this.mouse,this.camera);const t=this.raycaster.intersectObjects(this.scene.children);if(t.length>0){const i=t[0].object.material;i.uniforms.hoverState.value=1,i.uniforms.hover.value=t[0].uv}}addObject(e){this.objects.push(e),this.scene.add(e.get()),this.renderer&&this.composer.render()}removeObject(e){this.objects=this.objects.filter(t=>t!==e),this.scene.remove(e.get()),this.composer.render()}getRef(){return this.ref}getSize(){return[this.width,this.height]}getScroll(){return this.scroll||0}setScroll(e,t){this.scroll=e,this.speedTarget=t}}function Mw(n){return Ze.exports.useEffect(()=>{function e(){n.resize(innerWidth,innerHeight)}return window.addEventListener("resize",e),window.addEventListener("mousemove",t=>n.mouseMovement(t)),()=>{window.removeEventListener("resize",e),window.removeEventListener("mousemove",t=>n.mouseMovement(t))}},[]),n}class ww{constructor(){ze(this,"scrollable");ze(this,"documentScroll");ze(this,"scrollToRender");ze(this,"current");ze(this,"speed");ze(this,"speedTarget");ze(this,"ease");ze(this,"callbacks");this.scrollable=Ze.exports.useRef(null),this.documentScroll=0,this.ease=.1,this.scrollToRender=0,this.current=0,this.speed=0,this.speedTarget=0,this.callbacks=[]}init(){return this.setSize(),this.current=this.scrollToRender=this.scrolled(),this.setPosition(),window.onbeforeunload=function(){window.scrollTo(0,0)},window.addEventListener("resize",this.setSize.bind(this)),window.addEventListener("scroll",this.scrolled.bind(this)),requestAnimationFrame(()=>this.render())}destroy(e){window.removeEventListener("resize",this.setSize.bind(this)),window.removeEventListener("scroll",this.scrolled.bind(this)),cancelAnimationFrame(e)}setSize(){var e;this.scrollable&&this.scrollable.current&&(document.body.style.height=`${((e=this.scrollable.current)==null?void 0:e.scrollHeight)*devicePixelRatio}px`)}scrolled(){return this.documentScroll=window.pageYOffset||document.documentElement.scrollTop,this.documentScroll}setPosition(){this.scrollable.current!==null&&(Math.round(this.scrollToRender)!==Math.round(this.current)||this.scrollToRender<10)&&(this.scrollable.current.style.transform=`translate3d(0,${-1*this.scrollToRender}px,0)`)}lerp(e,t,i){return(1-i)*e+i*t}render(){this.speed=Math.min(Math.abs(this.current-this.scrollToRender),200)/200,this.speedTarget+=(this.speed-this.speedTarget)*.2,this.current=this.scrolled(),this.scrollToRender=this.lerp(this.scrollToRender,this.current,this.ease),this.setPosition(),this.callbacks.forEach(e=>e()),requestAnimationFrame(()=>this.render())}getRef(){return this.scrollable}setCallback(e){this.callbacks.push(e)}}var ml={exports:{}},gl={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ew=Ze.exports,Tw=Symbol.for("react.element"),Cw=Symbol.for("react.fragment"),bw=Object.prototype.hasOwnProperty,Aw=Ew.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Lw={key:!0,ref:!0,__self:!0,__source:!0};function Vg(n,e,t){var i,r={},s=null,o=null;t!==void 0&&(s=""+t),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)bw.call(e,i)&&!Lw.hasOwnProperty(i)&&(r[i]=e[i]);if(n&&n.defaultProps)for(i in e=n.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:Tw,type:n,key:s,ref:o,props:r,_owner:Aw.current}}gl.Fragment=Cw;gl.jsx=Vg;gl.jsxs=Vg;(function(n){n.exports=gl})(ml);const Gg=ml.exports.Fragment,je=ml.exports.jsx,Ni=ml.exports.jsxs,Hg=Ze.exports.createContext({});function Pw({layout:n,canvas:e}){const t=new ww,i=Ze.exports.useRef(0),[r,s]=Ze.exports.useState({});return Ze.exports.useEffect(()=>(i.current=t.init(),s({position:"fixed",width:"100%",height:"100%",top:0,left:0,overflow:"hidden"}),()=>t.destroy(i.current)),[]),Ni(Hg.Provider,{value:t,children:[je("main",{style:r,children:je("div",{"data-scroll":!0,ref:t.getRef(),children:n})}),e]})}function Dw(n){const e=new Ug,t=Ze.exports.useContext(Hg),i=()=>{n.setScroll(t.scrollToRender,t.speedTarget);const r=e.getElapsedTime();n.render(r)};return Ze.exports.useEffect(()=>{t.setCallback(i)},[]),n}function Rw(n=innerWidth,e=innerHeight){return Dw(Mw(new Sw({width:n,height:e})))}const Wg=Ze.exports.createContext({});function Iw({children:n}){const[e,t]=Ze.exports.useState(Rw());return Ze.exports.useEffect(()=>{t(e.init())},[]),je(Wg.Provider,{value:e,children:je("canvas",{ref:e.getRef(),children:n})})}var Nw=`uniform float uTime;
uniform vec2 hover;
uniform float hoverState;
varying float vNoise;
varying vec2 vUv;

void main() {
  vec3 newposition = position;
  float dist = distance(uv,hover);
  
  newposition.z += hoverState*10.*sin(dist*10. + uTime);
  vNoise = hoverState*sin(dist*10. - uTime);
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(newposition, 1.0);
}`,zw=`uniform float uTime;
uniform sampler2D uImage;
varying vec2 vUv;
varying float dist;
varying float vNoise;

void main() {
  vec4 imageView = texture2D(uImage, vUv);
  gl_FragColor = vec4(vNoise, 0.,0.,1.);
  gl_FragColor = imageView;
  gl_FragColor.rgb += 0.1*vec3(vNoise);
}`;class Fw extends Gn{constructor(e){super({wireframe:!1,side:ti,fragmentShader:zw,vertexShader:Nw,uniforms:{uTime:{value:0},uImage:{value:null},hover:{value:new we(.5,.5)},hoverState:{value:0}}})}update(e){this.uniforms.uTime.value=e}}class kw{constructor(e,t,i){ze(this,"width");ze(this,"height");ze(this,"geometry");ze(this,"material");ze(this,"mesh");ze(this,"updateFunc");ze(this,"img");this.width=e,this.height=t,i&&(this.img=i),this.geometry=new dl(this.width,this.height,Math.max(1,this.width/25),Math.max(1,this.height/25)),this.material=new Fw,this.mesh=new On(this.geometry,this.material),this.updateFunc=[this.updateMaterial.bind(this)]}resize(){}get(){return this.mesh}setMaterial(e){this.material=e,this.material.needsUpdate=!0,this.mesh.material=this.material}setPosition(e=0,t=0,i=0){this.mesh.position.set(e,t,i)}setRotation(e=0,t=0,i=0){var r,s;(s=(r=this==null?void 0:this.mesh)==null?void 0:r.rotation)==null||s.set(e,t,i)}update(e){this.updateFunc.forEach(t=>t(e))}setUpdate(e){this.updateFunc.push(e)}updateMaterial(e){var t;(t=this.material)==null||t.update(e||0)}}function Ow({img:n,cell:e,index:t,updateCell:i}){const r=Ze.exports.useContext(Wg),{width:s,height:o,top:a,left:l}=n.getBoundingClientRect(),[u,c]=r.getSize(),d=new kw(s,o,n);return Ze.exports.useEffect(()=>{const f=()=>{d.material.uniforms.hoverState.value=1},g=()=>{d.material.uniforms.hoverState.value=0},x=l-u/2+s/2,p=-a+c/2-o/2;d.setPosition(x,p,0),d.setUpdate(()=>d.setPosition(x,r.getScroll()+p,0));const h=new _n(n);h.needsUpdate=!0,d.material.uniforms.uImage.value=h,r.addObject(d);let m=Object.assign({},e,{mouseenter:f,mouseout:g});return i(t,m),()=>{r.removeObject(d)}},[r]),je(Gg,{})}const Uw="/dist/assets/header.0283f106.jpg",Bw=()=>Ni("header",{children:[je("h1",{children:"Oceans"}),je("img",{src:Uw,alt:""})]});const Vw=({link:n,img:e,meta:t,title:i,text:r,index:s,mouseenter:o,mouseout:a},l)=>Ni("a",{href:n,className:`item ${s%2?"item_v":"item_h"}`,children:[Ni("div",{className:"item__image",children:[je("img",{src:`/src/assets/imgs/${e}`,alt:"",ref:l,onMouseEnter:()=>o&&o(),onMouseOut:()=>a&&a()}),je("div",{className:"item__meta",children:t})]}),je("h2",{className:"item__title",children:i}),je("p",{children:r})]}),Gw=Ze.exports.forwardRef(Vw);const Hw=()=>Ni("footer",{className:"footer",children:[Ni("p",{children:["\xA9 all news from ",je("a",{href:"https://citaty.org.ua/tsytaty-pro-okeany/",children:"\u0426\u0438\u0442\u0430\u0442\u0438 \u043F\u0440\u043E \u043E\u043A\u0435\u0430\u043D"})]}),Ni("p",{children:["This page was made by ",je("a",{href:"https://github.com/NataliaZhydeikina/",children:"Nataliia Zhydeikina"}),je("br",{}),"Wish you a good year!"]})]}),Ww=n=>{const[e,t]=Ze.exports.useState(!1);return Ze.exports.useEffect(()=>{const i=s=>{t(s.map(o=>o.complete).every(o=>o===!0))};if(!(n!=null&&n.current))return;const r=Array.from(n.current.querySelectorAll("img"));if(r.length===0){t(!0);return}r.forEach(s=>{s.addEventListener("load",()=>i(r),{once:!0}),s.addEventListener("error",()=>i(r),{once:!0})})},[n]),e};function jw(){const[n,e]=Ze.exports.useState([{index:1,link:"#",img:"1.jpg",meta:"December 23, 2022",title:"\u0417\u043D\u0430\u0454\u0448, \u0449\u043E \u043C\u0435\u043A\u0441\u0438\u043A\u0430\u043D\u0446\u0456 \u0433\u043E\u0432\u043E\u0440\u044F\u0442\u044C \u043F\u0440\u043E \u0422\u0438\u0445\u0438\u0439 \u043E\u043A\u0435\u0430\u043D? \u041A\u0430\u0436\u0443\u0442\u044C, \u0449\u043E \u0443 \u043D\u044C\u043E\u0433\u043E \u043D\u0435\u043C\u0430\u0454 \u043F\u0430\u043C'\u044F\u0442\u0456.",text:"\u0421\u0442\u0456\u0432\u0435\u043D \u041A\u0456\u043D\u0433",mouseenter:null,mouseout:null},{index:2,link:"#",img:"2.jpg",meta:"December 24, 2022",title:"\u0414\u043E\u0441\u0438\u0442\u044C \u043D\u0435\u0434\u043E\u0440\u0435\u0447\u043D\u043E \u043D\u0430\u0437\u0438\u0432\u0430\u0442\u0438 \u0446\u044E \u043F\u043B\u0430\u043D\u0435\u0442\u0443 \u2014 \u0417\u0435\u043C\u043B\u044F, \u043A\u043E\u043B\u0438 \u043E\u0447\u0435\u0432\u0438\u0434\u043D\u043E, \u0449\u043E \u0432\u043E\u043D\u0430 \u2014 \u041E\u043A\u0435\u0430\u043D.",text:"\u0410\u0440\u0442\u0443\u0440 \u041A\u043B\u0430\u0440\u043A",mouseenter:null,mouseout:null},{index:3,link:"#",img:"3.jpg",meta:"December 25, 2022",title:"\u0422\u0438 \u043D\u0456\u043A\u043E\u043B\u0438 \u043D\u0435 \u043F\u0435\u0440\u0435\u043F\u043B\u0438\u0432\u0435\u0448 \u043E\u043A\u0435\u0430\u043D, \u044F\u043A\u0449\u043E \u0431\u0443\u0434\u0435\u0448 \u0431\u043E\u044F\u0442\u0438\u0441\u044F \u0432\u0442\u0440\u0430\u0442\u0438\u0442\u0438 \u0431\u0435\u0440\u0435\u0433 \u0437 \u0443\u0432\u0430\u0433\u0438.",text:"\u0425\u0440\u0438\u0441\u0442\u043E\u0444\u043E\u0440 \u041A\u043E\u043B\u0443\u043C\u0431",mouseenter:null,mouseout:null},{index:4,link:"#",img:"4.jpg",meta:"December 26, 2022",title:"\u042F\u043A\u0449\u043E \u043F\u0456\u0434 \u0431\u043E\u043A\u043E\u043C \u043D\u0435\u043C\u0430\u0454 \u043E\u043A\u0435\u0430\u043D\u0443, \u0437\u0456\u0439\u0434\u0435 \u0456 \u0431\u0430\u0441\u0435\u0439\u043D. \u042F\u043A\u0449\u043E \u043D\u0435\u043C\u0430\u0454 \u0431\u0430\u0441\u0435\u0439\u043D\u0443, \u0432\u043A\u043B\u044E\u0447\u0438 \u0434\u0443\u0448. \u0422\u043E\u0434\u0456 \u043C\u043E\u0436\u0435\u0448 \u043A\u0440\u0438\u0447\u0430\u0442\u0438, \u0432\u0438\u0442\u0438 \u0456 \u0440\u0438\u0434\u0430\u0442\u0438 \u0441\u043A\u0456\u043B\u044C\u043A\u0438 \u0442\u043E\u0431\u0456 \u0432\u043B\u0456\u0437\u0435, \u0456 \u043D\u0456\u0445\u0442\u043E \u043F\u0440\u043E \u0446\u0435 \u043D\u0435 \u0434\u0456\u0437\u043D\u0430\u0454\u0442\u044C\u0441\u044F, \u043D\u0456\u0445\u0442\u043E \u043D\u0435 \u043F\u043E\u0447\u0443\u0454. \u041A\u043E\u043B\u0438-\u043D\u0435\u0431\u0443\u0434\u044C \u0446\u0438\u043C \u043A\u043E\u0440\u0438\u0441\u0442\u0443\u0432\u0430\u0432\u0441\u044F?",text:"\u0420\u0435\u0439 \u0411\u0440\u0435\u0434\u0431\u0435\u0440\u0456",mouseenter:null,mouseout:null},{index:5,link:"#",img:"1.jpg",meta:"December 27, 2022",title:"\u041B\u044E\u0431\u043E\u0432 \u2013 \u043D\u0430\u0434 \u0431\u0443\u0440\u0435\u044E \u043F\u0456\u0434\u043D\u044F\u0442\u0438\u0439 \u043C\u0430\u044F\u043A, \u043D\u0435\u043C\u0435\u0440\u043A\u043D\u0443\u0447\u0438\u0439 \u0432 \u0442\u0435\u043C\u0440\u044F\u0432\u0456 \u0456 \u0442\u0443\u043C\u0430\u043D\u0456, \u043B\u044E\u0431\u043E\u0432 \u2013 \u0437\u0456\u0440\u043A\u0430, \u044F\u043A\u043E\u044E \u043C\u043E\u0440\u044F\u043A \u0432\u0438\u0437\u043D\u0430\u0447\u0430\u0454 \u043C\u0456\u0441\u0446\u0435 \u0432 \u043E\u043A\u0435\u0430\u043D\u0456.",text:"\u0412\u0456\u043B\u044C\u044F\u043C \u0428\u0435\u043A\u0441\u043F\u0456\u0440",mouseenter:null,mouseout:null},{index:6,link:"#",img:"2.jpg",meta:"December 28, 2022",title:"\u041B\u044E\u0431\u043E\u0432! \u0421\u043A\u0456\u043B\u044C\u043A\u0438 \u043D\u0435\u043E\u0441\u044F\u0436\u043D\u043E\u0433\u043E \u0432 \u0446\u044C\u043E\u043C\u0443 \u0441\u043B\u043E\u0432\u0456! \u042F\u043A\u0438\u0439 \u043E\u043A\u0435\u0430\u043D \u0432 \u043E\u0434\u043D\u0456\u0439 \u0441\u043B\u044C\u043E\u0437\u0456! \u042F\u043A\u0435 \u043D\u0435\u0431\u043E \u0432 \u043E\u0434\u043D\u043E\u043C\u0443 \u043F\u043E\u0433\u043B\u044F\u0434\u0456! \u042F\u043A\u0430 \u0431\u0443\u0440\u044F \u0432 \u043E\u0434\u043D\u043E\u043C\u0443 \u043F\u043E\u0434\u0438\u0445\u0443! \u042F\u043A\u0430 \u0431\u043B\u0438\u0441\u043A\u0430\u0432\u043A\u0430 \u0432 \u043E\u0434\u043D\u043E\u043C\u0443 \u0434\u043E\u0442\u0438\u043A\u0443! \u042F\u043A\u0430 \u0432\u0456\u0447\u043D\u0456\u0441\u0442\u044C \u0432 \u043E\u0434\u043D\u043E\u043C\u0443 \u043C\u043E\u043C\u0435\u043D\u0442\u0456!",text:"\u0410. \u0424\u0440\u0430\u043D\u0441",mouseenter:null,mouseout:null},{index:7,link:"#",img:"4.jpg",meta:"December 29, 2022",title:"\u042F \u043D\u0435 \u0442\u0435\u0440\u043F\u043B\u044E \u0441\u0442\u0456\u043D \u0456 \u043F\u0435\u0440\u0435\u0433\u043E\u0440\u043E\u0434\u043E\u043A. \u041D\u0435\u0431\u043E, \u0449\u043E \u043E\u0445\u043E\u043F\u043B\u044E\u0454 \u043F\u043E \u0432\u0441\u0456\u0439 \u0437\u0435\u043C\u043B\u0456, \u0432\u0456\u0442\u0435\u0440, \u0449\u043E \u043D\u0435 \u0437\u0443\u0441\u0442\u0440\u0456\u0447\u0430\u0454 \u043F\u0435\u0440\u0435\u0448\u043A\u043E\u0434, \u043E\u043A\u0435\u0430\u043D, \u0449\u043E \u043E\u043C\u0438\u0432\u0430\u0454 \u0432\u0441\u0456 \u0431\u0435\u0440\u0435\u0433\u0430, \u2013 \u043E\u0441\u044C \u0456\u0434\u0435\u0430\u043B.",text:"\u041C\u0430\u0445\u0430\u0442\u043C\u0430 \u0413\u0430\u043D\u0434\u0456",mouseenter:null,mouseout:null},{index:8,link:"#",img:"3.jpg",meta:"December 30, 2022",title:"\u041F\u043E\u0433\u043B\u044F\u043D\u044C\u0442\u0435-\u043D\u043E \u043D\u0430 \u043E\u043A\u0435\u0430\u043D, \u0445\u0456\u0431\u0430 \u0446\u0435 \u043D\u0435 \u0436\u0438\u0432\u0430 \u0456\u0441\u0442\u043E\u0442\u0430? \u0427\u0430\u0441\u043E\u043C \u0433\u043D\u0456\u0432\u043D\u0435, \u0447\u0430\u0441\u043E\u043C \u043D\u0456\u0436\u043D\u0435!",text:"\u0416\u044E\u043B\u044C \u0412\u0435\u0440\u043D",mouseenter:null,mouseout:null}]),t=Ze.exports.useRef(new Array(n.length)),i=Ze.exports.useRef(null),r=Ww(i),s=(o,a)=>{const{mouseenter:l,mouseout:u}=n[o];(l===null||u===null)&&e(n.map((c,d)=>d===o?a:c))};return je(Gg,{children:je(Pw,{layout:Ni("div",{className:"page",children:[je(Bw,{}),je("div",{className:"grid",ref:i,children:n.map((o,a)=>je(Gw,{ref:l=>t.current[a]=l,...o},Bd()))}),je(Hw,{})]}),canvas:je("div",{id:"container",children:je(Iw,{children:r&&t.current.map((o,a)=>je(Ow,{cell:n[a],index:a,updateCell:s,img:o},Bd()))})})})})}Tu.createRoot(document.getElementById("root")).render(je(h0.StrictMode,{children:je(jw,{})}));
