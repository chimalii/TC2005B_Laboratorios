function promedios(matriz) {
    let promedios = [];
    matriz.forEach(function(arreglo) {
        let sumatoria = arreglo.reduce((a, b) => a + b, 0);
        promedios.push(sumatoria / arreglo.length);
    });
    return promedios;
}

// Ejemplo de uso
let matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
let resultadoPromedios = promedios(matriz);

// Mostrar los promedios en la página HTML
document.write("Promedios: " + resultadoPromedios.join(", "));