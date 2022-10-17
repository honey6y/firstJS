// giả sử tải file nặng 500mb
// tốc độ tải mỗi giây biến động trong khoảng từ 1 - 10 mb/s
// hãy hiển thị % download mỗi giây 1 lần, đến 100% thì thông báo tải thành công và kết thúc
// Nâng cao bài 2 là mỗi lần hiển thị % download mới thì thời gian ngẫu nhiên từ 1 đến 3 giây
let result = 0;

// let download = setInterval(function() {
//     result += Math.round(Math.random() * 9 + 1);
//     if (result >= 500) {
//         result = 500;
//     }
//     console.log((result / 500 * 100).toFixed(2), '%');
//     if (result === 500) {
//         clearInterval(download)
//     }
// }, )

// let download = setInterval(function() {
//     if (result >= 500) {
//         result = 500;
//     }
//     if (result < 500) {
//         setTimeout(() => {
//             result += Math.round(Math.random() * 9 + 1);
//             console.log((result / 500 * 100).toFixed(2), '%');
//         }, Math.round(Math.random() * 2 + 1) * 1000)
//     }
//     if (result === 500) {
//         clearInterval(download)
//     }
// }, )


// function myFunction () {
//     result += Math.round(Math.random() * 9 + 1);
//     if (result >= 500) {
//         result = 500;
//     }
//     console.log((result / 500 * 100).toFixed(2), '%');
//     if (result < 500) {
//         setTimeout(myFunction, Math.round(Math.random() * 2 + 1) * 1000)
//     }
// }
// myFunction();

