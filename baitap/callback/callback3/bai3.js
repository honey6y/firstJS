// giả sử tải file nặng 500mb,1500mb
// tốc độ tải mỗi giây biến động trong khoảng từ 10 - 20 mb/s
// Mỗi file nhận được bằng, khi có 1 file tải xong, file còn lại nhận tất cả lư lượng
// hãy hiển thị % download mỗi giây 1 lần, đến 100% thì thông báo tải thành công và kết thúc
// Nâng cao bài 2 là mỗi lần hiển thị % download mới thì thời gian ngẫu nhiên từ 1 đến 3 giây

let result = 0;
let result1 = 0;
let result2 = 0;

let myInterval = setInterval(() => {
    result += Math.round(Math.random() * 10 + 10);
    if (result < 1000) {
        result1 = result / 2;
    }
    if (result >= 1000) {
        result1 = 500;
    }
    if (result >= 2000) {
        result = 2000
    }
    result2 = result - result1;
    console.log(`file1: ${(result1 / 500 * 100).toFixed(2)}%`);
    console.log(`file2: ${(result2 / 1500 * 100).toFixed(2)}%`);
    // console.log((result / 500 * 100).toFixed(2), '%');
    if (result === 2000) {
        console.log('done');
        clearInterval(myInterval);
    }
}, 100)

// function myFunction () {
//     result += Math.round(Math.random() * 10 + 10);
//     if (result < 1000) {
//         result1 = result / 2;
//     }
//     if (result >= 1000) {
//         result1 = 500;
//     }
//     if (result >= 2000) {
//         result = 2000
//     }
//     result2 = result - result1;
//     console.log(`file1: ${(result1 / 500 * 100).toFixed(2)}%`);
//     console.log(`file2: ${(result2 / 1500 * 100).toFixed(2)}%`);
//     // console.log((result / 500 * 100).toFixed(2), '%');
//     if (result < 2000) {
//         setTimeout(myFunction, Math.round(Math.random() * 2 + 1) * 1000)
//     }
//     if (result === 2000) {
//         console.log('done');
//     }
// }
// myFunction();