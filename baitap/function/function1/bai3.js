/* viết function có đầu vào là 1 array
	Function trả ra array mới với thứ tự ngược lại với array ban đầu */

function reverseArr (array) {
    let newArr = [];
    for (let i = array.length - 1; i >= 0 ; i--) {
        // console.log(i);
        newArr.push(array[i]);
    };
    return newArr;
};

function sort (array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = i+1; j < array.length; j++) {
            if (array[i] > array[j]) {
                array[i] = array[j] + (array[j] = array[i]) - array[i];
            };
        };
    };
    return array;
};
var arrTest = [1,2,3,4,5,6,7,8,9,3,2,23,5,35];
var arrSort = sort(arrTest);
var result = reverseArr(arrSort);
console.log(arrSort, result);