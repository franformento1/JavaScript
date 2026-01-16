console.log("MAIN.JS CARGADO");

let navbar = document.createElement("nav");
navbar.classList.add("navbar");
navbar.innerHTML = `
<div>
  <a href="#">INICIO</a>  
  <a href="#">PRODUCTOS</a> 
  <a href="#">CONTACTO</a>  
</div>`;
document.body.prepend(navbar);

let carrito = [];
let productos = [];

const contenedorProductos = document.getElementById("productos");
const contenedorCarrito = document.getElementById("carrito");
const totalHTML = document.getElementById("total");
const btnFinalizar = document.getElementById("finalizar");

fetch("./productos.json")
  .then(response => response.json())
  .then(data => {
    productos = data;
    renderProductos(productos);
  });

function renderProductos(lista) {
  contenedorProductos.innerHTML = "";
  for (const producto of lista) {
    let div = document.createElement("div");
    div.classList.add("producto-card");
    div.innerHTML = `
            <h3>${producto.nombre}</h3>
            <p>Precio: $${producto.precio}</p>
            <button onclick="agregarAlCarrito(${producto.id})">Agregar</button>
        `;
    contenedorProductos.appendChild(div);
  }
}

function agregarAlCarrito(id) {
  const producto = productos.find(p => p.id === id);
  carrito.push(producto);

  Swal.fire({
    icon: "success",
    title: "Producto agregado",
    text: producto.nombre
  });

  renderCarrito();
}

function renderCarrito() {
  contenedorCarrito.innerHTML = "";

  carrito.forEach(prod => {
    let p = document.createElement("p");
    p.textContent = `${prod.nombre} - $${prod.precio}`;
    contenedorCarrito.appendChild(p);
  });

  const total = carrito.reduce((acc, prod) => acc + prod.precio, 0);
  totalHTML.textContent = `Total: $${total}`;
}

btnFinalizar.addEventListener("click", () => {
  if (carrito.length === 0) {
    Swal.fire("Carrito vacío", "Agregá productos", "warning");
    return;
  }

  Swal.fire({
    title: "Compra realizada",
    text: "Gracias por tu compra",
    icon: "success"
  });

  carrito = [];
  renderCarrito();
});