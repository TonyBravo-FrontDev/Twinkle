const btnMenu = document.querySelector(".menu-btn");
const navMenu = document.querySelector(".menu-nav-link");
const navLinks = document.querySelectorAll(".menu-nav-link li");
const number = document.querySelectorAll(".numbers");
const iconServices = document.querySelectorAll(".play-services");

let peach = "#FF594B";
let green = "#547A87";

colorNumbers();
iconsService();

btnMenu.addEventListener("click", () => {
  btnMenu.classList.toggle("open");
  navMenu.classList.toggle("open");

  navLinks.forEach((link) => {
    link.classList.toggle("fade");
  });
});

function colorNumbers() {
  number[0].style.color = peach;
  number[1].style.color = green;
  number[2].style.color = peach;
  number[3].style.color = green;
}

function iconsService() {
  iconServices[0].style.color = peach;
  iconServices[1].style.color = green;
  iconServices[2].style.color = peach;
  iconServices[3].style.color = green;
}
