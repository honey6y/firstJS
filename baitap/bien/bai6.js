// cho array = [3,5,4,9,8,1,10]
// a, hãy tính tổng của phần tử đầu và phần tử cuối // 3 + 10
// b, hãy thêm số 20 vào cuối array trên và tính lại tổng của phần tử đầu và phần tử cuối 
// // 3 + 20
var array = [3,5,4,9,8,1,10];
console.log('a, tong cua phan tu dau tien va phan tu cuoi la:', array[0] + array[array.length-1]);
array[array.length] = 20;
console.log('b, tong cua phan tu dau tien va phan tu cuoi la:', array[0] + array[array.length-1]);
