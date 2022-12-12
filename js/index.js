/* console.log(document.body); */ //muestra el contenido del elemento
/* console.dir(document.body); */ //muestra las propiedas y eventos del elemento

const body = document.body;
console.log(body);

/* const nombre = prompt("ingresa  tu nombre: "); */
const nombre = "Agustin";
/* body.innerHTML = "Hola Mundo!"; */
/* body.innerHTML = `Hola ${nombre}!`; */

const miDiv = document.getElementById("primerParrafo");
console.log(miDiv);

/* INNERTEXT Y MODIFICANDO CLASES */
const parrafos = document.getElementsByClassName("targetParrafo");
console.log(parrafos);

/* parrafos[1].innerHTML = 'cambiado'; */

for (const parrafo of parrafos) {
    parrafo.innerHTML += 'Modificado.';
}
parrafos[0].innerText = "texto modificado."
parrafos[0].className = "red"


/* const input = document.getElementById("inputNombre");
console.log(input.value);
const nuevoParrafo = document.createElement('p');
nuevoParrafo.innerText = 'contenido del parrafo'
nuevoParrafo.className = 'red';
console.log(nuevoParrafo);
const padre = document.body;
padre.append(nuevoParrafo);
miDiv.append(nuevoParrafo);
nuevoParrafo.remove(); */ //eliminar un elemento del DOM

/* MODIFICANDO UN SELECT */
const listaIdiomas = ['ingles', 'español', 'portugues', 'aleman', 'ruso'];
const selectIdiomas = document.getElementById("miSelect");
/* selectIdiomas.innerHTML; */
const idiomaSeleccionado = 'aleman';
listaIdiomas.forEach((idioma, index) => {
    selectIdiomas.innerHTML += `<option ${idioma === idiomaSeleccionado ? 'selected' : ''}>${idioma}</option>`;
});

/* CREANDO OPCIONES DESDE UN ARRAY */
let padre = document.getElementById("personas");
let personas = ["HOMERO", "MARGE", "BART", "LISA", "MAGGIE"];
for (const persona of personas) {
    let li = document.createElement("li");
    li.innerHTML = persona;
    padre.appendChild(li);
}

/* CREANDO ELEMENTOS DESDE OBJETOS */
const productos = [ { id:1, nombre:"Arroz", precio:124},
                    { id:2, nombre:"Fideo", precio:70},
                    { id:3, nombre:"Pan", precio:50},
                    { id:4, nombre:"Flan", precio:100}];

for(const producto of productos){
    let contenedor = document.createElement("div");
    contenedor.innerHTML = `<h3> ID: ${producto.id}</h3>
                            <p> Producto: ${producto.nombre}</p>
                            <b> $ ${producto.precio}</b>`;
    document.body.appendChild(contenedor);
}

/* QUERY SELECTOR */
const nodo = document.querySelector('.red');
const nodo1 = document.querySelector('#miDiv');

const nodoParrafos = document.querySelectorAll('.targetParrafo')
console.log(nodoParrafos);


/* //////////////////////////////////////////////////////////// */
console.log(body);