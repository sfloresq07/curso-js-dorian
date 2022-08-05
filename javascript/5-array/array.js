/* 
Son estructuras que nos permiten almacenar varios datos y agruparlos.
Se pueden llenar con cualquier tipo de dato válido en JavaScript y deben ir separados por comas.
Se pueden mezclar tipos de datos, pero no es recomendable.
Se declaran con llaves cuadradas o corchetes [].
Pueden declararse vacíos o con un contenido ya establecido.
Pueden añadirse o eliminarse elementos en el momento que queramos.

let array = [] // Array vacío
let números = [1,2,3,4,5] // Array con contenido inicial
*/

/* let numeros=[1,2,3,4,5,6];

let palabras=["hola", "estamos", "en", "YouTube"];

let booleans=[true, true, false];

console.log(numeros[0]+numeros[1]);

console.log(`La palabra "${palabras[3]}" tiene ${palabras[3].length} letras`);

console.log(numeros); */

let numbers = [1,2,3,4,5,1];

/* 
    Arrays - Propiedad
        .length - devuelve el número de posiciones que contiene el array
*/
//console.log(numbers.length);

/* 
    Arrays - Métodos
        Array.isArray(variable a evaluar) - devuelve true si la variable es un array.
*/

//let number = 4;
//console.log(Array.isArray(number));
//console.log(Array.isArray(numbers));

/* 
    Eliminar un elemento
        .shift() -Elimina el primer elemento del array y devuelve ese elemento
        .pop() - Elimina el último elemento de un array y devuelve ese elemento
*/

//console.log(numbers);
//let deleteElement = numbers.shift();
//console.log(numbers);
//console.log(deleteElement);
//console.log(numbers);
//numbers.pop();
//console.log(numbers);

/* 
    Añadir elementos
        .push(element1, element2,...) - añade uno o más elementos al final del array y devuelve la nueva longitud.
        .unshift(element1, element2,...) - añade uno o más elementos al comienzo del array y devuelve la nueva longitud.
*/

//console.log(numbers);
//let newLength = numbers.push(6);
//console.log(numbers);
//console.log(newLength);
//let newLength2 = numbers.unshift(0);
//console.log(numbers);

/* 
    .indexOf() - devuelve el primer ínidice del elemento que coincida con el valor especificado,  ó -1 si ninguno es encontrado.
*/

//console.log(numbers);
//console.log(numbers.indexOf(1));

/* 
    .lastIndexOf() - devuelve el último índice del elemento que coincida con el valor especificado, ó -1 si ninguno es encontrado.
*/

//console.log(numbers);
//console.log(numbers.lastIndexOf(1));

/* 
    .reverse() - Invierte el orden de los elementos del array.
*/

//console.log(numbers);
//numbers.reverse();
//console.log(numbers);

/* 
    .join(separador) - devuelve un string con el separador que indiquemos, por defecto son comas.
*/

//console.log(numbers);
//let arrayString = numbers.join(" ")
//console.log(arrayString);
//console.log(numbers.join("-"));

/* 
    .splice(a,b,items) - cambia el contenido de un array eliminando elementos existentes y/o agregando nuevos elementos.
        a - indice de inicio
        b - números de elementos (opcional)
        items - elementos a añadir en el caso de que se añadan. (opcional)
*/

//console.log(numbers);
//numbers.splice(3); - elimina desde la posisicón a hasta el final.
//numbers.splice(2,2); //- elimina desde la posisicón a el número de valores que le indiquemos.
//numbers.splice(2,2,10,23,54); - Si b es un valor distinto de 0 elimina el número de valores que indiquemos en b y añade los valores de items a partir de la posición a.
//numbers.splice(2,0,10,23,54); - Si b vale 0 añade los elementos a partir de la posición a y no elimina ninguno.
//console.log(numbers);

/* 
    .slice(a,b) - extrae elementos de un array desde el índice a hasta el índice b. Si no existe b lo hace desde a hasta el final, si  no existe ni a ni b hace una copia del original
*/

//let newNumbers = numbers.slice();
//console.log(numbers);
//console.log(newNumbers);

//let newNumbers = numbers.slice(2);
//console.log(numbers);
//console.log(newNumbers);

//let newNumbers = numbers.slice(2,4);
//console.log(numbers);
//console.log(newNumbers);


