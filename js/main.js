let productosHTML = document.querySelector('.productos');

fetch('../datos/productos.json')
.then((respuesta)=>{
    return respuesta.json()
})
.then((productos)=>{
    productos.forEach(producto => {
        productosHTML.innerHTML += `
    
        
    <div class="caja-contenedor">
            <div class="caja">
                <img class="image rounded" src="${producto.imagen}" alt="">
                <h3>${producto.nombre}</h3>
                <p>precio: <span>${producto.precio}</span></p>
                <button  id='${JSON.stringify(producto)}' class="btn botonDetalle">ver mas</button>
            </div>
    </div>    
        
        
        `
    })
    
    let botonDetalle = document.querySelectorAll('.botonDetalle')
    let arrayMiListaDeProductos
    let miObjeto
    let codigo

    botonDetalle.forEach(productoSeleccion => {
        productoSeleccion.addEventListener('click', function(e){
            e.preventDefault()
            let miListaDeProductos = localStorage.getItem('detallesProducto')
            if(miListaDeProductos == null){
                arrayMiListaDeProductos = [];
            }else{
                arrayMiListaDeProductos = JSON.parse(miListaDeProductos)
            }
            
            arrayMiListaDeProductos.push(this.id)
            
            miObjeto = JSON.parse(arrayMiListaDeProductos[0])
            
            codigo = miObjeto.codigo
            
            localStorage.setItem('detallesProducto', JSON.stringify(arrayMiListaDeProductos))
            
            location.href = `detalle.html?codigo=${codigo}`
        })    
    })
    

    
})
.catch((error)=>{
    console.log('Ufff ha ocurrido un error '+error )
})

