export default function createHeader() {
  const content = document.querySelector(".content");

  const header = document.createElement("header");
  header.innerHTML = `
  <h1>Pizzeria</h1>
    <nav>
      <ul>
        <button class="btn active" data-id="home">Home</button>
        <button class="btn" data-id="menu">Menu</button>
        <button class="btn" data-id="contact">Contact</button>
      </ul>
    </nav>
  `;

  content.appendChild(header);
}
