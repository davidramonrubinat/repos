alert("Vamos a empezar con el programa de PAR o Impar okey?");
inicio();    

function ParImpar(numero){
    var resultado = "par";
    if (numero % 1 != 0){
        resultado="el numero no es entero";
    }else if (numero % 2 == 0){
            resultado="par";
    }else{
            resultado="impar";
    }
    return resultado;   
}
function inicio(){
var num = prompt("Introduzca un número entero"); 
alert("El numero "+ num +" es "+ParImpar(num));
}