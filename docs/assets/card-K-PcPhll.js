import"./modulepreload-polyfill-B5Qt9EMX.js";import{i as n,C as a,u as s}from"./dropdown-BcidGZfk.js";import{e as c,a as l}from"./swiper-C8Vg-J_-.js";import{h as m}from"./header-CDcaaDmM.js";import{m as p}from"./manage-selects-CTHsAexo.js";import{s as u}from"./select-C5RCZxkW.js";const f=()=>{function e(d){const o=document.querySelector(".hotel-card-sidebar__first-block"),r=document.querySelector(".hotel-card-info__wrapper"),i=document.querySelector(".hotel-card-sidebar");d.matches?r.insertBefore(o,r.firstChild):i.insertBefore(o,i.firstChild)}const t=window.matchMedia("(max-width: 900px)");t.addEventListener("change",e),e(t)};document.addEventListener("DOMContentLoaded",()=>{m(),c(),l(),f(),u(),p(),n(),new a({selector:"#counter-1",initCount:0,step:1,displaySelector:"#adults-display"});for(let e=2;e<=7;e++)new a({selector:`#counter-${e}`,initCount:0,step:1,displaySelector:"#kids-display",onUpdate:s,dataCounterType:"child"})});