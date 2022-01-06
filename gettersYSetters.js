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
        "_name" : name ,
    }
    const public = {
        name,
        email,
        age,
        socialMedia: {
            twitter,
            instagram,
            facebook,
        },
        aprovedCourses,
        learningPaths,
    }
} , 
    get name() {
        return private["_name"];
    } ,
    set name(newName) {
        if (newName.length != 0) {
            private["_name"] = newName ;
        } else {
            console.warn('Tu nombre debe tener al menos un caracter')
        }
        return private['_name'];
    
    return public ;
    } ,
}

const diego = createStudent({
    "name" : 'Diego' ,
    "email" : 'diegofer@corre.com' ,
    'age' : 19 ,
    "twitter" : 'diegogamboaor' ,
    "instagram" : 'diegofergamboa'
})

diego.name = 'fernando' ;