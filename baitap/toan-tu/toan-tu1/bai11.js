// Viết chương trình nhập vào giá trị cho a và b. Tính tổng a và b, nếu tổng nhỏ hơn 4, hiển thị chuỗi Below,
// ngược lại hiển thị Over. Lưu ý sử dụng toán tử ?

var a = 2;
var b = 2;
var c = a + b;
var string1 = 'Below';
var string2 = 'Over';
var stringPrint = '';
stringPrint = c < 4 ? string1 : string2;

console.log(stringPrint);