const i=()=>{const c=document.querySelectorAll(".select__custom"),s=document.querySelectorAll(".select__item");function o(){this.classList.toggle("is-active")}function l(){const e=this.innerText,t=this.closest(".select"),n=t.querySelector(".select__selected");n.innerText=e,t.classList.remove("is-active")}c.forEach(e=>{e.addEventListener("click",o)}),s.forEach(e=>{e.addEventListener("click",l)}),document.addEventListener("click",function(e){c.forEach(t=>{t.contains(e.target)||t.classList.remove("is-active")})})};export{i as s};