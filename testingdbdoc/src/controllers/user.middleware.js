const { Verify } = require('../helpers/jwt');

async function mustBeUser(req, res, next) {

    try {
        const { token } = req.headers;
        const { _id } = await Verify(token);
        req.idUser = _id;
        next();
    } catch (error) {
        res.onError(error);
    }
}

module.exports = { mustBeUser };