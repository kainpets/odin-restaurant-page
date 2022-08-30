export default function loadHomePage() {
  const content = document.querySelector(".content");
  content.appendChild(createTitle());
  content.appendChild(createNav());
}

function createTitle() {
  const title = document.createElement("h1");
  title.textContent = "Pizzeria";
  return title;
}


function createLink(linkName) {
  const link = document.createElement("a");
  link.textContent = linkName;
  link.href = linkName;
  return link;
}

function createNav() {
  const nav = document.createElement("nav");
  nav.classList.add("nav");
  const list = document.createElement("ul");
  const listItem1 = document.createElement("li")
  const listItem2 = document.createElement("li")
  const listItem3 = document.createElement("li")
  listItem1.appendChild(createLink("Home"));
  listItem2.appendChild(createLink("Menu"));
  listItem3.appendChild(createLink("Contact"));
  list.appendChild(listItem1);
  list.appendChild(listItem2);
  list.appendChild(listItem3);
  nav.appendChild(list);
  return nav;
}

