
function addPromise(a, b) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (isNaN(a) || isNaN(b))
                return reject(new Error('Type error'));

            resolve(a + b);
        }, 300);
    })
}

module.exports = { addPromise };