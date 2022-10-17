/* Khai báo 1 số x . 
a ) kiểm tra số x là số âm hay số dương , rồi in ra dưới dạng sau : 
` Số $(x) là số âm ( hoặc dương) ` 
b ) kiểm tra xem số x có phải số nguyên không  . rồi in ra dưới dạng sau :
` Số $(x) là số  nguyên ( số thập phân )  ` */

var x = -6.23;
if (x < 0)
console.log(`so ${x} la so am.`);
else console.log(`so ${x} la so duong.`);

if (x%1 === 0)
console.log(`so ${x} la so nguyen.`);
else console.log(`so ${x} la so thap phan.`);