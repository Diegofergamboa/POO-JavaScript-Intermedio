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

    



