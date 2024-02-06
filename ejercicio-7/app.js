const places = ["Gondor", "Mordor", "Rivendel", "La Comarca", "Nümenor"];

const destiny = document.querySelector("div[data-function='printHere']");

const ul = document.createElement("ul");

for (const place of places) {
    const li = document.createElement("li");
    li.innerText = place;
    ul.appendChild(li);
}

destiny.appendChild(ul);