class School {
    constructor(name) {
        this.name = name;
    }
}
class Person {
    constructor(name, age, school) {
        this.name = name;
        this.age = age;
        this.school = school;
    }

    sayHello() {
        console.log('Hello, I am ' + this.name + ', dang hoc ' + this.school.name);
    }
}

const kpt = new School('hung vuowng');
const teo = new Person('tra', 30, kpt);
teo.sayHello();