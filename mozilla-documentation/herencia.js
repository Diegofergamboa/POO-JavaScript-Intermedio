function Person(first, last, age, gender, interest) {
    this.name = {
        'first' : first ,
        'last' : last ,
    };
    this.age = age ,
    this.gender = gender ,
    this. interest = interest;
    this.bio = function() { // Es más eficiente hacerlo con este método que con el método de crear el método con solo bio().
        alert(this.name.first + ' ' + this.name.last + ' is ' + this.age + ' and have interest on ' + showInterest() );
    };
    this.greeting = function () {
        alert('Hi, my name is ' + this.name.first + ' ' + this.name.last + ' . ' );
    };
    function showInterest() {
        let inter = [];
        this.interest.forEach(element => {
            inter += element
        });
        return inter;
    }
}

// Aqui vamos a crear una clase profesor la cuàl va a heredar los métodos y propiedades de persona y va, a tener el al propiedad de asignatura

// La función call() nos permite llamarotra función pero, en el contexto actual.

function Profesor(first, last, age, gender, interest, materia) {
    Person.call(this, first, last, age, gender, interest,) // Call es basicamente para poder llamar a unafunción que definimos en otro lugar, pero en el contexto actual
    this.materia = materia
}


// Otro ejemplo

function Pc(procesador, teclado) {
    this.procesador = procesador ;
    this.teclado = teclado ;
}

function ipad(procesador, teclado, widthScreen) {
    Pc.call(this, procesador, teclado) ;
    this.widthScreen = widthScreen ;
}

