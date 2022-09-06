let servicio ="";
let precio = 0;
let seguirComprando = false;
let cantidad = 0;
let precioTotal = 0;

function calcularPrecio(servicio,precio){
    return precioTotal += servicio * precio;
}
do{
    servicio = prompt ("¿Que servicio necesitas ACTAS, CLASES, CIUDADANIA, COMBO?", "Ej: CLASES").toUpperCase();
    cantidad = parseInt(prompt("Cuántos necesitas comprar?"));

    switch(servicio){
        case "ACTAS" :
            precio = 38000;
            break;

        case "CLASES" :
            precio = 3200;
            break;
        
        case "CIUDADANIA":
            precio = 48000;
            break;

        case "COMBO":
            precio = 120000;
            break;

        default :
            alert("OPCION NO VALIDA");
            precio = 0;
            cantidad = 0;
    }

    calcularPrecio(precio,cantidad);

    seguirComprando = confirm("¿Querés agregar otro servicio?");
        
}while(seguirComprando);

alert("El precio total es de: " + precioTotal);

let FinCompra = confirm("¿Desea Finalizar Su Compra?");

if(FinCompra) alert("Su compra fue un exito");
if(!FinCompra) alert("Lo esperamos pronto");


















