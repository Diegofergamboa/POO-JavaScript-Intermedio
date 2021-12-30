const juan = {
    name: 'Juanito' ,
    age: 18 ,
    approvedCourses : ["Curso 1"] ,

    addCourses(newCourse) {
        this.approvedCourses.push(newCourse);
        // Con el this, estamos haciendo referencia al aproved courses de juan
    }
};

/* Métodos con el super objeto Object */

// para usar las propiedades estáticas del super objeto OBJECT.

console.log(Object.keys(juan))
// Cada una de las propiedades.
console.log(Object.getOwnPropertyNames(juan))
// Nos muestra un array con cada una de las propiedades del objeto juan.
console.log(Object.entries(juan))
// Es un array que nos muestra por medio de array cada uno de los atributos o propiedades.
    Object.entries(juan)[3];
    // nos muestra el array de add Course

    Object.entries(juan)[3][1]('Curso 3');
    // Ahora va a hacer referencia al array, esto porque o está mostrando como un array, es decir this ya no es el objeto juan, sino el array donde está guardada la función.
    // Importante ver a donde se envian los datos d ela función.


console.log(Object.getOwnPropertyDescriptors(juan));
// Aqui nos va a mostrar un objeto con cada una de las propiedades del objeto Juan
// Además nos va a arrojar, lo que es configurable, enumerable y, writable. ¿Que són?


// la misma manera de agregar un nuevo valor es decir hacer asignación
Object.defineProperty(juan, "prueba" , {
    value : "Aqui va el valor del anuevo atributo llamada prueba" ,
    writable : true ,
    enumerable : true ,
    configurable : true 
})
// Recibe tres parámetros 1. el nombre del objeto 2. el nombre del nuevo atributo o propiedad que queremos definir y, 3. la lista de atributos con un {}




Object.defineProperty(juan, "" , {
    value : "" ,
    writable : true ,
    enumerable : true ,
    configurable : true 
})
