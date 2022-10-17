/* cho array = [1,3,25,41,3,2,2,66,22,5,1,1,2,651,51,5,2];

a, hãy tạo ra array chỉ chứa các số có đuôi là 1 trong array trên 
// [1, 41,....]
b, hãy tìm vị trí của phần tử = 2 xuất hiện lần thứ 3 trong array trên
c, hãy tìm vị trí của phần tử chứa ký tự 2 thứ 4 trong array 
(25 chứ 1 ký tự 2,   22 chứa 2 ký tự 2)
d, phần tử 5 lặp lại mấy lần trong array trên
e, phần tử nào lặp lại nhiều nhất trong array trên
f, hãy tìm số lớn nhất trong array trên
g, hãy tìm số chẵn lớn nhất trong array
h, hãy lọc trùng array trên sao cho các phần tử chỉ xuất hiện 1 lần duy nhất
 */

var array = [1,3,25,41,3,2,2,66,22,5,1,1,2,651,51,5,2,51,51,51];

// var arrEnd1 = [];
// for (let i = 0; i < array.length; i++) {
//     if (array[i] % 10 === 1) {
//         arrEnd1.push(array[i]);
//     };
// };
// console.log(arrEnd1);

// var index2 = 0;
// for (let i = 0; i < array.length; i++) {
//     if (array[i] === 2) {
//         index2++;
//     }
//     if (index2 === 3) {
//         index2 = i;
//         break
//     }
// }
// console.log('vi tri phan tu = 2 xuat hien lan thu 3 la:', index2);

// var indexNum2 = 0;
// var checkIndex;
// var buffer = '';
// for (let i = 0; i < array.length; i++) {
//     // let buffer = '';
//     // buffer += array[i];
//     buffer = array[i].toString();
//     for (let j = 0; j < buffer.length; j++) {
//         if (buffer[j] === '2') {
//             indexNum2++;
//             if (indexNum2 === 4) {
//                 checkIndex = i;
//                 break;
//             };
//         };
//     };
//     if (checkIndex === i) {
//         break
//     };
// };
// console.log('vi tri phan tu chua ki tu 2 thu 4 trong mang la:', checkIndex);

// var check5 = 0;
// for (let i = 0; i < array.length; i++) {
//     if (array[i] === 5) {
//         check5 += 1;
//     };
// };
// console.log('so lan lap lai cua phan tu 5 la:', check5);

// e, đếm từng phần tử lặp bao nhiêu lần
// mỗi phần tử xét 1 vòng lặp từ đầu đến phần tử hiện tại xem nó đã được xet chưa, được xét rồi thì continue.
// cách 1(chữa):
// var maxLoop = 1;
// var numLoopMax = [];
// var firstIndexLoopMax = 0;
// var maxLoopIndex = [];
// for (let i = 0; i < array.length; i++) {
//     let checkFor = 0;
//     let count = 1;
//     let loopIndex = [i];
//     for (let j = 0; j < i; j++) {
//         if (array[j] === array[i]) {
//             checkFor++;      
//         }
//     }
//     if (checkFor) {
//         continue
//     }
//     for (let k = i+1; k < array.length; k++) {
//         if (array[k] === array[i]) {
//             count++;
//             loopIndex.push(k)
//         }
//     }
//     if (maxLoop === count) {
//         numLoopMax.push(array[i])
//         maxLoopIndex = maxLoopIndex.concat(loopIndex)
//     }
//     if (maxLoop < count) {
//         maxLoop = count;
//         numLoopMax.length = 0;
//         numLoopMax.push(array[i]);
//         // firstIndexLoopMax = i;
//         maxLoopIndex = loopIndex;
//     }
// }
// console.log(`phan tu lap nhieu nhat la ${numLoopMax} xuat hien o cac vi tri lan luot la ${maxLoopIndex} voi so lan lap la ${maxLoop}`);
//cách 2:
// var loopTime = 1;
// var loopIndex = [];
// var loopNum = [];
// for (let i = 0; i < array.length; i++) {
//     let checkLoop = 1;
//     let checkFor = 0;
//     for (let j = 0; j < loopIndex.length; j++) {
//         if (loopIndex[j] === i) {
//             checkFor++;
//             break;
//         };
//     };
//     if (checkFor) {
//         continue;
//     };
//     loopIndex.push(i);
//     for (let k = i+1; k < array.length; k++) {
//         if (array[i] === array[k]) {
//             checkLoop++;
//             loopIndex.push(k)
//         }
//     }
//     if (checkLoop === loopTime) {
//         loopNum.push(array[i])
//     }
//     if (loopTime < checkLoop) {
//         loopTime = checkLoop;
//         loopNum.length = 0;
//         loopNum.push(array[i]);
//     }
// }
// console.log(`phan tu lap nhieu nhat la ${loopNum} voi so lan lap la ${loopTime}`);

// var max = 0;
// for (let i = 0; i < array.length; i++) {
//     if (array[i] > max) {
//         max = array[i]
//     }
// }
// console.log('phan tu lon nhat trong array la:', max);

// var maxEven;
// var checkEven = 0;
// for (let i = 0; i < array.length; i++) {
//     if (array[i] % 2 === 0) {
//         checkEven++;
//         if (checkEven === 1 ) {
//             maxEven = array[i]
//         }
//         if (array[i] > maxEven) {
//             maxEven = array[i]
//         }
//     }
// }
// if (maxEven !== undefined) {
//     console.log('so chan lon nhat trong mang la:', maxEven);
// } else {
//     console.log('mang khong co so chan.');
// }

// var array2 = [];
// for (let i = 0; i < array.length; i++) {
//     var checkPush = 0;
//     for (let j = 0; j < array2.length; j++) {
//         if (array[i] === array2[j]) {
//             checkPush++;
//         };
//     };
//     if (checkPush === 0) {
//         array2.push(array[i]);
//     };
// };
// console.log(array2);

// for (let i = 0; i < array.length; i++) {
//     for (let j = 0; j < i; j++) {
//         if (array[j] === array[i]) {
//             array.splice(i, 1)
//         }
//     }
// }
// console.log(array);