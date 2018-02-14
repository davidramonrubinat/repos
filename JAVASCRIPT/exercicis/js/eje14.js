window.addEventListener('load',cargaEventos);


function cargaEventos(){
    document.getElementById("enlace_1").addEventListener("click",mifuncion1o);
    document.getElementById("enlace_2").addEventListener("click",mifuncion2o);
    document.getElementById("enlace_3").addEventListener("click",mifuncion3o);
}
function mifuncion1o(){
        if (document.getElementById("enlace_1").innerHTML == "Ocultar contenidos"){
            document.getElementById("contenidos_1").className="oculto";
            document.getElementById("enlace_1").innerHTML="Mostrar contenidos";
        }else{
            document.getElementById("contenidos_1").className="visible";
            document.getElementById("enlace_1").innerHTML="Ocultar contenidos";
        }
}
function mifuncion2o(){
    if (document.getElementById("enlace_2").innerHTML == "Ocultar contenidos"){
        document.getElementById("contenidos_2").className="oculto";
        document.getElementById("enlace_2").innerHTML="Mostrar contenidos";
    }else{
        document.getElementById("contenidos_2").className="visible";
        document.getElementById("enlace_2").innerHTML="Ocultar contenidos";
    }
}
function mifuncion3o(){
    if (document.getElementById("enlace_3").innerHTML == "Ocultar contenidos"){
        document.getElementById("contenidos_3").className="oculto";
        document.getElementById("enlace_3").innerHTML="Mostrar contenidos";
    }else{
        document.getElementById("contenidos_3").className="visible";
        document.getElementById("enlace_3").innerHTML="Ocultar contenidos";
    }
}
//Ejemplo capturando el ID una funicon para todos:
window.addEventListener('load',cargaEventos);

function cargaEventos(){
    document.getElementById("enlace_1").addEventListener("click",oculta);
    document.getElementById("enlace_2").addEventListener("click",oculta);
    document.getElementById("enlace_3").addEventListener("click",oculta);
}


var enlace = this.id;

var numerenlace = 

if(document.getElementById(enlaces).innerHTML == "Ocultar contenido"){
    document.getElementById(contenido).className="oculto"
}