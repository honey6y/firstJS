/* Cho biến soDienThoai là một array gồm nhiều  số có 1 chữ số bất kỳ .. 
Nếu soDienThoai để trống thì in ra  “Không được để trống “ 
Nếu soDienThoai  ít hơn hoặc nhiều hơn 10 phần tử thì in ra  “ Sđt không hơp lệ “ 
Nếu soDienThoai  có 10 phần tử “SĐT hợp lệ “ và in ra soDienThoai  */

var soDienThoai = [1,2,3,4,5,'9',7,8,9,9];
if (soDienThoai.length === 0)
console.log('khong duoc de trong');
else if (0 > soDienThoai.length || soDienThoai.length > 10)
console.log('sdt khong hop le');
else {
    let sdt = '';
    for (let i in soDienThoai){
        if (typeof (soDienThoai[i]/1) != 'number' || soDienThoai[i] > 9 || soDienThoai[i] < 0) {
            break;
        }
        sdt += soDienThoai[i].toString();
    }
    if (sdt.length === 10)
    console.log('sdt hop le:',sdt);
    else console.log('sdt khong hop le');
}
