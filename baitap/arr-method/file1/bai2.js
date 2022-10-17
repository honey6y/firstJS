/* viết function có đầu vào là 1 array chứa các số
a, Function trả ra số lớn nhất trong array  */

var arrTest = [1,2,3,14,5,6,7];

function findMax (...number) {
    return Math.max(...number)
}
console.log(findMax(...arrTest));