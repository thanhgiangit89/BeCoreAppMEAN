const arr = [1, 4, 3, 8];
const people = [
    { name: 'teo', age: 10, height: 150 },
    { name: 'ti', age: 15, height: 130 },
    { name: 'tun', age: 17, height: 100 }
]

//gia tri tra ve duoc ran lai vao tung phan tu cua mang
console.log(arr.map(x => x * x));

//tra ve tat ca gia tri thoa dk
console.log(arr.filter(x => x > 3));
console.log(people.filter(person => person.age > 10 && person.height > 100));

//tra ve gia tri dau tien thoa dk
console.log(people.find(person => person.age > 10));
//tra ve vi tri dau tien thoa dk
console.log(people.findIndex(person => person.age > 10));

//duyet qua tung phan tu
people.forEach((person, index, arr) => {
    console.log(index + ": " + person.name + ': ' + person.age);
    console.log(`${index + 1}: ${person.name}: ${person.age}`);
})

//sap xep phan tu tang dang
people.sort();
people.sort((a, b) => a.height - b.height);
console.log(people);
//sap xep phan tu giam dan
people.sort((a, b) => b.height - a.height);
console.log(people);

//gop cac phan tu lai
console.log(arr.reduce((a, b) => a + b));
console.log(people.map(person => person.age).reduce((a, b) => a + b));
console.log(people.reduce((a, b) => ({ age: a.age + b.age })).age);
