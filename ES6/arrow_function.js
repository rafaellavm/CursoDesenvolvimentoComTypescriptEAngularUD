//01) forma tradicional: 

//var dobroDoValor = function(numero){

    //return numero * 2;
//}

//console.log(dobroDoValor(7));

//02) usando arrow function:

var dobroDoValor = numero => numero * 2;

//caso tenha mais lógica se coloca a chaves { numero * 2;}

console.log(dobroDoValor(7));