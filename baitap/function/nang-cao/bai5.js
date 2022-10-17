/* a ) Viết function truy vấn điểm vùng . theo mã Vùng . 
b ) Viết function truy vấn điểm vùng theo tên của học Sinh .
c ) Viết function tính điểm thi. theo tên của học sinh .
Biết rằng điểm tổng = Điểm Toán + Điểm Văn + Điểm Anh + Điểm Vùng.
d ) Viết function cho biết học sinh đỗ tốt nghiệp hay không. 
Biết rằng để tốt nghiệp  điểm tổng > = 15 và không có môn nào < = 1.. 
e ) Viết function cho biết học sinh đã đỗ trường nào  . theo tên của học sinh.  */
var  hocSinh = [
{ name:'A', age:18,queQuan:'Hà Nội',maVung:'V001'},
{ name:'B', age:18,queQuan:'Tây Bắc',maVung:'V002'},
{ name:'C', age:19,queQuan:'Hưng Yên',maVung:'V003'},
{ name:'D', age:18,queQuan:'Thái Bình',maVung:'V003'}
]

var diemVung = [
{maVung:'V001',ten:['Hà Nội'],diem:2},
{maVung:'V002',ten:['Hà Giang','Tây Bắc','Mù Cang Trải'],diem:2.5},
{maVung:'V003',ten:['Thái Bình','Hưng Yên'],diem:1}
]

var diemThi= [
{name:'A', Toan:9, Van:6,anh:7},
{name:'B', Toan:1, Van:8,anh:9},
{name:'C', Toan:7, Van:6,anh:5},
{name:'D', Toan:7, Van:5,anh:7}
]
var truong = [
{ten:'Chu Văn An',diemChuan:25},
{ten:'Amsterdam',diemChuan:27},
{ten:'Nguyễn Du',diemChuan:23}
]

let vungThi = 'V001';
const diemVungTheoMa = maVung => diemVung.find(value => value['maVung'] === maVung)['diem'];

// console.log(diemVungTheoMa(vungThi));

let tenCanTim = 'A';
const diemVungHocSinh = tenHocSinh => {
    let hocSinhCanTim = hocSinh.find(value => value['name'] === tenHocSinh);
    return diemVung.find(value => value['maVung'] === hocSinhCanTim['maVung'])['diem']
}
// console.log(diemVungHocSinh(tenCanTim));

const tongDiemHocSinh = tenHocSinh => {
    let hocSinhCanTim = hocSinh.find(value => value['name'] === tenHocSinh);
    let diem = diemThi.filter(value => value['name'] === tenHocSinh).reduce((total,value) => 
    total + value['Toan'] + value['Van'] + value['anh'],0);
    let tongDiem = diem + diemVung.find(value => value['maVung'] === hocSinhCanTim['maVung'])['diem'];
    return tongDiem;
}
// console.log(tongDiemHocSinh(tenCanTim));

const xetTotNghiep = tenHocSinh => {
    let diemHocSinh = diemThi.find(value => value['name'] === tenHocSinh);
    if (!(diemHocSinh['Toan'] <= 1 || diemHocSinh['Van'] <= 1 || diemHocSinh['anh'] <= 1) && tongDiemHocSinh(tenHocSinh) >= 15){
        console.log('hoc sinh do tot nghiep');
        return true;
    } else {
        console.log('hoc sinh truot tot nghiep');
        return false;
    } 
}
// console.log(xetTotNghiep(tenCanTim));

const xetNguyenVong = tenHocSinh => {
    if (xetTotNghiep(tenHocSinh)) {
        let ketQua = [];
        let xetTuyen = truong.length;
        for (let i = 0; i < xetTuyen; i++) {
            if (truong[i]['diemChuan'] <= tongDiemHocSinh(tenHocSinh)) {
                ketQua.push(truong[i]['ten'])
            }
        }
        if (ketQua.length) {
            console.log(ketQua);
            return ketQua;
        } else {
            console.log('hoc sinh khong do truong nao');
            return ketQua;
        }
    } else {
        console.log('hoc sinh truot tot nghiep');
        return false;
    }
}
xetNguyenVong('B')