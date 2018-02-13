window.addEventListener('load',cargaEventos);


function cargaEventos(){
    document.getElementById("enlace_1").addEventListener("click",mifuncion1);
    document.getElementById("enlace_2").addEventListener("click",mifuncion2);
    document.getElementById("enlace_3").addEventListener("click",mifuncion3);
}
function mifuncion1(){
    document.getElementById("contenidos_1").className="oculto";
}
function mifuncion2(){
    document.getElementById("contenidos_2").className="oculto";
}
function mifuncion3(){
    document.getElementById("contenidos_3").className="oculto";
}