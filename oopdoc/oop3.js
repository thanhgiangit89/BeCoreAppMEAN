class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    sayHello() {
        console.log('xin chao, toi la ' + this.name);
    }
}

const teo = new Person('teo', 20);
const ti = new Person('ti', 20);

teo.sayHello();
ti.sayHello();

//chi mo rong cho doi tuong teo
teo.height = 100;
console.log(teo);
console.log(teo.height);

//mo rong cho tat ca doi tuong
Person.prototype.price = 200;
Person.prototype.sayHi = function () {
    console.log('hi, I am ' + this.name);
};
console.log(teo);
console.log(teo.price);
teo.sayHi();