/* hãy tính điểm thi của từng học sinh biết tổng điểm = điểm thi * hệ số
hệ số sẽ thay đổi theo khối thi và môn thi
hoc sinh thi đỗ nếu điểm thi >= điểm sàn của khối tương ứng
hãy cho biết ai thi đỗ, ai thi trượt */

var hocSinh = [
{ten: 'huy', khoi:'A', diem: {toan: 7, van: 5, anh:5}},
{ten: 'lam', khoi:'B', diem: {toan: 7, van: 7, anh:5}},
{ten: 'tung', khoi:'C', diem: {toan: 7, van: 4, anh:7}},
];
var khoiThi = [
{khoi: 'A', heSo:{toan:2, van:1, anh:1}, diemSan:25},
{khoi: 'B', heSo:{toan:1, van:1, anh:2}, diemSan:24},
{khoi: 'C', heSo:{toan:1, van:2, anh:1}, diemSan:20},
];
let keySubject = Object.keys(khoiThi[0]['heSo']);
// console.log(keySubject);
hocSinh = hocSinh.map( (value) => {
    let dem = 0;
    let tongDiem = 0;
    for (let i = 0; i < khoiThi.length; i++) {
        if (value['khoi'] === khoiThi[i]['khoi']) {
            dem = i;
            break;
        }
    }
    let heSo = khoiThi[dem]['heSo'];
    for (let j = 0; j < Object.keys(value['diem']).length; j++) {
        value['diem'][keySubject[j]] *= heSo[keySubject[j]]
        tongDiem += value['diem'][keySubject[j]];
    }
    value['tongDiem'] = tongDiem;
    if(tongDiem >= khoiThi[dem]['diemSan']) {
        value['ketQua'] = 'Do';
    } else {
        value['ketQua'] = 'Truot'
    }
    return value;
});
console.log(hocSinh);
