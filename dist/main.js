(() => {
    "use strict";

    function e(e) {
        const t = document.createElement("p");
        return t.textContent = e, t
    }
    const t = function () {
        const t = document.getElementById("main");
        t.textContent = "", t.appendChild(function () {
            const t = document.createElement("div");
            t.classList.add("home");
            const n = document.createElement("img");
            return n.src = "images/chef.jpg", n.alt = "Chef", t.appendChild(e("Best Sushi in Toronto")), t.appendChild(e("Established since 2000")), t.appendChild(n), t.appendChild(e("The traditional culture of Japanese cuisine")), t
        }())
    };

    function n(e, t) {
        const n = document.createElement("div");
        n.classList.add("menu-item");
        const a = document.createElement("h3");
        a.textContent = e;
        const c = document.createElement("p");
        c.textContent = t;
        const d = document.createElement("img");
        return d.src = `images/sushi/${e.toLowerCase()}.png`, d.alt = `${e}`, n.appendChild(d), n.appendChild(a), n.appendChild(c), n
    }

    function a() {
        const e = document.createElement("div");
        e.classList.add("header");
        const a = document.createElement("img");
        return a.src = "images/logo.png", a.classList.add("restaurant-logo"), e.appendChild(a), e.appendChild(function () {
            const e = document.createElement("nav"),
                a = document.createElement("button");
            a.classList.add("button-nav"), a.textContent = "Home", a.addEventListener("click", (e => {
                e.target.classList.contains("active") || (c(a), t())
            }));
            const d = document.createElement("button");
            d.classList.add("button-nav"), d.textContent = "Menu", d.addEventListener("click", (e => {
                e.target.classList.contains("active") || (c(d), function () {
                    const e = document.getElementById("main");
                    e.textContent = "", e.appendChild(function () {
                        const e = document.createElement("div");
                        return e.classList.add("menu"), e.appendChild(n("Tuna", "Seared Tuna Belly Sushi")), e.appendChild(n("Salmon Egg", "Salmon Egg Sushi")), e.appendChild(n("Sea Urchin", "Sea Urchin Sushi")), e.appendChild(n("Shrimp", "Shrimp Sushi")), e.appendChild(n("Scallop", "Scallop Sushi")), e.appendChild(n("Mackeral", "Mackeral Sushi")), e.appendChild(n("Amberjack", "Amberjack Sushi")), e.appendChild(n("Flute", "Flute Sushi")), e.appendChild(n("Blue Fin", "Blue Fin Sushi")), e.appendChild(n("Eel", "Eel Sushi")), e
                    }())
                }())
            }));
            const i = document.createElement("button");
            return i.classList.add("button-nav"), i.textContent = "Contact", i.addEventListener("click", (e => {
                e.target.classList.contains("active") || (c(i), function () {
                    const e = document.getElementById("main");
                    e.textContent = "", e.appendChild(function () {
                        const e = document.createElement("div");
                        e.classList.add("contact");
                        const t = document.createElement("p");
                        t.textContent = "Phone: 123 456 789";
                        const n = document.createElement("p");
                        n.textContent = "Address: 7634 Woodbine Ave, Markham, ON L3R 2N2";
                        const a = document.createElement("img");
                        return a.src = "images/restaurant-location.png", a.alt = "Zen Japanese Restaurant location", e.appendChild(t), e.appendChild(n), e.appendChild(a), e
                    }())
                }())
            })), e.appendChild(a), e.appendChild(d), e.appendChild(i), e
        }()), e
    }

    function c(e) {
        document.querySelectorAll(".button-nav").forEach((e => {
            e !== this && e.classList.remove("active")
        })), e.classList.add("active")
    }! function () {
        const e = document.getElementById("content");
        e.appendChild(a()), e.appendChild(function () {
            const e = document.createElement("main");
            return e.classList.add("main"), e.setAttribute("id", "main"), e
        }()), e.appendChild(function () {
            const e = document.createElement("footer");
            e.classList.add("footer");
            const t = document.createElement("p");
            t.textContent = "Copyright © 2021 kuanalex";
            const n = document.createElement("a");
            n.href = "https://github.com/kuanalex";
            const a = document.createElement("i");
            return a.classList.add("fab"), a.classList.add("fa-github"), n.appendChild(a), e.appendChild(t), e.appendChild(n), e
        }()), c(document.querySelector(".button-nav")), t()
    }()
})();