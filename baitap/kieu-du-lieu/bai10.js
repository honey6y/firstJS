var luongt5 = {
    Anh:1222000,
    Duy:2250000,
    Thai:222225455
    }
    // a.	sử dụng console.log để in ra số lương của Duy . 
    // b.	Sửa lại tiền lương của Thái là 40000000 . 
    // c.	Tính tổng tiền lương của Anh , Duy và Thái . 
    // d.	Thêm bạn Trường với tiền lương là 4444444
    // e.	Sử dụng console.log để in ra kết như sau : Tổng Lương Tháng 5 của Anh , Duy , Thái,Trường  là … (ghi kết quả tại dấu …) . 

// console.log('a, luong cua Duy la:', luongt5.Duy);
luongt5.Thai = 40000000;
// console.log('b, tien luong cua Thai sau khi thay doi la:', luongt5.Thai);
// var sumSalary = 0;
// for (var x in luongt5) {
//     sumSalary += luongt5[x];
// }
// console.log('c, tong tien luong cua 3 nguoi la:', sumSalary);
luongt5.Truong = 4444444;
var sumSalary = 0;
for (var x in luongt5) {
    sumSalary += luongt5[x];
}
console.log('e, Tổng Lương Tháng 5 của Anh , Duy , Thái,Trường  là:',sumSalary);
