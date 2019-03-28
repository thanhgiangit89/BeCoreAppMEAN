
const assert = require('assert');
const { compare } = require('bcrypt');
const { User } = require('../../../src/models/user.model');
const request = require('supertest');
const { app } = require('../../../src/app');
const { Sign, Verify } = require('../../../src/helpers/jwt');

describe('POST /user/signin', () => {

    beforeEach('Sign up 2 users for test', async () => {
        await User.signUp('Teo', 'teo@gmail.com', '321');
        await User.signUp('Ti', 'ti@gmail.com', '123');
    })

    it('Can sign in with username and password', async () => {
        const body = { email: 'teo@gmail.com', password: '321' };
        const response = await request(app).post('/user/signin').send(body)
        assert.equal(response.body.success, true);
        const { name, email, token } = response.body.user;
        assert.equal(name,'Teo');
        assert.equal(email,'teo@gmail.com');
        const { _id } = await Verify(token);
        assert.equal(_id, response.body.user._id);
    })

    it('Cannot sign in with wrong email', async () => {
        const body = { email: 'teo5@gmail.com', password: '321' };
        const response = await request(app).post('/user/signin').send(body)
        assert.equal(response.body.success, false);
        const { code } = response.body;
        assert.equal(code,'CANNOT_FIND_USER');
        assert.equal(response.status,404);

    })

    it('Cannot sign in with wrong password', async () => {
        const body = { email: 'teo@gmail.com', password: '444' };
        const response = await request(app).post('/user/signin').send(body)
        assert.equal(response.body.success, false);
        const { code } = response.body;
        assert.equal(code,'INVALID_USER_INFO');
        assert.equal(response.status,400);
    })
})