const productos = [];


class Producto {
    constructor() {
        this.id = productos.length + 1;
        this.nombre = prompt('Ingrese el nombre del producto').toUpperCase();
        this.precio = parseFloat(prompt('Ingrese el precio'));
        this.cantidad = parseInt(prompt('Ingrese la cantidad'));
        this.url = prompt('Ingrese la url');
    }
};


let opciones = prompt('Ingrese: \n1 - Agregar producto \n2 - Ver productos \n3 - Buscar producto \n0 - Salir');

const agregarProductos = () => {
    const newProducto = new Producto();
    productos.push(newProducto);
    console.log(productos);
}

const mostrarProductos = () => {
    console.log('Carrito')
    let acumulador = '';
    let productosString = 'Carrito: \n';
    let totalCompra = 0;
    productos.forEach((producto, index) => {
        console.log((index + 1), producto);
        productosString += 'id: ' + producto.id + ' - ' + producto.nombre + ': ' + '$' +producto.precio + ' - ' + producto.cantidad + 'Unid.' + '\n';
        totalCompra += producto.precio * producto.cantidad;
        if(producto.url == ''){
            producto.url = 'https://www.bicifan.uy/wp-content/uploads/2016/09/producto-sin-imagen.png';
        }
        acumulador += 
        `
        <div class="card card-hijo-bootstrap">
            <img src="${producto.url}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${producto.nombre}</h5>
                <p class="card-text">${'$' + producto.precio + ' - ' + producto.cantidad + 'Unid.'}</p>
                <a href="#" class="btn btn-primary">Agregar</a>
            </div>
        </div>
        `;
    })
    document.getElementById('padre-cards').innerHTML = acumulador;
    productosString += '\n TOTAL: $' + totalCompra;
    alert(productosString);
}

const buscarProducto = () => {
    let resultadoBusqueda = 'Productos encontrados: \n';
    let filtroProducto = prompt('Ingrese el nombre del producto que esta buscando:');
    const productosEncontrados = productos.filter((el) => el.nombre.includes(filtroProducto.toUpperCase()));
    if(productosEncontrados != '')
    {
        productosEncontrados.forEach((producto, index) => {
            resultadoBusqueda += 'id: ' + producto.id + ' - ' + producto.nombre + ': ' + '$' +producto.precio + ' - ' + producto.cantidad + 'Unid.' + '\n';
        });
    }
    else{
        resultadoBusqueda = 'No se encontraron resultados para esa busqueda.'
    }
    alert(resultadoBusqueda);
    console.log(productosEncontrados);
}


const menu = (opcion) => {
    switch (opcion) {
        case '1':
            agregarProductos();
            break;

        case '2':
            mostrarProductos();
            break;

        case '3':
            buscarProducto();
            break;

        default:
            alert('Opcion incorrecta, intente nuevamente.');
            break;
    }
    opciones = prompt('Ingrese: \n1 - Agregar producto \n2 - Ver productos \n3 - Buscar producto \n0 - Salir');
}



while (opciones !== '0') {
    menu(opciones)
}