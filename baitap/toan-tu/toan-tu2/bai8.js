/* cho array = [3,5,4,9,8,1,10]
1. hãy tính tổng của phần tử đầu và phần tử cuối // 3 + 10
2. hãy thêm số 20 vào cuối array trên và tính lại tổng của phần tử đầu và phần tử cuối  // 3 + 20 */

var arr = [3,5,4,9,8,1,10];

var first = arr[0];
var last = arr[arr.length-1];
var sum = first + last;
console.log('tong cua phan tu dau va phan tu cuoi la: ', sum);

arr[arr.length] = 20;
last = arr[arr.length-1];
sum = first + last;
console.log('tong moi cua phan tu dau va phan tu cuoi la: ', sum);