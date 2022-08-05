// Strings

let cadena = "Hola Mundo";

// PROPIEDADES

// length -> Devuelve la longitud de la cadena

// console.log(cadena.length);

// Métodos

// Todos los métodos devuelven una cadena nueva, la cdena original no sera modificada.

// toUpperCase() -> Devuelve la cadena a mayúsculas

// console.log(cadena.toUpperCase());

// let cadenamayus = cadena.toUpperCase();
// console.log(cadenamayus);

// toLowerCase() -> Devuelve la cadena a minusculas

// console.log(cadena.toLowerCase());

// indexOf(String) -> Devuelve la posición en la que se encuentra el String, si no lo encuentra devuelve -1 (Devuelve solo la primera coincidencia)

// console.log(cadena.indexOf('o'))
// console.log(cadena.indexOf('Hola'))

// replace(valor a buscar, valor nuevo) -> Remplaza el fragmento de la cadena que le digamos y pone el valor nuevo

// console.log(cadena.replace('Mundo','Youtube'))

// substring(inicio [,fin]) -> Extrae los caracteres desde iniico hasta el fin (el final no se incluye)
// Si no incluye el fin extrae el final.

// console.log(cadena.substring(3));
// console.log(cadena.substring(3,7));

// slice(inicio [,fin]) -> Igual que substring pero admite valores negativos, si ponemos valores negativos empezára desde atrás
// Si no se incluye el final extrae hasta el final

        // (2,-4) -> Empieza a contar en el tercer caracter y los 4 últimos no os considera

// console.log(cadena.slice(-3))
// console.log(cadena.slice(2))
// console.log(cadena.slice(0,-6))

// trim() -> Elimina los espacios al inciio y al final de la cadena

// let cadena2 = '          Hola youtube, estamos trabajando con cadenas          ';

// console.log(cadena2.trim());

// --ES5--

// startsWith(valor [,inicio]) -> Sirve para saber si la cadena empieza con ese valor. Devuelve true o false

// console.log(cadena.startsWith('H'));
// console.log(cadena.startsWith('h'));

// console.log(cadena.startsWith('M' , 5));

// endsWith(valor[,longitud]) .> Sirve para saber si la cadena termina con ese valor. Devuelve true 

// console.log(cadena.endsWith('o'));
// console.log(cadena.endsWith('a',4));
// console.log(cadena.endsWith('n',8));
// console.log(cadena.endsWith('Mundo'));

// includes(valor[,inicio]) -> Igual que indexOf pero devuelve true o false

/* console.log(cadena.includes('n'));
console.log(cadena.includes('a',5));
console.log(cadena.includes('a',2)); */

// repeat(,valor) -> Repite el string el número de veces que le indiquemos

/* let cadena3 = 'Hola';
console.log(cadena3.repeat(3));
console.log('r'.repeat(10)); */

/*Template Strings */

let nombre = "Sandra";
let apellido = "Flores";
let edad = 32;

console.log("Hola " + nombre + " " + apellido + ". Tienes " + edad + " años. ");
console.log("Hola " + nombre + " " + apellido + ". Tienes " + (edad +1)+ " años. ");

console.log(`Hola ${nombre} ${apellido}. Tienes ${edad} años.`);
console.log(`Hola ${nombre} ${apellido}. Tienes ${edad+1} años.`);