/* var arr2 = ['4', '6', 1,2,3,5, 'y', 't', 5]
// viết function có đầu vào là 1 arr return tổng các number và string number trong array */

arr2 = ['4', '6', 1,2,3,5, 'y', 't', 5];

function sumArr (array) {
    let newArr = array.filter(checkNum);
    function checkNum (value) {
        return (value * 0 === 0);
    };
    let result = newArr.reduce(sumElement);
    function sumElement(total, value) {
        return total + value;
    }
    return result;
}
var testSumArr = sumArr(arr2);
console.log(testSumArr);
