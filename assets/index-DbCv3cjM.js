(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();var Dg={exports:{}},wc={},Ng={exports:{}},Je={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ro=Symbol.for("react.element"),zv=Symbol.for("react.portal"),Vv=Symbol.for("react.fragment"),Hv=Symbol.for("react.strict_mode"),Gv=Symbol.for("react.profiler"),Wv=Symbol.for("react.provider"),Xv=Symbol.for("react.context"),jv=Symbol.for("react.forward_ref"),Yv=Symbol.for("react.suspense"),qv=Symbol.for("react.memo"),$v=Symbol.for("react.lazy"),gp=Symbol.iterator;function Kv(t){return t===null||typeof t!="object"?null:(t=gp&&t[gp]||t["@@iterator"],typeof t=="function"?t:null)}var Ug={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Fg=Object.assign,Og={};function pa(t,e,n){this.props=t,this.context=e,this.refs=Og,this.updater=n||Ug}pa.prototype.isReactComponent={};pa.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};pa.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function kg(){}kg.prototype=pa.prototype;function jd(t,e,n){this.props=t,this.context=e,this.refs=Og,this.updater=n||Ug}var Yd=jd.prototype=new kg;Yd.constructor=jd;Fg(Yd,pa.prototype);Yd.isPureReactComponent=!0;var _p=Array.isArray,Bg=Object.prototype.hasOwnProperty,qd={current:null},zg={key:!0,ref:!0,__self:!0,__source:!0};function Vg(t,e,n){var i,r={},s=null,a=null;if(e!=null)for(i in e.ref!==void 0&&(a=e.ref),e.key!==void 0&&(s=""+e.key),e)Bg.call(e,i)&&!zg.hasOwnProperty(i)&&(r[i]=e[i]);var o=arguments.length-2;if(o===1)r.children=n;else if(1<o){for(var l=Array(o),c=0;c<o;c++)l[c]=arguments[c+2];r.children=l}if(t&&t.defaultProps)for(i in o=t.defaultProps,o)r[i]===void 0&&(r[i]=o[i]);return{$$typeof:Ro,type:t,key:s,ref:a,props:r,_owner:qd.current}}function Zv(t,e){return{$$typeof:Ro,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function $d(t){return typeof t=="object"&&t!==null&&t.$$typeof===Ro}function Qv(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var vp=/\/+/g;function Wc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?Qv(""+t.key):e.toString(36)}function Rl(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var a=!1;if(t===null)a=!0;else switch(s){case"string":case"number":a=!0;break;case"object":switch(t.$$typeof){case Ro:case zv:a=!0}}if(a)return a=t,r=r(a),t=i===""?"."+Wc(a,0):i,_p(r)?(n="",t!=null&&(n=t.replace(vp,"$&/")+"/"),Rl(r,e,n,"",function(c){return c})):r!=null&&($d(r)&&(r=Zv(r,n+(!r.key||a&&a.key===r.key?"":(""+r.key).replace(vp,"$&/")+"/")+t)),e.push(r)),1;if(a=0,i=i===""?".":i+":",_p(t))for(var o=0;o<t.length;o++){s=t[o];var l=i+Wc(s,o);a+=Rl(s,e,n,l,r)}else if(l=Kv(t),typeof l=="function")for(t=l.call(t),o=0;!(s=t.next()).done;)s=s.value,l=i+Wc(s,o++),a+=Rl(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return a}function Oo(t,e,n){if(t==null)return t;var i=[],r=0;return Rl(t,i,"","",function(s){return e.call(n,s,r++)}),i}function Jv(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var mn={current:null},bl={transition:null},ex={ReactCurrentDispatcher:mn,ReactCurrentBatchConfig:bl,ReactCurrentOwner:qd};function Hg(){throw Error("act(...) is not supported in production builds of React.")}Je.Children={map:Oo,forEach:function(t,e,n){Oo(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Oo(t,function(){e++}),e},toArray:function(t){return Oo(t,function(e){return e})||[]},only:function(t){if(!$d(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Je.Component=pa;Je.Fragment=Vv;Je.Profiler=Gv;Je.PureComponent=jd;Je.StrictMode=Hv;Je.Suspense=Yv;Je.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ex;Je.act=Hg;Je.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=Fg({},t.props),r=t.key,s=t.ref,a=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,a=qd.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var o=t.type.defaultProps;for(l in e)Bg.call(e,l)&&!zg.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&o!==void 0?o[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){o=Array(l);for(var c=0;c<l;c++)o[c]=arguments[c+2];i.children=o}return{$$typeof:Ro,type:t.type,key:r,ref:s,props:i,_owner:a}};Je.createContext=function(t){return t={$$typeof:Xv,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:Wv,_context:t},t.Consumer=t};Je.createElement=Vg;Je.createFactory=function(t){var e=Vg.bind(null,t);return e.type=t,e};Je.createRef=function(){return{current:null}};Je.forwardRef=function(t){return{$$typeof:jv,render:t}};Je.isValidElement=$d;Je.lazy=function(t){return{$$typeof:$v,_payload:{_status:-1,_result:t},_init:Jv}};Je.memo=function(t,e){return{$$typeof:qv,type:t,compare:e===void 0?null:e}};Je.startTransition=function(t){var e=bl.transition;bl.transition={};try{t()}finally{bl.transition=e}};Je.unstable_act=Hg;Je.useCallback=function(t,e){return mn.current.useCallback(t,e)};Je.useContext=function(t){return mn.current.useContext(t)};Je.useDebugValue=function(){};Je.useDeferredValue=function(t){return mn.current.useDeferredValue(t)};Je.useEffect=function(t,e){return mn.current.useEffect(t,e)};Je.useId=function(){return mn.current.useId()};Je.useImperativeHandle=function(t,e,n){return mn.current.useImperativeHandle(t,e,n)};Je.useInsertionEffect=function(t,e){return mn.current.useInsertionEffect(t,e)};Je.useLayoutEffect=function(t,e){return mn.current.useLayoutEffect(t,e)};Je.useMemo=function(t,e){return mn.current.useMemo(t,e)};Je.useReducer=function(t,e,n){return mn.current.useReducer(t,e,n)};Je.useRef=function(t){return mn.current.useRef(t)};Je.useState=function(t){return mn.current.useState(t)};Je.useSyncExternalStore=function(t,e,n){return mn.current.useSyncExternalStore(t,e,n)};Je.useTransition=function(){return mn.current.useTransition()};Je.version="18.3.1";Ng.exports=Je;var be=Ng.exports;/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var tx=be,nx=Symbol.for("react.element"),ix=Symbol.for("react.fragment"),rx=Object.prototype.hasOwnProperty,sx=tx.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,ax={key:!0,ref:!0,__self:!0,__source:!0};function Gg(t,e,n){var i,r={},s=null,a=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(a=e.ref);for(i in e)rx.call(e,i)&&!ax.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:nx,type:t,key:s,ref:a,props:r,_owner:sx.current}}wc.Fragment=ix;wc.jsx=Gg;wc.jsxs=Gg;Dg.exports=wc;var F=Dg.exports,Wg={exports:{}},Un={},Xg={exports:{}},jg={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(B,Y){var Q=B.length;B.push(Y);e:for(;0<Q;){var he=Q-1>>>1,me=B[he];if(0<r(me,Y))B[he]=Y,B[Q]=me,Q=he;else break e}}function n(B){return B.length===0?null:B[0]}function i(B){if(B.length===0)return null;var Y=B[0],Q=B.pop();if(Q!==Y){B[0]=Q;e:for(var he=0,me=B.length,Ve=me>>>1;he<Ve;){var $e=2*(he+1)-1,De=B[$e],V=$e+1,te=B[V];if(0>r(De,Q))V<me&&0>r(te,De)?(B[he]=te,B[V]=Q,he=V):(B[he]=De,B[$e]=Q,he=$e);else if(V<me&&0>r(te,Q))B[he]=te,B[V]=Q,he=V;else break e}}return Y}function r(B,Y){var Q=B.sortIndex-Y.sortIndex;return Q!==0?Q:B.id-Y.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var a=Date,o=a.now();t.unstable_now=function(){return a.now()-o}}var l=[],c=[],d=1,h=null,u=3,p=!1,v=!1,E=!1,g=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,m=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function _(B){for(var Y=n(c);Y!==null;){if(Y.callback===null)i(c);else if(Y.startTime<=B)i(c),Y.sortIndex=Y.expirationTime,e(l,Y);else break;Y=n(c)}}function M(B){if(E=!1,_(B),!v)if(n(l)!==null)v=!0,k(R);else{var Y=n(c);Y!==null&&z(M,Y.startTime-B)}}function R(B,Y){v=!1,E&&(E=!1,f(x),x=-1),p=!0;var Q=u;try{for(_(Y),h=n(l);h!==null&&(!(h.expirationTime>Y)||B&&!P());){var he=h.callback;if(typeof he=="function"){h.callback=null,u=h.priorityLevel;var me=he(h.expirationTime<=Y);Y=t.unstable_now(),typeof me=="function"?h.callback=me:h===n(l)&&i(l),_(Y)}else i(l);h=n(l)}if(h!==null)var Ve=!0;else{var $e=n(c);$e!==null&&z(M,$e.startTime-Y),Ve=!1}return Ve}finally{h=null,u=Q,p=!1}}var T=!1,C=null,x=-1,A=5,b=-1;function P(){return!(t.unstable_now()-b<A)}function N(){if(C!==null){var B=t.unstable_now();b=B;var Y=!0;try{Y=C(!0,B)}finally{Y?X():(T=!1,C=null)}}else T=!1}var X;if(typeof m=="function")X=function(){m(N)};else if(typeof MessageChannel<"u"){var q=new MessageChannel,D=q.port2;q.port1.onmessage=N,X=function(){D.postMessage(null)}}else X=function(){g(N,0)};function k(B){C=B,T||(T=!0,X())}function z(B,Y){x=g(function(){B(t.unstable_now())},Y)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(B){B.callback=null},t.unstable_continueExecution=function(){v||p||(v=!0,k(R))},t.unstable_forceFrameRate=function(B){0>B||125<B?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):A=0<B?Math.floor(1e3/B):5},t.unstable_getCurrentPriorityLevel=function(){return u},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(B){switch(u){case 1:case 2:case 3:var Y=3;break;default:Y=u}var Q=u;u=Y;try{return B()}finally{u=Q}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(B,Y){switch(B){case 1:case 2:case 3:case 4:case 5:break;default:B=3}var Q=u;u=B;try{return Y()}finally{u=Q}},t.unstable_scheduleCallback=function(B,Y,Q){var he=t.unstable_now();switch(typeof Q=="object"&&Q!==null?(Q=Q.delay,Q=typeof Q=="number"&&0<Q?he+Q:he):Q=he,B){case 1:var me=-1;break;case 2:me=250;break;case 5:me=1073741823;break;case 4:me=1e4;break;default:me=5e3}return me=Q+me,B={id:d++,callback:Y,priorityLevel:B,startTime:Q,expirationTime:me,sortIndex:-1},Q>he?(B.sortIndex=Q,e(c,B),n(l)===null&&B===n(c)&&(E?(f(x),x=-1):E=!0,z(M,Q-he))):(B.sortIndex=me,e(l,B),v||p||(v=!0,k(R))),B},t.unstable_shouldYield=P,t.unstable_wrapCallback=function(B){var Y=u;return function(){var Q=u;u=Y;try{return B.apply(this,arguments)}finally{u=Q}}}})(jg);Xg.exports=jg;var ox=Xg.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var lx=be,Nn=ox;function oe(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Yg=new Set,ro={};function os(t,e){ia(t,e),ia(t+"Capture",e)}function ia(t,e){for(ro[t]=e,t=0;t<e.length;t++)Yg.add(e[t])}var Gi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),sf=Object.prototype.hasOwnProperty,cx=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,xp={},yp={};function ux(t){return sf.call(yp,t)?!0:sf.call(xp,t)?!1:cx.test(t)?yp[t]=!0:(xp[t]=!0,!1)}function fx(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function dx(t,e,n,i){if(e===null||typeof e>"u"||fx(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function gn(t,e,n,i,r,s,a){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=a}var Jt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Jt[t]=new gn(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Jt[e]=new gn(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Jt[t]=new gn(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Jt[t]=new gn(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Jt[t]=new gn(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Jt[t]=new gn(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Jt[t]=new gn(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Jt[t]=new gn(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Jt[t]=new gn(t,5,!1,t.toLowerCase(),null,!1,!1)});var Kd=/[\-:]([a-z])/g;function Zd(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Kd,Zd);Jt[e]=new gn(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Kd,Zd);Jt[e]=new gn(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Kd,Zd);Jt[e]=new gn(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Jt[t]=new gn(t,1,!1,t.toLowerCase(),null,!1,!1)});Jt.xlinkHref=new gn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Jt[t]=new gn(t,1,!1,t.toLowerCase(),null,!0,!0)});function Qd(t,e,n,i){var r=Jt.hasOwnProperty(e)?Jt[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(dx(e,n,r,i)&&(n=null),i||r===null?ux(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var $i=lx.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ko=Symbol.for("react.element"),Os=Symbol.for("react.portal"),ks=Symbol.for("react.fragment"),Jd=Symbol.for("react.strict_mode"),af=Symbol.for("react.profiler"),qg=Symbol.for("react.provider"),$g=Symbol.for("react.context"),eh=Symbol.for("react.forward_ref"),of=Symbol.for("react.suspense"),lf=Symbol.for("react.suspense_list"),th=Symbol.for("react.memo"),or=Symbol.for("react.lazy"),Kg=Symbol.for("react.offscreen"),Sp=Symbol.iterator;function Sa(t){return t===null||typeof t!="object"?null:(t=Sp&&t[Sp]||t["@@iterator"],typeof t=="function"?t:null)}var Pt=Object.assign,Xc;function za(t){if(Xc===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Xc=e&&e[1]||""}return`
`+Xc+t}var jc=!1;function Yc(t,e){if(!t||jc)return"";jc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){i=c}t.call(e.prototype)}else{try{throw Error()}catch(c){i=c}t()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),a=r.length-1,o=s.length-1;1<=a&&0<=o&&r[a]!==s[o];)o--;for(;1<=a&&0<=o;a--,o--)if(r[a]!==s[o]){if(a!==1||o!==1)do if(a--,o--,0>o||r[a]!==s[o]){var l=`
`+r[a].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=a&&0<=o);break}}}finally{jc=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?za(t):""}function hx(t){switch(t.tag){case 5:return za(t.type);case 16:return za("Lazy");case 13:return za("Suspense");case 19:return za("SuspenseList");case 0:case 2:case 15:return t=Yc(t.type,!1),t;case 11:return t=Yc(t.type.render,!1),t;case 1:return t=Yc(t.type,!0),t;default:return""}}function cf(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case ks:return"Fragment";case Os:return"Portal";case af:return"Profiler";case Jd:return"StrictMode";case of:return"Suspense";case lf:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case $g:return(t.displayName||"Context")+".Consumer";case qg:return(t._context.displayName||"Context")+".Provider";case eh:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case th:return e=t.displayName||null,e!==null?e:cf(t.type)||"Memo";case or:e=t._payload,t=t._init;try{return cf(t(e))}catch{}}return null}function px(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return cf(e);case 8:return e===Jd?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Tr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Zg(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function mx(t){var e=Zg(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(a){i=""+a,s.call(this,a)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(a){i=""+a},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Bo(t){t._valueTracker||(t._valueTracker=mx(t))}function Qg(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=Zg(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function ql(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function uf(t,e){var n=e.checked;return Pt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Mp(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=Tr(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Jg(t,e){e=e.checked,e!=null&&Qd(t,"checked",e,!1)}function ff(t,e){Jg(t,e);var n=Tr(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?df(t,e.type,n):e.hasOwnProperty("defaultValue")&&df(t,e.type,Tr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Ep(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function df(t,e,n){(e!=="number"||ql(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Va=Array.isArray;function $s(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+Tr(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function hf(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(oe(91));return Pt({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Tp(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(oe(92));if(Va(n)){if(1<n.length)throw Error(oe(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Tr(n)}}function e0(t,e){var n=Tr(e.value),i=Tr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function wp(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function t0(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function pf(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?t0(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var zo,n0=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(zo=zo||document.createElement("div"),zo.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=zo.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function so(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var ja={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},gx=["Webkit","ms","Moz","O"];Object.keys(ja).forEach(function(t){gx.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),ja[e]=ja[t]})});function i0(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||ja.hasOwnProperty(t)&&ja[t]?(""+e).trim():e+"px"}function r0(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=i0(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var _x=Pt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function mf(t,e){if(e){if(_x[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(oe(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(oe(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(oe(61))}if(e.style!=null&&typeof e.style!="object")throw Error(oe(62))}}function gf(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var _f=null;function nh(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var vf=null,Ks=null,Zs=null;function Ap(t){if(t=Lo(t)){if(typeof vf!="function")throw Error(oe(280));var e=t.stateNode;e&&(e=Pc(e),vf(t.stateNode,t.type,e))}}function s0(t){Ks?Zs?Zs.push(t):Zs=[t]:Ks=t}function a0(){if(Ks){var t=Ks,e=Zs;if(Zs=Ks=null,Ap(t),e)for(t=0;t<e.length;t++)Ap(e[t])}}function o0(t,e){return t(e)}function l0(){}var qc=!1;function c0(t,e,n){if(qc)return t(e,n);qc=!0;try{return o0(t,e,n)}finally{qc=!1,(Ks!==null||Zs!==null)&&(l0(),a0())}}function ao(t,e){var n=t.stateNode;if(n===null)return null;var i=Pc(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(oe(231,e,typeof n));return n}var xf=!1;if(Gi)try{var Ma={};Object.defineProperty(Ma,"passive",{get:function(){xf=!0}}),window.addEventListener("test",Ma,Ma),window.removeEventListener("test",Ma,Ma)}catch{xf=!1}function vx(t,e,n,i,r,s,a,o,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(d){this.onError(d)}}var Ya=!1,$l=null,Kl=!1,yf=null,xx={onError:function(t){Ya=!0,$l=t}};function yx(t,e,n,i,r,s,a,o,l){Ya=!1,$l=null,vx.apply(xx,arguments)}function Sx(t,e,n,i,r,s,a,o,l){if(yx.apply(this,arguments),Ya){if(Ya){var c=$l;Ya=!1,$l=null}else throw Error(oe(198));Kl||(Kl=!0,yf=c)}}function ls(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function u0(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Cp(t){if(ls(t)!==t)throw Error(oe(188))}function Mx(t){var e=t.alternate;if(!e){if(e=ls(t),e===null)throw Error(oe(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return Cp(r),t;if(s===i)return Cp(r),e;s=s.sibling}throw Error(oe(188))}if(n.return!==i.return)n=r,i=s;else{for(var a=!1,o=r.child;o;){if(o===n){a=!0,n=r,i=s;break}if(o===i){a=!0,i=r,n=s;break}o=o.sibling}if(!a){for(o=s.child;o;){if(o===n){a=!0,n=s,i=r;break}if(o===i){a=!0,i=s,n=r;break}o=o.sibling}if(!a)throw Error(oe(189))}}if(n.alternate!==i)throw Error(oe(190))}if(n.tag!==3)throw Error(oe(188));return n.stateNode.current===n?t:e}function f0(t){return t=Mx(t),t!==null?d0(t):null}function d0(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=d0(t);if(e!==null)return e;t=t.sibling}return null}var h0=Nn.unstable_scheduleCallback,Rp=Nn.unstable_cancelCallback,Ex=Nn.unstable_shouldYield,Tx=Nn.unstable_requestPaint,Ot=Nn.unstable_now,wx=Nn.unstable_getCurrentPriorityLevel,ih=Nn.unstable_ImmediatePriority,p0=Nn.unstable_UserBlockingPriority,Zl=Nn.unstable_NormalPriority,Ax=Nn.unstable_LowPriority,m0=Nn.unstable_IdlePriority,Ac=null,xi=null;function Cx(t){if(xi&&typeof xi.onCommitFiberRoot=="function")try{xi.onCommitFiberRoot(Ac,t,void 0,(t.current.flags&128)===128)}catch{}}var si=Math.clz32?Math.clz32:Px,Rx=Math.log,bx=Math.LN2;function Px(t){return t>>>=0,t===0?32:31-(Rx(t)/bx|0)|0}var Vo=64,Ho=4194304;function Ha(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Ql(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,a=n&268435455;if(a!==0){var o=a&~r;o!==0?i=Ha(o):(s&=a,s!==0&&(i=Ha(s)))}else a=n&~r,a!==0?i=Ha(a):s!==0&&(i=Ha(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-si(e),r=1<<n,i|=t[n],e&=~r;return i}function Lx(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ix(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var a=31-si(s),o=1<<a,l=r[a];l===-1?(!(o&n)||o&i)&&(r[a]=Lx(o,e)):l<=e&&(t.expiredLanes|=o),s&=~o}}function Sf(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function g0(){var t=Vo;return Vo<<=1,!(Vo&4194240)&&(Vo=64),t}function $c(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function bo(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-si(e),t[e]=n}function Dx(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-si(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function rh(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-si(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var gt=0;function _0(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var v0,sh,x0,y0,S0,Mf=!1,Go=[],gr=null,_r=null,vr=null,oo=new Map,lo=new Map,cr=[],Nx="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function bp(t,e){switch(t){case"focusin":case"focusout":gr=null;break;case"dragenter":case"dragleave":_r=null;break;case"mouseover":case"mouseout":vr=null;break;case"pointerover":case"pointerout":oo.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":lo.delete(e.pointerId)}}function Ea(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=Lo(e),e!==null&&sh(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function Ux(t,e,n,i,r){switch(e){case"focusin":return gr=Ea(gr,t,e,n,i,r),!0;case"dragenter":return _r=Ea(_r,t,e,n,i,r),!0;case"mouseover":return vr=Ea(vr,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return oo.set(s,Ea(oo.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,lo.set(s,Ea(lo.get(s)||null,t,e,n,i,r)),!0}return!1}function M0(t){var e=jr(t.target);if(e!==null){var n=ls(e);if(n!==null){if(e=n.tag,e===13){if(e=u0(n),e!==null){t.blockedOn=e,S0(t.priority,function(){x0(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Pl(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Ef(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);_f=i,n.target.dispatchEvent(i),_f=null}else return e=Lo(n),e!==null&&sh(e),t.blockedOn=n,!1;e.shift()}return!0}function Pp(t,e,n){Pl(t)&&n.delete(e)}function Fx(){Mf=!1,gr!==null&&Pl(gr)&&(gr=null),_r!==null&&Pl(_r)&&(_r=null),vr!==null&&Pl(vr)&&(vr=null),oo.forEach(Pp),lo.forEach(Pp)}function Ta(t,e){t.blockedOn===e&&(t.blockedOn=null,Mf||(Mf=!0,Nn.unstable_scheduleCallback(Nn.unstable_NormalPriority,Fx)))}function co(t){function e(r){return Ta(r,t)}if(0<Go.length){Ta(Go[0],t);for(var n=1;n<Go.length;n++){var i=Go[n];i.blockedOn===t&&(i.blockedOn=null)}}for(gr!==null&&Ta(gr,t),_r!==null&&Ta(_r,t),vr!==null&&Ta(vr,t),oo.forEach(e),lo.forEach(e),n=0;n<cr.length;n++)i=cr[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<cr.length&&(n=cr[0],n.blockedOn===null);)M0(n),n.blockedOn===null&&cr.shift()}var Qs=$i.ReactCurrentBatchConfig,Jl=!0;function Ox(t,e,n,i){var r=gt,s=Qs.transition;Qs.transition=null;try{gt=1,ah(t,e,n,i)}finally{gt=r,Qs.transition=s}}function kx(t,e,n,i){var r=gt,s=Qs.transition;Qs.transition=null;try{gt=4,ah(t,e,n,i)}finally{gt=r,Qs.transition=s}}function ah(t,e,n,i){if(Jl){var r=Ef(t,e,n,i);if(r===null)su(t,e,i,ec,n),bp(t,i);else if(Ux(r,t,e,n,i))i.stopPropagation();else if(bp(t,i),e&4&&-1<Nx.indexOf(t)){for(;r!==null;){var s=Lo(r);if(s!==null&&v0(s),s=Ef(t,e,n,i),s===null&&su(t,e,i,ec,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else su(t,e,i,null,n)}}var ec=null;function Ef(t,e,n,i){if(ec=null,t=nh(i),t=jr(t),t!==null)if(e=ls(t),e===null)t=null;else if(n=e.tag,n===13){if(t=u0(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return ec=t,null}function E0(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(wx()){case ih:return 1;case p0:return 4;case Zl:case Ax:return 16;case m0:return 536870912;default:return 16}default:return 16}}var hr=null,oh=null,Ll=null;function T0(){if(Ll)return Ll;var t,e=oh,n=e.length,i,r="value"in hr?hr.value:hr.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var a=n-t;for(i=1;i<=a&&e[n-i]===r[s-i];i++);return Ll=r.slice(t,1<i?1-i:void 0)}function Il(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Wo(){return!0}function Lp(){return!1}function Fn(t){function e(n,i,r,s,a){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=a,this.currentTarget=null;for(var o in t)t.hasOwnProperty(o)&&(n=t[o],this[o]=n?n(s):s[o]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Wo:Lp,this.isPropagationStopped=Lp,this}return Pt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Wo)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Wo)},persist:function(){},isPersistent:Wo}),e}var ma={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},lh=Fn(ma),Po=Pt({},ma,{view:0,detail:0}),Bx=Fn(Po),Kc,Zc,wa,Cc=Pt({},Po,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ch,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==wa&&(wa&&t.type==="mousemove"?(Kc=t.screenX-wa.screenX,Zc=t.screenY-wa.screenY):Zc=Kc=0,wa=t),Kc)},movementY:function(t){return"movementY"in t?t.movementY:Zc}}),Ip=Fn(Cc),zx=Pt({},Cc,{dataTransfer:0}),Vx=Fn(zx),Hx=Pt({},Po,{relatedTarget:0}),Qc=Fn(Hx),Gx=Pt({},ma,{animationName:0,elapsedTime:0,pseudoElement:0}),Wx=Fn(Gx),Xx=Pt({},ma,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),jx=Fn(Xx),Yx=Pt({},ma,{data:0}),Dp=Fn(Yx),qx={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},$x={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Kx={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Zx(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=Kx[t])?!!e[t]:!1}function ch(){return Zx}var Qx=Pt({},Po,{key:function(t){if(t.key){var e=qx[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Il(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?$x[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ch,charCode:function(t){return t.type==="keypress"?Il(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Il(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Jx=Fn(Qx),ey=Pt({},Cc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Np=Fn(ey),ty=Pt({},Po,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ch}),ny=Fn(ty),iy=Pt({},ma,{propertyName:0,elapsedTime:0,pseudoElement:0}),ry=Fn(iy),sy=Pt({},Cc,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),ay=Fn(sy),oy=[9,13,27,32],uh=Gi&&"CompositionEvent"in window,qa=null;Gi&&"documentMode"in document&&(qa=document.documentMode);var ly=Gi&&"TextEvent"in window&&!qa,w0=Gi&&(!uh||qa&&8<qa&&11>=qa),Up=" ",Fp=!1;function A0(t,e){switch(t){case"keyup":return oy.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function C0(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Bs=!1;function cy(t,e){switch(t){case"compositionend":return C0(e);case"keypress":return e.which!==32?null:(Fp=!0,Up);case"textInput":return t=e.data,t===Up&&Fp?null:t;default:return null}}function uy(t,e){if(Bs)return t==="compositionend"||!uh&&A0(t,e)?(t=T0(),Ll=oh=hr=null,Bs=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return w0&&e.locale!=="ko"?null:e.data;default:return null}}var fy={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Op(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!fy[t.type]:e==="textarea"}function R0(t,e,n,i){s0(i),e=tc(e,"onChange"),0<e.length&&(n=new lh("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var $a=null,uo=null;function dy(t){B0(t,0)}function Rc(t){var e=Hs(t);if(Qg(e))return t}function hy(t,e){if(t==="change")return e}var b0=!1;if(Gi){var Jc;if(Gi){var eu="oninput"in document;if(!eu){var kp=document.createElement("div");kp.setAttribute("oninput","return;"),eu=typeof kp.oninput=="function"}Jc=eu}else Jc=!1;b0=Jc&&(!document.documentMode||9<document.documentMode)}function Bp(){$a&&($a.detachEvent("onpropertychange",P0),uo=$a=null)}function P0(t){if(t.propertyName==="value"&&Rc(uo)){var e=[];R0(e,uo,t,nh(t)),c0(dy,e)}}function py(t,e,n){t==="focusin"?(Bp(),$a=e,uo=n,$a.attachEvent("onpropertychange",P0)):t==="focusout"&&Bp()}function my(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Rc(uo)}function gy(t,e){if(t==="click")return Rc(e)}function _y(t,e){if(t==="input"||t==="change")return Rc(e)}function vy(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var li=typeof Object.is=="function"?Object.is:vy;function fo(t,e){if(li(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!sf.call(e,r)||!li(t[r],e[r]))return!1}return!0}function zp(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Vp(t,e){var n=zp(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=zp(n)}}function L0(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?L0(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function I0(){for(var t=window,e=ql();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=ql(t.document)}return e}function fh(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function xy(t){var e=I0(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&L0(n.ownerDocument.documentElement,n)){if(i!==null&&fh(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=Vp(n,s);var a=Vp(n,i);r&&a&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==a.node||t.focusOffset!==a.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(a.node,a.offset)):(e.setEnd(a.node,a.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var yy=Gi&&"documentMode"in document&&11>=document.documentMode,zs=null,Tf=null,Ka=null,wf=!1;function Hp(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;wf||zs==null||zs!==ql(i)||(i=zs,"selectionStart"in i&&fh(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Ka&&fo(Ka,i)||(Ka=i,i=tc(Tf,"onSelect"),0<i.length&&(e=new lh("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=zs)))}function Xo(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Vs={animationend:Xo("Animation","AnimationEnd"),animationiteration:Xo("Animation","AnimationIteration"),animationstart:Xo("Animation","AnimationStart"),transitionend:Xo("Transition","TransitionEnd")},tu={},D0={};Gi&&(D0=document.createElement("div").style,"AnimationEvent"in window||(delete Vs.animationend.animation,delete Vs.animationiteration.animation,delete Vs.animationstart.animation),"TransitionEvent"in window||delete Vs.transitionend.transition);function bc(t){if(tu[t])return tu[t];if(!Vs[t])return t;var e=Vs[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in D0)return tu[t]=e[n];return t}var N0=bc("animationend"),U0=bc("animationiteration"),F0=bc("animationstart"),O0=bc("transitionend"),k0=new Map,Gp="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Rr(t,e){k0.set(t,e),os(e,[t])}for(var nu=0;nu<Gp.length;nu++){var iu=Gp[nu],Sy=iu.toLowerCase(),My=iu[0].toUpperCase()+iu.slice(1);Rr(Sy,"on"+My)}Rr(N0,"onAnimationEnd");Rr(U0,"onAnimationIteration");Rr(F0,"onAnimationStart");Rr("dblclick","onDoubleClick");Rr("focusin","onFocus");Rr("focusout","onBlur");Rr(O0,"onTransitionEnd");ia("onMouseEnter",["mouseout","mouseover"]);ia("onMouseLeave",["mouseout","mouseover"]);ia("onPointerEnter",["pointerout","pointerover"]);ia("onPointerLeave",["pointerout","pointerover"]);os("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));os("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));os("onBeforeInput",["compositionend","keypress","textInput","paste"]);os("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));os("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));os("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ga="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Ey=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ga));function Wp(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,Sx(i,e,void 0,t),t.currentTarget=null}function B0(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var a=i.length-1;0<=a;a--){var o=i[a],l=o.instance,c=o.currentTarget;if(o=o.listener,l!==s&&r.isPropagationStopped())break e;Wp(r,o,c),s=l}else for(a=0;a<i.length;a++){if(o=i[a],l=o.instance,c=o.currentTarget,o=o.listener,l!==s&&r.isPropagationStopped())break e;Wp(r,o,c),s=l}}}if(Kl)throw t=yf,Kl=!1,yf=null,t}function Et(t,e){var n=e[Pf];n===void 0&&(n=e[Pf]=new Set);var i=t+"__bubble";n.has(i)||(z0(e,t,2,!1),n.add(i))}function ru(t,e,n){var i=0;e&&(i|=4),z0(n,t,i,e)}var jo="_reactListening"+Math.random().toString(36).slice(2);function ho(t){if(!t[jo]){t[jo]=!0,Yg.forEach(function(n){n!=="selectionchange"&&(Ey.has(n)||ru(n,!1,t),ru(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[jo]||(e[jo]=!0,ru("selectionchange",!1,e))}}function z0(t,e,n,i){switch(E0(e)){case 1:var r=Ox;break;case 4:r=kx;break;default:r=ah}n=r.bind(null,e,n,t),r=void 0,!xf||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function su(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var a=i.tag;if(a===3||a===4){var o=i.stateNode.containerInfo;if(o===r||o.nodeType===8&&o.parentNode===r)break;if(a===4)for(a=i.return;a!==null;){var l=a.tag;if((l===3||l===4)&&(l=a.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;a=a.return}for(;o!==null;){if(a=jr(o),a===null)return;if(l=a.tag,l===5||l===6){i=s=a;continue e}o=o.parentNode}}i=i.return}c0(function(){var c=s,d=nh(n),h=[];e:{var u=k0.get(t);if(u!==void 0){var p=lh,v=t;switch(t){case"keypress":if(Il(n)===0)break e;case"keydown":case"keyup":p=Jx;break;case"focusin":v="focus",p=Qc;break;case"focusout":v="blur",p=Qc;break;case"beforeblur":case"afterblur":p=Qc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=Ip;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=Vx;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=ny;break;case N0:case U0:case F0:p=Wx;break;case O0:p=ry;break;case"scroll":p=Bx;break;case"wheel":p=ay;break;case"copy":case"cut":case"paste":p=jx;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=Np}var E=(e&4)!==0,g=!E&&t==="scroll",f=E?u!==null?u+"Capture":null:u;E=[];for(var m=c,_;m!==null;){_=m;var M=_.stateNode;if(_.tag===5&&M!==null&&(_=M,f!==null&&(M=ao(m,f),M!=null&&E.push(po(m,M,_)))),g)break;m=m.return}0<E.length&&(u=new p(u,v,null,n,d),h.push({event:u,listeners:E}))}}if(!(e&7)){e:{if(u=t==="mouseover"||t==="pointerover",p=t==="mouseout"||t==="pointerout",u&&n!==_f&&(v=n.relatedTarget||n.fromElement)&&(jr(v)||v[Wi]))break e;if((p||u)&&(u=d.window===d?d:(u=d.ownerDocument)?u.defaultView||u.parentWindow:window,p?(v=n.relatedTarget||n.toElement,p=c,v=v?jr(v):null,v!==null&&(g=ls(v),v!==g||v.tag!==5&&v.tag!==6)&&(v=null)):(p=null,v=c),p!==v)){if(E=Ip,M="onMouseLeave",f="onMouseEnter",m="mouse",(t==="pointerout"||t==="pointerover")&&(E=Np,M="onPointerLeave",f="onPointerEnter",m="pointer"),g=p==null?u:Hs(p),_=v==null?u:Hs(v),u=new E(M,m+"leave",p,n,d),u.target=g,u.relatedTarget=_,M=null,jr(d)===c&&(E=new E(f,m+"enter",v,n,d),E.target=_,E.relatedTarget=g,M=E),g=M,p&&v)t:{for(E=p,f=v,m=0,_=E;_;_=ms(_))m++;for(_=0,M=f;M;M=ms(M))_++;for(;0<m-_;)E=ms(E),m--;for(;0<_-m;)f=ms(f),_--;for(;m--;){if(E===f||f!==null&&E===f.alternate)break t;E=ms(E),f=ms(f)}E=null}else E=null;p!==null&&Xp(h,u,p,E,!1),v!==null&&g!==null&&Xp(h,g,v,E,!0)}}e:{if(u=c?Hs(c):window,p=u.nodeName&&u.nodeName.toLowerCase(),p==="select"||p==="input"&&u.type==="file")var R=hy;else if(Op(u))if(b0)R=_y;else{R=my;var T=py}else(p=u.nodeName)&&p.toLowerCase()==="input"&&(u.type==="checkbox"||u.type==="radio")&&(R=gy);if(R&&(R=R(t,c))){R0(h,R,n,d);break e}T&&T(t,u,c),t==="focusout"&&(T=u._wrapperState)&&T.controlled&&u.type==="number"&&df(u,"number",u.value)}switch(T=c?Hs(c):window,t){case"focusin":(Op(T)||T.contentEditable==="true")&&(zs=T,Tf=c,Ka=null);break;case"focusout":Ka=Tf=zs=null;break;case"mousedown":wf=!0;break;case"contextmenu":case"mouseup":case"dragend":wf=!1,Hp(h,n,d);break;case"selectionchange":if(yy)break;case"keydown":case"keyup":Hp(h,n,d)}var C;if(uh)e:{switch(t){case"compositionstart":var x="onCompositionStart";break e;case"compositionend":x="onCompositionEnd";break e;case"compositionupdate":x="onCompositionUpdate";break e}x=void 0}else Bs?A0(t,n)&&(x="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(x="onCompositionStart");x&&(w0&&n.locale!=="ko"&&(Bs||x!=="onCompositionStart"?x==="onCompositionEnd"&&Bs&&(C=T0()):(hr=d,oh="value"in hr?hr.value:hr.textContent,Bs=!0)),T=tc(c,x),0<T.length&&(x=new Dp(x,t,null,n,d),h.push({event:x,listeners:T}),C?x.data=C:(C=C0(n),C!==null&&(x.data=C)))),(C=ly?cy(t,n):uy(t,n))&&(c=tc(c,"onBeforeInput"),0<c.length&&(d=new Dp("onBeforeInput","beforeinput",null,n,d),h.push({event:d,listeners:c}),d.data=C))}B0(h,e)})}function po(t,e,n){return{instance:t,listener:e,currentTarget:n}}function tc(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=ao(t,n),s!=null&&i.unshift(po(t,s,r)),s=ao(t,e),s!=null&&i.push(po(t,s,r))),t=t.return}return i}function ms(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Xp(t,e,n,i,r){for(var s=e._reactName,a=[];n!==null&&n!==i;){var o=n,l=o.alternate,c=o.stateNode;if(l!==null&&l===i)break;o.tag===5&&c!==null&&(o=c,r?(l=ao(n,s),l!=null&&a.unshift(po(n,l,o))):r||(l=ao(n,s),l!=null&&a.push(po(n,l,o)))),n=n.return}a.length!==0&&t.push({event:e,listeners:a})}var Ty=/\r\n?/g,wy=/\u0000|\uFFFD/g;function jp(t){return(typeof t=="string"?t:""+t).replace(Ty,`
`).replace(wy,"")}function Yo(t,e,n){if(e=jp(e),jp(t)!==e&&n)throw Error(oe(425))}function nc(){}var Af=null,Cf=null;function Rf(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var bf=typeof setTimeout=="function"?setTimeout:void 0,Ay=typeof clearTimeout=="function"?clearTimeout:void 0,Yp=typeof Promise=="function"?Promise:void 0,Cy=typeof queueMicrotask=="function"?queueMicrotask:typeof Yp<"u"?function(t){return Yp.resolve(null).then(t).catch(Ry)}:bf;function Ry(t){setTimeout(function(){throw t})}function au(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),co(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);co(e)}function xr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function qp(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var ga=Math.random().toString(36).slice(2),gi="__reactFiber$"+ga,mo="__reactProps$"+ga,Wi="__reactContainer$"+ga,Pf="__reactEvents$"+ga,by="__reactListeners$"+ga,Py="__reactHandles$"+ga;function jr(t){var e=t[gi];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Wi]||n[gi]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=qp(t);t!==null;){if(n=t[gi])return n;t=qp(t)}return e}t=n,n=t.parentNode}return null}function Lo(t){return t=t[gi]||t[Wi],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Hs(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(oe(33))}function Pc(t){return t[mo]||null}var Lf=[],Gs=-1;function br(t){return{current:t}}function Tt(t){0>Gs||(t.current=Lf[Gs],Lf[Gs]=null,Gs--)}function Mt(t,e){Gs++,Lf[Gs]=t.current,t.current=e}var wr={},ln=br(wr),yn=br(!1),Jr=wr;function ra(t,e){var n=t.type.contextTypes;if(!n)return wr;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function Sn(t){return t=t.childContextTypes,t!=null}function ic(){Tt(yn),Tt(ln)}function $p(t,e,n){if(ln.current!==wr)throw Error(oe(168));Mt(ln,e),Mt(yn,n)}function V0(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(oe(108,px(t)||"Unknown",r));return Pt({},n,i)}function rc(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||wr,Jr=ln.current,Mt(ln,t),Mt(yn,yn.current),!0}function Kp(t,e,n){var i=t.stateNode;if(!i)throw Error(oe(169));n?(t=V0(t,e,Jr),i.__reactInternalMemoizedMergedChildContext=t,Tt(yn),Tt(ln),Mt(ln,t)):Tt(yn),Mt(yn,n)}var Ni=null,Lc=!1,ou=!1;function H0(t){Ni===null?Ni=[t]:Ni.push(t)}function Ly(t){Lc=!0,H0(t)}function Pr(){if(!ou&&Ni!==null){ou=!0;var t=0,e=gt;try{var n=Ni;for(gt=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}Ni=null,Lc=!1}catch(r){throw Ni!==null&&(Ni=Ni.slice(t+1)),h0(ih,Pr),r}finally{gt=e,ou=!1}}return null}var Ws=[],Xs=0,sc=null,ac=0,Vn=[],Hn=0,es=null,Fi=1,Oi="";function zr(t,e){Ws[Xs++]=ac,Ws[Xs++]=sc,sc=t,ac=e}function G0(t,e,n){Vn[Hn++]=Fi,Vn[Hn++]=Oi,Vn[Hn++]=es,es=t;var i=Fi;t=Oi;var r=32-si(i)-1;i&=~(1<<r),n+=1;var s=32-si(e)+r;if(30<s){var a=r-r%5;s=(i&(1<<a)-1).toString(32),i>>=a,r-=a,Fi=1<<32-si(e)+r|n<<r|i,Oi=s+t}else Fi=1<<s|n<<r|i,Oi=t}function dh(t){t.return!==null&&(zr(t,1),G0(t,1,0))}function hh(t){for(;t===sc;)sc=Ws[--Xs],Ws[Xs]=null,ac=Ws[--Xs],Ws[Xs]=null;for(;t===es;)es=Vn[--Hn],Vn[Hn]=null,Oi=Vn[--Hn],Vn[Hn]=null,Fi=Vn[--Hn],Vn[Hn]=null}var In=null,Ln=null,wt=!1,ni=null;function W0(t,e){var n=Wn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Zp(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,In=t,Ln=xr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,In=t,Ln=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=es!==null?{id:Fi,overflow:Oi}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Wn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,In=t,Ln=null,!0):!1;default:return!1}}function If(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Df(t){if(wt){var e=Ln;if(e){var n=e;if(!Zp(t,e)){if(If(t))throw Error(oe(418));e=xr(n.nextSibling);var i=In;e&&Zp(t,e)?W0(i,n):(t.flags=t.flags&-4097|2,wt=!1,In=t)}}else{if(If(t))throw Error(oe(418));t.flags=t.flags&-4097|2,wt=!1,In=t}}}function Qp(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;In=t}function qo(t){if(t!==In)return!1;if(!wt)return Qp(t),wt=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Rf(t.type,t.memoizedProps)),e&&(e=Ln)){if(If(t))throw X0(),Error(oe(418));for(;e;)W0(t,e),e=xr(e.nextSibling)}if(Qp(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(oe(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Ln=xr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Ln=null}}else Ln=In?xr(t.stateNode.nextSibling):null;return!0}function X0(){for(var t=Ln;t;)t=xr(t.nextSibling)}function sa(){Ln=In=null,wt=!1}function ph(t){ni===null?ni=[t]:ni.push(t)}var Iy=$i.ReactCurrentBatchConfig;function Aa(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(oe(309));var i=n.stateNode}if(!i)throw Error(oe(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(a){var o=r.refs;a===null?delete o[s]:o[s]=a},e._stringRef=s,e)}if(typeof t!="string")throw Error(oe(284));if(!n._owner)throw Error(oe(290,t))}return t}function $o(t,e){throw t=Object.prototype.toString.call(e),Error(oe(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Jp(t){var e=t._init;return e(t._payload)}function j0(t){function e(f,m){if(t){var _=f.deletions;_===null?(f.deletions=[m],f.flags|=16):_.push(m)}}function n(f,m){if(!t)return null;for(;m!==null;)e(f,m),m=m.sibling;return null}function i(f,m){for(f=new Map;m!==null;)m.key!==null?f.set(m.key,m):f.set(m.index,m),m=m.sibling;return f}function r(f,m){return f=Er(f,m),f.index=0,f.sibling=null,f}function s(f,m,_){return f.index=_,t?(_=f.alternate,_!==null?(_=_.index,_<m?(f.flags|=2,m):_):(f.flags|=2,m)):(f.flags|=1048576,m)}function a(f){return t&&f.alternate===null&&(f.flags|=2),f}function o(f,m,_,M){return m===null||m.tag!==6?(m=pu(_,f.mode,M),m.return=f,m):(m=r(m,_),m.return=f,m)}function l(f,m,_,M){var R=_.type;return R===ks?d(f,m,_.props.children,M,_.key):m!==null&&(m.elementType===R||typeof R=="object"&&R!==null&&R.$$typeof===or&&Jp(R)===m.type)?(M=r(m,_.props),M.ref=Aa(f,m,_),M.return=f,M):(M=Bl(_.type,_.key,_.props,null,f.mode,M),M.ref=Aa(f,m,_),M.return=f,M)}function c(f,m,_,M){return m===null||m.tag!==4||m.stateNode.containerInfo!==_.containerInfo||m.stateNode.implementation!==_.implementation?(m=mu(_,f.mode,M),m.return=f,m):(m=r(m,_.children||[]),m.return=f,m)}function d(f,m,_,M,R){return m===null||m.tag!==7?(m=Qr(_,f.mode,M,R),m.return=f,m):(m=r(m,_),m.return=f,m)}function h(f,m,_){if(typeof m=="string"&&m!==""||typeof m=="number")return m=pu(""+m,f.mode,_),m.return=f,m;if(typeof m=="object"&&m!==null){switch(m.$$typeof){case ko:return _=Bl(m.type,m.key,m.props,null,f.mode,_),_.ref=Aa(f,null,m),_.return=f,_;case Os:return m=mu(m,f.mode,_),m.return=f,m;case or:var M=m._init;return h(f,M(m._payload),_)}if(Va(m)||Sa(m))return m=Qr(m,f.mode,_,null),m.return=f,m;$o(f,m)}return null}function u(f,m,_,M){var R=m!==null?m.key:null;if(typeof _=="string"&&_!==""||typeof _=="number")return R!==null?null:o(f,m,""+_,M);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case ko:return _.key===R?l(f,m,_,M):null;case Os:return _.key===R?c(f,m,_,M):null;case or:return R=_._init,u(f,m,R(_._payload),M)}if(Va(_)||Sa(_))return R!==null?null:d(f,m,_,M,null);$o(f,_)}return null}function p(f,m,_,M,R){if(typeof M=="string"&&M!==""||typeof M=="number")return f=f.get(_)||null,o(m,f,""+M,R);if(typeof M=="object"&&M!==null){switch(M.$$typeof){case ko:return f=f.get(M.key===null?_:M.key)||null,l(m,f,M,R);case Os:return f=f.get(M.key===null?_:M.key)||null,c(m,f,M,R);case or:var T=M._init;return p(f,m,_,T(M._payload),R)}if(Va(M)||Sa(M))return f=f.get(_)||null,d(m,f,M,R,null);$o(m,M)}return null}function v(f,m,_,M){for(var R=null,T=null,C=m,x=m=0,A=null;C!==null&&x<_.length;x++){C.index>x?(A=C,C=null):A=C.sibling;var b=u(f,C,_[x],M);if(b===null){C===null&&(C=A);break}t&&C&&b.alternate===null&&e(f,C),m=s(b,m,x),T===null?R=b:T.sibling=b,T=b,C=A}if(x===_.length)return n(f,C),wt&&zr(f,x),R;if(C===null){for(;x<_.length;x++)C=h(f,_[x],M),C!==null&&(m=s(C,m,x),T===null?R=C:T.sibling=C,T=C);return wt&&zr(f,x),R}for(C=i(f,C);x<_.length;x++)A=p(C,f,x,_[x],M),A!==null&&(t&&A.alternate!==null&&C.delete(A.key===null?x:A.key),m=s(A,m,x),T===null?R=A:T.sibling=A,T=A);return t&&C.forEach(function(P){return e(f,P)}),wt&&zr(f,x),R}function E(f,m,_,M){var R=Sa(_);if(typeof R!="function")throw Error(oe(150));if(_=R.call(_),_==null)throw Error(oe(151));for(var T=R=null,C=m,x=m=0,A=null,b=_.next();C!==null&&!b.done;x++,b=_.next()){C.index>x?(A=C,C=null):A=C.sibling;var P=u(f,C,b.value,M);if(P===null){C===null&&(C=A);break}t&&C&&P.alternate===null&&e(f,C),m=s(P,m,x),T===null?R=P:T.sibling=P,T=P,C=A}if(b.done)return n(f,C),wt&&zr(f,x),R;if(C===null){for(;!b.done;x++,b=_.next())b=h(f,b.value,M),b!==null&&(m=s(b,m,x),T===null?R=b:T.sibling=b,T=b);return wt&&zr(f,x),R}for(C=i(f,C);!b.done;x++,b=_.next())b=p(C,f,x,b.value,M),b!==null&&(t&&b.alternate!==null&&C.delete(b.key===null?x:b.key),m=s(b,m,x),T===null?R=b:T.sibling=b,T=b);return t&&C.forEach(function(N){return e(f,N)}),wt&&zr(f,x),R}function g(f,m,_,M){if(typeof _=="object"&&_!==null&&_.type===ks&&_.key===null&&(_=_.props.children),typeof _=="object"&&_!==null){switch(_.$$typeof){case ko:e:{for(var R=_.key,T=m;T!==null;){if(T.key===R){if(R=_.type,R===ks){if(T.tag===7){n(f,T.sibling),m=r(T,_.props.children),m.return=f,f=m;break e}}else if(T.elementType===R||typeof R=="object"&&R!==null&&R.$$typeof===or&&Jp(R)===T.type){n(f,T.sibling),m=r(T,_.props),m.ref=Aa(f,T,_),m.return=f,f=m;break e}n(f,T);break}else e(f,T);T=T.sibling}_.type===ks?(m=Qr(_.props.children,f.mode,M,_.key),m.return=f,f=m):(M=Bl(_.type,_.key,_.props,null,f.mode,M),M.ref=Aa(f,m,_),M.return=f,f=M)}return a(f);case Os:e:{for(T=_.key;m!==null;){if(m.key===T)if(m.tag===4&&m.stateNode.containerInfo===_.containerInfo&&m.stateNode.implementation===_.implementation){n(f,m.sibling),m=r(m,_.children||[]),m.return=f,f=m;break e}else{n(f,m);break}else e(f,m);m=m.sibling}m=mu(_,f.mode,M),m.return=f,f=m}return a(f);case or:return T=_._init,g(f,m,T(_._payload),M)}if(Va(_))return v(f,m,_,M);if(Sa(_))return E(f,m,_,M);$o(f,_)}return typeof _=="string"&&_!==""||typeof _=="number"?(_=""+_,m!==null&&m.tag===6?(n(f,m.sibling),m=r(m,_),m.return=f,f=m):(n(f,m),m=pu(_,f.mode,M),m.return=f,f=m),a(f)):n(f,m)}return g}var aa=j0(!0),Y0=j0(!1),oc=br(null),lc=null,js=null,mh=null;function gh(){mh=js=lc=null}function _h(t){var e=oc.current;Tt(oc),t._currentValue=e}function Nf(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function Js(t,e){lc=t,mh=js=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(xn=!0),t.firstContext=null)}function jn(t){var e=t._currentValue;if(mh!==t)if(t={context:t,memoizedValue:e,next:null},js===null){if(lc===null)throw Error(oe(308));js=t,lc.dependencies={lanes:0,firstContext:t}}else js=js.next=t;return e}var Yr=null;function vh(t){Yr===null?Yr=[t]:Yr.push(t)}function q0(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,vh(e)):(n.next=r.next,r.next=n),e.interleaved=n,Xi(t,i)}function Xi(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var lr=!1;function xh(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function $0(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Bi(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function yr(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,ct&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,Xi(t,n)}return r=i.interleaved,r===null?(e.next=e,vh(i)):(e.next=r.next,r.next=e),i.interleaved=e,Xi(t,n)}function Dl(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,rh(t,n)}}function em(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=a:s=s.next=a,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function cc(t,e,n,i){var r=t.updateQueue;lr=!1;var s=r.firstBaseUpdate,a=r.lastBaseUpdate,o=r.shared.pending;if(o!==null){r.shared.pending=null;var l=o,c=l.next;l.next=null,a===null?s=c:a.next=c,a=l;var d=t.alternate;d!==null&&(d=d.updateQueue,o=d.lastBaseUpdate,o!==a&&(o===null?d.firstBaseUpdate=c:o.next=c,d.lastBaseUpdate=l))}if(s!==null){var h=r.baseState;a=0,d=c=l=null,o=s;do{var u=o.lane,p=o.eventTime;if((i&u)===u){d!==null&&(d=d.next={eventTime:p,lane:0,tag:o.tag,payload:o.payload,callback:o.callback,next:null});e:{var v=t,E=o;switch(u=e,p=n,E.tag){case 1:if(v=E.payload,typeof v=="function"){h=v.call(p,h,u);break e}h=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=E.payload,u=typeof v=="function"?v.call(p,h,u):v,u==null)break e;h=Pt({},h,u);break e;case 2:lr=!0}}o.callback!==null&&o.lane!==0&&(t.flags|=64,u=r.effects,u===null?r.effects=[o]:u.push(o))}else p={eventTime:p,lane:u,tag:o.tag,payload:o.payload,callback:o.callback,next:null},d===null?(c=d=p,l=h):d=d.next=p,a|=u;if(o=o.next,o===null){if(o=r.shared.pending,o===null)break;u=o,o=u.next,u.next=null,r.lastBaseUpdate=u,r.shared.pending=null}}while(!0);if(d===null&&(l=h),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=d,e=r.shared.interleaved,e!==null){r=e;do a|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);ns|=a,t.lanes=a,t.memoizedState=h}}function tm(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(oe(191,r));r.call(i)}}}var Io={},yi=br(Io),go=br(Io),_o=br(Io);function qr(t){if(t===Io)throw Error(oe(174));return t}function yh(t,e){switch(Mt(_o,e),Mt(go,t),Mt(yi,Io),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:pf(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=pf(e,t)}Tt(yi),Mt(yi,e)}function oa(){Tt(yi),Tt(go),Tt(_o)}function K0(t){qr(_o.current);var e=qr(yi.current),n=pf(e,t.type);e!==n&&(Mt(go,t),Mt(yi,n))}function Sh(t){go.current===t&&(Tt(yi),Tt(go))}var Ct=br(0);function uc(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var lu=[];function Mh(){for(var t=0;t<lu.length;t++)lu[t]._workInProgressVersionPrimary=null;lu.length=0}var Nl=$i.ReactCurrentDispatcher,cu=$i.ReactCurrentBatchConfig,ts=0,Rt=null,Vt=null,jt=null,fc=!1,Za=!1,vo=0,Dy=0;function nn(){throw Error(oe(321))}function Eh(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!li(t[n],e[n]))return!1;return!0}function Th(t,e,n,i,r,s){if(ts=s,Rt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Nl.current=t===null||t.memoizedState===null?Oy:ky,t=n(i,r),Za){s=0;do{if(Za=!1,vo=0,25<=s)throw Error(oe(301));s+=1,jt=Vt=null,e.updateQueue=null,Nl.current=By,t=n(i,r)}while(Za)}if(Nl.current=dc,e=Vt!==null&&Vt.next!==null,ts=0,jt=Vt=Rt=null,fc=!1,e)throw Error(oe(300));return t}function wh(){var t=vo!==0;return vo=0,t}function pi(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return jt===null?Rt.memoizedState=jt=t:jt=jt.next=t,jt}function Yn(){if(Vt===null){var t=Rt.alternate;t=t!==null?t.memoizedState:null}else t=Vt.next;var e=jt===null?Rt.memoizedState:jt.next;if(e!==null)jt=e,Vt=t;else{if(t===null)throw Error(oe(310));Vt=t,t={memoizedState:Vt.memoizedState,baseState:Vt.baseState,baseQueue:Vt.baseQueue,queue:Vt.queue,next:null},jt===null?Rt.memoizedState=jt=t:jt=jt.next=t}return jt}function xo(t,e){return typeof e=="function"?e(t):e}function uu(t){var e=Yn(),n=e.queue;if(n===null)throw Error(oe(311));n.lastRenderedReducer=t;var i=Vt,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var a=r.next;r.next=s.next,s.next=a}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var o=a=null,l=null,c=s;do{var d=c.lane;if((ts&d)===d)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:t(i,c.action);else{var h={lane:d,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(o=l=h,a=i):l=l.next=h,Rt.lanes|=d,ns|=d}c=c.next}while(c!==null&&c!==s);l===null?a=i:l.next=o,li(i,e.memoizedState)||(xn=!0),e.memoizedState=i,e.baseState=a,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,Rt.lanes|=s,ns|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function fu(t){var e=Yn(),n=e.queue;if(n===null)throw Error(oe(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var a=r=r.next;do s=t(s,a.action),a=a.next;while(a!==r);li(s,e.memoizedState)||(xn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function Z0(){}function Q0(t,e){var n=Rt,i=Yn(),r=e(),s=!li(i.memoizedState,r);if(s&&(i.memoizedState=r,xn=!0),i=i.queue,Ah(t_.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||jt!==null&&jt.memoizedState.tag&1){if(n.flags|=2048,yo(9,e_.bind(null,n,i,r,e),void 0,null),Yt===null)throw Error(oe(349));ts&30||J0(n,e,r)}return r}function J0(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Rt.updateQueue,e===null?(e={lastEffect:null,stores:null},Rt.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function e_(t,e,n,i){e.value=n,e.getSnapshot=i,n_(e)&&i_(t)}function t_(t,e,n){return n(function(){n_(e)&&i_(t)})}function n_(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!li(t,n)}catch{return!0}}function i_(t){var e=Xi(t,1);e!==null&&ai(e,t,1,-1)}function nm(t){var e=pi();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:xo,lastRenderedState:t},e.queue=t,t=t.dispatch=Fy.bind(null,Rt,t),[e.memoizedState,t]}function yo(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=Rt.updateQueue,e===null?(e={lastEffect:null,stores:null},Rt.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function r_(){return Yn().memoizedState}function Ul(t,e,n,i){var r=pi();Rt.flags|=t,r.memoizedState=yo(1|e,n,void 0,i===void 0?null:i)}function Ic(t,e,n,i){var r=Yn();i=i===void 0?null:i;var s=void 0;if(Vt!==null){var a=Vt.memoizedState;if(s=a.destroy,i!==null&&Eh(i,a.deps)){r.memoizedState=yo(e,n,s,i);return}}Rt.flags|=t,r.memoizedState=yo(1|e,n,s,i)}function im(t,e){return Ul(8390656,8,t,e)}function Ah(t,e){return Ic(2048,8,t,e)}function s_(t,e){return Ic(4,2,t,e)}function a_(t,e){return Ic(4,4,t,e)}function o_(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function l_(t,e,n){return n=n!=null?n.concat([t]):null,Ic(4,4,o_.bind(null,e,t),n)}function Ch(){}function c_(t,e){var n=Yn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Eh(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function u_(t,e){var n=Yn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Eh(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function f_(t,e,n){return ts&21?(li(n,e)||(n=g0(),Rt.lanes|=n,ns|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,xn=!0),t.memoizedState=n)}function Ny(t,e){var n=gt;gt=n!==0&&4>n?n:4,t(!0);var i=cu.transition;cu.transition={};try{t(!1),e()}finally{gt=n,cu.transition=i}}function d_(){return Yn().memoizedState}function Uy(t,e,n){var i=Mr(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},h_(t))p_(e,n);else if(n=q0(t,e,n,i),n!==null){var r=dn();ai(n,t,i,r),m_(n,e,i)}}function Fy(t,e,n){var i=Mr(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(h_(t))p_(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var a=e.lastRenderedState,o=s(a,n);if(r.hasEagerState=!0,r.eagerState=o,li(o,a)){var l=e.interleaved;l===null?(r.next=r,vh(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=q0(t,e,r,i),n!==null&&(r=dn(),ai(n,t,i,r),m_(n,e,i))}}function h_(t){var e=t.alternate;return t===Rt||e!==null&&e===Rt}function p_(t,e){Za=fc=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function m_(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,rh(t,n)}}var dc={readContext:jn,useCallback:nn,useContext:nn,useEffect:nn,useImperativeHandle:nn,useInsertionEffect:nn,useLayoutEffect:nn,useMemo:nn,useReducer:nn,useRef:nn,useState:nn,useDebugValue:nn,useDeferredValue:nn,useTransition:nn,useMutableSource:nn,useSyncExternalStore:nn,useId:nn,unstable_isNewReconciler:!1},Oy={readContext:jn,useCallback:function(t,e){return pi().memoizedState=[t,e===void 0?null:e],t},useContext:jn,useEffect:im,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Ul(4194308,4,o_.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Ul(4194308,4,t,e)},useInsertionEffect:function(t,e){return Ul(4,2,t,e)},useMemo:function(t,e){var n=pi();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=pi();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=Uy.bind(null,Rt,t),[i.memoizedState,t]},useRef:function(t){var e=pi();return t={current:t},e.memoizedState=t},useState:nm,useDebugValue:Ch,useDeferredValue:function(t){return pi().memoizedState=t},useTransition:function(){var t=nm(!1),e=t[0];return t=Ny.bind(null,t[1]),pi().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=Rt,r=pi();if(wt){if(n===void 0)throw Error(oe(407));n=n()}else{if(n=e(),Yt===null)throw Error(oe(349));ts&30||J0(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,im(t_.bind(null,i,s,t),[t]),i.flags|=2048,yo(9,e_.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=pi(),e=Yt.identifierPrefix;if(wt){var n=Oi,i=Fi;n=(i&~(1<<32-si(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=vo++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=Dy++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},ky={readContext:jn,useCallback:c_,useContext:jn,useEffect:Ah,useImperativeHandle:l_,useInsertionEffect:s_,useLayoutEffect:a_,useMemo:u_,useReducer:uu,useRef:r_,useState:function(){return uu(xo)},useDebugValue:Ch,useDeferredValue:function(t){var e=Yn();return f_(e,Vt.memoizedState,t)},useTransition:function(){var t=uu(xo)[0],e=Yn().memoizedState;return[t,e]},useMutableSource:Z0,useSyncExternalStore:Q0,useId:d_,unstable_isNewReconciler:!1},By={readContext:jn,useCallback:c_,useContext:jn,useEffect:Ah,useImperativeHandle:l_,useInsertionEffect:s_,useLayoutEffect:a_,useMemo:u_,useReducer:fu,useRef:r_,useState:function(){return fu(xo)},useDebugValue:Ch,useDeferredValue:function(t){var e=Yn();return Vt===null?e.memoizedState=t:f_(e,Vt.memoizedState,t)},useTransition:function(){var t=fu(xo)[0],e=Yn().memoizedState;return[t,e]},useMutableSource:Z0,useSyncExternalStore:Q0,useId:d_,unstable_isNewReconciler:!1};function ei(t,e){if(t&&t.defaultProps){e=Pt({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Uf(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:Pt({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Dc={isMounted:function(t){return(t=t._reactInternals)?ls(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=dn(),r=Mr(t),s=Bi(i,r);s.payload=e,n!=null&&(s.callback=n),e=yr(t,s,r),e!==null&&(ai(e,t,r,i),Dl(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=dn(),r=Mr(t),s=Bi(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=yr(t,s,r),e!==null&&(ai(e,t,r,i),Dl(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=dn(),i=Mr(t),r=Bi(n,i);r.tag=2,e!=null&&(r.callback=e),e=yr(t,r,i),e!==null&&(ai(e,t,i,n),Dl(e,t,i))}};function rm(t,e,n,i,r,s,a){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,a):e.prototype&&e.prototype.isPureReactComponent?!fo(n,i)||!fo(r,s):!0}function g_(t,e,n){var i=!1,r=wr,s=e.contextType;return typeof s=="object"&&s!==null?s=jn(s):(r=Sn(e)?Jr:ln.current,i=e.contextTypes,s=(i=i!=null)?ra(t,r):wr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Dc,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function sm(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&Dc.enqueueReplaceState(e,e.state,null)}function Ff(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},xh(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=jn(s):(s=Sn(e)?Jr:ln.current,r.context=ra(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Uf(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&Dc.enqueueReplaceState(r,r.state,null),cc(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function la(t,e){try{var n="",i=e;do n+=hx(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function du(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Of(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var zy=typeof WeakMap=="function"?WeakMap:Map;function __(t,e,n){n=Bi(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){pc||(pc=!0,Yf=i),Of(t,e)},n}function v_(t,e,n){n=Bi(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){Of(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Of(t,e),typeof i!="function"&&(Sr===null?Sr=new Set([this]):Sr.add(this));var a=e.stack;this.componentDidCatch(e.value,{componentStack:a!==null?a:""})}),n}function am(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new zy;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=eS.bind(null,t,e,n),e.then(t,t))}function om(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function lm(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Bi(-1,1),e.tag=2,yr(n,e,1))),n.lanes|=1),t)}var Vy=$i.ReactCurrentOwner,xn=!1;function fn(t,e,n,i){e.child=t===null?Y0(e,null,n,i):aa(e,t.child,n,i)}function cm(t,e,n,i,r){n=n.render;var s=e.ref;return Js(e,r),i=Th(t,e,n,i,s,r),n=wh(),t!==null&&!xn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,ji(t,e,r)):(wt&&n&&dh(e),e.flags|=1,fn(t,e,i,r),e.child)}function um(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!Uh(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,x_(t,e,s,i,r)):(t=Bl(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var a=s.memoizedProps;if(n=n.compare,n=n!==null?n:fo,n(a,i)&&t.ref===e.ref)return ji(t,e,r)}return e.flags|=1,t=Er(s,i),t.ref=e.ref,t.return=e,e.child=t}function x_(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(fo(s,i)&&t.ref===e.ref)if(xn=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(xn=!0);else return e.lanes=t.lanes,ji(t,e,r)}return kf(t,e,n,i,r)}function y_(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Mt(qs,Rn),Rn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,Mt(qs,Rn),Rn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,Mt(qs,Rn),Rn|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,Mt(qs,Rn),Rn|=i;return fn(t,e,r,n),e.child}function S_(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function kf(t,e,n,i,r){var s=Sn(n)?Jr:ln.current;return s=ra(e,s),Js(e,r),n=Th(t,e,n,i,s,r),i=wh(),t!==null&&!xn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,ji(t,e,r)):(wt&&i&&dh(e),e.flags|=1,fn(t,e,n,r),e.child)}function fm(t,e,n,i,r){if(Sn(n)){var s=!0;rc(e)}else s=!1;if(Js(e,r),e.stateNode===null)Fl(t,e),g_(e,n,i),Ff(e,n,i,r),i=!0;else if(t===null){var a=e.stateNode,o=e.memoizedProps;a.props=o;var l=a.context,c=n.contextType;typeof c=="object"&&c!==null?c=jn(c):(c=Sn(n)?Jr:ln.current,c=ra(e,c));var d=n.getDerivedStateFromProps,h=typeof d=="function"||typeof a.getSnapshotBeforeUpdate=="function";h||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==i||l!==c)&&sm(e,a,i,c),lr=!1;var u=e.memoizedState;a.state=u,cc(e,i,a,r),l=e.memoizedState,o!==i||u!==l||yn.current||lr?(typeof d=="function"&&(Uf(e,n,d,i),l=e.memoizedState),(o=lr||rm(e,n,o,i,u,l,c))?(h||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(e.flags|=4194308)):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),a.props=i,a.state=l,a.context=c,i=o):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{a=e.stateNode,$0(t,e),o=e.memoizedProps,c=e.type===e.elementType?o:ei(e.type,o),a.props=c,h=e.pendingProps,u=a.context,l=n.contextType,typeof l=="object"&&l!==null?l=jn(l):(l=Sn(n)?Jr:ln.current,l=ra(e,l));var p=n.getDerivedStateFromProps;(d=typeof p=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==h||u!==l)&&sm(e,a,i,l),lr=!1,u=e.memoizedState,a.state=u,cc(e,i,a,r);var v=e.memoizedState;o!==h||u!==v||yn.current||lr?(typeof p=="function"&&(Uf(e,n,p,i),v=e.memoizedState),(c=lr||rm(e,n,c,i,u,v,l)||!1)?(d||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(i,v,l),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(i,v,l)),typeof a.componentDidUpdate=="function"&&(e.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof a.componentDidUpdate!="function"||o===t.memoizedProps&&u===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&u===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=v),a.props=i,a.state=v,a.context=l,i=c):(typeof a.componentDidUpdate!="function"||o===t.memoizedProps&&u===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&u===t.memoizedState||(e.flags|=1024),i=!1)}return Bf(t,e,n,i,s,r)}function Bf(t,e,n,i,r,s){S_(t,e);var a=(e.flags&128)!==0;if(!i&&!a)return r&&Kp(e,n,!1),ji(t,e,s);i=e.stateNode,Vy.current=e;var o=a&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&a?(e.child=aa(e,t.child,null,s),e.child=aa(e,null,o,s)):fn(t,e,o,s),e.memoizedState=i.state,r&&Kp(e,n,!0),e.child}function M_(t){var e=t.stateNode;e.pendingContext?$p(t,e.pendingContext,e.pendingContext!==e.context):e.context&&$p(t,e.context,!1),yh(t,e.containerInfo)}function dm(t,e,n,i,r){return sa(),ph(r),e.flags|=256,fn(t,e,n,i),e.child}var zf={dehydrated:null,treeContext:null,retryLane:0};function Vf(t){return{baseLanes:t,cachePool:null,transitions:null}}function E_(t,e,n){var i=e.pendingProps,r=Ct.current,s=!1,a=(e.flags&128)!==0,o;if((o=a)||(o=t!==null&&t.memoizedState===null?!1:(r&2)!==0),o?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),Mt(Ct,r&1),t===null)return Df(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(a=i.children,t=i.fallback,s?(i=e.mode,s=e.child,a={mode:"hidden",children:a},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=a):s=Fc(a,i,0,null),t=Qr(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Vf(n),e.memoizedState=zf,t):Rh(e,a));if(r=t.memoizedState,r!==null&&(o=r.dehydrated,o!==null))return Hy(t,e,a,i,o,r,n);if(s){s=i.fallback,a=e.mode,r=t.child,o=r.sibling;var l={mode:"hidden",children:i.children};return!(a&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=Er(r,l),i.subtreeFlags=r.subtreeFlags&14680064),o!==null?s=Er(o,s):(s=Qr(s,a,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,a=t.child.memoizedState,a=a===null?Vf(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},s.memoizedState=a,s.childLanes=t.childLanes&~n,e.memoizedState=zf,i}return s=t.child,t=s.sibling,i=Er(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function Rh(t,e){return e=Fc({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Ko(t,e,n,i){return i!==null&&ph(i),aa(e,t.child,null,n),t=Rh(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function Hy(t,e,n,i,r,s,a){if(n)return e.flags&256?(e.flags&=-257,i=du(Error(oe(422))),Ko(t,e,a,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=Fc({mode:"visible",children:i.children},r,0,null),s=Qr(s,r,a,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&aa(e,t.child,null,a),e.child.memoizedState=Vf(a),e.memoizedState=zf,s);if(!(e.mode&1))return Ko(t,e,a,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var o=i.dgst;return i=o,s=Error(oe(419)),i=du(s,i,void 0),Ko(t,e,a,i)}if(o=(a&t.childLanes)!==0,xn||o){if(i=Yt,i!==null){switch(a&-a){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|a)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,Xi(t,r),ai(i,t,r,-1))}return Nh(),i=du(Error(oe(421))),Ko(t,e,a,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=tS.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,Ln=xr(r.nextSibling),In=e,wt=!0,ni=null,t!==null&&(Vn[Hn++]=Fi,Vn[Hn++]=Oi,Vn[Hn++]=es,Fi=t.id,Oi=t.overflow,es=e),e=Rh(e,i.children),e.flags|=4096,e)}function hm(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),Nf(t.return,e,n)}function hu(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function T_(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(fn(t,e,i.children,n),i=Ct.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&hm(t,n,e);else if(t.tag===19)hm(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(Mt(Ct,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&uc(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),hu(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&uc(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}hu(e,!0,n,null,s);break;case"together":hu(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Fl(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function ji(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),ns|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(oe(153));if(e.child!==null){for(t=e.child,n=Er(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Er(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function Gy(t,e,n){switch(e.tag){case 3:M_(e),sa();break;case 5:K0(e);break;case 1:Sn(e.type)&&rc(e);break;case 4:yh(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;Mt(oc,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(Mt(Ct,Ct.current&1),e.flags|=128,null):n&e.child.childLanes?E_(t,e,n):(Mt(Ct,Ct.current&1),t=ji(t,e,n),t!==null?t.sibling:null);Mt(Ct,Ct.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return T_(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),Mt(Ct,Ct.current),i)break;return null;case 22:case 23:return e.lanes=0,y_(t,e,n)}return ji(t,e,n)}var w_,Hf,A_,C_;w_=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Hf=function(){};A_=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,qr(yi.current);var s=null;switch(n){case"input":r=uf(t,r),i=uf(t,i),s=[];break;case"select":r=Pt({},r,{value:void 0}),i=Pt({},i,{value:void 0}),s=[];break;case"textarea":r=hf(t,r),i=hf(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=nc)}mf(n,i);var a;n=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var o=r[c];for(a in o)o.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(ro.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(o=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==o&&(l!=null||o!=null))if(c==="style")if(o){for(a in o)!o.hasOwnProperty(a)||l&&l.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in l)l.hasOwnProperty(a)&&o[a]!==l[a]&&(n||(n={}),n[a]=l[a])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,o=o?o.__html:void 0,l!=null&&o!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(ro.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&Et("scroll",t),s||o===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};C_=function(t,e,n,i){n!==i&&(e.flags|=4)};function Ca(t,e){if(!wt)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function rn(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function Wy(t,e,n){var i=e.pendingProps;switch(hh(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return rn(e),null;case 1:return Sn(e.type)&&ic(),rn(e),null;case 3:return i=e.stateNode,oa(),Tt(yn),Tt(ln),Mh(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(qo(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,ni!==null&&(Kf(ni),ni=null))),Hf(t,e),rn(e),null;case 5:Sh(e);var r=qr(_o.current);if(n=e.type,t!==null&&e.stateNode!=null)A_(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(oe(166));return rn(e),null}if(t=qr(yi.current),qo(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[gi]=e,i[mo]=s,t=(e.mode&1)!==0,n){case"dialog":Et("cancel",i),Et("close",i);break;case"iframe":case"object":case"embed":Et("load",i);break;case"video":case"audio":for(r=0;r<Ga.length;r++)Et(Ga[r],i);break;case"source":Et("error",i);break;case"img":case"image":case"link":Et("error",i),Et("load",i);break;case"details":Et("toggle",i);break;case"input":Mp(i,s),Et("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},Et("invalid",i);break;case"textarea":Tp(i,s),Et("invalid",i)}mf(n,s),r=null;for(var a in s)if(s.hasOwnProperty(a)){var o=s[a];a==="children"?typeof o=="string"?i.textContent!==o&&(s.suppressHydrationWarning!==!0&&Yo(i.textContent,o,t),r=["children",o]):typeof o=="number"&&i.textContent!==""+o&&(s.suppressHydrationWarning!==!0&&Yo(i.textContent,o,t),r=["children",""+o]):ro.hasOwnProperty(a)&&o!=null&&a==="onScroll"&&Et("scroll",i)}switch(n){case"input":Bo(i),Ep(i,s,!0);break;case"textarea":Bo(i),wp(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=nc)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{a=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=t0(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=a.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=a.createElement(n,{is:i.is}):(t=a.createElement(n),n==="select"&&(a=t,i.multiple?a.multiple=!0:i.size&&(a.size=i.size))):t=a.createElementNS(t,n),t[gi]=e,t[mo]=i,w_(t,e,!1,!1),e.stateNode=t;e:{switch(a=gf(n,i),n){case"dialog":Et("cancel",t),Et("close",t),r=i;break;case"iframe":case"object":case"embed":Et("load",t),r=i;break;case"video":case"audio":for(r=0;r<Ga.length;r++)Et(Ga[r],t);r=i;break;case"source":Et("error",t),r=i;break;case"img":case"image":case"link":Et("error",t),Et("load",t),r=i;break;case"details":Et("toggle",t),r=i;break;case"input":Mp(t,i),r=uf(t,i),Et("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=Pt({},i,{value:void 0}),Et("invalid",t);break;case"textarea":Tp(t,i),r=hf(t,i),Et("invalid",t);break;default:r=i}mf(n,r),o=r;for(s in o)if(o.hasOwnProperty(s)){var l=o[s];s==="style"?r0(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&n0(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&so(t,l):typeof l=="number"&&so(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(ro.hasOwnProperty(s)?l!=null&&s==="onScroll"&&Et("scroll",t):l!=null&&Qd(t,s,l,a))}switch(n){case"input":Bo(t),Ep(t,i,!1);break;case"textarea":Bo(t),wp(t);break;case"option":i.value!=null&&t.setAttribute("value",""+Tr(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?$s(t,!!i.multiple,s,!1):i.defaultValue!=null&&$s(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=nc)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return rn(e),null;case 6:if(t&&e.stateNode!=null)C_(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(oe(166));if(n=qr(_o.current),qr(yi.current),qo(e)){if(i=e.stateNode,n=e.memoizedProps,i[gi]=e,(s=i.nodeValue!==n)&&(t=In,t!==null))switch(t.tag){case 3:Yo(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Yo(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[gi]=e,e.stateNode=i}return rn(e),null;case 13:if(Tt(Ct),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(wt&&Ln!==null&&e.mode&1&&!(e.flags&128))X0(),sa(),e.flags|=98560,s=!1;else if(s=qo(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(oe(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(oe(317));s[gi]=e}else sa(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;rn(e),s=!1}else ni!==null&&(Kf(ni),ni=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||Ct.current&1?Ht===0&&(Ht=3):Nh())),e.updateQueue!==null&&(e.flags|=4),rn(e),null);case 4:return oa(),Hf(t,e),t===null&&ho(e.stateNode.containerInfo),rn(e),null;case 10:return _h(e.type._context),rn(e),null;case 17:return Sn(e.type)&&ic(),rn(e),null;case 19:if(Tt(Ct),s=e.memoizedState,s===null)return rn(e),null;if(i=(e.flags&128)!==0,a=s.rendering,a===null)if(i)Ca(s,!1);else{if(Ht!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(a=uc(t),a!==null){for(e.flags|=128,Ca(s,!1),i=a.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,a=s.alternate,a===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=a.childLanes,s.lanes=a.lanes,s.child=a.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=a.memoizedProps,s.memoizedState=a.memoizedState,s.updateQueue=a.updateQueue,s.type=a.type,t=a.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return Mt(Ct,Ct.current&1|2),e.child}t=t.sibling}s.tail!==null&&Ot()>ca&&(e.flags|=128,i=!0,Ca(s,!1),e.lanes=4194304)}else{if(!i)if(t=uc(a),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Ca(s,!0),s.tail===null&&s.tailMode==="hidden"&&!a.alternate&&!wt)return rn(e),null}else 2*Ot()-s.renderingStartTime>ca&&n!==1073741824&&(e.flags|=128,i=!0,Ca(s,!1),e.lanes=4194304);s.isBackwards?(a.sibling=e.child,e.child=a):(n=s.last,n!==null?n.sibling=a:e.child=a,s.last=a)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Ot(),e.sibling=null,n=Ct.current,Mt(Ct,i?n&1|2:n&1),e):(rn(e),null);case 22:case 23:return Dh(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?Rn&1073741824&&(rn(e),e.subtreeFlags&6&&(e.flags|=8192)):rn(e),null;case 24:return null;case 25:return null}throw Error(oe(156,e.tag))}function Xy(t,e){switch(hh(e),e.tag){case 1:return Sn(e.type)&&ic(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return oa(),Tt(yn),Tt(ln),Mh(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Sh(e),null;case 13:if(Tt(Ct),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(oe(340));sa()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Tt(Ct),null;case 4:return oa(),null;case 10:return _h(e.type._context),null;case 22:case 23:return Dh(),null;case 24:return null;default:return null}}var Zo=!1,on=!1,jy=typeof WeakSet=="function"?WeakSet:Set,Te=null;function Ys(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){It(t,e,i)}else n.current=null}function Gf(t,e,n){try{n()}catch(i){It(t,e,i)}}var pm=!1;function Yy(t,e){if(Af=Jl,t=I0(),fh(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var a=0,o=-1,l=-1,c=0,d=0,h=t,u=null;t:for(;;){for(var p;h!==n||r!==0&&h.nodeType!==3||(o=a+r),h!==s||i!==0&&h.nodeType!==3||(l=a+i),h.nodeType===3&&(a+=h.nodeValue.length),(p=h.firstChild)!==null;)u=h,h=p;for(;;){if(h===t)break t;if(u===n&&++c===r&&(o=a),u===s&&++d===i&&(l=a),(p=h.nextSibling)!==null)break;h=u,u=h.parentNode}h=p}n=o===-1||l===-1?null:{start:o,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Cf={focusedElem:t,selectionRange:n},Jl=!1,Te=e;Te!==null;)if(e=Te,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,Te=t;else for(;Te!==null;){e=Te;try{var v=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var E=v.memoizedProps,g=v.memoizedState,f=e.stateNode,m=f.getSnapshotBeforeUpdate(e.elementType===e.type?E:ei(e.type,E),g);f.__reactInternalSnapshotBeforeUpdate=m}break;case 3:var _=e.stateNode.containerInfo;_.nodeType===1?_.textContent="":_.nodeType===9&&_.documentElement&&_.removeChild(_.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(oe(163))}}catch(M){It(e,e.return,M)}if(t=e.sibling,t!==null){t.return=e.return,Te=t;break}Te=e.return}return v=pm,pm=!1,v}function Qa(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&Gf(e,n,s)}r=r.next}while(r!==i)}}function Nc(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function Wf(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function R_(t){var e=t.alternate;e!==null&&(t.alternate=null,R_(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[gi],delete e[mo],delete e[Pf],delete e[by],delete e[Py])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function b_(t){return t.tag===5||t.tag===3||t.tag===4}function mm(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||b_(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Xf(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=nc));else if(i!==4&&(t=t.child,t!==null))for(Xf(t,e,n),t=t.sibling;t!==null;)Xf(t,e,n),t=t.sibling}function jf(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(jf(t,e,n),t=t.sibling;t!==null;)jf(t,e,n),t=t.sibling}var $t=null,ti=!1;function er(t,e,n){for(n=n.child;n!==null;)P_(t,e,n),n=n.sibling}function P_(t,e,n){if(xi&&typeof xi.onCommitFiberUnmount=="function")try{xi.onCommitFiberUnmount(Ac,n)}catch{}switch(n.tag){case 5:on||Ys(n,e);case 6:var i=$t,r=ti;$t=null,er(t,e,n),$t=i,ti=r,$t!==null&&(ti?(t=$t,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):$t.removeChild(n.stateNode));break;case 18:$t!==null&&(ti?(t=$t,n=n.stateNode,t.nodeType===8?au(t.parentNode,n):t.nodeType===1&&au(t,n),co(t)):au($t,n.stateNode));break;case 4:i=$t,r=ti,$t=n.stateNode.containerInfo,ti=!0,er(t,e,n),$t=i,ti=r;break;case 0:case 11:case 14:case 15:if(!on&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,a=s.destroy;s=s.tag,a!==void 0&&(s&2||s&4)&&Gf(n,e,a),r=r.next}while(r!==i)}er(t,e,n);break;case 1:if(!on&&(Ys(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(o){It(n,e,o)}er(t,e,n);break;case 21:er(t,e,n);break;case 22:n.mode&1?(on=(i=on)||n.memoizedState!==null,er(t,e,n),on=i):er(t,e,n);break;default:er(t,e,n)}}function gm(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new jy),e.forEach(function(i){var r=nS.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function $n(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,a=e,o=a;e:for(;o!==null;){switch(o.tag){case 5:$t=o.stateNode,ti=!1;break e;case 3:$t=o.stateNode.containerInfo,ti=!0;break e;case 4:$t=o.stateNode.containerInfo,ti=!0;break e}o=o.return}if($t===null)throw Error(oe(160));P_(s,a,r),$t=null,ti=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){It(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)L_(e,t),e=e.sibling}function L_(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if($n(e,t),fi(t),i&4){try{Qa(3,t,t.return),Nc(3,t)}catch(E){It(t,t.return,E)}try{Qa(5,t,t.return)}catch(E){It(t,t.return,E)}}break;case 1:$n(e,t),fi(t),i&512&&n!==null&&Ys(n,n.return);break;case 5:if($n(e,t),fi(t),i&512&&n!==null&&Ys(n,n.return),t.flags&32){var r=t.stateNode;try{so(r,"")}catch(E){It(t,t.return,E)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,a=n!==null?n.memoizedProps:s,o=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{o==="input"&&s.type==="radio"&&s.name!=null&&Jg(r,s),gf(o,a);var c=gf(o,s);for(a=0;a<l.length;a+=2){var d=l[a],h=l[a+1];d==="style"?r0(r,h):d==="dangerouslySetInnerHTML"?n0(r,h):d==="children"?so(r,h):Qd(r,d,h,c)}switch(o){case"input":ff(r,s);break;case"textarea":e0(r,s);break;case"select":var u=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?$s(r,!!s.multiple,p,!1):u!==!!s.multiple&&(s.defaultValue!=null?$s(r,!!s.multiple,s.defaultValue,!0):$s(r,!!s.multiple,s.multiple?[]:"",!1))}r[mo]=s}catch(E){It(t,t.return,E)}}break;case 6:if($n(e,t),fi(t),i&4){if(t.stateNode===null)throw Error(oe(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(E){It(t,t.return,E)}}break;case 3:if($n(e,t),fi(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{co(e.containerInfo)}catch(E){It(t,t.return,E)}break;case 4:$n(e,t),fi(t);break;case 13:$n(e,t),fi(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(Lh=Ot())),i&4&&gm(t);break;case 22:if(d=n!==null&&n.memoizedState!==null,t.mode&1?(on=(c=on)||d,$n(e,t),on=c):$n(e,t),fi(t),i&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!d&&t.mode&1)for(Te=t,d=t.child;d!==null;){for(h=Te=d;Te!==null;){switch(u=Te,p=u.child,u.tag){case 0:case 11:case 14:case 15:Qa(4,u,u.return);break;case 1:Ys(u,u.return);var v=u.stateNode;if(typeof v.componentWillUnmount=="function"){i=u,n=u.return;try{e=i,v.props=e.memoizedProps,v.state=e.memoizedState,v.componentWillUnmount()}catch(E){It(i,n,E)}}break;case 5:Ys(u,u.return);break;case 22:if(u.memoizedState!==null){vm(h);continue}}p!==null?(p.return=u,Te=p):vm(h)}d=d.sibling}e:for(d=null,h=t;;){if(h.tag===5){if(d===null){d=h;try{r=h.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(o=h.stateNode,l=h.memoizedProps.style,a=l!=null&&l.hasOwnProperty("display")?l.display:null,o.style.display=i0("display",a))}catch(E){It(t,t.return,E)}}}else if(h.tag===6){if(d===null)try{h.stateNode.nodeValue=c?"":h.memoizedProps}catch(E){It(t,t.return,E)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===t)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===t)break e;for(;h.sibling===null;){if(h.return===null||h.return===t)break e;d===h&&(d=null),h=h.return}d===h&&(d=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:$n(e,t),fi(t),i&4&&gm(t);break;case 21:break;default:$n(e,t),fi(t)}}function fi(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(b_(n)){var i=n;break e}n=n.return}throw Error(oe(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(so(r,""),i.flags&=-33);var s=mm(t);jf(t,s,r);break;case 3:case 4:var a=i.stateNode.containerInfo,o=mm(t);Xf(t,o,a);break;default:throw Error(oe(161))}}catch(l){It(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function qy(t,e,n){Te=t,I_(t)}function I_(t,e,n){for(var i=(t.mode&1)!==0;Te!==null;){var r=Te,s=r.child;if(r.tag===22&&i){var a=r.memoizedState!==null||Zo;if(!a){var o=r.alternate,l=o!==null&&o.memoizedState!==null||on;o=Zo;var c=on;if(Zo=a,(on=l)&&!c)for(Te=r;Te!==null;)a=Te,l=a.child,a.tag===22&&a.memoizedState!==null?xm(r):l!==null?(l.return=a,Te=l):xm(r);for(;s!==null;)Te=s,I_(s),s=s.sibling;Te=r,Zo=o,on=c}_m(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,Te=s):_m(t)}}function _m(t){for(;Te!==null;){var e=Te;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:on||Nc(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!on)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:ei(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&tm(e,s,i);break;case 3:var a=e.updateQueue;if(a!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}tm(e,a,n)}break;case 5:var o=e.stateNode;if(n===null&&e.flags&4){n=o;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var d=c.memoizedState;if(d!==null){var h=d.dehydrated;h!==null&&co(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(oe(163))}on||e.flags&512&&Wf(e)}catch(u){It(e,e.return,u)}}if(e===t){Te=null;break}if(n=e.sibling,n!==null){n.return=e.return,Te=n;break}Te=e.return}}function vm(t){for(;Te!==null;){var e=Te;if(e===t){Te=null;break}var n=e.sibling;if(n!==null){n.return=e.return,Te=n;break}Te=e.return}}function xm(t){for(;Te!==null;){var e=Te;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Nc(4,e)}catch(l){It(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){It(e,r,l)}}var s=e.return;try{Wf(e)}catch(l){It(e,s,l)}break;case 5:var a=e.return;try{Wf(e)}catch(l){It(e,a,l)}}}catch(l){It(e,e.return,l)}if(e===t){Te=null;break}var o=e.sibling;if(o!==null){o.return=e.return,Te=o;break}Te=e.return}}var $y=Math.ceil,hc=$i.ReactCurrentDispatcher,bh=$i.ReactCurrentOwner,Xn=$i.ReactCurrentBatchConfig,ct=0,Yt=null,Bt=null,Qt=0,Rn=0,qs=br(0),Ht=0,So=null,ns=0,Uc=0,Ph=0,Ja=null,vn=null,Lh=0,ca=1/0,Di=null,pc=!1,Yf=null,Sr=null,Qo=!1,pr=null,mc=0,eo=0,qf=null,Ol=-1,kl=0;function dn(){return ct&6?Ot():Ol!==-1?Ol:Ol=Ot()}function Mr(t){return t.mode&1?ct&2&&Qt!==0?Qt&-Qt:Iy.transition!==null?(kl===0&&(kl=g0()),kl):(t=gt,t!==0||(t=window.event,t=t===void 0?16:E0(t.type)),t):1}function ai(t,e,n,i){if(50<eo)throw eo=0,qf=null,Error(oe(185));bo(t,n,i),(!(ct&2)||t!==Yt)&&(t===Yt&&(!(ct&2)&&(Uc|=n),Ht===4&&ur(t,Qt)),Mn(t,i),n===1&&ct===0&&!(e.mode&1)&&(ca=Ot()+500,Lc&&Pr()))}function Mn(t,e){var n=t.callbackNode;Ix(t,e);var i=Ql(t,t===Yt?Qt:0);if(i===0)n!==null&&Rp(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&Rp(n),e===1)t.tag===0?Ly(ym.bind(null,t)):H0(ym.bind(null,t)),Cy(function(){!(ct&6)&&Pr()}),n=null;else{switch(_0(i)){case 1:n=ih;break;case 4:n=p0;break;case 16:n=Zl;break;case 536870912:n=m0;break;default:n=Zl}n=z_(n,D_.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function D_(t,e){if(Ol=-1,kl=0,ct&6)throw Error(oe(327));var n=t.callbackNode;if(ea()&&t.callbackNode!==n)return null;var i=Ql(t,t===Yt?Qt:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=gc(t,i);else{e=i;var r=ct;ct|=2;var s=U_();(Yt!==t||Qt!==e)&&(Di=null,ca=Ot()+500,Zr(t,e));do try{Qy();break}catch(o){N_(t,o)}while(!0);gh(),hc.current=s,ct=r,Bt!==null?e=0:(Yt=null,Qt=0,e=Ht)}if(e!==0){if(e===2&&(r=Sf(t),r!==0&&(i=r,e=$f(t,r))),e===1)throw n=So,Zr(t,0),ur(t,i),Mn(t,Ot()),n;if(e===6)ur(t,i);else{if(r=t.current.alternate,!(i&30)&&!Ky(r)&&(e=gc(t,i),e===2&&(s=Sf(t),s!==0&&(i=s,e=$f(t,s))),e===1))throw n=So,Zr(t,0),ur(t,i),Mn(t,Ot()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(oe(345));case 2:Vr(t,vn,Di);break;case 3:if(ur(t,i),(i&130023424)===i&&(e=Lh+500-Ot(),10<e)){if(Ql(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){dn(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=bf(Vr.bind(null,t,vn,Di),e);break}Vr(t,vn,Di);break;case 4:if(ur(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var a=31-si(i);s=1<<a,a=e[a],a>r&&(r=a),i&=~s}if(i=r,i=Ot()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*$y(i/1960))-i,10<i){t.timeoutHandle=bf(Vr.bind(null,t,vn,Di),i);break}Vr(t,vn,Di);break;case 5:Vr(t,vn,Di);break;default:throw Error(oe(329))}}}return Mn(t,Ot()),t.callbackNode===n?D_.bind(null,t):null}function $f(t,e){var n=Ja;return t.current.memoizedState.isDehydrated&&(Zr(t,e).flags|=256),t=gc(t,e),t!==2&&(e=vn,vn=n,e!==null&&Kf(e)),t}function Kf(t){vn===null?vn=t:vn.push.apply(vn,t)}function Ky(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!li(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function ur(t,e){for(e&=~Ph,e&=~Uc,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-si(e),i=1<<n;t[n]=-1,e&=~i}}function ym(t){if(ct&6)throw Error(oe(327));ea();var e=Ql(t,0);if(!(e&1))return Mn(t,Ot()),null;var n=gc(t,e);if(t.tag!==0&&n===2){var i=Sf(t);i!==0&&(e=i,n=$f(t,i))}if(n===1)throw n=So,Zr(t,0),ur(t,e),Mn(t,Ot()),n;if(n===6)throw Error(oe(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Vr(t,vn,Di),Mn(t,Ot()),null}function Ih(t,e){var n=ct;ct|=1;try{return t(e)}finally{ct=n,ct===0&&(ca=Ot()+500,Lc&&Pr())}}function is(t){pr!==null&&pr.tag===0&&!(ct&6)&&ea();var e=ct;ct|=1;var n=Xn.transition,i=gt;try{if(Xn.transition=null,gt=1,t)return t()}finally{gt=i,Xn.transition=n,ct=e,!(ct&6)&&Pr()}}function Dh(){Rn=qs.current,Tt(qs)}function Zr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,Ay(n)),Bt!==null)for(n=Bt.return;n!==null;){var i=n;switch(hh(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&ic();break;case 3:oa(),Tt(yn),Tt(ln),Mh();break;case 5:Sh(i);break;case 4:oa();break;case 13:Tt(Ct);break;case 19:Tt(Ct);break;case 10:_h(i.type._context);break;case 22:case 23:Dh()}n=n.return}if(Yt=t,Bt=t=Er(t.current,null),Qt=Rn=e,Ht=0,So=null,Ph=Uc=ns=0,vn=Ja=null,Yr!==null){for(e=0;e<Yr.length;e++)if(n=Yr[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var a=s.next;s.next=r,i.next=a}n.pending=i}Yr=null}return t}function N_(t,e){do{var n=Bt;try{if(gh(),Nl.current=dc,fc){for(var i=Rt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}fc=!1}if(ts=0,jt=Vt=Rt=null,Za=!1,vo=0,bh.current=null,n===null||n.return===null){Ht=1,So=e,Bt=null;break}e:{var s=t,a=n.return,o=n,l=e;if(e=Qt,o.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,d=o,h=d.tag;if(!(d.mode&1)&&(h===0||h===11||h===15)){var u=d.alternate;u?(d.updateQueue=u.updateQueue,d.memoizedState=u.memoizedState,d.lanes=u.lanes):(d.updateQueue=null,d.memoizedState=null)}var p=om(a);if(p!==null){p.flags&=-257,lm(p,a,o,s,e),p.mode&1&&am(s,c,e),e=p,l=c;var v=e.updateQueue;if(v===null){var E=new Set;E.add(l),e.updateQueue=E}else v.add(l);break e}else{if(!(e&1)){am(s,c,e),Nh();break e}l=Error(oe(426))}}else if(wt&&o.mode&1){var g=om(a);if(g!==null){!(g.flags&65536)&&(g.flags|=256),lm(g,a,o,s,e),ph(la(l,o));break e}}s=l=la(l,o),Ht!==4&&(Ht=2),Ja===null?Ja=[s]:Ja.push(s),s=a;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var f=__(s,l,e);em(s,f);break e;case 1:o=l;var m=s.type,_=s.stateNode;if(!(s.flags&128)&&(typeof m.getDerivedStateFromError=="function"||_!==null&&typeof _.componentDidCatch=="function"&&(Sr===null||!Sr.has(_)))){s.flags|=65536,e&=-e,s.lanes|=e;var M=v_(s,o,e);em(s,M);break e}}s=s.return}while(s!==null)}O_(n)}catch(R){e=R,Bt===n&&n!==null&&(Bt=n=n.return);continue}break}while(!0)}function U_(){var t=hc.current;return hc.current=dc,t===null?dc:t}function Nh(){(Ht===0||Ht===3||Ht===2)&&(Ht=4),Yt===null||!(ns&268435455)&&!(Uc&268435455)||ur(Yt,Qt)}function gc(t,e){var n=ct;ct|=2;var i=U_();(Yt!==t||Qt!==e)&&(Di=null,Zr(t,e));do try{Zy();break}catch(r){N_(t,r)}while(!0);if(gh(),ct=n,hc.current=i,Bt!==null)throw Error(oe(261));return Yt=null,Qt=0,Ht}function Zy(){for(;Bt!==null;)F_(Bt)}function Qy(){for(;Bt!==null&&!Ex();)F_(Bt)}function F_(t){var e=B_(t.alternate,t,Rn);t.memoizedProps=t.pendingProps,e===null?O_(t):Bt=e,bh.current=null}function O_(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=Xy(n,e),n!==null){n.flags&=32767,Bt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Ht=6,Bt=null;return}}else if(n=Wy(n,e,Rn),n!==null){Bt=n;return}if(e=e.sibling,e!==null){Bt=e;return}Bt=e=t}while(e!==null);Ht===0&&(Ht=5)}function Vr(t,e,n){var i=gt,r=Xn.transition;try{Xn.transition=null,gt=1,Jy(t,e,n,i)}finally{Xn.transition=r,gt=i}return null}function Jy(t,e,n,i){do ea();while(pr!==null);if(ct&6)throw Error(oe(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(oe(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(Dx(t,s),t===Yt&&(Bt=Yt=null,Qt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Qo||(Qo=!0,z_(Zl,function(){return ea(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Xn.transition,Xn.transition=null;var a=gt;gt=1;var o=ct;ct|=4,bh.current=null,Yy(t,n),L_(n,t),xy(Cf),Jl=!!Af,Cf=Af=null,t.current=n,qy(n),Tx(),ct=o,gt=a,Xn.transition=s}else t.current=n;if(Qo&&(Qo=!1,pr=t,mc=r),s=t.pendingLanes,s===0&&(Sr=null),Cx(n.stateNode),Mn(t,Ot()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(pc)throw pc=!1,t=Yf,Yf=null,t;return mc&1&&t.tag!==0&&ea(),s=t.pendingLanes,s&1?t===qf?eo++:(eo=0,qf=t):eo=0,Pr(),null}function ea(){if(pr!==null){var t=_0(mc),e=Xn.transition,n=gt;try{if(Xn.transition=null,gt=16>t?16:t,pr===null)var i=!1;else{if(t=pr,pr=null,mc=0,ct&6)throw Error(oe(331));var r=ct;for(ct|=4,Te=t.current;Te!==null;){var s=Te,a=s.child;if(Te.flags&16){var o=s.deletions;if(o!==null){for(var l=0;l<o.length;l++){var c=o[l];for(Te=c;Te!==null;){var d=Te;switch(d.tag){case 0:case 11:case 15:Qa(8,d,s)}var h=d.child;if(h!==null)h.return=d,Te=h;else for(;Te!==null;){d=Te;var u=d.sibling,p=d.return;if(R_(d),d===c){Te=null;break}if(u!==null){u.return=p,Te=u;break}Te=p}}}var v=s.alternate;if(v!==null){var E=v.child;if(E!==null){v.child=null;do{var g=E.sibling;E.sibling=null,E=g}while(E!==null)}}Te=s}}if(s.subtreeFlags&2064&&a!==null)a.return=s,Te=a;else e:for(;Te!==null;){if(s=Te,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Qa(9,s,s.return)}var f=s.sibling;if(f!==null){f.return=s.return,Te=f;break e}Te=s.return}}var m=t.current;for(Te=m;Te!==null;){a=Te;var _=a.child;if(a.subtreeFlags&2064&&_!==null)_.return=a,Te=_;else e:for(a=m;Te!==null;){if(o=Te,o.flags&2048)try{switch(o.tag){case 0:case 11:case 15:Nc(9,o)}}catch(R){It(o,o.return,R)}if(o===a){Te=null;break e}var M=o.sibling;if(M!==null){M.return=o.return,Te=M;break e}Te=o.return}}if(ct=r,Pr(),xi&&typeof xi.onPostCommitFiberRoot=="function")try{xi.onPostCommitFiberRoot(Ac,t)}catch{}i=!0}return i}finally{gt=n,Xn.transition=e}}return!1}function Sm(t,e,n){e=la(n,e),e=__(t,e,1),t=yr(t,e,1),e=dn(),t!==null&&(bo(t,1,e),Mn(t,e))}function It(t,e,n){if(t.tag===3)Sm(t,t,n);else for(;e!==null;){if(e.tag===3){Sm(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Sr===null||!Sr.has(i))){t=la(n,t),t=v_(e,t,1),e=yr(e,t,1),t=dn(),e!==null&&(bo(e,1,t),Mn(e,t));break}}e=e.return}}function eS(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=dn(),t.pingedLanes|=t.suspendedLanes&n,Yt===t&&(Qt&n)===n&&(Ht===4||Ht===3&&(Qt&130023424)===Qt&&500>Ot()-Lh?Zr(t,0):Ph|=n),Mn(t,e)}function k_(t,e){e===0&&(t.mode&1?(e=Ho,Ho<<=1,!(Ho&130023424)&&(Ho=4194304)):e=1);var n=dn();t=Xi(t,e),t!==null&&(bo(t,e,n),Mn(t,n))}function tS(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),k_(t,n)}function nS(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(oe(314))}i!==null&&i.delete(e),k_(t,n)}var B_;B_=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||yn.current)xn=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return xn=!1,Gy(t,e,n);xn=!!(t.flags&131072)}else xn=!1,wt&&e.flags&1048576&&G0(e,ac,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;Fl(t,e),t=e.pendingProps;var r=ra(e,ln.current);Js(e,n),r=Th(null,e,i,t,r,n);var s=wh();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Sn(i)?(s=!0,rc(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,xh(e),r.updater=Dc,e.stateNode=r,r._reactInternals=e,Ff(e,i,t,n),e=Bf(null,e,i,!0,s,n)):(e.tag=0,wt&&s&&dh(e),fn(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(Fl(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=rS(i),t=ei(i,t),r){case 0:e=kf(null,e,i,t,n);break e;case 1:e=fm(null,e,i,t,n);break e;case 11:e=cm(null,e,i,t,n);break e;case 14:e=um(null,e,i,ei(i.type,t),n);break e}throw Error(oe(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ei(i,r),kf(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ei(i,r),fm(t,e,i,r,n);case 3:e:{if(M_(e),t===null)throw Error(oe(387));i=e.pendingProps,s=e.memoizedState,r=s.element,$0(t,e),cc(e,i,null,n);var a=e.memoizedState;if(i=a.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=la(Error(oe(423)),e),e=dm(t,e,i,n,r);break e}else if(i!==r){r=la(Error(oe(424)),e),e=dm(t,e,i,n,r);break e}else for(Ln=xr(e.stateNode.containerInfo.firstChild),In=e,wt=!0,ni=null,n=Y0(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(sa(),i===r){e=ji(t,e,n);break e}fn(t,e,i,n)}e=e.child}return e;case 5:return K0(e),t===null&&Df(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,a=r.children,Rf(i,r)?a=null:s!==null&&Rf(i,s)&&(e.flags|=32),S_(t,e),fn(t,e,a,n),e.child;case 6:return t===null&&Df(e),null;case 13:return E_(t,e,n);case 4:return yh(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=aa(e,null,i,n):fn(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ei(i,r),cm(t,e,i,r,n);case 7:return fn(t,e,e.pendingProps,n),e.child;case 8:return fn(t,e,e.pendingProps.children,n),e.child;case 12:return fn(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,a=r.value,Mt(oc,i._currentValue),i._currentValue=a,s!==null)if(li(s.value,a)){if(s.children===r.children&&!yn.current){e=ji(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var o=s.dependencies;if(o!==null){a=s.child;for(var l=o.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=Bi(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var d=c.pending;d===null?l.next=l:(l.next=d.next,d.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Nf(s.return,n,e),o.lanes|=n;break}l=l.next}}else if(s.tag===10)a=s.type===e.type?null:s.child;else if(s.tag===18){if(a=s.return,a===null)throw Error(oe(341));a.lanes|=n,o=a.alternate,o!==null&&(o.lanes|=n),Nf(a,n,e),a=s.sibling}else a=s.child;if(a!==null)a.return=s;else for(a=s;a!==null;){if(a===e){a=null;break}if(s=a.sibling,s!==null){s.return=a.return,a=s;break}a=a.return}s=a}fn(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,Js(e,n),r=jn(r),i=i(r),e.flags|=1,fn(t,e,i,n),e.child;case 14:return i=e.type,r=ei(i,e.pendingProps),r=ei(i.type,r),um(t,e,i,r,n);case 15:return x_(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ei(i,r),Fl(t,e),e.tag=1,Sn(i)?(t=!0,rc(e)):t=!1,Js(e,n),g_(e,i,r),Ff(e,i,r,n),Bf(null,e,i,!0,t,n);case 19:return T_(t,e,n);case 22:return y_(t,e,n)}throw Error(oe(156,e.tag))};function z_(t,e){return h0(t,e)}function iS(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Wn(t,e,n,i){return new iS(t,e,n,i)}function Uh(t){return t=t.prototype,!(!t||!t.isReactComponent)}function rS(t){if(typeof t=="function")return Uh(t)?1:0;if(t!=null){if(t=t.$$typeof,t===eh)return 11;if(t===th)return 14}return 2}function Er(t,e){var n=t.alternate;return n===null?(n=Wn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Bl(t,e,n,i,r,s){var a=2;if(i=t,typeof t=="function")Uh(t)&&(a=1);else if(typeof t=="string")a=5;else e:switch(t){case ks:return Qr(n.children,r,s,e);case Jd:a=8,r|=8;break;case af:return t=Wn(12,n,e,r|2),t.elementType=af,t.lanes=s,t;case of:return t=Wn(13,n,e,r),t.elementType=of,t.lanes=s,t;case lf:return t=Wn(19,n,e,r),t.elementType=lf,t.lanes=s,t;case Kg:return Fc(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case qg:a=10;break e;case $g:a=9;break e;case eh:a=11;break e;case th:a=14;break e;case or:a=16,i=null;break e}throw Error(oe(130,t==null?t:typeof t,""))}return e=Wn(a,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function Qr(t,e,n,i){return t=Wn(7,t,i,e),t.lanes=n,t}function Fc(t,e,n,i){return t=Wn(22,t,i,e),t.elementType=Kg,t.lanes=n,t.stateNode={isHidden:!1},t}function pu(t,e,n){return t=Wn(6,t,null,e),t.lanes=n,t}function mu(t,e,n){return e=Wn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function sS(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=$c(0),this.expirationTimes=$c(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=$c(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function Fh(t,e,n,i,r,s,a,o,l){return t=new sS(t,e,n,o,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Wn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},xh(s),t}function aS(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Os,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function V_(t){if(!t)return wr;t=t._reactInternals;e:{if(ls(t)!==t||t.tag!==1)throw Error(oe(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Sn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(oe(171))}if(t.tag===1){var n=t.type;if(Sn(n))return V0(t,n,e)}return e}function H_(t,e,n,i,r,s,a,o,l){return t=Fh(n,i,!0,t,r,s,a,o,l),t.context=V_(null),n=t.current,i=dn(),r=Mr(n),s=Bi(i,r),s.callback=e??null,yr(n,s,r),t.current.lanes=r,bo(t,r,i),Mn(t,i),t}function Oc(t,e,n,i){var r=e.current,s=dn(),a=Mr(r);return n=V_(n),e.context===null?e.context=n:e.pendingContext=n,e=Bi(s,a),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=yr(r,e,a),t!==null&&(ai(t,r,a,s),Dl(t,r,a)),a}function _c(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Mm(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Oh(t,e){Mm(t,e),(t=t.alternate)&&Mm(t,e)}function oS(){return null}var G_=typeof reportError=="function"?reportError:function(t){console.error(t)};function kh(t){this._internalRoot=t}kc.prototype.render=kh.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(oe(409));Oc(t,e,null,null)};kc.prototype.unmount=kh.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;is(function(){Oc(null,t,null,null)}),e[Wi]=null}};function kc(t){this._internalRoot=t}kc.prototype.unstable_scheduleHydration=function(t){if(t){var e=y0();t={blockedOn:null,target:t,priority:e};for(var n=0;n<cr.length&&e!==0&&e<cr[n].priority;n++);cr.splice(n,0,t),n===0&&M0(t)}};function Bh(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Bc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Em(){}function lS(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=_c(a);s.call(c)}}var a=H_(e,i,t,0,null,!1,!1,"",Em);return t._reactRootContainer=a,t[Wi]=a.current,ho(t.nodeType===8?t.parentNode:t),is(),a}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var o=i;i=function(){var c=_c(l);o.call(c)}}var l=Fh(t,0,!1,null,null,!1,!1,"",Em);return t._reactRootContainer=l,t[Wi]=l.current,ho(t.nodeType===8?t.parentNode:t),is(function(){Oc(e,l,n,i)}),l}function zc(t,e,n,i,r){var s=n._reactRootContainer;if(s){var a=s;if(typeof r=="function"){var o=r;r=function(){var l=_c(a);o.call(l)}}Oc(e,a,t,r)}else a=lS(n,e,t,r,i);return _c(a)}v0=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Ha(e.pendingLanes);n!==0&&(rh(e,n|1),Mn(e,Ot()),!(ct&6)&&(ca=Ot()+500,Pr()))}break;case 13:is(function(){var i=Xi(t,1);if(i!==null){var r=dn();ai(i,t,1,r)}}),Oh(t,1)}};sh=function(t){if(t.tag===13){var e=Xi(t,134217728);if(e!==null){var n=dn();ai(e,t,134217728,n)}Oh(t,134217728)}};x0=function(t){if(t.tag===13){var e=Mr(t),n=Xi(t,e);if(n!==null){var i=dn();ai(n,t,e,i)}Oh(t,e)}};y0=function(){return gt};S0=function(t,e){var n=gt;try{return gt=t,e()}finally{gt=n}};vf=function(t,e,n){switch(e){case"input":if(ff(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=Pc(i);if(!r)throw Error(oe(90));Qg(i),ff(i,r)}}}break;case"textarea":e0(t,n);break;case"select":e=n.value,e!=null&&$s(t,!!n.multiple,e,!1)}};o0=Ih;l0=is;var cS={usingClientEntryPoint:!1,Events:[Lo,Hs,Pc,s0,a0,Ih]},Ra={findFiberByHostInstance:jr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},uS={bundleType:Ra.bundleType,version:Ra.version,rendererPackageName:Ra.rendererPackageName,rendererConfig:Ra.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:$i.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=f0(t),t===null?null:t.stateNode},findFiberByHostInstance:Ra.findFiberByHostInstance||oS,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Jo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Jo.isDisabled&&Jo.supportsFiber)try{Ac=Jo.inject(uS),xi=Jo}catch{}}Un.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=cS;Un.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Bh(e))throw Error(oe(200));return aS(t,e,null,n)};Un.createRoot=function(t,e){if(!Bh(t))throw Error(oe(299));var n=!1,i="",r=G_;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=Fh(t,1,!1,null,null,n,!1,i,r),t[Wi]=e.current,ho(t.nodeType===8?t.parentNode:t),new kh(e)};Un.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(oe(188)):(t=Object.keys(t).join(","),Error(oe(268,t)));return t=f0(e),t=t===null?null:t.stateNode,t};Un.flushSync=function(t){return is(t)};Un.hydrate=function(t,e,n){if(!Bc(e))throw Error(oe(200));return zc(null,t,e,!0,n)};Un.hydrateRoot=function(t,e,n){if(!Bh(t))throw Error(oe(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",a=G_;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),e=H_(e,null,t,1,n??null,r,!1,s,a),t[Wi]=e.current,ho(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new kc(e)};Un.render=function(t,e,n){if(!Bc(e))throw Error(oe(200));return zc(null,t,e,!1,n)};Un.unmountComponentAtNode=function(t){if(!Bc(t))throw Error(oe(40));return t._reactRootContainer?(is(function(){zc(null,null,t,!1,function(){t._reactRootContainer=null,t[Wi]=null})}),!0):!1};Un.unstable_batchedUpdates=Ih;Un.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!Bc(n))throw Error(oe(200));if(t==null||t._reactInternals===void 0)throw Error(oe(38));return zc(t,e,n,!1,i)};Un.version="18.3.1-next-f1338f8080-20240426";function W_(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(W_)}catch(t){console.error(t)}}W_(),Wg.exports=Un;var fS=Wg.exports,X_,Tm=fS;X_=Tm.createRoot,Tm.hydrateRoot;/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dS=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),j_=(...t)=>t.filter((e,n,i)=>!!e&&e.trim()!==""&&i.indexOf(e)===n).join(" ").trim();/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var hS={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pS=be.forwardRef(({color:t="currentColor",size:e=24,strokeWidth:n=2,absoluteStrokeWidth:i,className:r="",children:s,iconNode:a,...o},l)=>be.createElement("svg",{ref:l,...hS,width:e,height:e,stroke:t,strokeWidth:i?Number(n)*24/Number(e):n,className:j_("lucide",r),...o},[...a.map(([c,d])=>be.createElement(c,d)),...Array.isArray(s)?s:[s]]));/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const en=(t,e)=>{const n=be.forwardRef(({className:i,...r},s)=>be.createElement(pS,{ref:s,iconNode:e,className:j_(`lucide-${dS(t)}`,i),...r}));return n.displayName=`${t}`,n};/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y_=en("BookOpen",[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mS=en("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q_=en("CircleCheck",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gS=en("CircleHelp",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",key:"1u773s"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _S=en("CircleX",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vS=en("ClipboardList",[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1",key:"tgr4d6"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",key:"116196"}],["path",{d:"M12 11h4",key:"1jrz19"}],["path",{d:"M12 16h4",key:"n85exb"}],["path",{d:"M8 11h.01",key:"1dfujw"}],["path",{d:"M8 16h.01",key:"18s6g9"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $_=en("CornerUpLeft",[["polyline",{points:"9 14 4 9 9 4",key:"881910"}],["path",{d:"M20 20v-7a4 4 0 0 0-4-4H4",key:"1nkjon"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xS=en("LockKeyhole",[["circle",{cx:"12",cy:"16",r:"1",key:"1au0dj"}],["rect",{x:"3",y:"10",width:"18",height:"12",rx:"2",key:"6s8ecr"}],["path",{d:"M7 10V7a5 5 0 0 1 10 0v3",key:"1pqi11"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yS=en("Map",[["path",{d:"M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z",key:"169xi5"}],["path",{d:"M15 5.764v15",key:"1pn4in"}],["path",{d:"M9 3.236v15",key:"1uimfh"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zf=en("MessageCircle",[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z",key:"vv11sd"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const SS=en("NotebookPen",[["path",{d:"M13.4 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-7.4",key:"re6nr2"}],["path",{d:"M2 6h4",key:"aawbzj"}],["path",{d:"M2 10h4",key:"l0bgd4"}],["path",{d:"M2 14h4",key:"1gsvsf"}],["path",{d:"M2 18h4",key:"1bu2t1"}],["path",{d:"M21.378 5.626a1 1 0 1 0-3.004-3.004l-5.01 5.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z",key:"pqwjuv"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const MS=en("Play",[["polygon",{points:"6 3 20 12 6 21 6 3",key:"1oa8hb"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ES=en("RotateCcw",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const TS=en("Sparkles",[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wS=en("Swords",[["polyline",{points:"14.5 17.5 3 6 3 3 6 3 17.5 14.5",key:"1hfsw2"}],["line",{x1:"13",x2:"19",y1:"19",y2:"13",key:"1vrmhu"}],["line",{x1:"16",x2:"20",y1:"16",y2:"20",key:"1bron3"}],["line",{x1:"19",x2:"21",y1:"21",y2:"19",key:"13pww6"}],["polyline",{points:"14.5 6.5 18 3 21 3 21 6 17.5 9.5",key:"hbey2j"}],["line",{x1:"5",x2:"9",y1:"14",y2:"18",key:"1hf58s"}],["line",{x1:"7",x2:"4",y1:"17",y2:"20",key:"pidxm4"}],["line",{x1:"3",x2:"5",y1:"19",y2:"21",key:"1pehsh"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gu=en("Trophy",[["path",{d:"M6 9H4.5a2.5 2.5 0 0 1 0-5H6",key:"17hqa7"}],["path",{d:"M18 9h1.5a2.5 2.5 0 0 0 0-5H18",key:"lmptdp"}],["path",{d:"M4 22h16",key:"57wxv0"}],["path",{d:"M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22",key:"1nw9bq"}],["path",{d:"M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22",key:"1np0yb"}],["path",{d:"M18 2H6v7a6 6 0 0 0 12 0V2Z",key:"u46fv3"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const AS=en("UserRound",[["circle",{cx:"12",cy:"8",r:"5",key:"1hypcn"}],["path",{d:"M20 21a8 8 0 0 0-16 0",key:"rfgkzh"}]]);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const zh="184",CS=0,wm=1,RS=2,zl=1,bS=2,Wa=3,Ar=0,En=1,Ui=2,zi=0,ta=1,Qf=2,Am=3,Cm=4,PS=5,Gr=100,LS=101,IS=102,DS=103,NS=104,US=200,FS=201,OS=202,kS=203,Jf=204,ed=205,BS=206,zS=207,VS=208,HS=209,GS=210,WS=211,XS=212,jS=213,YS=214,td=0,nd=1,id=2,ua=3,rd=4,sd=5,ad=6,od=7,K_=0,qS=1,$S=2,Si=0,Z_=1,Q_=2,J_=3,ev=4,tv=5,nv=6,iv=7,rv=300,rs=301,fa=302,_u=303,vu=304,Vc=306,ld=1e3,ki=1001,cd=1002,Zt=1003,KS=1004,el=1005,zt=1006,xu=1007,$r=1008,Pn=1009,sv=1010,av=1011,Mo=1012,Vh=1013,Ei=1014,_i=1015,Yi=1016,Hh=1017,Gh=1018,Eo=1020,ov=35902,lv=35899,cv=1021,uv=1022,ri=1023,qi=1026,Kr=1027,fv=1028,Wh=1029,ss=1030,Xh=1031,jh=1033,Vl=33776,Hl=33777,Gl=33778,Wl=33779,ud=35840,fd=35841,dd=35842,hd=35843,pd=36196,md=37492,gd=37496,_d=37488,vd=37489,vc=37490,xd=37491,yd=37808,Sd=37809,Md=37810,Ed=37811,Td=37812,wd=37813,Ad=37814,Cd=37815,Rd=37816,bd=37817,Pd=37818,Ld=37819,Id=37820,Dd=37821,Nd=36492,Ud=36494,Fd=36495,Od=36283,kd=36284,xc=36285,Bd=36286,ZS=3200,zd=0,QS=1,fr="",Kt="srgb",yc="srgb-linear",Sc="linear",pt="srgb",gs=7680,Rm=519,JS=512,eM=513,tM=514,Yh=515,nM=516,iM=517,qh=518,rM=519,Vd=35044,bm="300 es",vi=2e3,To=2001;function sM(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function wo(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function aM(){const t=wo("canvas");return t.style.display="block",t}const Pm={};function Mc(...t){const e="THREE."+t.shift();console.log(e,...t)}function dv(t){const e=t[0];if(typeof e=="string"&&e.startsWith("TSL:")){const n=t[1];n&&n.isStackTrace?t[0]+=" "+n.getLocation():t[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return t}function ke(...t){t=dv(t);const e="THREE."+t.shift();{const n=t[0];n&&n.isStackTrace?console.warn(n.getError(e)):console.warn(e,...t)}}function tt(...t){t=dv(t);const e="THREE."+t.shift();{const n=t[0];n&&n.isStackTrace?console.error(n.getError(e)):console.error(e,...t)}}function Hd(...t){const e=t.join(" ");e in Pm||(Pm[e]=!0,ke(...t))}function oM(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}const lM={[td]:nd,[id]:ad,[rd]:od,[ua]:sd,[nd]:td,[ad]:id,[od]:rd,[sd]:ua};class cs{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const i=n[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const sn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Lm=1234567;const to=Math.PI/180,Ao=180/Math.PI;function Vi(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(sn[t&255]+sn[t>>8&255]+sn[t>>16&255]+sn[t>>24&255]+"-"+sn[e&255]+sn[e>>8&255]+"-"+sn[e>>16&15|64]+sn[e>>24&255]+"-"+sn[n&63|128]+sn[n>>8&255]+"-"+sn[n>>16&255]+sn[n>>24&255]+sn[i&255]+sn[i>>8&255]+sn[i>>16&255]+sn[i>>24&255]).toLowerCase()}function et(t,e,n){return Math.max(e,Math.min(n,t))}function $h(t,e){return(t%e+e)%e}function cM(t,e,n,i,r){return i+(t-e)*(r-i)/(n-e)}function uM(t,e,n){return t!==e?(n-t)/(e-t):0}function no(t,e,n){return(1-n)*t+n*e}function fM(t,e,n,i){return no(t,e,1-Math.exp(-n*i))}function dM(t,e=1){return e-Math.abs($h(t,e*2)-e)}function hM(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*(3-2*t))}function pM(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*t*(t*(t*6-15)+10))}function mM(t,e){return t+Math.floor(Math.random()*(e-t+1))}function gM(t,e){return t+Math.random()*(e-t)}function _M(t){return t*(.5-Math.random())}function vM(t){t!==void 0&&(Lm=t);let e=Lm+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function xM(t){return t*to}function yM(t){return t*Ao}function SM(t){return(t&t-1)===0&&t!==0}function MM(t){return Math.pow(2,Math.ceil(Math.log(t)/Math.LN2))}function EM(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function TM(t,e,n,i,r){const s=Math.cos,a=Math.sin,o=s(n/2),l=a(n/2),c=s((e+i)/2),d=a((e+i)/2),h=s((e-i)/2),u=a((e-i)/2),p=s((i-e)/2),v=a((i-e)/2);switch(r){case"XYX":t.set(o*d,l*h,l*u,o*c);break;case"YZY":t.set(l*u,o*d,l*h,o*c);break;case"ZXZ":t.set(l*h,l*u,o*d,o*c);break;case"XZX":t.set(o*d,l*v,l*p,o*c);break;case"YXY":t.set(l*p,o*d,l*v,o*c);break;case"ZYZ":t.set(l*v,l*p,o*d,o*c);break;default:ke("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function ii(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function mt(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}const ba={DEG2RAD:to,RAD2DEG:Ao,generateUUID:Vi,clamp:et,euclideanModulo:$h,mapLinear:cM,inverseLerp:uM,lerp:no,damp:fM,pingpong:dM,smoothstep:hM,smootherstep:pM,randInt:mM,randFloat:gM,randFloatSpread:_M,seededRandom:vM,degToRad:xM,radToDeg:yM,isPowerOfTwo:SM,ceilPowerOfTwo:MM,floorPowerOfTwo:EM,setQuaternionFromProperEuler:TM,normalize:mt,denormalize:ii},up=class up{constructor(e=0,n=0){this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=et(this.x,e.x,n.x),this.y=et(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=et(this.x,e,n),this.y=et(this.y,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(et(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(et(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};up.prototype.isVector2=!0;let Xe=up;class _a{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,a,o){let l=i[r+0],c=i[r+1],d=i[r+2],h=i[r+3],u=s[a+0],p=s[a+1],v=s[a+2],E=s[a+3];if(h!==E||l!==u||c!==p||d!==v){let g=l*u+c*p+d*v+h*E;g<0&&(u=-u,p=-p,v=-v,E=-E,g=-g);let f=1-o;if(g<.9995){const m=Math.acos(g),_=Math.sin(m);f=Math.sin(f*m)/_,o=Math.sin(o*m)/_,l=l*f+u*o,c=c*f+p*o,d=d*f+v*o,h=h*f+E*o}else{l=l*f+u*o,c=c*f+p*o,d=d*f+v*o,h=h*f+E*o;const m=1/Math.sqrt(l*l+c*c+d*d+h*h);l*=m,c*=m,d*=m,h*=m}}e[n]=l,e[n+1]=c,e[n+2]=d,e[n+3]=h}static multiplyQuaternionsFlat(e,n,i,r,s,a){const o=i[r],l=i[r+1],c=i[r+2],d=i[r+3],h=s[a],u=s[a+1],p=s[a+2],v=s[a+3];return e[n]=o*v+d*h+l*p-c*u,e[n+1]=l*v+d*u+c*h-o*p,e[n+2]=c*v+d*p+o*u-l*h,e[n+3]=d*v-o*h-l*u-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),d=o(r/2),h=o(s/2),u=l(i/2),p=l(r/2),v=l(s/2);switch(a){case"XYZ":this._x=u*d*h+c*p*v,this._y=c*p*h-u*d*v,this._z=c*d*v+u*p*h,this._w=c*d*h-u*p*v;break;case"YXZ":this._x=u*d*h+c*p*v,this._y=c*p*h-u*d*v,this._z=c*d*v-u*p*h,this._w=c*d*h+u*p*v;break;case"ZXY":this._x=u*d*h-c*p*v,this._y=c*p*h+u*d*v,this._z=c*d*v+u*p*h,this._w=c*d*h-u*p*v;break;case"ZYX":this._x=u*d*h-c*p*v,this._y=c*p*h+u*d*v,this._z=c*d*v-u*p*h,this._w=c*d*h+u*p*v;break;case"YZX":this._x=u*d*h+c*p*v,this._y=c*p*h+u*d*v,this._z=c*d*v-u*p*h,this._w=c*d*h-u*p*v;break;case"XZY":this._x=u*d*h-c*p*v,this._y=c*p*h-u*d*v,this._z=c*d*v+u*p*h,this._w=c*d*h+u*p*v;break;default:ke("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],a=n[1],o=n[5],l=n[9],c=n[2],d=n[6],h=n[10],u=i+o+h;if(u>0){const p=.5/Math.sqrt(u+1);this._w=.25/p,this._x=(d-l)*p,this._y=(s-c)*p,this._z=(a-r)*p}else if(i>o&&i>h){const p=2*Math.sqrt(1+i-o-h);this._w=(d-l)/p,this._x=.25*p,this._y=(r+a)/p,this._z=(s+c)/p}else if(o>h){const p=2*Math.sqrt(1+o-i-h);this._w=(s-c)/p,this._x=(r+a)/p,this._y=.25*p,this._z=(l+d)/p}else{const p=2*Math.sqrt(1+h-i-o);this._w=(a-r)/p,this._x=(s+c)/p,this._y=(l+d)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(et(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,a=e._w,o=n._x,l=n._y,c=n._z,d=n._w;return this._x=i*d+a*o+r*c-s*l,this._y=r*d+a*l+s*o-i*c,this._z=s*d+a*c+i*l-r*o,this._w=a*d-i*o-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){let i=e._x,r=e._y,s=e._z,a=e._w,o=this.dot(e);o<0&&(i=-i,r=-r,s=-s,a=-a,o=-o);let l=1-n;if(o<.9995){const c=Math.acos(o),d=Math.sin(c);l=Math.sin(l*c)/d,n=Math.sin(n*c)/d,this._x=this._x*l+i*n,this._y=this._y*l+r*n,this._z=this._z*l+s*n,this._w=this._w*l+a*n,this._onChangeCallback()}else this._x=this._x*l+i*n,this._y=this._y*l+r*n,this._z=this._z*l+s*n,this._w=this._w*l+a*n,this.normalize();return this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const fp=class fp{constructor(e=0,n=0,i=0){this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Im.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Im.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*r-o*i),d=2*(o*n-s*r),h=2*(s*i-a*n);return this.x=n+l*c+a*h-o*d,this.y=i+l*d+o*c-s*h,this.z=r+l*h+s*d-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=et(this.x,e.x,n.x),this.y=et(this.y,e.y,n.y),this.z=et(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=et(this.x,e,n),this.y=et(this.y,e,n),this.z=et(this.z,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(et(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,a=n.x,o=n.y,l=n.z;return this.x=r*l-s*o,this.y=s*a-i*l,this.z=i*o-r*a,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return yu.copy(this).projectOnVector(e),this.sub(yu)}reflect(e){return this.sub(yu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(et(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};fp.prototype.isVector3=!0;let H=fp;const yu=new H,Im=new _a,dp=class dp{constructor(e,n,i,r,s,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,l,c)}set(e,n,i,r,s,a,o,l,c){const d=this.elements;return d[0]=e,d[1]=r,d[2]=o,d[3]=n,d[4]=s,d[5]=l,d[6]=i,d[7]=a,d[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],d=i[4],h=i[7],u=i[2],p=i[5],v=i[8],E=r[0],g=r[3],f=r[6],m=r[1],_=r[4],M=r[7],R=r[2],T=r[5],C=r[8];return s[0]=a*E+o*m+l*R,s[3]=a*g+o*_+l*T,s[6]=a*f+o*M+l*C,s[1]=c*E+d*m+h*R,s[4]=c*g+d*_+h*T,s[7]=c*f+d*M+h*C,s[2]=u*E+p*m+v*R,s[5]=u*g+p*_+v*T,s[8]=u*f+p*M+v*C,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],d=e[8];return n*a*d-n*o*c-i*s*d+i*o*l+r*s*c-r*a*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],d=e[8],h=d*a-o*c,u=o*l-d*s,p=c*s-a*l,v=n*h+i*u+r*p;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const E=1/v;return e[0]=h*E,e[1]=(r*c-d*i)*E,e[2]=(o*i-r*a)*E,e[3]=u*E,e[4]=(d*n-r*l)*E,e[5]=(r*s-o*n)*E,e[6]=p*E,e[7]=(i*l-c*n)*E,e[8]=(a*n-i*s)*E,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+n,0,0,1),this}scale(e,n){return this.premultiply(Su.makeScale(e,n)),this}rotate(e){return this.premultiply(Su.makeRotation(-e)),this}translate(e,n){return this.premultiply(Su.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};dp.prototype.isMatrix3=!0;let We=dp;const Su=new We,Dm=new We().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Nm=new We().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function wM(){const t={enabled:!0,workingColorSpace:yc,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===pt&&(r.r=Hi(r.r),r.g=Hi(r.g),r.b=Hi(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===pt&&(r.r=na(r.r),r.g=na(r.g),r.b=na(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===fr?Sc:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return Hd("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),t.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return Hd("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),t.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return t.define({[yc]:{primaries:e,whitePoint:i,transfer:Sc,toXYZ:Dm,fromXYZ:Nm,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Kt},outputColorSpaceConfig:{drawingBufferColorSpace:Kt}},[Kt]:{primaries:e,whitePoint:i,transfer:pt,toXYZ:Dm,fromXYZ:Nm,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Kt}}}),t}const nt=wM();function Hi(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function na(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let _s;class AM{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{_s===void 0&&(_s=wo("canvas")),_s.width=e.width,_s.height=e.height;const r=_s.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=_s}return i.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=wo("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=Hi(s[a]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Hi(n[i]/255)*255):n[i]=Hi(n[i]);return{data:n,width:e.width,height:e.height}}else return ke("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let CM=0;class Kh{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:CM++}),this.uuid=Vi(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?e.set(n.displayWidth,n.displayHeight,0):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(Mu(r[a].image)):s.push(Mu(r[a]))}else s=Mu(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function Mu(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?AM.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(ke("Texture: Unable to serialize Texture."),{})}let RM=0;const Eu=new H;class qt extends cs{constructor(e=qt.DEFAULT_IMAGE,n=qt.DEFAULT_MAPPING,i=ki,r=ki,s=zt,a=$r,o=ri,l=Pn,c=qt.DEFAULT_ANISOTROPY,d=fr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:RM++}),this.uuid=Vi(),this.name="",this.source=new Kh(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Xe(0,0),this.repeat=new Xe(1,1),this.center=new Xe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new We,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Eu).x}get height(){return this.source.getSize(Eu).y}get depth(){return this.source.getSize(Eu).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const i=e[n];if(i===void 0){ke(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){ke(`Texture.setValues(): property '${n}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==rv)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ld:e.x=e.x-Math.floor(e.x);break;case ki:e.x=e.x<0?0:1;break;case cd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ld:e.y=e.y-Math.floor(e.y);break;case ki:e.y=e.y<0?0:1;break;case cd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}qt.DEFAULT_IMAGE=null;qt.DEFAULT_MAPPING=rv;qt.DEFAULT_ANISOTROPY=1;const hp=class hp{constructor(e=0,n=0,i=0,r=1){this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*n+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*n+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*n+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*n+a[7]*i+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],d=l[4],h=l[8],u=l[1],p=l[5],v=l[9],E=l[2],g=l[6],f=l[10];if(Math.abs(d-u)<.01&&Math.abs(h-E)<.01&&Math.abs(v-g)<.01){if(Math.abs(d+u)<.1&&Math.abs(h+E)<.1&&Math.abs(v+g)<.1&&Math.abs(c+p+f-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const _=(c+1)/2,M=(p+1)/2,R=(f+1)/2,T=(d+u)/4,C=(h+E)/4,x=(v+g)/4;return _>M&&_>R?_<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(_),r=T/i,s=C/i):M>R?M<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(M),i=T/r,s=x/r):R<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(R),i=C/s,r=x/s),this.set(i,r,s,n),this}let m=Math.sqrt((g-v)*(g-v)+(h-E)*(h-E)+(u-d)*(u-d));return Math.abs(m)<.001&&(m=1),this.x=(g-v)/m,this.y=(h-E)/m,this.z=(u-d)/m,this.w=Math.acos((c+p+f-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=et(this.x,e.x,n.x),this.y=et(this.y,e.y,n.y),this.z=et(this.z,e.z,n.z),this.w=et(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=et(this.x,e,n),this.y=et(this.y,e,n),this.z=et(this.z,e,n),this.w=et(this.w,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(et(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};hp.prototype.isVector4=!0;let Dt=hp;class bM extends cs{constructor(e=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:zt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=i.depth,this.scissor=new Dt(0,0,e,n),this.scissorTest=!1,this.viewport=new Dt(0,0,e,n),this.textures=[];const r={width:e,height:n,depth:i.depth},s=new qt(r),a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const n={minFilter:zt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const r=Object.assign({},e.textures[n].image);this.textures[n].source=new Kh(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Mi extends bM{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class hv extends qt{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Zt,this.minFilter=Zt,this.wrapR=ki,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class PM extends qt{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Zt,this.minFilter=Zt,this.wrapR=ki,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Tc=class Tc{constructor(e,n,i,r,s,a,o,l,c,d,h,u,p,v,E,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,l,c,d,h,u,p,v,E,g)}set(e,n,i,r,s,a,o,l,c,d,h,u,p,v,E,g){const f=this.elements;return f[0]=e,f[4]=n,f[8]=i,f[12]=r,f[1]=s,f[5]=a,f[9]=o,f[13]=l,f[2]=c,f[6]=d,f[10]=h,f[14]=u,f[3]=p,f[7]=v,f[11]=E,f[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Tc().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return this.determinant()===0?(e.set(1,0,0),n.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const n=this.elements,i=e.elements,r=1/vs.setFromMatrixColumn(e,0).length(),s=1/vs.setFromMatrixColumn(e,1).length(),a=1/vs.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*a,n[9]=i[9]*a,n[10]=i[10]*a,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(r),c=Math.sin(r),d=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const u=a*d,p=a*h,v=o*d,E=o*h;n[0]=l*d,n[4]=-l*h,n[8]=c,n[1]=p+v*c,n[5]=u-E*c,n[9]=-o*l,n[2]=E-u*c,n[6]=v+p*c,n[10]=a*l}else if(e.order==="YXZ"){const u=l*d,p=l*h,v=c*d,E=c*h;n[0]=u+E*o,n[4]=v*o-p,n[8]=a*c,n[1]=a*h,n[5]=a*d,n[9]=-o,n[2]=p*o-v,n[6]=E+u*o,n[10]=a*l}else if(e.order==="ZXY"){const u=l*d,p=l*h,v=c*d,E=c*h;n[0]=u-E*o,n[4]=-a*h,n[8]=v+p*o,n[1]=p+v*o,n[5]=a*d,n[9]=E-u*o,n[2]=-a*c,n[6]=o,n[10]=a*l}else if(e.order==="ZYX"){const u=a*d,p=a*h,v=o*d,E=o*h;n[0]=l*d,n[4]=v*c-p,n[8]=u*c+E,n[1]=l*h,n[5]=E*c+u,n[9]=p*c-v,n[2]=-c,n[6]=o*l,n[10]=a*l}else if(e.order==="YZX"){const u=a*l,p=a*c,v=o*l,E=o*c;n[0]=l*d,n[4]=E-u*h,n[8]=v*h+p,n[1]=h,n[5]=a*d,n[9]=-o*d,n[2]=-c*d,n[6]=p*h+v,n[10]=u-E*h}else if(e.order==="XZY"){const u=a*l,p=a*c,v=o*l,E=o*c;n[0]=l*d,n[4]=-h,n[8]=c*d,n[1]=u*h+E,n[5]=a*d,n[9]=p*h-v,n[2]=v*h-p,n[6]=o*d,n[10]=E*h+u}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(LM,e,IM)}lookAt(e,n,i){const r=this.elements;return An.subVectors(e,n),An.lengthSq()===0&&(An.z=1),An.normalize(),tr.crossVectors(i,An),tr.lengthSq()===0&&(Math.abs(i.z)===1?An.x+=1e-4:An.z+=1e-4,An.normalize(),tr.crossVectors(i,An)),tr.normalize(),tl.crossVectors(An,tr),r[0]=tr.x,r[4]=tl.x,r[8]=An.x,r[1]=tr.y,r[5]=tl.y,r[9]=An.y,r[2]=tr.z,r[6]=tl.z,r[10]=An.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],d=i[1],h=i[5],u=i[9],p=i[13],v=i[2],E=i[6],g=i[10],f=i[14],m=i[3],_=i[7],M=i[11],R=i[15],T=r[0],C=r[4],x=r[8],A=r[12],b=r[1],P=r[5],N=r[9],X=r[13],q=r[2],D=r[6],k=r[10],z=r[14],B=r[3],Y=r[7],Q=r[11],he=r[15];return s[0]=a*T+o*b+l*q+c*B,s[4]=a*C+o*P+l*D+c*Y,s[8]=a*x+o*N+l*k+c*Q,s[12]=a*A+o*X+l*z+c*he,s[1]=d*T+h*b+u*q+p*B,s[5]=d*C+h*P+u*D+p*Y,s[9]=d*x+h*N+u*k+p*Q,s[13]=d*A+h*X+u*z+p*he,s[2]=v*T+E*b+g*q+f*B,s[6]=v*C+E*P+g*D+f*Y,s[10]=v*x+E*N+g*k+f*Q,s[14]=v*A+E*X+g*z+f*he,s[3]=m*T+_*b+M*q+R*B,s[7]=m*C+_*P+M*D+R*Y,s[11]=m*x+_*N+M*k+R*Q,s[15]=m*A+_*X+M*z+R*he,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],d=e[2],h=e[6],u=e[10],p=e[14],v=e[3],E=e[7],g=e[11],f=e[15],m=l*p-c*u,_=o*p-c*h,M=o*u-l*h,R=a*p-c*d,T=a*u-l*d,C=a*h-o*d;return n*(E*m-g*_+f*M)-i*(v*m-g*R+f*T)+r*(v*_-E*R+f*C)-s*(v*M-E*T+g*C)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],d=e[8],h=e[9],u=e[10],p=e[11],v=e[12],E=e[13],g=e[14],f=e[15],m=n*o-i*a,_=n*l-r*a,M=n*c-s*a,R=i*l-r*o,T=i*c-s*o,C=r*c-s*l,x=d*E-h*v,A=d*g-u*v,b=d*f-p*v,P=h*g-u*E,N=h*f-p*E,X=u*f-p*g,q=m*X-_*N+M*P+R*b-T*A+C*x;if(q===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const D=1/q;return e[0]=(o*X-l*N+c*P)*D,e[1]=(r*N-i*X-s*P)*D,e[2]=(E*C-g*T+f*R)*D,e[3]=(u*T-h*C-p*R)*D,e[4]=(l*b-a*X-c*A)*D,e[5]=(n*X-r*b+s*A)*D,e[6]=(g*M-v*C-f*_)*D,e[7]=(d*C-u*M+p*_)*D,e[8]=(a*N-o*b+c*x)*D,e[9]=(i*b-n*N-s*x)*D,e[10]=(v*T-E*M+f*m)*D,e[11]=(h*M-d*T-p*m)*D,e[12]=(o*A-a*P-l*x)*D,e[13]=(n*P-i*A+r*x)*D,e[14]=(E*_-v*R-g*m)*D,e[15]=(d*R-h*_+u*m)*D,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,a=e.x,o=e.y,l=e.z,c=s*a,d=s*o;return this.set(c*a+i,c*o-r*l,c*l+r*o,0,c*o+r*l,d*o+i,d*l-r*a,0,c*l-r*o,d*l+r*a,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,a=n._y,o=n._z,l=n._w,c=s+s,d=a+a,h=o+o,u=s*c,p=s*d,v=s*h,E=a*d,g=a*h,f=o*h,m=l*c,_=l*d,M=l*h,R=i.x,T=i.y,C=i.z;return r[0]=(1-(E+f))*R,r[1]=(p+M)*R,r[2]=(v-_)*R,r[3]=0,r[4]=(p-M)*T,r[5]=(1-(u+f))*T,r[6]=(g+m)*T,r[7]=0,r[8]=(v+_)*C,r[9]=(g-m)*C,r[10]=(1-(u+E))*C,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];const s=this.determinant();if(s===0)return i.set(1,1,1),n.identity(),this;let a=vs.set(r[0],r[1],r[2]).length();const o=vs.set(r[4],r[5],r[6]).length(),l=vs.set(r[8],r[9],r[10]).length();s<0&&(a=-a),Kn.copy(this);const c=1/a,d=1/o,h=1/l;return Kn.elements[0]*=c,Kn.elements[1]*=c,Kn.elements[2]*=c,Kn.elements[4]*=d,Kn.elements[5]*=d,Kn.elements[6]*=d,Kn.elements[8]*=h,Kn.elements[9]*=h,Kn.elements[10]*=h,n.setFromRotationMatrix(Kn),i.x=a,i.y=o,i.z=l,this}makePerspective(e,n,i,r,s,a,o=vi,l=!1){const c=this.elements,d=2*s/(n-e),h=2*s/(i-r),u=(n+e)/(n-e),p=(i+r)/(i-r);let v,E;if(l)v=s/(a-s),E=a*s/(a-s);else if(o===vi)v=-(a+s)/(a-s),E=-2*a*s/(a-s);else if(o===To)v=-a/(a-s),E=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=d,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=v,c[14]=E,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,n,i,r,s,a,o=vi,l=!1){const c=this.elements,d=2/(n-e),h=2/(i-r),u=-(n+e)/(n-e),p=-(i+r)/(i-r);let v,E;if(l)v=1/(a-s),E=a/(a-s);else if(o===vi)v=-2/(a-s),E=-(a+s)/(a-s);else if(o===To)v=-1/(a-s),E=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=d,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=h,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=v,c[14]=E,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}};Tc.prototype.isMatrix4=!0;let bt=Tc;const vs=new H,Kn=new bt,LM=new H(0,0,0),IM=new H(1,1,1),tr=new H,tl=new H,An=new H,Um=new bt,Fm=new _a;class Cr{constructor(e=0,n=0,i=0,r=Cr.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],d=r[9],h=r[2],u=r[6],p=r[10];switch(n){case"XYZ":this._y=Math.asin(et(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-d,p),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-et(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(et(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-et(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(u,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(et(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-et(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-d,p),this._y=0);break;default:ke("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return Um.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Um,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Fm.setFromEuler(this),this.setFromQuaternion(Fm,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Cr.DEFAULT_ORDER="XYZ";class Zh{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let DM=0;const Om=new H,xs=new _a,Ri=new bt,nl=new H,Pa=new H,NM=new H,UM=new _a,km=new H(1,0,0),Bm=new H(0,1,0),zm=new H(0,0,1),Vm={type:"added"},FM={type:"removed"},ys={type:"childadded",child:null},Tu={type:"childremoved",child:null};class hn extends cs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:DM++}),this.uuid=Vi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=hn.DEFAULT_UP.clone();const e=new H,n=new Cr,i=new _a,r=new H(1,1,1);function s(){i.setFromEuler(n,!1)}function a(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new bt},normalMatrix:{value:new We}}),this.matrix=new bt,this.matrixWorld=new bt,this.matrixAutoUpdate=hn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=hn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Zh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return xs.setFromAxisAngle(e,n),this.quaternion.multiply(xs),this}rotateOnWorldAxis(e,n){return xs.setFromAxisAngle(e,n),this.quaternion.premultiply(xs),this}rotateX(e){return this.rotateOnAxis(km,e)}rotateY(e){return this.rotateOnAxis(Bm,e)}rotateZ(e){return this.rotateOnAxis(zm,e)}translateOnAxis(e,n){return Om.copy(e).applyQuaternion(this.quaternion),this.position.add(Om.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(km,e)}translateY(e){return this.translateOnAxis(Bm,e)}translateZ(e){return this.translateOnAxis(zm,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ri.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?nl.copy(e):nl.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Pa.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ri.lookAt(Pa,nl,this.up):Ri.lookAt(nl,Pa,this.up),this.quaternion.setFromRotationMatrix(Ri),r&&(Ri.extractRotation(r.matrixWorld),xs.setFromRotationMatrix(Ri),this.quaternion.premultiply(xs.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(tt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Vm),ys.child=e,this.dispatchEvent(ys),ys.child=null):tt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(FM),Tu.child=e,this.dispatchEvent(Tu),Tu.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ri.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ri.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ri),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Vm),ys.child=e,this.dispatchEvent(ys),ys.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,n);if(a!==void 0)return a}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Pa,e,NM),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Pa,UM,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const n=e.x,i=e.y,r=e.z,s=this.matrix.elements;s[12]+=n-s[0]*n-s[4]*i-s[8]*r,s[13]+=i-s[1]*n-s[5]*i-s[9]*r,s[14]+=r-s[2]*n-s[6]*i-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),this.static!==!1&&(r.static=this.static),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,d=l.length;c<d;c++){const h=l[c];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(n){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),d=a(e.images),h=a(e.shapes),u=a(e.skeletons),p=a(e.animations),v=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),d.length>0&&(i.images=d),h.length>0&&(i.shapes=h),u.length>0&&(i.skeletons=u),p.length>0&&(i.animations=p),v.length>0&&(i.nodes=v)}return i.object=r,i;function a(o){const l=[];for(const c in o){const d=o[c];delete d.metadata,l.push(d)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}hn.DEFAULT_UP=new H(0,1,0);hn.DEFAULT_MATRIX_AUTO_UPDATE=!0;hn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class zn extends hn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const OM={type:"move"};class wu{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new zn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new zn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new H,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new H),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new zn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new H,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new H,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const E of e.hand.values()){const g=n.getJointPose(E,i),f=this._getHandJoint(c,E);g!==null&&(f.matrix.fromArray(g.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=g.radius),f.visible=g!==null}const d=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],u=d.position.distanceTo(h.position),p=.02,v=.005;c.inputState.pinching&&u>p+v?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&u<=p-v&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(OM)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new zn;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const pv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},nr={h:0,s:0,l:0},il={h:0,s:0,l:0};function Au(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class ft{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Kt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,nt.colorSpaceToWorking(this,n),this}setRGB(e,n,i,r=nt.workingColorSpace){return this.r=e,this.g=n,this.b=i,nt.colorSpaceToWorking(this,r),this}setHSL(e,n,i,r=nt.workingColorSpace){if(e=$h(e,1),n=et(n,0,1),i=et(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,a=2*i-s;this.r=Au(a,s,e+1/3),this.g=Au(a,s,e),this.b=Au(a,s,e-1/3)}return nt.colorSpaceToWorking(this,r),this}setStyle(e,n=Kt){function i(s){s!==void 0&&parseFloat(s)<1&&ke("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:ke("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(a===6)return this.setHex(parseInt(s,16),n);ke("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Kt){const i=pv[e.toLowerCase()];return i!==void 0?this.setHex(i,n):ke("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Hi(e.r),this.g=Hi(e.g),this.b=Hi(e.b),this}copyLinearToSRGB(e){return this.r=na(e.r),this.g=na(e.g),this.b=na(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Kt){return nt.workingToColorSpace(an.copy(this),e),Math.round(et(an.r*255,0,255))*65536+Math.round(et(an.g*255,0,255))*256+Math.round(et(an.b*255,0,255))}getHexString(e=Kt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=nt.workingColorSpace){nt.workingToColorSpace(an.copy(this),n);const i=an.r,r=an.g,s=an.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let l,c;const d=(o+a)/2;if(o===a)l=0,c=0;else{const h=a-o;switch(c=d<=.5?h/(a+o):h/(2-a-o),a){case i:l=(r-s)/h+(r<s?6:0);break;case r:l=(s-i)/h+2;break;case s:l=(i-r)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=d,e}getRGB(e,n=nt.workingColorSpace){return nt.workingToColorSpace(an.copy(this),n),e.r=an.r,e.g=an.g,e.b=an.b,e}getStyle(e=Kt){nt.workingToColorSpace(an.copy(this),e);const n=an.r,i=an.g,r=an.b;return e!==Kt?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(nr),this.setHSL(nr.h+e,nr.s+n,nr.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(nr),e.getHSL(il);const i=no(nr.h,il.h,n),r=no(nr.s,il.s,n),s=no(nr.l,il.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const an=new ft;ft.NAMES=pv;class mv extends hn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Cr,this.environmentIntensity=1,this.environmentRotation=new Cr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}const Zn=new H,bi=new H,Cu=new H,Pi=new H,Ss=new H,Ms=new H,Hm=new H,Ru=new H,bu=new H,Pu=new H,Lu=new Dt,Iu=new Dt,Du=new Dt;class Gn{constructor(e=new H,n=new H,i=new H){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),Zn.subVectors(e,n),r.cross(Zn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){Zn.subVectors(r,n),bi.subVectors(i,n),Cu.subVectors(e,n);const a=Zn.dot(Zn),o=Zn.dot(bi),l=Zn.dot(Cu),c=bi.dot(bi),d=bi.dot(Cu),h=a*c-o*o;if(h===0)return s.set(0,0,0),null;const u=1/h,p=(c*l-o*d)*u,v=(a*d-o*l)*u;return s.set(1-p-v,v,p)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,Pi)===null?!1:Pi.x>=0&&Pi.y>=0&&Pi.x+Pi.y<=1}static getInterpolation(e,n,i,r,s,a,o,l){return this.getBarycoord(e,n,i,r,Pi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Pi.x),l.addScaledVector(a,Pi.y),l.addScaledVector(o,Pi.z),l)}static getInterpolatedAttribute(e,n,i,r,s,a){return Lu.setScalar(0),Iu.setScalar(0),Du.setScalar(0),Lu.fromBufferAttribute(e,n),Iu.fromBufferAttribute(e,i),Du.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(Lu,s.x),a.addScaledVector(Iu,s.y),a.addScaledVector(Du,s.z),a}static isFrontFacing(e,n,i,r){return Zn.subVectors(i,n),bi.subVectors(e,n),Zn.cross(bi).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Zn.subVectors(this.c,this.b),bi.subVectors(this.a,this.b),Zn.cross(bi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Gn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Gn.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return Gn.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return Gn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Gn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let a,o;Ss.subVectors(r,i),Ms.subVectors(s,i),Ru.subVectors(e,i);const l=Ss.dot(Ru),c=Ms.dot(Ru);if(l<=0&&c<=0)return n.copy(i);bu.subVectors(e,r);const d=Ss.dot(bu),h=Ms.dot(bu);if(d>=0&&h<=d)return n.copy(r);const u=l*h-d*c;if(u<=0&&l>=0&&d<=0)return a=l/(l-d),n.copy(i).addScaledVector(Ss,a);Pu.subVectors(e,s);const p=Ss.dot(Pu),v=Ms.dot(Pu);if(v>=0&&p<=v)return n.copy(s);const E=p*c-l*v;if(E<=0&&c>=0&&v<=0)return o=c/(c-v),n.copy(i).addScaledVector(Ms,o);const g=d*v-p*h;if(g<=0&&h-d>=0&&p-v>=0)return Hm.subVectors(s,r),o=(h-d)/(h-d+(p-v)),n.copy(r).addScaledVector(Hm,o);const f=1/(g+E+u);return a=E*f,o=u*f,n.copy(i).addScaledVector(Ss,a).addScaledVector(Ms,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Do{constructor(e=new H(1/0,1/0,1/0),n=new H(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Qn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Qn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Qn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Qn):Qn.fromBufferAttribute(s,a),Qn.applyMatrix4(e.matrixWorld),this.expandByPoint(Qn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),rl.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),rl.copy(i.boundingBox)),rl.applyMatrix4(e.matrixWorld),this.union(rl)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Qn),Qn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(La),sl.subVectors(this.max,La),Es.subVectors(e.a,La),Ts.subVectors(e.b,La),ws.subVectors(e.c,La),ir.subVectors(Ts,Es),rr.subVectors(ws,Ts),Fr.subVectors(Es,ws);let n=[0,-ir.z,ir.y,0,-rr.z,rr.y,0,-Fr.z,Fr.y,ir.z,0,-ir.x,rr.z,0,-rr.x,Fr.z,0,-Fr.x,-ir.y,ir.x,0,-rr.y,rr.x,0,-Fr.y,Fr.x,0];return!Nu(n,Es,Ts,ws,sl)||(n=[1,0,0,0,1,0,0,0,1],!Nu(n,Es,Ts,ws,sl))?!1:(al.crossVectors(ir,rr),n=[al.x,al.y,al.z],Nu(n,Es,Ts,ws,sl))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Qn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Qn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Li[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Li[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Li[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Li[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Li[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Li[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Li[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Li[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Li),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Li=[new H,new H,new H,new H,new H,new H,new H,new H],Qn=new H,rl=new Do,Es=new H,Ts=new H,ws=new H,ir=new H,rr=new H,Fr=new H,La=new H,sl=new H,al=new H,Or=new H;function Nu(t,e,n,i,r){for(let s=0,a=t.length-3;s<=a;s+=3){Or.fromArray(t,s);const o=r.x*Math.abs(Or.x)+r.y*Math.abs(Or.y)+r.z*Math.abs(Or.z),l=e.dot(Or),c=n.dot(Or),d=i.dot(Or);if(Math.max(-Math.max(l,c,d),Math.min(l,c,d))>o)return!1}return!0}const kt=new H,ol=new Xe;let kM=0;class oi extends cs{constructor(e,n,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:kM++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=Vd,this.updateRanges=[],this.gpuType=_i,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)ol.fromBufferAttribute(this,n),ol.applyMatrix3(e),this.setXY(n,ol.x,ol.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)kt.fromBufferAttribute(this,n),kt.applyMatrix3(e),this.setXYZ(n,kt.x,kt.y,kt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)kt.fromBufferAttribute(this,n),kt.applyMatrix4(e),this.setXYZ(n,kt.x,kt.y,kt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)kt.fromBufferAttribute(this,n),kt.applyNormalMatrix(e),this.setXYZ(n,kt.x,kt.y,kt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)kt.fromBufferAttribute(this,n),kt.transformDirection(e),this.setXYZ(n,kt.x,kt.y,kt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=ii(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=mt(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=ii(n,this.array)),n}setX(e,n){return this.normalized&&(n=mt(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=ii(n,this.array)),n}setY(e,n){return this.normalized&&(n=mt(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=ii(n,this.array)),n}setZ(e,n){return this.normalized&&(n=mt(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=ii(n,this.array)),n}setW(e,n){return this.normalized&&(n=mt(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=mt(n,this.array),i=mt(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=mt(n,this.array),i=mt(i,this.array),r=mt(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=mt(n,this.array),i=mt(i,this.array),r=mt(r,this.array),s=mt(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Vd&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class gv extends oi{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class _v extends oi{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class pn extends oi{constructor(e,n,i){super(new Float32Array(e),n,i)}}const BM=new Do,Ia=new H,Uu=new H;class Qh{constructor(e=new H,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):BM.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ia.subVectors(e,this.center);const n=Ia.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(Ia,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Uu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ia.copy(e.center).add(Uu)),this.expandByPoint(Ia.copy(e.center).sub(Uu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let zM=0;const Bn=new bt,Fu=new hn,As=new H,Cn=new Do,Da=new Do,Xt=new H;class qn extends cs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:zM++}),this.uuid=Vi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(sM(e)?_v:gv)(e,1):this.index=e,this}setIndirect(e,n=0){return this.indirect=e,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new We().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Bn.makeRotationFromQuaternion(e),this.applyMatrix4(Bn),this}rotateX(e){return Bn.makeRotationX(e),this.applyMatrix4(Bn),this}rotateY(e){return Bn.makeRotationY(e),this.applyMatrix4(Bn),this}rotateZ(e){return Bn.makeRotationZ(e),this.applyMatrix4(Bn),this}translate(e,n,i){return Bn.makeTranslation(e,n,i),this.applyMatrix4(Bn),this}scale(e,n,i){return Bn.makeScale(e,n,i),this.applyMatrix4(Bn),this}lookAt(e){return Fu.lookAt(e),Fu.updateMatrix(),this.applyMatrix4(Fu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(As).negate(),this.translate(As.x,As.y,As.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const a=e[r];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new pn(i,3))}else{const i=Math.min(e.length,n.count);for(let r=0;r<i;r++){const s=e[r];n.setXYZ(r,s.x,s.y,s.z||0)}e.length>n.count&&ke("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Do);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){tt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new H(-1/0,-1/0,-1/0),new H(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];Cn.setFromBufferAttribute(s),this.morphTargetsRelative?(Xt.addVectors(this.boundingBox.min,Cn.min),this.boundingBox.expandByPoint(Xt),Xt.addVectors(this.boundingBox.max,Cn.max),this.boundingBox.expandByPoint(Xt)):(this.boundingBox.expandByPoint(Cn.min),this.boundingBox.expandByPoint(Cn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&tt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Qh);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){tt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new H,1/0);return}if(e){const i=this.boundingSphere.center;if(Cn.setFromBufferAttribute(e),n)for(let s=0,a=n.length;s<a;s++){const o=n[s];Da.setFromBufferAttribute(o),this.morphTargetsRelative?(Xt.addVectors(Cn.min,Da.min),Cn.expandByPoint(Xt),Xt.addVectors(Cn.max,Da.max),Cn.expandByPoint(Xt)):(Cn.expandByPoint(Da.min),Cn.expandByPoint(Da.max))}Cn.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)Xt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Xt));if(n)for(let s=0,a=n.length;s<a;s++){const o=n[s],l=this.morphTargetsRelative;for(let c=0,d=o.count;c<d;c++)Xt.fromBufferAttribute(o,c),l&&(As.fromBufferAttribute(e,c),Xt.add(As)),r=Math.max(r,i.distanceToSquared(Xt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&tt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){tt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new oi(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let x=0;x<i.count;x++)o[x]=new H,l[x]=new H;const c=new H,d=new H,h=new H,u=new Xe,p=new Xe,v=new Xe,E=new H,g=new H;function f(x,A,b){c.fromBufferAttribute(i,x),d.fromBufferAttribute(i,A),h.fromBufferAttribute(i,b),u.fromBufferAttribute(s,x),p.fromBufferAttribute(s,A),v.fromBufferAttribute(s,b),d.sub(c),h.sub(c),p.sub(u),v.sub(u);const P=1/(p.x*v.y-v.x*p.y);isFinite(P)&&(E.copy(d).multiplyScalar(v.y).addScaledVector(h,-p.y).multiplyScalar(P),g.copy(h).multiplyScalar(p.x).addScaledVector(d,-v.x).multiplyScalar(P),o[x].add(E),o[A].add(E),o[b].add(E),l[x].add(g),l[A].add(g),l[b].add(g))}let m=this.groups;m.length===0&&(m=[{start:0,count:e.count}]);for(let x=0,A=m.length;x<A;++x){const b=m[x],P=b.start,N=b.count;for(let X=P,q=P+N;X<q;X+=3)f(e.getX(X+0),e.getX(X+1),e.getX(X+2))}const _=new H,M=new H,R=new H,T=new H;function C(x){R.fromBufferAttribute(r,x),T.copy(R);const A=o[x];_.copy(A),_.sub(R.multiplyScalar(R.dot(A))).normalize(),M.crossVectors(T,A);const P=M.dot(l[x])<0?-1:1;a.setXYZW(x,_.x,_.y,_.z,P)}for(let x=0,A=m.length;x<A;++x){const b=m[x],P=b.start,N=b.count;for(let X=P,q=P+N;X<q;X+=3)C(e.getX(X+0)),C(e.getX(X+1)),C(e.getX(X+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new oi(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let u=0,p=i.count;u<p;u++)i.setXYZ(u,0,0,0);const r=new H,s=new H,a=new H,o=new H,l=new H,c=new H,d=new H,h=new H;if(e)for(let u=0,p=e.count;u<p;u+=3){const v=e.getX(u+0),E=e.getX(u+1),g=e.getX(u+2);r.fromBufferAttribute(n,v),s.fromBufferAttribute(n,E),a.fromBufferAttribute(n,g),d.subVectors(a,s),h.subVectors(r,s),d.cross(h),o.fromBufferAttribute(i,v),l.fromBufferAttribute(i,E),c.fromBufferAttribute(i,g),o.add(d),l.add(d),c.add(d),i.setXYZ(v,o.x,o.y,o.z),i.setXYZ(E,l.x,l.y,l.z),i.setXYZ(g,c.x,c.y,c.z)}else for(let u=0,p=n.count;u<p;u+=3)r.fromBufferAttribute(n,u+0),s.fromBufferAttribute(n,u+1),a.fromBufferAttribute(n,u+2),d.subVectors(a,s),h.subVectors(r,s),d.cross(h),i.setXYZ(u+0,d.x,d.y,d.z),i.setXYZ(u+1,d.x,d.y,d.z),i.setXYZ(u+2,d.x,d.y,d.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Xt.fromBufferAttribute(e,n),Xt.normalize(),e.setXYZ(n,Xt.x,Xt.y,Xt.z)}toNonIndexed(){function e(o,l){const c=o.array,d=o.itemSize,h=o.normalized,u=new c.constructor(l.length*d);let p=0,v=0;for(let E=0,g=l.length;E<g;E++){o.isInterleavedBufferAttribute?p=l[E]*o.data.stride+o.offset:p=l[E]*d;for(let f=0;f<d;f++)u[v++]=c[p++]}return new oi(u,d,h)}if(this.index===null)return ke("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new qn,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,i);n.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let d=0,h=c.length;d<h;d++){const u=c[d],p=e(u,i);l.push(p)}n.morphAttributes[o]=l}n.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],d=[];for(let h=0,u=c.length;h<u;h++){const p=c[h];d.push(p.toJSON(e.data))}d.length>0&&(r[l]=d,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const c in r){const d=r[c];this.setAttribute(c,d.clone(n))}const s=e.morphAttributes;for(const c in s){const d=[],h=s[c];for(let u=0,p=h.length;u<p;u++)d.push(h[u].clone(n));this.morphAttributes[c]=d}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,d=a.length;c<d;c++){const h=a[c];this.addGroup(h.start,h.count,h.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}class VM{constructor(e,n){this.isInterleavedBuffer=!0,this.array=e,this.stride=n,this.count=e!==void 0?e.length/n:0,this.usage=Vd,this.updateRanges=[],this.version=0,this.uuid=Vi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,n,i){e*=this.stride,i*=n.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=n.array[i+r];return this}set(e,n=0){return this.array.set(e,n),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Vi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const n=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(n,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Vi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const cn=new H;class Ec{constructor(e,n,i,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=n,this.offset=i,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let n=0,i=this.data.count;n<i;n++)cn.fromBufferAttribute(this,n),cn.applyMatrix4(e),this.setXYZ(n,cn.x,cn.y,cn.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)cn.fromBufferAttribute(this,n),cn.applyNormalMatrix(e),this.setXYZ(n,cn.x,cn.y,cn.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)cn.fromBufferAttribute(this,n),cn.transformDirection(e),this.setXYZ(n,cn.x,cn.y,cn.z);return this}getComponent(e,n){let i=this.array[e*this.data.stride+this.offset+n];return this.normalized&&(i=ii(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=mt(i,this.array)),this.data.array[e*this.data.stride+this.offset+n]=i,this}setX(e,n){return this.normalized&&(n=mt(n,this.array)),this.data.array[e*this.data.stride+this.offset]=n,this}setY(e,n){return this.normalized&&(n=mt(n,this.array)),this.data.array[e*this.data.stride+this.offset+1]=n,this}setZ(e,n){return this.normalized&&(n=mt(n,this.array)),this.data.array[e*this.data.stride+this.offset+2]=n,this}setW(e,n){return this.normalized&&(n=mt(n,this.array)),this.data.array[e*this.data.stride+this.offset+3]=n,this}getX(e){let n=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(n=ii(n,this.array)),n}getY(e){let n=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(n=ii(n,this.array)),n}getZ(e){let n=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(n=ii(n,this.array)),n}getW(e){let n=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(n=ii(n,this.array)),n}setXY(e,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(n=mt(n,this.array),i=mt(i,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=i,this}setXYZ(e,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(n=mt(n,this.array),i=mt(i,this.array),r=mt(r,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=i,this.data.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(n=mt(n,this.array),i=mt(i,this.array),r=mt(r,this.array),s=mt(s,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=i,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){Mc("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const n=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)n.push(this.data.array[r+s])}return new oi(new this.array.constructor(n),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Ec(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Mc("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const n=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)n.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:n,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}let HM=0;class va extends cs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:HM++}),this.uuid=Vi(),this.name="",this.type="Material",this.blending=ta,this.side=Ar,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Jf,this.blendDst=ed,this.blendEquation=Gr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ft(0,0,0),this.blendAlpha=0,this.depthFunc=ua,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Rm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=gs,this.stencilZFail=gs,this.stencilZPass=gs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){ke(`Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){ke(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==ta&&(i.blending=this.blending),this.side!==Ar&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Jf&&(i.blendSrc=this.blendSrc),this.blendDst!==ed&&(i.blendDst=this.blendDst),this.blendEquation!==Gr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==ua&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Rm&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==gs&&(i.stencilFail=this.stencilFail),this.stencilZFail!==gs&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==gs&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(n){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class vv extends va{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new ft(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let Cs;const Na=new H,Rs=new H,bs=new H,Ps=new Xe,Ua=new Xe,xv=new bt,ll=new H,Fa=new H,cl=new H,Gm=new Xe,Ou=new Xe,Wm=new Xe;class GM extends hn{constructor(e=new vv){if(super(),this.isSprite=!0,this.type="Sprite",Cs===void 0){Cs=new qn;const n=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new VM(n,5);Cs.setIndex([0,1,2,0,2,3]),Cs.setAttribute("position",new Ec(i,3,0,!1)),Cs.setAttribute("uv",new Ec(i,2,3,!1))}this.geometry=Cs,this.material=e,this.center=new Xe(.5,.5),this.count=1}raycast(e,n){e.camera===null&&tt('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Rs.setFromMatrixScale(this.matrixWorld),xv.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),bs.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Rs.multiplyScalar(-bs.z);const i=this.material.rotation;let r,s;i!==0&&(s=Math.cos(i),r=Math.sin(i));const a=this.center;ul(ll.set(-.5,-.5,0),bs,a,Rs,r,s),ul(Fa.set(.5,-.5,0),bs,a,Rs,r,s),ul(cl.set(.5,.5,0),bs,a,Rs,r,s),Gm.set(0,0),Ou.set(1,0),Wm.set(1,1);let o=e.ray.intersectTriangle(ll,Fa,cl,!1,Na);if(o===null&&(ul(Fa.set(-.5,.5,0),bs,a,Rs,r,s),Ou.set(0,1),o=e.ray.intersectTriangle(ll,cl,Fa,!1,Na),o===null))return;const l=e.ray.origin.distanceTo(Na);l<e.near||l>e.far||n.push({distance:l,point:Na.clone(),uv:Gn.getInterpolation(Na,ll,Fa,cl,Gm,Ou,Wm,new Xe),face:null,object:this})}copy(e,n){return super.copy(e,n),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function ul(t,e,n,i,r,s){Ps.subVectors(t,n).addScalar(.5).multiply(i),r!==void 0?(Ua.x=s*Ps.x-r*Ps.y,Ua.y=r*Ps.x+s*Ps.y):Ua.copy(Ps),t.copy(e),t.x+=Ua.x,t.y+=Ua.y,t.applyMatrix4(xv)}const Ii=new H,ku=new H,fl=new H,sr=new H,Bu=new H,dl=new H,zu=new H;class yv{constructor(e=new H,n=new H(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ii)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Ii.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Ii.copy(this.origin).addScaledVector(this.direction,n),Ii.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){ku.copy(e).add(n).multiplyScalar(.5),fl.copy(n).sub(e).normalize(),sr.copy(this.origin).sub(ku);const s=e.distanceTo(n)*.5,a=-this.direction.dot(fl),o=sr.dot(this.direction),l=-sr.dot(fl),c=sr.lengthSq(),d=Math.abs(1-a*a);let h,u,p,v;if(d>0)if(h=a*l-o,u=a*o-l,v=s*d,h>=0)if(u>=-v)if(u<=v){const E=1/d;h*=E,u*=E,p=h*(h+a*u+2*o)+u*(a*h+u+2*l)+c}else u=s,h=Math.max(0,-(a*u+o)),p=-h*h+u*(u+2*l)+c;else u=-s,h=Math.max(0,-(a*u+o)),p=-h*h+u*(u+2*l)+c;else u<=-v?(h=Math.max(0,-(-a*s+o)),u=h>0?-s:Math.min(Math.max(-s,-l),s),p=-h*h+u*(u+2*l)+c):u<=v?(h=0,u=Math.min(Math.max(-s,-l),s),p=u*(u+2*l)+c):(h=Math.max(0,-(a*s+o)),u=h>0?s:Math.min(Math.max(-s,-l),s),p=-h*h+u*(u+2*l)+c);else u=a>0?-s:s,h=Math.max(0,-(a*u+o)),p=-h*h+u*(u+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(ku).addScaledVector(fl,u),p}intersectSphere(e,n){Ii.subVectors(e.center,this.origin);const i=Ii.dot(this.direction),r=Ii.dot(Ii)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,n):this.at(o,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,a,o,l;const c=1/this.direction.x,d=1/this.direction.y,h=1/this.direction.z,u=this.origin;return c>=0?(i=(e.min.x-u.x)*c,r=(e.max.x-u.x)*c):(i=(e.max.x-u.x)*c,r=(e.min.x-u.x)*c),d>=0?(s=(e.min.y-u.y)*d,a=(e.max.y-u.y)*d):(s=(e.max.y-u.y)*d,a=(e.min.y-u.y)*d),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),h>=0?(o=(e.min.z-u.z)*h,l=(e.max.z-u.z)*h):(o=(e.max.z-u.z)*h,l=(e.min.z-u.z)*h),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,Ii)!==null}intersectTriangle(e,n,i,r,s){Bu.subVectors(n,e),dl.subVectors(i,e),zu.crossVectors(Bu,dl);let a=this.direction.dot(zu),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;sr.subVectors(this.origin,e);const l=o*this.direction.dot(dl.crossVectors(sr,dl));if(l<0)return null;const c=o*this.direction.dot(Bu.cross(sr));if(c<0||l+c>a)return null;const d=-o*sr.dot(zu);return d<0?null:this.at(d/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Co extends va{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ft(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Cr,this.combine=K_,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Xm=new bt,kr=new yv,hl=new Qh,jm=new H,pl=new H,ml=new H,gl=new H,Vu=new H,_l=new H,Ym=new H,vl=new H;class Dn extends hn{constructor(e=new qn,n=new Co){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){_l.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const d=o[l],h=s[l];d!==0&&(Vu.fromBufferAttribute(h,e),a?_l.addScaledVector(Vu,d):_l.addScaledVector(Vu.sub(n),d))}n.add(_l)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),hl.copy(i.boundingSphere),hl.applyMatrix4(s),kr.copy(e.ray).recast(e.near),!(hl.containsPoint(kr.origin)===!1&&(kr.intersectSphere(hl,jm)===null||kr.origin.distanceToSquared(jm)>(e.far-e.near)**2))&&(Xm.copy(s).invert(),kr.copy(e.ray).applyMatrix4(Xm),!(i.boundingBox!==null&&kr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,kr)))}_computeIntersections(e,n,i){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,d=s.attributes.uv1,h=s.attributes.normal,u=s.groups,p=s.drawRange;if(o!==null)if(Array.isArray(a))for(let v=0,E=u.length;v<E;v++){const g=u[v],f=a[g.materialIndex],m=Math.max(g.start,p.start),_=Math.min(o.count,Math.min(g.start+g.count,p.start+p.count));for(let M=m,R=_;M<R;M+=3){const T=o.getX(M),C=o.getX(M+1),x=o.getX(M+2);r=xl(this,f,e,i,c,d,h,T,C,x),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=g.materialIndex,n.push(r))}}else{const v=Math.max(0,p.start),E=Math.min(o.count,p.start+p.count);for(let g=v,f=E;g<f;g+=3){const m=o.getX(g),_=o.getX(g+1),M=o.getX(g+2);r=xl(this,a,e,i,c,d,h,m,_,M),r&&(r.faceIndex=Math.floor(g/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let v=0,E=u.length;v<E;v++){const g=u[v],f=a[g.materialIndex],m=Math.max(g.start,p.start),_=Math.min(l.count,Math.min(g.start+g.count,p.start+p.count));for(let M=m,R=_;M<R;M+=3){const T=M,C=M+1,x=M+2;r=xl(this,f,e,i,c,d,h,T,C,x),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=g.materialIndex,n.push(r))}}else{const v=Math.max(0,p.start),E=Math.min(l.count,p.start+p.count);for(let g=v,f=E;g<f;g+=3){const m=g,_=g+1,M=g+2;r=xl(this,a,e,i,c,d,h,m,_,M),r&&(r.faceIndex=Math.floor(g/3),n.push(r))}}}}function WM(t,e,n,i,r,s,a,o){let l;if(e.side===En?l=i.intersectTriangle(a,s,r,!0,o):l=i.intersectTriangle(r,s,a,e.side===Ar,o),l===null)return null;vl.copy(o),vl.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(vl);return c<n.near||c>n.far?null:{distance:c,point:vl.clone(),object:t}}function xl(t,e,n,i,r,s,a,o,l,c){t.getVertexPosition(o,pl),t.getVertexPosition(l,ml),t.getVertexPosition(c,gl);const d=WM(t,e,n,i,pl,ml,gl,Ym);if(d){const h=new H;Gn.getBarycoord(Ym,pl,ml,gl,h),r&&(d.uv=Gn.getInterpolatedAttribute(r,o,l,c,h,new Xe)),s&&(d.uv1=Gn.getInterpolatedAttribute(s,o,l,c,h,new Xe)),a&&(d.normal=Gn.getInterpolatedAttribute(a,o,l,c,h,new H),d.normal.dot(i.direction)>0&&d.normal.multiplyScalar(-1));const u={a:o,b:l,c,normal:new H,materialIndex:0};Gn.getNormal(pl,ml,gl,u.normal),d.face=u,d.barycoord=h}return d}class XM extends qt{constructor(e=null,n=1,i=1,r,s,a,o,l,c=Zt,d=Zt,h,u){super(null,a,o,l,c,d,r,s,h,u),this.isDataTexture=!0,this.image={data:e,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Hu=new H,jM=new H,YM=new We;class Hr{constructor(e=new H(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=Hu.subVectors(i,n).cross(jM.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n,i=!0){const r=e.delta(Hu),s=this.normal.dot(r);if(s===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/s;return i===!0&&(a<0||a>1)?null:n.copy(e.start).addScaledVector(r,a)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||YM.getNormalMatrix(e),r=this.coplanarPoint(Hu).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Br=new Qh,qM=new Xe(.5,.5),yl=new H;class Jh{constructor(e=new Hr,n=new Hr,i=new Hr,r=new Hr,s=new Hr,a=new Hr){this.planes=[e,n,i,r,s,a]}set(e,n,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(n),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=vi,i=!1){const r=this.planes,s=e.elements,a=s[0],o=s[1],l=s[2],c=s[3],d=s[4],h=s[5],u=s[6],p=s[7],v=s[8],E=s[9],g=s[10],f=s[11],m=s[12],_=s[13],M=s[14],R=s[15];if(r[0].setComponents(c-a,p-d,f-v,R-m).normalize(),r[1].setComponents(c+a,p+d,f+v,R+m).normalize(),r[2].setComponents(c+o,p+h,f+E,R+_).normalize(),r[3].setComponents(c-o,p-h,f-E,R-_).normalize(),i)r[4].setComponents(l,u,g,M).normalize(),r[5].setComponents(c-l,p-u,f-g,R-M).normalize();else if(r[4].setComponents(c-l,p-u,f-g,R-M).normalize(),n===vi)r[5].setComponents(c+l,p+u,f+g,R+M).normalize();else if(n===To)r[5].setComponents(l,u,g,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Br.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Br.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Br)}intersectsSprite(e){Br.center.set(0,0,0);const n=qM.distanceTo(e.center);return Br.radius=.7071067811865476+n,Br.applyMatrix4(e.matrixWorld),this.intersectsSphere(Br)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(yl.x=r.normal.x>0?e.max.x:e.min.x,yl.y=r.normal.y>0?e.max.y:e.min.y,yl.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(yl)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Sv extends qt{constructor(e=[],n=rs,i,r,s,a,o,l,c,d){super(e,n,i,r,s,a,o,l,c,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class $M extends qt{constructor(e,n,i,r,s,a,o,l,c){super(e,n,i,r,s,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class da extends qt{constructor(e,n,i=Ei,r,s,a,o=Zt,l=Zt,c,d=qi,h=1){if(d!==qi&&d!==Kr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const u={width:e,height:n,depth:h};super(u,r,s,a,o,l,d,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Kh(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class KM extends da{constructor(e,n=Ei,i=rs,r,s,a=Zt,o=Zt,l,c=qi){const d={width:e,height:e,depth:1},h=[d,d,d,d,d,d];super(e,e,n,i,r,s,a,o,l,c),this.image=h,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Mv extends qt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class No extends qn{constructor(e=1,n=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],d=[],h=[];let u=0,p=0;v("z","y","x",-1,-1,i,n,e,a,s,0),v("z","y","x",1,-1,i,n,-e,a,s,1),v("x","z","y",1,1,e,i,n,r,a,2),v("x","z","y",1,-1,e,i,-n,r,a,3),v("x","y","z",1,-1,e,n,i,r,s,4),v("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new pn(c,3)),this.setAttribute("normal",new pn(d,3)),this.setAttribute("uv",new pn(h,2));function v(E,g,f,m,_,M,R,T,C,x,A){const b=M/C,P=R/x,N=M/2,X=R/2,q=T/2,D=C+1,k=x+1;let z=0,B=0;const Y=new H;for(let Q=0;Q<k;Q++){const he=Q*P-X;for(let me=0;me<D;me++){const Ve=me*b-N;Y[E]=Ve*m,Y[g]=he*_,Y[f]=q,c.push(Y.x,Y.y,Y.z),Y[E]=0,Y[g]=0,Y[f]=T>0?1:-1,d.push(Y.x,Y.y,Y.z),h.push(me/C),h.push(1-Q/x),z+=1}}for(let Q=0;Q<x;Q++)for(let he=0;he<C;he++){const me=u+he+D*Q,Ve=u+he+D*(Q+1),$e=u+(he+1)+D*(Q+1),De=u+(he+1)+D*Q;l.push(me,Ve,De),l.push(Ve,$e,De),B+=6}o.addGroup(p,B,A),p+=B,u+=z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new No(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class ep extends qn{constructor(e=1,n=32,i=0,r=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:n,thetaStart:i,thetaLength:r},n=Math.max(3,n);const s=[],a=[],o=[],l=[],c=new H,d=new Xe;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let h=0,u=3;h<=n;h++,u+=3){const p=i+h/n*r;c.x=e*Math.cos(p),c.y=e*Math.sin(p),a.push(c.x,c.y,c.z),o.push(0,0,1),d.x=(a[u]/e+1)/2,d.y=(a[u+1]/e+1)/2,l.push(d.x,d.y)}for(let h=1;h<=n;h++)s.push(h,h+1,0);this.setIndex(s),this.setAttribute("position",new pn(a,3)),this.setAttribute("normal",new pn(o,3)),this.setAttribute("uv",new pn(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ep(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class tp extends qn{constructor(e=1,n=1,i=1,r=32,s=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:n,height:i,radialSegments:r,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:l};const c=this;r=Math.floor(r),s=Math.floor(s);const d=[],h=[],u=[],p=[];let v=0;const E=[],g=i/2;let f=0;m(),a===!1&&(e>0&&_(!0),n>0&&_(!1)),this.setIndex(d),this.setAttribute("position",new pn(h,3)),this.setAttribute("normal",new pn(u,3)),this.setAttribute("uv",new pn(p,2));function m(){const M=new H,R=new H;let T=0;const C=(n-e)/i;for(let x=0;x<=s;x++){const A=[],b=x/s,P=b*(n-e)+e;for(let N=0;N<=r;N++){const X=N/r,q=X*l+o,D=Math.sin(q),k=Math.cos(q);R.x=P*D,R.y=-b*i+g,R.z=P*k,h.push(R.x,R.y,R.z),M.set(D,C,k).normalize(),u.push(M.x,M.y,M.z),p.push(X,1-b),A.push(v++)}E.push(A)}for(let x=0;x<r;x++)for(let A=0;A<s;A++){const b=E[A][x],P=E[A+1][x],N=E[A+1][x+1],X=E[A][x+1];(e>0||A!==0)&&(d.push(b,P,X),T+=3),(n>0||A!==s-1)&&(d.push(P,N,X),T+=3)}c.addGroup(f,T,0),f+=T}function _(M){const R=v,T=new Xe,C=new H;let x=0;const A=M===!0?e:n,b=M===!0?1:-1;for(let N=1;N<=r;N++)h.push(0,g*b,0),u.push(0,b,0),p.push(.5,.5),v++;const P=v;for(let N=0;N<=r;N++){const q=N/r*l+o,D=Math.cos(q),k=Math.sin(q);C.x=A*k,C.y=g*b,C.z=A*D,h.push(C.x,C.y,C.z),u.push(0,b,0),T.x=D*.5+.5,T.y=k*.5*b+.5,p.push(T.x,T.y),v++}for(let N=0;N<r;N++){const X=R+N,q=P+N;M===!0?d.push(q,q+1,X):d.push(q+1,q,X),x+=3}c.addGroup(f,x,M===!0?1:2),f+=x}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new tp(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class np extends tp{constructor(e=1,n=1,i=32,r=1,s=!1,a=0,o=Math.PI*2){super(0,e,n,i,r,s,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:n,radialSegments:i,heightSegments:r,openEnded:s,thetaStart:a,thetaLength:o}}static fromJSON(e){return new np(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class xa extends qn{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,a=n/2,o=Math.floor(i),l=Math.floor(r),c=o+1,d=l+1,h=e/o,u=n/l,p=[],v=[],E=[],g=[];for(let f=0;f<d;f++){const m=f*u-a;for(let _=0;_<c;_++){const M=_*h-s;v.push(M,-m,0),E.push(0,0,1),g.push(_/o),g.push(1-f/l)}}for(let f=0;f<l;f++)for(let m=0;m<o;m++){const _=m+c*f,M=m+c*(f+1),R=m+1+c*(f+1),T=m+1+c*f;p.push(_,M,T),p.push(M,R,T)}this.setIndex(p),this.setAttribute("position",new pn(v,3)),this.setAttribute("normal",new pn(E,3)),this.setAttribute("uv",new pn(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new xa(e.width,e.height,e.widthSegments,e.heightSegments)}}function ha(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];if(qm(r))r.isRenderTargetTexture?(ke("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone();else if(Array.isArray(r))if(qm(r[0])){const s=[];for(let a=0,o=r.length;a<o;a++)s[a]=r[a].clone();e[n][i]=s}else e[n][i]=r.slice();else e[n][i]=r}}return e}function un(t){const e={};for(let n=0;n<t.length;n++){const i=ha(t[n]);for(const r in i)e[r]=i[r]}return e}function qm(t){return t&&(t.isColor||t.isMatrix3||t.isMatrix4||t.isVector2||t.isVector3||t.isVector4||t.isTexture||t.isQuaternion)}function ZM(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function Ev(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:nt.workingColorSpace}const QM={clone:ha,merge:un};var JM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,eE=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ti extends va{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=JM,this.fragmentShader=eE,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ha(e.uniforms),this.uniformsGroups=ZM(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?n.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?n.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?n.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?n.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?n.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?n.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?n.uniforms[r]={type:"m4",value:a.toArray()}:n.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class tE extends Ti{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class nE extends va{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ft(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ft(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=zd,this.normalScale=new Xe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Cr,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class iE extends va{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=ZS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class rE extends va{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Gu={enabled:!1,files:{},add:function(t,e){this.enabled!==!1&&($m(t)||(this.files[t]=e))},get:function(t){if(this.enabled!==!1&&!$m(t))return this.files[t]},remove:function(t){delete this.files[t]},clear:function(){this.files={}}};function $m(t){try{const e=t.slice(t.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}class sE{constructor(e,n,i){const r=this;let s=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=n,this.onError=i,this._abortController=null,this.itemStart=function(d){o++,s===!1&&r.onStart!==void 0&&r.onStart(d,a,o),s=!0},this.itemEnd=function(d){a++,r.onProgress!==void 0&&r.onProgress(d,a,o),a===o&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(d){r.onError!==void 0&&r.onError(d)},this.resolveURL=function(d){return l?l(d):d},this.setURLModifier=function(d){return l=d,this},this.addHandler=function(d,h){return c.push(d,h),this},this.removeHandler=function(d){const h=c.indexOf(d);return h!==-1&&c.splice(h,2),this},this.getHandler=function(d){for(let h=0,u=c.length;h<u;h+=2){const p=c[h],v=c[h+1];if(p.global&&(p.lastIndex=0),p.test(d))return v}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const aE=new sE;class ip{constructor(e){this.manager=e!==void 0?e:aE,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,n){const i=this;return new Promise(function(r,s){i.load(e,r,n,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}ip.DEFAULT_MATERIAL_NAME="__DEFAULT";const Ls=new WeakMap;class oE extends ip{constructor(e){super(e)}load(e,n,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=Gu.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)s.manager.itemStart(e),setTimeout(function(){n&&n(a),s.manager.itemEnd(e)},0);else{let h=Ls.get(a);h===void 0&&(h=[],Ls.set(a,h)),h.push({onLoad:n,onError:r})}return a}const o=wo("img");function l(){d(),n&&n(this);const h=Ls.get(this)||[];for(let u=0;u<h.length;u++){const p=h[u];p.onLoad&&p.onLoad(this)}Ls.delete(this),s.manager.itemEnd(e)}function c(h){d(),r&&r(h),Gu.remove(`image:${e}`);const u=Ls.get(this)||[];for(let p=0;p<u.length;p++){const v=u[p];v.onError&&v.onError(h)}Ls.delete(this),s.manager.itemError(e),s.manager.itemEnd(e)}function d(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),Gu.add(`image:${e}`,o),s.manager.itemStart(e),o.src=e,o}}class Tv extends ip{constructor(e){super(e)}load(e,n,i,r){const s=new qt,a=new oE(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){s.image=o,s.needsUpdate=!0,n!==void 0&&n(s)},i,r),s}}class wv extends hn{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new ft(e),this.intensity=n}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,n}}const Wu=new bt,Km=new H,Zm=new H;class lE{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Xe(512,512),this.mapType=Pn,this.map=null,this.mapPass=null,this.matrix=new bt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Jh,this._frameExtents=new Xe(1,1),this._viewportCount=1,this._viewports=[new Dt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;Km.setFromMatrixPosition(e.matrixWorld),n.position.copy(Km),Zm.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(Zm),n.updateMatrixWorld(),Wu.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Wu,n.coordinateSystem,n.reversedDepth),n.coordinateSystem===To||n.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Wu)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Sl=new H,Ml=new _a,di=new H;class Av extends hn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new bt,this.projectionMatrix=new bt,this.projectionMatrixInverse=new bt,this.coordinateSystem=vi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Sl,Ml,di),di.x===1&&di.y===1&&di.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Sl,Ml,di.set(1,1,1)).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorld.decompose(Sl,Ml,di),di.x===1&&di.y===1&&di.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Sl,Ml,di.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const ar=new H,Qm=new Xe,Jm=new Xe;class bn extends Av{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Ao*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(to*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ao*2*Math.atan(Math.tan(to*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){ar.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ar.x,ar.y).multiplyScalar(-e/ar.z),ar.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ar.x,ar.y).multiplyScalar(-e/ar.z)}getViewSize(e,n){return this.getViewBounds(e,Qm,Jm),n.subVectors(Jm,Qm)}setViewOffset(e,n,i,r,s,a){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(to*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,n-=a.offsetY*i/c,r*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}class cE extends lE{constructor(){super(new bn(90,1,.5,500)),this.isPointLightShadow=!0}}class Xu extends wv{constructor(e,n,i=0,r=2){super(e,n),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new cE}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const n=super.toJSON(e);return n.object.distance=this.distance,n.object.decay=this.decay,n.object.shadow=this.shadow.toJSON(),n}}class rp extends Av{constructor(e=-1,n=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=d*this.view.offsetY,l=o-d*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class uE extends wv{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}const Is=-90,Ds=1;class fE extends hn{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new bn(Is,Ds,e,n);r.layers=this.layers,this.add(r);const s=new bn(Is,Ds,e,n);s.layers=this.layers,this.add(s);const a=new bn(Is,Ds,e,n);a.layers=this.layers,this.add(a);const o=new bn(Is,Ds,e,n);o.layers=this.layers,this.add(o);const l=new bn(Is,Ds,e,n);l.layers=this.layers,this.add(l);const c=new bn(Is,Ds,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,a,o,l]=n;for(const c of n)this.remove(c);if(e===vi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===To)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,d]=this.children,h=e.getRenderTarget(),u=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;const E=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let g=!1;e.isWebGLRenderer===!0?g=e.state.buffers.depth.getReversed():g=e.reversedDepthBuffer,e.setRenderTarget(i,0,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(n,s),e.setRenderTarget(i,1,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(n,a),e.setRenderTarget(i,2,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(n,o),e.setRenderTarget(i,3,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(n,l),e.setRenderTarget(i,4,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(n,c),i.texture.generateMipmaps=E,e.setRenderTarget(i,5,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(n,d),e.setRenderTarget(h,u,p),e.xr.enabled=v,i.texture.needsPMREMUpdate=!0}}class dE extends bn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const eg=new bt;class hE{constructor(e,n,i=0,r=1/0){this.ray=new yv(e,n),this.near=i,this.far=r,this.camera=null,this.layers=new Zh,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,n){this.ray.set(e,n)}setFromCamera(e,n){n.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(n.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(n).sub(this.ray.origin).normalize(),this.camera=n):n.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(n.near+n.far)/(n.near-n.far)).unproject(n),this.ray.direction.set(0,0,-1).transformDirection(n.matrixWorld),this.camera=n):tt("Raycaster: Unsupported camera type: "+n.type)}setFromXRController(e){return eg.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(eg),this}intersectObject(e,n=!0,i=[]){return Gd(e,this,i,n),i.sort(tg),i}intersectObjects(e,n=!0,i=[]){for(let r=0,s=e.length;r<s;r++)Gd(e[r],this,i,n);return i.sort(tg),i}}function tg(t,e){return t.distance-e.distance}function Gd(t,e,n,i){let r=!0;if(t.layers.test(e.layers)&&t.raycast(e,n)===!1&&(r=!1),r===!0&&i===!0){const s=t.children;for(let a=0,o=s.length;a<o;a++)Gd(s[a],e,n,!0)}}const pp=class pp{constructor(e,n,i,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,n,i,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,n=0){for(let i=0;i<4;i++)this.elements[i]=e[i+n];return this}set(e,n,i,r){const s=this.elements;return s[0]=e,s[2]=n,s[1]=i,s[3]=r,this}};pp.prototype.isMatrix2=!0;let ng=pp;function ig(t,e,n,i){const r=pE(i);switch(n){case cv:return t*e;case fv:return t*e/r.components*r.byteLength;case Wh:return t*e/r.components*r.byteLength;case ss:return t*e*2/r.components*r.byteLength;case Xh:return t*e*2/r.components*r.byteLength;case uv:return t*e*3/r.components*r.byteLength;case ri:return t*e*4/r.components*r.byteLength;case jh:return t*e*4/r.components*r.byteLength;case Vl:case Hl:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Gl:case Wl:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case fd:case hd:return Math.max(t,16)*Math.max(e,8)/4;case ud:case dd:return Math.max(t,8)*Math.max(e,8)/2;case pd:case md:case _d:case vd:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case gd:case vc:case xd:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case yd:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Sd:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case Md:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case Ed:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case Td:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case wd:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case Ad:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case Cd:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case Rd:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case bd:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case Pd:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case Ld:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case Id:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case Dd:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case Nd:case Ud:case Fd:return Math.ceil(t/4)*Math.ceil(e/4)*16;case Od:case kd:return Math.ceil(t/4)*Math.ceil(e/4)*8;case xc:case Bd:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function pE(t){switch(t){case Pn:case sv:return{byteLength:1,components:1};case Mo:case av:case Yi:return{byteLength:2,components:1};case Hh:case Gh:return{byteLength:2,components:4};case Ei:case Vh:case _i:return{byteLength:4,components:1};case ov:case lv:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:zh}}));typeof window<"u"&&(window.__THREE__?ke("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=zh);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Cv(){let t=null,e=!1,n=null,i=null;function r(s,a){n(s,a),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&t!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t!==null&&t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function mE(t){const e=new WeakMap;function n(o,l){const c=o.array,d=o.usage,h=c.byteLength,u=t.createBuffer();t.bindBuffer(l,u),t.bufferData(l,c,d),o.onUploadCallback();let p;if(c instanceof Float32Array)p=t.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=t.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=t.HALF_FLOAT:p=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=t.SHORT;else if(c instanceof Uint32Array)p=t.UNSIGNED_INT;else if(c instanceof Int32Array)p=t.INT;else if(c instanceof Int8Array)p=t.BYTE;else if(c instanceof Uint8Array)p=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:h}}function i(o,l,c){const d=l.array,h=l.updateRanges;if(t.bindBuffer(c,o),h.length===0)t.bufferSubData(c,0,d);else{h.sort((p,v)=>p.start-v.start);let u=0;for(let p=1;p<h.length;p++){const v=h[u],E=h[p];E.start<=v.start+v.count+1?v.count=Math.max(v.count,E.start+E.count-v.start):(++u,h[u]=E)}h.length=u+1;for(let p=0,v=h.length;p<v;p++){const E=h[p];t.bufferSubData(c,E.start*d.BYTES_PER_ELEMENT,d,E.start,E.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(t.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const d=e.get(o);(!d||d.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,n(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:r,remove:s,update:a}}var gE=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,_E=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,vE=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,xE=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,yE=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,SE=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ME=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,EE=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,TE=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,wE=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,AE=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,CE=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,RE=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,bE=`#ifdef USE_IRIDESCENCE
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
#endif`,PE=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,LE=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
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
	#endif
#endif`,IE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,DE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,NE=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,UE=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,FE=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,OE=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,kE=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,BE=`#define PI 3.141592653589793
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
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,zE=`#ifdef ENVMAP_TYPE_CUBE_UV
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
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
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
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
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
#endif`,VE=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,HE=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,GE=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,WE=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,XE=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,jE="gl_FragColor = linearToOutputTexel( gl_FragColor );",YE=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,qE=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,$E=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,KE=`#ifdef USE_ENVMAP
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
#endif`,ZE=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,QE=`#ifdef USE_ENVMAP
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
#endif`,JE=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,e1=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,t1=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,n1=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,i1=`#ifdef USE_GRADIENTMAP
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
}`,r1=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,s1=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,a1=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,o1=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
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
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
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
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
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
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
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
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
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
#endif
#include <lightprobes_pars_fragment>`,l1=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,c1=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,u1=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,f1=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,d1=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,h1=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,p1=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
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
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
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
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
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
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
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
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
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
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
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
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
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
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
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
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,m1=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
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
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
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
		getSpotLightInfo( spotLight, geometryPosition, directLight );
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
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
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = inverseTransformDirection( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,g1=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,_1=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,v1=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,x1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,y1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,S1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,M1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,E1=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,T1=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,w1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,A1=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,C1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,R1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,b1=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,P1=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,L1=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,I1=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,D1=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,N1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,U1=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,F1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,O1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,k1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,B1=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,z1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,V1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,H1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,G1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,W1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,X1=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,j1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Y1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,q1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,$1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,K1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Z1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Q1=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,J1=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
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
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,eT=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
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
#endif`,tT=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,nT=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,iT=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,rT=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,sT=`#ifdef USE_SKINNING
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
#endif`,aT=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,oT=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,lT=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,cT=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
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
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,uT=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,fT=`#ifdef USE_TRANSMISSION
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
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
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
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,dT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,hT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,pT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,mT=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const gT=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,_T=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,xT=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,yT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ST=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,MT=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
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
}`,ET=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,TT=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
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
}`,wT=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,AT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,CT=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,RT=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,bT=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,PT=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,LT=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,IT=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
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
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,DT=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,NT=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,UT=`#define MATCAP
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
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,FT=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,OT=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,kT=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
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
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
}`,BT=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,zT=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
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
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,VT=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
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
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,HT=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
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
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,GT=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,WT=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
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
}`,XT=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,jT=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,YT=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,qT=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
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
}`,$T=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ze={alphahash_fragment:gE,alphahash_pars_fragment:_E,alphamap_fragment:vE,alphamap_pars_fragment:xE,alphatest_fragment:yE,alphatest_pars_fragment:SE,aomap_fragment:ME,aomap_pars_fragment:EE,batching_pars_vertex:TE,batching_vertex:wE,begin_vertex:AE,beginnormal_vertex:CE,bsdfs:RE,iridescence_fragment:bE,bumpmap_pars_fragment:PE,clipping_planes_fragment:LE,clipping_planes_pars_fragment:IE,clipping_planes_pars_vertex:DE,clipping_planes_vertex:NE,color_fragment:UE,color_pars_fragment:FE,color_pars_vertex:OE,color_vertex:kE,common:BE,cube_uv_reflection_fragment:zE,defaultnormal_vertex:VE,displacementmap_pars_vertex:HE,displacementmap_vertex:GE,emissivemap_fragment:WE,emissivemap_pars_fragment:XE,colorspace_fragment:jE,colorspace_pars_fragment:YE,envmap_fragment:qE,envmap_common_pars_fragment:$E,envmap_pars_fragment:KE,envmap_pars_vertex:ZE,envmap_physical_pars_fragment:l1,envmap_vertex:QE,fog_vertex:JE,fog_pars_vertex:e1,fog_fragment:t1,fog_pars_fragment:n1,gradientmap_pars_fragment:i1,lightmap_pars_fragment:r1,lights_lambert_fragment:s1,lights_lambert_pars_fragment:a1,lights_pars_begin:o1,lights_toon_fragment:c1,lights_toon_pars_fragment:u1,lights_phong_fragment:f1,lights_phong_pars_fragment:d1,lights_physical_fragment:h1,lights_physical_pars_fragment:p1,lights_fragment_begin:m1,lights_fragment_maps:g1,lights_fragment_end:_1,lightprobes_pars_fragment:v1,logdepthbuf_fragment:x1,logdepthbuf_pars_fragment:y1,logdepthbuf_pars_vertex:S1,logdepthbuf_vertex:M1,map_fragment:E1,map_pars_fragment:T1,map_particle_fragment:w1,map_particle_pars_fragment:A1,metalnessmap_fragment:C1,metalnessmap_pars_fragment:R1,morphinstance_vertex:b1,morphcolor_vertex:P1,morphnormal_vertex:L1,morphtarget_pars_vertex:I1,morphtarget_vertex:D1,normal_fragment_begin:N1,normal_fragment_maps:U1,normal_pars_fragment:F1,normal_pars_vertex:O1,normal_vertex:k1,normalmap_pars_fragment:B1,clearcoat_normal_fragment_begin:z1,clearcoat_normal_fragment_maps:V1,clearcoat_pars_fragment:H1,iridescence_pars_fragment:G1,opaque_fragment:W1,packing:X1,premultiplied_alpha_fragment:j1,project_vertex:Y1,dithering_fragment:q1,dithering_pars_fragment:$1,roughnessmap_fragment:K1,roughnessmap_pars_fragment:Z1,shadowmap_pars_fragment:Q1,shadowmap_pars_vertex:J1,shadowmap_vertex:eT,shadowmask_pars_fragment:tT,skinbase_vertex:nT,skinning_pars_vertex:iT,skinning_vertex:rT,skinnormal_vertex:sT,specularmap_fragment:aT,specularmap_pars_fragment:oT,tonemapping_fragment:lT,tonemapping_pars_fragment:cT,transmission_fragment:uT,transmission_pars_fragment:fT,uv_pars_fragment:dT,uv_pars_vertex:hT,uv_vertex:pT,worldpos_vertex:mT,background_vert:gT,background_frag:_T,backgroundCube_vert:vT,backgroundCube_frag:xT,cube_vert:yT,cube_frag:ST,depth_vert:MT,depth_frag:ET,distance_vert:TT,distance_frag:wT,equirect_vert:AT,equirect_frag:CT,linedashed_vert:RT,linedashed_frag:bT,meshbasic_vert:PT,meshbasic_frag:LT,meshlambert_vert:IT,meshlambert_frag:DT,meshmatcap_vert:NT,meshmatcap_frag:UT,meshnormal_vert:FT,meshnormal_frag:OT,meshphong_vert:kT,meshphong_frag:BT,meshphysical_vert:zT,meshphysical_frag:VT,meshtoon_vert:HT,meshtoon_frag:GT,points_vert:WT,points_frag:XT,shadow_vert:jT,shadow_frag:YT,sprite_vert:qT,sprite_frag:$T},xe={common:{diffuse:{value:new ft(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new We}},envmap:{envMap:{value:null},envMapRotation:{value:new We},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new We}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new We}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new We},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new We},normalScale:{value:new Xe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new We},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new We}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new We}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new We}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ft(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new H},probesMax:{value:new H},probesResolution:{value:new H}},points:{diffuse:{value:new ft(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0},uvTransform:{value:new We}},sprite:{diffuse:{value:new ft(16777215)},opacity:{value:1},center:{value:new Xe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}}},mi={basic:{uniforms:un([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.fog]),vertexShader:Ze.meshbasic_vert,fragmentShader:Ze.meshbasic_frag},lambert:{uniforms:un([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,xe.lights,{emissive:{value:new ft(0)},envMapIntensity:{value:1}}]),vertexShader:Ze.meshlambert_vert,fragmentShader:Ze.meshlambert_frag},phong:{uniforms:un([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,xe.lights,{emissive:{value:new ft(0)},specular:{value:new ft(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Ze.meshphong_vert,fragmentShader:Ze.meshphong_frag},standard:{uniforms:un([xe.common,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.roughnessmap,xe.metalnessmap,xe.fog,xe.lights,{emissive:{value:new ft(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ze.meshphysical_vert,fragmentShader:Ze.meshphysical_frag},toon:{uniforms:un([xe.common,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.gradientmap,xe.fog,xe.lights,{emissive:{value:new ft(0)}}]),vertexShader:Ze.meshtoon_vert,fragmentShader:Ze.meshtoon_frag},matcap:{uniforms:un([xe.common,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,{matcap:{value:null}}]),vertexShader:Ze.meshmatcap_vert,fragmentShader:Ze.meshmatcap_frag},points:{uniforms:un([xe.points,xe.fog]),vertexShader:Ze.points_vert,fragmentShader:Ze.points_frag},dashed:{uniforms:un([xe.common,xe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ze.linedashed_vert,fragmentShader:Ze.linedashed_frag},depth:{uniforms:un([xe.common,xe.displacementmap]),vertexShader:Ze.depth_vert,fragmentShader:Ze.depth_frag},normal:{uniforms:un([xe.common,xe.bumpmap,xe.normalmap,xe.displacementmap,{opacity:{value:1}}]),vertexShader:Ze.meshnormal_vert,fragmentShader:Ze.meshnormal_frag},sprite:{uniforms:un([xe.sprite,xe.fog]),vertexShader:Ze.sprite_vert,fragmentShader:Ze.sprite_frag},background:{uniforms:{uvTransform:{value:new We},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ze.background_vert,fragmentShader:Ze.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new We}},vertexShader:Ze.backgroundCube_vert,fragmentShader:Ze.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ze.cube_vert,fragmentShader:Ze.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ze.equirect_vert,fragmentShader:Ze.equirect_frag},distance:{uniforms:un([xe.common,xe.displacementmap,{referencePosition:{value:new H},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ze.distance_vert,fragmentShader:Ze.distance_frag},shadow:{uniforms:un([xe.lights,xe.fog,{color:{value:new ft(0)},opacity:{value:1}}]),vertexShader:Ze.shadow_vert,fragmentShader:Ze.shadow_frag}};mi.physical={uniforms:un([mi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new We},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new We},clearcoatNormalScale:{value:new Xe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new We},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new We},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new We},sheen:{value:0},sheenColor:{value:new ft(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new We},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new We},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new We},transmissionSamplerSize:{value:new Xe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new We},attenuationDistance:{value:0},attenuationColor:{value:new ft(0)},specularColor:{value:new ft(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new We},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new We},anisotropyVector:{value:new Xe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new We}}]),vertexShader:Ze.meshphysical_vert,fragmentShader:Ze.meshphysical_frag};const El={r:0,b:0,g:0},KT=new bt,Rv=new We;Rv.set(-1,0,0,0,1,0,0,0,1);function ZT(t,e,n,i,r,s){const a=new ft(0);let o=r===!0?0:1,l,c,d=null,h=0,u=null;function p(m){let _=m.isScene===!0?m.background:null;if(_&&_.isTexture){const M=m.backgroundBlurriness>0;_=e.get(_,M)}return _}function v(m){let _=!1;const M=p(m);M===null?g(a,o):M&&M.isColor&&(g(M,1),_=!0);const R=t.xr.getEnvironmentBlendMode();R==="additive"?n.buffers.color.setClear(0,0,0,1,s):R==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,s),(t.autoClear||_)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function E(m,_){const M=p(_);M&&(M.isCubeTexture||M.mapping===Vc)?(c===void 0&&(c=new Dn(new No(1,1,1),new Ti({name:"BackgroundCubeMaterial",uniforms:ha(mi.backgroundCube.uniforms),vertexShader:mi.backgroundCube.vertexShader,fragmentShader:mi.backgroundCube.fragmentShader,side:En,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(R,T,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=M,c.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(KT.makeRotationFromEuler(_.backgroundRotation)).transpose(),M.isCubeTexture&&M.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Rv),c.material.toneMapped=nt.getTransfer(M.colorSpace)!==pt,(d!==M||h!==M.version||u!==t.toneMapping)&&(c.material.needsUpdate=!0,d=M,h=M.version,u=t.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null)):M&&M.isTexture&&(l===void 0&&(l=new Dn(new xa(2,2),new Ti({name:"BackgroundMaterial",uniforms:ha(mi.background.uniforms),vertexShader:mi.background.vertexShader,fragmentShader:mi.background.fragmentShader,side:Ar,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=M,l.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,l.material.toneMapped=nt.getTransfer(M.colorSpace)!==pt,M.matrixAutoUpdate===!0&&M.updateMatrix(),l.material.uniforms.uvTransform.value.copy(M.matrix),(d!==M||h!==M.version||u!==t.toneMapping)&&(l.material.needsUpdate=!0,d=M,h=M.version,u=t.toneMapping),l.layers.enableAll(),m.unshift(l,l.geometry,l.material,0,0,null))}function g(m,_){m.getRGB(El,Ev(t)),n.buffers.color.setClear(El.r,El.g,El.b,_,s)}function f(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(m,_=1){a.set(m),o=_,g(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(m){o=m,g(a,o)},render:v,addToRenderList:E,dispose:f}}function QT(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=u(null);let s=r,a=!1;function o(P,N,X,q,D){let k=!1;const z=h(P,q,X,N);s!==z&&(s=z,c(s.object)),k=p(P,q,X,D),k&&v(P,q,X,D),D!==null&&e.update(D,t.ELEMENT_ARRAY_BUFFER),(k||a)&&(a=!1,M(P,N,X,q),D!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(D).buffer))}function l(){return t.createVertexArray()}function c(P){return t.bindVertexArray(P)}function d(P){return t.deleteVertexArray(P)}function h(P,N,X,q){const D=q.wireframe===!0;let k=i[N.id];k===void 0&&(k={},i[N.id]=k);const z=P.isInstancedMesh===!0?P.id:0;let B=k[z];B===void 0&&(B={},k[z]=B);let Y=B[X.id];Y===void 0&&(Y={},B[X.id]=Y);let Q=Y[D];return Q===void 0&&(Q=u(l()),Y[D]=Q),Q}function u(P){const N=[],X=[],q=[];for(let D=0;D<n;D++)N[D]=0,X[D]=0,q[D]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:X,attributeDivisors:q,object:P,attributes:{},index:null}}function p(P,N,X,q){const D=s.attributes,k=N.attributes;let z=0;const B=X.getAttributes();for(const Y in B)if(B[Y].location>=0){const he=D[Y];let me=k[Y];if(me===void 0&&(Y==="instanceMatrix"&&P.instanceMatrix&&(me=P.instanceMatrix),Y==="instanceColor"&&P.instanceColor&&(me=P.instanceColor)),he===void 0||he.attribute!==me||me&&he.data!==me.data)return!0;z++}return s.attributesNum!==z||s.index!==q}function v(P,N,X,q){const D={},k=N.attributes;let z=0;const B=X.getAttributes();for(const Y in B)if(B[Y].location>=0){let he=k[Y];he===void 0&&(Y==="instanceMatrix"&&P.instanceMatrix&&(he=P.instanceMatrix),Y==="instanceColor"&&P.instanceColor&&(he=P.instanceColor));const me={};me.attribute=he,he&&he.data&&(me.data=he.data),D[Y]=me,z++}s.attributes=D,s.attributesNum=z,s.index=q}function E(){const P=s.newAttributes;for(let N=0,X=P.length;N<X;N++)P[N]=0}function g(P){f(P,0)}function f(P,N){const X=s.newAttributes,q=s.enabledAttributes,D=s.attributeDivisors;X[P]=1,q[P]===0&&(t.enableVertexAttribArray(P),q[P]=1),D[P]!==N&&(t.vertexAttribDivisor(P,N),D[P]=N)}function m(){const P=s.newAttributes,N=s.enabledAttributes;for(let X=0,q=N.length;X<q;X++)N[X]!==P[X]&&(t.disableVertexAttribArray(X),N[X]=0)}function _(P,N,X,q,D,k,z){z===!0?t.vertexAttribIPointer(P,N,X,D,k):t.vertexAttribPointer(P,N,X,q,D,k)}function M(P,N,X,q){E();const D=q.attributes,k=X.getAttributes(),z=N.defaultAttributeValues;for(const B in k){const Y=k[B];if(Y.location>=0){let Q=D[B];if(Q===void 0&&(B==="instanceMatrix"&&P.instanceMatrix&&(Q=P.instanceMatrix),B==="instanceColor"&&P.instanceColor&&(Q=P.instanceColor)),Q!==void 0){const he=Q.normalized,me=Q.itemSize,Ve=e.get(Q);if(Ve===void 0)continue;const $e=Ve.buffer,De=Ve.type,V=Ve.bytesPerElement,te=De===t.INT||De===t.UNSIGNED_INT||Q.gpuType===Vh;if(Q.isInterleavedBufferAttribute){const se=Q.data,le=se.stride,Fe=Q.offset;if(se.isInstancedInterleavedBuffer){for(let we=0;we<Y.locationSize;we++)f(Y.location+we,se.meshPerAttribute);P.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=se.meshPerAttribute*se.count)}else for(let we=0;we<Y.locationSize;we++)g(Y.location+we);t.bindBuffer(t.ARRAY_BUFFER,$e);for(let we=0;we<Y.locationSize;we++)_(Y.location+we,me/Y.locationSize,De,he,le*V,(Fe+me/Y.locationSize*we)*V,te)}else{if(Q.isInstancedBufferAttribute){for(let se=0;se<Y.locationSize;se++)f(Y.location+se,Q.meshPerAttribute);P.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let se=0;se<Y.locationSize;se++)g(Y.location+se);t.bindBuffer(t.ARRAY_BUFFER,$e);for(let se=0;se<Y.locationSize;se++)_(Y.location+se,me/Y.locationSize,De,he,me*V,me/Y.locationSize*se*V,te)}}else if(z!==void 0){const he=z[B];if(he!==void 0)switch(he.length){case 2:t.vertexAttrib2fv(Y.location,he);break;case 3:t.vertexAttrib3fv(Y.location,he);break;case 4:t.vertexAttrib4fv(Y.location,he);break;default:t.vertexAttrib1fv(Y.location,he)}}}}m()}function R(){A();for(const P in i){const N=i[P];for(const X in N){const q=N[X];for(const D in q){const k=q[D];for(const z in k)d(k[z].object),delete k[z];delete q[D]}}delete i[P]}}function T(P){if(i[P.id]===void 0)return;const N=i[P.id];for(const X in N){const q=N[X];for(const D in q){const k=q[D];for(const z in k)d(k[z].object),delete k[z];delete q[D]}}delete i[P.id]}function C(P){for(const N in i){const X=i[N];for(const q in X){const D=X[q];if(D[P.id]===void 0)continue;const k=D[P.id];for(const z in k)d(k[z].object),delete k[z];delete D[P.id]}}}function x(P){for(const N in i){const X=i[N],q=P.isInstancedMesh===!0?P.id:0,D=X[q];if(D!==void 0){for(const k in D){const z=D[k];for(const B in z)d(z[B].object),delete z[B];delete D[k]}delete X[q],Object.keys(X).length===0&&delete i[N]}}}function A(){b(),a=!0,s!==r&&(s=r,c(s.object))}function b(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:A,resetDefaultState:b,dispose:R,releaseStatesOfGeometry:T,releaseStatesOfObject:x,releaseStatesOfProgram:C,initAttributes:E,enableAttribute:g,disableUnusedAttributes:m}}function JT(t,e,n){let i;function r(l){i=l}function s(l,c){t.drawArrays(i,l,c),n.update(c,i,1)}function a(l,c,d){d!==0&&(t.drawArraysInstanced(i,l,c,d),n.update(c,i,d))}function o(l,c,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,d);let u=0;for(let p=0;p<d;p++)u+=c[p];n.update(u,i,1)}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o}function ew(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(C){return!(C!==ri&&i.convert(C)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(C){const x=C===Yi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==Pn&&i.convert(C)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==_i&&!x)}function l(C){if(C==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const d=l(c);d!==c&&(ke("WebGLRenderer:",c,"not supported, using",d,"instead."),c=d);const h=n.logarithmicDepthBuffer===!0,u=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control");n.reversedDepthBuffer===!0&&u===!1&&ke("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const p=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),v=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),E=t.getParameter(t.MAX_TEXTURE_SIZE),g=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),f=t.getParameter(t.MAX_VERTEX_ATTRIBS),m=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),_=t.getParameter(t.MAX_VARYING_VECTORS),M=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),R=t.getParameter(t.MAX_SAMPLES),T=t.getParameter(t.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:h,reversedDepthBuffer:u,maxTextures:p,maxVertexTextures:v,maxTextureSize:E,maxCubemapSize:g,maxAttributes:f,maxVertexUniforms:m,maxVaryings:_,maxFragmentUniforms:M,maxSamples:R,samples:T}}function tw(t){const e=this;let n=null,i=0,r=!1,s=!1;const a=new Hr,o=new We,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,u){const p=h.length!==0||u||i!==0||r;return r=u,i=h.length,p},this.beginShadows=function(){s=!0,d(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,u){n=d(h,u,0)},this.setState=function(h,u,p){const v=h.clippingPlanes,E=h.clipIntersection,g=h.clipShadows,f=t.get(h);if(!r||v===null||v.length===0||s&&!g)s?d(null):c();else{const m=s?0:i,_=m*4;let M=f.clippingState||null;l.value=M,M=d(v,u,_,p);for(let R=0;R!==_;++R)M[R]=n[R];f.clippingState=M,this.numIntersection=E?this.numPlanes:0,this.numPlanes+=m}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function d(h,u,p,v){const E=h!==null?h.length:0;let g=null;if(E!==0){if(g=l.value,v!==!0||g===null){const f=p+E*4,m=u.matrixWorldInverse;o.getNormalMatrix(m),(g===null||g.length<f)&&(g=new Float32Array(f));for(let _=0,M=p;_!==E;++_,M+=4)a.copy(h[_]).applyMatrix4(m,o),a.normal.toArray(g,M),g[M+3]=a.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=E,e.numIntersection=0,g}}const mr=4,rg=[.125,.215,.35,.446,.526,.582],Wr=20,nw=256,Oa=new rp,sg=new ft;let ju=null,Yu=0,qu=0,$u=!1;const iw=new H;class ag{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,n=0,i=.1,r=100,s={}){const{size:a=256,position:o=iw}=s;ju=this._renderer.getRenderTarget(),Yu=this._renderer.getActiveCubeFace(),qu=this._renderer.getActiveMipmapLevel(),$u=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,r,l,o),n>0&&this._blur(l,0,0,n),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=cg(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=lg(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(ju,Yu,qu),this._renderer.xr.enabled=$u,e.scissorTest=!1,Ns(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===rs||e.mapping===fa?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ju=this._renderer.getRenderTarget(),Yu=this._renderer.getActiveCubeFace(),qu=this._renderer.getActiveMipmapLevel(),$u=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:zt,minFilter:zt,generateMipmaps:!1,type:Yi,format:ri,colorSpace:yc,depthBuffer:!1},r=og(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=og(e,n,i);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=rw(s)),this._blurMaterial=aw(s,e,n),this._ggxMaterial=sw(s,e,n)}return r}_compileMaterial(e){const n=new Dn(new qn,e);this._renderer.compile(n,Oa)}_sceneToCubeUV(e,n,i,r,s){const l=new bn(90,1,n,i),c=[1,-1,1,1,1,1],d=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,p=h.toneMapping;h.getClearColor(sg),h.toneMapping=Si,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(r),h.clearDepth(),h.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Dn(new No,new Co({name:"PMREM.Background",side:En,depthWrite:!1,depthTest:!1})));const E=this._backgroundBox,g=E.material;let f=!1;const m=e.background;m?m.isColor&&(g.color.copy(m),e.background=null,f=!0):(g.color.copy(sg),f=!0);for(let _=0;_<6;_++){const M=_%3;M===0?(l.up.set(0,c[_],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+d[_],s.y,s.z)):M===1?(l.up.set(0,0,c[_]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+d[_],s.z)):(l.up.set(0,c[_],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+d[_]));const R=this._cubeSize;Ns(r,M*R,_>2?R:0,R,R),h.setRenderTarget(r),f&&h.render(E,l),h.render(e,l)}h.toneMapping=p,h.autoClear=u,e.background=m}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===rs||e.mapping===fa;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=cg()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=lg());const s=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=s;const o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;Ns(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(a,Oa)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);n.autoClear=i}_applyGGXFilter(e,n,i){const r=this._renderer,s=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[i];o.material=a;const l=a.uniforms,c=i/(this._lodMeshes.length-1),d=n/(this._lodMeshes.length-1),h=Math.sqrt(c*c-d*d),u=0+c*1.25,p=h*u,{_lodMax:v}=this,E=this._sizeLods[i],g=3*E*(i>v-mr?i-v+mr:0),f=4*(this._cubeSize-E);l.envMap.value=e.texture,l.roughness.value=p,l.mipInt.value=v-n,Ns(s,g,f,3*E,2*E),r.setRenderTarget(s),r.render(o,Oa),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=v-i,Ns(e,g,f,3*E,2*E),r.setRenderTarget(e),r.render(o,Oa)}_blur(e,n,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,n,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&tt("blur direction must be either latitudinal or longitudinal!");const d=3,h=this._lodMeshes[r];h.material=c;const u=c.uniforms,p=this._sizeLods[i]-1,v=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*Wr-1),E=s/v,g=isFinite(s)?1+Math.floor(d*E):Wr;g>Wr&&ke(`sigmaRadians, ${s}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Wr}`);const f=[];let m=0;for(let C=0;C<Wr;++C){const x=C/E,A=Math.exp(-x*x/2);f.push(A),C===0?m+=A:C<g&&(m+=2*A)}for(let C=0;C<f.length;C++)f[C]=f[C]/m;u.envMap.value=e.texture,u.samples.value=g,u.weights.value=f,u.latitudinal.value=a==="latitudinal",o&&(u.poleAxis.value=o);const{_lodMax:_}=this;u.dTheta.value=v,u.mipInt.value=_-i;const M=this._sizeLods[r],R=3*M*(r>_-mr?r-_+mr:0),T=4*(this._cubeSize-M);Ns(n,R,T,3*M,2*M),l.setRenderTarget(n),l.render(h,Oa)}}function rw(t){const e=[],n=[],i=[];let r=t;const s=t-mr+1+rg.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);e.push(o);let l=1/o;a>t-mr?l=rg[a-t+mr-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),d=-c,h=1+c,u=[d,d,h,d,h,h,d,d,h,h,d,h],p=6,v=6,E=3,g=2,f=1,m=new Float32Array(E*v*p),_=new Float32Array(g*v*p),M=new Float32Array(f*v*p);for(let T=0;T<p;T++){const C=T%3*2/3-1,x=T>2?0:-1,A=[C,x,0,C+2/3,x,0,C+2/3,x+1,0,C,x,0,C+2/3,x+1,0,C,x+1,0];m.set(A,E*v*T),_.set(u,g*v*T);const b=[T,T,T,T,T,T];M.set(b,f*v*T)}const R=new qn;R.setAttribute("position",new oi(m,E)),R.setAttribute("uv",new oi(_,g)),R.setAttribute("faceIndex",new oi(M,f)),i.push(new Dn(R,null)),r>mr&&r--}return{lodMeshes:i,sizeLods:e,sigmas:n}}function og(t,e,n){const i=new Mi(t,e,n);return i.texture.mapping=Vc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Ns(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function sw(t,e,n){return new Ti({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:nw,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Hc(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:zi,depthTest:!1,depthWrite:!1})}function aw(t,e,n){const i=new Float32Array(Wr),r=new H(0,1,0);return new Ti({name:"SphericalGaussianBlur",defines:{n:Wr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Hc(),fragmentShader:`

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
		`,blending:zi,depthTest:!1,depthWrite:!1})}function lg(){return new Ti({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Hc(),fragmentShader:`

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
		`,blending:zi,depthTest:!1,depthWrite:!1})}function cg(){return new Ti({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Hc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:zi,depthTest:!1,depthWrite:!1})}function Hc(){return`

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
	`}class bv extends Mi{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Sv(r),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new No(5,5,5),s=new Ti({name:"CubemapFromEquirect",uniforms:ha(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:En,blending:zi});s.uniforms.tEquirect.value=n;const a=new Dn(r,s),o=n.minFilter;return n.minFilter===$r&&(n.minFilter=zt),new fE(1,10,this).update(e,a),n.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,n=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(n,i,r);e.setRenderTarget(s)}}function ow(t){let e=new WeakMap,n=new WeakMap,i=null;function r(u,p=!1){return u==null?null:p?a(u):s(u)}function s(u){if(u&&u.isTexture){const p=u.mapping;if(p===_u||p===vu)if(e.has(u)){const v=e.get(u).texture;return o(v,u.mapping)}else{const v=u.image;if(v&&v.height>0){const E=new bv(v.height);return E.fromEquirectangularTexture(t,u),e.set(u,E),u.addEventListener("dispose",c),o(E.texture,u.mapping)}else return null}}return u}function a(u){if(u&&u.isTexture){const p=u.mapping,v=p===_u||p===vu,E=p===rs||p===fa;if(v||E){let g=n.get(u);const f=g!==void 0?g.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==f)return i===null&&(i=new ag(t)),g=v?i.fromEquirectangular(u,g):i.fromCubemap(u,g),g.texture.pmremVersion=u.pmremVersion,n.set(u,g),g.texture;if(g!==void 0)return g.texture;{const m=u.image;return v&&m&&m.height>0||E&&m&&l(m)?(i===null&&(i=new ag(t)),g=v?i.fromEquirectangular(u):i.fromCubemap(u),g.texture.pmremVersion=u.pmremVersion,n.set(u,g),u.addEventListener("dispose",d),g.texture):null}}}return u}function o(u,p){return p===_u?u.mapping=rs:p===vu&&(u.mapping=fa),u}function l(u){let p=0;const v=6;for(let E=0;E<v;E++)u[E]!==void 0&&p++;return p===v}function c(u){const p=u.target;p.removeEventListener("dispose",c);const v=e.get(p);v!==void 0&&(e.delete(p),v.dispose())}function d(u){const p=u.target;p.removeEventListener("dispose",d);const v=n.get(p);v!==void 0&&(n.delete(p),v.dispose())}function h(){e=new WeakMap,n=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:h}}function lw(t){const e={};function n(i){if(e[i]!==void 0)return e[i];const r=t.getExtension(i);return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&Hd("WebGLRenderer: "+i+" extension not supported."),r}}}function cw(t,e,n,i){const r={},s=new WeakMap;function a(h){const u=h.target;u.index!==null&&e.remove(u.index);for(const v in u.attributes)e.remove(u.attributes[v]);u.removeEventListener("dispose",a),delete r[u.id];const p=s.get(u);p&&(e.remove(p),s.delete(u)),i.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,n.memory.geometries--}function o(h,u){return r[u.id]===!0||(u.addEventListener("dispose",a),r[u.id]=!0,n.memory.geometries++),u}function l(h){const u=h.attributes;for(const p in u)e.update(u[p],t.ARRAY_BUFFER)}function c(h){const u=[],p=h.index,v=h.attributes.position;let E=0;if(v===void 0)return;if(p!==null){const m=p.array;E=p.version;for(let _=0,M=m.length;_<M;_+=3){const R=m[_+0],T=m[_+1],C=m[_+2];u.push(R,T,T,C,C,R)}}else{const m=v.array;E=v.version;for(let _=0,M=m.length/3-1;_<M;_+=3){const R=_+0,T=_+1,C=_+2;u.push(R,T,T,C,C,R)}}const g=new(v.count>=65535?_v:gv)(u,1);g.version=E;const f=s.get(h);f&&e.remove(f),s.set(h,g)}function d(h){const u=s.get(h);if(u){const p=h.index;p!==null&&u.version<p.version&&c(h)}else c(h);return s.get(h)}return{get:o,update:l,getWireframeAttribute:d}}function uw(t,e,n){let i;function r(h){i=h}let s,a;function o(h){s=h.type,a=h.bytesPerElement}function l(h,u){t.drawElements(i,u,s,h*a),n.update(u,i,1)}function c(h,u,p){p!==0&&(t.drawElementsInstanced(i,u,s,h*a,p),n.update(u,i,p))}function d(h,u,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,u,0,s,h,0,p);let E=0;for(let g=0;g<p;g++)E+=u[g];n.update(E,i,1)}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=d}function fw(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(n.calls++,a){case t.TRIANGLES:n.triangles+=o*(s/3);break;case t.LINES:n.lines+=o*(s/2);break;case t.LINE_STRIP:n.lines+=o*(s-1);break;case t.LINE_LOOP:n.lines+=o*s;break;case t.POINTS:n.points+=o*s;break;default:tt("WebGLInfo: Unknown draw mode:",a);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function dw(t,e,n){const i=new WeakMap,r=new Dt;function s(a,o,l){const c=a.morphTargetInfluences,d=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=d!==void 0?d.length:0;let u=i.get(o);if(u===void 0||u.count!==h){let b=function(){x.dispose(),i.delete(o),o.removeEventListener("dispose",b)};var p=b;u!==void 0&&u.texture.dispose();const v=o.morphAttributes.position!==void 0,E=o.morphAttributes.normal!==void 0,g=o.morphAttributes.color!==void 0,f=o.morphAttributes.position||[],m=o.morphAttributes.normal||[],_=o.morphAttributes.color||[];let M=0;v===!0&&(M=1),E===!0&&(M=2),g===!0&&(M=3);let R=o.attributes.position.count*M,T=1;R>e.maxTextureSize&&(T=Math.ceil(R/e.maxTextureSize),R=e.maxTextureSize);const C=new Float32Array(R*T*4*h),x=new hv(C,R,T,h);x.type=_i,x.needsUpdate=!0;const A=M*4;for(let P=0;P<h;P++){const N=f[P],X=m[P],q=_[P],D=R*T*4*P;for(let k=0;k<N.count;k++){const z=k*A;v===!0&&(r.fromBufferAttribute(N,k),C[D+z+0]=r.x,C[D+z+1]=r.y,C[D+z+2]=r.z,C[D+z+3]=0),E===!0&&(r.fromBufferAttribute(X,k),C[D+z+4]=r.x,C[D+z+5]=r.y,C[D+z+6]=r.z,C[D+z+7]=0),g===!0&&(r.fromBufferAttribute(q,k),C[D+z+8]=r.x,C[D+z+9]=r.y,C[D+z+10]=r.z,C[D+z+11]=q.itemSize===4?r.w:1)}}u={count:h,texture:x,size:new Xe(R,T)},i.set(o,u),o.addEventListener("dispose",b)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",a.morphTexture,n);else{let v=0;for(let g=0;g<c.length;g++)v+=c[g];const E=o.morphTargetsRelative?1:1-v;l.getUniforms().setValue(t,"morphTargetBaseInfluence",E),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",u.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",u.size)}return{update:s}}function hw(t,e,n,i,r){let s=new WeakMap;function a(c){const d=r.render.frame,h=c.geometry,u=e.get(c,h);if(s.get(u)!==d&&(e.update(u),s.set(u,d)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==d&&(n.update(c.instanceMatrix,t.ARRAY_BUFFER),c.instanceColor!==null&&n.update(c.instanceColor,t.ARRAY_BUFFER),s.set(c,d))),c.isSkinnedMesh){const p=c.skeleton;s.get(p)!==d&&(p.update(),s.set(p,d))}return u}function o(){s=new WeakMap}function l(c){const d=c.target;d.removeEventListener("dispose",l),i.releaseStatesOfObject(d),n.remove(d.instanceMatrix),d.instanceColor!==null&&n.remove(d.instanceColor)}return{update:a,dispose:o}}const pw={[Z_]:"LINEAR_TONE_MAPPING",[Q_]:"REINHARD_TONE_MAPPING",[J_]:"CINEON_TONE_MAPPING",[ev]:"ACES_FILMIC_TONE_MAPPING",[nv]:"AGX_TONE_MAPPING",[iv]:"NEUTRAL_TONE_MAPPING",[tv]:"CUSTOM_TONE_MAPPING"};function mw(t,e,n,i,r){const s=new Mi(e,n,{type:t,depthBuffer:i,stencilBuffer:r,depthTexture:i?new da(e,n):void 0}),a=new Mi(e,n,{type:Yi,depthBuffer:!1,stencilBuffer:!1}),o=new qn;o.setAttribute("position",new pn([-1,3,0,-1,-1,0,3,-1,0],3)),o.setAttribute("uv",new pn([0,2,0,0,2,0],2));const l=new tE({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),c=new Dn(o,l),d=new rp(-1,1,1,-1,0,1);let h=null,u=null,p=!1,v,E=null,g=[],f=!1;this.setSize=function(m,_){s.setSize(m,_),a.setSize(m,_);for(let M=0;M<g.length;M++){const R=g[M];R.setSize&&R.setSize(m,_)}},this.setEffects=function(m){g=m,f=g.length>0&&g[0].isRenderPass===!0;const _=s.width,M=s.height;for(let R=0;R<g.length;R++){const T=g[R];T.setSize&&T.setSize(_,M)}},this.begin=function(m,_){if(p||m.toneMapping===Si&&g.length===0)return!1;if(E=_,_!==null){const M=_.width,R=_.height;(s.width!==M||s.height!==R)&&this.setSize(M,R)}return f===!1&&m.setRenderTarget(s),v=m.toneMapping,m.toneMapping=Si,!0},this.hasRenderPass=function(){return f},this.end=function(m,_){m.toneMapping=v,p=!0;let M=s,R=a;for(let T=0;T<g.length;T++){const C=g[T];if(C.enabled!==!1&&(C.render(m,R,M,_),C.needsSwap!==!1)){const x=M;M=R,R=x}}if(h!==m.outputColorSpace||u!==m.toneMapping){h=m.outputColorSpace,u=m.toneMapping,l.defines={},nt.getTransfer(h)===pt&&(l.defines.SRGB_TRANSFER="");const T=pw[u];T&&(l.defines[T]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=M.texture,m.setRenderTarget(E),m.render(c,d),E=null,p=!1},this.isCompositing=function(){return p},this.dispose=function(){s.depthTexture&&s.depthTexture.dispose(),s.dispose(),a.dispose(),o.dispose(),l.dispose()}}const Pv=new qt,Wd=new da(1,1),Lv=new hv,Iv=new PM,Dv=new Sv,ug=[],fg=[],dg=new Float32Array(16),hg=new Float32Array(9),pg=new Float32Array(4);function ya(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=ug[r];if(s===void 0&&(s=new Float32Array(r),ug[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=n,t[a].toArray(s,o)}return s}function Gt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Wt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Gc(t,e){let n=fg[e];n===void 0&&(n=new Int32Array(e),fg[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function gw(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function _w(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Gt(n,e))return;t.uniform2fv(this.addr,e),Wt(n,e)}}function vw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Gt(n,e))return;t.uniform3fv(this.addr,e),Wt(n,e)}}function xw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Gt(n,e))return;t.uniform4fv(this.addr,e),Wt(n,e)}}function yw(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Gt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Wt(n,e)}else{if(Gt(n,i))return;pg.set(i),t.uniformMatrix2fv(this.addr,!1,pg),Wt(n,i)}}function Sw(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Gt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Wt(n,e)}else{if(Gt(n,i))return;hg.set(i),t.uniformMatrix3fv(this.addr,!1,hg),Wt(n,i)}}function Mw(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Gt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Wt(n,e)}else{if(Gt(n,i))return;dg.set(i),t.uniformMatrix4fv(this.addr,!1,dg),Wt(n,i)}}function Ew(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function Tw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Gt(n,e))return;t.uniform2iv(this.addr,e),Wt(n,e)}}function ww(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Gt(n,e))return;t.uniform3iv(this.addr,e),Wt(n,e)}}function Aw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Gt(n,e))return;t.uniform4iv(this.addr,e),Wt(n,e)}}function Cw(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function Rw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Gt(n,e))return;t.uniform2uiv(this.addr,e),Wt(n,e)}}function bw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Gt(n,e))return;t.uniform3uiv(this.addr,e),Wt(n,e)}}function Pw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Gt(n,e))return;t.uniform4uiv(this.addr,e),Wt(n,e)}}function Lw(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?(Wd.compareFunction=n.isReversedDepthBuffer()?qh:Yh,s=Wd):s=Pv,n.setTexture2D(e||s,r)}function Iw(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||Iv,r)}function Dw(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||Dv,r)}function Nw(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||Lv,r)}function Uw(t){switch(t){case 5126:return gw;case 35664:return _w;case 35665:return vw;case 35666:return xw;case 35674:return yw;case 35675:return Sw;case 35676:return Mw;case 5124:case 35670:return Ew;case 35667:case 35671:return Tw;case 35668:case 35672:return ww;case 35669:case 35673:return Aw;case 5125:return Cw;case 36294:return Rw;case 36295:return bw;case 36296:return Pw;case 35678:case 36198:case 36298:case 36306:case 35682:return Lw;case 35679:case 36299:case 36307:return Iw;case 35680:case 36300:case 36308:case 36293:return Dw;case 36289:case 36303:case 36311:case 36292:return Nw}}function Fw(t,e){t.uniform1fv(this.addr,e)}function Ow(t,e){const n=ya(e,this.size,2);t.uniform2fv(this.addr,n)}function kw(t,e){const n=ya(e,this.size,3);t.uniform3fv(this.addr,n)}function Bw(t,e){const n=ya(e,this.size,4);t.uniform4fv(this.addr,n)}function zw(t,e){const n=ya(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function Vw(t,e){const n=ya(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function Hw(t,e){const n=ya(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function Gw(t,e){t.uniform1iv(this.addr,e)}function Ww(t,e){t.uniform2iv(this.addr,e)}function Xw(t,e){t.uniform3iv(this.addr,e)}function jw(t,e){t.uniform4iv(this.addr,e)}function Yw(t,e){t.uniform1uiv(this.addr,e)}function qw(t,e){t.uniform2uiv(this.addr,e)}function $w(t,e){t.uniform3uiv(this.addr,e)}function Kw(t,e){t.uniform4uiv(this.addr,e)}function Zw(t,e,n){const i=this.cache,r=e.length,s=Gc(n,r);Gt(i,s)||(t.uniform1iv(this.addr,s),Wt(i,s));let a;this.type===t.SAMPLER_2D_SHADOW?a=Wd:a=Pv;for(let o=0;o!==r;++o)n.setTexture2D(e[o]||a,s[o])}function Qw(t,e,n){const i=this.cache,r=e.length,s=Gc(n,r);Gt(i,s)||(t.uniform1iv(this.addr,s),Wt(i,s));for(let a=0;a!==r;++a)n.setTexture3D(e[a]||Iv,s[a])}function Jw(t,e,n){const i=this.cache,r=e.length,s=Gc(n,r);Gt(i,s)||(t.uniform1iv(this.addr,s),Wt(i,s));for(let a=0;a!==r;++a)n.setTextureCube(e[a]||Dv,s[a])}function eA(t,e,n){const i=this.cache,r=e.length,s=Gc(n,r);Gt(i,s)||(t.uniform1iv(this.addr,s),Wt(i,s));for(let a=0;a!==r;++a)n.setTexture2DArray(e[a]||Lv,s[a])}function tA(t){switch(t){case 5126:return Fw;case 35664:return Ow;case 35665:return kw;case 35666:return Bw;case 35674:return zw;case 35675:return Vw;case 35676:return Hw;case 5124:case 35670:return Gw;case 35667:case 35671:return Ww;case 35668:case 35672:return Xw;case 35669:case 35673:return jw;case 5125:return Yw;case 36294:return qw;case 36295:return $w;case 36296:return Kw;case 35678:case 36198:case 36298:case 36306:case 35682:return Zw;case 35679:case 36299:case 36307:return Qw;case 35680:case 36300:case 36308:case 36293:return Jw;case 36289:case 36303:case 36311:case 36292:return eA}}class nA{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=Uw(n.type)}}class iA{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=tA(n.type)}}class rA{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,n[o.id],i)}}}const Ku=/(\w+)(\])?(\[|\.)?/g;function mg(t,e){t.seq.push(e),t.map[e.id]=e}function sA(t,e,n){const i=t.name,r=i.length;for(Ku.lastIndex=0;;){const s=Ku.exec(i),a=Ku.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){mg(n,c===void 0?new nA(o,t,e):new iA(o,t,e));break}else{let h=n.map[o];h===void 0&&(h=new rA(o),mg(n,h)),n=h}}}class Xl{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){const o=e.getActiveUniform(n,a),l=e.getUniformLocation(n,o.name);sA(o,l,this)}const r=[],s=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(a):s.push(a);r.length>0&&(this.seq=r.concat(s))}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,a=n.length;s!==a;++s){const o=n[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in n&&i.push(a)}return i}}function gg(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const aA=37297;let oA=0;function lA(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${n[a]}`)}return i.join(`
`)}const _g=new We;function cA(t){nt._getMatrix(_g,nt.workingColorSpace,t);const e=`mat3( ${_g.elements.map(n=>n.toFixed(4))} )`;switch(nt.getTransfer(t)){case Sc:return[e,"LinearTransferOETF"];case pt:return[e,"sRGBTransferOETF"];default:return ke("WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function vg(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),s=(t.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return n.toUpperCase()+`

`+s+`

`+lA(t.getShaderSource(e),o)}else return s}function uA(t,e){const n=cA(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}const fA={[Z_]:"Linear",[Q_]:"Reinhard",[J_]:"Cineon",[ev]:"ACESFilmic",[nv]:"AgX",[iv]:"Neutral",[tv]:"Custom"};function dA(t,e){const n=fA[e];return n===void 0?(ke("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+t+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Tl=new H;function hA(){nt.getLuminanceCoefficients(Tl);const t=Tl.x.toFixed(4),e=Tl.y.toFixed(4),n=Tl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function pA(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Xa).join(`
`)}function mA(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function gA(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),a=s.name;let o=1;s.type===t.FLOAT_MAT2&&(o=2),s.type===t.FLOAT_MAT3&&(o=3),s.type===t.FLOAT_MAT4&&(o=4),n[a]={type:s.type,location:t.getAttribLocation(e,a),locationSize:o}}return n}function Xa(t){return t!==""}function xg(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function yg(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const _A=/^[ \t]*#include +<([\w\d./]+)>/gm;function Xd(t){return t.replace(_A,xA)}const vA=new Map;function xA(t,e){let n=Ze[e];if(n===void 0){const i=vA.get(e);if(i!==void 0)n=Ze[i],ke('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Xd(n)}const yA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Sg(t){return t.replace(yA,SA)}function SA(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Mg(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const MA={[zl]:"SHADOWMAP_TYPE_PCF",[Wa]:"SHADOWMAP_TYPE_VSM"};function EA(t){return MA[t.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const TA={[rs]:"ENVMAP_TYPE_CUBE",[fa]:"ENVMAP_TYPE_CUBE",[Vc]:"ENVMAP_TYPE_CUBE_UV"};function wA(t){return t.envMap===!1?"ENVMAP_TYPE_CUBE":TA[t.envMapMode]||"ENVMAP_TYPE_CUBE"}const AA={[fa]:"ENVMAP_MODE_REFRACTION"};function CA(t){return t.envMap===!1?"ENVMAP_MODE_REFLECTION":AA[t.envMapMode]||"ENVMAP_MODE_REFLECTION"}const RA={[K_]:"ENVMAP_BLENDING_MULTIPLY",[qS]:"ENVMAP_BLENDING_MIX",[$S]:"ENVMAP_BLENDING_ADD"};function bA(t){return t.envMap===!1?"ENVMAP_BLENDING_NONE":RA[t.combine]||"ENVMAP_BLENDING_NONE"}function PA(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function LA(t,e,n,i){const r=t.getContext(),s=n.defines;let a=n.vertexShader,o=n.fragmentShader;const l=EA(n),c=wA(n),d=CA(n),h=bA(n),u=PA(n),p=pA(n),v=mA(s),E=r.createProgram();let g,f,m=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(g=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v].filter(Xa).join(`
`),g.length>0&&(g+=`
`),f=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v].filter(Xa).join(`
`),f.length>0&&(f+=`
`)):(g=[Mg(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+d:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexNormals?"#define HAS_NORMAL":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Xa).join(`
`),f=[Mg(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+d:"",n.envMap?"#define "+h:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas||n.batchingColor?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Si?"#define TONE_MAPPING":"",n.toneMapping!==Si?Ze.tonemapping_pars_fragment:"",n.toneMapping!==Si?dA("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Ze.colorspace_pars_fragment,uA("linearToOutputTexel",n.outputColorSpace),hA(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Xa).join(`
`)),a=Xd(a),a=xg(a,n),a=yg(a,n),o=Xd(o),o=xg(o,n),o=yg(o,n),a=Sg(a),o=Sg(o),n.isRawShaderMaterial!==!0&&(m=`#version 300 es
`,g=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,f=["#define varying in",n.glslVersion===bm?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===bm?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const _=m+g+a,M=m+f+o,R=gg(r,r.VERTEX_SHADER,_),T=gg(r,r.FRAGMENT_SHADER,M);r.attachShader(E,R),r.attachShader(E,T),n.index0AttributeName!==void 0?r.bindAttribLocation(E,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(E,0,"position"),r.linkProgram(E);function C(P){if(t.debug.checkShaderErrors){const N=r.getProgramInfoLog(E)||"",X=r.getShaderInfoLog(R)||"",q=r.getShaderInfoLog(T)||"",D=N.trim(),k=X.trim(),z=q.trim();let B=!0,Y=!0;if(r.getProgramParameter(E,r.LINK_STATUS)===!1)if(B=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,E,R,T);else{const Q=vg(r,R,"vertex"),he=vg(r,T,"fragment");tt("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(E,r.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+D+`
`+Q+`
`+he)}else D!==""?ke("WebGLProgram: Program Info Log:",D):(k===""||z==="")&&(Y=!1);Y&&(P.diagnostics={runnable:B,programLog:D,vertexShader:{log:k,prefix:g},fragmentShader:{log:z,prefix:f}})}r.deleteShader(R),r.deleteShader(T),x=new Xl(r,E),A=gA(r,E)}let x;this.getUniforms=function(){return x===void 0&&C(this),x};let A;this.getAttributes=function(){return A===void 0&&C(this),A};let b=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=r.getProgramParameter(E,aA)),b},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(E),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=oA++,this.cacheKey=e,this.usedTimes=1,this.program=E,this.vertexShader=R,this.fragmentShader=T,this}let IA=0;class DA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new NA(e),n.set(e,i)),i}}class NA{constructor(e){this.id=IA++,this.code=e,this.usedTimes=0}}function UA(t){return t===ss||t===vc||t===xc}function FA(t,e,n,i,r,s){const a=new Zh,o=new DA,l=new Set,c=[],d=new Map,h=i.logarithmicDepthBuffer;let u=i.precision;const p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(x){return l.add(x),x===0?"uv":`uv${x}`}function E(x,A,b,P,N,X){const q=P.fog,D=N.geometry,k=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?P.environment:null,z=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,B=e.get(x.envMap||k,z),Y=B&&B.mapping===Vc?B.image.height:null,Q=p[x.type];x.precision!==null&&(u=i.getMaxPrecision(x.precision),u!==x.precision&&ke("WebGLProgram.getParameters:",x.precision,"not supported, using",u,"instead."));const he=D.morphAttributes.position||D.morphAttributes.normal||D.morphAttributes.color,me=he!==void 0?he.length:0;let Ve=0;D.morphAttributes.position!==void 0&&(Ve=1),D.morphAttributes.normal!==void 0&&(Ve=2),D.morphAttributes.color!==void 0&&(Ve=3);let $e,De,V,te;if(Q){const ze=mi[Q];$e=ze.vertexShader,De=ze.fragmentShader}else $e=x.vertexShader,De=x.fragmentShader,o.update(x),V=o.getVertexShaderID(x),te=o.getFragmentShaderID(x);const se=t.getRenderTarget(),le=t.state.buffers.depth.getReversed(),Fe=N.isInstancedMesh===!0,we=N.isBatchedMesh===!0,je=!!x.map,Oe=!!x.matcap,fe=!!B,Ae=!!x.aoMap,Ce=!!x.lightMap,it=!!x.bumpMap,Re=!!x.normalMap,dt=!!x.displacementMap,L=!!x.emissiveMap,st=!!x.metalnessMap,He=!!x.roughnessMap,at=x.anisotropy>0,ce=x.clearcoat>0,ht=x.dispersion>0,w=x.iridescence>0,y=x.sheen>0,O=x.transmission>0,Z=at&&!!x.anisotropyMap,ne=ce&&!!x.clearcoatMap,pe=ce&&!!x.clearcoatNormalMap,ue=ce&&!!x.clearcoatRoughnessMap,K=w&&!!x.iridescenceMap,J=w&&!!x.iridescenceThicknessMap,_e=y&&!!x.sheenColorMap,ge=y&&!!x.sheenRoughnessMap,ie=!!x.specularMap,re=!!x.specularColorMap,Ie=!!x.specularIntensityMap,Be=O&&!!x.transmissionMap,Ye=O&&!!x.thicknessMap,I=!!x.gradientMap,ae=!!x.alphaMap,$=x.alphaTest>0,ve=!!x.alphaHash,de=!!x.extensions;let ee=Si;x.toneMapped&&(se===null||se.isXRRenderTarget===!0)&&(ee=t.toneMapping);const Pe={shaderID:Q,shaderType:x.type,shaderName:x.name,vertexShader:$e,fragmentShader:De,defines:x.defines,customVertexShaderID:V,customFragmentShaderID:te,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:u,batching:we,batchingColor:we&&N._colorsTexture!==null,instancing:Fe,instancingColor:Fe&&N.instanceColor!==null,instancingMorph:Fe&&N.morphTexture!==null,outputColorSpace:se===null?t.outputColorSpace:se.isXRRenderTarget===!0?se.texture.colorSpace:nt.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:je,matcap:Oe,envMap:fe,envMapMode:fe&&B.mapping,envMapCubeUVHeight:Y,aoMap:Ae,lightMap:Ce,bumpMap:it,normalMap:Re,displacementMap:dt,emissiveMap:L,normalMapObjectSpace:Re&&x.normalMapType===QS,normalMapTangentSpace:Re&&x.normalMapType===zd,packedNormalMap:Re&&x.normalMapType===zd&&UA(x.normalMap.format),metalnessMap:st,roughnessMap:He,anisotropy:at,anisotropyMap:Z,clearcoat:ce,clearcoatMap:ne,clearcoatNormalMap:pe,clearcoatRoughnessMap:ue,dispersion:ht,iridescence:w,iridescenceMap:K,iridescenceThicknessMap:J,sheen:y,sheenColorMap:_e,sheenRoughnessMap:ge,specularMap:ie,specularColorMap:re,specularIntensityMap:Ie,transmission:O,transmissionMap:Be,thicknessMap:Ye,gradientMap:I,opaque:x.transparent===!1&&x.blending===ta&&x.alphaToCoverage===!1,alphaMap:ae,alphaTest:$,alphaHash:ve,combine:x.combine,mapUv:je&&v(x.map.channel),aoMapUv:Ae&&v(x.aoMap.channel),lightMapUv:Ce&&v(x.lightMap.channel),bumpMapUv:it&&v(x.bumpMap.channel),normalMapUv:Re&&v(x.normalMap.channel),displacementMapUv:dt&&v(x.displacementMap.channel),emissiveMapUv:L&&v(x.emissiveMap.channel),metalnessMapUv:st&&v(x.metalnessMap.channel),roughnessMapUv:He&&v(x.roughnessMap.channel),anisotropyMapUv:Z&&v(x.anisotropyMap.channel),clearcoatMapUv:ne&&v(x.clearcoatMap.channel),clearcoatNormalMapUv:pe&&v(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ue&&v(x.clearcoatRoughnessMap.channel),iridescenceMapUv:K&&v(x.iridescenceMap.channel),iridescenceThicknessMapUv:J&&v(x.iridescenceThicknessMap.channel),sheenColorMapUv:_e&&v(x.sheenColorMap.channel),sheenRoughnessMapUv:ge&&v(x.sheenRoughnessMap.channel),specularMapUv:ie&&v(x.specularMap.channel),specularColorMapUv:re&&v(x.specularColorMap.channel),specularIntensityMapUv:Ie&&v(x.specularIntensityMap.channel),transmissionMapUv:Be&&v(x.transmissionMap.channel),thicknessMapUv:Ye&&v(x.thicknessMap.channel),alphaMapUv:ae&&v(x.alphaMap.channel),vertexTangents:!!D.attributes.tangent&&(Re||at),vertexNormals:!!D.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!D.attributes.color&&D.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!D.attributes.uv&&(je||ae),fog:!!q,useFog:x.fog===!0,fogExp2:!!q&&q.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||D.attributes.normal===void 0&&Re===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:le,skinning:N.isSkinnedMesh===!0,morphTargets:D.morphAttributes.position!==void 0,morphNormals:D.morphAttributes.normal!==void 0,morphColors:D.morphAttributes.color!==void 0,morphTargetsCount:me,morphTextureStride:Ve,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numLightProbeGrids:X.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:x.dithering,shadowMapEnabled:t.shadowMap.enabled&&b.length>0,shadowMapType:t.shadowMap.type,toneMapping:ee,decodeVideoTexture:je&&x.map.isVideoTexture===!0&&nt.getTransfer(x.map.colorSpace)===pt,decodeVideoTextureEmissive:L&&x.emissiveMap.isVideoTexture===!0&&nt.getTransfer(x.emissiveMap.colorSpace)===pt,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Ui,flipSided:x.side===En,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:de&&x.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(de&&x.extensions.multiDraw===!0||we)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return Pe.vertexUv1s=l.has(1),Pe.vertexUv2s=l.has(2),Pe.vertexUv3s=l.has(3),l.clear(),Pe}function g(x){const A=[];if(x.shaderID?A.push(x.shaderID):(A.push(x.customVertexShaderID),A.push(x.customFragmentShaderID)),x.defines!==void 0)for(const b in x.defines)A.push(b),A.push(x.defines[b]);return x.isRawShaderMaterial===!1&&(f(A,x),m(A,x),A.push(t.outputColorSpace)),A.push(x.customProgramCacheKey),A.join()}function f(x,A){x.push(A.precision),x.push(A.outputColorSpace),x.push(A.envMapMode),x.push(A.envMapCubeUVHeight),x.push(A.mapUv),x.push(A.alphaMapUv),x.push(A.lightMapUv),x.push(A.aoMapUv),x.push(A.bumpMapUv),x.push(A.normalMapUv),x.push(A.displacementMapUv),x.push(A.emissiveMapUv),x.push(A.metalnessMapUv),x.push(A.roughnessMapUv),x.push(A.anisotropyMapUv),x.push(A.clearcoatMapUv),x.push(A.clearcoatNormalMapUv),x.push(A.clearcoatRoughnessMapUv),x.push(A.iridescenceMapUv),x.push(A.iridescenceThicknessMapUv),x.push(A.sheenColorMapUv),x.push(A.sheenRoughnessMapUv),x.push(A.specularMapUv),x.push(A.specularColorMapUv),x.push(A.specularIntensityMapUv),x.push(A.transmissionMapUv),x.push(A.thicknessMapUv),x.push(A.combine),x.push(A.fogExp2),x.push(A.sizeAttenuation),x.push(A.morphTargetsCount),x.push(A.morphAttributeCount),x.push(A.numDirLights),x.push(A.numPointLights),x.push(A.numSpotLights),x.push(A.numSpotLightMaps),x.push(A.numHemiLights),x.push(A.numRectAreaLights),x.push(A.numDirLightShadows),x.push(A.numPointLightShadows),x.push(A.numSpotLightShadows),x.push(A.numSpotLightShadowsWithMaps),x.push(A.numLightProbes),x.push(A.shadowMapType),x.push(A.toneMapping),x.push(A.numClippingPlanes),x.push(A.numClipIntersection),x.push(A.depthPacking)}function m(x,A){a.disableAll(),A.instancing&&a.enable(0),A.instancingColor&&a.enable(1),A.instancingMorph&&a.enable(2),A.matcap&&a.enable(3),A.envMap&&a.enable(4),A.normalMapObjectSpace&&a.enable(5),A.normalMapTangentSpace&&a.enable(6),A.clearcoat&&a.enable(7),A.iridescence&&a.enable(8),A.alphaTest&&a.enable(9),A.vertexColors&&a.enable(10),A.vertexAlphas&&a.enable(11),A.vertexUv1s&&a.enable(12),A.vertexUv2s&&a.enable(13),A.vertexUv3s&&a.enable(14),A.vertexTangents&&a.enable(15),A.anisotropy&&a.enable(16),A.alphaHash&&a.enable(17),A.batching&&a.enable(18),A.dispersion&&a.enable(19),A.batchingColor&&a.enable(20),A.gradientMap&&a.enable(21),A.packedNormalMap&&a.enable(22),A.vertexNormals&&a.enable(23),x.push(a.mask),a.disableAll(),A.fog&&a.enable(0),A.useFog&&a.enable(1),A.flatShading&&a.enable(2),A.logarithmicDepthBuffer&&a.enable(3),A.reversedDepthBuffer&&a.enable(4),A.skinning&&a.enable(5),A.morphTargets&&a.enable(6),A.morphNormals&&a.enable(7),A.morphColors&&a.enable(8),A.premultipliedAlpha&&a.enable(9),A.shadowMapEnabled&&a.enable(10),A.doubleSided&&a.enable(11),A.flipSided&&a.enable(12),A.useDepthPacking&&a.enable(13),A.dithering&&a.enable(14),A.transmission&&a.enable(15),A.sheen&&a.enable(16),A.opaque&&a.enable(17),A.pointsUvs&&a.enable(18),A.decodeVideoTexture&&a.enable(19),A.decodeVideoTextureEmissive&&a.enable(20),A.alphaToCoverage&&a.enable(21),A.numLightProbeGrids>0&&a.enable(22),x.push(a.mask)}function _(x){const A=p[x.type];let b;if(A){const P=mi[A];b=QM.clone(P.uniforms)}else b=x.uniforms;return b}function M(x,A){let b=d.get(A);return b!==void 0?++b.usedTimes:(b=new LA(t,A,x,r),c.push(b),d.set(A,b)),b}function R(x){if(--x.usedTimes===0){const A=c.indexOf(x);c[A]=c[c.length-1],c.pop(),d.delete(x.cacheKey),x.destroy()}}function T(x){o.remove(x)}function C(){o.dispose()}return{getParameters:E,getProgramCacheKey:g,getUniforms:_,acquireProgram:M,releaseProgram:R,releaseShaderCache:T,programs:c,dispose:C}}function OA(){let t=new WeakMap;function e(a){return t.has(a)}function n(a){let o=t.get(a);return o===void 0&&(o={},t.set(a,o)),o}function i(a){t.delete(a)}function r(a,o,l){t.get(a)[o]=l}function s(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:s}}function kA(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.materialVariant!==e.materialVariant?t.materialVariant-e.materialVariant:t.z!==e.z?t.z-e.z:t.id-e.id}function Eg(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function Tg(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function a(u){let p=0;return u.isInstancedMesh&&(p+=2),u.isSkinnedMesh&&(p+=1),p}function o(u,p,v,E,g,f){let m=t[e];return m===void 0?(m={id:u.id,object:u,geometry:p,material:v,materialVariant:a(u),groupOrder:E,renderOrder:u.renderOrder,z:g,group:f},t[e]=m):(m.id=u.id,m.object=u,m.geometry=p,m.material=v,m.materialVariant=a(u),m.groupOrder=E,m.renderOrder=u.renderOrder,m.z=g,m.group=f),e++,m}function l(u,p,v,E,g,f){const m=o(u,p,v,E,g,f);v.transmission>0?i.push(m):v.transparent===!0?r.push(m):n.push(m)}function c(u,p,v,E,g,f){const m=o(u,p,v,E,g,f);v.transmission>0?i.unshift(m):v.transparent===!0?r.unshift(m):n.unshift(m)}function d(u,p){n.length>1&&n.sort(u||kA),i.length>1&&i.sort(p||Eg),r.length>1&&r.sort(p||Eg)}function h(){for(let u=e,p=t.length;u<p;u++){const v=t[u];if(v.id===null)break;v.id=null,v.object=null,v.geometry=null,v.material=null,v.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:l,unshift:c,finish:h,sort:d}}function BA(){let t=new WeakMap;function e(i,r){const s=t.get(i);let a;return s===void 0?(a=new Tg,t.set(i,[a])):r>=s.length?(a=new Tg,s.push(a)):a=s[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}function zA(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new H,color:new ft};break;case"SpotLight":n={position:new H,direction:new H,color:new ft,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new H,color:new ft,distance:0,decay:0};break;case"HemisphereLight":n={direction:new H,skyColor:new ft,groundColor:new ft};break;case"RectAreaLight":n={color:new ft,position:new H,halfWidth:new H,halfHeight:new H};break}return t[e.id]=n,n}}}function VA(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let HA=0;function GA(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function WA(t){const e=new zA,n=VA(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new H);const r=new H,s=new bt,a=new bt;function o(c){let d=0,h=0,u=0;for(let A=0;A<9;A++)i.probe[A].set(0,0,0);let p=0,v=0,E=0,g=0,f=0,m=0,_=0,M=0,R=0,T=0,C=0;c.sort(GA);for(let A=0,b=c.length;A<b;A++){const P=c[A],N=P.color,X=P.intensity,q=P.distance;let D=null;if(P.shadow&&P.shadow.map&&(P.shadow.map.texture.format===ss?D=P.shadow.map.texture:D=P.shadow.map.depthTexture||P.shadow.map.texture),P.isAmbientLight)d+=N.r*X,h+=N.g*X,u+=N.b*X;else if(P.isLightProbe){for(let k=0;k<9;k++)i.probe[k].addScaledVector(P.sh.coefficients[k],X);C++}else if(P.isDirectionalLight){const k=e.get(P);if(k.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const z=P.shadow,B=n.get(P);B.shadowIntensity=z.intensity,B.shadowBias=z.bias,B.shadowNormalBias=z.normalBias,B.shadowRadius=z.radius,B.shadowMapSize=z.mapSize,i.directionalShadow[p]=B,i.directionalShadowMap[p]=D,i.directionalShadowMatrix[p]=P.shadow.matrix,m++}i.directional[p]=k,p++}else if(P.isSpotLight){const k=e.get(P);k.position.setFromMatrixPosition(P.matrixWorld),k.color.copy(N).multiplyScalar(X),k.distance=q,k.coneCos=Math.cos(P.angle),k.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),k.decay=P.decay,i.spot[E]=k;const z=P.shadow;if(P.map&&(i.spotLightMap[R]=P.map,R++,z.updateMatrices(P),P.castShadow&&T++),i.spotLightMatrix[E]=z.matrix,P.castShadow){const B=n.get(P);B.shadowIntensity=z.intensity,B.shadowBias=z.bias,B.shadowNormalBias=z.normalBias,B.shadowRadius=z.radius,B.shadowMapSize=z.mapSize,i.spotShadow[E]=B,i.spotShadowMap[E]=D,M++}E++}else if(P.isRectAreaLight){const k=e.get(P);k.color.copy(N).multiplyScalar(X),k.halfWidth.set(P.width*.5,0,0),k.halfHeight.set(0,P.height*.5,0),i.rectArea[g]=k,g++}else if(P.isPointLight){const k=e.get(P);if(k.color.copy(P.color).multiplyScalar(P.intensity),k.distance=P.distance,k.decay=P.decay,P.castShadow){const z=P.shadow,B=n.get(P);B.shadowIntensity=z.intensity,B.shadowBias=z.bias,B.shadowNormalBias=z.normalBias,B.shadowRadius=z.radius,B.shadowMapSize=z.mapSize,B.shadowCameraNear=z.camera.near,B.shadowCameraFar=z.camera.far,i.pointShadow[v]=B,i.pointShadowMap[v]=D,i.pointShadowMatrix[v]=P.shadow.matrix,_++}i.point[v]=k,v++}else if(P.isHemisphereLight){const k=e.get(P);k.skyColor.copy(P.color).multiplyScalar(X),k.groundColor.copy(P.groundColor).multiplyScalar(X),i.hemi[f]=k,f++}}g>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=xe.LTC_FLOAT_1,i.rectAreaLTC2=xe.LTC_FLOAT_2):(i.rectAreaLTC1=xe.LTC_HALF_1,i.rectAreaLTC2=xe.LTC_HALF_2)),i.ambient[0]=d,i.ambient[1]=h,i.ambient[2]=u;const x=i.hash;(x.directionalLength!==p||x.pointLength!==v||x.spotLength!==E||x.rectAreaLength!==g||x.hemiLength!==f||x.numDirectionalShadows!==m||x.numPointShadows!==_||x.numSpotShadows!==M||x.numSpotMaps!==R||x.numLightProbes!==C)&&(i.directional.length=p,i.spot.length=E,i.rectArea.length=g,i.point.length=v,i.hemi.length=f,i.directionalShadow.length=m,i.directionalShadowMap.length=m,i.pointShadow.length=_,i.pointShadowMap.length=_,i.spotShadow.length=M,i.spotShadowMap.length=M,i.directionalShadowMatrix.length=m,i.pointShadowMatrix.length=_,i.spotLightMatrix.length=M+R-T,i.spotLightMap.length=R,i.numSpotLightShadowsWithMaps=T,i.numLightProbes=C,x.directionalLength=p,x.pointLength=v,x.spotLength=E,x.rectAreaLength=g,x.hemiLength=f,x.numDirectionalShadows=m,x.numPointShadows=_,x.numSpotShadows=M,x.numSpotMaps=R,x.numLightProbes=C,i.version=HA++)}function l(c,d){let h=0,u=0,p=0,v=0,E=0;const g=d.matrixWorldInverse;for(let f=0,m=c.length;f<m;f++){const _=c[f];if(_.isDirectionalLight){const M=i.directional[h];M.direction.setFromMatrixPosition(_.matrixWorld),r.setFromMatrixPosition(_.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(g),h++}else if(_.isSpotLight){const M=i.spot[p];M.position.setFromMatrixPosition(_.matrixWorld),M.position.applyMatrix4(g),M.direction.setFromMatrixPosition(_.matrixWorld),r.setFromMatrixPosition(_.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(g),p++}else if(_.isRectAreaLight){const M=i.rectArea[v];M.position.setFromMatrixPosition(_.matrixWorld),M.position.applyMatrix4(g),a.identity(),s.copy(_.matrixWorld),s.premultiply(g),a.extractRotation(s),M.halfWidth.set(_.width*.5,0,0),M.halfHeight.set(0,_.height*.5,0),M.halfWidth.applyMatrix4(a),M.halfHeight.applyMatrix4(a),v++}else if(_.isPointLight){const M=i.point[u];M.position.setFromMatrixPosition(_.matrixWorld),M.position.applyMatrix4(g),u++}else if(_.isHemisphereLight){const M=i.hemi[E];M.direction.setFromMatrixPosition(_.matrixWorld),M.direction.transformDirection(g),E++}}}return{setup:o,setupView:l,state:i}}function wg(t){const e=new WA(t),n=[],i=[],r=[];function s(u){h.camera=u,n.length=0,i.length=0,r.length=0}function a(u){n.push(u)}function o(u){i.push(u)}function l(u){r.push(u)}function c(){e.setup(n)}function d(u){e.setupView(n,u)}const h={lightsArray:n,shadowsArray:i,lightProbeGridArray:r,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:h,setupLights:c,setupLightsView:d,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function XA(t){let e=new WeakMap;function n(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new wg(t),e.set(r,[o])):s>=a.length?(o=new wg(t),a.push(o)):o=a[s],o}function i(){e=new WeakMap}return{get:n,dispose:i}}const jA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,YA=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,qA=[new H(1,0,0),new H(-1,0,0),new H(0,1,0),new H(0,-1,0),new H(0,0,1),new H(0,0,-1)],$A=[new H(0,-1,0),new H(0,-1,0),new H(0,0,1),new H(0,0,-1),new H(0,-1,0),new H(0,-1,0)],Ag=new bt,ka=new H,Zu=new H;function KA(t,e,n){let i=new Jh;const r=new Xe,s=new Xe,a=new Dt,o=new iE,l=new rE,c={},d=n.maxTextureSize,h={[Ar]:En,[En]:Ar,[Ui]:Ui},u=new Ti({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Xe},radius:{value:4}},vertexShader:jA,fragmentShader:YA}),p=u.clone();p.defines.HORIZONTAL_PASS=1;const v=new qn;v.setAttribute("position",new oi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const E=new Dn(v,u),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=zl;let f=this.type;this.render=function(T,C,x){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||T.length===0)return;this.type===bS&&(ke("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=zl);const A=t.getRenderTarget(),b=t.getActiveCubeFace(),P=t.getActiveMipmapLevel(),N=t.state;N.setBlending(zi),N.buffers.depth.getReversed()===!0?N.buffers.color.setClear(0,0,0,0):N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);const X=f!==this.type;X&&C.traverse(function(q){q.material&&(Array.isArray(q.material)?q.material.forEach(D=>D.needsUpdate=!0):q.material.needsUpdate=!0)});for(let q=0,D=T.length;q<D;q++){const k=T[q],z=k.shadow;if(z===void 0){ke("WebGLShadowMap:",k,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;r.copy(z.mapSize);const B=z.getFrameExtents();r.multiply(B),s.copy(z.mapSize),(r.x>d||r.y>d)&&(r.x>d&&(s.x=Math.floor(d/B.x),r.x=s.x*B.x,z.mapSize.x=s.x),r.y>d&&(s.y=Math.floor(d/B.y),r.y=s.y*B.y,z.mapSize.y=s.y));const Y=t.state.buffers.depth.getReversed();if(z.camera._reversedDepth=Y,z.map===null||X===!0){if(z.map!==null&&(z.map.depthTexture!==null&&(z.map.depthTexture.dispose(),z.map.depthTexture=null),z.map.dispose()),this.type===Wa){if(k.isPointLight){ke("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}z.map=new Mi(r.x,r.y,{format:ss,type:Yi,minFilter:zt,magFilter:zt,generateMipmaps:!1}),z.map.texture.name=k.name+".shadowMap",z.map.depthTexture=new da(r.x,r.y,_i),z.map.depthTexture.name=k.name+".shadowMapDepth",z.map.depthTexture.format=qi,z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=Zt,z.map.depthTexture.magFilter=Zt}else k.isPointLight?(z.map=new bv(r.x),z.map.depthTexture=new KM(r.x,Ei)):(z.map=new Mi(r.x,r.y),z.map.depthTexture=new da(r.x,r.y,Ei)),z.map.depthTexture.name=k.name+".shadowMap",z.map.depthTexture.format=qi,this.type===zl?(z.map.depthTexture.compareFunction=Y?qh:Yh,z.map.depthTexture.minFilter=zt,z.map.depthTexture.magFilter=zt):(z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=Zt,z.map.depthTexture.magFilter=Zt);z.camera.updateProjectionMatrix()}const Q=z.map.isWebGLCubeRenderTarget?6:1;for(let he=0;he<Q;he++){if(z.map.isWebGLCubeRenderTarget)t.setRenderTarget(z.map,he),t.clear();else{he===0&&(t.setRenderTarget(z.map),t.clear());const me=z.getViewport(he);a.set(s.x*me.x,s.y*me.y,s.x*me.z,s.y*me.w),N.viewport(a)}if(k.isPointLight){const me=z.camera,Ve=z.matrix,$e=k.distance||me.far;$e!==me.far&&(me.far=$e,me.updateProjectionMatrix()),ka.setFromMatrixPosition(k.matrixWorld),me.position.copy(ka),Zu.copy(me.position),Zu.add(qA[he]),me.up.copy($A[he]),me.lookAt(Zu),me.updateMatrixWorld(),Ve.makeTranslation(-ka.x,-ka.y,-ka.z),Ag.multiplyMatrices(me.projectionMatrix,me.matrixWorldInverse),z._frustum.setFromProjectionMatrix(Ag,me.coordinateSystem,me.reversedDepth)}else z.updateMatrices(k);i=z.getFrustum(),M(C,x,z.camera,k,this.type)}z.isPointLightShadow!==!0&&this.type===Wa&&m(z,x),z.needsUpdate=!1}f=this.type,g.needsUpdate=!1,t.setRenderTarget(A,b,P)};function m(T,C){const x=e.update(E);u.defines.VSM_SAMPLES!==T.blurSamples&&(u.defines.VSM_SAMPLES=T.blurSamples,p.defines.VSM_SAMPLES=T.blurSamples,u.needsUpdate=!0,p.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new Mi(r.x,r.y,{format:ss,type:Yi})),u.uniforms.shadow_pass.value=T.map.depthTexture,u.uniforms.resolution.value=T.mapSize,u.uniforms.radius.value=T.radius,t.setRenderTarget(T.mapPass),t.clear(),t.renderBufferDirect(C,null,x,u,E,null),p.uniforms.shadow_pass.value=T.mapPass.texture,p.uniforms.resolution.value=T.mapSize,p.uniforms.radius.value=T.radius,t.setRenderTarget(T.map),t.clear(),t.renderBufferDirect(C,null,x,p,E,null)}function _(T,C,x,A){let b=null;const P=x.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(P!==void 0)b=P;else if(b=x.isPointLight===!0?l:o,t.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){const N=b.uuid,X=C.uuid;let q=c[N];q===void 0&&(q={},c[N]=q);let D=q[X];D===void 0&&(D=b.clone(),q[X]=D,C.addEventListener("dispose",R)),b=D}if(b.visible=C.visible,b.wireframe=C.wireframe,A===Wa?b.side=C.shadowSide!==null?C.shadowSide:C.side:b.side=C.shadowSide!==null?C.shadowSide:h[C.side],b.alphaMap=C.alphaMap,b.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,b.map=C.map,b.clipShadows=C.clipShadows,b.clippingPlanes=C.clippingPlanes,b.clipIntersection=C.clipIntersection,b.displacementMap=C.displacementMap,b.displacementScale=C.displacementScale,b.displacementBias=C.displacementBias,b.wireframeLinewidth=C.wireframeLinewidth,b.linewidth=C.linewidth,x.isPointLight===!0&&b.isMeshDistanceMaterial===!0){const N=t.properties.get(b);N.light=x}return b}function M(T,C,x,A,b){if(T.visible===!1)return;if(T.layers.test(C.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&b===Wa)&&(!T.frustumCulled||i.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,T.matrixWorld);const X=e.update(T),q=T.material;if(Array.isArray(q)){const D=X.groups;for(let k=0,z=D.length;k<z;k++){const B=D[k],Y=q[B.materialIndex];if(Y&&Y.visible){const Q=_(T,Y,A,b);T.onBeforeShadow(t,T,C,x,X,Q,B),t.renderBufferDirect(x,null,X,Q,T,B),T.onAfterShadow(t,T,C,x,X,Q,B)}}}else if(q.visible){const D=_(T,q,A,b);T.onBeforeShadow(t,T,C,x,X,D,null),t.renderBufferDirect(x,null,X,D,T,null),T.onAfterShadow(t,T,C,x,X,D,null)}}const N=T.children;for(let X=0,q=N.length;X<q;X++)M(N[X],C,x,A,b)}function R(T){T.target.removeEventListener("dispose",R);for(const x in c){const A=c[x],b=T.target.uuid;b in A&&(A[b].dispose(),delete A[b])}}}function ZA(t,e){function n(){let I=!1;const ae=new Dt;let $=null;const ve=new Dt(0,0,0,0);return{setMask:function(de){$!==de&&!I&&(t.colorMask(de,de,de,de),$=de)},setLocked:function(de){I=de},setClear:function(de,ee,Pe,ze,At){At===!0&&(de*=ze,ee*=ze,Pe*=ze),ae.set(de,ee,Pe,ze),ve.equals(ae)===!1&&(t.clearColor(de,ee,Pe,ze),ve.copy(ae))},reset:function(){I=!1,$=null,ve.set(-1,0,0,0)}}}function i(){let I=!1,ae=!1,$=null,ve=null,de=null;return{setReversed:function(ee){if(ae!==ee){const Pe=e.get("EXT_clip_control");ee?Pe.clipControlEXT(Pe.LOWER_LEFT_EXT,Pe.ZERO_TO_ONE_EXT):Pe.clipControlEXT(Pe.LOWER_LEFT_EXT,Pe.NEGATIVE_ONE_TO_ONE_EXT),ae=ee;const ze=de;de=null,this.setClear(ze)}},getReversed:function(){return ae},setTest:function(ee){ee?se(t.DEPTH_TEST):le(t.DEPTH_TEST)},setMask:function(ee){$!==ee&&!I&&(t.depthMask(ee),$=ee)},setFunc:function(ee){if(ae&&(ee=lM[ee]),ve!==ee){switch(ee){case td:t.depthFunc(t.NEVER);break;case nd:t.depthFunc(t.ALWAYS);break;case id:t.depthFunc(t.LESS);break;case ua:t.depthFunc(t.LEQUAL);break;case rd:t.depthFunc(t.EQUAL);break;case sd:t.depthFunc(t.GEQUAL);break;case ad:t.depthFunc(t.GREATER);break;case od:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}ve=ee}},setLocked:function(ee){I=ee},setClear:function(ee){de!==ee&&(de=ee,ae&&(ee=1-ee),t.clearDepth(ee))},reset:function(){I=!1,$=null,ve=null,de=null,ae=!1}}}function r(){let I=!1,ae=null,$=null,ve=null,de=null,ee=null,Pe=null,ze=null,At=null;return{setTest:function(ut){I||(ut?se(t.STENCIL_TEST):le(t.STENCIL_TEST))},setMask:function(ut){ae!==ut&&!I&&(t.stencilMask(ut),ae=ut)},setFunc:function(ut,On,Tn){($!==ut||ve!==On||de!==Tn)&&(t.stencilFunc(ut,On,Tn),$=ut,ve=On,de=Tn)},setOp:function(ut,On,Tn){(ee!==ut||Pe!==On||ze!==Tn)&&(t.stencilOp(ut,On,Tn),ee=ut,Pe=On,ze=Tn)},setLocked:function(ut){I=ut},setClear:function(ut){At!==ut&&(t.clearStencil(ut),At=ut)},reset:function(){I=!1,ae=null,$=null,ve=null,de=null,ee=null,Pe=null,ze=null,At=null}}}const s=new n,a=new i,o=new r,l=new WeakMap,c=new WeakMap;let d={},h={},u={},p=new WeakMap,v=[],E=null,g=!1,f=null,m=null,_=null,M=null,R=null,T=null,C=null,x=new ft(0,0,0),A=0,b=!1,P=null,N=null,X=null,q=null,D=null;const k=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let z=!1,B=0;const Y=t.getParameter(t.VERSION);Y.indexOf("WebGL")!==-1?(B=parseFloat(/^WebGL (\d)/.exec(Y)[1]),z=B>=1):Y.indexOf("OpenGL ES")!==-1&&(B=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),z=B>=2);let Q=null,he={};const me=t.getParameter(t.SCISSOR_BOX),Ve=t.getParameter(t.VIEWPORT),$e=new Dt().fromArray(me),De=new Dt().fromArray(Ve);function V(I,ae,$,ve){const de=new Uint8Array(4),ee=t.createTexture();t.bindTexture(I,ee),t.texParameteri(I,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(I,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Pe=0;Pe<$;Pe++)I===t.TEXTURE_3D||I===t.TEXTURE_2D_ARRAY?t.texImage3D(ae,0,t.RGBA,1,1,ve,0,t.RGBA,t.UNSIGNED_BYTE,de):t.texImage2D(ae+Pe,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,de);return ee}const te={};te[t.TEXTURE_2D]=V(t.TEXTURE_2D,t.TEXTURE_2D,1),te[t.TEXTURE_CUBE_MAP]=V(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),te[t.TEXTURE_2D_ARRAY]=V(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),te[t.TEXTURE_3D]=V(t.TEXTURE_3D,t.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),se(t.DEPTH_TEST),a.setFunc(ua),it(!1),Re(wm),se(t.CULL_FACE),Ae(zi);function se(I){d[I]!==!0&&(t.enable(I),d[I]=!0)}function le(I){d[I]!==!1&&(t.disable(I),d[I]=!1)}function Fe(I,ae){return u[I]!==ae?(t.bindFramebuffer(I,ae),u[I]=ae,I===t.DRAW_FRAMEBUFFER&&(u[t.FRAMEBUFFER]=ae),I===t.FRAMEBUFFER&&(u[t.DRAW_FRAMEBUFFER]=ae),!0):!1}function we(I,ae){let $=v,ve=!1;if(I){$=p.get(ae),$===void 0&&($=[],p.set(ae,$));const de=I.textures;if($.length!==de.length||$[0]!==t.COLOR_ATTACHMENT0){for(let ee=0,Pe=de.length;ee<Pe;ee++)$[ee]=t.COLOR_ATTACHMENT0+ee;$.length=de.length,ve=!0}}else $[0]!==t.BACK&&($[0]=t.BACK,ve=!0);ve&&t.drawBuffers($)}function je(I){return E!==I?(t.useProgram(I),E=I,!0):!1}const Oe={[Gr]:t.FUNC_ADD,[LS]:t.FUNC_SUBTRACT,[IS]:t.FUNC_REVERSE_SUBTRACT};Oe[DS]=t.MIN,Oe[NS]=t.MAX;const fe={[US]:t.ZERO,[FS]:t.ONE,[OS]:t.SRC_COLOR,[Jf]:t.SRC_ALPHA,[GS]:t.SRC_ALPHA_SATURATE,[VS]:t.DST_COLOR,[BS]:t.DST_ALPHA,[kS]:t.ONE_MINUS_SRC_COLOR,[ed]:t.ONE_MINUS_SRC_ALPHA,[HS]:t.ONE_MINUS_DST_COLOR,[zS]:t.ONE_MINUS_DST_ALPHA,[WS]:t.CONSTANT_COLOR,[XS]:t.ONE_MINUS_CONSTANT_COLOR,[jS]:t.CONSTANT_ALPHA,[YS]:t.ONE_MINUS_CONSTANT_ALPHA};function Ae(I,ae,$,ve,de,ee,Pe,ze,At,ut){if(I===zi){g===!0&&(le(t.BLEND),g=!1);return}if(g===!1&&(se(t.BLEND),g=!0),I!==PS){if(I!==f||ut!==b){if((m!==Gr||R!==Gr)&&(t.blendEquation(t.FUNC_ADD),m=Gr,R=Gr),ut)switch(I){case ta:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Qf:t.blendFunc(t.ONE,t.ONE);break;case Am:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Cm:t.blendFuncSeparate(t.DST_COLOR,t.ONE_MINUS_SRC_ALPHA,t.ZERO,t.ONE);break;default:tt("WebGLState: Invalid blending: ",I);break}else switch(I){case ta:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Qf:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE,t.ONE,t.ONE);break;case Am:tt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Cm:tt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:tt("WebGLState: Invalid blending: ",I);break}_=null,M=null,T=null,C=null,x.set(0,0,0),A=0,f=I,b=ut}return}de=de||ae,ee=ee||$,Pe=Pe||ve,(ae!==m||de!==R)&&(t.blendEquationSeparate(Oe[ae],Oe[de]),m=ae,R=de),($!==_||ve!==M||ee!==T||Pe!==C)&&(t.blendFuncSeparate(fe[$],fe[ve],fe[ee],fe[Pe]),_=$,M=ve,T=ee,C=Pe),(ze.equals(x)===!1||At!==A)&&(t.blendColor(ze.r,ze.g,ze.b,At),x.copy(ze),A=At),f=I,b=!1}function Ce(I,ae){I.side===Ui?le(t.CULL_FACE):se(t.CULL_FACE);let $=I.side===En;ae&&($=!$),it($),I.blending===ta&&I.transparent===!1?Ae(zi):Ae(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),a.setFunc(I.depthFunc),a.setTest(I.depthTest),a.setMask(I.depthWrite),s.setMask(I.colorWrite);const ve=I.stencilWrite;o.setTest(ve),ve&&(o.setMask(I.stencilWriteMask),o.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),o.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),L(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?se(t.SAMPLE_ALPHA_TO_COVERAGE):le(t.SAMPLE_ALPHA_TO_COVERAGE)}function it(I){P!==I&&(I?t.frontFace(t.CW):t.frontFace(t.CCW),P=I)}function Re(I){I!==CS?(se(t.CULL_FACE),I!==N&&(I===wm?t.cullFace(t.BACK):I===RS?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):le(t.CULL_FACE),N=I}function dt(I){I!==X&&(z&&t.lineWidth(I),X=I)}function L(I,ae,$){I?(se(t.POLYGON_OFFSET_FILL),(q!==ae||D!==$)&&(q=ae,D=$,a.getReversed()&&(ae=-ae),t.polygonOffset(ae,$))):le(t.POLYGON_OFFSET_FILL)}function st(I){I?se(t.SCISSOR_TEST):le(t.SCISSOR_TEST)}function He(I){I===void 0&&(I=t.TEXTURE0+k-1),Q!==I&&(t.activeTexture(I),Q=I)}function at(I,ae,$){$===void 0&&(Q===null?$=t.TEXTURE0+k-1:$=Q);let ve=he[$];ve===void 0&&(ve={type:void 0,texture:void 0},he[$]=ve),(ve.type!==I||ve.texture!==ae)&&(Q!==$&&(t.activeTexture($),Q=$),t.bindTexture(I,ae||te[I]),ve.type=I,ve.texture=ae)}function ce(){const I=he[Q];I!==void 0&&I.type!==void 0&&(t.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function ht(){try{t.compressedTexImage2D(...arguments)}catch(I){tt("WebGLState:",I)}}function w(){try{t.compressedTexImage3D(...arguments)}catch(I){tt("WebGLState:",I)}}function y(){try{t.texSubImage2D(...arguments)}catch(I){tt("WebGLState:",I)}}function O(){try{t.texSubImage3D(...arguments)}catch(I){tt("WebGLState:",I)}}function Z(){try{t.compressedTexSubImage2D(...arguments)}catch(I){tt("WebGLState:",I)}}function ne(){try{t.compressedTexSubImage3D(...arguments)}catch(I){tt("WebGLState:",I)}}function pe(){try{t.texStorage2D(...arguments)}catch(I){tt("WebGLState:",I)}}function ue(){try{t.texStorage3D(...arguments)}catch(I){tt("WebGLState:",I)}}function K(){try{t.texImage2D(...arguments)}catch(I){tt("WebGLState:",I)}}function J(){try{t.texImage3D(...arguments)}catch(I){tt("WebGLState:",I)}}function _e(I){return h[I]!==void 0?h[I]:t.getParameter(I)}function ge(I,ae){h[I]!==ae&&(t.pixelStorei(I,ae),h[I]=ae)}function ie(I){$e.equals(I)===!1&&(t.scissor(I.x,I.y,I.z,I.w),$e.copy(I))}function re(I){De.equals(I)===!1&&(t.viewport(I.x,I.y,I.z,I.w),De.copy(I))}function Ie(I,ae){let $=c.get(ae);$===void 0&&($=new WeakMap,c.set(ae,$));let ve=$.get(I);ve===void 0&&(ve=t.getUniformBlockIndex(ae,I.name),$.set(I,ve))}function Be(I,ae){const ve=c.get(ae).get(I);l.get(ae)!==ve&&(t.uniformBlockBinding(ae,ve,I.__bindingPointIndex),l.set(ae,ve))}function Ye(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),a.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),t.pixelStorei(t.PACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,!1),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,t.BROWSER_DEFAULT_WEBGL),t.pixelStorei(t.PACK_ROW_LENGTH,0),t.pixelStorei(t.PACK_SKIP_PIXELS,0),t.pixelStorei(t.PACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_ROW_LENGTH,0),t.pixelStorei(t.UNPACK_IMAGE_HEIGHT,0),t.pixelStorei(t.UNPACK_SKIP_PIXELS,0),t.pixelStorei(t.UNPACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_SKIP_IMAGES,0),d={},h={},Q=null,he={},u={},p=new WeakMap,v=[],E=null,g=!1,f=null,m=null,_=null,M=null,R=null,T=null,C=null,x=new ft(0,0,0),A=0,b=!1,P=null,N=null,X=null,q=null,D=null,$e.set(0,0,t.canvas.width,t.canvas.height),De.set(0,0,t.canvas.width,t.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:se,disable:le,bindFramebuffer:Fe,drawBuffers:we,useProgram:je,setBlending:Ae,setMaterial:Ce,setFlipSided:it,setCullFace:Re,setLineWidth:dt,setPolygonOffset:L,setScissorTest:st,activeTexture:He,bindTexture:at,unbindTexture:ce,compressedTexImage2D:ht,compressedTexImage3D:w,texImage2D:K,texImage3D:J,pixelStorei:ge,getParameter:_e,updateUBOMapping:Ie,uniformBlockBinding:Be,texStorage2D:pe,texStorage3D:ue,texSubImage2D:y,texSubImage3D:O,compressedTexSubImage2D:Z,compressedTexSubImage3D:ne,scissor:ie,viewport:re,reset:Ye}}function QA(t,e,n,i,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Xe,d=new WeakMap,h=new Set;let u;const p=new WeakMap;let v=!1;try{v=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(w,y){return v?new OffscreenCanvas(w,y):wo("canvas")}function g(w,y,O){let Z=1;const ne=ht(w);if((ne.width>O||ne.height>O)&&(Z=O/Math.max(ne.width,ne.height)),Z<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){const pe=Math.floor(Z*ne.width),ue=Math.floor(Z*ne.height);u===void 0&&(u=E(pe,ue));const K=y?E(pe,ue):u;return K.width=pe,K.height=ue,K.getContext("2d").drawImage(w,0,0,pe,ue),ke("WebGLRenderer: Texture has been resized from ("+ne.width+"x"+ne.height+") to ("+pe+"x"+ue+")."),K}else return"data"in w&&ke("WebGLRenderer: Image in DataTexture is too big ("+ne.width+"x"+ne.height+")."),w;return w}function f(w){return w.generateMipmaps}function m(w){t.generateMipmap(w)}function _(w){return w.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:w.isWebGL3DRenderTarget?t.TEXTURE_3D:w.isWebGLArrayRenderTarget||w.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function M(w,y,O,Z,ne,pe=!1){if(w!==null){if(t[w]!==void 0)return t[w];ke("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let ue;Z&&(ue=e.get("EXT_texture_norm16"),ue||ke("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let K=y;if(y===t.RED&&(O===t.FLOAT&&(K=t.R32F),O===t.HALF_FLOAT&&(K=t.R16F),O===t.UNSIGNED_BYTE&&(K=t.R8),O===t.UNSIGNED_SHORT&&ue&&(K=ue.R16_EXT),O===t.SHORT&&ue&&(K=ue.R16_SNORM_EXT)),y===t.RED_INTEGER&&(O===t.UNSIGNED_BYTE&&(K=t.R8UI),O===t.UNSIGNED_SHORT&&(K=t.R16UI),O===t.UNSIGNED_INT&&(K=t.R32UI),O===t.BYTE&&(K=t.R8I),O===t.SHORT&&(K=t.R16I),O===t.INT&&(K=t.R32I)),y===t.RG&&(O===t.FLOAT&&(K=t.RG32F),O===t.HALF_FLOAT&&(K=t.RG16F),O===t.UNSIGNED_BYTE&&(K=t.RG8),O===t.UNSIGNED_SHORT&&ue&&(K=ue.RG16_EXT),O===t.SHORT&&ue&&(K=ue.RG16_SNORM_EXT)),y===t.RG_INTEGER&&(O===t.UNSIGNED_BYTE&&(K=t.RG8UI),O===t.UNSIGNED_SHORT&&(K=t.RG16UI),O===t.UNSIGNED_INT&&(K=t.RG32UI),O===t.BYTE&&(K=t.RG8I),O===t.SHORT&&(K=t.RG16I),O===t.INT&&(K=t.RG32I)),y===t.RGB_INTEGER&&(O===t.UNSIGNED_BYTE&&(K=t.RGB8UI),O===t.UNSIGNED_SHORT&&(K=t.RGB16UI),O===t.UNSIGNED_INT&&(K=t.RGB32UI),O===t.BYTE&&(K=t.RGB8I),O===t.SHORT&&(K=t.RGB16I),O===t.INT&&(K=t.RGB32I)),y===t.RGBA_INTEGER&&(O===t.UNSIGNED_BYTE&&(K=t.RGBA8UI),O===t.UNSIGNED_SHORT&&(K=t.RGBA16UI),O===t.UNSIGNED_INT&&(K=t.RGBA32UI),O===t.BYTE&&(K=t.RGBA8I),O===t.SHORT&&(K=t.RGBA16I),O===t.INT&&(K=t.RGBA32I)),y===t.RGB&&(O===t.UNSIGNED_SHORT&&ue&&(K=ue.RGB16_EXT),O===t.SHORT&&ue&&(K=ue.RGB16_SNORM_EXT),O===t.UNSIGNED_INT_5_9_9_9_REV&&(K=t.RGB9_E5),O===t.UNSIGNED_INT_10F_11F_11F_REV&&(K=t.R11F_G11F_B10F)),y===t.RGBA){const J=pe?Sc:nt.getTransfer(ne);O===t.FLOAT&&(K=t.RGBA32F),O===t.HALF_FLOAT&&(K=t.RGBA16F),O===t.UNSIGNED_BYTE&&(K=J===pt?t.SRGB8_ALPHA8:t.RGBA8),O===t.UNSIGNED_SHORT&&ue&&(K=ue.RGBA16_EXT),O===t.SHORT&&ue&&(K=ue.RGBA16_SNORM_EXT),O===t.UNSIGNED_SHORT_4_4_4_4&&(K=t.RGBA4),O===t.UNSIGNED_SHORT_5_5_5_1&&(K=t.RGB5_A1)}return(K===t.R16F||K===t.R32F||K===t.RG16F||K===t.RG32F||K===t.RGBA16F||K===t.RGBA32F)&&e.get("EXT_color_buffer_float"),K}function R(w,y){let O;return w?y===null||y===Ei||y===Eo?O=t.DEPTH24_STENCIL8:y===_i?O=t.DEPTH32F_STENCIL8:y===Mo&&(O=t.DEPTH24_STENCIL8,ke("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===Ei||y===Eo?O=t.DEPTH_COMPONENT24:y===_i?O=t.DEPTH_COMPONENT32F:y===Mo&&(O=t.DEPTH_COMPONENT16),O}function T(w,y){return f(w)===!0||w.isFramebufferTexture&&w.minFilter!==Zt&&w.minFilter!==zt?Math.log2(Math.max(y.width,y.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?y.mipmaps.length:1}function C(w){const y=w.target;y.removeEventListener("dispose",C),A(y),y.isVideoTexture&&d.delete(y),y.isHTMLTexture&&h.delete(y)}function x(w){const y=w.target;y.removeEventListener("dispose",x),P(y)}function A(w){const y=i.get(w);if(y.__webglInit===void 0)return;const O=w.source,Z=p.get(O);if(Z){const ne=Z[y.__cacheKey];ne.usedTimes--,ne.usedTimes===0&&b(w),Object.keys(Z).length===0&&p.delete(O)}i.remove(w)}function b(w){const y=i.get(w);t.deleteTexture(y.__webglTexture);const O=w.source,Z=p.get(O);delete Z[y.__cacheKey],a.memory.textures--}function P(w){const y=i.get(w);if(w.depthTexture&&(w.depthTexture.dispose(),i.remove(w.depthTexture)),w.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(y.__webglFramebuffer[Z]))for(let ne=0;ne<y.__webglFramebuffer[Z].length;ne++)t.deleteFramebuffer(y.__webglFramebuffer[Z][ne]);else t.deleteFramebuffer(y.__webglFramebuffer[Z]);y.__webglDepthbuffer&&t.deleteRenderbuffer(y.__webglDepthbuffer[Z])}else{if(Array.isArray(y.__webglFramebuffer))for(let Z=0;Z<y.__webglFramebuffer.length;Z++)t.deleteFramebuffer(y.__webglFramebuffer[Z]);else t.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&t.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&t.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let Z=0;Z<y.__webglColorRenderbuffer.length;Z++)y.__webglColorRenderbuffer[Z]&&t.deleteRenderbuffer(y.__webglColorRenderbuffer[Z]);y.__webglDepthRenderbuffer&&t.deleteRenderbuffer(y.__webglDepthRenderbuffer)}const O=w.textures;for(let Z=0,ne=O.length;Z<ne;Z++){const pe=i.get(O[Z]);pe.__webglTexture&&(t.deleteTexture(pe.__webglTexture),a.memory.textures--),i.remove(O[Z])}i.remove(w)}let N=0;function X(){N=0}function q(){return N}function D(w){N=w}function k(){const w=N;return w>=r.maxTextures&&ke("WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+r.maxTextures),N+=1,w}function z(w){const y=[];return y.push(w.wrapS),y.push(w.wrapT),y.push(w.wrapR||0),y.push(w.magFilter),y.push(w.minFilter),y.push(w.anisotropy),y.push(w.internalFormat),y.push(w.format),y.push(w.type),y.push(w.generateMipmaps),y.push(w.premultiplyAlpha),y.push(w.flipY),y.push(w.unpackAlignment),y.push(w.colorSpace),y.join()}function B(w,y){const O=i.get(w);if(w.isVideoTexture&&at(w),w.isRenderTargetTexture===!1&&w.isExternalTexture!==!0&&w.version>0&&O.__version!==w.version){const Z=w.image;if(Z===null)ke("WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)ke("WebGLRenderer: Texture marked for update but image is incomplete");else{le(O,w,y);return}}else w.isExternalTexture&&(O.__webglTexture=w.sourceTexture?w.sourceTexture:null);n.bindTexture(t.TEXTURE_2D,O.__webglTexture,t.TEXTURE0+y)}function Y(w,y){const O=i.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&O.__version!==w.version){le(O,w,y);return}else w.isExternalTexture&&(O.__webglTexture=w.sourceTexture?w.sourceTexture:null);n.bindTexture(t.TEXTURE_2D_ARRAY,O.__webglTexture,t.TEXTURE0+y)}function Q(w,y){const O=i.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&O.__version!==w.version){le(O,w,y);return}n.bindTexture(t.TEXTURE_3D,O.__webglTexture,t.TEXTURE0+y)}function he(w,y){const O=i.get(w);if(w.isCubeDepthTexture!==!0&&w.version>0&&O.__version!==w.version){Fe(O,w,y);return}n.bindTexture(t.TEXTURE_CUBE_MAP,O.__webglTexture,t.TEXTURE0+y)}const me={[ld]:t.REPEAT,[ki]:t.CLAMP_TO_EDGE,[cd]:t.MIRRORED_REPEAT},Ve={[Zt]:t.NEAREST,[KS]:t.NEAREST_MIPMAP_NEAREST,[el]:t.NEAREST_MIPMAP_LINEAR,[zt]:t.LINEAR,[xu]:t.LINEAR_MIPMAP_NEAREST,[$r]:t.LINEAR_MIPMAP_LINEAR},$e={[JS]:t.NEVER,[rM]:t.ALWAYS,[eM]:t.LESS,[Yh]:t.LEQUAL,[tM]:t.EQUAL,[qh]:t.GEQUAL,[nM]:t.GREATER,[iM]:t.NOTEQUAL};function De(w,y){if(y.type===_i&&e.has("OES_texture_float_linear")===!1&&(y.magFilter===zt||y.magFilter===xu||y.magFilter===el||y.magFilter===$r||y.minFilter===zt||y.minFilter===xu||y.minFilter===el||y.minFilter===$r)&&ke("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(w,t.TEXTURE_WRAP_S,me[y.wrapS]),t.texParameteri(w,t.TEXTURE_WRAP_T,me[y.wrapT]),(w===t.TEXTURE_3D||w===t.TEXTURE_2D_ARRAY)&&t.texParameteri(w,t.TEXTURE_WRAP_R,me[y.wrapR]),t.texParameteri(w,t.TEXTURE_MAG_FILTER,Ve[y.magFilter]),t.texParameteri(w,t.TEXTURE_MIN_FILTER,Ve[y.minFilter]),y.compareFunction&&(t.texParameteri(w,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(w,t.TEXTURE_COMPARE_FUNC,$e[y.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===Zt||y.minFilter!==el&&y.minFilter!==$r||y.type===_i&&e.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||i.get(y).__currentAnisotropy){const O=e.get("EXT_texture_filter_anisotropic");t.texParameterf(w,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,r.getMaxAnisotropy())),i.get(y).__currentAnisotropy=y.anisotropy}}}function V(w,y){let O=!1;w.__webglInit===void 0&&(w.__webglInit=!0,y.addEventListener("dispose",C));const Z=y.source;let ne=p.get(Z);ne===void 0&&(ne={},p.set(Z,ne));const pe=z(y);if(pe!==w.__cacheKey){ne[pe]===void 0&&(ne[pe]={texture:t.createTexture(),usedTimes:0},a.memory.textures++,O=!0),ne[pe].usedTimes++;const ue=ne[w.__cacheKey];ue!==void 0&&(ne[w.__cacheKey].usedTimes--,ue.usedTimes===0&&b(y)),w.__cacheKey=pe,w.__webglTexture=ne[pe].texture}return O}function te(w,y,O){return Math.floor(Math.floor(w/O)/y)}function se(w,y,O,Z){const pe=w.updateRanges;if(pe.length===0)n.texSubImage2D(t.TEXTURE_2D,0,0,0,y.width,y.height,O,Z,y.data);else{pe.sort((ge,ie)=>ge.start-ie.start);let ue=0;for(let ge=1;ge<pe.length;ge++){const ie=pe[ue],re=pe[ge],Ie=ie.start+ie.count,Be=te(re.start,y.width,4),Ye=te(ie.start,y.width,4);re.start<=Ie+1&&Be===Ye&&te(re.start+re.count-1,y.width,4)===Be?ie.count=Math.max(ie.count,re.start+re.count-ie.start):(++ue,pe[ue]=re)}pe.length=ue+1;const K=n.getParameter(t.UNPACK_ROW_LENGTH),J=n.getParameter(t.UNPACK_SKIP_PIXELS),_e=n.getParameter(t.UNPACK_SKIP_ROWS);n.pixelStorei(t.UNPACK_ROW_LENGTH,y.width);for(let ge=0,ie=pe.length;ge<ie;ge++){const re=pe[ge],Ie=Math.floor(re.start/4),Be=Math.ceil(re.count/4),Ye=Ie%y.width,I=Math.floor(Ie/y.width),ae=Be,$=1;n.pixelStorei(t.UNPACK_SKIP_PIXELS,Ye),n.pixelStorei(t.UNPACK_SKIP_ROWS,I),n.texSubImage2D(t.TEXTURE_2D,0,Ye,I,ae,$,O,Z,y.data)}w.clearUpdateRanges(),n.pixelStorei(t.UNPACK_ROW_LENGTH,K),n.pixelStorei(t.UNPACK_SKIP_PIXELS,J),n.pixelStorei(t.UNPACK_SKIP_ROWS,_e)}}function le(w,y,O){let Z=t.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(Z=t.TEXTURE_2D_ARRAY),y.isData3DTexture&&(Z=t.TEXTURE_3D);const ne=V(w,y),pe=y.source;n.bindTexture(Z,w.__webglTexture,t.TEXTURE0+O);const ue=i.get(pe);if(pe.version!==ue.__version||ne===!0){if(n.activeTexture(t.TEXTURE0+O),(typeof ImageBitmap<"u"&&y.image instanceof ImageBitmap)===!1){const $=nt.getPrimaries(nt.workingColorSpace),ve=y.colorSpace===fr?null:nt.getPrimaries(y.colorSpace),de=y.colorSpace===fr||$===ve?t.NONE:t.BROWSER_DEFAULT_WEBGL;n.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,y.flipY),n.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),n.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,de)}n.pixelStorei(t.UNPACK_ALIGNMENT,y.unpackAlignment);let J=g(y.image,!1,r.maxTextureSize);J=ce(y,J);const _e=s.convert(y.format,y.colorSpace),ge=s.convert(y.type);let ie=M(y.internalFormat,_e,ge,y.normalized,y.colorSpace,y.isVideoTexture);De(Z,y);let re;const Ie=y.mipmaps,Be=y.isVideoTexture!==!0,Ye=ue.__version===void 0||ne===!0,I=pe.dataReady,ae=T(y,J);if(y.isDepthTexture)ie=R(y.format===Kr,y.type),Ye&&(Be?n.texStorage2D(t.TEXTURE_2D,1,ie,J.width,J.height):n.texImage2D(t.TEXTURE_2D,0,ie,J.width,J.height,0,_e,ge,null));else if(y.isDataTexture)if(Ie.length>0){Be&&Ye&&n.texStorage2D(t.TEXTURE_2D,ae,ie,Ie[0].width,Ie[0].height);for(let $=0,ve=Ie.length;$<ve;$++)re=Ie[$],Be?I&&n.texSubImage2D(t.TEXTURE_2D,$,0,0,re.width,re.height,_e,ge,re.data):n.texImage2D(t.TEXTURE_2D,$,ie,re.width,re.height,0,_e,ge,re.data);y.generateMipmaps=!1}else Be?(Ye&&n.texStorage2D(t.TEXTURE_2D,ae,ie,J.width,J.height),I&&se(y,J,_e,ge)):n.texImage2D(t.TEXTURE_2D,0,ie,J.width,J.height,0,_e,ge,J.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){Be&&Ye&&n.texStorage3D(t.TEXTURE_2D_ARRAY,ae,ie,Ie[0].width,Ie[0].height,J.depth);for(let $=0,ve=Ie.length;$<ve;$++)if(re=Ie[$],y.format!==ri)if(_e!==null)if(Be){if(I)if(y.layerUpdates.size>0){const de=ig(re.width,re.height,y.format,y.type);for(const ee of y.layerUpdates){const Pe=re.data.subarray(ee*de/re.data.BYTES_PER_ELEMENT,(ee+1)*de/re.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,$,0,0,ee,re.width,re.height,1,_e,Pe)}y.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,$,0,0,0,re.width,re.height,J.depth,_e,re.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,$,ie,re.width,re.height,J.depth,0,re.data,0,0);else ke("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Be?I&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,$,0,0,0,re.width,re.height,J.depth,_e,ge,re.data):n.texImage3D(t.TEXTURE_2D_ARRAY,$,ie,re.width,re.height,J.depth,0,_e,ge,re.data)}else{Be&&Ye&&n.texStorage2D(t.TEXTURE_2D,ae,ie,Ie[0].width,Ie[0].height);for(let $=0,ve=Ie.length;$<ve;$++)re=Ie[$],y.format!==ri?_e!==null?Be?I&&n.compressedTexSubImage2D(t.TEXTURE_2D,$,0,0,re.width,re.height,_e,re.data):n.compressedTexImage2D(t.TEXTURE_2D,$,ie,re.width,re.height,0,re.data):ke("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Be?I&&n.texSubImage2D(t.TEXTURE_2D,$,0,0,re.width,re.height,_e,ge,re.data):n.texImage2D(t.TEXTURE_2D,$,ie,re.width,re.height,0,_e,ge,re.data)}else if(y.isDataArrayTexture)if(Be){if(Ye&&n.texStorage3D(t.TEXTURE_2D_ARRAY,ae,ie,J.width,J.height,J.depth),I)if(y.layerUpdates.size>0){const $=ig(J.width,J.height,y.format,y.type);for(const ve of y.layerUpdates){const de=J.data.subarray(ve*$/J.data.BYTES_PER_ELEMENT,(ve+1)*$/J.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,ve,J.width,J.height,1,_e,ge,de)}y.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,J.width,J.height,J.depth,_e,ge,J.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,ie,J.width,J.height,J.depth,0,_e,ge,J.data);else if(y.isData3DTexture)Be?(Ye&&n.texStorage3D(t.TEXTURE_3D,ae,ie,J.width,J.height,J.depth),I&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,J.width,J.height,J.depth,_e,ge,J.data)):n.texImage3D(t.TEXTURE_3D,0,ie,J.width,J.height,J.depth,0,_e,ge,J.data);else if(y.isFramebufferTexture){if(Ye)if(Be)n.texStorage2D(t.TEXTURE_2D,ae,ie,J.width,J.height);else{let $=J.width,ve=J.height;for(let de=0;de<ae;de++)n.texImage2D(t.TEXTURE_2D,de,ie,$,ve,0,_e,ge,null),$>>=1,ve>>=1}}else if(y.isHTMLTexture){if("texElementImage2D"in t){const $=t.canvas;if($.hasAttribute("layoutsubtree")||$.setAttribute("layoutsubtree","true"),J.parentNode!==$){$.appendChild(J),h.add(y),$.onpaint=ze=>{const At=ze.changedElements;for(const ut of h)At.includes(ut.image)&&(ut.needsUpdate=!0)},$.requestPaint();return}const ve=0,de=t.RGBA,ee=t.RGBA,Pe=t.UNSIGNED_BYTE;t.texElementImage2D(t.TEXTURE_2D,ve,de,ee,Pe,J),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE)}}else if(Ie.length>0){if(Be&&Ye){const $=ht(Ie[0]);n.texStorage2D(t.TEXTURE_2D,ae,ie,$.width,$.height)}for(let $=0,ve=Ie.length;$<ve;$++)re=Ie[$],Be?I&&n.texSubImage2D(t.TEXTURE_2D,$,0,0,_e,ge,re):n.texImage2D(t.TEXTURE_2D,$,ie,_e,ge,re);y.generateMipmaps=!1}else if(Be){if(Ye){const $=ht(J);n.texStorage2D(t.TEXTURE_2D,ae,ie,$.width,$.height)}I&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,_e,ge,J)}else n.texImage2D(t.TEXTURE_2D,0,ie,_e,ge,J);f(y)&&m(Z),ue.__version=pe.version,y.onUpdate&&y.onUpdate(y)}w.__version=y.version}function Fe(w,y,O){if(y.image.length!==6)return;const Z=V(w,y),ne=y.source;n.bindTexture(t.TEXTURE_CUBE_MAP,w.__webglTexture,t.TEXTURE0+O);const pe=i.get(ne);if(ne.version!==pe.__version||Z===!0){n.activeTexture(t.TEXTURE0+O);const ue=nt.getPrimaries(nt.workingColorSpace),K=y.colorSpace===fr?null:nt.getPrimaries(y.colorSpace),J=y.colorSpace===fr||ue===K?t.NONE:t.BROWSER_DEFAULT_WEBGL;n.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,y.flipY),n.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),n.pixelStorei(t.UNPACK_ALIGNMENT,y.unpackAlignment),n.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,J);const _e=y.isCompressedTexture||y.image[0].isCompressedTexture,ge=y.image[0]&&y.image[0].isDataTexture,ie=[];for(let ee=0;ee<6;ee++)!_e&&!ge?ie[ee]=g(y.image[ee],!0,r.maxCubemapSize):ie[ee]=ge?y.image[ee].image:y.image[ee],ie[ee]=ce(y,ie[ee]);const re=ie[0],Ie=s.convert(y.format,y.colorSpace),Be=s.convert(y.type),Ye=M(y.internalFormat,Ie,Be,y.normalized,y.colorSpace),I=y.isVideoTexture!==!0,ae=pe.__version===void 0||Z===!0,$=ne.dataReady;let ve=T(y,re);De(t.TEXTURE_CUBE_MAP,y);let de;if(_e){I&&ae&&n.texStorage2D(t.TEXTURE_CUBE_MAP,ve,Ye,re.width,re.height);for(let ee=0;ee<6;ee++){de=ie[ee].mipmaps;for(let Pe=0;Pe<de.length;Pe++){const ze=de[Pe];y.format!==ri?Ie!==null?I?$&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Pe,0,0,ze.width,ze.height,Ie,ze.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Pe,Ye,ze.width,ze.height,0,ze.data):ke("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):I?$&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Pe,0,0,ze.width,ze.height,Ie,Be,ze.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Pe,Ye,ze.width,ze.height,0,Ie,Be,ze.data)}}}else{if(de=y.mipmaps,I&&ae){de.length>0&&ve++;const ee=ht(ie[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,ve,Ye,ee.width,ee.height)}for(let ee=0;ee<6;ee++)if(ge){I?$&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,ie[ee].width,ie[ee].height,Ie,Be,ie[ee].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,Ye,ie[ee].width,ie[ee].height,0,Ie,Be,ie[ee].data);for(let Pe=0;Pe<de.length;Pe++){const At=de[Pe].image[ee].image;I?$&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Pe+1,0,0,At.width,At.height,Ie,Be,At.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Pe+1,Ye,At.width,At.height,0,Ie,Be,At.data)}}else{I?$&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,Ie,Be,ie[ee]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,Ye,Ie,Be,ie[ee]);for(let Pe=0;Pe<de.length;Pe++){const ze=de[Pe];I?$&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Pe+1,0,0,Ie,Be,ze.image[ee]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Pe+1,Ye,Ie,Be,ze.image[ee])}}}f(y)&&m(t.TEXTURE_CUBE_MAP),pe.__version=ne.version,y.onUpdate&&y.onUpdate(y)}w.__version=y.version}function we(w,y,O,Z,ne,pe){const ue=s.convert(O.format,O.colorSpace),K=s.convert(O.type),J=M(O.internalFormat,ue,K,O.normalized,O.colorSpace),_e=i.get(y),ge=i.get(O);if(ge.__renderTarget=y,!_e.__hasExternalTextures){const ie=Math.max(1,y.width>>pe),re=Math.max(1,y.height>>pe);ne===t.TEXTURE_3D||ne===t.TEXTURE_2D_ARRAY?n.texImage3D(ne,pe,J,ie,re,y.depth,0,ue,K,null):n.texImage2D(ne,pe,J,ie,re,0,ue,K,null)}n.bindFramebuffer(t.FRAMEBUFFER,w),He(y)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,Z,ne,ge.__webglTexture,0,st(y)):(ne===t.TEXTURE_2D||ne>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&ne<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,Z,ne,ge.__webglTexture,pe),n.bindFramebuffer(t.FRAMEBUFFER,null)}function je(w,y,O){if(t.bindRenderbuffer(t.RENDERBUFFER,w),y.depthBuffer){const Z=y.depthTexture,ne=Z&&Z.isDepthTexture?Z.type:null,pe=R(y.stencilBuffer,ne),ue=y.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;He(y)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,st(y),pe,y.width,y.height):O?t.renderbufferStorageMultisample(t.RENDERBUFFER,st(y),pe,y.width,y.height):t.renderbufferStorage(t.RENDERBUFFER,pe,y.width,y.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,ue,t.RENDERBUFFER,w)}else{const Z=y.textures;for(let ne=0;ne<Z.length;ne++){const pe=Z[ne],ue=s.convert(pe.format,pe.colorSpace),K=s.convert(pe.type),J=M(pe.internalFormat,ue,K,pe.normalized,pe.colorSpace);He(y)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,st(y),J,y.width,y.height):O?t.renderbufferStorageMultisample(t.RENDERBUFFER,st(y),J,y.width,y.height):t.renderbufferStorage(t.RENDERBUFFER,J,y.width,y.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function Oe(w,y,O){const Z=y.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(t.FRAMEBUFFER,w),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ne=i.get(y.depthTexture);if(ne.__renderTarget=y,(!ne.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),Z){if(ne.__webglInit===void 0&&(ne.__webglInit=!0,y.depthTexture.addEventListener("dispose",C)),ne.__webglTexture===void 0){ne.__webglTexture=t.createTexture(),n.bindTexture(t.TEXTURE_CUBE_MAP,ne.__webglTexture),De(t.TEXTURE_CUBE_MAP,y.depthTexture);const _e=s.convert(y.depthTexture.format),ge=s.convert(y.depthTexture.type);let ie;y.depthTexture.format===qi?ie=t.DEPTH_COMPONENT24:y.depthTexture.format===Kr&&(ie=t.DEPTH24_STENCIL8);for(let re=0;re<6;re++)t.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,ie,y.width,y.height,0,_e,ge,null)}}else B(y.depthTexture,0);const pe=ne.__webglTexture,ue=st(y),K=Z?t.TEXTURE_CUBE_MAP_POSITIVE_X+O:t.TEXTURE_2D,J=y.depthTexture.format===Kr?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;if(y.depthTexture.format===qi)He(y)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,J,K,pe,0,ue):t.framebufferTexture2D(t.FRAMEBUFFER,J,K,pe,0);else if(y.depthTexture.format===Kr)He(y)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,J,K,pe,0,ue):t.framebufferTexture2D(t.FRAMEBUFFER,J,K,pe,0);else throw new Error("Unknown depthTexture format")}function fe(w){const y=i.get(w),O=w.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==w.depthTexture){const Z=w.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),Z){const ne=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,Z.removeEventListener("dispose",ne)};Z.addEventListener("dispose",ne),y.__depthDisposeCallback=ne}y.__boundDepthTexture=Z}if(w.depthTexture&&!y.__autoAllocateDepthBuffer)if(O)for(let Z=0;Z<6;Z++)Oe(y.__webglFramebuffer[Z],w,Z);else{const Z=w.texture.mipmaps;Z&&Z.length>0?Oe(y.__webglFramebuffer[0],w,0):Oe(y.__webglFramebuffer,w,0)}else if(O){y.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)if(n.bindFramebuffer(t.FRAMEBUFFER,y.__webglFramebuffer[Z]),y.__webglDepthbuffer[Z]===void 0)y.__webglDepthbuffer[Z]=t.createRenderbuffer(),je(y.__webglDepthbuffer[Z],w,!1);else{const ne=w.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,pe=y.__webglDepthbuffer[Z];t.bindRenderbuffer(t.RENDERBUFFER,pe),t.framebufferRenderbuffer(t.FRAMEBUFFER,ne,t.RENDERBUFFER,pe)}}else{const Z=w.texture.mipmaps;if(Z&&Z.length>0?n.bindFramebuffer(t.FRAMEBUFFER,y.__webglFramebuffer[0]):n.bindFramebuffer(t.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=t.createRenderbuffer(),je(y.__webglDepthbuffer,w,!1);else{const ne=w.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,pe=y.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,pe),t.framebufferRenderbuffer(t.FRAMEBUFFER,ne,t.RENDERBUFFER,pe)}}n.bindFramebuffer(t.FRAMEBUFFER,null)}function Ae(w,y,O){const Z=i.get(w);y!==void 0&&we(Z.__webglFramebuffer,w,w.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),O!==void 0&&fe(w)}function Ce(w){const y=w.texture,O=i.get(w),Z=i.get(y);w.addEventListener("dispose",x);const ne=w.textures,pe=w.isWebGLCubeRenderTarget===!0,ue=ne.length>1;if(ue||(Z.__webglTexture===void 0&&(Z.__webglTexture=t.createTexture()),Z.__version=y.version,a.memory.textures++),pe){O.__webglFramebuffer=[];for(let K=0;K<6;K++)if(y.mipmaps&&y.mipmaps.length>0){O.__webglFramebuffer[K]=[];for(let J=0;J<y.mipmaps.length;J++)O.__webglFramebuffer[K][J]=t.createFramebuffer()}else O.__webglFramebuffer[K]=t.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){O.__webglFramebuffer=[];for(let K=0;K<y.mipmaps.length;K++)O.__webglFramebuffer[K]=t.createFramebuffer()}else O.__webglFramebuffer=t.createFramebuffer();if(ue)for(let K=0,J=ne.length;K<J;K++){const _e=i.get(ne[K]);_e.__webglTexture===void 0&&(_e.__webglTexture=t.createTexture(),a.memory.textures++)}if(w.samples>0&&He(w)===!1){O.__webglMultisampledFramebuffer=t.createFramebuffer(),O.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let K=0;K<ne.length;K++){const J=ne[K];O.__webglColorRenderbuffer[K]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,O.__webglColorRenderbuffer[K]);const _e=s.convert(J.format,J.colorSpace),ge=s.convert(J.type),ie=M(J.internalFormat,_e,ge,J.normalized,J.colorSpace,w.isXRRenderTarget===!0),re=st(w);t.renderbufferStorageMultisample(t.RENDERBUFFER,re,ie,w.width,w.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+K,t.RENDERBUFFER,O.__webglColorRenderbuffer[K])}t.bindRenderbuffer(t.RENDERBUFFER,null),w.depthBuffer&&(O.__webglDepthRenderbuffer=t.createRenderbuffer(),je(O.__webglDepthRenderbuffer,w,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(pe){n.bindTexture(t.TEXTURE_CUBE_MAP,Z.__webglTexture),De(t.TEXTURE_CUBE_MAP,y);for(let K=0;K<6;K++)if(y.mipmaps&&y.mipmaps.length>0)for(let J=0;J<y.mipmaps.length;J++)we(O.__webglFramebuffer[K][J],w,y,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+K,J);else we(O.__webglFramebuffer[K],w,y,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+K,0);f(y)&&m(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(ue){for(let K=0,J=ne.length;K<J;K++){const _e=ne[K],ge=i.get(_e);let ie=t.TEXTURE_2D;(w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(ie=w.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(ie,ge.__webglTexture),De(ie,_e),we(O.__webglFramebuffer,w,_e,t.COLOR_ATTACHMENT0+K,ie,0),f(_e)&&m(ie)}n.unbindTexture()}else{let K=t.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(K=w.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(K,Z.__webglTexture),De(K,y),y.mipmaps&&y.mipmaps.length>0)for(let J=0;J<y.mipmaps.length;J++)we(O.__webglFramebuffer[J],w,y,t.COLOR_ATTACHMENT0,K,J);else we(O.__webglFramebuffer,w,y,t.COLOR_ATTACHMENT0,K,0);f(y)&&m(K),n.unbindTexture()}w.depthBuffer&&fe(w)}function it(w){const y=w.textures;for(let O=0,Z=y.length;O<Z;O++){const ne=y[O];if(f(ne)){const pe=_(w),ue=i.get(ne).__webglTexture;n.bindTexture(pe,ue),m(pe),n.unbindTexture()}}}const Re=[],dt=[];function L(w){if(w.samples>0){if(He(w)===!1){const y=w.textures,O=w.width,Z=w.height;let ne=t.COLOR_BUFFER_BIT;const pe=w.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ue=i.get(w),K=y.length>1;if(K)for(let _e=0;_e<y.length;_e++)n.bindFramebuffer(t.FRAMEBUFFER,ue.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+_e,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,ue.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+_e,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,ue.__webglMultisampledFramebuffer);const J=w.texture.mipmaps;J&&J.length>0?n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ue.__webglFramebuffer[0]):n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ue.__webglFramebuffer);for(let _e=0;_e<y.length;_e++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(ne|=t.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(ne|=t.STENCIL_BUFFER_BIT)),K){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,ue.__webglColorRenderbuffer[_e]);const ge=i.get(y[_e]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,ge,0)}t.blitFramebuffer(0,0,O,Z,0,0,O,Z,ne,t.NEAREST),l===!0&&(Re.length=0,dt.length=0,Re.push(t.COLOR_ATTACHMENT0+_e),w.depthBuffer&&w.resolveDepthBuffer===!1&&(Re.push(pe),dt.push(pe),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,dt)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,Re))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),K)for(let _e=0;_e<y.length;_e++){n.bindFramebuffer(t.FRAMEBUFFER,ue.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+_e,t.RENDERBUFFER,ue.__webglColorRenderbuffer[_e]);const ge=i.get(y[_e]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,ue.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+_e,t.TEXTURE_2D,ge,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ue.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.resolveDepthBuffer===!1&&l){const y=w.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[y])}}}function st(w){return Math.min(r.maxSamples,w.samples)}function He(w){const y=i.get(w);return w.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function at(w){const y=a.render.frame;d.get(w)!==y&&(d.set(w,y),w.update())}function ce(w,y){const O=w.colorSpace,Z=w.format,ne=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||O!==yc&&O!==fr&&(nt.getTransfer(O)===pt?(Z!==ri||ne!==Pn)&&ke("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):tt("WebGLTextures: Unsupported texture color space:",O)),y}function ht(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(c.width=w.naturalWidth||w.width,c.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(c.width=w.displayWidth,c.height=w.displayHeight):(c.width=w.width,c.height=w.height),c}this.allocateTextureUnit=k,this.resetTextureUnits=X,this.getTextureUnits=q,this.setTextureUnits=D,this.setTexture2D=B,this.setTexture2DArray=Y,this.setTexture3D=Q,this.setTextureCube=he,this.rebindTextures=Ae,this.setupRenderTarget=Ce,this.updateRenderTargetMipmap=it,this.updateMultisampleRenderTarget=L,this.setupDepthRenderbuffer=fe,this.setupFrameBufferTexture=we,this.useMultisampledRTT=He,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function JA(t,e){function n(i,r=fr){let s;const a=nt.getTransfer(r);if(i===Pn)return t.UNSIGNED_BYTE;if(i===Hh)return t.UNSIGNED_SHORT_4_4_4_4;if(i===Gh)return t.UNSIGNED_SHORT_5_5_5_1;if(i===ov)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===lv)return t.UNSIGNED_INT_10F_11F_11F_REV;if(i===sv)return t.BYTE;if(i===av)return t.SHORT;if(i===Mo)return t.UNSIGNED_SHORT;if(i===Vh)return t.INT;if(i===Ei)return t.UNSIGNED_INT;if(i===_i)return t.FLOAT;if(i===Yi)return t.HALF_FLOAT;if(i===cv)return t.ALPHA;if(i===uv)return t.RGB;if(i===ri)return t.RGBA;if(i===qi)return t.DEPTH_COMPONENT;if(i===Kr)return t.DEPTH_STENCIL;if(i===fv)return t.RED;if(i===Wh)return t.RED_INTEGER;if(i===ss)return t.RG;if(i===Xh)return t.RG_INTEGER;if(i===jh)return t.RGBA_INTEGER;if(i===Vl||i===Hl||i===Gl||i===Wl)if(a===pt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Vl)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Hl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Gl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Wl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Vl)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Hl)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Gl)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Wl)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===ud||i===fd||i===dd||i===hd)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===ud)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===fd)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===dd)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===hd)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===pd||i===md||i===gd||i===_d||i===vd||i===vc||i===xd)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===pd||i===md)return a===pt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===gd)return a===pt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===_d)return s.COMPRESSED_R11_EAC;if(i===vd)return s.COMPRESSED_SIGNED_R11_EAC;if(i===vc)return s.COMPRESSED_RG11_EAC;if(i===xd)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===yd||i===Sd||i===Md||i===Ed||i===Td||i===wd||i===Ad||i===Cd||i===Rd||i===bd||i===Pd||i===Ld||i===Id||i===Dd)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===yd)return a===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Sd)return a===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Md)return a===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Ed)return a===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Td)return a===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===wd)return a===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Ad)return a===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Cd)return a===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Rd)return a===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===bd)return a===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Pd)return a===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Ld)return a===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Id)return a===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Dd)return a===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Nd||i===Ud||i===Fd)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Nd)return a===pt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Ud)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Fd)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Od||i===kd||i===xc||i===Bd)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Od)return s.COMPRESSED_RED_RGTC1_EXT;if(i===kd)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===xc)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Bd)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Eo?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}const eC=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,tC=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class nC{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){const i=new Mv(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new Ti({vertexShader:eC,fragmentShader:tC,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Dn(new xa(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class iC extends cs{constructor(e,n){super();const i=this;let r=null,s=1,a=null,o="local-floor",l=1,c=null,d=null,h=null,u=null,p=null,v=null;const E=typeof XRWebGLBinding<"u",g=new nC,f={},m=n.getContextAttributes();let _=null,M=null;const R=[],T=[],C=new Xe;let x=null;const A=new bn;A.viewport=new Dt;const b=new bn;b.viewport=new Dt;const P=[A,b],N=new dE;let X=null,q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(V){let te=R[V];return te===void 0&&(te=new wu,R[V]=te),te.getTargetRaySpace()},this.getControllerGrip=function(V){let te=R[V];return te===void 0&&(te=new wu,R[V]=te),te.getGripSpace()},this.getHand=function(V){let te=R[V];return te===void 0&&(te=new wu,R[V]=te),te.getHandSpace()};function D(V){const te=T.indexOf(V.inputSource);if(te===-1)return;const se=R[te];se!==void 0&&(se.update(V.inputSource,V.frame,c||a),se.dispatchEvent({type:V.type,data:V.inputSource}))}function k(){r.removeEventListener("select",D),r.removeEventListener("selectstart",D),r.removeEventListener("selectend",D),r.removeEventListener("squeeze",D),r.removeEventListener("squeezestart",D),r.removeEventListener("squeezeend",D),r.removeEventListener("end",k),r.removeEventListener("inputsourceschange",z);for(let V=0;V<R.length;V++){const te=T[V];te!==null&&(T[V]=null,R[V].disconnect(te))}X=null,q=null,g.reset();for(const V in f)delete f[V];e.setRenderTarget(_),p=null,u=null,h=null,r=null,M=null,De.stop(),i.isPresenting=!1,e.setPixelRatio(x),e.setSize(C.width,C.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(V){s=V,i.isPresenting===!0&&ke("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(V){o=V,i.isPresenting===!0&&ke("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(V){c=V},this.getBaseLayer=function(){return u!==null?u:p},this.getBinding=function(){return h===null&&E&&(h=new XRWebGLBinding(r,n)),h},this.getFrame=function(){return v},this.getSession=function(){return r},this.setSession=async function(V){if(r=V,r!==null){if(_=e.getRenderTarget(),r.addEventListener("select",D),r.addEventListener("selectstart",D),r.addEventListener("selectend",D),r.addEventListener("squeeze",D),r.addEventListener("squeezestart",D),r.addEventListener("squeezeend",D),r.addEventListener("end",k),r.addEventListener("inputsourceschange",z),m.xrCompatible!==!0&&await n.makeXRCompatible(),x=e.getPixelRatio(),e.getSize(C),E&&"createProjectionLayer"in XRWebGLBinding.prototype){let se=null,le=null,Fe=null;m.depth&&(Fe=m.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,se=m.stencil?Kr:qi,le=m.stencil?Eo:Ei);const we={colorFormat:n.RGBA8,depthFormat:Fe,scaleFactor:s};h=this.getBinding(),u=h.createProjectionLayer(we),r.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),M=new Mi(u.textureWidth,u.textureHeight,{format:ri,type:Pn,depthTexture:new da(u.textureWidth,u.textureHeight,le,void 0,void 0,void 0,void 0,void 0,void 0,se),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1})}else{const se={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,n,se),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),M=new Mi(p.framebufferWidth,p.framebufferHeight,{format:ri,type:Pn,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),De.setContext(r),De.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function z(V){for(let te=0;te<V.removed.length;te++){const se=V.removed[te],le=T.indexOf(se);le>=0&&(T[le]=null,R[le].disconnect(se))}for(let te=0;te<V.added.length;te++){const se=V.added[te];let le=T.indexOf(se);if(le===-1){for(let we=0;we<R.length;we++)if(we>=T.length){T.push(se),le=we;break}else if(T[we]===null){T[we]=se,le=we;break}if(le===-1)break}const Fe=R[le];Fe&&Fe.connect(se)}}const B=new H,Y=new H;function Q(V,te,se){B.setFromMatrixPosition(te.matrixWorld),Y.setFromMatrixPosition(se.matrixWorld);const le=B.distanceTo(Y),Fe=te.projectionMatrix.elements,we=se.projectionMatrix.elements,je=Fe[14]/(Fe[10]-1),Oe=Fe[14]/(Fe[10]+1),fe=(Fe[9]+1)/Fe[5],Ae=(Fe[9]-1)/Fe[5],Ce=(Fe[8]-1)/Fe[0],it=(we[8]+1)/we[0],Re=je*Ce,dt=je*it,L=le/(-Ce+it),st=L*-Ce;if(te.matrixWorld.decompose(V.position,V.quaternion,V.scale),V.translateX(st),V.translateZ(L),V.matrixWorld.compose(V.position,V.quaternion,V.scale),V.matrixWorldInverse.copy(V.matrixWorld).invert(),Fe[10]===-1)V.projectionMatrix.copy(te.projectionMatrix),V.projectionMatrixInverse.copy(te.projectionMatrixInverse);else{const He=je+L,at=Oe+L,ce=Re-st,ht=dt+(le-st),w=fe*Oe/at*He,y=Ae*Oe/at*He;V.projectionMatrix.makePerspective(ce,ht,w,y,He,at),V.projectionMatrixInverse.copy(V.projectionMatrix).invert()}}function he(V,te){te===null?V.matrixWorld.copy(V.matrix):V.matrixWorld.multiplyMatrices(te.matrixWorld,V.matrix),V.matrixWorldInverse.copy(V.matrixWorld).invert()}this.updateCamera=function(V){if(r===null)return;let te=V.near,se=V.far;g.texture!==null&&(g.depthNear>0&&(te=g.depthNear),g.depthFar>0&&(se=g.depthFar)),N.near=b.near=A.near=te,N.far=b.far=A.far=se,(X!==N.near||q!==N.far)&&(r.updateRenderState({depthNear:N.near,depthFar:N.far}),X=N.near,q=N.far),N.layers.mask=V.layers.mask|6,A.layers.mask=N.layers.mask&-5,b.layers.mask=N.layers.mask&-3;const le=V.parent,Fe=N.cameras;he(N,le);for(let we=0;we<Fe.length;we++)he(Fe[we],le);Fe.length===2?Q(N,A,b):N.projectionMatrix.copy(A.projectionMatrix),me(V,N,le)};function me(V,te,se){se===null?V.matrix.copy(te.matrixWorld):(V.matrix.copy(se.matrixWorld),V.matrix.invert(),V.matrix.multiply(te.matrixWorld)),V.matrix.decompose(V.position,V.quaternion,V.scale),V.updateMatrixWorld(!0),V.projectionMatrix.copy(te.projectionMatrix),V.projectionMatrixInverse.copy(te.projectionMatrixInverse),V.isPerspectiveCamera&&(V.fov=Ao*2*Math.atan(1/V.projectionMatrix.elements[5]),V.zoom=1)}this.getCamera=function(){return N},this.getFoveation=function(){if(!(u===null&&p===null))return l},this.setFoveation=function(V){l=V,u!==null&&(u.fixedFoveation=V),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=V)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(N)},this.getCameraTexture=function(V){return f[V]};let Ve=null;function $e(V,te){if(d=te.getViewerPose(c||a),v=te,d!==null){const se=d.views;p!==null&&(e.setRenderTargetFramebuffer(M,p.framebuffer),e.setRenderTarget(M));let le=!1;se.length!==N.cameras.length&&(N.cameras.length=0,le=!0);for(let Oe=0;Oe<se.length;Oe++){const fe=se[Oe];let Ae=null;if(p!==null)Ae=p.getViewport(fe);else{const it=h.getViewSubImage(u,fe);Ae=it.viewport,Oe===0&&(e.setRenderTargetTextures(M,it.colorTexture,it.depthStencilTexture),e.setRenderTarget(M))}let Ce=P[Oe];Ce===void 0&&(Ce=new bn,Ce.layers.enable(Oe),Ce.viewport=new Dt,P[Oe]=Ce),Ce.matrix.fromArray(fe.transform.matrix),Ce.matrix.decompose(Ce.position,Ce.quaternion,Ce.scale),Ce.projectionMatrix.fromArray(fe.projectionMatrix),Ce.projectionMatrixInverse.copy(Ce.projectionMatrix).invert(),Ce.viewport.set(Ae.x,Ae.y,Ae.width,Ae.height),Oe===0&&(N.matrix.copy(Ce.matrix),N.matrix.decompose(N.position,N.quaternion,N.scale)),le===!0&&N.cameras.push(Ce)}const Fe=r.enabledFeatures;if(Fe&&Fe.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&E){h=i.getBinding();const Oe=h.getDepthInformation(se[0]);Oe&&Oe.isValid&&Oe.texture&&g.init(Oe,r.renderState)}if(Fe&&Fe.includes("camera-access")&&E){e.state.unbindTexture(),h=i.getBinding();for(let Oe=0;Oe<se.length;Oe++){const fe=se[Oe].camera;if(fe){let Ae=f[fe];Ae||(Ae=new Mv,f[fe]=Ae);const Ce=h.getCameraImage(fe);Ae.sourceTexture=Ce}}}}for(let se=0;se<R.length;se++){const le=T[se],Fe=R[se];le!==null&&Fe!==void 0&&Fe.update(le,te,c||a)}Ve&&Ve(V,te),te.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:te}),v=null}const De=new Cv;De.setAnimationLoop($e),this.setAnimationLoop=function(V){Ve=V},this.dispose=function(){}}}const rC=new bt,Nv=new We;Nv.set(-1,0,0,0,1,0,0,0,1);function sC(t,e){function n(g,f){g.matrixAutoUpdate===!0&&g.updateMatrix(),f.value.copy(g.matrix)}function i(g,f){f.color.getRGB(g.fogColor.value,Ev(t)),f.isFog?(g.fogNear.value=f.near,g.fogFar.value=f.far):f.isFogExp2&&(g.fogDensity.value=f.density)}function r(g,f,m,_,M){f.isNodeMaterial?f.uniformsNeedUpdate=!1:f.isMeshBasicMaterial?s(g,f):f.isMeshLambertMaterial?(s(g,f),f.envMap&&(g.envMapIntensity.value=f.envMapIntensity)):f.isMeshToonMaterial?(s(g,f),h(g,f)):f.isMeshPhongMaterial?(s(g,f),d(g,f),f.envMap&&(g.envMapIntensity.value=f.envMapIntensity)):f.isMeshStandardMaterial?(s(g,f),u(g,f),f.isMeshPhysicalMaterial&&p(g,f,M)):f.isMeshMatcapMaterial?(s(g,f),v(g,f)):f.isMeshDepthMaterial?s(g,f):f.isMeshDistanceMaterial?(s(g,f),E(g,f)):f.isMeshNormalMaterial?s(g,f):f.isLineBasicMaterial?(a(g,f),f.isLineDashedMaterial&&o(g,f)):f.isPointsMaterial?l(g,f,m,_):f.isSpriteMaterial?c(g,f):f.isShadowMaterial?(g.color.value.copy(f.color),g.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function s(g,f){g.opacity.value=f.opacity,f.color&&g.diffuse.value.copy(f.color),f.emissive&&g.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(g.map.value=f.map,n(f.map,g.mapTransform)),f.alphaMap&&(g.alphaMap.value=f.alphaMap,n(f.alphaMap,g.alphaMapTransform)),f.bumpMap&&(g.bumpMap.value=f.bumpMap,n(f.bumpMap,g.bumpMapTransform),g.bumpScale.value=f.bumpScale,f.side===En&&(g.bumpScale.value*=-1)),f.normalMap&&(g.normalMap.value=f.normalMap,n(f.normalMap,g.normalMapTransform),g.normalScale.value.copy(f.normalScale),f.side===En&&g.normalScale.value.negate()),f.displacementMap&&(g.displacementMap.value=f.displacementMap,n(f.displacementMap,g.displacementMapTransform),g.displacementScale.value=f.displacementScale,g.displacementBias.value=f.displacementBias),f.emissiveMap&&(g.emissiveMap.value=f.emissiveMap,n(f.emissiveMap,g.emissiveMapTransform)),f.specularMap&&(g.specularMap.value=f.specularMap,n(f.specularMap,g.specularMapTransform)),f.alphaTest>0&&(g.alphaTest.value=f.alphaTest);const m=e.get(f),_=m.envMap,M=m.envMapRotation;_&&(g.envMap.value=_,g.envMapRotation.value.setFromMatrix4(rC.makeRotationFromEuler(M)).transpose(),_.isCubeTexture&&_.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(Nv),g.reflectivity.value=f.reflectivity,g.ior.value=f.ior,g.refractionRatio.value=f.refractionRatio),f.lightMap&&(g.lightMap.value=f.lightMap,g.lightMapIntensity.value=f.lightMapIntensity,n(f.lightMap,g.lightMapTransform)),f.aoMap&&(g.aoMap.value=f.aoMap,g.aoMapIntensity.value=f.aoMapIntensity,n(f.aoMap,g.aoMapTransform))}function a(g,f){g.diffuse.value.copy(f.color),g.opacity.value=f.opacity,f.map&&(g.map.value=f.map,n(f.map,g.mapTransform))}function o(g,f){g.dashSize.value=f.dashSize,g.totalSize.value=f.dashSize+f.gapSize,g.scale.value=f.scale}function l(g,f,m,_){g.diffuse.value.copy(f.color),g.opacity.value=f.opacity,g.size.value=f.size*m,g.scale.value=_*.5,f.map&&(g.map.value=f.map,n(f.map,g.uvTransform)),f.alphaMap&&(g.alphaMap.value=f.alphaMap,n(f.alphaMap,g.alphaMapTransform)),f.alphaTest>0&&(g.alphaTest.value=f.alphaTest)}function c(g,f){g.diffuse.value.copy(f.color),g.opacity.value=f.opacity,g.rotation.value=f.rotation,f.map&&(g.map.value=f.map,n(f.map,g.mapTransform)),f.alphaMap&&(g.alphaMap.value=f.alphaMap,n(f.alphaMap,g.alphaMapTransform)),f.alphaTest>0&&(g.alphaTest.value=f.alphaTest)}function d(g,f){g.specular.value.copy(f.specular),g.shininess.value=Math.max(f.shininess,1e-4)}function h(g,f){f.gradientMap&&(g.gradientMap.value=f.gradientMap)}function u(g,f){g.metalness.value=f.metalness,f.metalnessMap&&(g.metalnessMap.value=f.metalnessMap,n(f.metalnessMap,g.metalnessMapTransform)),g.roughness.value=f.roughness,f.roughnessMap&&(g.roughnessMap.value=f.roughnessMap,n(f.roughnessMap,g.roughnessMapTransform)),f.envMap&&(g.envMapIntensity.value=f.envMapIntensity)}function p(g,f,m){g.ior.value=f.ior,f.sheen>0&&(g.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),g.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(g.sheenColorMap.value=f.sheenColorMap,n(f.sheenColorMap,g.sheenColorMapTransform)),f.sheenRoughnessMap&&(g.sheenRoughnessMap.value=f.sheenRoughnessMap,n(f.sheenRoughnessMap,g.sheenRoughnessMapTransform))),f.clearcoat>0&&(g.clearcoat.value=f.clearcoat,g.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(g.clearcoatMap.value=f.clearcoatMap,n(f.clearcoatMap,g.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,n(f.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(g.clearcoatNormalMap.value=f.clearcoatNormalMap,n(f.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===En&&g.clearcoatNormalScale.value.negate())),f.dispersion>0&&(g.dispersion.value=f.dispersion),f.iridescence>0&&(g.iridescence.value=f.iridescence,g.iridescenceIOR.value=f.iridescenceIOR,g.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(g.iridescenceMap.value=f.iridescenceMap,n(f.iridescenceMap,g.iridescenceMapTransform)),f.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=f.iridescenceThicknessMap,n(f.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),f.transmission>0&&(g.transmission.value=f.transmission,g.transmissionSamplerMap.value=m.texture,g.transmissionSamplerSize.value.set(m.width,m.height),f.transmissionMap&&(g.transmissionMap.value=f.transmissionMap,n(f.transmissionMap,g.transmissionMapTransform)),g.thickness.value=f.thickness,f.thicknessMap&&(g.thicknessMap.value=f.thicknessMap,n(f.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=f.attenuationDistance,g.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(g.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(g.anisotropyMap.value=f.anisotropyMap,n(f.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=f.specularIntensity,g.specularColor.value.copy(f.specularColor),f.specularColorMap&&(g.specularColorMap.value=f.specularColorMap,n(f.specularColorMap,g.specularColorMapTransform)),f.specularIntensityMap&&(g.specularIntensityMap.value=f.specularIntensityMap,n(f.specularIntensityMap,g.specularIntensityMapTransform))}function v(g,f){f.matcap&&(g.matcap.value=f.matcap)}function E(g,f){const m=e.get(f).light;g.referencePosition.value.setFromMatrixPosition(m.matrixWorld),g.nearDistance.value=m.shadow.camera.near,g.farDistance.value=m.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function aC(t,e,n,i){let r={},s={},a=[];const o=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(m,_){const M=_.program;i.uniformBlockBinding(m,M)}function c(m,_){let M=r[m.id];M===void 0&&(v(m),M=d(m),r[m.id]=M,m.addEventListener("dispose",g));const R=_.program;i.updateUBOMapping(m,R);const T=e.render.frame;s[m.id]!==T&&(u(m),s[m.id]=T)}function d(m){const _=h();m.__bindingPointIndex=_;const M=t.createBuffer(),R=m.__size,T=m.usage;return t.bindBuffer(t.UNIFORM_BUFFER,M),t.bufferData(t.UNIFORM_BUFFER,R,T),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,_,M),M}function h(){for(let m=0;m<o;m++)if(a.indexOf(m)===-1)return a.push(m),m;return tt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(m){const _=r[m.id],M=m.uniforms,R=m.__cache;t.bindBuffer(t.UNIFORM_BUFFER,_);for(let T=0,C=M.length;T<C;T++){const x=Array.isArray(M[T])?M[T]:[M[T]];for(let A=0,b=x.length;A<b;A++){const P=x[A];if(p(P,T,A,R)===!0){const N=P.__offset,X=Array.isArray(P.value)?P.value:[P.value];let q=0;for(let D=0;D<X.length;D++){const k=X[D],z=E(k);typeof k=="number"||typeof k=="boolean"?(P.__data[0]=k,t.bufferSubData(t.UNIFORM_BUFFER,N+q,P.__data)):k.isMatrix3?(P.__data[0]=k.elements[0],P.__data[1]=k.elements[1],P.__data[2]=k.elements[2],P.__data[3]=0,P.__data[4]=k.elements[3],P.__data[5]=k.elements[4],P.__data[6]=k.elements[5],P.__data[7]=0,P.__data[8]=k.elements[6],P.__data[9]=k.elements[7],P.__data[10]=k.elements[8],P.__data[11]=0):ArrayBuffer.isView(k)?P.__data.set(new k.constructor(k.buffer,k.byteOffset,P.__data.length)):(k.toArray(P.__data,q),q+=z.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,N,P.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function p(m,_,M,R){const T=m.value,C=_+"_"+M;if(R[C]===void 0)return typeof T=="number"||typeof T=="boolean"?R[C]=T:ArrayBuffer.isView(T)?R[C]=T.slice():R[C]=T.clone(),!0;{const x=R[C];if(typeof T=="number"||typeof T=="boolean"){if(x!==T)return R[C]=T,!0}else{if(ArrayBuffer.isView(T))return!0;if(x.equals(T)===!1)return x.copy(T),!0}}return!1}function v(m){const _=m.uniforms;let M=0;const R=16;for(let C=0,x=_.length;C<x;C++){const A=Array.isArray(_[C])?_[C]:[_[C]];for(let b=0,P=A.length;b<P;b++){const N=A[b],X=Array.isArray(N.value)?N.value:[N.value];for(let q=0,D=X.length;q<D;q++){const k=X[q],z=E(k),B=M%R,Y=B%z.boundary,Q=B+Y;M+=Y,Q!==0&&R-Q<z.storage&&(M+=R-Q),N.__data=new Float32Array(z.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=M,M+=z.storage}}}const T=M%R;return T>0&&(M+=R-T),m.__size=M,m.__cache={},this}function E(m){const _={boundary:0,storage:0};return typeof m=="number"||typeof m=="boolean"?(_.boundary=4,_.storage=4):m.isVector2?(_.boundary=8,_.storage=8):m.isVector3||m.isColor?(_.boundary=16,_.storage=12):m.isVector4?(_.boundary=16,_.storage=16):m.isMatrix3?(_.boundary=48,_.storage=48):m.isMatrix4?(_.boundary=64,_.storage=64):m.isTexture?ke("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(m)?(_.boundary=16,_.storage=m.byteLength):ke("WebGLRenderer: Unsupported uniform value type.",m),_}function g(m){const _=m.target;_.removeEventListener("dispose",g);const M=a.indexOf(_.__bindingPointIndex);a.splice(M,1),t.deleteBuffer(r[_.id]),delete r[_.id],delete s[_.id]}function f(){for(const m in r)t.deleteBuffer(r[m]);a=[],r={},s={}}return{bind:l,update:c,dispose:f}}const oC=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let hi=null;function lC(){return hi===null&&(hi=new XM(oC,16,16,ss,Yi),hi.name="DFG_LUT",hi.minFilter=zt,hi.magFilter=zt,hi.wrapS=ki,hi.wrapT=ki,hi.generateMipmaps=!1,hi.needsUpdate=!0),hi}class Uv{constructor(e={}){const{canvas:n=aM(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:u=!1,outputBufferType:p=Pn}=e;this.isWebGLRenderer=!0;let v;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");v=i.getContextAttributes().alpha}else v=a;const E=p,g=new Set([jh,Xh,Wh]),f=new Set([Pn,Ei,Mo,Eo,Hh,Gh]),m=new Uint32Array(4),_=new Int32Array(4),M=new H;let R=null,T=null;const C=[],x=[];let A=null;this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Si,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const b=this;let P=!1,N=null;this._outputColorSpace=Kt;let X=0,q=0,D=null,k=-1,z=null;const B=new Dt,Y=new Dt;let Q=null;const he=new ft(0);let me=0,Ve=n.width,$e=n.height,De=1,V=null,te=null;const se=new Dt(0,0,Ve,$e),le=new Dt(0,0,Ve,$e);let Fe=!1;const we=new Jh;let je=!1,Oe=!1;const fe=new bt,Ae=new H,Ce=new Dt,it={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Re=!1;function dt(){return D===null?De:1}let L=i;function st(S,U){return n.getContext(S,U)}try{const S={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:d,failIfMajorPerformanceCaveat:h};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${zh}`),n.addEventListener("webglcontextlost",ee,!1),n.addEventListener("webglcontextrestored",Pe,!1),n.addEventListener("webglcontextcreationerror",ze,!1),L===null){const U="webgl2";if(L=st(U,S),L===null)throw st(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(S){throw tt("WebGLRenderer: "+S.message),S}let He,at,ce,ht,w,y,O,Z,ne,pe,ue,K,J,_e,ge,ie,re,Ie,Be,Ye,I,ae,$;function ve(){He=new lw(L),He.init(),I=new JA(L,He),at=new ew(L,He,e,I),ce=new ZA(L,He),at.reversedDepthBuffer&&u&&ce.buffers.depth.setReversed(!0),ht=new fw(L),w=new OA,y=new QA(L,He,ce,w,at,I,ht),O=new ow(b),Z=new mE(L),ae=new QT(L,Z),ne=new cw(L,Z,ht,ae),pe=new hw(L,ne,Z,ae,ht),Ie=new dw(L,at,y),ge=new tw(w),ue=new FA(b,O,He,at,ae,ge),K=new sC(b,w),J=new BA,_e=new XA(He),re=new ZT(b,O,ce,pe,v,l),ie=new KA(b,pe,at),$=new aC(L,ht,at,ce),Be=new JT(L,He,ht),Ye=new uw(L,He,ht),ht.programs=ue.programs,b.capabilities=at,b.extensions=He,b.properties=w,b.renderLists=J,b.shadowMap=ie,b.state=ce,b.info=ht}ve(),E!==Pn&&(A=new mw(E,n.width,n.height,r,s));const de=new iC(b,L);this.xr=de,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const S=He.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){const S=He.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return De},this.setPixelRatio=function(S){S!==void 0&&(De=S,this.setSize(Ve,$e,!1))},this.getSize=function(S){return S.set(Ve,$e)},this.setSize=function(S,U,j=!0){if(de.isPresenting){ke("WebGLRenderer: Can't change size while VR device is presenting.");return}Ve=S,$e=U,n.width=Math.floor(S*De),n.height=Math.floor(U*De),j===!0&&(n.style.width=S+"px",n.style.height=U+"px"),A!==null&&A.setSize(n.width,n.height),this.setViewport(0,0,S,U)},this.getDrawingBufferSize=function(S){return S.set(Ve*De,$e*De).floor()},this.setDrawingBufferSize=function(S,U,j){Ve=S,$e=U,De=j,n.width=Math.floor(S*j),n.height=Math.floor(U*j),this.setViewport(0,0,S,U)},this.setEffects=function(S){if(E===Pn){tt("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(S){for(let U=0;U<S.length;U++)if(S[U].isOutputPass===!0){ke("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}A.setEffects(S||[])},this.getCurrentViewport=function(S){return S.copy(B)},this.getViewport=function(S){return S.copy(se)},this.setViewport=function(S,U,j,G){S.isVector4?se.set(S.x,S.y,S.z,S.w):se.set(S,U,j,G),ce.viewport(B.copy(se).multiplyScalar(De).round())},this.getScissor=function(S){return S.copy(le)},this.setScissor=function(S,U,j,G){S.isVector4?le.set(S.x,S.y,S.z,S.w):le.set(S,U,j,G),ce.scissor(Y.copy(le).multiplyScalar(De).round())},this.getScissorTest=function(){return Fe},this.setScissorTest=function(S){ce.setScissorTest(Fe=S)},this.setOpaqueSort=function(S){V=S},this.setTransparentSort=function(S){te=S},this.getClearColor=function(S){return S.copy(re.getClearColor())},this.setClearColor=function(){re.setClearColor(...arguments)},this.getClearAlpha=function(){return re.getClearAlpha()},this.setClearAlpha=function(){re.setClearAlpha(...arguments)},this.clear=function(S=!0,U=!0,j=!0){let G=0;if(S){let W=!1;if(D!==null){const Se=D.texture.format;W=g.has(Se)}if(W){const Se=D.texture.type,Ee=f.has(Se),ye=re.getClearColor(),Le=re.getClearAlpha(),Ne=ye.r,qe=ye.g,Qe=ye.b;Ee?(m[0]=Ne,m[1]=qe,m[2]=Qe,m[3]=Le,L.clearBufferuiv(L.COLOR,0,m)):(_[0]=Ne,_[1]=qe,_[2]=Qe,_[3]=Le,L.clearBufferiv(L.COLOR,0,_))}else G|=L.COLOR_BUFFER_BIT}U&&(G|=L.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),j&&(G|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),G!==0&&L.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(S){S.setRenderer(this),N=S},this.dispose=function(){n.removeEventListener("webglcontextlost",ee,!1),n.removeEventListener("webglcontextrestored",Pe,!1),n.removeEventListener("webglcontextcreationerror",ze,!1),re.dispose(),J.dispose(),_e.dispose(),w.dispose(),O.dispose(),pe.dispose(),ae.dispose(),$.dispose(),ue.dispose(),de.dispose(),de.removeEventListener("sessionstart",Ge),de.removeEventListener("sessionend",rt),_t.stop()};function ee(S){S.preventDefault(),Mc("WebGLRenderer: Context Lost."),P=!0}function Pe(){Mc("WebGLRenderer: Context Restored."),P=!1;const S=ht.autoReset,U=ie.enabled,j=ie.autoUpdate,G=ie.needsUpdate,W=ie.type;ve(),ht.autoReset=S,ie.enabled=U,ie.autoUpdate=j,ie.needsUpdate=G,ie.type=W}function ze(S){tt("WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function At(S){const U=S.target;U.removeEventListener("dispose",At),ut(U)}function ut(S){On(S),w.remove(S)}function On(S){const U=w.get(S).programs;U!==void 0&&(U.forEach(function(j){ue.releaseProgram(j)}),S.isShaderMaterial&&ue.releaseShaderCache(S))}this.renderBufferDirect=function(S,U,j,G,W,Se){U===null&&(U=it);const Ee=W.isMesh&&W.matrixWorld.determinant()<0,ye=Dr(S,U,j,G,W);ce.setMaterial(G,Ee);let Le=j.index,Ne=1;if(G.wireframe===!0){if(Le=ne.getWireframeAttribute(j),Le===void 0)return;Ne=2}const qe=j.drawRange,Qe=j.attributes.position;let Ue=qe.start*Ne,vt=(qe.start+qe.count)*Ne;Se!==null&&(Ue=Math.max(Ue,Se.start*Ne),vt=Math.min(vt,(Se.start+Se.count)*Ne)),Le!==null?(Ue=Math.max(Ue,0),vt=Math.min(vt,Le.count)):Qe!=null&&(Ue=Math.max(Ue,0),vt=Math.min(vt,Qe.count));const Ut=vt-Ue;if(Ut<0||Ut===1/0)return;ae.setup(W,G,ye,j,Le);let Lt,xt=Be;if(Le!==null&&(Lt=Z.get(Le),xt=Ye,xt.setIndex(Lt)),W.isMesh)G.wireframe===!0?(ce.setLineWidth(G.wireframeLinewidth*dt()),xt.setMode(L.LINES)):xt.setMode(L.TRIANGLES);else if(W.isLine){let tn=G.linewidth;tn===void 0&&(tn=1),ce.setLineWidth(tn*dt()),W.isLineSegments?xt.setMode(L.LINES):W.isLineLoop?xt.setMode(L.LINE_LOOP):xt.setMode(L.LINE_STRIP)}else W.isPoints?xt.setMode(L.POINTS):W.isSprite&&xt.setMode(L.TRIANGLES);if(W.isBatchedMesh)if(He.get("WEBGL_multi_draw"))xt.renderMultiDraw(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount);else{const tn=W._multiDrawStarts,Me=W._multiDrawCounts,wn=W._multiDrawCount,ot=Le?Z.get(Le).bytesPerElement:1,kn=w.get(G).currentProgram.getUniforms();for(let ui=0;ui<wn;ui++)kn.setValue(L,"_gl_DrawID",ui),xt.render(tn[ui]/ot,Me[ui])}else if(W.isInstancedMesh)xt.renderInstances(Ue,Ut,W.count);else if(j.isInstancedBufferGeometry){const tn=j._maxInstanceCount!==void 0?j._maxInstanceCount:1/0,Me=Math.min(j.instanceCount,tn);xt.renderInstances(Ue,Ut,Me)}else xt.render(Ue,Ut)};function Tn(S,U,j){S.transparent===!0&&S.side===Ui&&S.forceSinglePass===!1?(S.side=En,S.needsUpdate=!0,Ir(S,U,j),S.side=Ar,S.needsUpdate=!0,Ir(S,U,j),S.side=Ui):Ir(S,U,j)}this.compile=function(S,U,j=null){j===null&&(j=S),T=_e.get(j),T.init(U),x.push(T),j.traverseVisible(function(W){W.isLight&&W.layers.test(U.layers)&&(T.pushLight(W),W.castShadow&&T.pushShadow(W))}),S!==j&&S.traverseVisible(function(W){W.isLight&&W.layers.test(U.layers)&&(T.pushLight(W),W.castShadow&&T.pushShadow(W))}),T.setupLights();const G=new Set;return S.traverse(function(W){if(!(W.isMesh||W.isPoints||W.isLine||W.isSprite))return;const Se=W.material;if(Se)if(Array.isArray(Se))for(let Ee=0;Ee<Se.length;Ee++){const ye=Se[Ee];Tn(ye,j,W),G.add(ye)}else Tn(Se,j,W),G.add(Se)}),T=x.pop(),G},this.compileAsync=function(S,U,j=null){const G=this.compile(S,U,j);return new Promise(W=>{function Se(){if(G.forEach(function(Ee){w.get(Ee).currentProgram.isReady()&&G.delete(Ee)}),G.size===0){W(S);return}setTimeout(Se,10)}He.get("KHR_parallel_shader_compile")!==null?Se():setTimeout(Se,10)})};let us=null;function Uo(S){us&&us(S)}function Ge(){_t.stop()}function rt(){_t.start()}const _t=new Cv;_t.setAnimationLoop(Uo),typeof self<"u"&&_t.setContext(self),this.setAnimationLoop=function(S){us=S,de.setAnimationLoop(S),S===null?_t.stop():_t.start()},de.addEventListener("sessionstart",Ge),de.addEventListener("sessionend",rt),this.render=function(S,U){if(U!==void 0&&U.isCamera!==!0){tt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;N!==null&&N.renderStart(S,U);const j=de.enabled===!0&&de.isPresenting===!0,G=A!==null&&(D===null||j)&&A.begin(b,D);if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),de.enabled===!0&&de.isPresenting===!0&&(A===null||A.isCompositing()===!1)&&(de.cameraAutoUpdate===!0&&de.updateCamera(U),U=de.getCamera()),S.isScene===!0&&S.onBeforeRender(b,S,U,D),T=_e.get(S,x.length),T.init(U),T.state.textureUnits=y.getTextureUnits(),x.push(T),fe.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),we.setFromProjectionMatrix(fe,vi,U.reversedDepth),Oe=this.localClippingEnabled,je=ge.init(this.clippingPlanes,Oe),R=J.get(S,C.length),R.init(),C.push(R),de.enabled===!0&&de.isPresenting===!0){const Ee=b.xr.getDepthSensingMesh();Ee!==null&&Nt(Ee,U,-1/0,b.sortObjects)}Nt(S,U,0,b.sortObjects),R.finish(),b.sortObjects===!0&&R.sort(V,te),Re=de.enabled===!1||de.isPresenting===!1||de.hasDepthSensing()===!1,Re&&re.addToRenderList(R,S),this.info.render.frame++,je===!0&&ge.beginShadows();const W=T.state.shadowsArray;if(ie.render(W,S,U),je===!0&&ge.endShadows(),this.info.autoReset===!0&&this.info.reset(),(G&&A.hasRenderPass())===!1){const Ee=R.opaque,ye=R.transmissive;if(T.setupLights(),U.isArrayCamera){const Le=U.cameras;if(ye.length>0)for(let Ne=0,qe=Le.length;Ne<qe;Ne++){const Qe=Le[Ne];wi(Ee,ye,S,Qe)}Re&&re.render(S);for(let Ne=0,qe=Le.length;Ne<qe;Ne++){const Qe=Le[Ne];_n(R,S,Qe,Qe.viewport)}}else ye.length>0&&wi(Ee,ye,S,U),Re&&re.render(S),_n(R,S,U)}D!==null&&q===0&&(y.updateMultisampleRenderTarget(D),y.updateRenderTargetMipmap(D)),G&&A.end(b),S.isScene===!0&&S.onAfterRender(b,S,U),ae.resetDefaultState(),k=-1,z=null,x.pop(),x.length>0?(T=x[x.length-1],y.setTextureUnits(T.state.textureUnits),je===!0&&ge.setGlobalState(b.clippingPlanes,T.state.camera)):T=null,C.pop(),C.length>0?R=C[C.length-1]:R=null,N!==null&&N.renderEnd()};function Nt(S,U,j,G){if(S.visible===!1)return;if(S.layers.test(U.layers)){if(S.isGroup)j=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(U);else if(S.isLightProbeGrid)T.pushLightProbeGrid(S);else if(S.isLight)T.pushLight(S),S.castShadow&&T.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||we.intersectsSprite(S)){G&&Ce.setFromMatrixPosition(S.matrixWorld).applyMatrix4(fe);const Ee=pe.update(S),ye=S.material;ye.visible&&R.push(S,Ee,ye,j,Ce.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||we.intersectsObject(S))){const Ee=pe.update(S),ye=S.material;if(G&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),Ce.copy(S.boundingSphere.center)):(Ee.boundingSphere===null&&Ee.computeBoundingSphere(),Ce.copy(Ee.boundingSphere.center)),Ce.applyMatrix4(S.matrixWorld).applyMatrix4(fe)),Array.isArray(ye)){const Le=Ee.groups;for(let Ne=0,qe=Le.length;Ne<qe;Ne++){const Qe=Le[Ne],Ue=ye[Qe.materialIndex];Ue&&Ue.visible&&R.push(S,Ee,Ue,j,Ce.z,Qe)}}else ye.visible&&R.push(S,Ee,ye,j,Ce.z,null)}}const Se=S.children;for(let Ee=0,ye=Se.length;Ee<ye;Ee++)Nt(Se[Ee],U,j,G)}function _n(S,U,j,G){const{opaque:W,transmissive:Se,transparent:Ee}=S;T.setupLightsView(j),je===!0&&ge.setGlobalState(b.clippingPlanes,j),G&&ce.viewport(B.copy(G)),W.length>0&&ci(W,U,j),Se.length>0&&ci(Se,U,j),Ee.length>0&&ci(Ee,U,j),ce.buffers.depth.setTest(!0),ce.buffers.depth.setMask(!0),ce.buffers.color.setMask(!0),ce.setPolygonOffset(!1)}function wi(S,U,j,G){if((j.isScene===!0?j.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[G.id]===void 0){const Ue=He.has("EXT_color_buffer_half_float")||He.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[G.id]=new Mi(1,1,{generateMipmaps:!0,type:Ue?Yi:Pn,minFilter:$r,samples:Math.max(4,at.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:nt.workingColorSpace})}const Se=T.state.transmissionRenderTarget[G.id],Ee=G.viewport||B;Se.setSize(Ee.z*b.transmissionResolutionScale,Ee.w*b.transmissionResolutionScale);const ye=b.getRenderTarget(),Le=b.getActiveCubeFace(),Ne=b.getActiveMipmapLevel();b.setRenderTarget(Se),b.getClearColor(he),me=b.getClearAlpha(),me<1&&b.setClearColor(16777215,.5),b.clear(),Re&&re.render(j);const qe=b.toneMapping;b.toneMapping=Si;const Qe=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),T.setupLightsView(G),je===!0&&ge.setGlobalState(b.clippingPlanes,G),ci(S,j,G),y.updateMultisampleRenderTarget(Se),y.updateRenderTargetMipmap(Se),He.has("WEBGL_multisampled_render_to_texture")===!1){let Ue=!1;for(let vt=0,Ut=U.length;vt<Ut;vt++){const Lt=U[vt],{object:xt,geometry:tn,material:Me,group:wn}=Lt;if(Me.side===Ui&&xt.layers.test(G.layers)){const ot=Me.side;Me.side=En,Me.needsUpdate=!0,Lr(xt,j,G,tn,Me,wn),Me.side=ot,Me.needsUpdate=!0,Ue=!0}}Ue===!0&&(y.updateMultisampleRenderTarget(Se),y.updateRenderTargetMipmap(Se))}b.setRenderTarget(ye,Le,Ne),b.setClearColor(he,me),Qe!==void 0&&(G.viewport=Qe),b.toneMapping=qe}function ci(S,U,j){const G=U.isScene===!0?U.overrideMaterial:null;for(let W=0,Se=S.length;W<Se;W++){const Ee=S[W],{object:ye,geometry:Le,group:Ne}=Ee;let qe=Ee.material;qe.allowOverride===!0&&G!==null&&(qe=G),ye.layers.test(j.layers)&&Lr(ye,U,j,Le,qe,Ne)}}function Lr(S,U,j,G,W,Se){S.onBeforeRender(b,U,j,G,W,Se),S.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),W.onBeforeRender(b,U,j,G,S,Se),W.transparent===!0&&W.side===Ui&&W.forceSinglePass===!1?(W.side=En,W.needsUpdate=!0,b.renderBufferDirect(j,U,G,W,S,Se),W.side=Ar,W.needsUpdate=!0,b.renderBufferDirect(j,U,G,W,S,Se),W.side=Ui):b.renderBufferDirect(j,U,G,W,S,Se),S.onAfterRender(b,U,j,G,W,Se)}function Ir(S,U,j){U.isScene!==!0&&(U=it);const G=w.get(S),W=T.state.lights,Se=T.state.shadowsArray,Ee=W.state.version,ye=ue.getParameters(S,W.state,Se,U,j,T.state.lightProbeGridArray),Le=ue.getProgramCacheKey(ye);let Ne=G.programs;G.environment=S.isMeshStandardMaterial||S.isMeshLambertMaterial||S.isMeshPhongMaterial?U.environment:null,G.fog=U.fog;const qe=S.isMeshStandardMaterial||S.isMeshLambertMaterial&&!S.envMap||S.isMeshPhongMaterial&&!S.envMap;G.envMap=O.get(S.envMap||G.environment,qe),G.envMapRotation=G.environment!==null&&S.envMap===null?U.environmentRotation:S.envMapRotation,Ne===void 0&&(S.addEventListener("dispose",At),Ne=new Map,G.programs=Ne);let Qe=Ne.get(Le);if(Qe!==void 0){if(G.currentProgram===Qe&&G.lightsStateVersion===Ee)return Ai(S,ye),Qe}else ye.uniforms=ue.getUniforms(S),N!==null&&S.isNodeMaterial&&N.build(S,j,ye),S.onBeforeCompile(ye,b),Qe=ue.acquireProgram(ye,Le),Ne.set(Le,Qe),G.uniforms=ye.uniforms;const Ue=G.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(Ue.clippingPlanes=ge.uniform),Ai(S,ye),G.needsLights=Ki(S),G.lightsStateVersion=Ee,G.needsLights&&(Ue.ambientLightColor.value=W.state.ambient,Ue.lightProbe.value=W.state.probe,Ue.directionalLights.value=W.state.directional,Ue.directionalLightShadows.value=W.state.directionalShadow,Ue.spotLights.value=W.state.spot,Ue.spotLightShadows.value=W.state.spotShadow,Ue.rectAreaLights.value=W.state.rectArea,Ue.ltc_1.value=W.state.rectAreaLTC1,Ue.ltc_2.value=W.state.rectAreaLTC2,Ue.pointLights.value=W.state.point,Ue.pointLightShadows.value=W.state.pointShadow,Ue.hemisphereLights.value=W.state.hemi,Ue.directionalShadowMatrix.value=W.state.directionalShadowMatrix,Ue.spotLightMatrix.value=W.state.spotLightMatrix,Ue.spotLightMap.value=W.state.spotLightMap,Ue.pointShadowMatrix.value=W.state.pointShadowMatrix),G.lightProbeGrid=T.state.lightProbeGridArray.length>0,G.currentProgram=Qe,G.uniformsList=null,Qe}function fs(S){if(S.uniformsList===null){const U=S.currentProgram.getUniforms();S.uniformsList=Xl.seqWithValue(U.seq,S.uniforms)}return S.uniformsList}function Ai(S,U){const j=w.get(S);j.outputColorSpace=U.outputColorSpace,j.batching=U.batching,j.batchingColor=U.batchingColor,j.instancing=U.instancing,j.instancingColor=U.instancingColor,j.instancingMorph=U.instancingMorph,j.skinning=U.skinning,j.morphTargets=U.morphTargets,j.morphNormals=U.morphNormals,j.morphColors=U.morphColors,j.morphTargetsCount=U.morphTargetsCount,j.numClippingPlanes=U.numClippingPlanes,j.numIntersection=U.numClipIntersection,j.vertexAlphas=U.vertexAlphas,j.vertexTangents=U.vertexTangents,j.toneMapping=U.toneMapping}function ds(S,U){if(S.length===0)return null;if(S.length===1)return S[0].texture!==null?S[0]:null;M.setFromMatrixPosition(U.matrixWorld);for(let j=0,G=S.length;j<G;j++){const W=S[j];if(W.texture!==null&&W.boundingBox.containsPoint(M))return W}return null}function Dr(S,U,j,G,W){U.isScene!==!0&&(U=it),y.resetTextureUnits();const Se=U.fog,Ee=G.isMeshStandardMaterial||G.isMeshLambertMaterial||G.isMeshPhongMaterial?U.environment:null,ye=D===null?b.outputColorSpace:D.isXRRenderTarget===!0?D.texture.colorSpace:nt.workingColorSpace,Le=G.isMeshStandardMaterial||G.isMeshLambertMaterial&&!G.envMap||G.isMeshPhongMaterial&&!G.envMap,Ne=O.get(G.envMap||Ee,Le),qe=G.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,Qe=!!j.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),Ue=!!j.morphAttributes.position,vt=!!j.morphAttributes.normal,Ut=!!j.morphAttributes.color;let Lt=Si;G.toneMapped&&(D===null||D.isXRRenderTarget===!0)&&(Lt=b.toneMapping);const xt=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,tn=xt!==void 0?xt.length:0,Me=w.get(G),wn=T.state.lights;if(je===!0&&(Oe===!0||S!==z)){const St=S===z&&G.id===k;ge.setState(G,S,St)}let ot=!1;G.version===Me.__version?(Me.needsLights&&Me.lightsStateVersion!==wn.state.version||Me.outputColorSpace!==ye||W.isBatchedMesh&&Me.batching===!1||!W.isBatchedMesh&&Me.batching===!0||W.isBatchedMesh&&Me.batchingColor===!0&&W.colorTexture===null||W.isBatchedMesh&&Me.batchingColor===!1&&W.colorTexture!==null||W.isInstancedMesh&&Me.instancing===!1||!W.isInstancedMesh&&Me.instancing===!0||W.isSkinnedMesh&&Me.skinning===!1||!W.isSkinnedMesh&&Me.skinning===!0||W.isInstancedMesh&&Me.instancingColor===!0&&W.instanceColor===null||W.isInstancedMesh&&Me.instancingColor===!1&&W.instanceColor!==null||W.isInstancedMesh&&Me.instancingMorph===!0&&W.morphTexture===null||W.isInstancedMesh&&Me.instancingMorph===!1&&W.morphTexture!==null||Me.envMap!==Ne||G.fog===!0&&Me.fog!==Se||Me.numClippingPlanes!==void 0&&(Me.numClippingPlanes!==ge.numPlanes||Me.numIntersection!==ge.numIntersection)||Me.vertexAlphas!==qe||Me.vertexTangents!==Qe||Me.morphTargets!==Ue||Me.morphNormals!==vt||Me.morphColors!==Ut||Me.toneMapping!==Lt||Me.morphTargetsCount!==tn||!!Me.lightProbeGrid!=T.state.lightProbeGridArray.length>0)&&(ot=!0):(ot=!0,Me.__version=G.version);let kn=Me.currentProgram;ot===!0&&(kn=Ir(G,U,W),N&&G.isNodeMaterial&&N.onUpdateProgram(G,kn,Me));let ui=!1,Zi=!1,hs=!1;const yt=kn.getUniforms(),Ft=Me.uniforms;if(ce.useProgram(kn.program)&&(ui=!0,Zi=!0,hs=!0),G.id!==k&&(k=G.id,Zi=!0),Me.needsLights){const St=ds(T.state.lightProbeGridArray,W);Me.lightProbeGrid!==St&&(Me.lightProbeGrid=St,Zi=!0)}if(ui||z!==S){ce.buffers.depth.getReversed()&&S.reversedDepth!==!0&&(S._reversedDepth=!0,S.updateProjectionMatrix()),yt.setValue(L,"projectionMatrix",S.projectionMatrix),yt.setValue(L,"viewMatrix",S.matrixWorldInverse);const Ji=yt.map.cameraPosition;Ji!==void 0&&Ji.setValue(L,Ae.setFromMatrixPosition(S.matrixWorld)),at.logarithmicDepthBuffer&&yt.setValue(L,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&yt.setValue(L,"isOrthographic",S.isOrthographicCamera===!0),z!==S&&(z=S,Zi=!0,hs=!0)}if(Me.needsLights&&(wn.state.directionalShadowMap.length>0&&yt.setValue(L,"directionalShadowMap",wn.state.directionalShadowMap,y),wn.state.spotShadowMap.length>0&&yt.setValue(L,"spotShadowMap",wn.state.spotShadowMap,y),wn.state.pointShadowMap.length>0&&yt.setValue(L,"pointShadowMap",wn.state.pointShadowMap,y)),W.isSkinnedMesh){yt.setOptional(L,W,"bindMatrix"),yt.setOptional(L,W,"bindMatrixInverse");const St=W.skeleton;St&&(St.boneTexture===null&&St.computeBoneTexture(),yt.setValue(L,"boneTexture",St.boneTexture,y))}W.isBatchedMesh&&(yt.setOptional(L,W,"batchingTexture"),yt.setValue(L,"batchingTexture",W._matricesTexture,y),yt.setOptional(L,W,"batchingIdTexture"),yt.setValue(L,"batchingIdTexture",W._indirectTexture,y),yt.setOptional(L,W,"batchingColorTexture"),W._colorsTexture!==null&&yt.setValue(L,"batchingColorTexture",W._colorsTexture,y));const Qi=j.morphAttributes;if((Qi.position!==void 0||Qi.normal!==void 0||Qi.color!==void 0)&&Ie.update(W,j,kn),(Zi||Me.receiveShadow!==W.receiveShadow)&&(Me.receiveShadow=W.receiveShadow,yt.setValue(L,"receiveShadow",W.receiveShadow)),(G.isMeshStandardMaterial||G.isMeshLambertMaterial||G.isMeshPhongMaterial)&&G.envMap===null&&U.environment!==null&&(Ft.envMapIntensity.value=U.environmentIntensity),Ft.dfgLUT!==void 0&&(Ft.dfgLUT.value=lC()),Zi){if(yt.setValue(L,"toneMappingExposure",b.toneMappingExposure),Me.needsLights&&Nr(Ft,hs),Se&&G.fog===!0&&K.refreshFogUniforms(Ft,Se),K.refreshMaterialUniforms(Ft,G,De,$e,T.state.transmissionRenderTarget[S.id]),Me.needsLights&&Me.lightProbeGrid){const St=Me.lightProbeGrid;Ft.probesSH.value=St.texture,Ft.probesMin.value.copy(St.boundingBox.min),Ft.probesMax.value.copy(St.boundingBox.max),Ft.probesResolution.value.copy(St.resolution)}Xl.upload(L,fs(Me),Ft,y)}if(G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(Xl.upload(L,fs(Me),Ft,y),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&yt.setValue(L,"center",W.center),yt.setValue(L,"modelViewMatrix",W.modelViewMatrix),yt.setValue(L,"normalMatrix",W.normalMatrix),yt.setValue(L,"modelMatrix",W.matrixWorld),G.uniformsGroups!==void 0){const St=G.uniformsGroups;for(let Ji=0,ps=St.length;Ji<ps;Ji++){const mp=St[Ji];$.update(mp,kn),$.bind(mp,kn)}}return kn}function Nr(S,U){S.ambientLightColor.needsUpdate=U,S.lightProbe.needsUpdate=U,S.directionalLights.needsUpdate=U,S.directionalLightShadows.needsUpdate=U,S.pointLights.needsUpdate=U,S.pointLightShadows.needsUpdate=U,S.spotLights.needsUpdate=U,S.spotLightShadows.needsUpdate=U,S.rectAreaLights.needsUpdate=U,S.hemisphereLights.needsUpdate=U}function Ki(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return X},this.getActiveMipmapLevel=function(){return q},this.getRenderTarget=function(){return D},this.setRenderTargetTextures=function(S,U,j){const G=w.get(S);G.__autoAllocateDepthBuffer=S.resolveDepthBuffer===!1,G.__autoAllocateDepthBuffer===!1&&(G.__useRenderToTexture=!1),w.get(S.texture).__webglTexture=U,w.get(S.depthTexture).__webglTexture=G.__autoAllocateDepthBuffer?void 0:j,G.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(S,U){const j=w.get(S);j.__webglFramebuffer=U,j.__useDefaultFramebuffer=U===void 0};const Ur=L.createFramebuffer();this.setRenderTarget=function(S,U=0,j=0){D=S,X=U,q=j;let G=null,W=!1,Se=!1;if(S){const ye=w.get(S);if(ye.__useDefaultFramebuffer!==void 0){ce.bindFramebuffer(L.FRAMEBUFFER,ye.__webglFramebuffer),B.copy(S.viewport),Y.copy(S.scissor),Q=S.scissorTest,ce.viewport(B),ce.scissor(Y),ce.setScissorTest(Q),k=-1;return}else if(ye.__webglFramebuffer===void 0)y.setupRenderTarget(S);else if(ye.__hasExternalTextures)y.rebindTextures(S,w.get(S.texture).__webglTexture,w.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){const qe=S.depthTexture;if(ye.__boundDepthTexture!==qe){if(qe!==null&&w.has(qe)&&(S.width!==qe.image.width||S.height!==qe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");y.setupDepthRenderbuffer(S)}}const Le=S.texture;(Le.isData3DTexture||Le.isDataArrayTexture||Le.isCompressedArrayTexture)&&(Se=!0);const Ne=w.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(Ne[U])?G=Ne[U][j]:G=Ne[U],W=!0):S.samples>0&&y.useMultisampledRTT(S)===!1?G=w.get(S).__webglMultisampledFramebuffer:Array.isArray(Ne)?G=Ne[j]:G=Ne,B.copy(S.viewport),Y.copy(S.scissor),Q=S.scissorTest}else B.copy(se).multiplyScalar(De).floor(),Y.copy(le).multiplyScalar(De).floor(),Q=Fe;if(j!==0&&(G=Ur),ce.bindFramebuffer(L.FRAMEBUFFER,G)&&ce.drawBuffers(S,G),ce.viewport(B),ce.scissor(Y),ce.setScissorTest(Q),W){const ye=w.get(S.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+U,ye.__webglTexture,j)}else if(Se){const ye=U;for(let Le=0;Le<S.textures.length;Le++){const Ne=w.get(S.textures[Le]);L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0+Le,Ne.__webglTexture,j,ye)}}else if(S!==null&&j!==0){const ye=w.get(S.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,ye.__webglTexture,j)}k=-1},this.readRenderTargetPixels=function(S,U,j,G,W,Se,Ee,ye=0){if(!(S&&S.isWebGLRenderTarget)){tt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Le=w.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&Ee!==void 0&&(Le=Le[Ee]),Le){ce.bindFramebuffer(L.FRAMEBUFFER,Le);try{const Ne=S.textures[ye],qe=Ne.format,Qe=Ne.type;if(S.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+ye),!at.textureFormatReadable(qe)){tt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!at.textureTypeReadable(Qe)){tt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=S.width-G&&j>=0&&j<=S.height-W&&L.readPixels(U,j,G,W,I.convert(qe),I.convert(Qe),Se)}finally{const Ne=D!==null?w.get(D).__webglFramebuffer:null;ce.bindFramebuffer(L.FRAMEBUFFER,Ne)}}},this.readRenderTargetPixelsAsync=async function(S,U,j,G,W,Se,Ee,ye=0){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Le=w.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&Ee!==void 0&&(Le=Le[Ee]),Le)if(U>=0&&U<=S.width-G&&j>=0&&j<=S.height-W){ce.bindFramebuffer(L.FRAMEBUFFER,Le);const Ne=S.textures[ye],qe=Ne.format,Qe=Ne.type;if(S.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+ye),!at.textureFormatReadable(qe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!at.textureTypeReadable(Qe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ue=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,Ue),L.bufferData(L.PIXEL_PACK_BUFFER,Se.byteLength,L.STREAM_READ),L.readPixels(U,j,G,W,I.convert(qe),I.convert(Qe),0);const vt=D!==null?w.get(D).__webglFramebuffer:null;ce.bindFramebuffer(L.FRAMEBUFFER,vt);const Ut=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await oM(L,Ut,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,Ue),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,Se),L.deleteBuffer(Ue),L.deleteSync(Ut),Se}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(S,U=null,j=0){const G=Math.pow(2,-j),W=Math.floor(S.image.width*G),Se=Math.floor(S.image.height*G),Ee=U!==null?U.x:0,ye=U!==null?U.y:0;y.setTexture2D(S,0),L.copyTexSubImage2D(L.TEXTURE_2D,j,0,0,Ee,ye,W,Se),ce.unbindTexture()};const Fo=L.createFramebuffer(),Ci=L.createFramebuffer();this.copyTextureToTexture=function(S,U,j=null,G=null,W=0,Se=0){let Ee,ye,Le,Ne,qe,Qe,Ue,vt,Ut;const Lt=S.isCompressedTexture?S.mipmaps[Se]:S.image;if(j!==null)Ee=j.max.x-j.min.x,ye=j.max.y-j.min.y,Le=j.isBox3?j.max.z-j.min.z:1,Ne=j.min.x,qe=j.min.y,Qe=j.isBox3?j.min.z:0;else{const Ft=Math.pow(2,-W);Ee=Math.floor(Lt.width*Ft),ye=Math.floor(Lt.height*Ft),S.isDataArrayTexture?Le=Lt.depth:S.isData3DTexture?Le=Math.floor(Lt.depth*Ft):Le=1,Ne=0,qe=0,Qe=0}G!==null?(Ue=G.x,vt=G.y,Ut=G.z):(Ue=0,vt=0,Ut=0);const xt=I.convert(U.format),tn=I.convert(U.type);let Me;U.isData3DTexture?(y.setTexture3D(U,0),Me=L.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(y.setTexture2DArray(U,0),Me=L.TEXTURE_2D_ARRAY):(y.setTexture2D(U,0),Me=L.TEXTURE_2D),ce.activeTexture(L.TEXTURE0),ce.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,U.flipY),ce.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),ce.pixelStorei(L.UNPACK_ALIGNMENT,U.unpackAlignment);const wn=ce.getParameter(L.UNPACK_ROW_LENGTH),ot=ce.getParameter(L.UNPACK_IMAGE_HEIGHT),kn=ce.getParameter(L.UNPACK_SKIP_PIXELS),ui=ce.getParameter(L.UNPACK_SKIP_ROWS),Zi=ce.getParameter(L.UNPACK_SKIP_IMAGES);ce.pixelStorei(L.UNPACK_ROW_LENGTH,Lt.width),ce.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Lt.height),ce.pixelStorei(L.UNPACK_SKIP_PIXELS,Ne),ce.pixelStorei(L.UNPACK_SKIP_ROWS,qe),ce.pixelStorei(L.UNPACK_SKIP_IMAGES,Qe);const hs=S.isDataArrayTexture||S.isData3DTexture,yt=U.isDataArrayTexture||U.isData3DTexture;if(S.isDepthTexture){const Ft=w.get(S),Qi=w.get(U),St=w.get(Ft.__renderTarget),Ji=w.get(Qi.__renderTarget);ce.bindFramebuffer(L.READ_FRAMEBUFFER,St.__webglFramebuffer),ce.bindFramebuffer(L.DRAW_FRAMEBUFFER,Ji.__webglFramebuffer);for(let ps=0;ps<Le;ps++)hs&&(L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,w.get(S).__webglTexture,W,Qe+ps),L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,w.get(U).__webglTexture,Se,Ut+ps)),L.blitFramebuffer(Ne,qe,Ee,ye,Ue,vt,Ee,ye,L.DEPTH_BUFFER_BIT,L.NEAREST);ce.bindFramebuffer(L.READ_FRAMEBUFFER,null),ce.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else if(W!==0||S.isRenderTargetTexture||w.has(S)){const Ft=w.get(S),Qi=w.get(U);ce.bindFramebuffer(L.READ_FRAMEBUFFER,Fo),ce.bindFramebuffer(L.DRAW_FRAMEBUFFER,Ci);for(let St=0;St<Le;St++)hs?L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Ft.__webglTexture,W,Qe+St):L.framebufferTexture2D(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Ft.__webglTexture,W),yt?L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Qi.__webglTexture,Se,Ut+St):L.framebufferTexture2D(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Qi.__webglTexture,Se),W!==0?L.blitFramebuffer(Ne,qe,Ee,ye,Ue,vt,Ee,ye,L.COLOR_BUFFER_BIT,L.NEAREST):yt?L.copyTexSubImage3D(Me,Se,Ue,vt,Ut+St,Ne,qe,Ee,ye):L.copyTexSubImage2D(Me,Se,Ue,vt,Ne,qe,Ee,ye);ce.bindFramebuffer(L.READ_FRAMEBUFFER,null),ce.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else yt?S.isDataTexture||S.isData3DTexture?L.texSubImage3D(Me,Se,Ue,vt,Ut,Ee,ye,Le,xt,tn,Lt.data):U.isCompressedArrayTexture?L.compressedTexSubImage3D(Me,Se,Ue,vt,Ut,Ee,ye,Le,xt,Lt.data):L.texSubImage3D(Me,Se,Ue,vt,Ut,Ee,ye,Le,xt,tn,Lt):S.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,Se,Ue,vt,Ee,ye,xt,tn,Lt.data):S.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,Se,Ue,vt,Lt.width,Lt.height,xt,Lt.data):L.texSubImage2D(L.TEXTURE_2D,Se,Ue,vt,Ee,ye,xt,tn,Lt);ce.pixelStorei(L.UNPACK_ROW_LENGTH,wn),ce.pixelStorei(L.UNPACK_IMAGE_HEIGHT,ot),ce.pixelStorei(L.UNPACK_SKIP_PIXELS,kn),ce.pixelStorei(L.UNPACK_SKIP_ROWS,ui),ce.pixelStorei(L.UNPACK_SKIP_IMAGES,Zi),Se===0&&U.generateMipmaps&&L.generateMipmap(Me),ce.unbindTexture()},this.initRenderTarget=function(S){w.get(S).__webglFramebuffer===void 0&&y.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?y.setTextureCube(S,0):S.isData3DTexture?y.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?y.setTexture2DArray(S,0):y.setTexture2D(S,0),ce.unbindTexture()},this.resetState=function(){X=0,q=0,D=null,ce.reset(),ae.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return vi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=nt._getDrawingBufferColorSpace(e),n.unpackColorSpace=nt._getUnpackColorSpace()}}const cC="_game_28gba_1",uC="_viewport_28gba_10",fC="_vignette_28gba_19",dC="_startScreen_28gba_30",hC="_startButtonWrap_28gba_56",pC="_startButton_28gba_56",mC="_chapterMenu_28gba_96",gC="_chapterMenuWelcome_28gba_114",_C="_chapterMenuActionsView_28gba_119",vC="_chapterOverlay_28gba_123",xC="_chapterMenuHead_28gba_139",yC="_chapterMenuIntro_28gba_148",SC="_chapterOverlayLayout_28gba_192",MC="_chapterRail_28gba_198",EC="_chapterRailItem_28gba_223",TC="_chapterRailNode_28gba_240",wC="_chapterRailText_28gba_261",AC="_chapterRailDone_28gba_300",CC="_chapterRailLocked_28gba_304",RC="_chapterActions_28gba_331",bC="_chapterAction_28gba_331",PC="_chapterActionLocked_28gba_369",LC="_knowledgePanel_28gba_449",IC="_knowledgeHead_28gba_465",DC="_knowledgeButtons_28gba_503",NC="_knowledgeFrame_28gba_543",UC="_phase2Overlay_28gba_551",FC="_phase2Image_28gba_562",OC="_phase2Rail_28gba_583",kC="_regionCard_28gba_604",BC="_loading_28gba_1288",zC="_error_28gba_1308",lt={game:cC,viewport:uC,vignette:fC,startScreen:dC,startButtonWrap:hC,startButton:pC,chapterMenu:mC,chapterMenuWelcome:gC,chapterMenuActionsView:_C,chapterOverlay:vC,chapterMenuHead:xC,chapterMenuIntro:yC,chapterOverlayLayout:SC,chapterRail:MC,chapterRailItem:EC,chapterRailNode:TC,chapterRailText:wC,chapterRailDone:AC,chapterRailLocked:CC,chapterActions:RC,chapterAction:bC,chapterActionLocked:PC,knowledgePanel:LC,knowledgeHead:IC,knowledgeButtons:DC,knowledgeFrame:NC,phase2Overlay:UC,phase2Image:FC,phase2Rail:OC,regionCard:kC,loading:BC,error:zC},VC="_pet_1h5ig_1",HC="_bubble_1h5ig_12",GC="_clickableBubble_1h5ig_30",WC="_bubbleHead_1h5ig_49",XC="_typeText_1h5ig_76",jC="_caret_1h5ig_80",YC="_caretBlink_1h5ig_1",qC="_avatar_1h5ig_91",$C="_mentorFigure_1h5ig_116",KC="_mentorBreathe_1h5ig_1",ZC="_mentorWelcome_1h5ig_1",QC="_compact_1h5ig_142",JC="_centered_1h5ig_169",Jn={pet:VC,bubble:HC,clickableBubble:GC,bubbleHead:WC,typeText:XC,caret:jC,caretBlink:YC,avatar:qC,mentorFigure:$C,mentorBreathe:KC,"mood-welcome":"_mood-welcome_1h5ig_130",mentorWelcome:ZC,"mood-knowledge":"_mood-knowledge_1h5ig_134","mood-challenge":"_mood-challenge_1h5ig_138",compact:QC,centered:JC},eR={welcome:{title:"数字人老肖",body:"欢迎来到出口易，我是数字人老肖。接下来先看欢迎语，再选择学习知识库或进入趣味闯关。",intro:"欢迎来到出口易，我是数字人老肖。接下来先看欢迎语，再选择学习知识库或进入趣味闯关。"},knowledge:{title:"数字人老肖",body:"先看企业概况、企业文化、十二条令和财务报销。看完后可以直接进入闯关验证。",intro:"这里是学习知识库。先把企业概况、企业文化、十二条令和财务报销看完，再进入闯关验证。"},challenge:{title:"数字人老肖",body:"任务线会播放场景动画，并在关键节点暂停出题。选对回应后就能盖章继续。",intro:"接下来进入趣味闯关。任务线会播放场景动画，并在关键节点暂停出题。"}},tR="./",nR=`${tR}mentor-pet/xiaozong-pet-clean.webp`;function iR({mood:t,onClick:e,showDialog:n=!0,compact:i=!1,placement:r="dock"}){const s=eR[t],a=r==="center",[o,l]=be.useState("");be.useEffect(()=>{const d=s.intro;let h=0;l("");const u=window.setInterval(()=>{h+=1,l(d.slice(0,h)),h>=d.length&&window.clearInterval(u)},22);return()=>window.clearInterval(u)},[s.intro]);const c=be.useMemo(()=>[Jn.bubble,e?Jn.clickableBubble:""].filter(Boolean).join(" "),[e]);return F.jsxs("aside",{className:[Jn.pet,i?Jn.compact:"",a?Jn.centered:""].filter(Boolean).join(" "),"aria-label":s.title,onClick:d=>{d.stopPropagation(),e==null||e()},children:[F.jsx("button",{type:"button",className:Jn.avatar,"aria-label":e?"点击老肖继续":"数字人老肖",onClick:d=>{d.stopPropagation(),e==null||e()},children:F.jsx("span",{className:[Jn.mentorFigure,Jn[`mood-${t}`]].join(" "),style:{backgroundImage:`url("${nR}")`},"aria-hidden":"true"})}),n&&F.jsxs("div",{className:c,children:[F.jsx("div",{className:Jn.bubbleHead,children:F.jsxs("span",{children:[F.jsx(Zf,{size:16,"aria-hidden":"true"}),s.title]})}),F.jsxs("p",{children:[F.jsx("span",{className:Jn.typeText,children:o}),F.jsx("span",{className:Jn.caret,"aria-hidden":"true"})]})]})]})}const Fv="bfe-training-mistakes-v3",sp="匿名学员",as=()=>Date.now(),rR=()=>typeof crypto<"u"&&"randomUUID"in crypto?crypto.randomUUID():`learner-${as().toString(36)}-${Math.random().toString(36).slice(2,8)}`,Ov=t=>t.trim().replace(/\s+/g," ")||sp,kv=()=>typeof window<"u"&&typeof window.localStorage<"u",ap=(t=sp)=>({id:rR(),name:Ov(t),createdAt:as(),updatedAt:as(),wrongQuestions:{}}),Qu=()=>{const t=ap();return{version:1,currentLearnerId:t.id,learners:{[t.id]:t}}},io=t=>{if(kv())try{window.localStorage.setItem(Fv,JSON.stringify(t))}catch{}},op=()=>{if(!kv())return Qu();try{const t=window.localStorage.getItem(Fv);if(!t){const a=Qu();return io(a),a}const e=JSON.parse(t),n=e.learners&&typeof e.learners=="object"?e.learners:{},i={};Object.entries(n).forEach(([a,o])=>{!o||typeof o!="object"||(i[a]={id:typeof o.id=="string"?o.id:a,name:Ov(typeof o.name=="string"?o.name:sp),createdAt:typeof o.createdAt=="number"?o.createdAt:as(),updatedAt:typeof o.updatedAt=="number"?o.updatedAt:as(),wrongQuestions:o.wrongQuestions&&typeof o.wrongQuestions=="object"?o.wrongQuestions:{}})});const r=typeof e.currentLearnerId=="string"?e.currentLearnerId:"",s={version:1,currentLearnerId:r in i?r:"",learners:i};if(!s.currentLearnerId||!s.learners[s.currentLearnerId]){const a=Object.values(s.learners)[0]??ap();s.learners[a.id]=a,s.currentLearnerId=a.id}return io(s),s}catch{const t=Qu();return io(t),t}},lp=t=>{let e=t.learners[t.currentLearnerId];return e||(e=Object.values(t.learners)[0]??ap(),t.learners[e.id]=e,t.currentLearnerId=e.id),e},sR=(t,e)=>[t.trim(),(e.nodeTitle??e.speaker).trim(),e.prompt.trim()].join("::"),aR=t=>{const e=op(),n=lp(e),i=sR(t.chapterTitle,t.question),r=t.question.choices[t.selectedIndex],s=t.question.choices[t.question.correctIndex],a=as(),o=n.wrongQuestions[i],l=o?{...o,correctLabel:(s==null?void 0:s.label)??o.correctLabel,correctReply:(s==null?void 0:s.reply)??o.correctReply,lastWrongChoiceLabel:(r==null?void 0:r.label)??`选项 ${t.selectedIndex+1}`,lastWrongChoiceReply:(r==null?void 0:r.reply)??"",wrongCount:o.wrongCount+1,lastWrongAt:a}:{key:i,chapterTitle:t.chapterTitle,nodeTitle:t.question.nodeTitle??t.question.speaker,speaker:t.question.speaker,prompt:t.question.prompt,correctLabel:(s==null?void 0:s.label)??"",correctReply:(s==null?void 0:s.reply)??"",lastWrongChoiceLabel:(r==null?void 0:r.label)??`选项 ${t.selectedIndex+1}`,lastWrongChoiceReply:(r==null?void 0:r.reply)??"",wrongCount:1,firstWrongAt:a,lastWrongAt:a};return l.resolvedAt=void 0,n.wrongQuestions[i]=l,n.updatedAt=a,e.currentLearnerId=n.id,io(e),l},oR=t=>{const e=op(),n=lp(e),i=n.wrongQuestions[t];if(!i)return null;const r=as(),s={...i,resolvedAt:r,resolvedCount:(i.resolvedCount??0)+1};return n.wrongQuestions[t]=s,n.updatedAt=r,io(e),s},Ju=()=>{const t=op(),e=lp(t),n=Object.values(e.wrongQuestions),i=n.filter(r=>!r.resolvedAt).sort((r,s)=>s.lastWrongAt!==r.lastWrongAt?s.lastWrongAt-r.lastWrongAt:s.wrongCount-r.wrongCount);return{learner:{id:e.id,name:e.name},wrongCount:n.reduce((r,s)=>r+s.wrongCount,0),questionCount:i.length,questions:i}},lR="_world_u6fwa_1",cR="_canvas_u6fwa_11",uR="_titleMark_u6fwa_30",fR="_sideDock_u6fwa_61",dR="_mapButton_u6fwa_72",hR="_primaryButton_u6fwa_73",pR="_option_u6fwa_74",mR="_clearPanel_u6fwa_75",gR="_questPanel_u6fwa_116",_R="_questHead_u6fwa_130",vR="_currentQuest_u6fwa_212",xR="_doneQuest_u6fwa_217",yR="_lockedQuest_u6fwa_221",SR="_toast_u6fwa_226",MR="_mentorIntro_u6fwa_247",ER="_mentorFigure_u6fwa_264",TR="_mentorBubble_u6fwa_280",wR="_mentorName_u6fwa_309",AR="_storyStage_u6fwa_331",CR="_storyActive_u6fwa_353",RR="_storyPlaying_u6fwa_357",bR="_storyVideo_u6fwa_361",PR="_dialogue_u6fwa_379",LR="_speaker_u6fwa_391",IR="_dialogBody_u6fwa_392",DR="_challengeBadge_u6fwa_427",NR="_feedback_u6fwa_430",UR="_choices_u6fwa_504",FR="_good_u6fwa_573",OR="_bad_u6fwa_581",kR="_clearActions_u6fwa_641",BR="_secondaryButton_u6fwa_653",zR="_wrongBook_u6fwa_673",VR="_wrongBookHead_u6fwa_686",HR="_wrongBookStats_u6fwa_718",GR="_wrongBookList_u6fwa_748",WR="_badgeButton_u6fwa_816",XR="_badgeDot_u6fwa_820",jR="_wrongBookEmpty_u6fwa_838",Ke={world:lR,canvas:cR,titleMark:uR,sideDock:fR,mapButton:dR,primaryButton:hR,option:pR,clearPanel:mR,questPanel:gR,questHead:_R,currentQuest:vR,doneQuest:xR,lockedQuest:yR,toast:SR,mentorIntro:MR,mentorFigure:ER,mentorBubble:TR,mentorName:wR,storyStage:AR,storyActive:CR,storyPlaying:RR,storyVideo:bR,dialogue:PR,speaker:LR,dialogBody:IR,challengeBadge:DR,feedback:NR,choices:UR,good:FR,bad:OR,clearActions:kR,secondaryButton:BR,wrongBook:zR,wrongBookHead:VR,wrongBookStats:HR,wrongBookList:GR,badgeButton:WR,badgeDot:XR,wrongBookEmpty:jR},YR="./",cp=t=>`${YR}${t}`,qR=cp("mentor-pet/xiaozong-pet-clean.webp"),$R=["#d9443f","#2f9f92","#f0b33c","#3fb7c3","#e06a45"],wl=[{pauseAt:15.2,questionIndexes:[0,1]},{pauseAt:28.4,questionIndexes:[2,3]},{pauseAt:36.4,questionIndexes:[4]}],Ba=t=>t.nodeTitle??t.speaker,KR=t=>new Promise((e,n)=>{new Tv().load(cp(t),i=>{i.colorSpace=Kt,i.minFilter=zt,i.magFilter=zt,e(i)},void 0,n)}),Cg="浏览器需要一次点击确认，点击画面继续任务",Rg=(t,e)=>{t&&(t.pause(),t.currentTime=0,t.play().catch(e))};function ZR({chapterTitle:t,questions:e,onChapterComplete:n,onStartNextChapter:i,onReturnMap:r}){var Oe;const s=be.useRef(null),a=be.useRef(null),[o,l]=be.useState(!1),[c,d]=be.useState(0),[h,u]=be.useState(0),[p,v]=be.useState(0),[E,g]=be.useState(()=>e.map(()=>!1)),[f,m]=be.useState("idle"),[_,M]=be.useState(null),[R,T]=be.useState(!1),[C,x]=be.useState(!1),[A,b]=be.useState("第一项任务即将开始"),[P,N]=be.useState(!1),[X,q]=be.useState(()=>Ju()),D=be.useMemo(()=>e.map((fe,Ae)=>({...fe,id:`${Ae}-${fe.speaker}`,accent:$R[Ae]??"#d9443f"})),[e]),k=_?D[_.questionIndex]:null,z=E.every(Boolean),B=E.filter(Boolean).length,Y="欢迎来到通用入职闯关。我是数字人老肖。接下来请从第一项任务开始，进入场景后完成互动问答，逐步收集本章印章。",Q=Y.slice(0,c);be.useEffect(()=>{if(o||c>=Y.length)return;const fe=window.setTimeout(()=>{d(Ae=>Math.min(Ae+1,Y.length))},34);return()=>window.clearTimeout(fe)},[Y.length,o,c]),be.useEffect(()=>{if(o||c<Y.length)return;const fe=window.setTimeout(()=>{l(!0),b("第一项任务开始：企业概况馆"),me()},520);return()=>window.clearTimeout(fe)},[Y.length,o,c]),be.useEffect(()=>{const fe=s.current;if(!fe)return;let Ae=!1,Ce=0;const it=new mv,Re=new rp(-8,8,4.5,-4.5,.1,20);Re.position.z=10;const dt=new Uv({antialias:!0,alpha:!1,preserveDrawingBuffer:!0,powerPreference:"high-performance"});dt.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),dt.outputColorSpace=Kt,fe.appendChild(dt.domElement);const L=new Co({color:6735805}),st=new Dn(new xa(16,9),L);it.add(st),KR("game-scenes/reference-world-01.jpg").then(ce=>{if(Ae){ce.dispose();return}L.map=ce,L.color.set(16777215),L.needsUpdate=!0}).catch(()=>{L.color.set(6735805)});const He=()=>{const ce=fe.clientWidth||window.innerWidth,ht=fe.clientHeight||window.innerHeight;dt.setSize(ce,ht,!1);const w=ce/ht,y=16/9;if(w>=y)Re.left=-8,Re.right=8,Re.top=4.5,Re.bottom=-4.5;else{const O=16/w;Re.left=-8,Re.right=8,Re.top=O/2,Re.bottom=-O/2}Re.updateProjectionMatrix()},at=ce=>{Ae||(Ce=requestAnimationFrame(at),st.position.x=Math.sin(ce*18e-5)*.04,st.position.y=Math.cos(ce*2e-4)*.025,dt.render(it,Re))};return window.addEventListener("resize",He),He(),Ce=requestAnimationFrame(at),()=>{var ce;Ae=!0,cancelAnimationFrame(Ce),window.removeEventListener("resize",He),dt.domElement.parentElement===fe&&fe.removeChild(dt.domElement),(ce=L.map)==null||ce.dispose(),L.dispose(),st.geometry.dispose(),dt.dispose()}},[]);const he=fe=>{if(fe>h){b("先跟随场景完成前面的互动，再解锁这一项");return}b("任务会随场景推进自动触发，请继续探索")},me=()=>{u(0),v(0),M(null),m("playing"),Rg(a.current,()=>{b(Cg)})},Ve=(fe=p)=>{const Ae=a.current;Ae==null||Ae.pause();const Ce=wl[fe],it=(Ce==null?void 0:Ce.questionIndexes.find(Re=>!E[Re]))??h;m("dialog"),M({encounterIndex:fe,questionIndex:it,step:"question",selectedIndex:null}),b("互动对话已触发，完成题目继续任务")},$e=()=>{const fe=a.current;if(!fe||f!=="playing"||_)return;const Ae=wl[p];Ae&&fe.currentTime>=Ae.pauseAt&&Ve(p)},De=()=>{if(f==="playing"&&!_&&!z){const fe=Math.min(p,wl.length-1);Ve(fe)}},V=fe=>{if(!_||_.step==="feedback")return;const Ae=D[_.questionIndex];fe!==Ae.correctIndex&&(aR({chapterTitle:t,question:Ae,selectedIndex:fe}),q(Ju())),M({..._,step:"feedback",selectedIndex:fe})},te=()=>{if(!_)return;const fe=D[_.questionIndex],Ae=_.selectedIndex===fe.correctIndex;g(L=>{const st=[...L];return st[_.questionIndex]=!0,st});const Ce=Math.min(D.length-1,_.questionIndex+1);u(L=>Math.max(L,Ce));const it=wl[_.encounterIndex],Re=it==null?void 0:it.questionIndexes.find(L=>L>_.questionIndex);if(Re!==void 0){M({encounterIndex:_.encounterIndex,questionIndex:Re,step:"question",selectedIndex:null}),b(Ae?`继续对话：${Ba(D[Re])}`:"已记录到错题本，继续下一项");return}const dt=_.encounterIndex+1;if(v(dt),M(null),_.questionIndex+1>=D.length){m("idle"),T(!0),n==null||n(),b("第一章已通关，领取通用入职章");return}m("playing"),b(Ae?`已盖章：${fe.reward??Ba(fe)}，继续探索下一个场景`:"已记录到错题本，继续探索下一个场景"),window.setTimeout(()=>{var L;(L=a.current)==null||L.play().catch(()=>{b("浏览器需要一次点击确认，点击画面继续任务")})},180)},se=()=>{const fe=e.map(()=>!1);g(fe),u(0),v(0),T(!1),x(!1),M(null),m("playing"),b("已重置路线，第一项任务即将开始"),Rg(a.current,()=>{b(Cg)})},le=()=>{q(Ju())},Fe=fe=>{oR(fe),le(),b("已标记为已看")},we=k&&(_==null?void 0:_.selectedIndex)!==null&&(_==null?void 0:_.selectedIndex)!==void 0?k.choices[_.selectedIndex]:null,je=!!(k&&(_==null?void 0:_.selectedIndex)===k.correctIndex);return F.jsxs("section",{className:Ke.world,"aria-label":`${t}任务线闯关`,children:[F.jsx("div",{ref:s,className:Ke.canvas}),F.jsxs("div",{className:Ke.titleMark,"aria-hidden":"true",children:[F.jsx("strong",{children:"通用入职"}),F.jsx("span",{children:"趣味闯关"})]}),F.jsx("button",{type:"button",className:Ke.mapButton,title:"任务地图",children:F.jsx(yS,{size:20,"aria-hidden":"true"})}),F.jsxs("aside",{className:Ke.sideDock,"aria-label":"游戏功能按钮",children:[F.jsx("button",{type:"button",title:"任务清单",children:F.jsx(vS,{size:21,"aria-hidden":"true"})}),F.jsx("button",{type:"button",title:"新人手册",onClick:r,children:F.jsx(Y_,{size:21,"aria-hidden":"true"})}),F.jsxs("button",{type:"button",title:"错题本",className:X.questionCount>0?Ke.badgeButton:"",onClick:()=>{le(),N(fe=>!fe)},children:[F.jsx(SS,{size:21,"aria-hidden":"true"}),X.questionCount>0&&F.jsx("span",{className:Ke.badgeDot,children:X.questionCount})]}),F.jsx("button",{type:"button",title:"重置章节",onClick:se,children:F.jsx(ES,{size:21,"aria-hidden":"true"})}),F.jsx("button",{type:"button",title:"返回手册",onClick:r,children:F.jsx($_,{size:21,"aria-hidden":"true"})})]}),o&&F.jsxs("aside",{className:Ke.questPanel,"aria-label":"章节任务进度",children:[F.jsxs("div",{className:Ke.questHead,children:[F.jsx("span",{children:"第一章"}),F.jsxs("strong",{children:[B," / ",D.length]})]}),F.jsx("ol",{children:D.map((fe,Ae)=>{const Ce=E[Ae],it=Ae===h,Re=Ae>h;return F.jsx("li",{className:[Ce?Ke.doneQuest:"",it?Ke.currentQuest:"",Re?Ke.lockedQuest:""].filter(Boolean).join(" "),children:F.jsxs("button",{type:"button",onClick:()=>he(Ae),disabled:Re,children:[F.jsx("span",{children:Ce?F.jsx(mS,{size:13,"aria-hidden":"true"}):Ae+1}),F.jsx("p",{children:Ba(fe)})]})},fe.id)})})]}),F.jsx("section",{className:[Ke.storyStage,f!=="idle"?Ke.storyActive:"",f==="playing"?Ke.storyPlaying:""].join(" "),"aria-label":"任务场景",children:F.jsx("video",{ref:a,className:Ke.storyVideo,src:cp("game-scenes/chapter-01-task-01.mp4"),playsInline:!0,muted:!0,preload:"metadata",onTimeUpdate:$e,onEnded:De})}),o&&F.jsxs("div",{className:Ke.toast,"aria-live":"polite",children:[F.jsx(TS,{size:16,"aria-hidden":"true"}),F.jsx("span",{children:A})]}),!o&&F.jsxs("section",{className:Ke.mentorIntro,"aria-label":"数字人老肖闯关引导",children:[F.jsx("span",{className:Ke.mentorFigure,style:{backgroundImage:`url("${qR}")`},"aria-hidden":"true"}),F.jsxs("div",{className:Ke.mentorBubble,children:[F.jsxs("div",{className:Ke.mentorName,children:[F.jsx(Zf,{size:16,"aria-hidden":"true"}),"数字人老肖"]}),F.jsx("p",{children:Q})]})]}),_&&k&&F.jsxs("section",{className:Ke.dialogue,"aria-live":"polite",children:[F.jsxs("div",{className:Ke.speaker,children:[F.jsx("span",{children:(Oe=k.nodeTitle)!=null&&Oe.includes("系统")?F.jsx(gS,{size:24}):F.jsx(AS,{size:24})}),F.jsxs("div",{children:[F.jsx("p",{children:k.speaker}),F.jsx("strong",{children:Ba(k)})]})]}),_.step==="question"&&F.jsxs("div",{className:Ke.dialogBody,children:[F.jsxs("div",{className:Ke.challengeBadge,children:["互动对话 ",String(_.questionIndex+1).padStart(2,"0")," · 选择回应"]}),F.jsx("p",{children:k.mechanism}),F.jsx("h2",{children:k.prompt}),F.jsx("div",{className:Ke.choices,children:k.choices.map((fe,Ae)=>F.jsxs("button",{type:"button",className:Ke.option,onClick:()=>V(Ae),children:[F.jsx("span",{children:String.fromCharCode(65+Ae)}),F.jsx("strong",{children:fe.label})]},fe.label))})]}),_.step==="feedback"&&we&&F.jsxs("div",{className:Ke.dialogBody,children:[F.jsxs("div",{className:Ke.challengeBadge,children:[je?"CLEAR":"错题已记录"," · ",k.reward??Ba(k)]}),F.jsxs("div",{className:[Ke.feedback,je?Ke.good:Ke.bad].join(" "),children:[je?F.jsx(q_,{size:24,"aria-hidden":"true"}):F.jsx(_S,{size:24,"aria-hidden":"true"}),F.jsxs("div",{children:[F.jsx("strong",{children:je?k.success:k.fail}),F.jsx("p",{children:we.reply})]})]}),F.jsxs("button",{type:"button",className:Ke.primaryButton,onClick:te,children:[je?_.questionIndex+1>=D.length?"领取通关章":"盖章并继续":"继续",je&&_.questionIndex+1>=D.length?F.jsx(gu,{size:18,"aria-hidden":"true"}):F.jsx(Zf,{size:18,"aria-hidden":"true"})]})]})]}),R&&!_&&F.jsx("section",{className:Ke.clearPanel,"aria-label":C?"开启第二阶段":"通关结果",children:C?F.jsxs(F.Fragment,{children:[F.jsx(gu,{size:34,"aria-hidden":"true"}),F.jsx("p",{children:"NEXT CHAPTER"}),F.jsx("h2",{children:"业务罗盘已点亮"}),F.jsx("span",{children:"通用入职章已收入手册。是否翻开第二章，进入业务认知，开始了解出口易的业务全景？"}),F.jsxs("div",{className:Ke.clearActions,children:[F.jsx("button",{type:"button",className:Ke.secondaryButton,onClick:r,children:"稍后再看"}),F.jsx("button",{type:"button",onClick:i??r,children:"开启业务认知"})]})]}):F.jsxs(F.Fragment,{children:[F.jsx(gu,{size:34,"aria-hidden":"true"}),F.jsx("p",{children:"CHAPTER CLEARED"}),F.jsx("h2",{children:"通用入职通关章"}),F.jsx("span",{children:"五个任务点已完成。新人已完成企业概况、文化价值观、十二条令、财务合规与仓储运营的基础认知。"}),F.jsx("button",{type:"button",onClick:()=>x(!0),children:"领取通关章"})]})}),P&&F.jsxs("section",{className:Ke.wrongBook,"aria-label":"错题本",children:[F.jsxs("header",{className:Ke.wrongBookHead,children:[F.jsxs("div",{children:[F.jsx("span",{children:"错题本"}),F.jsx("strong",{children:X.learner.name})]}),F.jsx("button",{type:"button",onClick:()=>N(!1),children:"关闭"})]}),F.jsxs("div",{className:Ke.wrongBookStats,children:[F.jsxs("div",{children:[F.jsx("strong",{children:X.questionCount}),F.jsx("span",{children:"道错题"})]}),F.jsxs("div",{children:[F.jsx("strong",{children:X.wrongCount}),F.jsx("span",{children:"次错误"})]})]}),F.jsx("ol",{className:Ke.wrongBookList,children:X.questions.length?X.questions.map(fe=>F.jsxs("li",{children:[F.jsx("p",{children:fe.nodeTitle}),F.jsx("strong",{children:fe.prompt}),F.jsxs("span",{children:["错选：",fe.lastWrongChoiceLabel]}),F.jsxs("small",{children:["正确：",fe.correctLabel]}),F.jsx("button",{type:"button",onClick:()=>Fe(fe.key),children:"标记已看"})]},fe.key)):F.jsxs("li",{className:Ke.wrongBookEmpty,children:[F.jsx("strong",{children:"还没有错题记录"}),F.jsx("span",{children:"答错一次后，这里会自动累计。"})]})})]})]})}const bg={forest:[{nodeTitle:"企业概况馆",nodeSubtitle:"Company Profile",speaker:"展馆讲解员",mechanism:"讲解员会确认你是否知道出口易在集团里的定位，以及它服务的核心客户场景。",prompt:"关于出口易，下列哪项理解最准确？",reward:"企业认知章",mapX:16,mapY:74,correctIndex:1,choices:[{label:"出口易只负责公司内部行政支持",reply:"不对。出口易是面向跨境电商卖家的物流服务品牌。"},{label:"出口易提供海外仓储、国际头程、国际专线、小包快递等服务",reply:"对。它是集团旗下核心跨境物流品牌。"},{label:"出口易主要做线下门店零售",reply:"这个方向和新人指南里的业务定位不一致。"}],success:"企业概况馆亮起，你拿到了第一枚企业认知章。",fail:"讲解员提示：先记住出口易的核心身份是跨境物流服务品牌。"},{nodeTitle:"文化信标",nodeSubtitle:"Culture Beacon",speaker:"文化导师",mechanism:"这道题看你能不能把企业文化落到日常判断里，而不是只背口号。",prompt:"学习企业文化时，最重要的落点是什么？",reward:"文化理解章",mapX:32,mapY:48,correctIndex:0,choices:[{label:"把诚信正直、勇于担当、协作共赢等要求变成日常行为标准",reply:"对。文化要落到沟通、协作和解决问题里。"},{label:"只要记住 Better Faster Easier 这几个英文词",reply:"能记住不等于能在工作场景中用起来。"},{label:"只看自己部门相关内容，其他都不用理解",reply:"部门重点不同，但通用文化是所有新人共同的底层规则。"}],success:"文化信标被点亮，文化理解章已收入通关手册。",fail:"导师提醒：文化不是装饰文案，而是协作时的判断标准。"},{nodeTitle:"十二条令石碑",nodeSubtitle:"Working Principles",speaker:"石碑守护者",mechanism:"石碑会检查你是否掌握确认、同步、复盘这些基本工作习惯。",prompt:"收到一个复杂指令后，下面哪种做法最符合“确认指令”？",reward:"工作习惯章",mapX:52,mapY:66,correctIndex:2,choices:[{label:"只回复“收到”，后面按自己理解做",reply:"复杂指令只回复收到还不够，容易理解偏差。"},{label:"先不回复，等做完再统一说明",reply:"第一时间确认很重要，不能让对方不知道你是否已接收。"},{label:"及时确认并复述关键要求，细节不清楚就追问后再做方案",reply:"对。复杂指令要确认理解、补齐细节，再进入执行。"}],success:"石碑出现新的刻痕，工作习惯章已盖章。",fail:"守护者提示：复杂指令要确认、复述、追问，再行动。"},{nodeTitle:"报销原则",nodeSubtitle:"Reimbursement",speaker:"财务向导",mechanism:"报销规则看似细碎，核心只有一条：真实、合规、可追溯。",prompt:"关于报销，哪一项最符合新人指南？",reward:"流程合规章",mapX:70,mapY:38,correctIndex:1,choices:[{label:"只要金额不大，收据也可以长期替代发票",reply:"不对。新人指南明确提醒收据不等于发票。"},{label:"报销要实事求是，发票流、资金流、业务流保持一致",reply:"对。这是报销合规里的核心判断。"},{label:"拿到材料后可以先报销，再慢慢补证明",reply:"不对。流程和凭证都要先齐，再进入报销。"}],success:"审批站放行，流程合规章已盖章。",fail:"财务向导提醒：报销和合同审批要按正式流程走。"},{nodeTitle:"发票常识",nodeSubtitle:"Invoice Check",speaker:"财务向导",mechanism:"这一步会检查你是否分得清发票、收据和电子凭证。",prompt:"关于发票，哪一项说法正确？",reward:"票据规范章",mapX:64,mapY:52,correctIndex:2,choices:[{label:"收据可以长期替代发票",reply:"不对。收据不等于发票。"},{label:"电子发票不能用于报销",reply:"不对。电子发票本身就是可用的报销凭证。"},{label:"附件要上传电子发票，收据不等于发票",reply:"对。这是新人最容易搞混的点。"}],success:"票据规则已点亮，票据规范章到手。",fail:"向导提醒：别把收据和发票混为一谈。"},{nodeTitle:"合同审批",nodeSubtitle:"Contract Flow",speaker:"法务财务联络员",mechanism:"合同不是先盖章再补流程，顺序反了就会出问题。",prompt:"合同审批的正确流程更接近哪一项？",reward:"合同流程章",mapX:78,mapY:42,correctIndex:1,choices:[{label:"先盖章，再慢慢补审批",reply:"不对。审批必须先完成。"},{label:"部门上级审核 → 法务审核 → 财务审核 → CEO 审核，全部通过后由 HR 盖章",reply:"对。流程要逐级审批，最后再盖章。"},{label:"只要部门经理同意就可以直接签约",reply:"不对。合同审批需要完整流程。"}],success:"合同流程通道已打开，合同流程章收入手册。",fail:"联络员提醒：流程要走全，不要跳步。"},{nodeTitle:"考勤制度",nodeSubtitle:"Attendance",speaker:"行政导师",mechanism:"考勤不是装饰规则，是真实工作节奏的一部分。",prompt:"新人打卡最常用的方式有哪些？",reward:"考勤合规章",mapX:18,mapY:72,correctIndex:0,choices:[{label:"企业微信平台 100 米内定位打卡，或连接公司 WiFi 打卡",reply:"对。这是最常见的打卡方式。"},{label:"只要在家连 VPN 就能自动打卡",reply:"不对。考勤要按公司制度执行。"},{label:"每周只需要一次打卡",reply:"不对。考勤是按日和制度要求执行的。"}],success:"考勤合规章已点亮，继续前进。",fail:"行政导师提醒：打卡方式和审批路径都要按制度走。"},{nodeTitle:"沟通教练",nodeSubtitle:"5W1H",speaker:"沟通教练",mechanism:"需求说清楚，比话说多更重要。",prompt:"需求传递中的 5W1H 不包括哪项？",reward:"沟通结构章",mapX:26,mapY:62,correctIndex:2,choices:[{label:"What / Why / Who / When / Where / How",reply:"对。5W1H 就是这六个基础维度。"},{label:"把目标、范围、时间、标准讲清楚",reply:"这是对 5W1H 的实际落地。"},{label:"How many",reply:"不对。5W1H 里不是这个。"}],success:"沟通结构已归位，信息开始变清晰。",fail:"教练提醒：先把六个维度讲完整，再进入执行。"},{nodeTitle:"对上沟通",nodeSubtitle:"Reporting",speaker:"沟通教练",mechanism:"向上汇报最怕绕圈子，先结论再展开才高效。",prompt:"汇报上级时，更推荐的结构是什么？",reward:"汇报清晰章",mapX:36,mapY:32,correctIndex:1,choices:[{label:"先表达情绪，再慢慢说结论",reply:"不够高效，容易把重点淹没。"},{label:"结论 → 依据 → 请求",reply:"对。新人汇报建议保持这个顺序。"},{label:"只说过程，不说结果",reply:"不对。汇报要让对方快速抓住重点。"}],success:"汇报清晰章已盖上，下一步更好推进。",fail:"教练提醒：别让领导猜你的结论。"},{nodeTitle:"对事不对人",nodeSubtitle:"Conflict Resolution",speaker:"沟通教练",mechanism:"冲突化解不是更强硬，而是更清楚。",prompt:"对事不对人沟通法的核心组合是？",reward:"协作表达章",mapX:44,mapY:28,correctIndex:0,choices:[{label:"客观事实 + 影响分析 + 解决建议",reply:"对。先把事情说清楚，再谈建议。"},{label:"先批评人，再说事情",reply:"这会让沟通直接升级。"},{label:"只说“你们又拖了”",reply:"太笼统，也不利于解决问题。"}],success:"协作表达章亮起，沟通开始变顺。",fail:"教练提醒：把问题放在桌面上，不要把人推上去。"},{nodeTitle:"保密义务",nodeSubtitle:"Confidentiality",speaker:"合规导师",mechanism:"商业信息不是公开资料，不能随口分享。",prompt:"下列哪项最需要保密？",reward:"信息安全章",mapX:58,mapY:18,correctIndex:1,choices:[{label:"可以随便分享给熟人",reply:"不对。内部信息不能随意外传。"},{label:"未公开且有重要价值的商业信息、运力、渠道、价格等",reply:"对。这些都是核心保密内容。"},{label:"只有合同才算保密",reply:"不对。很多未公开信息都属于保密范围。"}],success:"信息安全章已点亮，保护边界更清楚。",fail:"合规导师提醒：信息边界别踩线。"},{nodeTitle:"竞业限制",nodeSubtitle:"Competition Rules",speaker:"合规导师",mechanism:"职业道德里很重要的一条，是不要带着秘密去竞争对手那里。",prompt:"竞业限制的意义是什么？",reward:"职业边界章",mapX:68,mapY:24,correctIndex:0,choices:[{label:"防止带着商业秘密投奔竞争对手",reply:"对。竞业限制就是为了守住商业秘密。"},{label:"只约束实习生",reply:"不对。规则不只针对实习生。"},{label:"只要离职就能公开原公司信息",reply:"不对。保密义务不会因为离职自动消失。"}],success:"职业边界章已收入，规则更清楚了。",fail:"合规导师提醒：边界感就是职业感。"},{nodeTitle:"仓储运营塔",nodeSubtitle:"Warehouse Operations",speaker:"运营调度员",mechanism:"把业务线和操作节点串起来，才算真的认识仓储运营。",prompt:"新人指南里提到的国内仓三大业务线是哪些？",reward:"通用入职通关章",mapX:84,mapY:22,correctIndex:0,choices:[{label:"直发组、头程组、拣配组",reply:"对。三条业务线分别覆盖直发、头程和拣货打包贴标代发。"},{label:"市场组、品牌组、行政组",reply:"这些不是仓储运营章节里的三大业务线。"},{label:"招聘组、培训组、薪酬组",reply:"这是人力相关方向，不是国内仓业务线。"}],success:"运营塔完成校准，通用入职通关章已盖入手册。",fail:"调度员提示：先记住国内仓三大业务线，再理解后续操作节点。"},{nodeTitle:"仓内节点",nodeSubtitle:"Operations Flow",speaker:"运营调度员",mechanism:"流程节点不是摆设，顺序和动作都很重要。",prompt:"下面哪组更接近仓内核心操作节点？",reward:"流程节点章",mapX:86,mapY:30,correctIndex:0,choices:[{label:"揽收卸货、核重测量、分拣归类、集包装箱、整箱称重、建出库单、装车发货、安检查验",reply:"对。这个顺序最贴近仓内实际流程。"},{label:"先发货再称重，最后补单",reply:"不对。流程顺序不能反着来。"},{label:"只需要分拣，不需要核重",reply:"不对。关键节点不能省略。"}],success:"流程节点章已归位，仓内节奏开始清晰。",fail:"调度员提醒：流程节点要按顺序看。"},{nodeTitle:"薪酬福利",nodeSubtitle:"Compensation",speaker:"人事导师",mechanism:"薪资知识不需要背太多数字，抓住关键公式即可。",prompt:"新人指南里的计薪天数约是多少？",reward:"薪酬理解章",mapX:12,mapY:18,correctIndex:1,choices:[{label:"30天 / 月",reply:"不对。公司有自己的计薪天数计算口径。"},{label:"21.75天 / 月",reply:"对。新人指南里写得很明确。"},{label:"20天 / 月",reply:"不对。"}],success:"薪酬理解章已盖好，继续前进。",fail:"人事导师提醒：先记住公式，再看细则。"}]},QR=t=>{const e=[...t];for(let n=e.length-1;n>0;n-=1){const i=Math.floor(Math.random()*(n+1));[e[n],e[i]]=[e[i],e[n]]}return e},ef=(t=5)=>QR(bg.forest).slice(0,Math.max(1,Math.min(t,bg.forest.length))).map(e=>({...e,choices:e.choices.map(n=>({...n}))})),dr="./",JR=`${dr}onboarding/general-training.html`,eb=`${dr}onboarding/phase2-flip.png`,tb=`${dr}onboarding/phase2-map.png`,tf="bfe-general-onboarding-knowledge-visited",nf="bfe-phase-one-complete",nb=[`${dr}onboarding/passport-cover.png`,`${dr}onboarding/passport-continue.png`,`${dr}onboarding/passport-stamp.png`,`${dr}onboarding/passport-open.png`,`${dr}onboarding/chapter-map.png`],Pg=16,Lg=9,Us=6.6,Ig=7.2,jl="forest",Yl=[{id:"forest",title:"通用入职",subtitle:"Phase 01",copy:"点击这里进入第一章通用入职。",x:4.02,y:1.32,color:3111935,accent:"#2f7bff"}],rf=Yl.reduce((t,e)=>(t[e.id]=e,t),{}),Fs=t=>t===jl,Bv=t=>Math.min(1,Math.max(0,t)),Xr=(t,e,n)=>{const i=Bv((n-t)/(e-t));return i*i*(3-2*i)},Al=(t,e,n,i=1.3)=>{const r=e<=0?1:Xr(e,e+i,t);return Math.min(r,1-Xr(n-i,n,t))},Cl=(t,e,n)=>Bv((t-e)/(n-e)),ib=(t,e,n=256,i=.14)=>{const r=document.createElement("canvas");r.width=n,r.height=n;const s=r.getContext("2d");if(!s)return new qt;const a=s.createRadialGradient(n/2,n/2,0,n/2,n/2,n/2);a.addColorStop(0,t),a.addColorStop(i,t),a.addColorStop(1,e),s.fillStyle=a,s.fillRect(0,0,n,n);const o=new $M(r);return o.colorSpace=Kt,o},rb=(t,e)=>`rgba(${t>>16},${t>>8&255},${t&255},${e})`;function sb(){const t=be.useRef(null),e=be.useRef("menu"),n=be.useRef({replay:()=>{},start:()=>{},pause:()=>{},resume:()=>{},skipToMap:()=>{},openPhase2:()=>{},enterRegion:()=>{},returnToMap:()=>{}}),[i,r]=be.useState("intro"),[s,a]=be.useState(null),[o,l]=be.useState(null),[c,d]=be.useState("menu"),[h,u]=be.useState("welcome"),[p,v]=be.useState("flip"),[E,g]=be.useState(()=>typeof window>"u"?!1:window.localStorage.getItem(tf)==="true"),[f,m]=be.useState(()=>typeof window>"u"?!1:window.localStorage.getItem(nf)==="true"),[_,M]=be.useState(!0),[R,T]=be.useState(""),[C,x]=be.useState(()=>ef(5)),A=be.useRef(""),b=be.useRef(f),P=[{id:"phase1",title:"通用",label:"第一章",status:f?"已通关":E?"已学习":"进行中",unlocked:!0},{id:"phase2",title:"业务",label:"第二章",status:"可进入",unlocked:!0}];be.useEffect(()=>{b.current=f},[f]);const N=be.useCallback(V=>{e.current=V,d(V)},[]),X=be.useCallback(()=>{u("welcome")},[]),q=be.useCallback(()=>{X(),N("chapter")},[X,N]),D=be.useCallback(()=>{u("actions"),N("chapter")},[N]),k=be.useCallback(()=>{N("menu"),X(),v("flip")},[X,N]),z=be.useCallback(()=>{g(!0),window.localStorage.setItem(tf,"true")},[]),B=be.useCallback(()=>{b.current=!0,m(!0),window.localStorage.setItem(nf,"true")},[]),Y=be.useCallback(()=>{z(),N("knowledge")},[z,N]),Q=be.useCallback(()=>{if(!E){Y();return}n.current.enterRegion(jl)},[E,Y]),he=be.useCallback(V=>{if(V==="phase1"){D();return}v("map"),N("phase2Entry")},[D,N]),me=(V="")=>F.jsx("nav",{className:[lt.chapterRail,V].filter(Boolean).join(" "),"aria-label":"章节跳转",onClick:te=>te.stopPropagation(),onKeyDown:te=>te.stopPropagation(),children:P.map(te=>F.jsxs("button",{type:"button",className:[lt.chapterRailItem,te.unlocked?"":lt.chapterRailLocked,te.status==="已通关"||te.status==="已学习"?lt.chapterRailDone:""].filter(Boolean).join(" "),disabled:!te.unlocked,onClick:se=>{se.stopPropagation(),he(te.id)},children:[F.jsx("span",{className:lt.chapterRailNode,children:te.label}),F.jsxs("span",{className:lt.chapterRailText,children:[F.jsx("strong",{children:te.title}),F.jsx("small",{children:te.status})]})]},te.id))}),Ve=be.useCallback(()=>{let V=ef(5),te=V.map(le=>`${le.nodeTitle??le.speaker}::${le.prompt}`).join(" | "),se=0;for(;te===A.current&&se<6;)V=ef(5),te=V.map(le=>`${le.nodeTitle??le.speaker}::${le.prompt}`).join(" | "),se+=1;A.current=te,x(V)},[]);be.useEffect(()=>{c!=="chapter"&&X()},[c,X]),be.useEffect(()=>{c==="knowledge"&&z()},[c,z]),be.useEffect(()=>{if(c!=="phase2Entry"||p!=="flip")return;const V=window.setTimeout(()=>{v("map")},1400);return()=>window.clearTimeout(V)},[c,p]),be.useEffect(()=>{const V=t.current;if(!V)return;let te=!1,se=0,le="intro",Fe=null,we=null,je=0,Oe=0,fe=performance.now(),Ae=!1;const Ce=new Uv({antialias:!0,alpha:!1,preserveDrawingBuffer:!0,powerPreference:"high-performance"});Ce.setClearColor(328450,1),Ce.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),Ce.outputColorSpace=Kt,V.appendChild(Ce.domElement);const it=new mv,Re=new bn(42,16/9,.1,140);Re.position.set(0,.05,7.8);const dt=new zn,L=new zn,st=new zn;it.add(dt,L,st);const He=new uE(16763275,1.35),at=new Xu(16751927,18,36,1.45);at.position.set(-4.8,2.8,5.6);const ce=new Xu(4385023,12,42,1.25);ce.position.set(0,.3,4.8);const ht=new Xu(16773052,20,52,1.1);ht.position.set(.2,2.7,5.8),it.add(He,at,ce,ht);const w=new Xe,y=new Xe,O=new Xe,Z=new hE,ne=new Tv,pe=Promise.all(nb.map(ge=>new Promise((ie,re)=>{ne.load(ge,Ie=>{Ie.colorSpace=Kt,Ie.anisotropy=Ce.capabilities.getMaxAnisotropy(),Ie.minFilter=zt,Ie.magFilter=zt,ie(Ie)},void 0,re)}))),ue=ge=>{le=ge,r(ge),V.dataset.mode=ge},K=(ge,ie)=>{const re=V.clientWidth||window.innerWidth,Ie=V.clientHeight||window.innerHeight;Ce.setSize(re,Ie,!1),Re.aspect=re/Ie,Re.updateProjectionMatrix();const Ye=2*Math.tan(ba.degToRad(Re.fov/2))*7.8,I=Ye*Re.aspect,ae=I/Ye,$=Pg/Lg,ve=ae>$?I:Ye*$,de=ae>$?I/$:Ye;ge.forEach(ee=>{ee.mesh.scale.set(ve,de,1)}),ie.forEach(ee=>{ee.scale.set(ve/Pg,de/Lg,1)})},J=async()=>{try{const ge=await pe;if(te){ge.forEach(Ge=>Ge.dispose());return}const ie=ge.map((Ge,rt)=>{const _t=new Co({map:Ge,transparent:!0,opacity:rt===0?1:0,depthTest:!1,depthWrite:!1}),Nt=new Dn(new xa(1,1,48,24),_t);Nt.renderOrder=rt;const _n=new zn;return _n.add(Nt),dt.add(_n),{group:_n,mesh:Nt,material:_t}}),re=ie[0],Ie=ie[1]??ie[0],Be=ie[2]??ie[0],Ye=ie[3]??ie[0],I=ie[4]??ie[0],ae=new zn,$=new zn,ve=new zn;L.add(ae,$,ve);const de=new nE({color:3625308,emissive:675683,emissiveIntensity:.8,roughness:.82,metalness:.05,transparent:!0,opacity:0,depthWrite:!1}),ee=new zn;for(let Ge=0;Ge<36;Ge+=1){const rt=new Dn(new np(.09+Math.random()*.09,.34+Math.random()*.8,5),de);rt.rotation.x=Math.PI/2,rt.rotation.z=Math.random()*Math.PI,rt.position.set(-1.2+Math.random()*2.8,-.85+Math.random()*1.35,.16+Math.random()*.45),ee.add(rt)}$.add(ee);const Pe=Yl.map(Ge=>{const rt=new GM(new vv({map:ib(rb(Ge.color,.95),"rgba(255,255,255,0)",256,.04),transparent:!0,opacity:0,blending:Qf,depthTest:!1}));return rt.position.set(Ge.x,Ge.y,.5),rt.scale.set(.76,1.7,1),rt.renderOrder=95,ve.add(rt),rt}),ze=Yl.map(Ge=>{const rt=new Co({color:Ge.color,transparent:!0,opacity:.06,depthTest:!1,depthWrite:!1}),_t=new Dn(new ep(.78,42),rt);return _t.position.set(Ge.x,Ge.y-.12,.65),_t.userData.region=Ge.id,_t.renderOrder=130,st.add(_t),_t});st.visible=!1;const At=[ae,$,ve,st],ut=()=>K(ie,At);ut(),window.addEventListener("resize",ut);const On=Ge=>{var Nt;const rt=Ce.domElement.getBoundingClientRect();return O.x=(Ge.clientX-rt.left)/rt.width*2-1,O.y=-((Ge.clientY-rt.top)/rt.height)*2+1,Z.setFromCamera(O,Re),((Nt=Z.intersectObjects(ze,!1)[0])==null?void 0:Nt.object.userData.region)??null},Tn=Ge=>{if(w.x=(Ge.clientX/window.innerWidth-.5)*2,w.y=(Ge.clientY/window.innerHeight-.5)*2,le!=="map"){we&&(we=null,l(null));return}e.current==="menu"&&(V.style.cursor="pointer");const rt=On(Ge);rt!==we&&(we=rt,l(rt),V.style.cursor=rt&&Fs(rt)?"pointer":"default")},us=Ge=>{if(le!=="map"||e.current!=="menu")return;const rt=On(Ge)??we??jl;Fs(rt)&&q()};window.addEventListener("pointermove",Tn,{passive:!0}),window.addEventListener("pointerdown",us),n.current={replay:()=>{Fe=null,a(null),we=null,l(null),X(),je=0,Oe=0,fe=performance.now(),Ae=!1,V.style.cursor="default",ue("cinematic")},start:()=>{k(),Fe=null,a(null),we=null,l(null),je=0,Oe=0,fe=performance.now(),Ae=!1,V.style.cursor="default",ue("cinematic")},pause:()=>{Ae=!0},resume:()=>{fe=performance.now(),Ae=!1},skipToMap:()=>{q(),Fe=null,a(null),we=null,l(null),je=Us,Oe=0,fe=performance.now(),Ae=!1,V.style.cursor="default",ue("map")},openPhase2:()=>{v("flip"),N("phase2Entry"),Fe=null,a(null),we=null,l(null),je=Us,Oe=0,fe=performance.now(),Ae=!1,V.style.cursor="default",ue("map")},enterRegion:Ge=>{Fs(Ge)&&(k(),Ve(),Fe=Ge,Oe=0,fe=performance.now(),we=null,l(null),a(Ge),V.style.cursor="default",ue("region"))},returnToMap:()=>{q(),Fe=null,a(null),we=null,l(null),V.style.cursor="default",ue("map")}},ue("intro"),M(!1);const Uo=Ge=>{if(te)return;se=requestAnimationFrame(Uo);const rt=Math.min(.05,(Ge-fe)/1e3);fe=Ge,Ae||(le==="cinematic"&&(je=Math.min(Ig,je+rt),je>=Us&&n.current.skipToMap()),le==="map"&&(je=Math.max(je,Us)),le==="region"&&(Oe+=rt));const _t=je,Nt=Cl(_t,0,1.8),_n=Cl(_t,1.2,2.9),wi=Cl(_t,2.6,4.8),ci=le==="intro"?0:le==="region"?1:Cl(_t,4,Ig),Lr=le==="intro"?1:Al(_t,0,2,.72),Ir=le==="intro"?0:Al(_t,.62,2.95,.72),fs=le==="intro"?0:Al(_t,1.9,4.25,.74),Ai=le==="intro"?0:Al(_t,3.18,5.55,.76),ds=le==="intro"?0:le==="region"?.34:Xr(4.55,6.35,_t),Dr=le==="map"?1:0,Nr=le==="region"?Xr(0,1.1,Oe):0,Ki=le==="intro"?0:Xr(.18,6.35,Math.min(_t,Us)),Ur=.03+Ki*.06;re.material.opacity=le==="intro"?1:Lr,Ie.material.opacity=Ir,Be.material.opacity=fs,Ye.material.opacity=Ai,I.material.opacity=Math.max(ds,Dr),y.lerp(w,.035),dt.position.x=y.x*.035+Ki*.012,dt.position.y=-y.y*.025+Ki*.03,dt.scale.setScalar(1+Ki*.06),L.position.x=y.x*.055+Ki*.006,L.position.y=-y.y*.035+Ki*.016,re.group.scale.setScalar(le==="intro"?1.01:1.01+Nt*.12),re.group.position.set(-.04*Nt,-.02+Nt*.05,Ur*.15),re.group.rotation.z=-.003+Nt*.004,Ie.group.scale.setScalar(1.02+Nt*.1),Ie.group.position.set(.02-Nt*.05,-.01+Nt*.05,.01+Ur*.5),Ie.group.rotation.z=-.003+Nt*.006,Be.group.scale.setScalar(1.03+_n*.14),Be.group.position.set(.05-_n*.08,-.02+_n*.05,.02+Ur*1.1),Be.group.rotation.z=.005-_n*.008,Ye.group.scale.setScalar(1.04+wi*.14),Ye.group.position.set(-.03+wi*.04,-.01+wi*.012,.025+Ur*1.75),Ye.group.rotation.z=-.001+wi*.003,I.group.scale.setScalar(le==="map"?1.01:1.08-ci*.05+Math.sin(Ge*25e-5)*.003),I.group.position.set(0,le==="map"?0:.05*(1-Xr(.1,1,ci)),.03+Ur*2.4),I.group.rotation.z=.001+ci*.002,ae.scale.setScalar(1+Nt*.04),ee.position.z=_n*.42,de.opacity=Math.max(Ai,ds)*Xr(.12,.75,_n)*.18,ee.rotation.z=Math.sin(Ge*7e-4)*.015,$.rotation.z=Math.sin(Ge*9e-4)*.012,Pe.forEach((Ci,S)=>{const U=Yl[S],j=we===U.id,G=Ci.material;G.opacity=Math.max(Ai,Dr)*(j?.82:.44+Math.sin(Ge*.004+S*1.7)*.15),Ci.scale.x=j?1.08:.76,Ci.scale.y=j?2.08:1.58+Math.sin(Ge*.003+S)*.22}),ze.forEach(Ci=>{const S=Ci.userData.region,U=Ci.material,j=we===S;U.opacity=le==="map"?j?.18:.06:0,Ci.scale.setScalar(j?1.18:1+Math.sin(Ge*.002)*.03)}),st.visible=le==="map",ve.visible=(le==="map"||le==="cinematic")&&Math.max(ds,Dr)>.002,ae.visible=(le==="intro"||le==="cinematic")&&Lr>.002,$.visible=le==="cinematic"&&Math.max(fs,Ai)>.002,He.intensity=.85+Lr*.55+Dr*.42+Nr*.25,at.intensity=2+Lr*6+Ir*3,ce.intensity=fs*6+Ai*7+Dr*5+Nr*7,ht.intensity=Ai*10+ds*8+Nr*10;const Fo=Fe?rf[Fe]:null;Re.position.z=le==="region"?6.2-Nr*.6:7.8-_n*.18-wi*.22+ci*.18,Re.position.x=le==="region"&&Fo?ba.lerp(Re.position.x,Fo.x*.05,.025):ba.lerp(Re.position.x,0,.03),Re.position.y=le==="region"?-.2+Nr*.05:.05-Nt*.08+wi*.12-ci*.08,Re.rotation.x=ba.lerp(Re.rotation.x,0,.04),Re.rotation.y=ba.lerp(Re.rotation.y,0,.04),Re.rotation.z=Math.sin(Ge*32e-5)*.004,Ce.render(it,Re)};return se=requestAnimationFrame(Uo),()=>{window.removeEventListener("resize",ut),window.removeEventListener("pointermove",Tn),window.removeEventListener("pointerdown",us)}}catch{te||(T("WebGL failed to start."),M(!1))}};let _e;return J().then(ge=>{_e=ge}),()=>{te=!0,cancelAnimationFrame(se),_e==null||_e(),Ce.domElement.parentElement===V&&V.removeChild(Ce.domElement),Ce.dispose()}},[]);const $e=s?rf[s]:null,De=o?rf[o]:null;return F.jsxs("section",{className:lt.game,"aria-label":"出口易新人通关手册 WebGL demo",children:[F.jsx("div",{ref:t,className:lt.viewport}),_&&F.jsx("div",{className:lt.loading,"aria-live":"polite",children:F.jsx("span",{})}),R&&F.jsx("div",{className:lt.error,children:R}),i!=="intro"&&F.jsx(iR,{mood:c==="knowledge"?"knowledge":c==="chapter"&&h==="actions"?"challenge":"welcome",showDialog:!1}),i==="intro"&&!_&&F.jsx("div",{className:lt.startScreen,onClick:()=>n.current.start(),onKeyDown:V=>{(V.key==="Enter"||V.key===" ")&&(V.preventDefault(),n.current.start())},role:"button",tabIndex:0,children:F.jsx("div",{className:lt.startButtonWrap,children:F.jsx("button",{type:"button",className:lt.startButton,"aria-label":"开始通关",title:"开始通关",onClick:V=>{V.stopPropagation(),n.current.start()},children:F.jsx(MS,{size:18,"aria-hidden":"true"})})})}),i!=="intro"&&F.jsxs(F.Fragment,{children:[i==="map"&&F.jsxs(F.Fragment,{children:[c==="chapter"&&F.jsx("div",{className:lt.chapterOverlay,onClick:()=>{h==="welcome"&&u("actions")},onKeyDown:V=>{(V.key==="Enter"||V.key===" ")&&(V.preventDefault(),h==="welcome"&&u("actions"))},role:"button",tabIndex:0,"aria-label":"点击屏幕继续",children:F.jsxs("div",{className:lt.chapterOverlayLayout,children:[me(),F.jsxs("section",{className:[lt.chapterMenu,h==="welcome"?lt.chapterMenuWelcome:lt.chapterMenuActionsView].filter(Boolean).join(" "),"aria-label":"通用入职章节入口",children:[F.jsx("div",{className:lt.chapterMenuHead,children:F.jsxs("div",{className:lt.chapterMenuIntro,children:[F.jsx("p",{children:"第一章 · 通用入职"}),h==="welcome"?F.jsxs(F.Fragment,{children:[F.jsx("h2",{children:"欢迎来到出口易"}),F.jsx("span",{children:"我是老肖，接下来我会带你开始第一章。"})]}):F.jsxs(F.Fragment,{children:[F.jsx("h2",{children:"请选择下一步"}),F.jsx("span",{children:E?"你可以继续学习，也可以进入趣味闯关。":"首次进入需先学习知识库，完成后即可开始闯关。"})]})]})}),h==="actions"&&F.jsxs("div",{className:lt.chapterActions,children:[F.jsxs("button",{type:"button",className:lt.chapterAction,onClick:Y,children:[F.jsx("span",{children:F.jsx(Y_,{size:26,"aria-hidden":"true"})}),F.jsx("strong",{children:"学习知识库"}),F.jsx("small",{children:"先了解企业概况、企业文化、十二条令、财务报销与仓储运营基础。"})]}),F.jsxs("button",{type:"button",className:[lt.chapterAction,E?"":lt.chapterActionLocked].filter(Boolean).join(" "),onClick:Q,"aria-label":E?"进入趣味闯关":"首次需先学习知识库，点击前往学习",children:[F.jsx("span",{children:E?F.jsx(wS,{size:26,"aria-hidden":"true"}):F.jsx(xS,{size:25,"aria-hidden":"true"})}),F.jsx("strong",{children:"趣味闯关"}),F.jsx("small",{children:E?"进入互动任务线，完成业务问答并领取章节印章。":"首次需先进入知识库，之后本机将自动解锁。"})]})]})]})]})}),c==="knowledge"&&F.jsxs("section",{className:lt.knowledgePanel,"aria-label":"学习知识库",children:[F.jsxs("header",{className:lt.knowledgeHead,children:[F.jsxs("div",{children:[F.jsx("span",{children:"学习知识库"}),F.jsx("h2",{children:"出口易新人通用入职指南"})]}),F.jsxs("div",{className:lt.knowledgeButtons,children:[F.jsxs("button",{type:"button",onClick:()=>{D()},children:[F.jsx($_,{size:17,"aria-hidden":"true"}),"返回选择"]}),F.jsxs("button",{type:"button",onClick:()=>{z(),n.current.enterRegion(jl)},children:[F.jsx(q_,{size:17,"aria-hidden":"true"}),"进入测试"]})]})]}),F.jsx("iframe",{className:lt.knowledgeFrame,title:"出口易新人通用入职指南",src:JR})]}),c==="phase2Entry"&&F.jsxs("section",{className:lt.phase2Overlay,"aria-label":"第二阶段入口",onClick:()=>{p==="flip"&&v("map")},children:[F.jsx("img",{className:lt.phase2Image,src:p==="flip"?eb:tb,alt:"","aria-hidden":"true",draggable:!1}),p==="map"&&me(lt.phase2Rail)]})]}),i==="region"&&$e&&F.jsx(ZR,{chapterTitle:$e.title,questions:C,onChapterComplete:B,onStartNextChapter:()=>{B(),n.current.openPhase2()},onReturnMap:()=>n.current.returnToMap()}),De&&i==="map"&&c==="menu"&&F.jsxs("aside",{className:lt.regionCard,style:{"--accent":De.accent},onClick:()=>{i==="map"&&c==="menu"&&Fs(De.id)&&q()},onKeyDown:V=>{i!=="map"||c!=="menu"||!Fs(De.id)||(V.key==="Enter"||V.key===" ")&&(V.preventDefault(),q())},role:"button",tabIndex:i==="map"&&c==="menu"&&Fs(De.id)?0:-1,"aria-label":`进入${De.title}`,children:[F.jsx("p",{children:De.subtitle}),F.jsx("h2",{children:De.title}),F.jsx("span",{children:De.copy})]})]}),F.jsx("div",{className:lt.vignette,"aria-hidden":"true"})]})}X_(document.getElementById("root")).render(F.jsx(be.StrictMode,{children:F.jsx(sb,{})}));
