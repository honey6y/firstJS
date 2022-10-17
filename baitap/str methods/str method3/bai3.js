let khachHang = [
    {ten:'nguyen van nam', gioiTinh: 'nam', diemTichLuy: 125, dichVuDangKy: 'A'},
    {ten:'dao linh huong', gioiTinh: 'nu', diemTichLuy: 170, dichVuDangKy: 'B'},
    {ten:'le dinh hieu', gioiTinh: 'nam', diemTichLuy: 115, dichVuDangKy: 'C'},
    {ten:'nguyen tien dat', gioiTinh: 'nam', diemTichLuy: 75, dichVuDangKy: 'B'},
    {ten:'nguyen van quy', gioiTinh: 'nam', diemTichLuy: 55, dichVuDangKy: 'A'},
    {ten:'tran ngoc diep', gioiTinh: 'nu', diemTichLuy: 105, dichVuDangKy: 'B'},
    {ten:'lai the anh', gioiTinh: 'nam', diemTichLuy: 55, dichVuDangKy: 'C'},
    {ten:'tran thi ngoc tram', gioiTinh: 'nu', diemTichLuy: 65, dichVuDangKy: 'C'},
];
let dichVu = [
    {ten: 'A', khuyenMai: 0.2, giaTri:250},
    {ten: 'B', khuyenMai: 0.18, giaTri:210},
    {ten: 'C', khuyenMai: 0.15, giaTri:200},
];
let phiCuoc = [
    {tennuoc : 'Han Quoc',  giacuoc: 20},
    {tennuoc : 'UK',  giacuoc: 30},
    {tennuoc : 'US',  giacuoc: 29},
    {tennuoc : 'Canada',  giacuoc: 25},
];
let bienLai = [
    {ten: 'nam', giaTri:300, diachiden: 'Han Quoc'},//60
    {ten: 'hieu', giaTri:180, diachiden: 'UK'},
    {ten: 'nam', giaTri:180, diachiden: 'US'},//29
    {ten: 'tram', giaTri:180, diachiden: 'US'},
    {ten: 'dat', giaTri:170, diachiden: 'Han Quoc'},
    {ten: 'anh', giaTri:100, diachiden: 'UK'},
    {ten: 'hieu', giaTri:180, diachiden: 'Han Quoc'},
    {ten: 'lam', giaTri:200, diachiden: 'Han Quoc'},
    {ten: 'quy', giaTri:210, diachiden: 'Canada'},
    {ten: 'diep', giaTri:100, diachiden: 'US'},
    {ten: 'huong', giaTri:100, diachiden: 'Canada'},
];
//3.1 Hãy in lại tên của các khách hàng sao cho có từ viết hoa ở mỗi chữ cái vd : Nguyen Van Nam
// let newKhachHang = [...khachHang]
// newKhachHang.map(value => {
//     // let copyValue = {...value}
//     value['ten'] = value['ten'].split(' ')
//     .map(newValue => newValue[0].toUpperCase() + newValue.slice(1)).join(' ');
//     // return copyValue;
// });
// console.log(newKhachHang);

//3.2 Hãy in ra danh sách các khách hàng có khả năng đăng ký thẻ VIP với điều kiện
//điểm tích lũy lớn hơn 100 và dịch vụ đăng ký có giá trị lớn hơn 180
let vipCustomer = [];
// dichVu.forEach(value => {
//     if (value['giaTri'] >= 180) {
//         vipCustomer = 
//         [...vipCustomer,...khachHang.filter(valueKH => valueKH['diemTichLuy'] > 100 && valueKH['dichVuDangKy'] === value['ten'])]
//     }
// });
vipCustomer = khachHang.filter(value =>
    value['diemTichLuy'] > 100 && dichVu.filter(valueDichVu => valueDichVu['giaTri'] > 180).filter(valueVIP => valueVIP['ten'] === value['dichVuDangKy'])
)
// console.log(vipCustomer);

//3.3 Hãy in ra danh sách khách hàng theo dịch vụ mà từng người đăng ký
const listedCustomerByService = serviceName => khachHang.filter(value => value['dichVuDangKy'] === serviceName);
let listCustomerServiceA = listedCustomerByService('A');
let listCustomerServiceB = listedCustomerByService('B');
let listCustomerServiceC = listedCustomerByService('C');
// console.log(listCustomerServiceA);
// console.log(listCustomerServiceB);
// console.log(listCustomerServiceC);

//3.4 Hãy tính số tiền của mỗi khách hàng cần phải trả và hiện tất cả dưới dạng 1 array object
//với công thức tiền khách hàng cần trả = 
//giaTri*khuyenMai + cứ khi giá trị dạt 100 thì phải cộng thêm giacuoc tương đương với địa chỉ được gửi đến
bienLai.forEach(value => {
    let phiShip = 0;
    for (let x of phiCuoc) {
        if (value['diachiden'] === x['tennuoc']) {
            phiShip = Math.floor(value['giaTri']/100) * x['giacuoc']
        }
    }
    value['phiShip'] = phiShip;
})
// console.log(bienLai);
let hoaDon = [];
khachHang.forEach(value => {
    let khuyenMai = 0;
    let tongTien = 0;
    for (let i = 0; i < dichVu.length; i++) {
        if (value['dichVuDangKy'] === dichVu[i]['ten']) {
            khuyenMai = dichVu[i]['khuyenMai'];
            break;
        }
    }
    for (let y of bienLai) {
        if (value['ten'].endsWith(y['ten'])) {
            tongTien += (y['giaTri'] * (1 - khuyenMai) + y['phiShip']);
        }
    }
    hoaDon.push({tenKhachHang: value['ten'], tienThu: tongTien});
})
// console.log(khachHang);
console.log(hoaDon);