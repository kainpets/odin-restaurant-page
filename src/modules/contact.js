export default function createContact() {
  const content = document.querySelector(".content");
  const contactPage = document.createElement("div");
  contactPage.classList.add("tabs");
  contactPage.classList.add("active");
  contactPage.id = "menu";

  contactPage.innerHTML = `
  <p>Does this work!</p>
  `;

  content.appendChild(contactPage);
}