import menuItems from "./js/menu.json";
import menuTemplate from "./templates/menu-items.hbs";

const menuList = document.querySelector(".js-menu");

menuList.insertAdjacentHTML("beforeend", menuTemplate(menuItems));
