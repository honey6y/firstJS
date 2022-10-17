// Cho Array = [10,20,50,99,58,70,60]
// hãy đảo chỗ của phần tử đầu và phần tử cuối trong array 
// // ketqua [60,20,50,99,58,70,10]
var array = [10,20,50,99,58,70,60];
var intermediary = array[0];
array[0] = array[array.length-1];
array[array.length-1] = intermediary;
console.log('mang sau khi dao cho 2 phan tu:', array);