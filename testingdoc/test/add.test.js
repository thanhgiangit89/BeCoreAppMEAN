const assert = require('assert');
const { add } = require('../src/add');

describe('Test add function', () => {
    it('Can add 2 number', () => {
        const total = add(4, 5);
        assert.equal(total, 9);
    })
})
