window.addEventListener('load',cargaEventos);


function cargaEventos(){
    document.getElementById("imagen").addEventListener("mouseover",overimg);
    document.getElementById("imagen").addEventListener("mouseout",outimg);
}

function overimg(){
    if("mouseover"){
        alert("Esta prohibida la reproducció i copia de la imatge ");
    }else{
        alert('close');
    }
    
}
