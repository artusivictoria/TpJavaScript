let rectangulo= function(altura ,ancho){
    return (altura * ancho);
}

let triangulo= function(base, altura){
    return (base*altura)/2;
}

let LargoDelArray =function(lista){
    return lista.length;
}

let cantidadDeLetras = function(palabra){
    return palabra.length;
}

let dolarHoy = function(numero){
    return numero/1010;
}

let precioFinal= function(precio){
    let precioIva = precio * (21/100);
    return precio + precioIva;
}

let mitad = function(numero){
    return numero/2;
}

console.log(rectangulo(2,4));
console.log(triangulo(2,4));
console.log(LargoDelArray([2,3,4,5,6,67]));
console.log(cantidadDeLetras('hello'));
console.log(dolarHoy(1010));
console.log(precioFinal(10));
console.log(mitad(20))

