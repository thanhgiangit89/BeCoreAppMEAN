// oop is object
const teo = {
    name: 'Teo Nguyen',
    age: 10,
    sayHello: function () {
        console.log('xin chao, toi la ' + this.name);
    }
}

teo.sayHello();

// oop is function
function Person(ten, tuoi) {
    this.ten = ten;
    this.tuoi = tuoi;
    this.sayHello = function () {
        console.log('xin chao, toi la ' + this.ten);
    }
}
const ti = new Person('ti', 18);
const tun = new Person('tun', 28);
ti.sayHello();
tun.sayHello();
console.log(ti);
console.log(tun);

//oop is class
class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    sayHello() {
        console.log('xin chao, toi la ' + this.name + ' - ' + this.price);
    }
}

var nuochoa = new Product('Sunny', 100);
debugger;
nuochoa.sayHello();
console.log(nuochoa);
