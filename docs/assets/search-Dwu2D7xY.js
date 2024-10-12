import{A as bt}from"./air-datepicker-6mRFTA1V.js";import{i as wt}from"./dropdown-BcidGZfk.js";class Et{constructor(){this.datePickerElement=document.getElementById("date-picker"),this.selectedDateElem=document.getElementById("selected-date"),this.datepickerContainer=null,this.datepicker=null,this.init()}init(){this.createDatepickerContainer(),this.initDatepicker(),this.addEventListeners()}createDatepickerContainer(){this.datepickerContainer=document.createElement("div"),this.datepickerContainer.style.display="none",this.datepickerContainer.style.zIndex="1000",this.datePickerElement.appendChild(this.datepickerContainer)}addEventListeners(){this.datePickerElement.addEventListener("click",e=>{e.stopPropagation(),this.toggleDatepicker()}),document.addEventListener("click",e=>{!this.datePickerElement.contains(e.target)&&this.datepickerContainer.style.display==="block"&&this.hideDatepicker()})}toggleDatepicker(){this.datepickerContainer.style.display==="none"?this.showDatepicker():this.hideDatepicker()}showDatepicker(){this.datepickerContainer.style.display="block",this.datePickerElement.classList.add("active"),this.datepicker&&this.datepicker.show()}hideDatepicker(){this.datepickerContainer.style.display="none",this.datePickerElement.classList.remove("active"),this.datepicker&&this.datepicker.hide()}initDatepicker(){const e=this;this.datepicker=new bt(this.datepickerContainer,{autoClose:!0,onSelect({date:n}){e.updateSelectedDate(n),e.hideDatepicker()}})}updateSelectedDate(e){if(e){const n=this.formatDate(e);this.selectedDateElem.textContent=n}else this.selectedDateElem.textContent="Выберите дату"}formatDate(e){const n=e.getDate(),c=e.getMonth()+1,u=e.getFullYear(),v=n<10?"0"+n:n,h=c<10?"0"+c:c;return`${v}.${h}.${u}`}}function Ct(){const r=document.querySelector(".search-row__sub"),e=document.querySelector(".search-row"),n=document.querySelectorAll(".category__btns");r.addEventListener("click",c=>{c.preventDefault(),e.classList.toggle("active")}),n.forEach(c=>{c.addEventListener("click",()=>{c.classList.toggle("active")})})}var N;(function(r){r.Range="range",r.Steps="steps",r.Positions="positions",r.Count="count",r.Values="values"})(N||(N={}));var _;(function(r){r[r.None=-1]="None",r[r.NoValue=0]="NoValue",r[r.LargeValue=1]="LargeValue",r[r.SmallValue=2]="SmallValue"})(_||(_={}));function kt(r){return te(r)&&typeof r.from=="function"}function te(r){return typeof r=="object"&&typeof r.to=="function"}function ze(r){r.parentElement.removeChild(r)}function Se(r){return r!=null}function Re(r){r.preventDefault()}function Dt(r){return r.filter(function(e){return this[e]?!1:this[e]=!0},{})}function Pt(r,e){return Math.round(r/e)*e}function yt(r,e){var n=r.getBoundingClientRect(),c=r.ownerDocument,u=c.documentElement,v=Ne(c);return/webkit.*Chrome.*Mobile/i.test(navigator.userAgent)&&(v.x=0),e?n.top+v.y-u.clientTop:n.left+v.x-u.clientLeft}function H(r){return typeof r=="number"&&!isNaN(r)&&isFinite(r)}function je(r,e,n){n>0&&(U(r,e),setTimeout(function(){ee(r,e)},n))}function Fe(r){return Math.max(Math.min(r,100),0)}function re(r){return Array.isArray(r)?r:[r]}function At(r){r=String(r);var e=r.split(".");return e.length>1?e[1].length:0}function U(r,e){r.classList&&!/\s/.test(e)?r.classList.add(e):r.className+=" "+e}function ee(r,e){r.classList&&!/\s/.test(e)?r.classList.remove(e):r.className=r.className.replace(new RegExp("(^|\\b)"+e.split(" ").join("|")+"(\\b|$)","gi")," ")}function Vt(r,e){return r.classList?r.classList.contains(e):new RegExp("\\b"+e+"\\b").test(r.className)}function Ne(r){var e=window.pageXOffset!==void 0,n=(r.compatMode||"")==="CSS1Compat",c=e?window.pageXOffset:n?r.documentElement.scrollLeft:r.body.scrollLeft,u=e?window.pageYOffset:n?r.documentElement.scrollTop:r.body.scrollTop;return{x:c,y:u}}function Lt(){return window.navigator.pointerEnabled?{start:"pointerdown",move:"pointermove",end:"pointerup"}:window.navigator.msPointerEnabled?{start:"MSPointerDown",move:"MSPointerMove",end:"MSPointerUp"}:{start:"mousedown touchstart",move:"mousemove touchmove",end:"mouseup touchend"}}function Mt(){var r=!1;try{var e=Object.defineProperty({},"passive",{get:function(){r=!0}});window.addEventListener("test",null,e)}catch{}return r}function Ut(){return window.CSS&&CSS.supports&&CSS.supports("touch-action","none")}function be(r,e){return 100/(e-r)}function xe(r,e,n){return e*100/(r[n+1]-r[n])}function _t(r,e){return xe(r,r[0]<0?e+Math.abs(r[0]):e-r[0],0)}function Ot(r,e){return e*(r[1]-r[0])/100+r[0]}function Y(r,e){for(var n=1;r>=e[n];)n+=1;return n}function Ht(r,e,n){if(n>=r.slice(-1)[0])return 100;var c=Y(n,r),u=r[c-1],v=r[c],h=e[c-1],b=e[c];return h+_t([u,v],n)/be(h,b)}function zt(r,e,n){if(n>=100)return r.slice(-1)[0];var c=Y(n,e),u=r[c-1],v=r[c],h=e[c-1],b=e[c];return Ot([u,v],(n-h)*be(h,b))}function Rt(r,e,n,c){if(c===100)return c;var u=Y(c,r),v=r[u-1],h=r[u];return n?c-v>(h-v)/2?h:v:e[u-1]?r[u-1]+Pt(c-r[u-1],e[u-1]):c}var Ie=function(){function r(e,n,c){this.xPct=[],this.xVal=[],this.xSteps=[],this.xNumSteps=[],this.xHighestCompleteStep=[],this.xSteps=[c||!1],this.xNumSteps=[!1],this.snap=n;var u,v=[];for(Object.keys(e).forEach(function(h){v.push([re(e[h]),h])}),v.sort(function(h,b){return h[0][0]-b[0][0]}),u=0;u<v.length;u++)this.handleEntryPoint(v[u][1],v[u][0]);for(this.xNumSteps=this.xSteps.slice(0),u=0;u<this.xNumSteps.length;u++)this.handleStepPoint(u,this.xNumSteps[u])}return r.prototype.getDistance=function(e){for(var n=[],c=0;c<this.xNumSteps.length-1;c++)n[c]=xe(this.xVal,e,c);return n},r.prototype.getAbsoluteDistance=function(e,n,c){var u=0;if(e<this.xPct[this.xPct.length-1])for(;e>this.xPct[u+1];)u++;else e===this.xPct[this.xPct.length-1]&&(u=this.xPct.length-2);!c&&e===this.xPct[u+1]&&u++,n===null&&(n=[]);var v,h=1,b=n[u],w=0,p=0,A=0,L=0;for(c?v=(e-this.xPct[u])/(this.xPct[u+1]-this.xPct[u]):v=(this.xPct[u+1]-e)/(this.xPct[u+1]-this.xPct[u]);b>0;)w=this.xPct[u+1+L]-this.xPct[u+L],n[u+L]*h+100-v*100>100?(p=w*v,h=(b-100*v)/n[u+L],v=1):(p=n[u+L]*w/100*h,h=0),c?(A=A-p,this.xPct.length+L>=1&&L--):(A=A+p,this.xPct.length-L>=1&&L++),b=n[u+L]*h;return e+A},r.prototype.toStepping=function(e){return e=Ht(this.xVal,this.xPct,e),e},r.prototype.fromStepping=function(e){return zt(this.xVal,this.xPct,e)},r.prototype.getStep=function(e){return e=Rt(this.xPct,this.xSteps,this.snap,e),e},r.prototype.getDefaultStep=function(e,n,c){var u=Y(e,this.xPct);return(e===100||n&&e===this.xPct[u-1])&&(u=Math.max(u-1,1)),(this.xVal[u]-this.xVal[u-1])/c},r.prototype.getNearbySteps=function(e){var n=Y(e,this.xPct);return{stepBefore:{startValue:this.xVal[n-2],step:this.xNumSteps[n-2],highestStep:this.xHighestCompleteStep[n-2]},thisStep:{startValue:this.xVal[n-1],step:this.xNumSteps[n-1],highestStep:this.xHighestCompleteStep[n-1]},stepAfter:{startValue:this.xVal[n],step:this.xNumSteps[n],highestStep:this.xHighestCompleteStep[n]}}},r.prototype.countStepDecimals=function(){var e=this.xNumSteps.map(At);return Math.max.apply(null,e)},r.prototype.hasNoSize=function(){return this.xVal[0]===this.xVal[this.xVal.length-1]},r.prototype.convert=function(e){return this.getStep(this.toStepping(e))},r.prototype.handleEntryPoint=function(e,n){var c;if(e==="min"?c=0:e==="max"?c=100:c=parseFloat(e),!H(c)||!H(n[0]))throw new Error("noUiSlider: 'range' value isn't numeric.");this.xPct.push(c),this.xVal.push(n[0]);var u=Number(n[1]);c?this.xSteps.push(isNaN(u)?!1:u):isNaN(u)||(this.xSteps[0]=u),this.xHighestCompleteStep.push(0)},r.prototype.handleStepPoint=function(e,n){if(n){if(this.xVal[e]===this.xVal[e+1]){this.xSteps[e]=this.xHighestCompleteStep[e]=this.xVal[e];return}this.xSteps[e]=xe([this.xVal[e],this.xVal[e+1]],n,0)/be(this.xPct[e],this.xPct[e+1]);var c=(this.xVal[e+1]-this.xVal[e])/this.xNumSteps[e],u=Math.ceil(Number(c.toFixed(3))-1),v=this.xVal[e]+this.xNumSteps[e]*u;this.xHighestCompleteStep[e]=v}},r}(),Be={to:function(r){return r===void 0?"":r.toFixed(2)},from:Number},qe={target:"target",base:"base",origin:"origin",handle:"handle",handleLower:"handle-lower",handleUpper:"handle-upper",touchArea:"touch-area",horizontal:"horizontal",vertical:"vertical",background:"background",connect:"connect",connects:"connects",ltr:"ltr",rtl:"rtl",textDirectionLtr:"txt-dir-ltr",textDirectionRtl:"txt-dir-rtl",draggable:"draggable",drag:"state-drag",tap:"state-tap",active:"active",tooltip:"tooltip",pips:"pips",pipsHorizontal:"pips-horizontal",pipsVertical:"pips-vertical",marker:"marker",markerHorizontal:"marker-horizontal",markerVertical:"marker-vertical",markerNormal:"marker-normal",markerLarge:"marker-large",markerSub:"marker-sub",value:"value",valueHorizontal:"value-horizontal",valueVertical:"value-vertical",valueNormal:"value-normal",valueLarge:"value-large",valueSub:"value-sub"},B={tooltips:".__tooltips",aria:".__aria"};function jt(r,e){if(!H(e))throw new Error("noUiSlider: 'step' is not numeric.");r.singleStep=e}function Ft(r,e){if(!H(e))throw new Error("noUiSlider: 'keyboardPageMultiplier' is not numeric.");r.keyboardPageMultiplier=e}function Bt(r,e){if(!H(e))throw new Error("noUiSlider: 'keyboardMultiplier' is not numeric.");r.keyboardMultiplier=e}function Nt(r,e){if(!H(e))throw new Error("noUiSlider: 'keyboardDefaultStep' is not numeric.");r.keyboardDefaultStep=e}function It(r,e){if(typeof e!="object"||Array.isArray(e))throw new Error("noUiSlider: 'range' is not an object.");if(e.min===void 0||e.max===void 0)throw new Error("noUiSlider: Missing 'min' or 'max' in 'range'.");r.spectrum=new Ie(e,r.snap||!1,r.singleStep)}function qt(r,e){if(e=re(e),!Array.isArray(e)||!e.length)throw new Error("noUiSlider: 'start' option is incorrect.");r.handles=e.length,r.start=e}function Kt(r,e){if(typeof e!="boolean")throw new Error("noUiSlider: 'snap' option must be a boolean.");r.snap=e}function $t(r,e){if(typeof e!="boolean")throw new Error("noUiSlider: 'animate' option must be a boolean.");r.animate=e}function Tt(r,e){if(typeof e!="number")throw new Error("noUiSlider: 'animationDuration' option must be a number.");r.animationDuration=e}function Ke(r,e){var n=[!1],c;if(e==="lower"?e=[!0,!1]:e==="upper"&&(e=[!1,!0]),e===!0||e===!1){for(c=1;c<r.handles;c++)n.push(e);n.push(!1)}else{if(!Array.isArray(e)||!e.length||e.length!==r.handles+1)throw new Error("noUiSlider: 'connect' option doesn't match handle count.");n=e}r.connect=n}function Xt(r,e){switch(e){case"horizontal":r.ort=0;break;case"vertical":r.ort=1;break;default:throw new Error("noUiSlider: 'orientation' option is invalid.")}}function $e(r,e){if(!H(e))throw new Error("noUiSlider: 'margin' option must be numeric.");e!==0&&(r.margin=r.spectrum.getDistance(e))}function Yt(r,e){if(!H(e))throw new Error("noUiSlider: 'limit' option must be numeric.");if(r.limit=r.spectrum.getDistance(e),!r.limit||r.handles<2)throw new Error("noUiSlider: 'limit' option is only supported on linear sliders with 2 or more handles.")}function Wt(r,e){var n;if(!H(e)&&!Array.isArray(e))throw new Error("noUiSlider: 'padding' option must be numeric or array of exactly 2 numbers.");if(Array.isArray(e)&&!(e.length===2||H(e[0])||H(e[1])))throw new Error("noUiSlider: 'padding' option must be numeric or array of exactly 2 numbers.");if(e!==0){for(Array.isArray(e)||(e=[e,e]),r.padding=[r.spectrum.getDistance(e[0]),r.spectrum.getDistance(e[1])],n=0;n<r.spectrum.xNumSteps.length-1;n++)if(r.padding[0][n]<0||r.padding[1][n]<0)throw new Error("noUiSlider: 'padding' option must be a positive number(s).");var c=e[0]+e[1],u=r.spectrum.xVal[0],v=r.spectrum.xVal[r.spectrum.xVal.length-1];if(c/(v-u)>1)throw new Error("noUiSlider: 'padding' option must not exceed 100% of the range.")}}function Gt(r,e){switch(e){case"ltr":r.dir=0;break;case"rtl":r.dir=1;break;default:throw new Error("noUiSlider: 'direction' option was not recognized.")}}function Jt(r,e){if(typeof e!="string")throw new Error("noUiSlider: 'behaviour' must be a string containing options.");var n=e.indexOf("tap")>=0,c=e.indexOf("drag")>=0,u=e.indexOf("fixed")>=0,v=e.indexOf("snap")>=0,h=e.indexOf("hover")>=0,b=e.indexOf("unconstrained")>=0,w=e.indexOf("invert-connects")>=0,p=e.indexOf("drag-all")>=0,A=e.indexOf("smooth-steps")>=0;if(u){if(r.handles!==2)throw new Error("noUiSlider: 'fixed' behaviour must be used with 2 handles");$e(r,r.start[1]-r.start[0])}if(w&&r.handles!==2)throw new Error("noUiSlider: 'invert-connects' behaviour must be used with 2 handles");if(b&&(r.margin||r.limit))throw new Error("noUiSlider: 'unconstrained' behaviour cannot be used with margin or limit");r.events={tap:n||v,drag:c,dragAll:p,smoothSteps:A,fixed:u,snap:v,hover:h,unconstrained:b,invertConnects:w}}function Zt(r,e){if(e!==!1)if(e===!0||te(e)){r.tooltips=[];for(var n=0;n<r.handles;n++)r.tooltips.push(e)}else{if(e=re(e),e.length!==r.handles)throw new Error("noUiSlider: must pass a formatter for all handles.");e.forEach(function(c){if(typeof c!="boolean"&&!te(c))throw new Error("noUiSlider: 'tooltips' must be passed a formatter or 'false'.")}),r.tooltips=e}}function Qt(r,e){if(e.length!==r.handles)throw new Error("noUiSlider: must pass a attributes for all handles.");r.handleAttributes=e}function er(r,e){if(!te(e))throw new Error("noUiSlider: 'ariaFormat' requires 'to' method.");r.ariaFormat=e}function tr(r,e){if(!kt(e))throw new Error("noUiSlider: 'format' requires 'to' and 'from' methods.");r.format=e}function rr(r,e){if(typeof e!="boolean")throw new Error("noUiSlider: 'keyboardSupport' option must be a boolean.");r.keyboardSupport=e}function ir(r,e){r.documentElement=e}function ar(r,e){if(typeof e!="string"&&e!==!1)throw new Error("noUiSlider: 'cssPrefix' must be a string or `false`.");r.cssPrefix=e}function nr(r,e){if(typeof e!="object")throw new Error("noUiSlider: 'cssClasses' must be an object.");typeof r.cssPrefix=="string"?(r.cssClasses={},Object.keys(e).forEach(function(n){r.cssClasses[n]=r.cssPrefix+e[n]})):r.cssClasses=e}function Te(r){var e={margin:null,limit:null,padding:null,animate:!0,animationDuration:300,ariaFormat:Be,format:Be},n={step:{r:!1,t:jt},keyboardPageMultiplier:{r:!1,t:Ft},keyboardMultiplier:{r:!1,t:Bt},keyboardDefaultStep:{r:!1,t:Nt},start:{r:!0,t:qt},connect:{r:!0,t:Ke},direction:{r:!0,t:Gt},snap:{r:!1,t:Kt},animate:{r:!1,t:$t},animationDuration:{r:!1,t:Tt},range:{r:!0,t:It},orientation:{r:!1,t:Xt},margin:{r:!1,t:$e},limit:{r:!1,t:Yt},padding:{r:!1,t:Wt},behaviour:{r:!0,t:Jt},ariaFormat:{r:!1,t:er},format:{r:!1,t:tr},tooltips:{r:!1,t:Zt},keyboardSupport:{r:!0,t:rr},documentElement:{r:!1,t:ir},cssPrefix:{r:!0,t:ar},cssClasses:{r:!0,t:nr},handleAttributes:{r:!1,t:Qt}},c={connect:!1,direction:"ltr",behaviour:"tap",orientation:"horizontal",keyboardSupport:!0,cssPrefix:"noUi-",cssClasses:qe,keyboardPageMultiplier:5,keyboardMultiplier:1,keyboardDefaultStep:10};r.format&&!r.ariaFormat&&(r.ariaFormat=r.format),Object.keys(n).forEach(function(w){if(!Se(r[w])&&c[w]===void 0){if(n[w].r)throw new Error("noUiSlider: '"+w+"' is required.");return}n[w].t(e,Se(r[w])?r[w]:c[w])}),e.pips=r.pips;var u=document.createElement("div"),v=u.style.msTransform!==void 0,h=u.style.transform!==void 0;e.transformRule=h?"transform":v?"msTransform":"webkitTransform";var b=[["left","top"],["right","bottom"]];return e.style=b[e.dir][e.ort],e}function sr(r,e,n){var c=Lt(),u=Ut(),v=u&&Mt(),h=r,b,w,p,A,L,F,m=e.spectrum,z=[],E=[],O=[],ie=0,R={},$=!1,K=r.ownerDocument,W=e.documentElement||K.documentElement,G=K.body,Xe=K.dir==="rtl"||e.ort===1?0:100;function j(t,i){var a=K.createElement("div");return i&&U(a,i),t.appendChild(a),a}function Ye(t,i){var a=j(t,e.cssClasses.origin),s=j(a,e.cssClasses.handle);if(j(s,e.cssClasses.touchArea),s.setAttribute("data-handle",String(i)),e.keyboardSupport&&(s.setAttribute("tabindex","0"),s.addEventListener("keydown",function(l){return ut(l,i)})),e.handleAttributes!==void 0){var o=e.handleAttributes[i];Object.keys(o).forEach(function(l){s.setAttribute(l,o[l])})}return s.setAttribute("role","slider"),s.setAttribute("aria-orientation",e.ort?"vertical":"horizontal"),i===0?U(s,e.cssClasses.handleLower):i===e.handles-1&&U(s,e.cssClasses.handleUpper),a.handle=s,a}function ae(t,i){return i?j(t,e.cssClasses.connect):!1}function We(t,i){w=j(i,e.cssClasses.connects),p=[],A=[],A.push(ae(w,t[0]));for(var a=0;a<e.handles;a++)p.push(Ye(i,a)),O[a]=a,A.push(ae(w,t[a+1]))}function Ge(t){U(t,e.cssClasses.target),e.dir===0?U(t,e.cssClasses.ltr):U(t,e.cssClasses.rtl),e.ort===0?U(t,e.cssClasses.horizontal):U(t,e.cssClasses.vertical);var i=getComputedStyle(t).direction;return i==="rtl"?U(t,e.cssClasses.textDirectionRtl):U(t,e.cssClasses.textDirectionLtr),j(t,e.cssClasses.base)}function Je(t,i){return!e.tooltips||!e.tooltips[i]?!1:j(t.firstChild,e.cssClasses.tooltip)}function we(){return h.hasAttribute("disabled")}function ne(t){var i=p[t];return i.hasAttribute("disabled")}function Ze(t){t!=null?(p[t].setAttribute("disabled",""),p[t].handle.removeAttribute("tabindex")):(h.setAttribute("disabled",""),p.forEach(function(i){i.handle.removeAttribute("tabindex")}))}function Qe(t){t!=null?(p[t].removeAttribute("disabled"),p[t].handle.setAttribute("tabindex","0")):(h.removeAttribute("disabled"),p.forEach(function(i){i.removeAttribute("disabled"),i.handle.setAttribute("tabindex","0")}))}function se(){F&&(T("update"+B.tooltips),F.forEach(function(t){t&&ze(t)}),F=null)}function Ee(){se(),F=p.map(Je),fe("update"+B.tooltips,function(t,i,a){if(!(!F||!e.tooltips)&&F[i]!==!1){var s=t[i];e.tooltips[i]!==!0&&(s=e.tooltips[i].to(a[i])),F[i].innerHTML=s}})}function et(){T("update"+B.aria),fe("update"+B.aria,function(t,i,a,s,o){O.forEach(function(l){var d=p[l],f=J(E,l,0,!0,!0,!0),S=J(E,l,100,!0,!0,!0),x=o[l],C=String(e.ariaFormat.to(a[l]));f=m.fromStepping(f).toFixed(1),S=m.fromStepping(S).toFixed(1),x=m.fromStepping(x).toFixed(1),d.children[0].setAttribute("aria-valuemin",f),d.children[0].setAttribute("aria-valuemax",S),d.children[0].setAttribute("aria-valuenow",x),d.children[0].setAttribute("aria-valuetext",C)})})}function tt(t){if(t.mode===N.Range||t.mode===N.Steps)return m.xVal;if(t.mode===N.Count){if(t.values<2)throw new Error("noUiSlider: 'values' (>= 2) required for mode 'count'.");for(var i=t.values-1,a=100/i,s=[];i--;)s[i]=i*a;return s.push(100),Ce(s,t.stepped)}return t.mode===N.Positions?Ce(t.values,t.stepped):t.mode===N.Values?t.stepped?t.values.map(function(o){return m.fromStepping(m.getStep(m.toStepping(o)))}):t.values:[]}function Ce(t,i){return t.map(function(a){return m.fromStepping(i?m.getStep(a):a)})}function rt(t){function i(x,C){return Number((x+C).toFixed(7))}var a=tt(t),s={},o=m.xVal[0],l=m.xVal[m.xVal.length-1],d=!1,f=!1,S=0;return a=Dt(a.slice().sort(function(x,C){return x-C})),a[0]!==o&&(a.unshift(o),d=!0),a[a.length-1]!==l&&(a.push(l),f=!0),a.forEach(function(x,C){var k,g,P,M=x,y=a[C+1],V,ve,pe,me,_e,ge,Oe,He=t.mode===N.Steps;for(He&&(k=m.xNumSteps[C]),k||(k=y-M),y===void 0&&(y=M),k=Math.max(k,1e-7),g=M;g<=y;g=i(g,k)){for(V=m.toStepping(g),ve=V-S,_e=ve/(t.density||1),ge=Math.round(_e),Oe=ve/ge,P=1;P<=ge;P+=1)pe=S+P*Oe,s[pe.toFixed(5)]=[m.fromStepping(pe),0];me=a.indexOf(g)>-1?_.LargeValue:He?_.SmallValue:_.NoValue,!C&&d&&g!==y&&(me=0),g===y&&f||(s[V.toFixed(5)]=[g,me]),S=V}}),s}function it(t,i,a){var s,o,l=K.createElement("div"),d=(s={},s[_.None]="",s[_.NoValue]=e.cssClasses.valueNormal,s[_.LargeValue]=e.cssClasses.valueLarge,s[_.SmallValue]=e.cssClasses.valueSub,s),f=(o={},o[_.None]="",o[_.NoValue]=e.cssClasses.markerNormal,o[_.LargeValue]=e.cssClasses.markerLarge,o[_.SmallValue]=e.cssClasses.markerSub,o),S=[e.cssClasses.valueHorizontal,e.cssClasses.valueVertical],x=[e.cssClasses.markerHorizontal,e.cssClasses.markerVertical];U(l,e.cssClasses.pips),U(l,e.ort===0?e.cssClasses.pipsHorizontal:e.cssClasses.pipsVertical);function C(g,P){var M=P===e.cssClasses.value,y=M?S:x,V=M?d:f;return P+" "+y[e.ort]+" "+V[g]}function k(g,P,M){if(M=i?i(P,M):M,M!==_.None){var y=j(l,!1);y.className=C(M,e.cssClasses.marker),y.style[e.style]=g+"%",M>_.NoValue&&(y=j(l,!1),y.className=C(M,e.cssClasses.value),y.setAttribute("data-value",String(P)),y.style[e.style]=g+"%",y.innerHTML=String(a.to(P)))}}return Object.keys(t).forEach(function(g){k(g,t[g][0],t[g][1])}),l}function oe(){L&&(ze(L),L=null)}function le(t){oe();var i=rt(t),a=t.filter,s=t.format||{to:function(o){return String(Math.round(o))}};return L=h.appendChild(it(i,a,s)),L}function ke(){var t=b.getBoundingClientRect(),i="offset"+["Width","Height"][e.ort];return e.ort===0?t.width||b[i]:t.height||b[i]}function I(t,i,a,s){var o=function(d){var f=at(d,s.pageOffset,s.target||i);if(!f||we()&&!s.doNotReject||Vt(h,e.cssClasses.tap)&&!s.doNotReject||t===c.start&&f.buttons!==void 0&&f.buttons>1||s.hover&&f.buttons)return!1;v||f.preventDefault(),f.calcPoint=f.points[e.ort],a(f,s)},l=[];return t.split(" ").forEach(function(d){i.addEventListener(d,o,v?{passive:!0}:!1),l.push([d,o])}),l}function at(t,i,a){var s=t.type.indexOf("touch")===0,o=t.type.indexOf("mouse")===0,l=t.type.indexOf("pointer")===0,d=0,f=0;if(t.type.indexOf("MSPointer")===0&&(l=!0),t.type==="mousedown"&&!t.buttons&&!t.touches)return!1;if(s){var S=function(k){var g=k.target;return g===a||a.contains(g)||t.composed&&t.composedPath().shift()===a};if(t.type==="touchstart"){var x=Array.prototype.filter.call(t.touches,S);if(x.length>1)return!1;d=x[0].pageX,f=x[0].pageY}else{var C=Array.prototype.find.call(t.changedTouches,S);if(!C)return!1;d=C.pageX,f=C.pageY}}return i=i||Ne(K),(o||l)&&(d=t.clientX+i.x,f=t.clientY+i.y),t.pageOffset=i,t.points=[d,f],t.cursor=o||l,t}function De(t){var i=t-yt(b,e.ort),a=i*100/ke();return a=Fe(a),e.dir?100-a:a}function nt(t){var i=100,a=!1;return p.forEach(function(s,o){if(!ne(o)){var l=E[o],d=Math.abs(l-t),f=d===100&&i===100,S=d<i,x=d<=i&&t>l;(S||x||f)&&(a=o,i=d)}}),a}function st(t,i){t.type==="mouseout"&&t.target.nodeName==="HTML"&&t.relatedTarget===null&&ce(t,i)}function ot(t,i){if(navigator.appVersion.indexOf("MSIE 9")===-1&&t.buttons===0&&i.buttonsProperty!==0)return ce(t,i);var a=(e.dir?-1:1)*(t.calcPoint-i.startCalcPoint),s=a*100/i.baseSize;ye(a>0,s,i.locations,i.handleNumbers,i.connect)}function ce(t,i){i.handle&&(ee(i.handle,e.cssClasses.active),ie-=1),i.listeners.forEach(function(a){W.removeEventListener(a[0],a[1])}),ie===0&&(ee(h,e.cssClasses.drag),he(),t.cursor&&(G.style.cursor="",G.removeEventListener("selectstart",Re))),e.events.smoothSteps&&(i.handleNumbers.forEach(function(a){q(a,E[a],!0,!0,!1,!1)}),i.handleNumbers.forEach(function(a){D("update",a)})),i.handleNumbers.forEach(function(a){D("change",a),D("set",a),D("end",a)})}function ue(t,i){if(!i.handleNumbers.some(ne)){var a;if(i.handleNumbers.length===1){var s=p[i.handleNumbers[0]];a=s.children[0],ie+=1,U(a,e.cssClasses.active)}t.stopPropagation();var o=[],l=I(c.move,W,ot,{target:t.target,handle:a,connect:i.connect,listeners:o,startCalcPoint:t.calcPoint,baseSize:ke(),pageOffset:t.pageOffset,handleNumbers:i.handleNumbers,buttonsProperty:t.buttons,locations:E.slice()}),d=I(c.end,W,ce,{target:t.target,handle:a,listeners:o,doNotReject:!0,handleNumbers:i.handleNumbers}),f=I("mouseout",W,st,{target:t.target,handle:a,listeners:o,doNotReject:!0,handleNumbers:i.handleNumbers});o.push.apply(o,l.concat(d,f)),t.cursor&&(G.style.cursor=getComputedStyle(t.target).cursor,p.length>1&&U(h,e.cssClasses.drag),G.addEventListener("selectstart",Re,!1)),i.handleNumbers.forEach(function(S){D("start",S)})}}function lt(t){t.stopPropagation();var i=De(t.calcPoint),a=nt(i);a!==!1&&(e.events.snap||je(h,e.cssClasses.tap,e.animationDuration),q(a,i,!0,!0),he(),D("slide",a,!0),D("update",a,!0),e.events.snap?ue(t,{handleNumbers:[a]}):(D("change",a,!0),D("set",a,!0)))}function ct(t){var i=De(t.calcPoint),a=m.getStep(i),s=m.fromStepping(a);Object.keys(R).forEach(function(o){o.split(".")[0]==="hover"&&R[o].forEach(function(l){l.call(Q,s)})})}function ut(t,i){if(we()||ne(i))return!1;var a=["Left","Right"],s=["Down","Up"],o=["PageDown","PageUp"],l=["Home","End"];e.dir&&!e.ort?a.reverse():e.ort&&!e.dir&&(s.reverse(),o.reverse());var d=t.key.replace("Arrow",""),f=d===o[0],S=d===o[1],x=d===s[0]||d===a[0]||f,C=d===s[1]||d===a[1]||S,k=d===l[0],g=d===l[1];if(!x&&!C&&!k&&!g)return!0;t.preventDefault();var P;if(C||x){var M=x?0:1,y=Me(i),V=y[M];if(V===null)return!1;V===!1&&(V=m.getDefaultStep(E[i],x,e.keyboardDefaultStep)),S||f?V*=e.keyboardPageMultiplier:V*=e.keyboardMultiplier,V=Math.max(V,1e-7),V=(x?-1:1)*V,P=z[i]+V}else g?P=e.spectrum.xVal[e.spectrum.xVal.length-1]:P=e.spectrum.xVal[0];return q(i,m.toStepping(P),!0,!0),D("slide",i),D("update",i),D("change",i),D("set",i),!1}function Pe(t){t.fixed||p.forEach(function(i,a){I(c.start,i.children[0],ue,{handleNumbers:[a]})}),t.tap&&I(c.start,b,lt,{}),t.hover&&I(c.move,b,ct,{hover:!0}),t.drag&&A.forEach(function(i,a){if(!(i===!1||a===0||a===A.length-1)){var s=p[a-1],o=p[a],l=[i],d=[s,o],f=[a-1,a];U(i,e.cssClasses.draggable),t.fixed&&(l.push(s.children[0]),l.push(o.children[0])),t.dragAll&&(d=p,f=O),l.forEach(function(S){I(c.start,S,ue,{handles:d,handleNumbers:f,connect:i})})}})}function fe(t,i){R[t]=R[t]||[],R[t].push(i),t.split(".")[0]==="update"&&p.forEach(function(a,s){D("update",s)})}function ft(t){return t===B.aria||t===B.tooltips}function T(t){var i=t&&t.split(".")[0],a=i?t.substring(i.length):t;Object.keys(R).forEach(function(s){var o=s.split(".")[0],l=s.substring(o.length);(!i||i===o)&&(!a||a===l)&&(!ft(l)||a===l)&&delete R[s]})}function D(t,i,a){Object.keys(R).forEach(function(s){var o=s.split(".")[0];t===o&&R[s].forEach(function(l){l.call(Q,z.map(e.format.to),i,z.slice(),a||!1,E.slice(),Q)})})}function J(t,i,a,s,o,l,d){var f;return p.length>1&&!e.events.unconstrained&&(s&&i>0&&(f=m.getAbsoluteDistance(t[i-1],e.margin,!1),a=Math.max(a,f)),o&&i<p.length-1&&(f=m.getAbsoluteDistance(t[i+1],e.margin,!0),a=Math.min(a,f))),p.length>1&&e.limit&&(s&&i>0&&(f=m.getAbsoluteDistance(t[i-1],e.limit,!1),a=Math.min(a,f)),o&&i<p.length-1&&(f=m.getAbsoluteDistance(t[i+1],e.limit,!0),a=Math.max(a,f))),e.padding&&(i===0&&(f=m.getAbsoluteDistance(0,e.padding[0],!1),a=Math.max(a,f)),i===p.length-1&&(f=m.getAbsoluteDistance(100,e.padding[1],!0),a=Math.min(a,f))),d||(a=m.getStep(a)),a=Fe(a),a===t[i]&&!l?!1:a}function de(t,i){var a=e.ort;return(a?i:t)+", "+(a?t:i)}function ye(t,i,a,s,o){var l=a.slice(),d=s[0],f=e.events.smoothSteps,S=[!t,t],x=[t,!t];s=s.slice(),t&&s.reverse(),s.length>1?s.forEach(function(k,g){var P=J(l,k,l[k]+i,S[g],x[g],!1,f);P===!1?i=0:(i=P-l[k],l[k]=P)}):S=x=[!0];var C=!1;s.forEach(function(k,g){C=q(k,a[k]+i,S[g],x[g],!1,f)||C}),C&&(s.forEach(function(k){D("update",k),D("slide",k)}),o!=null&&D("drag",d))}function Ae(t,i){return e.dir?100-t-i:t}function dt(t,i){E[t]=i,z[t]=m.fromStepping(i);var a=Ae(i,0)-Xe,s="translate("+de(a+"%","0")+")";if(p[t].style[e.transformRule]=s,e.events.invertConnects&&E.length>1){var o=E.every(function(l,d,f){return d===0||l>=f[d-1]});if($!==!o){St();return}}X(t),X(t+1),$&&(X(t-1),X(t+2))}function he(){O.forEach(function(t){var i=E[t]>50?-1:1,a=3+(p.length+i*t);p[t].style.zIndex=String(a)})}function q(t,i,a,s,o,l){return o||(i=J(E,t,i,a,s,!1,l)),i===!1?!1:(dt(t,i),!0)}function X(t){if(A[t]){var i=E.slice();$&&i.sort(function(f,S){return f-S});var a=0,s=100;t!==0&&(a=i[t-1]),t!==A.length-1&&(s=i[t]);var o=s-a,l="translate("+de(Ae(a,o)+"%","0")+")",d="scale("+de(o/100,"1")+")";A[t].style[e.transformRule]=l+" "+d}}function Ve(t,i){return t===null||t===!1||t===void 0||(typeof t=="number"&&(t=String(t)),t=e.format.from(t),t!==!1&&(t=m.toStepping(t)),t===!1||isNaN(t))?E[i]:t}function Z(t,i,a){var s=re(t),o=E[0]===void 0;i=i===void 0?!0:i,e.animate&&!o&&je(h,e.cssClasses.tap,e.animationDuration),O.forEach(function(f){q(f,Ve(s[f],f),!0,!1,a)});var l=O.length===1?0:1;if(o&&m.hasNoSize()&&(a=!0,E[0]=0,O.length>1)){var d=100/(O.length-1);O.forEach(function(f){E[f]=f*d})}for(;l<O.length;++l)O.forEach(function(f){q(f,E[f],!0,!0,a)});he(),O.forEach(function(f){D("update",f),s[f]!==null&&i&&D("set",f)})}function ht(t){Z(e.start,t)}function vt(t,i,a,s){if(t=Number(t),!(t>=0&&t<O.length))throw new Error("noUiSlider: invalid handle number, got: "+t);q(t,Ve(i,t),!0,!0,s),D("update",t),a&&D("set",t)}function Le(t){if(t===void 0&&(t=!1),t)return z.length===1?z[0]:z.slice(0);var i=z.map(e.format.to);return i.length===1?i[0]:i}function pt(){for(T(B.aria),T(B.tooltips),Object.keys(e.cssClasses).forEach(function(t){ee(h,e.cssClasses[t])});h.firstChild;)h.removeChild(h.firstChild);delete h.noUiSlider}function Me(t){var i=E[t],a=m.getNearbySteps(i),s=z[t],o=a.thisStep.step,l=null;if(e.snap)return[s-a.stepBefore.startValue||null,a.stepAfter.startValue-s||null];o!==!1&&s+o>a.stepAfter.startValue&&(o=a.stepAfter.startValue-s),s>a.thisStep.startValue?l=a.thisStep.step:a.stepBefore.step===!1?l=!1:l=s-a.stepBefore.highestStep,i===100?o=null:i===0&&(l=null);var d=m.countStepDecimals();return o!==null&&o!==!1&&(o=Number(o.toFixed(d))),l!==null&&l!==!1&&(l=Number(l.toFixed(d))),[l,o]}function mt(){return O.map(Me)}function gt(t,i){var a=Le(),s=["margin","limit","padding","range","animate","snap","step","format","pips","tooltips","connect"];s.forEach(function(l){t[l]!==void 0&&(n[l]=t[l])});var o=Te(n);s.forEach(function(l){t[l]!==void 0&&(e[l]=o[l])}),m=o.spectrum,e.margin=o.margin,e.limit=o.limit,e.padding=o.padding,e.pips?le(e.pips):oe(),e.tooltips?Ee():se(),E=[],Z(Se(t.start)?t.start:a,i),t.connect&&Ue()}function Ue(){for(;w.firstChild;)w.removeChild(w.firstChild);for(var t=0;t<=e.handles;t++)A[t]=ae(w,e.connect[t]),X(t);Pe({drag:e.events.drag,fixed:!0})}function St(){$=!$,Ke(e,e.connect.map(function(t){return!t})),Ue()}function xt(){b=Ge(h),We(e.connect,b),Pe(e.events),Z(e.start),e.pips&&le(e.pips),e.tooltips&&Ee(),et()}xt();var Q={destroy:pt,steps:mt,on:fe,off:T,get:Le,set:Z,setHandle:vt,reset:ht,disable:Ze,enable:Qe,__moveHandles:function(t,i,a){ye(t,i,E,a)},options:n,updateOptions:gt,target:h,removePips:oe,removeTooltips:se,getPositions:function(){return E.slice()},getTooltips:function(){return F},getOrigins:function(){return p},pips:le};return Q}function or(r,e){if(!r||!r.nodeName)throw new Error("noUiSlider: create requires a single element, got: "+r);if(r.noUiSlider)throw new Error("noUiSlider: Slider was already initialized.");var n=Te(e),c=sr(r,n,e);return r.noUiSlider=c,c}const lr={__spectrum:Ie,cssClasses:qe,create:or};function cr(){console.log("Initializing price slider...");const r=document.querySelector(".category__slider");if(!r){console.error("Slider element not found");return}console.log("Slider element found, initializing noUiSlider..."),lr.create(r,{range:{min:300,max:6e3},start:[1700,3500],connect:!0,tooltips:[!0,!0],step:200,format:{to:function(e){return Math.round(e)+"€"},from:function(e){return Math.round(e)}}}),r.noUiSlider.on("update",function(e,n){console.log(`Handle ${n} moved to ${e[n]}`)}),console.log("Slider initialized successfully")}const dr=()=>{wt(),new Et,Ct(),cr()};export{dr as i};
