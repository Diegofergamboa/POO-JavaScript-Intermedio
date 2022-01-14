// Entries, keys y, getownPropertyNames . Son métodos estáticos del súper objet Object.

// Writable, configurable y enumerable; esto con el fín de poder acceder de una manera más adecuada a los Objetos.

const juan = {
    name: 'Juanito' ,
    age: 18 ,
    aprovedCourses: ['Curso 1'] ,
    addCourse(newCourse) {
        console.log('This', this)
        console.log('This aproved courses', this.aprovedCourses)
        this.aprovedCourses.push(newCourse); // Con el this estamos referenciandonos al nuevo curso.
    }
}

console.log(Object.getOwnPropertyDescriptors(juan))


// Para poder modificar configurable, enumerable y configurable.
// juan['nuevaPropiedad'] = 'Nueva propiedad' // Es decir esto con el Object.

Object.defineProperty(juan, 'pruebaNasa' ,{
    value: 'extratrerrestres' ,
    writable : true ,
    configurable : true ,
    enumerable : true ,
})

// Asignamos valores a propiedades y podemos definir valores de configurable, enumerable y, demás.
