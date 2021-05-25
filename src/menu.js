function createMenu() {
  const menu = document.createElement("div");
  menu.classList.add("menu");

  menu.appendChild(
    createMenuItem(
      "Tuna",
      "Seared Tuna Belly Sushi"
    )
  );
  menu.appendChild(
    createMenuItem(
      "Salmon Egg",
      "Salmon Egg Sushi"
    )
  );
  menu.appendChild(
    createMenuItem(
      "Sea Urchin",
      "Sea Urchin Sushi"
    )
  );
  menu.appendChild(
    createMenuItem(
      "Shrimp",
      "Shrimp Sushi"
    )
  );
  menu.appendChild(
    createMenuItem(
      "Scallop",
      "Scallop Sushi"
    )
  );
  menu.appendChild(
    createMenuItem(
      "Mackeral",
      "Mackeral Sushi"
    )
  );
  menu.appendChild(
    createMenuItem(
      "Amberjack",
      "Amberjack Sushi"
    )
  );
  menu.appendChild(
    createMenuItem(
      "Flute",
      "Flute Sushi"
    )
  );
  menu.appendChild(
    createMenuItem(
      "Blue Fin",
      "Blue Fin Sushi"
    )
  );
  menu.appendChild(
    createMenuItem(
      "Eel",
      "Eel Sushi"
    )
  );
  return menu;
}

function createMenuItem(name, description) {
  const menuItem = document.createElement("div");
  menuItem.classList.add("menu-item");

  const foodName = document.createElement("h3");
  foodName.textContent = name;

  const foodDescription = document.createElement("p");
  foodDescription.textContent = description;

  const foodImage = document.createElement("img");
  foodImage.src = `images/sushi/${name.toLowerCase()}.png`;
  foodImage.alt = `${name}`;

  menuItem.appendChild(foodImage);
  menuItem.appendChild(foodName);
  menuItem.appendChild(foodDescription);

  return menuItem;
}

function loadMenu() {
  const main = document.getElementById("main");
  main.textContent = "";
  main.appendChild(createMenu());
}

export default loadMenu;