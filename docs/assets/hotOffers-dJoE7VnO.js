import"./modulepreload-polyfill-B5Qt9EMX.js";import{C as l,u as w}from"./dropdown-BcidGZfk.js";import{h as b}from"./header-CDcaaDmM.js";import{i as f}from"./search-D3bQpLpB.js";const u=()=>{const e=document.querySelectorAll(".hot-deals__body-row"),a=document.querySelectorAll(".hot-deals__body-btn"),d=document.querySelectorAll(".hot-deals__addition"),n=document.querySelectorAll(".hotDeals__addition-body-row"),s=document.querySelectorAll(".hot-deals__addition-body-dropdown"),i=document.querySelectorAll(".hot-deals__dropdown"),c=document.querySelectorAll(".hot-deals__icon--triangle-down"),_=o=>{e[o].classList.contains("hot-deals__body-row_active")?e[o].classList.remove("hot-deals__body-row_active"):(e.forEach(t=>{t.classList.contains("hot-deals__body-row_active")&&t.classList.remove("hot-deals__body-row_active")}),e[o].classList.add("hot-deals__body-row_active"))},r=o=>{a[o].classList.contains("hot-deals__body-btn_active")?(a[o].classList.remove("hot-deals__body-btn_active"),a[o].innerHTML="Открыть"):(a.forEach(t=>{t.classList.contains("hot-deals__body-btn_active")&&t.classList.remove("hot-deals__body-btn_active"),t.innerHTML="Открыть"}),a[o].classList.add("hot-deals__body-btn_active"),a[o].innerHTML="Закрыть")},h=o=>{d[o].classList.contains("hot-deals__addition_active")?d[o].classList.remove("hot-deals__addition_active"):(d.forEach(t=>{t.classList.contains("hot-deals__addition_active")&&t.classList.remove("hot-deals__addition_active")}),d[o].classList.add("hot-deals__addition_active"))};a.forEach((o,t)=>{o.addEventListener("click",()=>{_(t),r(t),h(t)})});const v=o=>{s[o].classList.contains("hot-deals__addition-body-dropdown_active")?(s[o].classList.remove("hot-deals__addition-body-dropdown_active"),s[o].childNodes[0].textContent="открыть предложения"):(s.forEach(t=>{t.classList.contains("hot-deals__addition-body-dropdown_active")&&(t.classList.remove("hot-deals__addition-body-dropdown_active"),t.childNodes[0].textContent="открыть предложения")}),s[o].classList.add("hot-deals__addition-body-dropdown_active"),s[o].childNodes[0].textContent="скрыть предложения")},L=o=>{s[o].parentNode.parentNode.classList.contains("hot-deals__addition-body-row_active")?s[o].parentNode.parentNode.classList.remove("hot-deals__addition-body-row_active"):(n.forEach(t=>{t.classList.contains("hot-deals__addition-body-row_active")&&t.classList.remove("hot-deals__addition-body-row_active")}),s[o].parentNode.parentNode.classList.add("hot-deals__addition-body-row_active"))},y=o=>{i[o].classList.contains("hot-deals__dropdown_active")?i[o].classList.remove("hot-deals__dropdown_active"):(i.forEach(t=>{t.classList.contains("hot-deals__dropdown_active")&&t.classList.remove("hot-deals__dropdown_active")}),i[o].classList.add("hot-deals__dropdown_active"))},p=o=>{c[o].classList.contains("hot-deals__icon--rotated")?c[o].classList.remove("hot-deals__icon--rotated"):c[o].classList.add("hot-deals__icon--rotated")};s.forEach((o,t)=>{o.addEventListener("click",()=>{v(t),L(t),y(t),p(t)})})};document.addEventListener("DOMContentLoaded",()=>{b(),f(),u(),new l({selector:"#counter-1",initCount:0,step:1,displaySelector:"#adults-display"}),new l({selector:"#counter-2",initCount:0,step:1,displaySelector:"#kids-display",onUpdate:w,dataCounterType:"child"})});
