/* cho var data = [3,2,4,'5',1,8,7,'9']

a, tính tổng các phần tử trong array trên
b, hãy tạo ra array2 chứa các phần tử có giá trị lẻ của data
c, hãy tạo ra array3 chứa các phần tử của data theo thứ tự đảo ngược 
// kết quả [ '9', 7, 8, 1, '5', 4, 2, 3] */

var data = [3,2,4,'5',1,8,7,'9']

// var tong = 0;
// for (let i = 0; i < data.length; i++) {
//     tong += data[i];
// }
// for (let i = 0; i < data.length; i++) {
//     tong += data[i]/1;
// }
// console.log(tong);

// var array2 = [];
// for (let i = 0; i < data.length; i++) {
//     if (data[i] % 2 !== 0) {
//         array2.push(data[i])
//     }
// }
// console.log(array2);

var array3 = [];
// array3 = data.reverse();

for (let i = data.length-1; i >= 0; i--) {
    array3.push(data[i])
}
console.log(array3);
