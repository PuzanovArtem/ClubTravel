const c=()=>{const s=document.querySelector(".hotel-card-sidebar__add-child"),t=document.querySelectorAll(".hotel-card-sidebar__item--guests.hidden");let e=0;s.addEventListener("click",function(){e<t.length&&(t[e].classList.remove("hidden"),t[e].classList.add("visible"),e++),e===t.length&&(s.style.display="none")}),document.querySelectorAll(".icon--cross").forEach(l=>{l.addEventListener("click",function(){const d=this.closest(".hotel-card-sidebar__item--guests");d&&(d.classList.add("hidden"),d.classList.remove("visible"),e>0&&(e--,s.style.display="flex"))})})};c();export{c as m};