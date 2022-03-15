const inventario = [
    {
        "id": 1,
        "nombre": "Calza deportiva Mujer",
        "imagen": "./img/calza.jpeg",
        "precio": 2500
    },
    {
        "id": 2,
        "nombre": "Conjunto deportivo",
        "imagen": "./img/conjuntodeportivo.jpeg",
        "precio": 8000
    },
    {
        "id": 3,
        "nombre": "kit deportivo",
        "imagen": "./img/kit.jpeg",
        "precio": 4500
    },
    {
        "id": 4,
        "nombre": "Remera Mujer",
        "imagen": "./img/remera.jpeg",
        "precio": 1350
    },
    {
        "id": 5,
        "nombre": "Conjunto unisex",
        "imagen": "./img/runningunisex.jpeg",
        "precio": 4000
    },
    {
        "id": 5,
        "nombre": "Zapatillas  talles",
        "imagen": "./img/zapatillas.jpeg",
        "precio": 5000
    }

]

const carrito = [];

function agregarAlCarrito(i){

 carrito.push(inventario[i]);
 console.log(carrito);
}