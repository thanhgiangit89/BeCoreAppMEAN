const assert = require('assert');
const { compare } = require('bcrypt');
const { User } = require('../../src/models/user.model');
const { Sign, Verify } = require('../../src/helpers/jwt');

describe('Model User SingUp', () => {
    it('Can sign up user', async () => {
        const user = await User.signUp('tra', 'a@gmail.com', '123');
        assert.equal(user.name, 'tra');
        assert.equal(user.email, 'a@gmail.com');

        const user2 = await User.findOne({});
        assert.equal(user2.name, 'tra');
        assert.equal(user2.email, 'a@gmail.com');

        const isSame = await compare('123', user2.password);
        assert.equal(isSame, true);
    })

    it('Cannot sign up without email', async () => {
        const error = await User.signUp('tra', '', '123').catch(error => error);
        assert.equal(error.code,'INVALID_USER_INFO');
    })

    it('Cannot sign up without name', async () => {
        const error = await User.signUp('', 'a@gmail.com', '123').catch(error => error);
        assert.equal(error.code,'INVALID_USER_INFO');
    })

    it('Cannot sign up without duplicated email', async () => {
         await User.signUp('tra', 'a@gmail.com', '123').catch(error => error);
        const error = await User.signUp('tra 2', 'a@gmail.com', '123').catch(error => error);
        assert.equal(error.code,'EMAIL_EXISTED');
    })

    it('Cannot sign up without password', async () => {
        const error = await User.signUp('tra', 'a@gmail.com', '').catch(error => error);
        assert.equal(error.code,'INVALID_USER_INFO');
    })
})

describe('Model User SingIn', () => {

    beforeEach('Sign up 2 users for test', async () => {
        await User.signUp('Teo', 'teo@gmail.com', '321');
        await User.signUp('Ti', 'ti@gmail.com', '123');
    })

    it('Can sign in with username and password', async () => {
        const user = await User.signIn('teo@gmail.com', '321');
        assert.equal(user.name, 'Teo');
        const { token } = user;
        const { _id } = await Verify(token);
        assert.equal(user._id, _id);
    })

    it('Cannot sign in with wrong email', async () => {
        const error = await User.signIn('teo1@gmail.com', '321').catch(error => error);
        assert.equal(error.code, 'CANNOT_FIND_USER')
    })

    it('Cannot sign in with wrong password', async () => {
        const error = await User.signIn('teo@gmail.com', '3211').catch(error => error);
        assert.equal(error.code, 'INVALID_USER_INFO')
    })
})

describe('Model User check signIn Status', () => {
    let token;
    beforeEach('Get token for test', async () => {
        await User.signUp('Teo', 'teo@gmail.com', '321');
        const user = await User.signIn('teo@gmail.com', '321');
        token = user.token;
    })

    it('Can pass sign in status with token', async () => {
        const user = await User.checkSignInStatus(token);
        assert.equal(user.name, 'Teo');
        assert.equal(user.password, undefined);
        assert.equal(user.email, 'teo@gmail.com');

        const { _id } = await Verify(user.token);
        assert.equal(user._id, _id);
    })

    it('Cannot pass sign in status with invalid token', async () => {
        const error = await User.checkSignInStatus('123').catch(error => error);
        assert.equal(error.code, 'INVALID_TOKEN');
    })

    it('Cannot pass sign in status with invalid token but _id', async () => {
        const token = await Sign({ _id: '123' });
        const error = await User.checkSignInStatus(token).catch(error => error);
        assert.equal(error.code, 'INVALID_ID');
    })

    it('Cannot pass sign in status with token of removed user', async () => {
        await User.signUp('Teo2', 'teo2@gmail.com', '321');
        const user = await User.signIn('teo2@gmail.com', '321');
        await User.findByIdAndRemove(user._id);

        const error = await User.checkSignInStatus(user.token).catch(error => error);
        assert.equal(error.code, 'CANNOT_FIND_USER')
    })
})