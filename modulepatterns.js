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
    return {
        // Actualizar el nombre y, permite ser una propiedad privada.
        changeName(newName) {
            this.name = newName;
        } ,
    };
}

const juan = createStudent({name: "Juanito", email: "juan@email.com"});