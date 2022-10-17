/* cho data = [3,2,4,1,8,7]

a, hãy dùng while để sắp xếp array theo chiều tăng dần
b, hãy dùng while để sắp xếp array theo chiều giảm dần */

var data = [9, 3,2,4,1,8,7];

// data.sort();
// data.reverse();
// dùng while => dùng 2 vòng while lồng nhau tương tự 2 vòng for lồng nhau
// var i = 0;
// while (i < data.length) {
//     let j = 0;
//     while (j < data.length) {
//         if (data[i] > data[j]) {
//             data[i] = data[j] + (data[j] = data[i]) - data[i];
//         }
//         j++;
//     }
//     i++;
// }
// console.log(data);
// var k = 0;
// while (k < data.length) {
//     let j = 0;
//     while (j < data.length) {
//         if (data[k] < data[j]) {
//             data[k] = data[j] + (data[j] = data[k]) - data[k];
//         }
//         j++;
//     }
//     k++;
// }
// console.log(data);


// while(1) {
//     let exit = 0;
//     for (let i = 0; i < data.length; i++) {
//         for (let j = i+1; j < data.length; j++) {
//             if (data[i] > data[j]) {
//                 data[i] = data[j] + (data[j] = data[i]) - data[i];
//                 exit++;
//             }
//         }
        
//     }
//     if (exit === 0) {
//         break
//     }
// }
// console.log(data);

// while(1) {
//     let exit = 0;
//     for (let i = 0; i < data.length; i++) {
//         for (let j = i+1; j < data.length; j++) {
//             if (data[i] < data[j]) {
//                 data[i] = data[j] + (data[j] = data[i]) - data[i];
//                 exit++;
//             }
//         }
        
//     }
//     if (exit === 0) {
//         break
//     }
// }
// console.log(data);