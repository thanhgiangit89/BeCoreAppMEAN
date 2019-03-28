
const express = require('express');
const reload = require('reload');

const app = express();

app.set('view engine', 'ejs');

app.get('/', (req, res, next) => {
    res.render('a');
});

const arrWords=[
    {en:'one', vn:'mot'},
    {en:'two', vn:'hai'},
    {en:'three', vn:'ba'},
];

app.get('/words', (req, res) => res.render('words',{arrWords}));

app.listen(3000, () => console.log("started server"));
reload(app);