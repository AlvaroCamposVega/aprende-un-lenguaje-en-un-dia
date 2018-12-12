
var num = [];
var resultado = "";

console.log('Array original: ');

for(var i = 0; i < 20; i++){
    num.push(Math.floor(Math.random()*100)+1);
    resultado += (num[i] + " ");
}

console.log(resultado);

console.log('Array ordenado: ');

resultado = "";

var esPrimo;

for(var i = 0; i < 20; i++){
    esPrimo = true;
    for (var j = 2; j < num[i]; j++) {
        if ((num[i] % j) == 0) {
            esPrimo = false;
        }
    }

    if (esPrimo) {
        resultado += num[i] + " ";
    }
}

for(var i = 0; i < 20; i++){
    esPrimo = true;
    for (var j = 2; j < num[i]; j++) {
        if ((num[i] % j) == 0) {
            esPrimo = false;
        }
    }

    if (!esPrimo) {
        resultado += (num[i] + " ");
    }
}

console.log(resultado);