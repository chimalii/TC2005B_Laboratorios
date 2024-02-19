// Agregar archivo a doc html
// <script src="intro.js"></script>

alert("hola");
const nombre = prompt("¿Cual es tu nombre?");
console.log(nombre);

const prueba = confirm("¿Cuanto es 456 x 12?");

if (prueba == 5472){
  console.log("Correcto");
}
else{
  console.log("No le atinaste :c");
}

// funciones tradicionales
function bienvenida(){
  console.log("Bienvenido a mi pagina");
}

// funciones modernas
// nombre de funcion + () parametros + {} cuerpo de la funcion
let mensaje = () => {
    console.log("Estas en la consola");
}

mensaje();

// arreglos    variables guardan una direccion de memoria
//             puedes modificar su contenido pero la dirección de memoria no cambia

const arreglo = ["1 2 3 4 5 6 7 8 9 10"];
const arreglo2 = new Array();

arreglo.push(11)

arreglo[5] = "+1";

arreglo["Indice2"] = 2;

console.log(arreglo);

// Al recorrer un indice de un arreglo con un for:
// of = valor  
// in = indice