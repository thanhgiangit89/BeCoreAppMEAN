
const assert = require('assert');
const request = require('supertest');
const { app } = require('../../../src/app');
const { User } = require('../../../src/models/user.model');


describe('POST /user/signup', () => {
    it('Can sign up user', async () => {
        const response = await request(app)
            .post('/user/signup')
            .send({ email: 'tra@gmail.com', password: '123', name: 'Tra' });

        const { body, status } = response;
        assert.equal(status, 200);
        const { success, user } = body;
        assert.equal(success, true);
        assert.equal(user.email, 'tra@gmail.com');
        assert.equal(user.name, 'Tra');

    })

    it('Cannot sign up without email', async () => {
        const response = await request(app)
            .post('/user/signup')
            .send({ email: '', password: '123', name: 'Tra' });

        const { body, status } = response;
        assert.equal(status, 400);
        const { success, code } = body;
        assert.equal(success, false);
        assert.equal(code, 'INVALID_USER_INFO');
    })

    it('Cannot sign up without name', async () => {
        const response = await request(app)
            .post('/user/signup')
            .send({ email: 'tra@gmail.com', password: '123' });

        const { body, status } = response;
        assert.equal(status, 400);
        const { success, code } = body;
        assert.equal(success, false);
        assert.equal(code, 'INVALID_USER_INFO');
    })

    it('Cannot sign up without duplicated email', async () => {
        await User.signUp('teo', 'a@gmail.com', '123')

        const response = await request(app)
            .post('/user/signup')
            .send({ email: 'a@gmail.com', password: '123', name: 'teo' });

        const { body, status } = response;
        assert.equal(status, 400);
        const { success, code } = body;
        assert.equal(success, false);
        assert.equal(code, 'EMAIL_EXISTED');
    })

    it('Cannot sign up without password', async () => {
        const response = await request(app)
            .post('/user/signup')
            .send({ email: 'a@gmail.com', password: '', name: 'teo' });

        const { body, status } = response;
        assert.equal(status, 400);
        const { success, code } = body;
        assert.equal(success, false);
        assert.equal(code, 'INVALID_USER_INFO');
    })
})