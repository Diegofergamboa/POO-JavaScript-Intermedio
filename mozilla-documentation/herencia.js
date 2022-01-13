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
