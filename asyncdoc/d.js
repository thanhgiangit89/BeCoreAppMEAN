const request = require('request');

const URL = 'http://localhost:3000/tinh';

function cong(a, b, cb) {
    if (isNaN(a) || isNaN(b)) return cb(new Error('Type error cong'), null);
    request(`${URL}/CONG/${a}/${b}`, (error, response, body) => {
        if (error) return cb(error, null);
        cb(null, body);
    });
}

function congPromise(a, b) {
    return new Promise((resolve, reject) => {
        if (isNaN(a) || isNaN(b)) return reject(new Error('Type error cong'));
        request(`${URL}/CONG/${a}/${b}`, (error, response, body) => {
            if (error) return reject(error);
            resolve(body);
        });
    });
}

function nhanPromise(a, b) {
    return new Promise((resolve, reject) => {
        if (isNaN(a) || isNaN(b)) return reject(new Error('Type error nhan'));
        request(`${URL}/NHAN/${a}/${b}`, (error, response, body) => {
            if (error) return reject(error);
            resolve(body);
        });
    });
}

function chiaPromise(a, b) {
    return new Promise((resolve, reject) => {
        if (isNaN(a) || isNaN(b)) return reject(new Error('Type error chia'));
        if (b == 0) return reject(new Error('Divide by zero'));
        request(`${URL}/CHIA/${a}/${b}`, (error, response, body) => {
            if (error) return reject(error);
            resolve(body);
        });
    });
}

// congPromise(4, 5)
//     .then(tong => nhanPromise(tong, 6))
//     .then(tich => chiaPromise(tich, 2))
//     .then(result => console.log(result))
//     .catch(error => console.log(error.message));

function tinhDienTichHinhThang(a, b, h) {
    return congPromise(a, b)
        .then(tong => nhanPromise(tong, h))
        .then(tich => chiaPromise(tich, 2))
}

// tinhDienTichHinhThang(4, 5, 6)
//     .then(result => console.log(result))
//     .catch(error => console.log(error));

async function tinhDienTich(a, b, h) {
    let tich;
    try {
        const tong = await congPromise(a, b);
        tich = await nhanPromise(tong, h);
    } catch (error) {
        tich = 10;
    }
    const kq = await chiaPromise(tich, 2);
    return kq;
}

tinhDienTich(4, 5, 6)
    .then(kq => console.log(kq))
    .catch(error => console.log(error));