var texto = "Hola se$ñores el.";
var letras = texto.split("");
var long = letras.length;
alert("Valor long before" + long)
var long = long-1;
alert("Valor long after" + long)
var posicio = 0;
alert(posicio)
confirm("Vamos a empezar con el buscador de dolar");

var final=true;
while(final && posicio <= long){
    posicio++;
    alert(long);
        if(letras[posicio] == "$"){
            alert("el valor fue encontrado o llego al final de texto: " + letras[posicio] + "en su posicion" + posicio);
            final=false;
        }
        else{
                alert("el valor no se ha encontrado aún");
        }   
}
         
alert("adeu no se encontro ningun valor ");
