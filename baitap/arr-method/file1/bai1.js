/* Viết function có đầu vào là 1 array
a, Function trả ra tổng các phần tử trong array
b, Function trả ra tích các phần tử trong array */

var arrTest = [1,2,3,4,5,6,7]
function sumTotal (array) {
    function sumArr (total, num) {
        return total + num;
    };
    let sum = array.reduce(sumArr,0);
    return sum;
}

function mulTotal (array) {
    let mul = array.reduce(mulArr,1); 
    function mulArr (total, num) {
        return total * num;
    };
    return mul;
}
var sumTest = sumTotal(arrTest);
var mulTest = mulTotal(arrTest);
console.log(sumTest);
console.log(mulTest);
