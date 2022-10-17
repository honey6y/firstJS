/* var list1 = [3,6,7,9,5]
	var list2 = [3,5,7,8,6,6,7]
// viết function có đầu vào là 2 array và return tổng 2 array đầu vào */

var list1 = [3,6,7,9,5];
var list2 = [3,5,7,8,6,6,7];

function concatArr (...arr) {
	let newArr = [];
	newArr = newArr.concat(...arr);
	// for (let x in arguments) {
	// 	newArr = newArr.concat(arguments[x]);
	// };
	return newArr;
}

var test = concatArr (list1, list2);
console.log(test);