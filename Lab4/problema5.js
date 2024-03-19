function inverso(numero) {
    return parseInt(numero.toString().split("").reverse().join(""));
}

// Solicitar al usuario que ingrese un número
let num5 = prompt("Ingrese un número:");

// Verificar si se proporcionó un número válido
if (num5 !== null) {
    num5 = parseInt(num5);
    if (!isNaN(num5)) {
        // Calcular el inverso del número
        let resultadoInverso = inverso(num5);
        // Mostrar el resultado en el HTML
        document.getElementById("resultado_problema5").innerHTML = "Inverso de " + num5 + ": " + resultadoInverso;
    } else {
        alert("Por favor, introduzca un número válido.");
    }
} else {
    alert("No se proporcionó ningún número.");
}