let obj1 = [
    {ten: 'nam', soDiem: 10, diemVung: 1},
    {ten: 'linh', soDiem: 6, diemVung: 3},
    {ten: 'phan', soDiem: 7, diemVung: 2},
    {ten: 'pham', soDiem: 8, diemVung: 1},
];
let vung = [
    {vung: 1, cong: 0},
    {vung: 2, cong: 1},
    {vung: 3, cong: 2},
];
// Hãy tạo danh sách điểm thi sau khi cộng điểm vùng sao cho dữ liệu ở obj1 không thay đổi
let diemThi = obj1.map(hocSinh => {
    let diemHocSinh = {};
    diemHocSinh['ten'] = hocSinh['ten'];
    let diemVung;
    for (let i = 0; i < vung.length; i++) {
        if (vung[i]['vung'] === hocSinh['diemVung']) {
            diemVung = vung[i]['cong'];
        }
    }
    diemHocSinh['tongDiem'] = hocSinh['soDiem'] + diemVung;
    return diemHocSinh;
})
// console.log(diemThi);
// console.log(obj1);