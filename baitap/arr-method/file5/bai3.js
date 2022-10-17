/* a. In ra vị trí "xoài" ở mảng trên.
b. Sắp xếp các hóa quả theo số lượng.
c. Từ câu b, lấy ra vị trí của hoa của có số lượng lớn nhất
d. Tìm vị trí của hoa quả có số lượng 400 */
var hoaQua = [
    { ten: 'Xoài', sx: 'China', sl: '100' },
    { ten: 'Xoài', sx: 'VietNam', sl: '130' },
    { ten: 'Xoài', sx: 'ThaiLan', sl: '100' },
    { ten: 'Cam', sx: 'China', sl: '200' },
    { ten: 'Cam', sx: 'ThaiLan', sl: '150' },
    { ten: 'Nho', sx: 'VietNam', sl: '120' },
    { ten: 'Xoài', sx: 'ThaiLan', sl: '100' }
];

//a,
var xoaiIndex = [];
hoaQua.forEach((value,index) => value['ten'] === 'Xoài' ? xoaiIndex.push(index) : xoaiIndex)
// console.log(xoaiIndex);

//b,
var demHoaQua = {};
hoaQua.forEach(value => {
    if(!demHoaQua[value['ten']]) {
        demHoaQua[value['ten']] = parseInt(value['sl']);
    } else {
        demHoaQua[value['ten']] += parseInt(value['sl']);
    }
});
// console.log(demHoaQua);
var sapXepHoaQua = Object.entries(demHoaQua).sort(([,a],[,b]) => b-a)
    .reduce((total,[key,value]) => ({...total,[key]:value}),{})
// console.log(sapXepHoaQua);

//c,
var sapXepHoaQuaKey = Object.keys(sapXepHoaQua);
var maxAmountIndex = [];
hoaQua.forEach((value,index) => value['ten'] === sapXepHoaQuaKey[0] ? maxAmountIndex.push(index) : maxAmountIndex)
// console.log(maxAmountIndex);

//d,
//tim hoa qua hon 400
var hoaQuaHon400 = [];
for(let x in sapXepHoaQua) {
    if (sapXepHoaQua[x] > 400) {
        hoaQuaHon400.push(x)
    }
}
// console.log(hoaQuaHon400);
//tim vi tri hoa qua hon 400
var indexHoaQuaHon400 = [];
for (let y in hoaQuaHon400) {
    hoaQua.forEach((value,index) => value['ten'] === hoaQuaHon400[y] ? indexHoaQuaHon400.push(index) : indexHoaQuaHon400)
}
console.log(indexHoaQuaHon400);





// const maxSpeed = {
//     car: 300, 
//     bike: 60, 
//     motorbike: 200, 
//     airplane: 1000,
//     helicopter: 400, 
//     rocket: 8 * 60 * 60
// };
// const sortable = Object.entries(maxSpeed)    //object ra mảng các mảng con
//     .sort(([,a],[,b]) => a-b)                //sort theo giá trị của phần tử thứ 2 của mảng - giá trị tốc độ
//     .reduce((r, [k, v]) => ({ ...r, [k]: v }), {});      //reduce đẩy các mảng con vào trong 1 mảng, chuyển mảng con 2 giá trị [key,value] về dạng {key:value}
