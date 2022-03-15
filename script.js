let productos = document.getElementById("productos");
let carritoDiv = document.getElementById("carrito");
let totalDiv = document.getElementById("total");

inventario.forEach(producto =>{
    let divProducto = document.createElement("div");

    divProducto.classList.add("producto");

    divProducto.innerHTML = `
            <div class="producto-head">
                <h3>${producto.nombre}</h3>
                <span>$${producto.precio}</span>
            </div>
            <img src="${producto.imagen}" alt="" >
            <button class="agregar">Agregar al carrito</button>
    `;
     productos.appendChild(divProducto);
});


//evento del boton
let agregarCarrito = document.getElementsByClassName("agregar");

for(let i = 0; i <= agregarCarrito.length; i++){
    agregarCarrito[i].addEventListener("click", (e) =>{
       e.preventDefault();
        agregarAlCarrito(i);
        dibujarCarrito();
        calcularTotal();
    })
}

function dibujarCarrito(){
    carritoDiv.innerHTML = '';

    carrito.forEach(producto =>{
        let liProducto = document.createElement("li");
        let removeItem = document.createElement("button");

        liProducto.innerText = producto.nombre + '$' + producto.precio;
        removeItem.innerText = 'borrar';
        

        carritoDiv.appendChild(liProducto);
        liProducto.appendChild(removeItem);

    })

}

function calcularTotal(){
    let total = 0;
    for(let i = 0; i < carrito.length; i++){
        total += carrito[i].precio;
        }    
        totalDiv.innerHTML = total;
}























