// Bài 1.
// cho array = [1,6,8,7,6,9]
// a, array trên có bao nhiêu phần tử
// b, hãy in ra phần tử đầu tiên và phần tử cuối cùng trong array
// c, hãy thêm số 5 vào cuối array
// d, hãy thay đổi giá trị của phần tử đầu tiên và cuối cùng trong array thành số 10
/* Bài 1 */
console.log('Bài 1');
var array = [1,6,8,7,6,9];
console.log('a, Số phần tử của mảng:',array.length);
console.log('b, phần tử đầu tiên là', array[0],', phần tử cuối cùng là', array[array.length-1]);
// array[6] = 6;
// array[7] = 6;
// array[8] = 6;
// array[9] = 6;
// array[10] = 6;
array.push(6, 6, 6, 6, 6)
console.log('c, mảng sau khi thêm 5 phần tử là:', array);
array[0] = array[array.length-1] = 10;
console.log('d, mảng sau khi thay đổi giá trị phần tử đầu tiên và cuối cùng:', array);