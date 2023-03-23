function cambiarColor(){
    var caja = document.getElementById("caja");
    var colorEntrada = document.getElementById("color"); //capturamos elemento input
    var color = colorEntrada.value; //obtenemos el color del elemento input
    caja.style.backgroundColor = color;
}

function saludar(){
    var nombreEntrada = document.getElementById("nombre");
    var apellidoEntrada = document.getElementById("apellido");
    var nombre = nombreEntrada.value; 
    var apellido = apellidoEntrada.value;
    alert(`¡Hola, ${nombre} ${apellido}!`);
}

let autos = ["Civic", "Etios", 308, 206, 408];
console.log(autos[1]);

console.log(autos[4]);

