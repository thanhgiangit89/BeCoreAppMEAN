
const mongoose = require('mongoose');
const { MyError } = require('../../src/models/MyError.model');

const validateObjectIds = (...ids) => {
    ids.forEach(id => {
        try {
            new mongoose.Types.ObjectId(id);
        } catch (error) {
            throw new MyError('Invalid object id', 400, 'INVALID_ID');
        }

    });
}

const validateStoryExist = story => {
    if (!story)
        throw new MyError('Cannot find story.', 404, 'CANNOT_FIND_STORY')
}

const validateUserExist = user => {
    if (!user)
        throw new MyError('Cannot find user.', 404, 'CANNOT_FIND_USER')
}

module.exports = {
    validateObjectIds,
    validateStoryExist,
    validateUserExist
};