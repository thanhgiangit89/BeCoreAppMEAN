const express = require('express');
const { json, urlencoded } = require('body-parser');

const app = express();

app.get('/cong/:a/:b', (req, res) => {
    const { a, b } = req.params;
    if (isNaN(a) || isNaN(b)) {
        res.status(401).send({ success: false, code: 'INVALID_NUMBER' });
    }
    res.status(200).send({ success: true, result: +a + +b });
});

app.post('/cong/form', urlencoded({ extended: false }), (req, res) => {
    const { a, b } = req.body;
    if (isNaN(a) || isNaN(b)) {
        res.status(401).send({ success: false, code: 'INVALID_NUMBER' });
    }
    res.status(200).send({ success: true, result: +a + +b });
});

app.post('/cong/json', json(), (req, res) => {
    const { a, b } = req.body;
    if (isNaN(a) || isNaN(b)) {
        res.status(403).send({ success: false, code: 'INVALID_NUMBER' });
    }
    res.status(200).send({ success: true, result: +a + +b });
});

module.exports = { app };