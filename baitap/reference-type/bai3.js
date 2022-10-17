let a = 30;
//-) Gán giá trị biến của a thành 'số 30'
a = 'số 30';
console.log(a);

let array1 = [1,2,3,4,[123]];
// Hãy tạo ra string từ array1 và biến đổi lại thành kiểu dữ liệu ban đầu
let newStr = JSON.stringify(array1);
// console.log(newStr);
let newArr = JSON.parse(newStr);
// console.log(newArr);