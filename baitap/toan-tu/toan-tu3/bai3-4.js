/* Khai  báo biến a và b với giá trị số mà người dùng nhập nhập vào . 
So sánh 2 số a và b rồi in ra kết quả .( lớn hơn , nhỏ hơn , bằng ) 
lưu ý : a và b  là số nguyên  . */

var a = -7;
var b = -6;
if (a%1 != 0 || b%1 != 0)
console.log('vui long nhap so nguyen');
else if (a > b)
console.log('lon hon');
else if (a < b)
console.log('nho hon');
else console.log('bang');