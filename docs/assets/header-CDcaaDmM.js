const i=()=>{const t=document.querySelector(".burger"),e=document.querySelector(".sidebar");if(!t||!e){console.error("Burger or sidebar not found");return}t.addEventListener("click",()=>{const s=e.classList.contains("sidebar_active");document.body.style.overflow=s?"":"hidden",e.classList.toggle("sidebar_active"),t.classList.toggle("burger_active")}),document.addEventListener("click",s=>{e.classList.contains("sidebar_active")&&!e.contains(s.target)&&!t.contains(s.target)&&(e.classList.remove("sidebar_active"),t.classList.remove("burger_active"),document.body.style.overflow="")})};export{i as h};
