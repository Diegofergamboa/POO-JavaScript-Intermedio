// function recursiva(numero) {
//     console.log(numero);
//     if (numero < 5) {
//         return recursiva(numero + 1);
//     } else {
//         return 5;
//     }
// }

/* */ 

// function recursiva() {
//     if (/* Validación */) {
//         //LLamados recursivos.
//     } else {
//         //LLamados normales sin recursividad.
//     }
// }

const numeros = [1,2,3,4,5,6,7,8,9,0,9,8,7,6,5,4,3,2,1,2];
// let numero = 0;
// for (let index = 0 ; index < index.length ; index ++) {
//     numero = numeros[0]
//     console.log({index, numero});
// }

function recursiva(numbersArray) {
    
    if (numbersArray.length != 0) {
        const firstNumber = numbersArray[0];
        console.log(firstNumber);
        numbersArray.shift();
        recursiva(numbersArray);
    }
}

