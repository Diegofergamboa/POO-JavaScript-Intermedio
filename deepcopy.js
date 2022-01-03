
const obj1 = {
    a : 'a' ,
    b: 'b' ,
    c : {
        d : 'd' ,
        e: 'e' ,
    } ,
};

function isObject(subject) {
    return typeof subject == "object";
}
function isArray(subject) {
    return Array.isArray(subject);
}

function deepCopy(subject) {
    let copySubject;

    //Comenzamos la validación
    const subjectIsArray = isArray(subject);
    const subjectIsObject = isObject(subject);

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
        
        if (keyIsObject) {
            copySubject[key] = deepCopy(subject[key]);
        } else {
            if (subjectIsArray) {
                copySubject.push(subject[key]);
            }
        }
    }

    return copySubject;
}