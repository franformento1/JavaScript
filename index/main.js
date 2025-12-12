/* getElementById = traer un elemento
getElementByClassName = traer un elemento por clase
getElementByTagHame = traer un elemento por etiqueta */

/* let titulo = document.getElementById("titulo");
console.log(titulo.innerText); */

/*let parrafos = document.getElementsByTagName("p"); */

/*let titulo = document.getElementById("titulo");
const parrafo = titulo.innerText;
console.log(parrafo);*/

/*const titulo = document.getElementById("titulo");
titulo.innerText = "Tienda de ropa";

const parrafo = document.getElementById("parrafo");
parrafo.innerHTML = `

<ul>
<li>Remeras</li>
<li>Pantalones</li>
<li>Zapatillas</li>
</ul>`*/

/* let parrafo = document.createElement("p");
parrafo.innerHTML = `<p>Hola soy un parrafo creado desde JS</p>`;
document.body.appendChild(parrafo);*/
 
/*let producto = {id: 1, nombre: "Remera", precio: 1500};
let concatenado = "ID: " + producto.id + " - Nombre: " + producto.nombre + " - Precio: $" + producto.precio;

let plantilla = `
ID: ${producto.id} - ${producto.nombre} - $${producto.precio}
`;
let contenedor = document.createElement("div");
contenedor.innerHTML = `
<h3> ID: ${producto.id} </h3>
<p> Nombre: ${producto.nombre} </p>
<b> Precio: ${producto.precio} </b>
`;
document.body.appendChild(contenedor);*/

/*const productos= [
    {id: 1, nombre: "Remera", precio: 1500},
    {id: 2, nombre: "Pantalon", precio: 3500},
    {id: 3, nombre: "Zapatillas", precio: 5000},
    {id: 4, nombre: "Campera", precio: 8000},
]

for(const i of productos){
    let contenedor = document.createElement("div");
    contenedor.innerHTML = `
    <h3> ID: ${i.id} </h3>
    <p> Nombre: ${i.nombre} </p>
    <b> Precio: ${i.precio} </b>
    <hr>
    `;
    } 

document.body.appendChild(contenedor);*/

let navbar = document.createElement("nav");
navbar.classList.add("navbar");
navbar.innerHTML = `
<div>
  <a href="#">INICIO</a>  
  <a href="#">PRODUCTOS</a> 
  <a href="#">CONTACTO</a>  
</div> 
`;
document.body.appendChild(navbar);

const productos= [
    {id: 1, nombre: "Remera", precio: 1500},
    {id: 2, nombre: "Pantalon", precio: 3500},
    {id: 3, nombre: "Zapatillas", precio: 5000},
    {id: 4, nombre: "Campera", precio: 8000},
    {id: 5, nombre: "Gorra", precio: 1200},
]

for(const producto of productos){
    let contenedor = document.createElement("div");
    contenedor.classList.add("producto-card"); 
    contenedor.innerHTML = `
    <h3> ID: ${producto.id} </h3>
    <p> Nombre: ${producto.nombre} </p>
    <b> Precio: ${producto.precio} </b>
    `;
    
document.body.appendChild(contenedor);
}

