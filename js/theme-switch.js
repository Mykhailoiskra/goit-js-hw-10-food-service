const switchBtn = document.querySelector("#theme-switch-toggle");
const Theme = {
  LIGHT: "light-theme",
  DARK: "dark-theme",
};

window.addEventListener("load", defaultTheme);
switchBtn.addEventListener("click", themeSwitch);

function defaultTheme() {
  if (localStorage.getItem("theme") === "DARK") {
    document.body.classList.add(Theme.DARK);
    switchBtn.checked = true;
  } else {
    document.body.classList.add(Theme.LIGHT);
  }
}

function themeSwitch() {
  if (switchBtn.checked) {
    document.body.classList.replace(Theme.LIGHT, Theme.DARK);
    localStorage.setItem("theme", "DARK");
  } else {
    document.body.classList.replace(Theme.DARK, Theme.LIGHT);
    localStorage.setItem("theme", "LIGHT");
  }
}
