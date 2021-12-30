// Cómo modificar los objetos, aunque tengan el mismo POINTER en shape memory

// const objeto1 = {
//     a : 'a' ,
//     b: 'b' ,
// };

// const objeto2  = {};

// // 1. Se iteran para colocar las mismas propiedades.

// for (propiedad in objeto1) {
//     object2[propiedad] = objeto1[propiedad];
// }

// Estamos yendo a cada una de las propiedades y tomando lo que son cada una de estas propiedades.

const objeto1 = {
    a : 'a' ,
    b: 'b' ,
    c : {
        d : 'd' ,
        e: 'e' ,
    } ,
};

const objeto2 = {};

for (propiedad in objeto1) {
    objeto2[propiedad] = objeto1[propiedad];
}