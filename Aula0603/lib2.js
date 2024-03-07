var i=0;

while (i < 4){
   
    var numero = Number (prompt ('Digite um Numero '));
   
    if (numero % 2 == 0){
        document.write(' Seu numero é par ' +numero);
    } else {
        document.write(' Seu numero é impar ' +numero);
    }
    i++;
}

