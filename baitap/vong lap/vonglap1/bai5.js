/* cho array = [1,5,7,6,4,9, 5, 7 , 5, 1]


a, array trên thiếu những số nào trong khoảng từ phần tử lớn nhất đến phần tử nhỏ nhất 
(lớn nhất trên array là 9, nhỏ nhất là 1, từ 1 - 9 thiếu các số [2, 3, 8])
b, trong array trên số nào có tổng lặp lại lớn nhất 
(
số 5 lặp lại 3 lần => tổng = 5 * 3 = 15
số 7 lặp 2 lần => tổng = 14,....
=> số 5 có tổng lặp lại lớn nhất
) */

var array = [1,5,7,6,4,9, 5, 7 , 5, 1];
// var max = array[0];
// for (let i = 0; i < array.length; i++) {
//     if (array[i] > max) {
//         max = array[i]
//     }
// }
// var min = array[0];
// for (let i = 0; i < array.length; i++) {
//     if (array[i] < min) {
//         min = array[i]
//     }
// }
// // console.log('so nho nhat la:', min);
// var fullArray = [];
// for (let i = min; i <= max; i++) {
//     fullArray.push(i);
// }

// var missArray = [];
// for (let i = 0; i < fullArray.length; i++) {
//     let checkSame = 0
//     for (let j = 0; j < array.length; j++) {
//         if (array[j] === fullArray[i]) {
//             checkSame++;
//         }
//     }
//     if (checkSame === 0) {
//         missArray.push(fullArray[i])
//     }
// }
// console.log('mang tren con thieu', missArray);

var checkNum = [];
var checkIndex = [];
var sumLoop = 0;
var loopTime = [];
for (let i = 0; i < array.length; i++) {
    let checkNumLoop = 0;
    let checkSumLoop = 0;
    let checkLoop = 1;
    for (let k = 0; k < checkIndex.length; k++) {
        if (array[i] === checkIndex[k]) {
            checkNumLoop++;
            break;
        };
    };
    if (checkNumLoop) {
        continue
    };
    checkIndex.push(array[i]);
    for (let j = i+1; j <= array.length; j++) {
        if (array[i] === array[j]) {
            checkLoop++;
        };
    };
    checkSumLoop = array[i] * checkLoop;
    if (checkSumLoop === sumLoop) {
        checkNum.push(array[i]);
        loopTime.push(checkLoop);
    }
    if (checkSumLoop > sumLoop) {
        sumLoop = checkSumLoop;
        checkNum.length = 0;
        checkNum.push(array[i]);
        loopTime.length = 0;
        loopTime.push(checkLoop)
    };
};
if (checkNum.length > 1) {
    console.log(`cac so co tong lap lai lon nhat la ${checkNum}. So lan lap lai lan luot la ${loopTime} voi tong lap lai la ${sumLoop}`);
} else {
    console.log(`so co tong lap lai lon nhat la ${checkNum}. So lan lap lai la ${loopTime} voi tong lap lai la ${sumLoop}`);
}
