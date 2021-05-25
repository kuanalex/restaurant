function createContact() {
  const contact = document.createElement("div");
  contact.classList.add("contact");

  const phoneNumber = document.createElement("p");
  phoneNumber.textContent = "Phone: 123 456 789";

  const address = document.createElement("p");
  address.textContent = "Address: 7634 Woodbine Ave, Markham, ON L3R 2N2";

  const restaurantLocation = document.createElement("img");
  restaurantLocation.src = "images/restaurant-location.png";
  restaurantLocation.alt = "Zen Japanese Restaurant location";

  contact.appendChild(phoneNumber);
  contact.appendChild(address);
  contact.appendChild(restaurantLocation);

  return contact;
}

function loadContact() {
  const main = document.getElementById("main");
  main.textContent = "";
  main.appendChild(createContact());
}

export default loadContact;