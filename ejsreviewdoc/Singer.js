class Singer {
    constructor(name, link, image) {
        this.id = Math.round(Math.random() * 10000);
        this.name = name;
        this.image = image;
        this.link = link;
    }

    static add(name, link, image) {
        const singer = new Singer(name, link, image);
        singers.push(singer);
    }

    static remove(id) {
        const index = singers.findIndex(singer => singer.id === +id);
        if (index === -1) return false;
        singers.splice(index, 1);
        return true;
    }

    static update(id, name, link, image) {
        const singer = singers.find(s => s.id === +id);
        console.log(singer);
        if (!singer) return false;
        singer.name = name;
        singer.link = link;
        singer.image = image;
        return true;
    }

}

const singers = [
    new Singer("Châu Khải Phong", "https://mp3.zing.vn/nghe-si/Chau-Khai-Phong", "https://photo-resize-zmp3.zadn.vn/w240h240_jpeg/avatars/0/6/06283b53569a11840f9c1975080193cf_1520424291.jpg"),
    new Singer("Karik", "https://mp3.zing.vn/nghe-si/Karik", "https://photo-resize-zmp3.zadn.vn/w240h240_jpeg/avatars/b/b/2/f/bb2f46f98c401a0b6fab5235c873ac06.jpg"),
    new Singer("Mr Siro", "https://mp3.zing.vn/nghe-si/Mr-Siro", "https://photo-resize-zmp3.zadn.vn/w240h240_jpeg/avatars/e/1/1/2/e1120261421cfec7513423222b0ca94c.jpg")
]

module.exports = { Singer, singers };