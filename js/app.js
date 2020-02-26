//Variables
const carrito = document.getElementById('carrito');
const cursos = document.getElementById('lista-cursos');
const listaCursos = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn = document.getElementById('vaciar-carrito');

//Listeners
cargarEventListeners();

function cargarEventListeners(){
    //Dispara cuando se preciona "Agregar Carrito"
    cursos.addEventListener('click', comprarCurso);

    //Cuando se elimina un curso del carrito
    carrito.addEventListener('click', eliminarCurso);

    //Al vaciar el carrito
    vaciarCarritoBtn.addEventListener('click', vaciarCarrito);
}


//Funciones
//Funcion que añade el curso al carrito
function comprarCurso(e){
    e.preventDefault();

    //Delegation para agregar carrito
    if(e.target.classList.contains('agregar-carrito')){
        const curso = e.target.parentElement.parentElement;
        //Enviamos el curso seleccionado para tomar sus datos
        leerDatosCurso(curso);
    }
}

//Lee los datos del Curso
function leerDatosCurso(curso){
    const infoCurso = {
        imagen: curso.querySelector('img').src,
        titulo: curso.querySelector('h4').textContent,
        precio: curso.querySelector('.precio span').textContent,
        id: curso.querySelector('a').getAttribute('data-id')
    }

    insertarCarrito(infoCurso);
    console.log(infoCurso);
}

//Muestra el curso seleccionado en el Carrito
function insertarCarrito(curso){
    const row = document.createElement('tr');
    row.innerHTML = `
        <td>
            <img src="${curso.imagen}" width=100 >
        </td>
        <td>${curso.titulo}</td>
        <td>${curso.precio}</td>
        <td>
            <a href="#" class="borrar-curso" data-id="${curso.id}">X</a>
        </td>
    `;
    listaCursos.appendChild(row);
    guardarCursoLocalStorage(curso);
}

//Elimina el curso del carrito en el DOM
function eliminarCurso(e){
    e.preventDefault();
    let curso;

    if(e.target.classList.contains('borrar-curso')){
        e.target.parentElement.parentElement.remove();
    }
}

//Elimina los cursos del carrito en el DOM
function vaciarCarrito(){

    //Forma lenta para eliminar un elemento del DOM
    //listaCursos.innerHTML = '';

    //Forma rapida (recomendada)
    while(listaCursos.firstChild){
        listaCursos.removeChild(listaCursos.firstChild);
    }
    return false;
}

//Almacena cursos en el carrito a Local Storage
function guardarCursoLocalStorage(curso){
    let cursos;
    //Toma el valor de un arreglo con datos de LS o vacio
    cursos = obtenerCursosLocalStorage();

    //el curso seleccionado se agrega al arreglo
    cursos.push(curso);
    localStorage.setItem('cursos', JSON.stringify(cursos));
}

//Comprueba que haya elementos en Local Storage
function obtenerCursosLocalStorage(){
    let cursoLS;
    //comprobamos si hay algo en el Local Storage
    if(localStorage.getItem('curos') === null){
       cursoLS=[]; 
    }else{
        cursoLS.JSON.parse( localStorage.getItem('cursos'));
    }
    return cursoLS;
}