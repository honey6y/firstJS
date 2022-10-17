// Bài 7, cho array2 = [1,6,8,7,10 , [6,8,7,4,3,5] , 3]
// a, tính tổng của phần tử đầu và phần tử cuối trong array2 và array con 
// // 1 + 3 + 6 +5
// b, hãy thêm số 10 vào cuối array con và tính lại tổng trên
console.log('Bai 7');
var array2 = [1,6,8,7,10 , [6,8,7,4,3,5] , 3];
var subArray = array2[array2.length-2];
// var sumArray2 = array2[0] + array2[array2.length-1];
// var sumSubArray = subArray[0] + subArray[subArray.length-1];
function sum1 (x, y){
    return x[0] + x[x.length-1] + y[0] + y[y.length-1];
}
// var sum1 = array2[0] + array2[array2.length-1] + subArray[0] + subArray[subArray.length-1];
console.log('a, tong cua phan tu dau va phan tu cuoi trong array la:',sum1(array2, subArray));
subArray[subArray.length] = 10;
// var sum2 = array2[0] + array2[array2.length-1] + subArray[0] + subArray[subArray.length-1];
console.log('b, tong moi cua phan tu dau va phan tu cuoi trong array la:',sum1(array2, subArray));
console.log('mang array2 ban dau:', array2);
array2.reverse();
console.log('mang array2 sau khi doi chieu la:', array2);