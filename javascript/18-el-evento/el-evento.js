const form = document.getElementById("form");
const input = document.getElementById("input");
const button = document.getElementById("button");
const gallery = document.getElementById("gallery");
const link = document.getElementById("link");

/* input.addEventListener("keyup", (e) => {
  console.log(e.key);
}); */ 

/* input.addEventListener("keyup", (e) => {
    console.log(e.explicitOriginalTarget.attributes[0].nodeValue);
  }); */ 

/* addEventListener('click', (e)=>{
    console.log(e)
}) */

/*  button.addEventListener('click', (e)=>{
    console.log(e.target)
}) */ 

/* gallery.addEventListener('click', (e) =>{
    console.log(e.target.textContent)
}) */

/* gallery.addEventListener('click', (e) =>{
    e.target.classList.add('red')
}) */

link.addEventListener('click', (e)=>{
    e.preventDefault()
    button.click()
})

form.addEventListener('submit', (e) =>{
    e.preventDefault()
    console.log('El formulario se ha enviado')
})

button.addEventListener('click', ()=>{
    input.value = 'Has hecho click'
})