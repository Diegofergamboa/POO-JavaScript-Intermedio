
function isObject(subject) {
    return typeof subject == "object";
}
function isArray(subject) {
    return Array.isArray(subject);
}

function deepCopy(subject) {
    let copySubject;

    //Comenzamos la validación
    const subjectIsObject = isObject(subject);
    const subjectIsArray = isArray(subject);

    // Hacemos la validación de si es un objeto o un array
    if (subjectIsArray) {
        copySubject = [];
    } else if (subjectIsObject) {
        copySubject= {};
    } else {
        return subject;
    }

    for (key in subject) {
        const keyIsObject = isObject(subject[key]);
        // const keyIsArray = isArray(subject[key]);

        if (keyIsObject) {
            copySubject[key] = deepCopy(subject[key]);
        } else {
            if (subjectIsArray) {
                copySubject.push(subject[key]);
            }
            else {
                copySubject[key] = subject[key];
            }
        }
    }

    //Output independiente de lo que sea
    return copySubject;
}

// const studentBase = {
//     name: undefined ,
//     email: undefined ,
//     age: undefined, 
//     approvedCourses : undefined ,
//     learningPaths: undefined ,
//     socialMedia : {
//         twitter: undefined ,
//         instagram: undefined, 
//         facebook: undefined ,
//     },
// };

// const juan = deepCopy(studentBase);
// Object.seal(juan) // Con esto no dejamos que se borren las propiedades.
// // Object.defineProperty(juan, "name", {
// //     value: "Juanito" ,
// //     configurable: false ,
// // })

// Object.isSealed(juan) // Verificar si las propiedades de nuestro objeto tiene la protección de tener configurable como false.
function requiredParam(param) {
    throw new Error("");
}

function createStudent({
    name,
    email,
    age,
    twitter,
    instagram,
    facebook,
    aprovedCourses = [],
    learningPaths = [],
} = {}) {
    return {
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
    };
}

const juan = createStudent();