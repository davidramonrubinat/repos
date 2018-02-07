var meses = ["ENERO","FEBRERO","MARZO","ABRIL","MAYO","JUNIO","JULIO","AGOSTO","OCTUBRE","NOVIEMBRE","DICIEMBRE"];
var semana = ["lunes","martes","miercoles","jueves","viernes","sabado","domingo"];

var longitud = semana.length;
var contador = longitud-1;
for(contador; contador >= 0; contador--){
    alert("el mes correspondiente es " + semana[contador])
}