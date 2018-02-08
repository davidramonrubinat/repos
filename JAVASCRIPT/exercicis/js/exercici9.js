function SizeLetter(text){
    var buscador,resultado;
    var may = text.toUpperCase();
    var min = text.toLowerCase();
    
    

    if(text == may){
        resultado="texto MAYÚSCULA";
    }else if(text == min){
        resultado="texto MINÚSCULA";
    }else{
        resultado="texto MAYÚSCULA Y MINUSCULA";
    }



    return resultado;
}   

var text = prompt("Introduzca un texto");
alert("tEXTO SIN MODIFICAR" + SizeLetter(text));


