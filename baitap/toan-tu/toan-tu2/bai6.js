// cho array = [1,6,8,7,6,9]
// 1.  array trên có bao nhiêu phần tử
// 2. hãy in ra phần tử đầu tiên và phần tử cuối cùng trong array
// 3.  hãy thêm số 5 vào cuối array
// 4. hãy thay đổi phần tử đầu và phần tử cuối thành số 10

var arr = [1,6,8,7,6,9];
var first = arr[0];
var last = arr[arr.length-1];
console.log('so phan tu cua arr tren la: ', arr.length);
console.log('phan tu dau tien va cuoi cung cua array tren lan luot la: ', first, 'va', last);
arr[arr.length] = 5;
console.log('mang sau khi them so 5:', arr);
arr[0] = arr[arr.length-1] = 10;
console.log('mang sau khi thay doi:', arr);
