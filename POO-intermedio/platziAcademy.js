// Entries, keys y, getownPropertyNames . Son métodos estáticos del súper objet Object.

// Writable, configurable y enumerable; esto con el fín de poder acceder de una manera más adecuada a los Objetos.

const juan = {
    name: 'Juanito' ,
    age: 18 ,
    aprovedCourses: ['Curso 1'] ,
    addCourse(newCourse) {
        this.aprovedCourses.push(newCourse); // Con el this estamos referenciandonos al nuevo curso.
    }
}

