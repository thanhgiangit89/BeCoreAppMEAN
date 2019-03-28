const mongoose = require('mongoose');

const URI=process.env.PORT?'mongodb://production/becoreapp':'mongodb://localhost/becoreapp';
mongoose.connect(URI);

const singerSchema = new mongoose.Schema({
    name: { type: String, trim: true, required: true },
    image: { type: String, trim: true, required: true },
    link: { type: String, trim: true, required: true, unique: true }
})

const Singer = mongoose.model('Singer', singerSchema);

module.exports = { Singer };

// [
//     { name: "Châu Khải Phong", link: "https://mp3.zing.vn/nghe-si/Chau-Khai-Phong", image: "https://photo-resize-zmp3.zadn.vn/w240h240_jpeg/avatars/0/6/06283b53569a11840f9c1975080193cf_1520424291.jpg" },
//     { name: "Karik", link: "https://mp3.zing.vn/nghe-si/Karik", image: "https://photo-resize-zmp3.zadn.vn/w240h240_jpeg/avatars/b/b/2/f/bb2f46f98c401a0b6fab5235c873ac06.jpg" },
//     { name: "Mr Siro", link: "https://mp3.zing.vn/nghe-si/Mr-Siro", image: "https://photo-resize-zmp3.zadn.vn/w240h240_jpeg/avatars/e/1/1/2/e1120261421cfec7513423222b0ca94c.jpg" }
// ]

/* INSERT DOCUMENT
inser 1 document
const singer = new Singer({
    name: 'duc phuc',
    image: '1.png',
    link: 'http://fb.com/duc-phuc'
});
singer.save()
    .then(s => console.log(s))
    .catch(error => console.log(error));

insert nhieu document
Singer.insertMany(
    [
        {name: 'my tam',image: '2.png',link: 'http://fb.com/my-tam'},
        {name: 'ho quang hieu',image: '3.png',link: 'http://fb.com/ho-quang-hieu'}
    ]
)
    .then(singers => console.log(singers))
    .catch(error => console.log(error));
*/

/*SELECTE DOCUMENT
//tra ve 1 phan tu: objectId 12 char or 24 char
Singer.findById('5c26fcad11c2694be086aeb3')
   .then(singer => console.log(singer))
   .catch(error => console.log(error));

//tra ve 1 phan tu dau tien thoa dieu kien
Singer.findOne({})
   .then(singer => console.log(singer))
   .catch(error => console.log(error));
Singer.findOne({ name: 'duc phuc' })
   .then(singer => console.log(singer))
   .catch(error => console.log(error));

//tra ve danh sach cac phan tu thoa dieu kien
Singer.find({})
   .then(singers => console.log(singers))
   .catch(error => console.log(error));
Singer.find({name:'duc phuc'})
   .then(singers => console.log(singers))
   .catch(error => console.log(error));
*/

/*REMOVE DOCUMENT
//Remove theo Id
Singer.findByIdAndRemove(id);

//Remove phan tu dau tien thoa dieu kien
Singer.findOneAndRemove({});

//Remove  cac phan tu thoa dieu kien
Singer.remove();
*/

/*UPDATE DOCUMENT
//update theo Id
Singer.findByIdAndUpdate();

//Update phan tu dau tien thoa dieu kien
Singer.findOneAndUpdate();

//Update cac phan tu thoa dieu kien
Singer.updateMany();
*/


