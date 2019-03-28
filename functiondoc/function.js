//function
const addFunction = function (a, b) {
    return a + b;
}

//arraw function =>
const add = (a, b) => a + b;
const sqr = a => a * a;
console.log(add(1, 2));
console.log(sqr(10));

//function return function
function mylog() {
    return console.log;
}
console.log(mylog()(5));

// function nhan tham so la function
function doSth(fn) {
    fn(1);
}
doSth(console.log);

function inSo(fn) {
    for (let i = 0; i <= 100; i++) {
        const dk = fn(i);
        if (dk) console.log(i);
    }
}
inSo(function (x) {
    return x % 2 === 0
});
console.log("---------------------------------------")
inSo(x => x % 2 === 0);
console.log("---------------------------------------")

