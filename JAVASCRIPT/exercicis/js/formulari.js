function alerta(){
    document.formulari_provaById("submit").html();
    confirm("Esta seguro de enviar el mensaje"){
        if(true){
            alert("PErfecto");
        }else{
            alert("El formulario ha sido cancelado");
        }
    }
}