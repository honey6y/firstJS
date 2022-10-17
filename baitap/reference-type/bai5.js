let nhanSU = [
    {ten: 'nguyen the su', phong: 'Hanh Chinh'}, 
    {ten: 'nguyen van duc', phong: 'coder'}, 
    {ten: 'lai the van', phong: 'coder'}, 
    {ten: 'le van luong', phong: 'coder'}, 
    {ten: 'ngo thi thao', phong: 'tester'}, 
    {ten: 'dao linh huong', phong: 'tester'}, 
    {ten: 'nguyen thi tra my', phong: 'Hanh Chinh'}, 
];
let chiTieu = [
    {tenPhong: 'Hanh Chinh', chiTieu: 1200, luongCB: 1800},
    {tenPhong: 'coder', chiTieu: 2000, luongCB: 2500},
    {tenPhong: 'tester', chiTieu: 1300, luongCB: 1500},
];
let baoCaoCV = [
    {tenNV: 'nguyen the su', soHT:300},
    {tenNV: 'nguyen van duc', soHT:500},
    {tenNV: 'nguyen the su', soHT:150},
    {tenNV: 'lai the van', soHT:300},
    {tenNV: 'nguyen the su', soHT:300},
    {tenNV: 'ngo thi thao', soHT:240},
    {tenNV: 'dao linh huong', soHT:500},
    {tenNV: 'nguyen thi tra my', soHT:120},
    {tenNV: 'dao linh huong', soHT:300},
    {tenNV: 'ngo thi thao', soHT:360},
    {tenNV: 'le van luong', soHT:400}
];

// Hãy dựa vào các bảng trên để tính lương cuối cùng của mỗi người trong array nhanSU
// biết nếu mà phòng ban của những 
// người đó hoàn thành được chỉ tiêu trong bảng chiTieu thì lương của mỗi người được cộng 10% lương 
// Nếu k hoàn thành chỉ tiêu thì bị trừ đi 2% lương
// Biết tổng chỉ tiêu của mỗi phòng đạt được bằng tổng số phần công việc của từng thành viên trong phòng đó đã thực hiện được khai báo 
// là soHT trong array baoCaoCV
let congViecNhanVien = baoCaoCV.reduce((thongKe, nhanVien) => {
    if (!thongKe[nhanVien['tenNV']]) {
        thongKe[nhanVien['tenNV']] = 0;
    }
    thongKe[nhanVien['tenNV']] += nhanVien['soHT'];
    return thongKe;
}, {})
// console.log(congViecNhanVien);
let congViecTungPhong = nhanSU.reduce((thongKe, nhanVien) => {
    if (!thongKe[nhanVien['phong']]) {
        thongKe[nhanVien['phong']] = 0;
    }
    thongKe[nhanVien['phong']] += congViecNhanVien[nhanVien['ten']];
    return thongKe;
}, {})
console.log(congViecTungPhong);
nhanSU.forEach(nhanVien => {
    let tongChiTieu = 0;
    let luongCoBan = 0;
    for (let i = 0; i < chiTieu.length; i++) {
        if (nhanVien['phong'] === chiTieu[i]['tenPhong']) {
            tongChiTieu = chiTieu[i]['chiTieu'];
            luongCoBan = chiTieu[i]['luongCB'];
            break;
        };
    };
    if (congViecTungPhong[nhanVien['phong']] >= tongChiTieu) {
        nhanVien['luong'] = Math.round(luongCoBan * 1.1);
    } else {
        nhanVien['luong'] = Math.round(luongCoBan * 0.98);
    }
})
// console.log(nhanSU);
