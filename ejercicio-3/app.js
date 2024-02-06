// 1.1 Basandote en el array siguiente, crea una lista ul > li 
// dinámicamente en el html que imprima cada uno de los paises.
// const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];

const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];

const myUl = document.createElement("ul");
myUl.setAttribute("id", "countries");

for (const country of countries) {
    const myLi = document.createElement("li");
    myLi.textContent = country;
    myUl.appendChild(myLi);
}

document.body.appendChild(myUl);


// 1.2 Elimina el elemento que tenga la clase .fn-remove-me.

const elementToRemove = document.querySelector(".fn-remove-me")
document.body.removeChild(elementToRemove);

// 1.3 Utiliza el array para crear dinamicamente una lista ul > li de elementos 
// en el div de html con el atributo data-function="printHere".

const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];
const mySecondUl = document.createElement("ul");
mySecondUl.setAttribute("id", "cars");

const carsDiv = document.querySelector("div[data-function='printHere']");

for (const car of cars) {
    const carLi = document.createElement("li");
    carLi.textContent = car;
    mySecondUl.appendChild(carLi);
}

carsDiv.appendChild(mySecondUl);

// 1.4 Crea dinamicamente en el html una serie de divs que contenga un elemento 
// h4 para el titulo y otro elemento img para la imagen.
const countries2 = [
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1'}, 
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5'}
];

for (const element of countries2) {

    const div = document.createElement("div");
    div.setAttribute("class", "country-div");
    const h4 = document.createElement("h4");
    h4.textContent = element.title;
    const img = document.createElement("img");
    img.src = element.imgUrl;
    img.alt = element.title;

    div.appendChild(h4);
    div.appendChild(img);
    document.body.appendChild(div);    
}

// 1.5 Basandote en el ejercicio anterior. Crea un botón que elimine el último 
// elemento de la serie de divs.
const btnDeleteLast = document.createElement("button");
btnDeleteLast.textContent = "Eliminar el último";

function deleteLast () {
    const allDivsToRemove = document.querySelectorAll("div");
    allDivsToRemove[allDivsToRemove.length - 1].remove();
}

btnDeleteLast.addEventListener("click", deleteLast);
document.body.appendChild(btnDeleteLast);


// 1.6 Basandote en el ejercicio anterior. Crea un botón para cada uno de los 
// divs que elimine ese mismo elemento del html.

const allDivsToRemove2 = document.querySelectorAll("div");

for (const div of allDivsToRemove2) {
    const button = document.createElement("button");
    button.textContent = "Borrar imagen"
    button.addEventListener("click", (e) => e.target.parentElement.remove())
    div.appendChild(button);
}


