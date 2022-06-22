/* 
document | element .getElementById('id') - Acceder a un elemento a través de si id

document | element .querySelector('selectorCSS') - Accede al primer elmento que coincida con el selector CSS

document.querySelectorAll('selectorCSS') - Accede a todos los elementos que coincidan con el selector CSS, devuelve un nodeList
*/
/* const title = document.getElementById('title')

title.textContent = 'DOM - Accediendo a nodos' */

/* const paragraph = document.querySelector('.paragraph:nth-child(2)')

console.log(paragraph) */

/* const paragraph = document.querySelector('.paragraph')

const span = paragraph.querySelector("span")

console.log(span.textContent); */

/* const paragraph = document.querySelector('.paragraph')

const span = document.getElementById('title').querySelector("span")

console.log(span.textContent) */

const paragraphs = document.querySelectorAll('.paragraph')
const paragraphsSpread = [...document.querySelectorAll('.paragraph')]
const paragraphsArray = Array.from(document.querySelectorAll('.paragraph'))

paragraphs[0].style.color = 'red'
/* paragraphs.map(p=>p.style.color='gren') */

paragraphsSpread.map(p=>p.style.color='green')

paragraphsArray.map(p=>p.style.color='blue')

console.log(paragraphs);