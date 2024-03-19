let tiempoInicio = Date.now();
let num1 = Math.floor(Math.random() * 10);
let num2 = Math.floor(Math.random() * 10);
let respuesta = parseInt(prompt("¿Cuál es la suma de " + num1 + " y " + num2 + "?"));
let tiempoFinal = Date.now();
let tiempoTranscurrido = (tiempoFinal - tiempoInicio) / 1000; // Convertir a segundos
if (respuesta === (num1 + num2)) {
    document.write("¡Respuesta correcta! <br>");
} else {
    document.write("Respuesta incorrecta :(. <br>");
}
document.write("Tardaste " + tiempoTranscurrido + " segundos en responder :)");
