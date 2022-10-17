let hocSinh = [
    {name:'Thai', age: 15,maSV:'A1001A',diemthi:{toan:8,van:7,anh:9}},
    {name:'Kien', age: 10,maSV:'B1001D',diemthi:{toan:6,van:6,anh:9}},
    {name:'Linh', age: 12,maSV:'C1001C',diemthi:{toan:8,van:7,anh:7}},
    {name:'Tung', age: 11,maSV:'A1002B',diemthi:{toan:7,van:6,anh:9}},
    {name:'Thinh', age: 16,maSV:'B1002A',diemthi:{toan:5,van:7,anh:7}},
    {name:'Thuan', age: 13,maSV:'C1003C',diemthi:{toan:7,van:7,anh:7}},
    {name:'Hai', age: 13,maSV:'C1002B',diemthi:{toan:8,van:7,anh:6}},
];
let lop =[
    {name:'A1', loai:'Lớp chọn'},
    {name:'B1', loai:'Loại B'},
    {name:'C1', Loai:'Loại C'},
];
let khoiThi = [
    {name:'A', diem:22,heso:{toan:2,van:1,anh:1}},
    {name:'B', diem:25,heso:{toan:1,van:2,anh:1}},
    {name:'C', diem:21,heso:{toan:1,van:1,anh:2}},
];
//a ) Lọc các học sinh theo lớp
// const filterStudentByClass = (className, arrStudentInfo) => {
//     let result = arrStudentInfo.filter(value => value['maSV'].startsWith(className));
//     return result;
// }
// let studentClassA1 = filterStudentByClass('A1', hocSinh);
// let studentClassB1 = filterStudentByClass('B1', hocSinh);
// let studentClassC1 = filterStudentByClass('C1', hocSinh);
// console.log(studentClassA1, studentClassB1, studentClassC1);

const filterStudentByClass = (arrClass, arrStudentInfo) => {
    let ketQua = [];
    arrClass.forEach(valueClass => {
        ketQua.push(arrStudentInfo.filter(valueStudent => valueStudent['maSV'].startsWith(valueClass['name'])));
    })
    return ketQua;
}
let studentByClass = filterStudentByClass(lop, hocSinh);
// console.log(studentByClass);

//b ) Lọc các học sinh theo Khối thi
const filterStudentByGrade = (arrGrade, arrStudentInfo) => {
    let ketQua = [];
    arrGrade.forEach(valueGrade => {
        ketQua.push(arrStudentInfo.filter(valueStudent => valueStudent['maSV'].endsWith(valueGrade['name'])));
    })
    return ketQua;
}
let studentByGrade = filterStudentByGrade(khoiThi, hocSinh);
// console.log(studentByGrade);

//c ) Tính tổng điểm của các học sinh .  cho biết học sinh đó đỗ hay trượt 
const insertKetQuaXetTuyen = (arrGrade, arrStudentInfo) => {
    arrGrade.forEach(valueGrade => {
        arrStudentInfo.reduce((total, valueStudent) => {
            if (valueStudent['maSV'].endsWith(valueGrade['name'])) {
                let tongDiem = 0;
                for (let x in valueStudent['diemthi']) {
                    tongDiem += valueStudent['diemthi'][x] * valueGrade['heso'][x]
                }
                valueStudent['tongDiem'] = tongDiem;
                if (tongDiem >= valueGrade['diem']) {
                    valueStudent['ketQua'] = 'Do';
                } else {
                    valueStudent['ketQua'] = 'Truot';
                }
            }
        }, [])
    })
    arrStudentInfo.forEach(value => {
        if (!value['ketQua']) {
            value['ketQua'] = 'xep nham danh sach';
        }
    })
}
insertKetQuaXetTuyen(khoiThi, hocSinh);
console.log(hocSinh);
