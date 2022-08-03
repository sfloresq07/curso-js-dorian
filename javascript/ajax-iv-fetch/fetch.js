/* 
Fech API

Proporciona una interfaz JavaScript para acceder y anipular partes del canal HTTP, como peticiones y respuestas.
También provee un método global fecth() que proporciona una forma fácil y logica de obtener recursos de forma asíncrona por la red.
Esta basado en promesas, por lo cual tiene un response y un reject internos
    Response tiene varios métodos
    arrayBuffer(): Archivos binarios en bruto (mp3, pdf, jpg, etc). Se utiliza cuando se necesita manipular el contenido del archivo.
    blob(): Archivos binarios en bruto (mp3, pdf, jpg, etc). Se utiliza cuando se necesita manipular el contenido y se va a trabajar con el archivo directamente.
    clone(): crea un clon de un objeto de rspuesta, idéntico en todos los sentidos, pero almacenados en una variable diferente.
    formData(): Se utiliza para leer los objetos formData
    json(): Convierte los archivos json en un objeto JavaScript
    text(): Se utiliza cuando queremos leer un archivo de texto. Siempre se codifica en UTF-8

    //COMPROBACIÓN DE SOPORTE FETCH
            if(window.fetch != undefined) console.log('FETCH OK')
            else console.log('FETCH NOT WORKS!');
*/

const button = document.getElementById('button');

// res = response = respuesta
button.addEventListener("click", () => {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => res.ok ? Promise.resolve(res) : Promise.reject(res))
    .then(res => res.json())
    .then(res => {
        const list = document.getElementById('list')
        const fragment = document.createDocumentFragment()
        for (const userInfo of res) {
            const listItem = document.createElement('LI')
            listItem.textContent = `${userInfo.id} - ${userInfo.name}`
            fragment.appendChild(listItem)
            
        }
        list.appendChild(fragment)
    })
});
