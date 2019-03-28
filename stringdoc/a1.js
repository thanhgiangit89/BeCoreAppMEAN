const a = 'Khoa Pham Online';

//do dai cua chuoi
console.log(a.length);

//lay ra chuoi theo vi tri
console.log(a[1]);
console.log(a.charAt(1));

//noi chuoi
console.log(a.concat(' noi dung noi chuoi'));

//kiem tra xem chuoi co chua noi dung minh can tim
console.log(a.includes('On'));

//tim vi tri
console.log(a.indexOf('a', 4));
console.log(a.lastIndexOf('a', 5));

//lap lai noi dung
console.log('2018'.repeat(3));

//lay noi dung cua chuoi
console.log(a.slice(5, 9));
console.log(a.substr(5, 4));
console.log(a.substring(5, 9));

//kiem tra gia tri bat dau cua chuoi
console.log(a.startsWith('x'));

//kiem tra gia tri ket thuc cua chuoi
console.log(a.endsWith('x'));

//viet ho vaf viet thuong
console.log(a.toUpperCase());
console.log(a.toLowerCase());

//loai bo khoang trang
console.log(a.trim());
console.log(a.trimLeft());
console.log(a.trimRight());

//tach chuoi thanh mang
console.log(a.split(' '));

//gop mang thanh chuoi
console.log(['Khoa', 'Pham', 'Online'].join(' '));