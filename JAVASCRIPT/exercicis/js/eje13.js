window.addEventListener('load',cargaEventos);


function cargaEventos(){
    document.getElementById("btnAnadir").addEventListener("click",anade);
    document.getElementById("btnEliminar").addEventListener("click",eliminar);
}

function anade(){
    var array_li = document.getElementsByTagName("li");
    if (array_li.length==0){
        document.getElementById(bntEliminar).disabled = false;
    }

    var elemento = document.createElement("li");
    var texto = document.createTextNode("Elemento de prueba");
    elemento.appendChild(texto);

    var lista = document.getElementById("lista");
    lista.appendChild(elemento);
    
}

function eliminar(){
    
    var array_li = document.getElementsByTagName("li");

    var ultimo_li = array_li[array_li.lenght-1];
    parent.removeChild(ultimo_li);

    if (array_li.length==0){
        document.getElementById(bntEliminar).disabled = true;
    }
}