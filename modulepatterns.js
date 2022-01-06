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
    const private = {
        "_name" : name,
    };
    
    const public = {
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
    readName(newName) {
        return "newName"
    };
    changeName(newName) {
        private._name = newName
    }; 

    return public;
}

const juan = createStudent({name: "Juanito", email: "juan@email.com"});