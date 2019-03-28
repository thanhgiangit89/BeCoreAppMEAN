
const assert = require('assert');
const request = require('supertest');
const { app } = require('../../../src/app');
const { Story } = require('../../../src/models/story.model');
const { User } = require('../../../src/models/user.model');
const { Comment } = require('../../../src/models/comment.model');

describe.only('PUT /comment/:_id', () => {
    let token1, token2, idUser1, idUser2, idStory, idComment;

    beforeEach('Create story and get token for test', async () => {
        await User.signUp('Teo', 'teo@gmail.com', '321');
        const user1 = await User.signIn('teo@gmail.com', '321');
        await User.signUp('Ti', 'ti@gmail.com', '321');
        const user2 = await User.signIn('ti@gmail.com', '321');
        token1 = user1.token;
        idUser1 = user1._id;
        token2 = user2.token;
        idUser2 = user2._id;
        const story = await Story.createStory('abcd', idUser1);
        idStory = story._id;
        const comment = await Comment.createComment(idUser1, idStory, 'Hello');
        idComment = comment._id;
    })

    it('Can remove comment', async () => {
        const response = await request(app)
            .delete('/comment/' + idComment)
            .set({ token: token1 });

        const { success, comment } = response.body;
        assert.equal(success, true);
        assert.equal(comment.content, 'Hello');
        const countComment = await Comment.count({});
        assert.equal(countComment, 0);
        const story = await Story.findById(idStory);
        assert.equal(story.comments.length, 0);
    });

    it('Cannot create comment with invalid story id', async () => {

    });

    it('Cannot remove comment without token', async () => {

    });

    it('Cannot remove comment for removed sotry', async () => {

    });

    it('Cannot remove comment with other\'s token, async', async () => {

    });

    it('Cannot remove comment with invalid comment id', async () => {

    });
})