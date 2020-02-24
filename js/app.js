//Variables
const carrito = document.getElementById('carrito');
const cursos = document.getElementById('lista-cursos');

//Listeners
cargarEventListeners();

function cargarEventListeners(){
    //Dispara cuando se preciona "Agregar Carrito"
    cursos.addEventListener('click', comprarCurso);
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
    console.log(curso);
}