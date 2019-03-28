const express = require('express');

const app = express();

app.get('/tinh/:tenPhepTinh/:soA/:soB', (req, res) => {
    const { tenPhepTinh, soA, soB } = req.params;
    const pt = new PhepTinh(tenPhepTinh, soA, soB);
    const kq=pt.getResultString();
    console.log(kq);
    res.send(kq);
});

class PhepTinh {
    constructor(tenPhepTinh, soA, soB) {
        this.tenPhepTinh = tenPhepTinh;
        this.soA = soA;
        this.soB = soB;
    }
    getSign() {
        if (this.tenPhepTinh === 'CONG') return '+';
        if (this.tenPhepTinh === 'TRU') return '-';
        if (this.tenPhepTinh === 'NHAN') return '*';
        return '/';
    }
    getResultString() {
        const { soA, soB } = this;
        const sign = this.getSign();
        const veTrai = `${soA} ${sign} ${soB}`;
        const ketQua = eval(veTrai);
        return ketQua + "";

    }//'4+5=9'
}

app.listen(3000, () => console.log("started server"));