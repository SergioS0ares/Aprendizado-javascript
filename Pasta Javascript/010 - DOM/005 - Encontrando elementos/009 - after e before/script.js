"use strict";

const container = document.querySelector(".container");

const newP = document.createElement("p");
newP.innerText = "Olá, Sérgio";

container.before(newP);
// container.after(newP);