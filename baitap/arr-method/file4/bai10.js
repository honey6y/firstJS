/* Hãy in ra danh sách các khách hàng có khả năng đăng ký thẻ VIP với điều kiện điểm tích lũy lớn hơn 100 và dịch vụ đăng ký có
giá trị lớn hơn 180

Hãy in ra danh sách khách hàng theo dịch vụ mà từng người đăng ký

Hãy tính giá tiền mà mỗi người thực chất cần phải trả với hóa đơn của mỗi người = giá trị tại bảng biên lai nhân với khuyến mãi ứng
với gói dịch vụ mà mỗi người đăng ký yêu cầu in ra dưới dạng là 1 array mới */
var khachHang = [
  { ten: "an", gioiTinh: "nam", diemTichLuy: 125, dichVuDangKy: "A" },
  { ten: "binh", gioiTinh: "nam", diemTichLuy: 30, dichVuDangKy: "B" },
  { ten: "hoang", gioiTinh: "nam", diemTichLuy: 51, dichVuDangKy: "C" },
  { ten: "van", gioiTinh: "nu", diemTichLuy: 75, dichVuDangKy: "D" },
  { ten: "thinh", gioiTinh: "nam", diemTichLuy: 25, dichVuDangKy: "D" },
  { ten: "lam", gioiTinh: "nam", diemTichLuy: 100, dichVuDangKy: "C" },
  { ten: "diep", gioiTinh: "nu", diemTichLuy: 162, dichVuDangKy: "B" },
  { ten: "huong", gioiTinh: "nu", diemTichLuy: 71, dichVuDangKy: "B" },
];

var dichVu = [
  { ten: "A", khuyenMai: 0.2, giaTri: 250 },
  { ten: "B", khuyenMai: 0.18, giaTri: 210 },
  { ten: "C", khuyenMai: 0.15, giaTri: 200 },
  { ten: "D", khuyenMai: 0.12, giaTri: 180 },
];

var bienLai = [
  { ten: "an", giaTri: 300 },
  { ten: "binh", giaTri: 180 },
  { ten: "hoang", giaTri: 170 },
  { ten: "van", giaTri: 100 },
  { ten: "lam", giaTri: 200 },
  { ten: "thinh", giaTri: 210 },
  { ten: "diep", giaTri: 100 },
  { ten: "huong", giaTri: 100 },
];

var vipCard = khachHang.filter(value => (value['diemTichLuy'] > 100 && value['dichVuDangKy'] !== 'D'));
// console.log(vipCard);
const filterService = (service, listCustomer) => {
    let list = listCustomer.filter(value => value['dichVuDangKy'] === service);
    return list;
}
var dichVuA = filterService(dichVu[0]['ten'], khachHang);
// console.log(dichVuA);
var dichVuB = filterService(dichVu[1]['ten'], khachHang);
// console.log(dichVuB);
var dichVuC = filterService(dichVu[2]['ten'], khachHang);
// console.log(dichVuC);
var dichVuD = filterService(dichVu[3]['ten'], khachHang);
// console.log(dichVuD);

var thanhToan = [];
// for (let i = 0; i < khachHang.length; i++) {
//     let dem = 0;
//     for (let j = 0; j < dichVu.length; j++) {
//         if (dichVu[j]['ten'] === khachHang[i]['dichVuDangKy']) {
//             dem = j;
//             break;
//         };
//     };
//     if (bienLai[i]['giaTri'] < dichVu[dem]['giaTri']) {
//         let thanhTien = bienLai[i]['giaTri']
//         thanhToan.push({ten:`${bienLai[i]['ten']}`, phaiTra:thanhTien})
//     } else {
//         let thanhTien = 0;
//         thanhTien = bienLai[i]['giaTri']*(1 - dichVu[dem]['khuyenMai']);
//         thanhToan.push({ten:`${bienLai[i]['ten']}`, phaiTra:thanhTien})
//     }
// }
for (let i = 0; i < khachHang.length; i++) {
    let checkBill = 0;
    // let checkCustomer = i;
    for (let j = 0; j < bienLai.length; j++) {
        if (bienLai[j]['ten'] === khachHang[i]['ten']) {
            checkBill = j;
            break;
        }
    }
    let checkService = 0;
    for (let k = 0; k < dichVu.length; k++) {
        if (dichVu[k]['ten'] === khachHang[i]['dichVuDangKy']) {
            checkService = k;
            break;
        }    
    }
    
    if (bienLai[checkBill]['giaTri'] < dichVu[checkService]['giaTri']) {
        let thanhTien = bienLai[checkBill]['giaTri']
        thanhToan.push({ten:`${bienLai[checkBill]['ten']}`, phaiTra:thanhTien})
    } else {
        let thanhTien = 0;
        thanhTien = bienLai[checkBill]['giaTri']*(1 - dichVu[checkService]['khuyenMai']);
        thanhToan.push({ten:`${bienLai[checkBill]['ten']}`, phaiTra:thanhTien})
    }
}

console.log(thanhToan);