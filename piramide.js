
var altura = prompt("Dime la altura de la piramide: ");
document.write( altura );
    
var piso = 1;
var longitud = 1;
var espacios = altura-1;
var resultado = "";
      
while (piso <= altura) {
     
    for (var i = 1; i <= espacios; i++) {
        resultado += " ";
    }

    for (var i = 1; i <= longitud; i++) {
        resultado += "*";
    }

    console.log(resultado);
    resultado = "";
    piso++;
    espacios--;
    longitud += 2;
}