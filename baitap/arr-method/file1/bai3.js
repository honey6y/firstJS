/* viết function có đầu vào là 1 array
Function trả ra array mới với thứ tự ngược lại với array ban đầu */

var arrTest = [1,2,3,14,5,6,7];

function reverseArr (array) {
    let newArr = [...array];
    return newArr.reverse();
}
var test = reverseArr(arrTest);
console.log(test);