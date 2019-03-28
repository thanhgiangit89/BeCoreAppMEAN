const assert = require('assert');
const { addCallback } = require('../src/addCallback');

describe('Test addCallback function', () => {
    it('Can add 2 number', (done) => {
        addCallback(4, 5, (error, kq) => {
            assert.equal(error, null);
            assert.equal(kq, 9);
            done();
        })
    })

    it('Cannot add number width a string', (done) => {
        addCallback('x', 5, (error, kq) => {
            assert.equal(kq, undefined);
            assert.equal(error.message, 'Type error');
            done();
        })
    })
})
