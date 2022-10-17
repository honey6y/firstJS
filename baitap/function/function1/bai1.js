/* Viết function có đầu vào là 1 array
a, Function trả ra tổng các phần tử trong array
b, Function trả ra tích các phần tử trong array */

function sum (array) {
    let sum = 0;
    for (let x in array) {
        sum += array[x];
    };
    return sum;
};

function multi (array) {
    let mul = 1;
    for (let x in array) {
        mul *= array[x];
    };
    return mul;
};

var arrTest = [12,23,4,5,6,4,54,4,5,4,4,5];
var arrTest2 = [1,2,3,4,5]
console.log(sum(arrTest2));
console.log(multi(arrTest2));