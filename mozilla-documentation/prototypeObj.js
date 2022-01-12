
// !Función constructora

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


var person1 = new Person('Diego', 'Ortiz' , 25 , 'Male' , interest = ['Programming ' , 'Gym ' ,'Dance ','Jump .']);

var person2 = Object.create(person1)


Person.prototype.farewell = function () {
    console.log(this.name.first + ' has left the building. Bye for now!');
};
// A través del prototype he creado una instancia en las que se manera dinámica se han actualizado todas las propiedades creadas por medio del constructor.
