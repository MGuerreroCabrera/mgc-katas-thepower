// 1.1 Usa querySelector para mostrar por consola el botón con la clase .showme
const btnShowme = document.querySelector(".showme");
console.log(btnShowme.innerHTML);

// 1.2 Usa querySelector para mostrar por consola el h1 con el id #pillado

const elementPillado = document.querySelector("#pillado");
console.log(elementPillado.innerHTML);

// 1.3 Usa querySelector para mostrar por consola todos los p

const arrayP = document.querySelectorAll("p");
for (const element of arrayP) {
    console.log(element.innerHTML);
}

// 1.4 Usa querySelector para mostrar por consola todos los elementos con 
// la clase.pokemon

const pokemons = document.querySelectorAll(".pokemon");
for (const pokemon of pokemons) {
    console.log(pokemon.innerHTML);
}

// 1.5 Usa querySelector para mostrar por consola todos los elementos con 
// el atributo data-function="testMe".

const testMes = document.querySelectorAll("span[data-function='testMe']");
for (const testMe of testMes) {
     console.log(testMe.innerHTML);
}

// 1.6 Usa querySelector para mostrar por consola el 3 personaje con el atributo 
// data-function="testMe".

console.log(testMes[2].textContent);



