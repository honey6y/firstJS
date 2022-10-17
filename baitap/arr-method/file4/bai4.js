/* Hãy in ra vị trí đẩu tiên xuất hiện số 7
// -) Hãy in ra vị trí cuối cùng xuất hiện số 7
// -) Hãy sắp xếp array1 theo thứ tự tăng dần và giảm dần
// -) Sử dụng hàm filter để tạo ra array2 từ array1 chứa các phần tử có giá trị lớn hơn 5
// -) Sử dụng hàm filter để tạo ra 1 array3 chứa các giá trị thỏa mãn các điều kiện sau:
// là lớn hơn 5 và phần tử đó cộng 2 chia hết cho 3 */
var array1 = [1,5,2,6,2,8,9,4,6,2,3,5,7,9,3,2,75,6,4,3,7,5,2,4,13];
var firstIndex7 = array1.indexOf(7);
// console.log(firstIndex7);
var lastIndex7 = array1.lastIndexOf(7);
// console.log(lastIndex7);

array1.sort((a,b) => a-b);
// console.log(array1);
array1.sort((a,b) => b-a);
// console.log(array1);

var array2 = array1.filter(value => value > 5);
// console.log(array2);

var array3 = array1.filter(value => (value > 5) && (value % 3 === 1));
console.log(array3);