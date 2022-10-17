/* Viết function có đầu vào là 1 array
Function trả ra đoạn string chứa các giá trị bên trong array đầu vào */

var array = [12,3,4,5,6,7,'dd',5,4,'334'];

function arrToString (arr) {
    let newString = '';
    // newString = arr.join('');
    for (let i in arr) {
        newString += arr[i];
    }
    return newString;
};
var result = arrToString(array);
console.log(result);
