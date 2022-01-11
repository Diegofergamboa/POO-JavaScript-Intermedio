// Función constructor() Person final.

function Person(first, last, age, gender, interest) {
    this.name = {
        'first' : first ,
        'last' : last ,
    };
    this.age = age ,
    this.gender = gender ,
    this. interest = interest;
    this.bio = function() { // Es más eficiente hacerlo con este método que con el método de crear el método con solo bio().
        alert(this.name.first + ' ' + this.name.last + ' is ' + this.age + ' and have interest on ' + this.interest[0] + ' and ' + this.interest[1]);
    };
    this.greeting = function () {
        alert('Hi, my name is ' + this.name.first + ' ' + this.name.last + ' . ' );
    };
}

// Voy a crear una instancia del Objeto.

