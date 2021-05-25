function createHome() {
  const home = document.createElement("div");
  home.classList.add("home");

  const chefImage = document.createElement("img");
  chefImage.src = "images/chef.jpeg";
  chefImage.alt = "Chef";

  home.appendChild(createParagraph("Best Sushi in Toronto"));
  home.appendChild(createParagraph("Established since 2000"));
  home.appendChild(chefImage);
  home.appendChild(createParagraph("The traditional culture of Japanese cuisine"));

  return home;
}

function createParagraph(text) {
  const paragraph = document.createElement("p");
  paragraph.textContent = text;
  return paragraph;
}

function loadHome() {
  const main = document.getElementById("main");
  main.textContent = "";
  main.appendChild(createHome());
}

export default loadHome;