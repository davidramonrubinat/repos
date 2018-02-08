    
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

var numero = prompt("Introduzca un número entero");
alert("El numero "+numero+" es "+ParImpar(numero));