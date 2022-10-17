// Khai báo x ;y lần lượt là chiều dài và chiều rộng  của hình chữ nhật A 
// 1. tính chu vi của hình Chữ nhật A
// 2. Tính diện tích của hình chữ nhật A
// 3.  Kiểm tra xem A có phải hình vuông không ?

var x = 5;
var y = 7;

var chuVi = 0;
chuVi = x * 2 + y * 2;
console.log('chu vi của hcn A là:', chuVi);

var dienTich = 0;
dienTich = x * y;
console.log('diện tích của hcn A là:', dienTich);

if (x === y)
console.log('A là hình vuông.');
else
console.log('A không là hình vuông.');