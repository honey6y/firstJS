/* viết function có đầu vào là 1 number và 1 array chứa số
Function trả ra số lần number lặp lại trong array */

var arrTest = [1,2,3,5,6,7,4,4,4];
var numTest = 4;

function calLoopTime (number, array) {
    let count = 0;
    function filterFunc (value, index) {
        return (value === number)
    }
    count = array.filter(filterFunc).length
    return count;
}
var countTest = calLoopTime(numTest, arrTest);
console.log(countTest);