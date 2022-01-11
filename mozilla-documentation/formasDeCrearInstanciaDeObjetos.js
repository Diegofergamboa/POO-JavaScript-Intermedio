// Lo que hemos hecho hasta el momento es crear un objeto literal y, usar una función constructora

//! DECLARANDO UN OBJETO LITERAL.
//! Se pueden construir objetos con el método Object().

var personObject = new Object();

// * Como esto agrega un objeto vacio, podríamos agregar propiedades y métodos a este objeto usando notación de punto o de corchetes.

personObject.name = 'pedro' ;
personObject['age'] = 55 ;
personObject.greetings = function () {
    alert('hello, my name is ' + this.name);
}


//* Tambien se puede pasar como parámetro al constructor object().

var personObject2 = new Object({
    'name' : 'santiago' ,
    'age' : 3 ,
    'greetings' : function () {
        alert ('Hi, my name is ' + this.name);
    }
})

// ! USANDO EL MÉTODO CREATE();

var personCreate = Object.create(personObject2);
var personObject = Object.create(personObject);

// personCreate.greetings();
// personObject.greetings();

// Se crean con base en los objetos, tienen sus propiedades y métodos.
