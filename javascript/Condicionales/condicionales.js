/* let num1 = 0;
let num2 = 0; */

/* Condicional simple */

/* if(num>0) {
    console.log(`${num} es mayor que 0`);
    console.log(`${num} es mayor que 0`);
}

Condicional compuesto 
 if(num>0) {
    console.log(`${num} es mayor que 0`);
    
}else{
    console.log(`${num} es menor que 0`);
    
}  Condicional múltiple 
if(num>0) {
    console.log(`${num} es mayor que 0`);
    
}else if(num<0){
    console.log(`${num} es menor que 0`);
}else{
    console.log(`${num} es igual que 0`);
} */

/* Operadores lógicos */

/* && and deben cumplirse las dos condiciones */
/* || ó  aplica si al menos una de las condiciones se cumpla*/

/* if(num1>0){
    if(num2>0){
        console.log(`${num1} y ${num2} son mayores que 0`);
    }else if(num2<0){
        console.log(`${num1} es mayor que 0 y num 2 es menor que 0`);
    }else{
        console.log(`${num1} es mayor que 0 y num 2 es igual a 0`);
    }
}else if(num1<0){
    if(num2>0){
        console.log(`${num1} no es mayor que 0 y ${num2} es mayor que 0`);
    }else if(num2<0){
        console.log(`${num1} y ${num2} son menores que 0`);
    }else{
        console.log(`${num1} es menor que 0 y num 2 es igual a 0`);
    }
}else{
    if(num2>0){
    console.log(`${num1} es igual a 0 y ${num2} es mayor que 0`);
    }else if(num2<0){
    console.log(`${num1} es igual a 0 y ${num2} es menor que 0`);
    }else{
    console.log(`${num1} y ${num2} son iguales a 0`);
    }
}

let word = "Hola";

if(word.length>4){
    console.log(`${word} tiene mas de 4 letras`);
}else if(word.length<4){
    console.log(`${word} tiene menos de 4 letras`);
}else{
    console.log(`${word} tiene 4 letras`);
}

let respuesta = false;

if(respuesta==true) console.log(`respuesta tiene el valor true`);
if(respuesta==false) console.log(`respuesta tiene el valor false`);

if(respuesta) console.log(`respuesta tiene el valor true`);
if(!respuesta) console.log(`respuesta tiene el valor false`); */

/* Switch 
Sintaxis Simple:
switch(evaluación) {
    case n:
        //código
        break;
    case n2:
        //código
        break;

    default:
        //código
}

Sintaxis Múltiple:
switch(evaluación) {
    case n:
    case n2:
    case n3:
    case n4:
        //código
        break;
    case n5:
    case n6:
        //código
    break;

    default:
        //código
}
*/

let num = 4.5;

switch(num){
    case 1: console.log(`${num} tiene el valor 1`);
    break;
    case 2: console.log(`${num} tiene el valor 2`);
    break;
    default: console.log(`${num} no vale ni 1 ni 2`);
}

switch(num){
    case 1:
    case 3:
    case 5:
    console.log(`${num} es impar`);
    break;
    case 2:
    case 4:
    console.log(`${num} es par`);
    break;
    default: console.log(`${num} no es par ni impar`);
}
/* Sintaxis múltiple encadenada */