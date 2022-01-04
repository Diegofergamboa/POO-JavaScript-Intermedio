function createStudent({
    name = requiredParam("name"),
    email = requiredParam("email"),
    age,
    twitter,
    instagram,
    facebook,
    aprovedCourses = [],
    learningPaths = [],
} = {}) {
    return {
        name,
        changeName(newName) {
            this.name = newName;
        } ,
        email,
        age,
        socialMedia: {
            twitter,
            instagram,
            facebook,
        },
        aprovedCourses,
        learningPaths,
    };
}

const juan = createStudent({name: "Juanito", email: "juan@email.com"});