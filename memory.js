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

// Si se intentan hacer modificaciones sobre esta linea de código, sigue cambiando normal. Pero, cómo ahora el objeto 1 y 2 tienen un objeto como propiedad. Lo que va a pasar es que se va a modificar el objeto 1 igualmente después de modificar el objeto 2

// Craashea cuando tiene otro objeto.

// Copia los objetos del objeto origiual
const objeto3 = Object.asign({}, objeto1);

const objetot4 = Object.create(objeto1);
// Crea en proto una instancia con todas las propiedades del objeto 1.

// Si cambiamos una de las propiedades la podremos cambiar porque están en proto

// Es con el .create como si crearamos que se colocaran nuevos objetos dentro de otros objetos, es decir colocaramos nuevas caracteristicas, unas cambiadas en proto y las otras en el objeto ordinario.

// Y, las copias originales si son modificadas con el Object.create

