export default function loadHomePage() {
  const content = document.querySelector(".content");
  document.body.style.overflow="hidden";
  content.style.height = "100vh";
  content.appendChild(createTitle());
  content.appendChild(createNav());
  content.appendChild(createParagraph("Best pizza in the world!"));
  content.appendChild(createImg());
  content.appendChild(createParagraph("Order online or visit us yourself!"));
  content.appendChild(createParagraph("Only organic, local produce."));

}

function createTitle() {
  const title = document.createElement("h1");
  title.textContent = "Pizzeria";
  return title;
}

function createLink(linkName) {
  const link = document.createElement("a");
  link.textContent = linkName;
  link.href = `#${linkName}`;
  return link;
}

function createNav() {
  const nav = document.createElement("nav");
  nav.classList.add("nav");
  const list = document.createElement("ul");
  const listItem1 = document.createElement("li");
  const listItem2 = document.createElement("li");
  const listItem3 = document.createElement("li");
  listItem1.appendChild(createLink("Home"));
  listItem2.appendChild(createLink("Menu"));
  listItem3.appendChild(createLink("Contact"));
  list.appendChild(listItem1);
  list.appendChild(listItem2);
  list.appendChild(listItem3);
  nav.appendChild(list);
  return nav;
}

function createImg() {
  const image = document.createElement("img");
  image.src = "../src/images/smiling-chef-cartoon-character_8250-10.jpg";
  image.alt = "smiling cartoon chef";
  image.style.width = "50%";
  image.style.borderRadius = "50%";
  return image;
}

function createParagraph(text) {
  const paragraph = document.createElement("p");
  paragraph.textContent = text;
  return paragraph;
}

