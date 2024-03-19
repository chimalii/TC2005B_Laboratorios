// Solicitar un número
let num = prompt("Ingrese un número: ");

// Función para generar la tabla
function generarTabla(num) {
    document.write("<table border='1'><tr><th>Número</th><th>Cuadrado</th><th>Cubo</th></tr>");
    for(let i = 1; i <= num; i++) {
        let cuadrado = i * i;
        let cubo = i * i * i;
        document.write("<tr><td>" + i + "</td><td>" + cuadrado + "</td><td>" + cubo + "</td></tr>");
    }
    document.write("</table>");
}

// Llamar a la función con el número proporcionado por el usuario
generarTabla(num);

