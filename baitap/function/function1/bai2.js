/* viết function có đầu vào là 1 array chứa các số
	a, Function trả ra số lớn nhất trong array 
	b, Function trả ra số bé nhất trong array  */

function max (array) {
    let max = array[0];
    for (let i in array) {
        if (max < array[i]) {
            max = array[i]
        }
    }
    return max;
}
function min (array) {
    let min = array[0];
    for (let i in array) {
        if (min > array[i]) {
            min = array[i]
        }
    }
    return min;
}

var arrTest = [-1,2,3,4,5,6,7,8,9]
console.log(max(arrTest));
console.log(min(arrTest));