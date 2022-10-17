/* a) Viết function Tính tổng, tích, giá trị trung bình cộng của cả 3 array
//b) Viết function Tính tích của các phần tử từ đầu đến vị trí số 2 xuất hiện lần thứ 3 của array1 với tích phần tử từ đầu đến vị trí có giá trị là 5 xuất hiện lần 2 của array2
//c) Viết function Tính tích, tính tổng của các phần tử từ vị trí số 2 xuất hiện lần đầu đến vị trí số 2 xuất hiện lần thứ 4 của cả 3 array .  */
var array1 = [1,5,2,6,2,8,9,4,6,2,3,5,7,9,3,2,75,6,4,3,2,4,12];
var array2 = [4,6,3,8,5,7,4,1,2,9,6,5,3,1,5,2,7,6,8,6,3,2,1,5];
var array3 = [2,5,1,6,3,8,4,10,5,3,1,6,5,2,6,4,8,9,2,1,5,8,7,12];

const sumArr = (...array) => {
    let totalArr = array.reduce((total, value) => [...total,...value]);
    let result = totalArr.reduce((total, value) => total + value);
    return result;
}
// console.log(sumArr(array1,array2,array3));
const mulArr = (...array) => {
    let totalArr = array.reduce((total, value) => [...total,...value]);
    let result = totalArr.reduce((total, value) => total * value);
    return result;
}
// console.log(mulArr(array1,array2,array3));
const averageArr = (...array) => {
    let totalArr = array.reduce((total, value) => [...total,...value]);
    let result = totalArr.reduce((total, value) => total + value);
    return result/totalArr.length;
}
// console.log(averageArr(array1,array2,array3));

const mulAnyNum = (arr1,arr2) => {
    let length_1 = arr1.length;
    let length_2 = arr2.length;
    let i = 0;
    let j = 0;
    let count1 = 0;
    let count2 = 0;
    for (; i < length_1; i++) {
        if (arr1[i] === 2) {
            count1++;
        }
        if (count1 === 3) {
            break;
        }
    }
    if (count1 !== 3) {
        return console.log('mang 1 khong phu hop');
    }
    for (; j < length_2; j++) {
        if (arr2[j] === 5) {
            count2++;
        }
        if (count2 === 2) {
            break;
        }
    }
    if (count2 !== 2) {
        return console.log('mang 2 khong phu hop');
    }
    let newArr = [...arr1.slice(0,i), ...arr2.slice(0,j)];
    let result = newArr.reduce((total, value) => total * value);
    return result;
}
console.log(mulAnyNum(array1, array2));