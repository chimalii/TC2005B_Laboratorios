let valores = [];

function agregarValor() {
    let valor = parseFloat(prompt("Ingrese un valor a promediar:"));
    if (!isNaN(valor)) {
        valores.push(valor);
    } else {
        alert("Valor no válido introducido.");
    }
}

function calcularPromedio() {
    if (valores.length === 0) {
        alert("No hay valores para promediar.");
        return;
    }
    let promedio = valores.reduce((a, b) => a + b, 0) / valores.length;
    alert("El promedio de los valores introducidos es: " + promedio);
}