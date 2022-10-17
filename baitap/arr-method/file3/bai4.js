/* Đoàn là 1 master javascript lương 1000 USD, Trung idol Đoàn, 
quyết định clone mọi thứ từ Đoàn
Hãy giúp Trung clone mọi thuộc tính từ object doan.
Để phân biệt thì Trung sẽ thêm 1 property: clone = true
(Lưu ý: thay đổi object k làm ảnh hưởng tới object doan) */
var doan = {
    name: 'Doan',
     age: 22,
     salary: 1000
}
var trung = {};
trung = {
    ...doan,
    name: 'Trung'
}
trung.clone = true;
trung.salary = 500;
console.log(trung);
console.log(doan);
