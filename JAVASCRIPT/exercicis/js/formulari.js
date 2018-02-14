window.addEventListener('load',cargaEventos);


function cargaEventos(){
    document.getElementsByClassName("submit").addEventListener("click",enviar);
}
function enviar(){
    var respuesta = confirm("Esta seguro de enviar el mensaje")
        if(respuesta){
            document.myForm.submit();
            return true;
        }else{
            alert("El formulario ha sido cancelado");
            return false;
        }
}