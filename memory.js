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
const objeto3 = Object.assign({}, objeto1);
// console.log(objeto3);

objeto3.a = 'Aqui cambio el valor del objeto 3, que es copiado desde el objeto1'
// console.log(objeto1)

objeto3.c.d = 'Aqui cambio el objeto 3 del objeto d que está en el c'
// console.table(objeto3.c);
// console.table(objeto1.c);
// Como podemos ver, aquí también se cambia el valor del objeto 1, aunque hayasmos tenido en el objeto 3 de una manera normal con el assign. 

// Eso si, el assign reemplaza al for que hicimos arriba.

// Crea en proto una instancia con todas las propiedades del objeto 1.

// Si cambiamos una de las propiedades la podremos cambiar porque están en proto

const objeto4 = Object.create(objeto1);
console.log(objeto4);


objeto4.c.d = 'Aqui cambiando el valor del objeto d dentro del objeto c del objeto4'

// Aqui las variables aunque se copien, vienen del objeto 1 y pasan a ser del prototype

// Es con el .create como si crearamos que se colocaran nuevos objetos dentro de otros objetos, es decir colocaramos nuevas caracteristicas, unas cambiadas en proto y las otras en el objeto ordinario.

// Y, las copias originales si son modificadas con el Object.create

