window.addEventListener('load',cargaEventos);


function cargaEventos(){
    document.getElementById("enlace").addEventListener("click",mifuncion);
    
}

function mifuncion(){
    document.getElementById("adicional").className="visible";
    var elemento = document.getElementById("enlace");
    elemento.className="oculto";
    adicional.style.color="red";
}