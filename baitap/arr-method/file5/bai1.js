/* a. Tìm những người có giá trị biên lai hớn hơn 200.
b. Tìm thứ tự mua hàng của người tên "lam". 
c. Xuất ra những người có biên lai bằng nhau
d. Những người có biên lai hơn 200 thì thêm {rank:"Vip"}, còn lại thì thêm {rank:"normal"}
e. Sắp xếp danh sách giảm dần theo giá trị biên lai. */
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

//a,
var over200 = bienLai.filter(value => value['giaTri'] > 200);
// console.log(over200);

//b,
var test = [];
bienLai.forEach((value, index) => value['ten'] === 'lam' ? test.push(index) : test)
// console.log(test);

//c,
var phanLoai = {};
bienLai.forEach((value, index) => {
    if (phanLoai[value['giaTri']] == undefined) {
        phanLoai[value['giaTri']] = [index];
    } else {
        phanLoai[value['giaTri']].push(index)
    }
}) 
// console.log(phanLoai);
var ketQua = [];
for (let x in phanLoai) {
    if (phanLoai[x].length > 1) {
        ketQua.push([]);
        for (let k in phanLoai[x]) {
            ketQua[ketQua.length-1].push(bienLai[phanLoai[x][k]])
        }
    }
}
// console.log(ketQua);

//d,
bienLai.reduce((total, value) => {
    value['giaTri'] > 200 ? value['rank'] = 'VIP' : value['rank'] = 'normal'
    return value;
},0);
// console.log(bienLai);

bienLai.sort((a,b) => a['giaTri'] > b['giaTri'] ? -1 : 0)
console.log(bienLai);