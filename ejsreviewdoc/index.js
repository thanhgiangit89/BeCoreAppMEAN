
const express = require('express');
const reload = require('reload');
const parser = require('body-parser').urlencoded({ extended: false });

const { Singer, singers } = require('./Singer');

const app = express();

app.set('view engine', 'ejs');


app.get('/', (req, res) => {
    res.render('index', { singers });
});

app.get('/add', (req, res) => {
    res.render('add');
});
app.post('/add', parser, (req, res) => {
    const { name, link, image } = req.body;
    Singer.add(name, link, image);
    res.redirect('/');
})

app.get('/update/:id', (req, res) => {
    const { id } = req.params;
    const singer = singers.find(s => s.id === +id);
    console.log(singer);
    if (!singer) res.send('khong tim thay ca si');
    res.render('update', { singer });
});

app.post('/update/:id', parser, (req, res) => {
    const { name, link, image } = req.body;
    const { id } = req.params;
    const updated = Singer.update(id, name, link, image);
    if (!updated) res.send('khong tim thay ca si');

    res.redirect('/');
})

app.get('/remove/:id', (req, res) => {
    const { id } = req.params;
    const removed = Singer.remove(id);
    if (!removed) res.send('khong tim thay ca si');
    res.redirect('/');
})

app.listen(3000, () => console.log("started server"));
reload(app);