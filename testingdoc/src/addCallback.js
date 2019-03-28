function addCallback(a, b, cb) {
    setTimeout(() => {
        if (isNaN(a) || isNaN(b)) return cb(new Error('Type error'));

        cb(null, a + b);
    }, 300)
}

module.exports = { addCallback };