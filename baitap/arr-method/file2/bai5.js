/* // viết function có đầu vào là 2 array và return tổng 2 array đầu vào
// viết function có đầu vào là 2 array return array mới gộp 2 array với nhau và các phần tử sắp xếp tăng */

var list1 = [3,6,7,9,5];
var list2 = [3,15,7,8,6,6,7];

function sumArr (...array) {
    let newArr = [];
    newArr = newArr.concat(...array);
    let sumTotal = 0;
    sumTotal = newArr.reduce((total, value) => total + value);
    return sumTotal;
}

console.log(sumArr(list1,list2));

function concatAndSortArr (...arr) {
    let newArr = [];
    newArr = newArr.concat(...arr);
    newArr.sort((a,b) => b-a);
    return newArr;
};

console.log(concatAndSortArr(list1,list2));