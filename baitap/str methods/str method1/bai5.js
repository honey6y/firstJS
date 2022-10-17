let reeting = 'Welcome to Nodemy, Nodemy is stand for Nodejs Academy';

//5.0: đếm xem có tất cả bao ký tự
let countStr = reeting.length;
// console.log(countStr);

//5.1: .indexOf tìm xem nodemy nằm ở vị trí nào
let  index = 0;
let allIndex = [];
while (index !== -1) {
    index = reeting.indexOf('nodemy',index);
    if (index !== -1) {
        allIndex.push(index);
        index++;
    }
}
// console.log(allIndex);

//5.2: .indexOf tìm xem Nodemy nằm ở vị trí nào
let  index1 = 0;
let allIndex1 = [];
while (index1 !== -1) {
    index1 = reeting.indexOf('Nodemy',index1);
    if (index1 !== -1) {
        allIndex1.push(index1);
        index1++;
    }
}
// console.log(allIndex1);

//5.3: dùng .startWith kiểm tra xem có bắt đầu với Welcome không
// console.log(reeting.startsWith('Welcome'));

//5.4: dùng .substring để lấy chữ Academy
let subStr = reeting.substring(reeting.indexOf('Academy'));
// console.log(subStr);

//5.5: dùng .split để tách các từ
// console.log(reeting.split(''));
// console.log(reeting.split(' '));

//5.6: dùng .trim() để xóa các dấu cách ngoài rìa
// console.log(reeting.trim());

//5.7: dùng .include để kiểm tra xem Nodemy có trong câu trên không
// console.log(reeting.includes('Nodemy'));

//5.8  dùng .replace để thay thế Nodemy thành NODEMY
let newReeting = reeting.replace(/Nodemy/g,'NODEMY');
// console.log(newReeting);

//5.9: dùng .toUppercase để in hoa chữ cái
let newUpercase = reeting.toUpperCase();
// console.log(newUpercase);

//5.10 dùng .charAt để lấy 1 ký tự ở vị trí số 4
console.log(reeting.charAt(4));