function contador(arreglo) {
    let negativos = 0, ceros = 0, mayoresCero = 0;
    arreglo.forEach(function(numero) {
        if (numero < 0) {
            negativos++;
        } else if (numero === 0) {
            ceros++;
        } else {
            mayoresCero++;
        }
    });
    return [negativos, ceros, mayoresCero];
}

// Ejemplo de uso
let numeros = [-27, -15, -9, -42, -3, -55, -11, -8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 47, 12, 34, 56, 23, 91, 78, 65, 89];
let resultado = contador(numeros);
document.write("En el arreglo: " + numeros + "<br>");
document.write("Hay " + resultado[0] + " números negativos / " + resultado[1] + " ceros / " + resultado[2] + " números mayores a cero. <br>");