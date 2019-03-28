
const assert = require('assert');
const request = require('supertest');
const { app } = require('../src/app');

describe('GET / cong/:a/:b', () => {
    it('Can add 2 numbers', async () => {
        const response = await request(app).get('/cong/4/5');
        assert.equal(response.status, 200);
        assert.equal(response.body.success, true);
        assert.equal(response.body.result, 9);
    });

    it('Cannot add  number with string', async () => {
        const response = await request(app).get('/cong/x/5');
        assert.equal(response.status, 401);
        assert.equal(response.body.success, false);
        assert.equal(response.body.code, 'INVALID_NUMBER');
    });
})

describe('POST / cong/form', () => {
    it('Can add 2 numbers', async () => {
        const response = await request(app)
            .post('/cong/form').send({ a: 4, b: 5 }).type('form');
        assert.equal(response.status, 200);
        assert.equal(response.body.success, true);
        assert.equal(response.body.result, 9);
    });

    it('Cannot add number with string', async () => {
        const response = await request(app)
            .post('/cong/form').send({ a: 4, b: 'x' }).type('form');
        assert.equal(response.status, 401);
        assert.equal(response.body.success, false);
        assert.equal(response.body.code, 'INVALID_NUMBER');
    });
})

describe('POST / cong/json', () => {
    it('Can add 2 numbers', async () => {
        const response = await request(app)
            .post('/cong/json')
            .send({ a: 4, b: 5 });
        assert.equal(response.status, 200);
        assert.equal(response.body.success, true);
        assert.equal(response.body.result, 9);
    });

    it('Cannot add number with string', async () => {
        const response = await request(app)
            .post('/cong/json')
            .send({ a: 4, b: 'x' });
        assert.equal(response.status, 403);
        assert.equal(response.body.success, false);
        assert.equal(response.body.code, 'INVALID_NUMBER');
    });
})


