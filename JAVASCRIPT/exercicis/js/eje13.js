window.addEventListener('load',cargaEventos);


function cargaEventos(){
    document.getElementsByTagName("button").addEventListener("click",mostrar);
    
    var li=getElementsByTagName("li"));
        for(var i=0; i<li.length i++){
            console.log(li[i]);
            li[i].addEventListener("click", mostrar);
        }
}

function mostrar(){
    document.getElementById("").className="visible";
    
}