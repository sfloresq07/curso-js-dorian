/* Bucles */

/* 
    Indeterminados - No sabemos el número de veces que se va a ejecutar el código

    Bucle while
    while(condición){
        //código a ejecutar
    }

    Bucle do. . .while
    do{
        //código a ejecutar
    }while(condicón)
*/

/* let pass = ' ';

while(pass != 'hola'){
    pass = prompt('Introduzca su contraseña')
}

console.log('Fin del bucle'); */

/* do{
    pass = prompt('Introduzca la contraseña')
}while(pass != 'hola') */

/* 
Determinados

bucle for

Su sintaxis se compone de 3 partes

    Iniciación de variable
	Número de vueltas
	Incremento o decremento

		for(let i=0;i<=10;i++){
		Código a ejecutar
		} 
*/

/* for(let i=0;i<=10;i++){
    if(i===5){
    console.log(i);
    }
}

for(let i=10;i>=0;i--){
    if(i!=5){
    console.log(i);
    }
} */

/* let numbers =[50,14,23,37,41,59]

for(let i=0;i<numbers.length;i++){
    console.log(`i vale ${i} y el valor de esa posición en el array es ${numbers[i]}`);
} */

let names = ["Paco","Jose","Paula","María"]

/* for (let name of names){
    console.log(name);
}

for (let name of names){
    console.log(names.indexOf(name));
}

for (let index in names){
    console.log(index);
}

for (let index in names){
    console.log(names[index]);
} */

/* Palabras reservadas 
    break -> Rompe el bucle
    continue .> Se salta la o las posiciones que le indiquemos para continuar su ejecución
*/
for (let i = 0; i < names.length; i++){
    if(names[i]==="Paula"){
        break
    }
    console.log(names[i]);
}

for (let i = 0; i < names.length; i++){
    if(names[i]==="Paula"){
        continue
    }
    console.log(names[i]);
}

for(let name of names){
    if(name==="Paula"){
        continue
    }
    console.log(name);
}

for(let index in names){
    if(names[index]==="Paula"){
        continue
    }
    console.log(index);
}
