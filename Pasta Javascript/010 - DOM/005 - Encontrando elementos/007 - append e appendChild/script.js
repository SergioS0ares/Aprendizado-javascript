"use strict";

const container = document.querySelector(".container");

container.append("<p>Olá Sérgio</p>");

const newDiv = document.createElement("div");
newDiv.innerText = "Olá Sérgio";

container.appendChild(newDiv);