// Khai báo biến tienLuong là số lương của nhân viên  . 
// Tính tiên thuế và thu nhập thật của nhân viên  , biết rằng :
// * 30% thuếu thu nhập nếu lương là > 80 triệu.
// * 20% thế thu nhập nếu lương từ 20 đến 80 triệu.
// * 10% thuế thu nhập nếu lương  <  20 triệu.
// * Thu nhập thật  = tienLuong - thuế .. 

var tienLuong = 80;
var under20 = 0;
var under80 = 0;
var over80 = 0;
var thue = 0;
if (tienLuong > 80) {
    under20 = 20 * 0.1;
    under80 = 60 * 0.2;
    over80 = (tienLuong-80) * 0.3;
    thue = under20 + under80 + over80;
}else if (tienLuong > 20) {
    under20 = 20 * 0.1;
    under80 = (tienLuong - 20) * 0.2
    thue = under20 + under80;
}else thue = tienLuong * 0.1;

var thuNhap = 0;
thuNhap = tienLuong - thue;
console.log('thu nhập thực tế của nhân viên là: ', thuNhap);