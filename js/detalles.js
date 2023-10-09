let codigo = location.search;
console.log(codigo);

let codigoProducto = new URLSearchParams(codigo);
console.log(codigoProducto);

let codigoSeleccionado = codigoProducto.get('codigo');
console.log(codigoSeleccionado);

let codigoFinal = document.getElementById('codigo')
let precio = document.getElementById('precio');
let nombre = document.getElementById('nombre');
let imagen = document.getElementById('imagen');
let descripcion = document.getElementById('descripcion')

let detalleProducto = JSON.parse(localStorage.getItem('detallesProducto'))
let arrayDetalle = JSON.parse(detalleProducto[0]);
console.log(arrayDetalle);

codigoFinal.innerHTML =`${codigoSeleccionado}`;
imagen.innerHTML = `<img class="caja" src="${arrayDetalle.imagen}" alt="${arrayDetalle.nombre}"/>`
nombre.innerHTML = `${arrayDetalle.nombre}`; 
precio.innerHTML = `${arrayDetalle.precio}`;
descripcion.innerHTML = `${arrayDetalle.descripcion}`;


let botonInicio = document.getElementById('botonInicio');
botonInicio.addEventListener('click',function () {
    localStorage.clear()
    location.href= 'index.html'
})
