document.addEventListener("DOMContentLoaded", () => {
  

  const headerItem = document.querySelectorAll(".header__nav-item");
  const switchHeaderItemActiveClass = (page) => {
    headerItem.forEach((elem) => {
      elem.classList.remove("header__nav-item_active");
    });
    try {
      headerItem[page].classList.add("header__nav-item_active");
    } catch (error) {
      console.log("Error setting header item active class:", error);
    }
  };

  const pageCheck = () => {
    const page = document.body.getAttribute("data-page");
    switch (page) {
      case "search":
        return 0;
      case "destination":
        return 1;
      case "compaines":
        return 2;
      case "hot-deals":
        return 3;
      case "request":
        return 4;
      default:
        console.log("default");
        return 0; // Возвращаем 0 по умолчанию
    }
  };

  switchHeaderItemActiveClass(pageCheck());

  const burger = document.querySelector(".burger");
  const sidemenu = document.querySelector(".sidebar");

  console.log("Burger:", burger);
  console.log("Sidemenu:", sidemenu);

  if (burger && sidemenu) {
    burger.addEventListener("click", () => {
      console.log("Burger clicked");
      const isActive = sidemenu.classList.contains("sidebar_active");
      console.log("Sidebar active:", isActive);
      if (isActive) {
        document.body.style.overflow = "";
        sidemenu.classList.remove("sidebar_active");
        burger.classList.remove("burger_active");
      } else {
        document.body.style.overflow = "hidden";
        sidemenu.classList.add("sidebar_active");
        burger.classList.add("burger_active");
      }
    });
  } else {
    console.log("Burger or sidebar not found");
  }

  isLogin();
});
