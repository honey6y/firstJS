/* viết function có đầu vào là số number và 1 array chứa số
	Function trả ra số lần number lặp lại trong array */

function loopNum (number, array) {
    let count = 0;
    for (let i = 0; i < array.length; i++) {
        if (number === array[i]) {
            count++;
        };
    };
    return count;
};

var numTest = 9;
var arrTest = [1,2,3,4,5,9,9,9,9];
var result = loopNum(numTest, arrTest);
console.log(result);