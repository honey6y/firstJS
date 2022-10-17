let lichBay = [
    { gioBay: '13:30', diemDen:'Nha Trang', maMayBay: 'GD178' },
    { gioBay: '12:30', diemDen:'Nha Trang', maMayBay: 'GD378' },
    { gioBay: '11:30', diemDen:'Nha Trang', maMayBay: 'AB123' },
    { gioBay: '11:30', diemDen:'Nam Dinh', maMayBay: 'BC452' },
    { gioBay: '14:30', diemDen:'TP.HCM', maMayBay: 'GD73' },
    { gioBay: '10:15', diemDen:'Hai Phong', maMayBay: 'FT351' },
    { gioBay: '10:15', diemDen:'Hai Phong', maMayBay: 'FT351' },
]

// 4.3 Hãy in ra thông các chuyến bay cùng địa điểm
// function lichBayMoi(){
//     var listTrungNhau = [];
//     for (let i = 0; i < lichBay.length; i++) {
//         if (listTrungNhau.includes(i)) {
//             continue;
//         }
//         let check = 0;
//         for (let j = i + 1; j < lichBay.length; j++) {
//             if (lichBay[i]['diemDen'] === lichBay[j]['diemDen']) {
//                 listTrungNhau.push(j)
//                 check++;
//             }
//         }
//         if (check) {
//             listTrungNhau.push(i)
//         }
//     }
//     let result = [];
//     listTrungNhau.forEach (value => result.push(lichBay[value]))
//     return result;
// }

let result = lichBay.reduce(function (r, a) {
    r[a.diemDen] = r[a.diemDen] || [];
    r[a.diemDen].push(a);
    return r;
}, {});

console.log(result);
// console.log(lichBayMoi(lichBay));
