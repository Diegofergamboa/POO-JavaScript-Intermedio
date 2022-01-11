// ! Primero vamos a definir una persona con una función normal.

function createNewPerson (name) {
    var obj = {}
    obj.name = name;
    obj.greeting = function() {
        alert(`Hi, my name is ${name}`);
    }
    return obj;
}

//* Basicamente podríamos hacer la siguiente funcionalidad.
//* save.name; // para llamar al nombre del objeto
//* save.greeting, // para que podamos hacer el saludo que ejecuta la función

//! Funcionalidad con funciones constructoras.

function Person(name) {
    this.name = name;
    this.greeting = function() {
        alert(`Hi mi name is ${this.name}`);
        // This es importante para que use sus propios valores, y, no algún otro valor.
    };
}

//* Basicamente cuando se coloca un nuevoobjeto por medio de la función constructora, se llamara al nombre creado por la instancia, así como el saludo que es un método usara el valor de dicha instancia.

var person1 = new Person('Diego');
var person2 = new Person('JuanPablo');

// * Cuando yo tenga una funcion constructora, debo usar la palabra reservada new, para decirle al navegador que estoy haciendo una instancia de la función constructora, la cuál es Person para este caso.

