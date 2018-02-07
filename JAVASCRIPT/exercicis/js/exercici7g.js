confirm("Desea empezar con el programa")

var final=true;
while(final){
    var introduced = prompt("Introduzca un texto de más de 5 carácteres");
    var valor = introduced.split("");
    var long = valor.length;
        var cadenasinespasios = "";
        for (long in valor){
            if(valor[long] !== " "){
            cadenasinespasios +=;
            valor[long];
            }
        }
    alert(long);
        if (long > 5){
            alert("el valor introducido es correcto:");
            final=false;
        }
        else{
                alert("el valor introducido es incorrecto");
        }   
}
         
alert("adeu");
