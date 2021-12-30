const juan = {
    name: 'Juanito' ,
    age: 18 ,
    approvedCourses : ["Curso 1"] ,

    addCourses(newCourse) {
        this.approvedCourses.push(newCourse);
    }
};

console.log(Object.keys(juan));
console.log(Object.getOwnPropertyNames(juan));
console.log(Object.entries(juan));
