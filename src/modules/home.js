export default function createHome() {
  const content = document.querySelector(".content");
  const homePage = document.createElement("div");
  homePage.classList.add("tabs");
  homePage.classList.add("active");
  homePage.id = "home";

  homePage.innerHTML = `
  <h2>Welcome to our pizzeria!</h2>
  <img src="../src/images/smiling-chef-cartoon-character_8250-10.jpg">
  <p>Order online or visit us yourself!</p>
  `;

  content.appendChild(homePage);
}
