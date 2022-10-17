/* a, hãy tạo ra array3 mới chứa gồm 2 phần tử đầu của array1 và 3 phần tử cuối của array2
b, hãy tạo ra array4 chứa các số chẵn của array1 và array2
c, số lớn nhất có thể tạo ra từ các chữ số trong array4 là bao nhiêu? Mỗi phần chỉ xuất hiện 1 lần */

var array1 = [3, 2, 1, 6, 'a'] ;
var array2 = [9, 5, 0, 'h', 3, 5, 4, 'c'];

//a,
var array3 = [...array1.slice(0,2),...array2.slice(-3)];
// console.log(array3);

//b,
var array4 = [...array1.filter(value => value % 2 === 0), ...array2.filter(value => value % 2 === 0)];
// console.log(array4);

//c,
var maxValue = parseInt(array4.sort((a,b) => b-a).join(''));
// console.log(maxValue);

//d, so lon nhat tao duoc tu cac phan tu, moi phan tu xuat hien 1 lan
var arrTest = [2,2,4,4,6,6,8,0,0]
arrTest.sort((a,b) => b-a);
arrTest = arrTest.filter((value, index) => (arrTest.indexOf(value) === index))
var maxValueTest = parseInt(arrTest.join(''))
// console.log(maxValueTest);

//e, so lon nhat tao duoc tu cac phan tu, moi phan tu xuat hien 1 lan

var arrTest2 = [123,5,4,7,65,6]
// arrTest2.sort();
// console.log(arrTest2);
// arrTest2.reverse();
// var maxValueTest2 = parseInt(arrTest2.join(''))
// console.log(maxValueTest2);


arrTest2 = arrTest2.map(value => value = value.toString())
arrTest2.sort((a,b) => a > b ? -1 : 1)
var maxValueTest3 = parseInt(arrTest2.join(''))
console.log(maxValueTest3);
