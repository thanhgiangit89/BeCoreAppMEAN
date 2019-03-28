const express = require('express');
const { Story } = require('../models/story.model');
const { mustBeUser } = require('./user.middleware');

const storyRouter = express.Router();

storyRouter.use(mustBeUser);

//handle error by function
// const handleError = res => {
//     return error => res
//         .status(error.statusCode || 500)
//         .send({
//             success: false,
//             message: error.message,
//             code: error.code
//         });
// }

//handle error by midle
// storyRouter.use((req, res, next) => {
//     res.onError = error => res
//         .status(error.statusCode || 500)
//         .send({
//             success: false,
//             message: error.message,
//             code: error.code
//         });
//     next();
// })

storyRouter.get('/', (req, res) => {
    Story.find({})
        .then(stories => res.send({ success: true, stories }))
        .catch(error => res.status(500).send({ success: false, message: error.message }));
});

storyRouter.post('/', (req, res) => {
    Story.createStory(req.body.content, req.idUser)
        .then(story => res.status(201).send({ success: true, story }))
        .catch(res.onError);
    // .catch(handleError(res));
});

storyRouter.put('/:_id', (req, res) => {
    Story.updateStory(req.params._id, req.idUser, req.body.content)
        .then(story => res.status(201).send({ success: true, story }))
        .catch(res.onError);
});

storyRouter.delete('/:_id', (req, res) => {
    Story.removeStory(req.params._id, req.idUser)
        .then(story => res.status(200).send({ success: true, story }))
        .catch(res.onError);
});

module.exports = { storyRouter };