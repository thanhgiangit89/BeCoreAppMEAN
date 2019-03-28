const fs = require('fs');
const express = require('express');
// const reload = require('reload');
const parser = require('body-parser').urlencoded({ extended: false });

const { upload } = require('./uploadConfig');
const { Singer } = require('./db');

const app = express();

app.set('view engine', 'ejs');
app.use(express.static('./public'));

app.get('/', (req, res) => {
    Singer.find({})
        .then(singers => res.render('index', { singers }))
        .catch(error => res.send(error));
});

app.get('/remove/:id', (req, res) => {
    const { id } = req.params;
    Singer.findByIdAndRemove(id)
        .then(singer => {
            if (singer.image !== 'default.png') fs.unlinkSync(__dirname + '/public/' + singer.image);
            res.redirect('/')
        })
        .catch(error => res.send(error));
})

app.get('/add', (req, res) => res.render('add'));

app.get('/update/:id', (req, res) => {
    const { id } = req.params;
    Singer.findById(id.toString())
        .then(singer => res.render('update', { singer }))
        .catch(error => res.send(error));
});

app.post('/add', upload.single('image'), (req, res) => {
    const { name, link } = req.body;
    const image = req.file ? req.file.filename : 'default.png';
    const singer = new Singer({ name, link, image });
    singer.save()
        .then(() => res.redirect('/'))
        .catch(error => res.send(error));
})

app.post('/update/:id', upload.single('image'), (req, res) => {
    const { id } = req.params;
    const { name, link } = req.body;
    const updateObj = req.file ? { name, link, image: req.file.filename } : { name, link };
    Singer.findByIdAndUpdate(id, updateObj)
        .then(singer => {
            if (singer.image !== 'default.png' && req.file) {
                try {
                    fs.unlinkSync(__dirname + '/public/' + singer.image)
                } catch (error) {
                    console.log('Cannot find ' + singer.image + ' file.');
                }
            };
            res.redirect('/');
        })
        .catch(error => res.send(error));
})


app.listen(process.env.PORT || 3000, () => console.log("started server"));
// reload(app);

app.locals.isLocal = !process.env.PORT;
if (!process.env.PORT) {
    require('reload')(app);
}