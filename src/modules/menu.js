export default function createMenu() {
  const content = document.querySelector(".content");
  const menuPage = document.createElement("div");
  menuPage.id = "menu";

  menuPage.innerHTML = `
  <h2>MENU</h2>
  <ul class="menu-items">
    <li>
      <img src="../src/images/Eq_it-na_pizza-margherita_sep2005_sml.jpg">
      <p>Margheritta</p>
      <p>12.50$</p>
    </li>
    <li>
      <img src="../src/images/Eq_it-na_pizza-margherita_sep2005_sml.jpg">
      <p>Vesuvio</p>
      <p>14.00$</p>
    </li>
    <li>
      <img src="../src/images/Eq_it-na_pizza-margherita_sep2005_sml.jpg">
      <p>Hawaii</p>
      <p>15.50$</p>
    </li>
    <li>
      <img src="../src/images/Eq_it-na_pizza-margherita_sep2005_sml.jpg">
      <p>Vegan</p>
      <p>11.50$</p>
    </li>
  </ul>
  `;

  content.appendChild(menuPage);
}
