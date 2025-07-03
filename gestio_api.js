/* I get the dates of from the API and show the products */
fetch("http://localhost:3000/productos")
  .then((response) => response.json())
  .then((data) => console.log("Preductos disponibles:", data))
  .catch((error) => console.error("Error al obtener productos:", error));


/* I add the product "Monitor" with the method "POST" */
const nuevoProducto = { id: 4, nombre: "Monitor", precio: 30000 };
if (validarProducto(nuevoProducto)) {

  fetch("http://localhost:3000/productos", {
    method: "POST",
    headers: { "Content-Type": "aplication/json" },
    body: JSON.stringify(nuevoProducto),
  })
    .then((response) => response.json())
    .then((data) => console.log("Preductos agregados:", data))
    .catch((error) => console.error("Error al agregar producto:", error));
}


/* I update the price of the product "laptop" with the method "PUT" */
const productoActualizado = { nombre: "laptop", precio: 700000 };
if (validarProducto(productoActualizado)) {
  fetch("http://localhost:3000/productos/1", {
    method: "PUT",
    headers: { "Content-Type": "aplication/json" },
    body: JSON.stringify(productoActualizado),
  })
    .then((response) => response.json())
    .then((data) => console.log("Preducto actualizado:", data))
    .catch((error) => console.error("Error al actualizar producto:", error));
}


/* I delete the product "mouse" with the method "DELETE" */
fetch("http://localhost:3000/productos/2", { method: "DELETE" })
  .then(() => console.log("Producto eliminado"))
  .catch((error) => console.error("Error al eliminar producto:", error));


  
/* I create a funtion to validate the datas before send it to the server */
function validarProducto(producto) {
  if (!producto.nombre || typeof producto.precio !== "number") {
    console.error("Datos del producto no validos");
    return false;
  }
  return true;
}
