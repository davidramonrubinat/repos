window.addEventListener('load',cargaEventos);


function cargaEventos(){
    document.getElementById("enlace").addEventListener("click",mifuncion);
    
}


function mifuncion(){
    document.getElementById("adicional").className="visible";
    document.getElementById("enlace").className="oculto";
}