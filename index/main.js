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

