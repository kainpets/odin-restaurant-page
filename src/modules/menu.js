export default function createMenu() {
  const content = document.querySelector(".content");
  const menuPage = document.createElement("div");
  menuPage.classList.add("tabs");
  menuPage.classList.add("active");
  menuPage.id = "menu";

  menuPage.innerHTML = `
  <p>Does this work!</p>
  `;

  content.appendChild(menuPage);
}
