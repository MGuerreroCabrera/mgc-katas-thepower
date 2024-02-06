// 1.1 Inserta dinamicamente en un html un div vacio con javascript.

const myDiv = document.createElement("div");
myDiv.classList.add("my-class");

document.body.appendChild(myDiv);

// 1.2 Inserta dinamicamente en un html un div que contenga una p con javascript.

const mySecondDiv = document.createElement("div");
mySecondDiv.setAttribute("id", "mySecondDiv");
const myP = document.createElement("p");
myP.textContent = "Texto de prueba";
mySecondDiv.appendChild(myP);
document.body.appendChild(mySecondDiv);


// 1.3 Inserta dinamicamente en un html un div que contenga 6 p utilizando un 
// 	loop con javascript.

const myThirdDiv = document.createElement("div");
myThirdDiv.setAttribute("id", "myThirdDiv");

for (let i = 1; i <= 6; i++){
    const anotherP = document.createElement("p");
    anotherP.textContent = `Párrafo ${i}`;
    myThirdDiv.appendChild(anotherP);
}

document.body.appendChild(myThirdDiv);

// 1.5 Inserta en el h2 con la clase .fn-insert-here el texto 'Wubba Lubba dub dub'.

const h2Selected = document.querySelector(".fn-insert-here");
h2Selected.textContent = "Wubba Lubba dub dub";

// 1.6 Basandote en el siguiente array crea una lista ul > li con 
// los textos del array.
// const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];

const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];
const myUl = document.createElement("ul");
myUl.setAttribute("id", "myUl");

for (const app of apps) {
    const myLi = document.createElement("li");
    myLi.textContent = app;
    myUl.appendChild(myLi);
}

document.body.appendChild(myUl);

// 1.7 Elimina todos los nodos que tengan la clase .fn-remove-me

const arrayToRemove = document.querySelectorAll(".fn-remove-me");
for (const element of arrayToRemove) {
    document.body.removeChild(element);
}

// 1.8 Inserta una p con el texto 'Voy en medio!' entre los dos div. 
// 	Recuerda que no solo puedes insertar elementos con .appendChild.

// - Selecciono el primer div
const firstDiv = document.querySelector("div");

// - Creo que párrafo
const mySecondP = document.createElement("p");
mySecondP.textContent = "Voy en medio!";

// - Inserto el párrafo

firstDiv.insertAdjacentElement("afterend", mySecondP);

// 1.9 Inserta p con el texto 'Voy dentro!', dentro de todos los div con la clase 
// 	.fn-insert-here

// - Selecciono todos los elementos con la clase fn-insert-here

const arrayDivs = document.querySelectorAll("div.fn-insert-here");


// - Recorro el arrayDivs y le añado el elemento p

for (const element of arrayDivs) {
    // - Creo el párrafo y lo añado al nodo
    const myThirdP = document.createElement("p");
    myThirdP.textContent = "Voy dentro!";
    element.appendChild(myThirdP);
}


