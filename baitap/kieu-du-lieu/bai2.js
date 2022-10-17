// Tạo một object chứa thông tin của bản thân:
// 	ví dụ: var human = {
//     			name: "",
//     			gender: "Male",
//     			// ....
// }
// a.	Thêm từ 1 - 5 thuộc tính về bản thân.
// b.	Sử dụng console.log() để xem kết quả.
// c.	Truy vấn từng giá trị của đối tượng đã tạo.
// d.	Đổi các value thành thông tin của người bên cạnh.
// e.	Thêm key “ethnic”(dân tộc) vào đối tượng và gán cho giá trị cụ thể.
// f.	Console.log() chuỗi bất kỳ chứa tất cả thông tin đã tạo trước đó.
console.log('Bai 2');
var info = {
    ten: 'Thai',
    gender: 'male',
    birth: 1996,
    add: 'Ha Noi',
    height: '168cm',
    grade: 'bk2.21'
}
// console.log(info);
// console.log(info.ten);
// console.log(info.gender);
// console.log(info.birth);
// console.log(info.add);
// console.log(info.height);
// console.log(info.grade);

info.ten = 'Duc';
info.birth = 1994;
info.height = '169cm';
info.grade = 'nodemy b6';
info.ethnic = 'Viet Nam';
var thongTin = 
    `ten: ${info.ten}
gender: ${info.gender}
birth: ${info.birth}
height: ${info.height}
grade: ${info.grade}`
;
console.log(thongTin);