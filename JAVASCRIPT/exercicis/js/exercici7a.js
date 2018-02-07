var meses = ["ENERO","FEBRERO","MARZO","ABRIL","MAYO","JUNIO","JULIO","AGOSTO","OCTUBRE","NOVIEMBRE","DICIEMBRE"];
/*
//For. Definim variable i inicial, definim variable i final i acció a fer sobre i
for(var i = 0; i<11; i++){
    alert(meses[i]);
}

confirm("desea continuar con el For in?")

//For - in el valor i agafa el valor 0 fins on acaba el array y mostrem la posició i dins l'array
var i = 0;
for ( i in meses){
        alert(meses[i]);
}    

confirm("desea continuar con el For of?")
//For - of el valor i agafa el nom directament, enero febrero...
for ( i of meses){
    alert(i);
}

*/
/*Apartat 7b*/


var final=false;
while(!final){
    var mes = prompt("Introduce un mes del año");
    mes = mes.toUpperCase();
    console.info(meses.indexOf(mes));

        if (meses.indexOf(mes) != -1){
            alert("el mes introducido es correcto:" + mes);
            final=true;
        }
        else{
                alert("el mes introducido es incorrecto");

        }
    
}
         
alert("adeu");
