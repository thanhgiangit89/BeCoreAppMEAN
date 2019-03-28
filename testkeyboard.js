const express = require('express');

const app = express();

app.get('/', (req, res, next) => {
   // res.send('<h1>hello</h1>');
   next();
});

app.get('/', (req, res, next) => {
    res.send('<h1>hello</h1>');
   next();
});

app.get('/chao/:name', (req, res) => {
    const { name } = req.params;
    res.send(`<h1>Hello ${name}</h1>`);
});

app.listen(3000, () => console.log("started server"));

