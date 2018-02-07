var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S',
'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];


var numdni = prompt("Introduce tu numero de dni")
    if(numdni <  0 || numdni > 99999999){
        alert("El número introducido no es valido");    
    }else{
        var letradni = prompt("Introduce tu letra de dni");
        letradni = letradni.toUpperCase();
        confirm("Es correcto el DNI introducido:" + numdni + letradni );
    }

