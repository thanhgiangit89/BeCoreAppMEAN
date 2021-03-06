const mongoose = require('mongoose');
const { MyError } = require('./MyError.model');
const { User } = require('./user.model');
const { validateObjectIds, validateStoryExist, validateUserExist } = require('../helpers/validators');

const storySchema = new mongoose.Schema({
    author: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    content: { type: String, trim: true, required: true },
    fans: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    comments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Comment' }],
})

const StoryModel = mongoose.model('Story', storySchema);

class Story extends StoryModel {
    static async createStory(content, userId) {
        ///way 1
        validateObjectIds(userId);
        try {
            var story = new Story({ content, author: userId });
            await story.save();
            const user = await User.findByIdAndUpdate(userId, { $push: { stories: story._id } });
            validateUserExist(user);
            return story;
        } catch (error) {
            await Story.findByIdAndRemove(story);
            if (error instanceof MyError) throw error;
            throw new MyError('Invalid story info.', 400, 'INVALID_STORY_INFO');
        }
        //way 2
        // const story = new Story({ content });
        // if (story.validateSync()) {
        //     throw new MyError('Invalid story info.', 400, 'INVALID_STORY_INFO');
        // }
        // return story.save();
    }

    static async updateStory(idStory, idUser, content) {
        validateObjectIds(idStory, idUser);
        if (!content)
            throw new MyError('Content should not be empty.', 400, 'CONTENT_NOT_EMPTY')
        const story = await Story.findOneAndUpdate({ _id: idStory, author: idUser }, { content }, { new: true });
        validateStoryExist(story);
        return story;
    }

    static async removeStory(idStory, idUser) {
        validateObjectIds(idStory, idUser);
        const story = await Story.findOneAndRemove({ _id: idStory, author: idUser });
        validateStoryExist(story);
        const user = await User.findByIdAndUpdate(idUser, { $pull: { stories: idStory } })
        validateUserExist(user);
        return story;
    }
}

module.exports = { Story };