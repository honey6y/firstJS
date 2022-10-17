/* cho var data = [3,2,4,1,8,7,1,10,1,2]

a, tính tổng các phần tử trong array
b, tính tích các phần từ trong array
c, tính tổng các số lẻ trong array
d, tính tích các số chẵn trong array
e, có mấy số 1 trong array, ở những vị trí nào
f, số 1 đầu tiền và số 1 cuối cùng ở vị trí nào trong array */

var data = [3,2,4,1,8,7,1,10,1,2];

// var tong = 0;
// for (let i = 0; i < data.length; i++) {
//     tong += data[i];
// };
// console.log(tong);

// var tich = 1;
// for (let i = 0; i < data.length; i++) {
//     tich *= data[i]
// };
// console.log(tich);

// var tongLe = 0;
// for (let i = 0; i < data.length; i++) {
//     if (data[i] %2 !== 0) {
//         tongLe += data[i];
//     };
// };
// console.log(tongLe);

// var tichChan = 1;
// for (let i = 0; i < data.length; i++) {
//     if (data[i] % 2 === 0) {
//         tichChan *= data[i];
//     };
// };
// console.log(tichChan);

var so1 = 0;
var viTri1 = [];
for (let i = 0; i < data.length; i++) {
    if (data[i] === 1) {
        so1 += 1;
        viTri1.push(i)
    }
}
console.log(`mang co ${so1} so 1, o cac vi tri ${viTri1.toString()}`);

console.log(`so 1 dau tien o vi tri ${viTri1[0]} trong array, so 1 cuoi cung o vi tri ${viTri1[viTri1.length-1]} trong array`);