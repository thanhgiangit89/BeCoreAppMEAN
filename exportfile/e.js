class Person {
    constructor(name, age, height) {
        this.name = name;
        this.age = age;
        this.height = height;
    }
    static compare(p1, p2) {
        const message = p1.age > p2.age ? `${p1.name} is bigger than ${p2.name}` : `${p2.name} is bigger than ${p1.name} `;
        console.log(message);


    }
}

class School {
    constructor(name, address) {
        this.name = name;
        this.address=address;
    }
}


module.exports = { Person,School };