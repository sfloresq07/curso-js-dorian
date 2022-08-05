//let word = "Hola Mundo"

//console.log(Array.from(word));
//console.log(word.split(' '));

/* Sort

const letters = ['b', 'a', 'z', 'm'];
const numbers = ['3', '1', '8', '300', '100'];

console.log(letters.sort())
console.log(numbers.sort((a,b)=>a-b))
console.log(numbers.sort((a,b)=>b-a)) */

/* forEach 

const numbers = [12, 24, 35, 46, 57]

numbers.forEach((number)=>console.log(number))
numbers.forEach((number, index)=>
console.log(`${number} esta en la posición ${index}`))
*/

/* some , every

const words = ["HTML",  "CSS", "JAVASCRPT", "PHP"];

console.log(words.some(word => word.length>10));
console.log(words.every(word => word.length>2)); */

/* map, filter, reduce */

const numbers = [1, 2, 3, 4, 5]

/* numbers.map((Number)=>console.log(Number * 2)); */

/* const numbers2 = numbers.map(number => number * 2)

console.log(numbers2) */

/* const numbers2 = numbers.filter(number=>number>30);
console.log(numbers2)  */

/* console.log(numbers.reduce((a,b)=> a+b)); */

const users = [
    {
        name: "user 1",
        online: true
    },
    {
        name: "user 2",
        online: true
    }, 

    {
        name: "user 3",
    online: false
    },

    {
        name: "user 4",
    online: true
    },

    {
        name: "user 5",
    online: false
    },

    {
        name: "user 6",
    online: true
    }

]

const usersOnline = users.reduce((cont, user)=>{
    if (user.online) cont++
    return cont
},0)

console.log(`Hay ${usersOnline} usuarios conectados`);