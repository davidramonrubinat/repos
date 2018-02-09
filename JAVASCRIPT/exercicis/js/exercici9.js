inicio();

function SizeLetter(text){
    var resultado;
    var may = text.toUpperCase();
    var min = text.toLowerCase();
    
    

    if(text == may){
        resultado="texto en MAYÚSCULA";
    }else if(text == min){
        resultado="texto en MINÚSCULA";
    }else{
        resultado="texto en MAYÚSCULA Y MINUSCULA";
    }
    return resultado;
}   

function inicio(){
var MYtext = prompt("Introduzca un texto");
alert("EL TEXTO INTRODUCIDO CONTIENE " + SizeLetter(MYtext));
}

