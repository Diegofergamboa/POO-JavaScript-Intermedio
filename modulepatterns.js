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
        // Actualizar el nombre y, permite ser una propiedad privada.
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