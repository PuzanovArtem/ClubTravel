document.addEventListener("DOMContentLoaded", () => {
  const burger = document.querySelector(".burger");
  const sidemenu = document.querySelector(".sidebar");

  if (burger && sidemenu) {
    burger.addEventListener("click", () => {
      const isActive = sidemenu.classList.contains("sidebar_active");
      document.body.style.overflow = isActive ? "" : "hidden";
      sidemenu.classList.toggle("sidebar_active");
      burger.classList.toggle("burger_active");
    });
  } else {
    console.log("Burger or sidebar not found");
  }
});
