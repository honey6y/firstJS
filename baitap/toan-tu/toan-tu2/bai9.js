/* cho array2 = [1,6,8,7,10 , [6,8,7,4,3,5] , 3]
1. tính tổng của phần tử đầu và phần tử cuối trong array2 và array con 
2. hãy thêm số 10 vào cuối array con và tính lại tổng trên */

var array2 = [1,6,8,7,10 , [6,8,7,4,3,5] , 3];
var arrFirst = array2[0];
var arrLast = array2[array2.length-1];

var subArrIndex = [];
for (let i in array2) {
    if (Array.isArray(array2[i]))
    subArrIndex.push(i)
}
// console.log(subArrIndex);

 var newSubArr = [];
 for (let i in subArrIndex) {
    newSubArr.push(array2[subArrIndex[i]])
 }
//  console.log(newSubArr);

// var sumSubArrTotal = 0;
// for (let i in newSubArr) {
//     sumSubArrTotal = newSubArr[i][0] + newSubArr[i][newSubArr[i].length - 1];
// }
function sumSubArr(x) {
    let sumSubArrTotal = 0;
    for (let i in x) {
        sumSubArrTotal = x[i][0] + x[i][x[i].length - 1];
    }
    return sumSubArrTotal;
}
var firstSumSubArr = sumSubArr(newSubArr);

console.log('tong phan tu dau va cuoi cua cac mang con la: ', firstSumSubArr);
var sumTotal = firstSumSubArr + arrFirst + arrLast;
console.log('tong phan tu dau va cuoi cua array2 va array con la:', sumTotal);

for (let i in newSubArr) {
    newSubArr[i][newSubArr[i].length] = 10;
}
var secondSumSubArr = sumSubArr(newSubArr);
console.log('tong moi cua phan tu dau va cuoi cua cac mang con la: ', secondSumSubArr);
var sumTotal = secondSumSubArr + arrFirst + arrLast;
console.log('tong moi cua phan tu dau va cuoi cua array2 va array con la:', sumTotal);


