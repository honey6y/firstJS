/* // * in ra các số chẵn trong mảng
// * in ra các số lẻ  trong mảng
// * in ra các số lớn hơn hoặc bằng 5 trong mảng
// *in ra các số chia hết cho 5 trong mảng
// Tìm các số >5 của mảng và tăng các giá trị đó lên 1 đơn đơn vị
copy mảng từ phần tử số 3 đến phần tử cuối cùng
xóa 1 phần tử vị trí bất kỳ trong mảng
thêm 1 phần tử vào cuối mảng */

var array = [1,5,7,8,9,15];

function locChan (array) {
    let newArr = array.filter(check);
    function check (value) {
        return value % 2 === 0;
    }
    return newArr;
}
var testChan = locChan(array);
// console.log(testChan);

function locLe (array) {
    let newArr = array.filter(check);
    function check (value) {
        return value % 2 !== 0;
    }
    return newArr;
}
var testLe = locLe(array);
// console.log(testLe);

function overFive (array) {
    let newArr = array.filter(check);
    function check (value) {
        return value >= 5;
    }
    return newArr;
}
var testOverFive = overFive(array);
// console.log(testOverFive);

function chiaHet5 (array) {
    let newArr = array.filter(check);
    function check (value) {
        return value % 5 === 0;
    }
    return newArr;
}
var testChiaHet5 = chiaHet5(array);
// console.log(testChiaHet5);

// function lonHon5 (array) {
//     let newArr = array.filter(check);
//     function check (value) {
//         return value > 5;
//     }
//     let resultArr = newArr.map(scale);
//     function scale (value) {
//         return ++value;
//     }
//     return resultArr;
// }
function lonHon5 (array) {
    let newArr = [];
    array.reduce((total, value) =>
        value > 5 ? newArr.push(value+1) : total);
    return newArr;
}
var testLonHon5 = lonHon5(array);
console.log(testLonHon5);

function coppySubArr (start, end, arr) {
    let newSubArr = arr.slice(start, end);
    return newSubArr;
}
var testCoppySubArr = coppySubArr(3, array.length, array)
// console.log(testCoppySubArr);

function spliceIndexArr (start, amount, arr) {
    let newSubArr = arr.splice(start, amount);
    return newSubArr;
}
// var testSpliceIndexArr = spliceIndexArr(2, 1, array)
// console.log(testSpliceIndexArr);

// array.push(20);
// console.log(array);