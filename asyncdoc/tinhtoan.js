const request = require('request');

const URL = 'http://localhost:3000/tinh';

function cong(a, b, cb) {
    if (isNaN(a) || isNaN(b)) return cb(new Error('Type error cong'), null);
    request(`${URL}/CONG/${a}/${b}`, (error, response, body) => {
        if (error) return cb(error, null);
        cb(null, body);
    });
}

function nhan(a, b, cb) {
    if (isNaN(a) || isNaN(b)) return cb(new Error('Type error nhan'), null);
    request(`${URL}/NHAN/${a}/${b}`, (error, response, body) => {
        if (error) return cb(error, null);
        cb(null, body);
    });
}

function chia(a, b, cb) {
    if (b == 0) return cb(new Error('Divide by zero.'));
    if (isNaN(a) || isNaN(b)) return cb(new Error('Type error chia'), null);
    request(`${URL}/CHIA/${a}/${b}`, (error, response, body) => {
        if (error) return cb(error, null);
        cb(null, body);
    });
}

//(4+5) *6/2

cong(4, 5, (errorCong, totalCong) => {
    if (errorCong) return console.log(errorCong);
    console.log(totalCong);
    nhan(totalCong, 6, (errorNhan, totalNhan) => {
        if (errorNhan) return console.log(errorNhan);
        console.log(totalNhan);
        chia(totalNhan, 2, (errorChia, totalChia) => {
            if (errorChia) return console.log(errorChia);
            console.log(totalChia);
        })
    })
})

