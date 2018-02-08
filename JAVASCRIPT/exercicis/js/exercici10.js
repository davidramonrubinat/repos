function Pali(word){

    var palabra = word.toUpperCase().split("").join("").split("");
    var palabrainversa = palabra.slice(0).reverse();
    var resultado = true;



    var i;
    var long = palabra.length;

    for (i=0; i<long; i++){
        if (palabra[i] != palabrainversa[i]){
            resultado=false;
            break;
        }
    }
        
    return resultado; 
}
      


var word = prompt("Introduzca una palabra");
alert("La palabra "+word+" es "+Pali(word));
