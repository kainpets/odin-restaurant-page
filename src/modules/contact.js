export default function createContact() {
  const content = document.querySelector(".content");
  const contactPage = document.createElement("div");
  contactPage.classList.add("flex");
  contactPage.classList.add("contact");
  contactPage.id = "contact";

  contactPage.innerHTML = `
  <h2>CONTACT</h2>
  <img class="location" src="../src/images/location.png">
  <p>📞 123 456 789</p>
  <p>🏠 al. Niepodleglosci, Poznan</p>
  `;

  content.appendChild(contactPage);
}