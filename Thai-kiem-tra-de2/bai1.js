/* a, hãy tạo ra array3 mới chứa gồm Phần tử đầu tiên (phần tử chính giữa array1), 
phần tiếp theo (phần tử chính giữa array2)
còn lại là các phần tử sót lại của array1 , tiếp đó là phần tử của array2  (ĐỀ KHÓ)
b, hãy tạo ra array4 chứa các phần tử chữ cái của array1 và array2
c, sắp xếp phần tử array4 tăng dần theo thứ tự bảng chữ cái */
var array1 = [3, 2, 1, 6, 'a'] ;
var array2 = [9, 5, 0, 'h', 3, 5, 4, 'c'];

//a,
var copyArray1 = [...array1];
var copyArray2 = [...array2];
var array3 = [...copyArray1.splice(Math.floor((copyArray1.length)/2),1),...copyArray2.splice(Math.floor((copyArray2.length-1)/2),1),...copyArray1,...copyArray2];
console.log(array3);

//b,
var array4 = [...array1.filter(value => typeof value === 'string'), ...array2.filter(value => typeof value === 'string')];
// console.log(array4);

//c,
array4.sort((a,b) => a < b ? -1 : 1);
console.log(array4);
