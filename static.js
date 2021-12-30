const juan = {
    name: 'Juanito' ,
    age: 18 ,
    approvedCourses : ["Curso 1"] ,

    addCourses(newCourse) {
        this.approvedCourses.push(newCourse);
        // Con el this, estamos haciendo referencia al aproved courses de juan
    }
};

// /* Métodos con el super objeto Object */

// // para usar las propiedades estáticas del super objeto OBJECT.

// console.log(Object.keys(juan))
// // Cada una de las propiedades.
// console.log(Object.getOwnPropertyNames(juan))
// // Nos muestra un array con cada una de las propiedades del objeto juan.
// console.log(Object.entries(juan))
// // Es un array que nos muestra por medio de array cada uno de los atributos o propiedades.
//     Object.entries(juan)[3];
//     // nos muestra el array de add Course

//     //! Object.entries(juan)[3][1]('Curso 3');
//     // Ahora va a hacer referencia al array, esto porque o está mostrando como un array, es decir this ya no es el objeto juan, sino el array donde está guardada la función.
//     // Importante ver a donde se envian los datos d ela función.


// console.log(Object.getOwnPropertyDescriptors(juan));
// // Aqui nos va a mostrar un objeto con cada una de las propiedades del objeto Juan
// // Además nos va a arrojar, lo que es configurable, enumerable y, writable. ¿Que són?


// // la misma manera de agregar un nuevo valor es decir hacer asignación
// Object.defineProperty(juan, "prueba" , {
//     value : "Aqui va el valor del anuevo atributo llamada prueba" ,
//     writable : true ,
//     enumerable : true ,
//     configurable : true 
// })
// // Recibe tres parámetros 1. el nombre del objeto 2. el nombre del nuevo atributo o propiedad que queremos definir y, 3. la lista de atributos con un {}




Object.defineProperty(juan, "prueba-nasa" , {
    value : "extraterrestre" ,
    writable : false ,
    enumerable : false ,
    configurable : false 
})
Object.defineProperty(juan, "Navigator" , {
    value : "Chrome" ,
    writable : true ,
    enumerable : true ,
    configurable : true 
})
Object.defineProperty(juan, "Favorite Food" , {
    value : "Spaguetti" ,
    writable : true ,
    enumerable : false ,
    configurable : true 
})
Object.defineProperty(juan, "Editor" , {
    value : "Visual Studio Code" ,
    writable : false ,
    enumerable : true ,
    configurable : true 
})
Object.defineProperty(juan, "terminal" , {
    value : "WSL" ,
    writable : true,
    enumerable : true ,
    configurable : false 
})

// las que están en enumerable aparecen subrayada
// las que salen con enumerable hacen que no aparezcan cuando los listamos con Object.keys

// En cambio cuando se muestran con getOwnPropertiesNames si aparecen todos 

// Cuando se usa el configurable en false, aunque reciba el cambio del objeto en realidad no va a cambiar la estructura del valor del objeto, esto se da porque le dijimos que no se podía escribir

// Cuando se usa en el configurable, inclusive no se podrá mostrar pero, sin embargo se puede notar que sigue apareciendo dentro de getOwnPropertieNames, sigue apareciendo el Objeto

// con configurable no nos permite borrar las propiedades de los objetos.

// "delete juan.navigator" => podemos borrarlo con eso


Object.seal(juan)
// Va a ser que todas las propiedades sean con configurable false, para evitar que sean borradas.


Object.freeze(juan)
// Todas las propiedades tienen configurable como flase y writeabel, es decir que no va a permitir que sean borradas bajo ningún motivo.