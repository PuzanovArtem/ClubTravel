import"./modulepreload-polyfill-B5Qt9EMX.js";import{c}from"./validator-kAhhofT2.js";import{h as s}from"./header-CDcaaDmM.js";import"./_commonjsHelpers-Cpj98o6Y.js";const m=()=>{const a=document.querySelectorAll(".contacts-map__container"),o=r=>{const e=document.createElement("iframe");e.src=r.getAttribute("data-src"),e.style.border="0",e.allowFullscreen="",e.loading="lazy",e.className="contacts-map__frame",e.referrerPolicy="no-referrer-when-downgrade",r.innerHTML="",r.appendChild(e)},n=new IntersectionObserver((r,e)=>{r.forEach(t=>{t.isIntersecting&&(o(t.target),e.unobserve(t.target))})});a.forEach(r=>{n.observe(r)})};document.addEventListener("DOMContentLoaded",()=>{s(),c(),m()});
