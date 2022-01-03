function recursiva(numero) {
    console.log(numero);
    if (numero < 5) {
        return recursiva(numero + 1);
    } else {
        return 5;
    }
}