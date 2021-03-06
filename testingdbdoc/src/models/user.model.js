const mongoose = require('mongoose');
const { hash, compare } = require('bcrypt');
const { MyError } = require('../models/MyError.model');
const { Sign, Verify } = require('../helpers/jwt');
const { validateObjectIds, validateUserExist } = require('../helpers/validators');

const userSchema = new mongoose.Schema({
    email: { type: String, trim: true, required: true, unique: true },
    password: { type: String, trim: true, required: true },
    name: { type: String, trim: true, required: true },
    stories: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Story' }],
    friends: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    incommingRequests: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    sentRequests: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }]
})

const UserModel = mongoose.model('User', userSchema);

class User extends UserModel {
    static async signUp(name, email, planPassword) {
        if (!planPassword) throw new MyError('Invalid user info.', 400, 'INVALID_USER_INFO');

        const password = await hash(planPassword, 8);
        try {
            const user = new User({ name, email, password });
            await user.save();
            return user
        } catch (error) {
            if (error.code) throw new MyError('Email existed.', 400, 'EMAIL_EXISTED');

            throw new MyError('Invalid user info.', 400, 'INVALID_USER_INFO');
        }
    }

    static async signIn(email, planPassword) {
        const user = await User.findOne({ email });
        validateUserExist(user);
        const isSame = await compare(planPassword, user.password);
        if (!isSame) throw new MyError('Invalid user info.', 400, 'INVALID_USER_INFO');
        const userInfo = user.toObject();
        const token = await Sign({ _id: userInfo._id });
        userInfo.token = token;
        delete userInfo.password;
        return userInfo;
    }

    static async checkSignInStatus(token) {
        const { _id } = await Verify(token);
        validateObjectIds(_id);
        const user = await User.findById(_id);
        validateUserExist(user);
        const userInfo = user.toObject();
        const newToken = await Sign({ _id: userInfo._id });
        userInfo.token = newToken;
        delete userInfo.password;
        return userInfo;
    }
}

module.exports = { User };