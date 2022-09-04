import createHeader from "./modules/header";
import createHome from "./modules/home";
import createMenu from "./modules/menu";
import createContact from "./modules/contact";

function main() {
  createHeader();
  setNav();
  createHome();
}


function setNav() {
  const content = document.querySelector(".content");

  content.addEventListener("click", (e) => {
    const id = e.target.dataset.id;
    if (id === "menu") {
      clearContent();
      createMenu();
    } else if (id === "contact") {
      clearContent();
      createContact();
    } else if (id == "home") {
      clearContent();
      createHome();
    }
  });
}

function clearContent() {
  const content = document.querySelector(".content");
  content.textContent = "";
  content.innerHtml = `
  ${createHeader()}`;
}

main()