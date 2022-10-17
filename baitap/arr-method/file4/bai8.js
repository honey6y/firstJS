/* Hãy tính liệu người mua hàng có đạt đủ điều kiện nhận ưu đãi hay không! Điều kiện để tính khách có nhận được ưu đãi
hay không điều kiện để nhận ưu đãi là khách phải đạt được đủ điểm định mức ứng với mỗi loại được khai báo ở array phanLoai và phải có số
lượng ít nhất bằng với số lượng của mỗi loại đặt ra.
Công thức tính dinhMuc = trongLuong*heSo */
var danhSach = [
    {ten: 'huy', phanLoai: 'A', giohang:{soLuong: 12, trongLuong: 12}},
    {ten: 'lam', phanLoai:'B', giohang:{soLuong: 8, trongLuong: 7}},
    {ten: 'tung', phanLoai:'C', giohang:{soLuong: 10, trongLuong: 8}},
    {ten: 'hai', phanLoai:'A', giohang:{soLuong: 8, trongLuong: 20}},
    {ten: 'vinh', phanLoai:'A', giohang:{soLuong: 7, trongLuong: 9}},
    {ten: 'nam', phanLoai:'C', giohang:{soLuong: 5, trongLuong: 8}},
    {ten: 'khanh', phanLoai:'B', giohang:{soLuong: 5, trongLuong: 10}},
];

var phanLoai = [
    {Loai: 'A', heSo: 2, dinhMuc:24, soLuong:10},
    {Loai: 'B', heSo: 3, dinhMuc:22, soLuong:7},
    {Loai: 'C', heSo: 1, dinhMuc:10, soLuong:9},
];

var ketQua = danhSach.map(value => {
    let dem = 0;
    for (let i = 0; i < phanLoai.length; i++) {
        if (phanLoai[i]['Loai'] === value['phanLoai']) {
            dem = i;
            break;
        }
    }
    let soLuong = value['giohang']['soLuong'];
    let trongLuong = value['giohang']['trongLuong'];
    let dinhMuc = phanLoai[dem]['dinhMuc'];
    let heSo = phanLoai[dem]['heSo'];
    if (soLuong < phanLoai[dem]['soLuong']) {
        value['uuDai'] = 'NO';
    } else if (trongLuong*heSo < dinhMuc) {
        value['uuDai'] = 'NO';
    } else {
        value['uuDai'] = 'YES'
    }
    return value;
});

console.log(ketQua);